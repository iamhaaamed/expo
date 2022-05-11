import { MButton, MIcon, MText, Spinner } from 'components/common';
import { COLORS, METRIC_SIZES, DEVICE_WIDTH } from 'constants/common';
import useTheme from 'hooks/useTheme';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import useUserSpeechProfile from 'store/speechProfile';
import { showMessage } from 'react-native-flash-message';
import AudioRecord from 'react-native-audio-record';
import { speechToText, verifyVoiceFile } from 'verifySpeech';
import { UploadFile } from 'utils/UploadFile';
import { reviewOptions } from 'utils/AudioHelper';
const SpeechToTextModal = ({ isLoadingProfile, onSendCommentPressed, closeModal }) => {
    const [loadingProfile, setLoadingProfile] = useState(isLoadingProfile);
    const [comment, setComment] = useState();
    const [commentUrl, setCommentUrl] = useState();
    const [isRecording, setIsRecording] = useState(false);
    const [isSendingComment, setIsSendingComment] = useState(false);
    const profileId = useUserSpeechProfile((state) => state.profileId);
    useEffect(() => {
        setLoadingProfile(isLoadingProfile);
        console.log("is loading profile" + loadingProfile)
    }, [isLoadingProfile])
    useEffect(() => {
        AudioRecord.init(reviewOptions);
    },[])
    const { COMMON } = useTheme();
    const StartRecord = async () => {
        try {
            AudioRecord.start();
            console.log('mm');
            showMessage({
                message: 'Recording started',
                type: 'success',
            });

        } catch (error) {
            console.log('audio file' + error);
        }
    };
    const StopRecord = async () => {
        try {
            let audioFile = await AudioRecord.stop();
            console.log('audio file' + JSON.stringify(audioFile));
            if (audioFile) ConvertSpeechToText(audioFile);
            showMessage({
                message: 'Recording stopped',
                type: 'success',
            });
        } catch (error) {
            console.log('audio file' + error);
        }
    };
    const ConvertSpeechToText = async (url) => {
        if (profileId) {
            setIsSendingComment(true);
            let verifyResponse = await verifyVoiceFile(profileId, url);
            if (verifyResponse?.recognitionResult != 'Accept') {
                showMessage({ message: 'Your voice file is not acceptable', type: 'danger' });
                setIsSendingComment(false);
                return;
            }
            // else {
            //     let { uploadedUrl } = await UploadFile({ uri: url, type: 'audio/wav' });
            //     if (!uploadedUrl) {
            //         showMessage({ message: 'Error! Try again.', type: 'danger' });
            //         setIsSendingComment(false);
            //         return;
            //     }
            //     else setCommentUrl(uploadedUrl);

            // }
        }
        else return;
        try {
            if (url) {
                let speechResponse = await speechToText(url);
                if (speechResponse?.RecognitionStatus === 'Success') {
                    setComment(speechResponse?.DisplayText);
                    setIsSendingComment(false);
                }
                else {
                    showMessage({
                        message: "Your voice was not recorded properly, Try again!",
                        type: 'warning'
                    });
                    setIsSendingComment(false);
                }
            }
        } catch (error) {
            showMessage({
                message: "Your voice was not recorded properly!",
                type: 'warning'
            });
            setIsSendingComment(false);
        }
    };
    return (
        <View style={styles.centeredView}>
            <View style={styles.modalContainer}>
                <View style={styles.modalHeader}>
                    <MText
                        containerStyle={{
                            flex: 5,
                            justifyContent: 'center',
                        }}
                        textStyle={[
                            COMMON.Title,
                            { textAlign: 'center', marginBottom: 0 },
                        ]}
                    >Record Voice</MText>
                </View>
                {(!loadingProfile || isSendingComment) && <Spinner />}
                <View style={COMMON.RowItemStart}>
                    <MButton
                        text='Start Record'
                        onPress={() => StartRecord()}
                        containerStyle={COMMON.TransparentButton}
                        textStyle={COMMON.TextsButtonBlack}
                        transparent
                    />
                    <MButton
                        text='Stop Record'
                        onPress={() => StopRecord()}
                        containerStyle={COMMON.TransparentButton}
                        textStyle={COMMON.TextsButtonBlack}
                        transparent
                    />
                </View>
                <MText style={{margin: METRIC_SIZES.small }} textStyle={COMMON.NormalText}>{comment}</MText>
                <View style={COMMON.RowItemStart}>
                <MButton
                    text={"Send"}
                    containerStyle={[COMMON.ButtonRectColor988,{flex: 1 }]}
                    textStyle={COMMON.TextsButton}
                    style={COMMON.ButtonRectColor988}
                    onPress={() => { onSendCommentPressed(comment); closeModal(); }}
                />
                <MButton
                    text={"Close"}
                    containerStyle={[COMMON.ButtonRectColor988,{flex: 1 }]}
                    textStyle={COMMON.TextsButton}
                    style={COMMON.ButtonRectColor988}
                    onPress={() => { closeModal(); }}
                />
                </View>
            </View>
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
        // alignItems: 'center',
        padding: METRIC_SIZES.small,
        borderRadius: METRIC_SIZES.small
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: "100%",
        backgroundColor: COLORS.Color304,
    },
    titleText: {
        alignSelf: 'center',
        marginTop: METRIC_SIZES.large
    }
});
export default SpeechToTextModal;

