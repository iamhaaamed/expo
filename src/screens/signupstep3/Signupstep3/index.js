import { Container, MButton, MText } from 'components/common';
import { createScreen } from 'components/elements';
import UploadPicture from 'components/elements/UploadPicture';
import ScanVoice from 'components/Sections/ScanVoice';
import SectionTopSignUp from 'components/Sections/SectionTopSignUp';
import { COLORS, DEVICE_WIDTH, METRIC_SIZES } from 'constants/common';
import { userUpdateProfile } from 'hooks/User';
import useTheme from 'hooks/useTheme';
import React, { useState } from 'react';
import {
    ScrollView, StyleSheet, View
} from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { GetData, StoreData, verticalScale } from 'utils';
import { UploadFile } from 'utils/UploadFile';
const signupstep3 = createScreen(
    (props) => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();
        const [userInput, setUserInput] = useState(
            props?.route?.params?.userInput,
        );
        const [photoUrl, setPhotoUrl] = useState();
        const [passportPhotoUrl, setPassportPhotoUrl] = useState();
        const [voiceUrl, setVoiceUrl] = useState();
        const [isVoiceUploading, setIsVoiceUploading] = useState(false);
        const { isLoading, mutate, error } = userUpdateProfile();
        const { navigation } = props;
        const checkRequiredInfo=()=>{
            let required='';
            if(!passportPhotoUrl)
                required+=' ID card photo, ';
            if(!photoUrl)
                required+= ' Profile picture,';
            if(!voiceUrl)
                required+=' Scanned voice';
            return required;            
        }
        const onPress = async () => {
            const userInfo = await GetData('USER_INFO');
            const required=checkRequiredInfo();
            console.log('voidUrl is' + voiceUrl);
            if(required.length>1){
                showMessage({message:"Required fields "+required,type: "danger"});
                return;
            }
            let uploadVoiceFile = null;
            setIsVoiceUploading(true);
            if (voiceUrl) {
                const { uploadedUrl } = await UploadFile({uri:voiceUrl,type:'audio/wav'});
                console.log('upload result' + JSON.stringify(uploadedUrl));
                if(uploadedUrl)
                    uploadVoiceFile=uploadedUrl;
            }
            
            try {
                let tempinput = {...userInput};
                tempinput.isActive = true;
                tempinput.gender = 'FEMALE';
                tempinput.emailVerified = true;
                tempinput.photoUrl = photoUrl;
                tempinput.pasportPhotoUrl = passportPhotoUrl;
                tempinput.scanVoice = uploadVoiceFile;
                var isoDate = new Date().toISOString();
                tempinput.createdAt = isoDate;
                console.log("temp input "+JSON.stringify(tempinput));
                mutate(
                    { userInput: tempinput, userId: userInfo?.id },
                    {
                        onSuccess: async (data) => {
                                setIsVoiceUploading(false);
                            if (
                                data?.user_updateProfile?.status === 'SUCCESS'
                            ) {
                                console.log(
                                    'data response is' + JSON.stringify(data),
                                );
                                StoreData(
                                    'USER_INFO',
                                    data?.user_updateProfile?.result,
                                );
                                navigation.navigate('SignupDone');
                            }
                        },
                        onError: (err) => {
                            console.log('error is' + err);
                            setIsVoiceUploading(false);
                        },
                    },
                );
            } catch (error) {
                console.log('error is' + error);
            }
        };
        return (
            <Container
                style={styles.signupstep2}
                loadingOnPage={isLoading || isVoiceUploading}
            >
                <ScrollView>
                    <View style={COMMON.MainView}>
                        <SectionTopSignUp step={2} />
                        <ScanVoice
                            getVoiceFile={(value) => setVoiceUrl(value)}
                        />
                        <View style={{ height: 24 }} />
                        <MText style={COMMON.Title}>Add Profile Picture</MText>
                        <UploadPicture
                            containerStyle={{ width: DEVICE_WIDTH * 0.3 }}
                            imgStyle={COMMON.imageAvatar}
                            getImage={(value) => setPhotoUrl(value)}
                        />
                        <View style={{ height: 24 }} />
                        <MText style={COMMON.Title}>
                            Add ID Card / Passport , Driven Licence
                        </MText>
                        <UploadPicture
                            containerStyle={{ width: DEVICE_WIDTH * 0.52 }}
                            imgStyle={COMMON.imagePassport}
                            getImage={(value) => setPassportPhotoUrl(value)}
                            topic={
                                ' please take picture from your ID Card / Passport , Driven Licence'
                            }
                        />
                        <View style={{ height: 14 }} />
                        <MButton
                            onPress={onPress}
                            style={COMMON.ButtonRectColor988}
                            containerStyle={COMMON.ButtonRectColor988}
                            text="Next Step"
                            textStyle={COMMON.TextsButton}
                            color={COLORS.Color988}
                        />
                    </View>
                </ScrollView>
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
    signupstep2: {
        backgroundColor: COLORS.Color304,
        height: '100%',
    },
    phoneRightBox: {
        height: verticalScale(50),
        borderTopLeftRadius: 0,
        borderTopRightRadius: METRIC_SIZES.tiny,
        borderBottomRightRadius: METRIC_SIZES.tiny,
        borderBottomLeftRadius: 0,
        flex: 3,
        borderWidth: 1,
        borderColor: COLORS.Color893,
    },
    phoneLeftBox: {
        height: verticalScale(50),
        borderTopLeftRadius: METRIC_SIZES.tiny,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: METRIC_SIZES.tiny,
        borderWidth: 1,
        borderColor: COLORS.Color893,
        flex: 1,
        textAlign: 'center',
    },
    iconContainer: {
        alignSelf: 'flex-start',
        paddingHorizontal: METRIC_SIZES.tiny,
    },
});
export default signupstep3;
