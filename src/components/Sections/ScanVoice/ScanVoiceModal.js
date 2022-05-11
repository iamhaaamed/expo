import { MButton, MIcon, MText } from 'components/common';
import ConfigItem from 'components/elements/ConfigItem';
import { COLORS, METRIC_SIZES, DEVICE_WIDTH } from 'constants/common';
import useTheme from 'hooks/useTheme';
import React, { useState, useEffect } from 'react';
import { Modal, StyleSheet, useWindowDimensions, View, StatusBar, PermissionsAndroid, TouchableOpacity, FlatList } from 'react-native';
import { scale, verticalScale } from 'utils';
import AudioRecord from 'react-native-audio-record';
import { enrollVoiceFile, initSpeechService, removeProfileId } from 'verifySpeech';
import { showMessage } from 'react-native-flash-message';
import ResultModal from './ResultModal';

const ScanVoiceModal = ({ getVoiceFile, setScanVoiceVisible, setShowFailureModal, setShowSuccessModal }) => {
    const {
        LAYOUT,
        GUTTERS,
        TYPOGRAPHY,
        IMAGES,
        COMMON,
        CONSTANTS,
    } = useTheme();
    const [timerCount, setTimer] = useState(20);
    const [audioFile, setAudioFile] = useState();
    const [isRecording, setIsRecording] = useState(false);
    const [intervalCounter, setIntervalCounter] = useState();
    const [waitForScanning, setWaitForScanning] = useState(false);
    const options = {
        sampleRate: 16000,  // default 44100
        channels: 1,        // 1 or 2, default 1
        bitsPerSample: 16,  // 8 or 16, default 16
        audioSource: 6,     // android only (see below)
        wavFile: 'test.wav' // default 'audio.wav'
    };
    useEffect(() => {
        getVoiceFile(audioFile);
    }, [audioFile])
    const StartRecord = async () => {
        try {
            setTimer(20);
            AudioRecord.start();
            setIsRecording(true);
            let interval = setInterval(() => {
                setTimer(lastTimerCount => {
                    if (lastTimerCount === 0) {
                        StopRecord();
                        clearInterval(interval);
                        return 0;
                    }
                    return lastTimerCount - 1
                });
            }, 1000) //each count lasts for a second
            setIntervalCounter(interval);
        } catch (error) {
            console.log("err" + error)
        }
    }
    const ResetRecord = async () => {
        if (intervalCounter) {
            console.log("intervalCounter")
            await AudioRecord.stop();
            clearInterval(intervalCounter);
            setAudioFile(null);
            setTimer(20);
            setIsRecording(false);
        }
    }
    const StopRecord = async () => {
        let audioFile = await AudioRecord.stop();
        setIsRecording(false);
        console.log("audio file" + JSON.stringify(audioFile));
        setAudioFile(audioFile);
        scanVoice();
    }
    const scanVoice = async () => {
        try {
            console.log("scan voice starting ....");
            let profileId = await initSpeechService();
            if (profileId) {
                let enrollResponse = await enrollVoiceFile(profileId, audioFile);
                if (enrollResponse?.remainingEnrollmentsSpeechLength &&
                    enrollResponse.remainingEnrollmentsSpeechLength === 0
                ) {
                    await removeProfileId(profileId);
                    setShowSuccessModal(true);
                }
                else if (enrollResponse?.remainingEnrollmentsSpeechLength &&
                    enrollResponse.remainingEnrollmentsSpeechLength != 0) {
                    await removeProfileId(profileId);
                    setShowFailureModal(true);
                    showMessage({
                        message: 'Remaining length ' + enrollResponse.remainingEnrollmentsSpeechLength,
                        type: 'danger'
                    })
                }
                else if (enrollResponse?.error) {
                    showMessage({
                        message: 'Error in Recorded file',
                        type: 'danger'
                    })
                    setShowFailureModal(true);
                }
            }
        } catch (error) {
            console.log("err" + error);
        }
    }
    return (
        <View>
            <View style={styles.modalHeader}>
                <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => {
                        setScanVoiceVisible(false);
                        console.log('Modal');
                    }}>
                    <MIcon
                        name="chevron-left"
                        color={COLORS.black}
                        size={scale(36)}
                    />
                </TouchableOpacity>
                <MText
                    containerStyle={{
                        flex: 5,
                        justifyContent: 'center',
                    }}
                    textStyle={[
                        COMMON.Title,
                        { textAlign: 'center', marginBottom: 0 },
                    ]}
                >Scan Your Voice</MText>
            </View>
            <MText textStyle={COMMON.NormalText}>Please say the following words as much as possible in twenty seconds so that your voice is well scanned</MText>
            <View style={[COMMON.RowItemCenter, { paddingVertical: METRIC_SIZES.small }]}>
                <MButton text={(isRecording || timerCount === 0) ? timerCount + ' S' : "Start"}
                    containerStyle={COMMON.TransparentButton}
                    textStyle={COMMON.TextsButtonBlack}
                    transparent
                    disabled={isRecording && !audioFile ? true : false}
                    onPress={() => StartRecord()}
                />
                <MButton text={"Reset"}
                    containerStyle={COMMON.TransparentButton}
                    textStyle={COMMON.TextsButtonBlack}
                    transparent
                    onPress={() => { ResetRecord(); }}
                />
            </View>
            <FlatList
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                data={["Hotel", "Scan", "Service", "Good", "Necessary", "Social", "Visa", "Bulb", "Telephone", "Secre", "Asked", "Safe"]}
                numColumns={4}
                renderItem={({ item }) => (
                    <View style={{ width: DEVICE_WIDTH * 0.18, marginVertical: METRIC_SIZES.tiny, marginLeft: METRIC_SIZES.tiny, borderWidth: 1, borderColor: COLORS.Color780, borderRadius: METRIC_SIZES.small, paddingVertical: METRIC_SIZES.small }}>
                        <MText containerStyle={{ alignSelf: 'center' }}>{item}</MText>
                    </View>
                )}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalContainer: {
        alignSelf: "center",
        width: DEVICE_WIDTH * 0.9,
        backgroundColor: COLORS.Color304,
        alignItems: 'center',
        padding: METRIC_SIZES.small,
        borderRadius: METRIC_SIZES.small
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: "100%",
    },
});
export default ScanVoiceModal;
