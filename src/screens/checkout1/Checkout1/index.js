import { Container, MInput, MText, Spinner } from 'components/common';
import { createScreen } from 'components/elements';
import CheckoutCommentList from 'components/Sections/CheckoutCommentList';
import RateCheckout from 'components/Sections/RateCheckout';
import SpeechToTextModal from 'components/Sections/SpeechToTextModal';
import { COLORS, METRIC_SIZES } from 'constants/common';
import { insertCommentForRoom, insertRateForRoom } from 'hooks/Home';
import useTheme from 'hooks/useTheme';
import React, { useEffect, useState } from 'react';
import {
    Modal,
    Platform,
    ScrollView,
    StatusBar,
    StyleSheet,
    useWindowDimensions,
    View,
} from 'react-native';
import AudioRecord from 'react-native-audio-record';
import { showMessage } from 'react-native-flash-message';
import { AirbnbRating } from 'react-native-ratings';
import { MaterialIcons } from 'react-native-vector-icons/MaterialIcons';
import useUserSpeechProfile from 'store/speechProfile';
import { GetData } from 'utils';
import { CheckPermission, reviewOptions } from 'utils/AudioHelper';
import { DownloadFile } from 'utils/DownloadFile';
import { UploadFile } from 'utils/UploadFile';
import {
    enrollVoiceFile,
    initSpeechService,
    removeProfileId,
    speechToText,
    verifyVoiceFile,
} from 'verifySpeech';
const Checkout1 = createScreen(
    ({ route }) => {
        const { COMMON } = useTheme();
        const [listLoading, setListLoading] = useState(false);
        const [isModalVisible, setIsModalVisible] = useState(false);
        const [profileIdLoaded, setProfileIdLoaded] = useState(false);
        const [userRate, setUserRate] = useState(0);
        const [userComment, setUserComment] = useState('');
        const [isVoice, setIsVoice] = useState(false);
        const [isSendingComment, setIsSendingComment] = useState(false);
        const [roomId, setRoomId] = useState(route?.params?.roomId);
        const [commentUrl, setCommentUrl] = useState(null);
        const [isRecording, setIsRecording] = useState(false);
        const [textToSpeech, setTextToSpeech] = useState(false);
        const {
            isLoading: rateLoading,
            mutate: rateMutate,
        } = insertRateForRoom();
        const {
            isLoading: commentLoading,
            mutate: commentMutate,
        } = insertCommentForRoom();
        const profileId = useUserSpeechProfile((state) => state.profileId);
        const setProfileId = useUserSpeechProfile(
            (state) => state.setProfileId,
        );
        const finishRating = async (count) => {
            if (count > 0) {
                setUserRate(count);
                let userInfo = await GetData('USER_INFO');
                if (userInfo?.id && roomId) {
                    let rateInput = {
                        userId: userInfo.id,
                        roomId: roomId,
                        createAt: new Date(),
                        rate: userRate,
                    };
                    console.log('rateInput' + JSON.stringify(rateInput));
                    rateMutate(
                        { ratingInput: rateInput },
                        {
                            onSuccess: (data) => {
                                console.log(
                                    'rate response: ' + JSON.stringify(data),
                                );
                                if (
                                    data?.hotel_insertRateForRoom?.status ===
                                    'SUCCESS'
                                ) {
                                    showMessage({
                                        message: 'Your rate has been submitted',
                                        type: 'success',
                                    });
                                } else
                                    showMessage({
                                        message: 'Failed to submit',
                                        type: 'warning',
                                    });
                            },
                        },
                    );
                }
            }
        };
        const onSendComment = async (
            commentText = userComment,
            isVoice = false,
        ) => {
            console.log('comment to send' + commentText);
            let userInfo = await GetData('USER_INFO');
            if (userInfo?.id && commentText && commentText.length > 2) {
                let commentInput = {
                    userId: userInfo.id,
                    roomId: roomId,
                    createAt: new Date(),
                    body: commentText,
                    isVoice: isVoice,
                    commentStatus: 'WAITING',
                    voiceUrl: isVoice ? commentUrl : null,
                };
                console.log('commentInput' + JSON.stringify(commentInput));
                commentMutate(
                    { commentInput: commentInput },
                    {
                        onSuccess: (data) => {
                            setIsSendingComment(false);
                            console.log(
                                'rate response: ' + JSON.stringify(data),
                            );
                            if (
                                data?.hotel_insertCommentForRoom?.status ===
                                'SUCCESS'
                            ) {
                                showMessage({
                                    message: 'Your comment has been submitted',
                                    type: 'success',
                                    hideStatusBar: false,
                                    statusBarHeight: StatusBar.currentHeight,
                                });
                                setUserComment('');
                            } else
                                showMessage({
                                    message: 'Failed to submit',
                                    type: 'warning',
                                });
                        },
                        onError: (err) => {
                            setIsSendingComment(false);
                            console.log('Error', JSON.stringify(err));
                        },
                    },
                );
            }
        };
        useEffect(() => {
            console.log('Profile id is ' + profileId);
            if (!profileId) PrepareRequirementForViceScan();
            else setProfileIdLoaded(true);
        }, []);
        const PrepareRequirementForViceScan = async () => {
            let scanVoiceUrl = await GetData('SCAN_VOICE_PATH');
            if (!scanVoiceUrl) {
                let user = await GetData('USER_INFO');
                let voicePath;
                if (user?.scanVoice)
                    voicePath = await DownloadFile(user?.scanVoice);
                if (voicePath?.path) scanVoiceUrl = voicePath.path;
            }
            console.log('Scan voice url' + scanVoiceUrl);
            if (scanVoiceUrl) {
                let profileId = await initSpeechService();
                if (profileId) {
                    let enrollResponse = await enrollVoiceFile(
                        profileId,
                        scanVoiceUrl,
                    );
                    console.log(
                        'enrollResponse  ' + JSON.stringify(enrollResponse),
                    );
                    if (enrollResponse?.enrollmentStatus === 'Enrolled') {
                        setProfileId(profileId);
                        setProfileIdLoaded(true);
                    } else if (
                        enrollResponse?.remainingEnrollmentsSpeechLength &&
                        enrollResponse.remainingEnrollmentsSpeechLength != 0
                    ) {
                        await removeProfileId(profileId);
                    } else if (enrollResponse?.error) {
                        showMessage({
                            message: 'Error in Recorded file',
                            type: 'danger',
                        });
                    }
                }
            } else {
                showMessage({
                    message: 'It seems your voice has not been scanned',
                    type: 'danger',
                });
            }
        };
        const StartRecord = async () => {
            setIsModalVisible(true);
            // try {
            //     if (!isRecording) {
            //         AudioRecord.start();
            //         console.log('mm');
            //         setIsRecording(true);
            //         showMessage({
            //             message: 'Recording started',
            //             type: 'success',
            //         });
            //     } else {
            //         let audioFile = await AudioRecord.stop();
            //         console.log('audio file' + JSON.stringify(audioFile));
            //         if (audioFile) ConvertSpeechToText(audioFile);
            //         showMessage({
            //             message: 'Recording stopped',
            //             type: 'success',
            //         });
            //         setIsRecording(false);
            //     }
            // } catch (error) {
            //     console.log('audio file' + error);
            // }
        };
        const ConvertSpeechToText = async (url) => {
            if (profileId) {
                setIsSendingComment(true);
                let verifyResponse = await verifyVoiceFile(profileId, url);
                if (verifyResponse?.recognitionResult != 'Accept') {
                    showMessage({
                        message: 'Your voice file is not acceptable',
                        type: 'danger',
                    });
                    setIsSendingComment(false);
                    return;
                } else {
                    let { uploadedUrl } = await UploadFile({
                        uri: url,
                        type: 'audio/wav',
                    });
                    if (!uploadedUrl) {
                        showMessage({
                            message: 'Error! Try again.',
                            type: 'danger',
                        });
                        setIsSendingComment(false);
                        return;
                    } else setCommentUrl(uploadedUrl);
                }
            } else return;
            try {
                if (url) {
                    setTextToSpeech(true);
                    let speechResponse = await speechToText(url);
                    if (speechResponse?.RecognitionStatus === 'Success') {
                        setIsVoice(true);
                        setUserComment(speechResponse?.DisplayText);
                        onSendComment(speechResponse?.DisplayText, true);
                    } else {
                        showMessage({
                            message:
                                'Your voice was not recorded properly, Try again!',
                            type: 'warning',
                        });
                        setIsSendingComment(false);
                    }
                    setTextToSpeech(false);
                }
            } catch (error) {
                showMessage({
                    message: 'Your voice was not recorded properly!',
                    type: 'warning',
                });
                setTextToSpeech(false);
                setIsSendingComment(false);
            }
        };
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
        return (
            <Container
                style={styles.ProfileSettingPaymentInformation}
                loadingOnPage={
                    rateLoading ||
                    commentLoading ||
                    textToSpeech ||
                    isSendingComment ||
                    listLoading
                }>
                <ScrollView>
                    <View style={COMMON.MainView}>
                        <RateCheckout items={route?.params?.rates} />
                        <View style={COMMON.LineSectionTop047} />
                        <View
                            style={[
                                COMMON.RowItemCenter,
                                { marginVertical: METRIC_SIZES.small },
                            ]}>
                            <MText textStyle={COMMON.NormalText}>
                                Tap to Write:
                            </MText>
                            <View style={{ flex: 1 }} />
                            <AirbnbRating
                                defaultRating={5}
                                ratingCount={5}
                                size={18}
                                isDisabled={roomId ? false : true}
                                showRating={false}
                                onFinishRating={(value) => finishRating(value)}
                                reviews={['', '', '', '', '', '']}
                                selectedColor={COLORS.Color988}
                                unSelectedColor={COLORS.Color780}
                            />
                        </View>
                        {isRecording && (
                            <Spinner
                                withText={false}
                                style={{ marginVertical: '1%' }}
                            />
                        )}
                        <MInput
                            containerStyle={{
                                borderWidth: 1,
                                borderColor: COLORS.Color707,
                                borderRadius: METRIC_SIZES.small,
                                marginTop: METRIC_SIZES.small,
                                marginBottom: METRIC_SIZES.large,
                            }}
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
                                color: COLORS.Color780,
                                onPress: StartRecord,
                            }}
                        />
                        <CheckoutCommentList
                            roomId={roomId}
                            style={{ flex: 1 }}
                            setLoading={setListLoading}
                        />
                        {/* <FlatList
                            data={[{ id: 1 }, { id: 2 }]}
                            renderItem={({ item }) => (
                                <ReviewItem item={item} />
                            )}
                        /> */}
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
                        visible={isModalVisible}>
                        <SpeechToTextModal
                            isLoadingProfile={profileIdLoaded}
                            profileId={profileId}
                            onSendCommentPressed={(value) =>
                                onSendComment(value, true)
                            }
                            closeModal={() => setIsModalVisible(false)}
                        />
                    </Modal>
                </ScrollView>
                <View style={{ flex: 1 }} />
                {roomId && (
                    <View
                        style={[
                            COMMON.RowItemStart,
                            COMMON.MainView,
                            {
                                borderColor: COLORS.borderColor,
                                borderWidth: 1,
                            },
                        ]}>
                        <MInput
                            placeholder="Write your comment"
                            value={userComment}
                            onChangeText={setUserComment}
                            containerStyle={{
                                flex: 1,
                                borderRadius: METRIC_SIZES.tiny,
                            }}
                            iconRight={{
                                name: 'send',
                                color: COLORS.Color780,
                                onPress: () =>
                                    onSendComment(userComment, false),
                            }}
                        />
                    </View>
                )}
            </Container>
        );
    },
    {
        scrollView: false,
        paddingBottom: false,
        paddingTop: false,
    },
);
const styles = StyleSheet.create({
    ProfileSettingPaymentInformation: {
        backgroundColor: COLORS.Color304,
        flex: 1,
    },
});
export default Checkout1;
