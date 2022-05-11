import { MInput } from 'components/common';
import { COLORS, METRIC_SIZES } from 'constants/common';
import React, { useEffect, useState, useMemo, memo } from 'react';
import { StyleSheet } from 'react-native';
import AudioRecord from 'react-native-audio-record';
import { showMessage } from 'react-native-flash-message';
import { MaterialIcons } from 'react-native-vector-icons/MaterialIcons';
import useUserSpeechProfile from 'store/speechProfile';
import { GetData } from 'utils';
import { CheckPermission, reviewOptions } from 'utils/AudioHelper';
import {
    PrepareRequirementForViceScan,
    speechToText,
    verifyVoiceFile,
} from 'verifySpeech';

const SearchVoiceBox = ({
    needVerify = false,
    isConverting,
    onSpeechConverted,
    setVerifyResponse,
    style,
    navigation,
    txt,
}) => {
    console.log(txt);
    const [isRecording, setIsRecording] = useState(false);
    const [isSendingComment, setIsSendingComment] = useState(false);
    const [isProfileIdLoading, setIsProfileIdLoading] = useState(false);
    const profileId = useUserSpeechProfile((state) => state.profileId);
    const setProfileId = useUserSpeechProfile((state) => state.setProfileId);
    useEffect(() => {
        if (isProfileIdLoading || isSendingComment) isConverting(true);
        else isConverting(false);
    }, [isProfileIdLoading, isSendingComment]);
    // useEffect(() => {
    //     (async () => {
    //         if (needVerify)
    //             if (!profileId) {
    //                 setIsProfileIdLoading(true);
    //                 const scanVoiceUrl = await GetData('SCAN_VOICE_PATH');
    //                 console.log('profile id isss' + scanVoiceUrl);
    //                 let tempProfileId = await PrepareRequirementForViceScan();
    //                 console.log('profile id is' + tempProfileId);
    //                 if (tempProfileId) {
    //                     setProfileId(tempProfileId);
    //                     setIsProfileIdLoading(false);
    //                 } else {
    //                     setIsProfileIdLoading(false);
    //                 }
    //             } else setIsProfileIdLoading(false);
    //     })();
    // }, []);
    useEffect(() => {
        (async () => {
            await CheckPermission();
            try {
                AudioRecord.init(reviewOptions);
            } catch (error) {
                //alert(error)
                console.log('errr' + error);
            }
        })();
    }, []);
    const onMicPressed = () => {
        if (isRecording) StopRecord();
        else StartRecord();
    };
    const StartRecord = async () => {
        try {
            console.log('record start');
            AudioRecord.start();
            setIsRecording(true);
            console.log('start2');
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
            console.log('record stop');

            let audioFile = await AudioRecord.stop();

            console.log('record after stop');

            setIsRecording(false);
            console.log('audio file' + JSON.stringify(audioFile));
            if (audioFile) {
                if (needVerify) VerifySpeaker(audioFile);
                else ConvertSpeechToText(audioFile);
            }
            showMessage({
                message: 'Recording stopped',
                type: 'success',
            });
        } catch (error) {
            console.log('audio file' + error);
        }
    };
    const VerifySpeaker = async (url) => {
        let verifyResponse = await verifyVoiceFile(profileId, url);
        if (verifyResponse?.recognitionResult != 'Accept') {
            setVerifyResponse(false);
            showMessage({
                message: 'Your voice file is not acceptable',
                type: 'danger',
            });
            setIsSendingComment(false);
            return;
        } else {
            ConvertSpeechToText(url);
            setVerifyResponse(true);
        }
    };
    const ConvertSpeechToText = async (url) => {
        console.log('xxxxxxxxxx');
        try {
            if (url) {
                setIsSendingComment(true);
                let speechResponse = await speechToText(url);
                console.log('xxxxxxxxxx' + JSON.stringify(speechResponse));
                if (speechResponse?.RecognitionStatus === 'Success') {
                    //setComment(speechResponse?.DisplayText);
                    onSpeechConverted(speechResponse?.DisplayText);
                    setIsSendingComment(false);
                    navigation.navigate('ChatBotPage', {
                        firstText: speechResponse?.DisplayText,
                    });
                } else {
                    showMessage({
                        message:
                            'Your voice was not recorded properly, Try again!!!',
                        type: 'warning',
                    });
                    setIsSendingComment(false);
                }
            }
        } catch (error) {
            showMessage({
                message: 'Your voice was not recorded properly!',
                type: 'warning',
            });
            console.log('eezzz' + error);
            setIsSendingComment(false);
        }
    };
    return (
        <MInput
            containerStyle={[
                {
                    marginHorizontal: '3%',
                    borderWidth: 1,
                    borderColor: COLORS.Color707,
                    borderRadius: METRIC_SIZES.small,
                    marginTop: '-3%',
                    marginBottom: METRIC_SIZES.large,
                },
                style,
            ]}
            editable={false}
            placeholder="Search"
            iconLeft={{
                name: 'search',
                size: 30,
                color: COLORS.Color780,
                Component: MaterialIcons,
            }}
            iconRight={{
                name: 'microphone',
                size: 32,
                color: COLORS.Color988,
                onPress: onMicPressed,
            }}
        />
    );
};
const styles = StyleSheet.create({
    SearchVoiceBox: {
        backgroundColor: COLORS.Color304,
        height: '100%',
    },
});
export default memo(SearchVoiceBox);
