import { MButton, MInput, MText, MLoading } from 'components/common';
import { createScreen } from 'components/elements';
import { SectionTop04 } from 'components/Sections';
import { COLORS, METRIC_SIZES } from 'constants/common';
import useTheme from 'hooks/useTheme';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Alert } from 'react-native';
import { verticalScale } from 'utils';
import { useSignUp, useSignIn } from 'hooks/Auth';
import auth from '@react-native-firebase/auth';
import { SectionRowSocialCenter } from 'components/Sections';
import { StoreData } from 'utils';
import { showMessage } from 'react-native-flash-message';
import * as yup from 'yup';
import { Formik } from 'formik';
const signupstep1 = createScreen(
    ({ navigation }) => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();
        const [isLoading, setIsLoading] = useState(false);
        const { isLoading: SignUpLoading, mutate: SignUpMutate } = useSignUp();
        const ValidationSchema = yup.object().shape({
            email: yup
                .string()
                .email('Invalid email address')
                .required('Invalid email address'),
            password: yup
                .string()
                .min(6, 'Must be 6 characters or more')
                .max(12, 'Must be 12 characters or less')
                .required('Invalid password'),
        });
        const completeRegistrationWithEmailPassword = async (idToken) => {
            setIsLoading(true);
            try {
                console.log('TOKEN: ', idToken);

                await StoreData('TOKEN', idToken);

                GraphQlClient.setHeader('authorization', 'Bearer ' + idToken);
                SignUpMutate(
                    {},
                    {
                        onSuccess: (data) => {
                            console.log(
                                'user returnddd' + JSON.stringify(data),
                            );
                            if (data?.user_signUp?.status == 'SUCCESS') {
                                setIsLoading(false);
                                console.log(
                                    'user return' +
                                        JSON.stringify(data?.user_signUp),
                                );
                                StoreData(
                                    'USER_INFO',
                                    data?.user_signUp?.result,
                                );
                                navigation.navigate('Signupstep2');
                            } else {
                                setIsLoading(false);
                                alert(
                                    data?.user_signUp?.status ==
                                        'ALREADY_EXISTS'
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
                setIsLoading(false);
            }
        };
        const createUserOnPress = async (data) => {
            setIsLoading(true);
            console.log('kkkk', data);
            const email = data?.email;
            const password = data?.password;
            try {
                await auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(async () => {
                        await auth().currentUser?.sendEmailVerification();
                        const emailVerified = auth().currentUser?.emailVerified;
                        console.log(emailVerified, 'emailVerified*****');

                        if (emailVerified) {
                            completeRegistrationWithEmailPassword();
                        } else {
                            Alert.alert(
                                'Email verification',
                                'We should verify your email, please check your inbox and follow the instruction',
                                [
                                    {
                                        text: 'Got it',
                                        onPress: async () => {
                                            navigate('CheckEmail', {
                                                password,
                                                email,
                                            });
                                        },
                                        style: 'default',
                                    },
                                    {
                                        text: 'Cancel',
                                        onPress: () => null,
                                        style: 'cancel',
                                    },
                                ],
                            );
                        }
                    })
                    .catch((error) => {
                        console.log(error, 'error');

                        const errorMessage = error?.message;
                        if (errorMessage) {
                            showMessage({
                                message: errorMessage,
                                type: 'danger',
                            });
                        }
                    });
                setIsLoading(false);
            } catch (err) {
                console.log(err, 'err*****');

                setIsLoading(false);
            }
        };
        return (
            <View style={styles.signupstep1}>
                <MLoading
                    size="large"
                    color={COLORS.Color323}
                    isLoading={isLoading}
                />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View
                        style={{
                            justifyContent: 'center',
                            marginTop: '20%',
                        }}>
                        <MText
                            textStyle={[
                                COMMON.Txtsignupstep1650,
                                { fontWeight: 'bold' },
                            ]}>
                            hello
                        </MText>
                        <MText textStyle={COMMON.Txtsignupstep1651}>
                            sign up to continue
                        </MText>
                        <Formik
                            validationSchema={ValidationSchema}
                            initialValues={{ email: '', password: '' }}
                            onSubmit={(values) => createUserOnPress(values)}>
                            {({
                                handleChange,
                                handleSubmit,
                                values,
                                errors,
                            }) => (
                                <>
                                    <View
                                        style={
                                            COMMON.SectionPaddingsignupstep1652
                                        }>
                                        <MText
                                            textStyle={
                                                COMMON.Txtsignupstep1653
                                            }>
                                            email
                                        </MText>

                                        <MInput
                                            inputStyle={COMMON.InputRect656}
                                            containerStyle={COMMON.Input654}
                                            placeholder="write your email "
                                            onChangeText={handleChange('email')}
                                            error={errors && errors.email}
                                            placeholderColor={COLORS.Color780}
                                            textStyle={COMMON.TextsInput655}
                                            backgroundColor={COLORS.Color304}
                                            height={verticalScale(42)}
                                        />
                                    </View>
                                    <View
                                        style={
                                            COMMON.SectionPaddingsignupstep1657
                                        }>
                                        <MText
                                            textStyle={
                                                COMMON.Txtsignupstep1658
                                            }>
                                            password
                                        </MText>
                                        <MInput
                                            inputStyle={COMMON.InputRect661}
                                            containerStyle={COMMON.Input659}
                                            placeholder="write your password "
                                            onChangeText={handleChange(
                                                'password',
                                            )}
                                            error={errors && errors.password}
                                            placeholderColor={COLORS.Color780}
                                            textStyle={COMMON.TextsInput660}
                                            secureTextEntry
                                            backgroundColor={COLORS.Color304}
                                            height={verticalScale(42)}
                                        />

                                        <MButton
                                            onPress={handleSubmit}
                                            style={COMMON.ButtonRectColor988}
                                            containerStyle={[
                                                COMMON.ButtonRectColor988,
                                                { marginTop: '10%' },
                                            ]}
                                            textStyle={COMMON.TextsButton}
                                            text="verify"
                                            color={COLORS.Color988}
                                        />

                                        <MText
                                            textStyle={[
                                                COMMON.NormalText,
                                                {
                                                    alignSelf: 'center',
                                                    marginVertical:
                                                        METRIC_SIZES.large,
                                                },
                                            ]}>
                                            Continues With{' '}
                                        </MText>
                                        <SectionRowSocialCenter
                                            style={COMMON.EleUserSignin557}
                                            signUp
                                            navigation={navigation}
                                        />
                                    </View>
                                </>
                            )}
                        </Formik>
                    </View>
                </ScrollView>
            </View>
        );
    },
    {
        scrollView: false,
        paddingBottom: false,
        paddingTop: false,
    },
);
const styles = StyleSheet.create({
    signupstep1: {
        backgroundColor: COLORS.Color304,
        height: '100%',
        paddingHorizontal: '5%',
    },
});
export default signupstep1;
