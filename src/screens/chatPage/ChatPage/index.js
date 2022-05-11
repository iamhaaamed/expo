import React, { useCallback, useEffect, useState } from 'react';
import { Container, MInput } from 'components/common';
import { scale, verticalScale, GetData } from 'utils';

import { Bubble, GiftedChat } from 'react-native-gifted-chat';
import { COLORS, METRIC_SIZES } from 'constants/common';
import { mutateInsertMessage } from 'hooks/Chat';
import { MaterialIcons } from 'react-native-vector-icons/MaterialIcons';

// import { DirectLine } from 'botframework-directlinejs';
import { View, StyleSheet } from 'react-native';
// const directLine = new DirectLine({
//     secret: 'yv4oJpBHBMk.Px5NDYymTr02dCEiBT6exb2PztOjZQVGO9i_NXuHn_I',
// });
import { useGetMessages } from 'hooks/Chat';
import useUserSpeechProfile from 'store/speechProfile';
import { PrepareRequirementForViceScan, speechToText } from 'verifySpeech';
import { showMessage } from 'react-native-flash-message';
import AudioRecord from 'react-native-audio-record';
import { CheckPermission, reviewOptions } from 'utils/AudioHelper';
const ChatPage = ({ navigation, route }) => {
    // console.log('====================================+++++');
    // console.log(directLine?.token);
    // console.log('====================================+++++++______');
    const [userInfo, setUserInfo] = useState(null);
    //const [isProfileIdLoading, setIsProfileIdLoading] = useState(true);
    const [comment, setComment] = useState();
    const [commentUrl, setCommentUrl] = useState();
    const [isRecording, setIsRecording] = useState(false);
    const [isSendingComment, setIsSendingComment] = useState(false);
    const profileId= useUserSpeechProfile((state) => state.profileId);
    const setProfileId = useUserSpeechProfile((state) => state.setProfileId);
    const { isLoading, data } = useGetMessages({ userId: userInfo?.id });
    console.log('ddddddddddd', route?.params, data?.pages);
    const [messages, setMessages] = useState([]);
    const {
        isLoading: isLoading_InsertMsg,
        mutate,
        error,
    } = mutateInsertMessage();

    useEffect(() => {
        let array = [];
        data?.pages?.map((item) => {
            console.log('item!! ', item?.createAt);
            array.push({
                _id: item?.userId,
                text: item?.text,
                createdAt: item?.createAt,
                user: {
                    _id: item?.user?.id,
                    avatar: item?.user?.photoUrl,
                },
            });
        });
        console.log('aaaaaaarrrrrrrrr ', array);
        setMessages(array);
    }, [data]);
    useEffect(() => {
        (async () => {
            setUserInfo(await GetData('USER_INFO'));
        })();
    }, []);
    // useEffect(() => {
    //     directLine.activity$.subscribe((activity) =>
    //         console.log('received activity ', activity),
    //     );
    // }, [directLine]);
    // const onSend = useCallback((messages = []) => {
    //     setMessages((previousMessages) =>
    //         GiftedChat.append(previousMessages, messages),
    //     );
    //     directLine
    //         .postActivity({
    //             type: 'message',
    //             value: messages,
    //             from: { id: directLine?.retries },
    //             name: 'buttonClicked',
    //             text: 'message man nayumad?',
    //         })
    //         .subscribe(
    //             (id) => console.log('Posted activity, assigned ID ', id),
    //             (error) => console.log('Error posting activity', error),
    //         );
    // }, []);
    // useEffect(() => {
    //     (async () => {
    //         if (!profileId) {
    //             setIsProfileIdLoading(true);
    //             let tempProfileId = await PrepareRequirementForViceScan();
    //             if (tempProfileId){
    //                 setProfileId(tempProfileId);
    //                 setIsProfileIdLoading(false);
    //             }
    //             else{
                    
    //                 setIsProfileIdLoading(false);
    //             }
                
    //         }
    //     })();
    // }, [])
    const onSend = useCallback(async (messages = []) => {
        let user = await GetData('USER_INFO');
        console.log(user);
        mutate(
            {
                messageInput: {
                    text: messages[0]?.text,
                    createAt: new Date(),
                    photoUrl: user?.photoUrl,
                    userId: user?.id,
                    replyToUserId: user?.id,
                    roomId: route?.params?.roomId,
                    messageType: 'MESSAGE',
                },
            },
            {
                onSuccess: async (data) => {
                    console.log(messages[0]?.text);
                    console.log('success , ', data);
                },
                onError: (err) => {
                    alert(err.message);
                },
            },
        );
    }, []);
    
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
    const onMicPressed = ()=>{
        if(isRecording) StopRecord();
        else StartRecord();
    }
    const StartRecord = async () => {
        try {
            AudioRecord.start();
            setIsRecording(true);
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
            setIsRecording(false)
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
        console.log('xxxxxxxxxx');    
        try {
            if (url) {
                setIsSendingComment(true)
                let speechResponse = await speechToText(url);
                console.log('xxxxxxxxxx'+ JSON.stringify(speechResponse));    
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
    const renderBubble =(props)=> {
        return (
          <Bubble
            {...props}
            wrapperStyle={{
              right: {
                backgroundColor: COLORS.Color850
              }
            }}
          />
        )
      }
    return (
        <Container
            style={styles.ProfileSettingPaymentInformation}
            loadingOnPage={isLoading || isLoading_InsertMsg || isSendingComment}>
            <MInput
                containerStyle={{
                    marginHorizontal: '3%',
                    borderWidth: 1,
                    borderColor: COLORS.Color707,
                    borderRadius: METRIC_SIZES.small,
                    marginTop: '-3%',
                    marginBottom: METRIC_SIZES.large,
                }}
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
                    color: COLORS.Color780,
                    onPress: onMicPressed,
                }}
            />
            <GiftedChat
                messages={messages}
                onSend={(messages) => onSend(messages)}
                user={{
                    _id: userInfo?.id,
                }}
                renderBubble={renderBubble}
            />
        </Container>
    );
};
const styles = StyleSheet.create({
    ProfileSettingPaymentInformation: {
        backgroundColor: COLORS.Color304,
        height: '100%',
    },
});
export default ChatPage;
