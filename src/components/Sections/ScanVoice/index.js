import { MButton, MIcon, MText, Spinner } from 'components/common';
import ConfigItem from 'components/elements/ConfigItem';
import { COLORS, DEVICE_WIDTH, METRIC_SIZES } from 'constants/common';
import useTheme from 'hooks/useTheme';
import React, { useEffect, useState } from 'react';
import {
    FlatList,
    Modal,
    PermissionsAndroid,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    useWindowDimensions,
    View,
} from 'react-native';
import AudioRecord from 'react-native-audio-record';
import { showMessage } from 'react-native-flash-message';
import RNFetchBlob from 'rn-fetch-blob';
import useUserSpeechProfile from 'store/speechProfile';
import { scale, StoreData } from 'utils';
import {
    enrollVoiceFile,
    initSpeechService,
    removeProfileId,
} from 'verifySpeech';
import ResultModal from './ResultModal';

const ScanVoice = ({ getVoiceFile }) => {
    const {
        LAYOUT,
        GUTTERS,
        TYPOGRAPHY,
        IMAGES,
        COMMON,
        CONSTANTS,
    } = useTheme();
    const [scanVoiceVisible, setScanVoiceVisible] = useState(false);
    const [timerCount, setTimer] = useState(25);
    const [audioFile, setAudioFile] = useState();
    const [finalAudioFile, setFinalAudioFile] = useState();
    const [isRecording, setIsRecording] = useState(false);
    const [intervalCounter, setIntervalCounter] = useState();
    const [waitForScanning, setWaitForScanning] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showFailureModal, setShowFailureModal] = useState(false);
    const setProfileId = useUserSpeechProfile((state) => state.setProfileId);
    const options = {
        sampleRate: 16000, // default 44100
        channels: 1, // 1 or 2, default 1
        bitsPerSample: 16, // 8 or 16, default 16
        audioSource: 6, // android only (see below)
        wavFile: 'test.wav', // default 'audio.wav'
    };
    useEffect(() => {
        async function init() {
            try {
                await checkPerms();
                try {
                    AudioRecord.init(options);
                } catch (error) {
                    //alert(error)
                    console.log('errr' + error);
                }
            } catch (error) {
                console.log('err' + error);
            }
        }
        init();
        return () => {
            console.log('This will be logged on unmount');
        };
    }, []);
    const checkPerms = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
            );
            if (granted != PermissionsAndroid.RESULTS.GRANTED) {
                alert('Location permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    }
    const StartRecord = async () => {
        try {
            setTimer(25);
            AudioRecord.start();
            setIsRecording(true);
            let interval = setInterval(() => {
                setTimer((lastTimerCount) => {
                    if (lastTimerCount === 0) {
                        StopRecord();
                        clearInterval(interval);
                        return 0;
                    }
                    return lastTimerCount - 1;
                });
            }, 1000); //each count lasts for a second
            setIntervalCounter(interval);
        } catch (error) {
            console.log('err***' + error);
        }
    };
    const ResetRecord = async () => {
        console.log('intervalCounter**');
        if (intervalCounter) {
            try {
                console.log('intervalCounter');
                clearInterval(intervalCounter);
                setIntervalCounter(undefined);
                setAudioFile(null);
                getVoiceFile(null);
                setTimer(25);
                setIsRecording(false);
                setWaitForScanning(false);
                await AudioRecord.stop();
            } catch (error) {
                console.log('reset error' + error);
            }
        }
    };
    const closeModal = async (type = 'None') => {
        setIsRecording(false);
        setShowSuccessModal(false);
        setShowFailureModal(false);
        setWaitForScanning(false);
        setTimer(25);
        if (type === 'None') setScanVoiceVisible(false);
        try {
            await AudioRecord.stop();
            if (intervalCounter) {
                clearInterval(intervalCounter);
                setIntervalCounter(undefined);
            }
        } catch (error) {}
    };
    const StopRecord = async () => {
        let audioFile = await AudioRecord.stop();
        setIsRecording(false);
        console.log('audio file' + JSON.stringify(audioFile));
        setAudioFile(audioFile);
        scanVoice(audioFile);
    };
    const scanVoice = async (audioFile) => {
        try {
            setWaitForScanning(true);
            console.log('scan voice starting ....');
            let profileId = await initSpeechService();
            if (profileId) {
                let enrollResponse = await enrollVoiceFile(
                    profileId,
                    audioFile,
                );
                console.log(
                    'enrollResponse  ' + JSON.stringify(enrollResponse),
                );
                if (enrollResponse?.enrollmentStatus === 'Enrolled') {
                    console.log('hhhh');
                    try {
                        // await StoreData('PROFILE_ID', profileId + '');
                        setProfileId(profileId);
                        storeScannedVoice();
                        //console.log(JSON.stringify(await removeProfileId(profileId)));
                        setWaitForScanning(false);
                        setShowSuccessModal(true);
                    } catch (err) {
                        console.log('Errorddddd' + err);
                    }
                } else if (
                    enrollResponse?.remainingEnrollmentsSpeechLength &&
                    enrollResponse.remainingEnrollmentsSpeechLength != 0
                ) {
                    await removeProfileId(profileId);
                    setShowFailureModal(true);
                    setWaitForScanning(false);
                    showMessage({
                        message:
                            'Remaining length ' +
                            enrollResponse.remainingEnrollmentsSpeechLength,
                        type: 'danger',
                    });
                } else if (enrollResponse?.error) {
                    showMessage({
                        message: 'Error in Recorded file',
                        type: 'danger',
                    });
                    setShowFailureModal(true);
                    setWaitForScanning(false);
                }
            }
        } catch (error) {
            console.log('err---' + error);
            setShowFailureModal(true);
        }
    };
    const storeScannedVoice = async () => {
        let destAudio = audioFile;
        destAudio = destAudio.replace('test.wav', 'scanvoice.wav');
        RNFetchBlob.fs
            .cp(audioFile, destAudio)
            .then(async (result) => {
                setFinalAudioFile(destAudio);
                await StoreData('SCAN_VOICE_PATH', destAudio);
            })
            .catch((err) => {
                console.log('error is ' + JSON.stringify(err));
            });
    };
    return (
        <View>
            <ConfigItem
                text="Scan Your Voice"
                onPress={() => setScanVoiceVisible(true)}
            />
            <View
                style={[
                    COMMON.flexRow,
                    { width: DEVICE_WIDTH * 0.9, alignItems: 'center' },
                ]}>
                <MIcon
                    name={'information'}
                    color={COLORS.Color988}
                    style={styles.iconContainer}
                />
                <MText style={{ marginHorizontal: 10, alignSelf: 'center' }}>
                    Your Voice Needs To Be Scanned To Communicate More
                    Effectively With Us And Ensure That Your Comments Are
                    Recorded Correctly.
                </MText>
            </View>
            <Modal
                backdropOpacity={0.8}
                statusBarTranslucent
                transparent
                deviceHeight={
                    Platform.OS === 'ios'
                        ? useWindowDimensions().height
                        : useWindowDimensions().height +
                          StatusBar.currentHeight * 2
                }
                visible={scanVoiceVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalContainer}>
                        {showSuccessModal && (
                            <ResultModal
                                type="SUCCESS"
                                closeModal={() => closeModal()}
                                onDonePressed={() =>
                                    getVoiceFile(finalAudioFile)
                                }
                            />
                        )}
                        {showFailureModal && (
                            <ResultModal
                                type="FAIL"
                                closeModal={() => closeModal('Try')}
                            />
                        )}
                        {
                            !showSuccessModal && !showFailureModal && (
                                <View style={styles.modalContainer}>
                                    <View style={styles.modalHeader}>
                                        <TouchableOpacity
                                            style={{ flex: 1 }}
                                            onPress={() => {
                                                closeModal();
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
                                                {
                                                    textAlign: 'center',
                                                    marginBottom: 0,
                                                },
                                            ]}>
                                            Scan Your Voice
                                        </MText>
                                        <View style={{ flex: 1 }} />
                                    </View>
                                    <MText textStyle={COMMON.NormalText}>
                                        Please say the following words as much
                                        as possible in twenty seconds so that
                                        your voice is well scanned
                                    </MText>
                                    <View
                                        style={[
                                            COMMON.RowItemCenter,
                                            {
                                                paddingVertical:
                                                    METRIC_SIZES.small,
                                            },
                                        ]}>
                                        <MButton
                                            text={
                                                isRecording || timerCount === 0
                                                    ? timerCount + ' S'
                                                    : 'Start'
                                            }
                                            containerStyle={
                                                COMMON.TransparentButton
                                            }
                                            textStyle={COMMON.TextsButtonBlack}
                                            transparent
                                            disabled={
                                                isRecording && !audioFile
                                                    ? true
                                                    : false
                                            }
                                            onPress={() => StartRecord()}
                                        />
                                        <MButton
                                            text={'Reset'}
                                            containerStyle={
                                                COMMON.TransparentButton
                                            }
                                            textStyle={COMMON.TextsButtonBlack}
                                            transparent
                                            onPress={() => {
                                                ResetRecord();
                                            }}
                                        />
                                    </View>
                                    {waitForScanning && (
                                        <Spinner color="green" />
                                    )}
                                    <FlatList
                                        columnWrapperStyle={{
                                            justifyContent: 'space-between',
                                        }}
                                        data={[
                                            'Hotel',
                                            'Scan',
                                            'Service',
                                            'Good',
                                            'Necessary',
                                            'Social',
                                            'Visa',
                                            'Bulb',
                                            'Telephone',
                                            'Secre',
                                            'Asked',
                                            'Safe',
                                        ]}
                                        numColumns={4}
                                        renderItem={({ item }) => (
                                            <View
                                                style={{
                                                    width: DEVICE_WIDTH * 0.18,
                                                    marginVertical:
                                                        METRIC_SIZES.tiny,
                                                    marginLeft:
                                                        METRIC_SIZES.tiny,
                                                    borderWidth: 1,
                                                    borderColor:
                                                        COLORS.Color780,
                                                    borderRadius:
                                                        METRIC_SIZES.small,
                                                    paddingVertical:
                                                        METRIC_SIZES.small,
                                                }}>
                                                <MText
                                                    containerStyle={{
                                                        alignSelf: 'center',
                                                    }}>
                                                    {item}
                                                </MText>
                                            </View>
                                        )}
                                    />
                                </View>
                            )
                            // <ScanVoiceModal/>
                        }
                    </View>
                </View>
            </Modal>
        </View>
    );
};
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContainer: {
        alignSelf: 'center',
        width: DEVICE_WIDTH * 0.9,
        backgroundColor: COLORS.Color304,
        // alignItems: 'center',
        padding: METRIC_SIZES.small,
        borderRadius: METRIC_SIZES.small,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },
});
export default ScanVoice;
