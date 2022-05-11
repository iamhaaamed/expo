import { MButton } from 'components/common';
import { COLORS } from 'constants/common';
import GraphQlClient from 'GraphQl/GraphQlClient';
import { useSignUp, useSignIn } from 'hooks/Auth';
import useTheme from 'hooks/useTheme';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import thirdPartyAuthService from 'services/thirdPartyAuthService/thirdPartyAuthService';
import { StoreData } from 'utils';
import { async } from 'validate.js';

const SectionRowSocialCenter = (props) => {
    const { style, navigation, signUp, signIn } = props;
    const {
        LAYOUT,
        GUTTERS,
        TYPOGRAPHY,
        IMAGES,
        COMMON,
        CONSTANTS,
    } = useTheme();
    const [Loading, setLoading] = useState(false);
    const { isLoading: SignUpLoading, mutate: SignUpMutate } = useSignUp();
    const { isLoading: SignInLoading, mutate: SignInMutate } = useSignIn();
    console.log('sign up is' + signUp);
    const createUserWithSocialSignUp = async (idToken) => {
        setLoading(true);
        try {
            console.log('TOKEN: ', idToken);

            await StoreData('TOKEN', idToken);

            GraphQlClient.setHeader('authorization', 'Bearer ' + idToken);
            SignUpMutate(
                {},
                {
                    onSuccess: (data) => {
                        console.log('user returnddd' + JSON.stringify(data));
                        if (data?.user_signUp?.status == 'SUCCESS') {
                            setLoading(false);
                            console.log(
                                'user return' +
                                    JSON.stringify(data?.user_signUp),
                            );
                            StoreData('USER_INFO', data?.user_signUp?.result);
                            navigation.navigate('Signupstep2');
                        } else {
                            setLoading(false);
                            alert(
                                data?.user_signUp?.status == 'ALREADY_EXISTS'
                                    ? 'User ' +
                                          data?.user_signUp?.status +
                                          '. Please Sign in.'
                                    : data?.user_signUp?.status,
                            );
                        }
                    },
                },
            );
        } catch (error) {
            alert(error);
            setLoading(false);
        }
    };
    const createUserWithSocialSignIn = async (idToken) => {
        console.log('SSSSSSSSSSLLLLLLLL', idToken);

        setLoading(true);
        try {
            await StoreData('TOKEN', idToken);

            GraphQlClient.setHeader('authorization', 'Bearer ' + idToken);
            SignInMutate(
                {},
                {
                    onSuccess: (data) => {
                        if (data?.user_signIn?.status == 'SUCCESS') {
                            StoreData('USER_INFO', data?.user_signIn?.result);
                            // navigation.navigate('Signupstep2');

                            navigation.navigate('AppTab');
                        } else alert(data?.user_signIn?.status);
                        setLoading(false);
                    },
                },
            );
            setLoading(false);
        } catch (error) {
            alert(error);
            setLoading(false);
        }
    };
    const GoogleGetToken = async () => {
        console.log('google signUp', signUp);
        const {
            firebaseIdToken,
            success,
        } = await thirdPartyAuthService.loginWithGoogle();
        if (success) {
            if (signUp) createUserWithSocialSignUp(firebaseIdToken);
            else createUserWithSocialSignIn(firebaseIdToken);
        }
    };

    const FacebookSignIn = async () => {
        const {
            firebaseIdToken,
            success,
        } = await thirdPartyAuthService.loginWithFacebook();
        if (success) {
            if (signUp) createUserWithSocialSignIn(firebaseIdToken);
            else createUserWithSocialSignUp(firebaseIdToken);
        }
    };
    const TwitterSignIn = async () => {
        const {
            firebaseIdToken,
            success,
        } = await thirdPartyAuthService.loginWithTwitter();
        if (success) {
            if (signUp) createUserWithSocialSignIn(firebaseIdToken);
            else createUserWithSocialSignUp(firebaseIdToken);
        }
    };

    return (
        <View style={[styles.SectionRowSocialCenter, style]}>
            <MButton
                onPress={GoogleGetToken}
                style={COMMON.ButtonNavigationRect552}
                containerStyle={COMMON.ButtonNavigation551}
                color={COLORS.Color988}
                icon={{
                    name: 'google',
                    color: COLORS.Color304,
                    Component: MaterialCommunityIcons,
                    size: 25,
                }}
            />
            <MButton
                onPress={FacebookSignIn}
                style={COMMON.ButtonNavigationRect554}
                containerStyle={COMMON.ButtonNavigation553}
                color={COLORS.Color988}
                icon={{
                    name: 'facebook',
                    color: COLORS.Color304,
                    Component: MaterialCommunityIcons,
                    size: 25,
                }}
            />
            <MButton
                onPress={TwitterSignIn}
                style={COMMON.ButtonNavigationRect556}
                containerStyle={COMMON.ButtonNavigation555}
                color={COLORS.Color988}
                icon={{
                    name: 'twitter',
                    color: COLORS.Color304,
                    Component: MaterialCommunityIcons,
                    size: 25,
                }}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    SectionRowSocialCenter: {
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'space-around',
        width: '65%',
    },
});
export default SectionRowSocialCenter;
