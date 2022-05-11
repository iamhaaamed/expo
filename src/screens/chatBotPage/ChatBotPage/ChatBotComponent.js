import { DirectLine } from 'botframework-directlinejs';
import { COLORS } from 'constants/common';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';

const ChatBotComponent = ({ firstText }) => {
    console.log(firstText);
    const directLine = useMemo(
        () =>
            new DirectLine({
                secret:
                    'yv4oJpBHBMk.Px5NDYymTr02dCEiBT6exb2PztOjZQVGO9i_NXuHn_I',
            }),
        [],
    );

    console.log('token:: ', directLine?.token);

    const [messages, setMessages] = useState([]);

    const userId = directLine?.retries;

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
    }, [directLine]);

    const onSend = useCallback((messages = []) => {
        console.log('====================================');
        console.log(messages);
        console.log('====================================');

        directLine
            .postActivity({
                type: 'message',
                value: messages,
                from: { id: userId },
                name: 'buttonClicked',
                text: messages[0]?.text,
            })
            .subscribe(
                (id) => console.log('Posted activity, assigned ID ', id),
                (error) => console.log('Error posting activity', error),
            );
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

export default memo(ChatBotComponent);
