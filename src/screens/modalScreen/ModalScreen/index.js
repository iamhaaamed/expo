import { Container } from 'components/common';
import SearchVoiceBox from 'components/Sections/SearchVoiceBox';
import { COLORS } from 'constants/common';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
// import ChatBotComponent from './ChatBotComponent';

const ChatPage = ({ route }) => {
    const [speechText, setSpeechText] = useState();
    const [isConverting, setIsConverting] = useState(false);
    return (
        <Container
            style={styles.ProfileSettingPaymentInformation}
            loadingOnPage={isConverting || isConverting}>
            {/* <SearchVoiceBox
                txt={'chaaaaaaat'}
                needVerify={true}
                onSpeechConverted={(value) => setSpeechText(value)}
                isConverting={(value) => setIsConverting(value)}
            /> */}
            {/* <ChatBotComponent
                speachTotxt={speechText ?? route?.params?.firstText}
            /> */}
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
