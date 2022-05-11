import { Container } from 'components/common';
import SearchVoiceBox from 'components/Sections/SearchVoiceBox';
import { COLORS } from 'constants/common';
import React, { useState } from 'react';
import { StyleSheet, Touchable, TouchableOpacity, Text } from 'react-native';
import ChatBotComponent from './ChatBotComponent';

const ChatPage = ({ navigation, route }) => {
    const [speechText, setSpeechText] = useState();
    const [isConverting, setIsConverting] = useState(false);
    return (
        <Container
            style={styles.ProfileSettingPaymentInformation}
            loadingOnPage={isConverting || isConverting}>
            {/* <TouchableOpacity
                onPress={() => navigation.navigate('ModalScreen')}>
                <Text>fdjfkjdsf</Text>
            </TouchableOpacity> */}
            <SearchVoiceBox
                txt={'chaaaaaaat'}
                needVerify={true}
                onSpeechConverted={(value) => setSpeechText(value)}
                isConverting={(value) => setIsConverting(value)}
            />
            <ChatBotComponent />
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
