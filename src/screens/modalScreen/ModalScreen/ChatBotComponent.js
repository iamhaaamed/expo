import React, { useCallback, useEffect, useState } from 'react';
import { Container, MInput } from 'components/common';
import { scale, verticalScale, GetData } from 'utils';

import { Bubble, GiftedChat } from 'react-native-gifted-chat';
import { COLORS, METRIC_SIZES } from 'constants/common';
import { mutateInsertMessage } from 'hooks/Chat';
import { DirectLine } from 'botframework-directlinejs';
import { View, StyleSheet } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons/MaterialIcons';
import AudioRecord from 'react-native-audio-record';
import { CheckPermission, reviewOptions } from 'utils/AudioHelper';
import { showMessage } from 'react-native-flash-message';
import useUserSpeechProfile from 'store/speechProfile';

const ChatBotComponent = ({ speachTotxt }) => {
    console.log('in chatpage', speachTotxt);
    const directLine = useMemo(
        () =>
            new DirectLine({
                secret:
                    'yv4oJpBHBMk.Px5NDYymTr02dCEiBT6exb2PztOjZQVGO9i_NXuHn_I',
            }),
        [],
    );
    // console.log('====================================+++++');
    console.log('token:: ', directLine?.token);
    // console.log('====================================+++++++______');

    const [messages, setMessages] = useState([]);
    const [isRecording, setIsRecording] = useState(false);
    const [isSendingComment, setIsSendingComment] = useState(false);
    const [isProfileIdLoading, setIsProfileIdLoading] = useState(true);
    const userId = directLine?.retries;
    const profileId = useUserSpeechProfile((state) => state.profileId);
    const setProfileId = useUserSpeechProfile((state) => state.setProfileId);

    useEffect(() => {
        directLine.activity$.subscribe((activity) => {
            console.log('received activity ', activity),
                setMessages((previousMessages) =>
                    GiftedChat.append(previousMessages, [
                        {
                            createdAt: activity?.timestamp,
                            text: activity?.speak ?? activity?.text,
                            user: {
                                _id: parseInt(activity?.from?.id),
                            },
                        },
                    ]),
                );
        });
    }, [directLine, speachTotxt]);

    const onSend = useCallback((messages = []) => {
        console.log('====================================');
        console.log(messages);
        console.log('====================================');

        directLine
            .postActivity({
                type: 'message',
                value: messages,
                from: { id: userId },
                text: messages[0]?.text,
            })
            .subscribe(
                (id) => console.log('Posted activity, assigned ID ', id),
                (error) => console.log('Error posting activity', error),
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

    const renderBubble = (props) => {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: COLORS.Color850,
                    },
                }}
            />
        );
    };
    return (
        <GiftedChat
            messages={messages}
            onSend={(messages) => onSend(messages)}
            user={{
                _id: userId,
            }}
            renderBubble={renderBubble}
        />
    );
};
const styles = StyleSheet.create({
    ProfileSettingPaymentInformation: {
        backgroundColor: COLORS.Color304,
        height: '100%',
    },
});
export default ChatBotComponent;
