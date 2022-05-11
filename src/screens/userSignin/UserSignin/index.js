import { MButton, MInput, MText } from 'components/common';
import { createScreen } from 'components/elements';
import { SectionRowSocialCenter } from 'components/Sections';
import { COLORS, METRIC_SIZES } from 'constants/common';
import useTheme from 'hooks/useTheme';
import React, { useRef } from 'react';
import auth from '@react-native-firebase/auth';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import * as yup from 'yup';
import { Formik } from 'formik';
const UserSignin = createScreen(
    ({ navigation }) => {
        const { IMAGES, COMMON } = useTheme();
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

        const signinWithEmail = async (data) => {
            try {
                try {
                    await auth().signInWithEmailAndPassword(
                        data?.email,
                        data?.password,
                    );
                    const checkDone = auth().currentUser?.emailVerified;
                    console.log('6666', checkDone);
                    if (checkDone) {
                        // setToken(await auth().currentUser?.getIdToken());
                        navigation.navigate('AppTab');
                    } else {
                        showMessage({
                            message: 'Failed, Please Retry',
                            type: 'danger',
                        });
                    }
                } catch (error) {
                    console.log(error, 'error for get token');

                    const errorMessage = error?.message;
                    if (errorMessage) {
                        showMessage({
                            message: errorMessage,
                            type: 'danger',
                        });
                    }
                }
            } catch (err) {
                console.log(err);
            }
        };
        return (
            <View style={styles.UserSignin}>
                <ScrollView>
                    <View style={COMMON.MainView}>
                        <MText textStyle={COMMON.TxtUserSignin534}>
                            Hello{' '}
                        </MText>
                        <MText textStyle={COMMON.NormalText}>
                            Sign In To Your Account Or Use Social Media .{' '}
                        </MText>
                        <Formik
                            validationSchema={ValidationSchema}
                            initialValues={{ email: '', password: '' }}
                            onSubmit={(values) => signinWithEmail(values)}>
                            {({
                                handleChange,
                                handleSubmit,
                                values,
                                errors,
                            }) => (
                                <>
                                    <View
                                        style={
                                            COMMON.SectionPaddingUserSignin536
                                        }>
                                        <MText textStyle={COMMON.NormalText}>
                                            Email{' '}
                                        </MText>
                                        <MInput
                                            inputStyle={COMMON.InputRect540}
                                            containerStyle={COMMON.Input538}
                                            placeholder="Write Your Email "
                                            onChangeText={handleChange('email')}
                                            error={errors && errors.email}
                                            placeholderColor={COLORS.Color780}
                                            textStyle={COMMON.TextsInput539}
                                            backgroundColor={COLORS.Color304}
                                        />
                                    </View>
                                    <View
                                        style={
                                            COMMON.SectionPaddingUserSignin541
                                        }>
                                        <MText textStyle={COMMON.NormalText}>
                                            Password{' '}
                                        </MText>
                                        <MInput
                                            inputStyle={COMMON.InputRect545}
                                            containerStyle={COMMON.Input538}
                                            placeholder="Write Your Password "
                                            onChangeText={handleChange(
                                                'password',
                                            )}
                                            error={errors && errors.password}
                                            placeholderColor={COLORS.Color780}
                                            textStyle={COMMON.TextsInput544}
                                            secureTextEntry
                                            backgroundColor={COLORS.Color304}
                                        />
                                    </View>
                                    <MText
                                        textStyle={COMMON.TxtUserSignin546}
                                        onPress={() =>
                                            navigation.navigate(
                                                'Forgotpassword',
                                            )
                                        }>
                                        Forgot Password ?{' '}
                                    </MText>
                                    <MButton
                                        onPress={handleSubmit}
                                        style={COMMON.ButtonRectColor988}
                                        containerStyle={
                                            COMMON.ButtonRectColor988
                                        }
                                        text="Sign In"
                                        textStyle={COMMON.TextsButton}
                                        color={COLORS.Color988}
                                    />
                                </>
                            )}
                        </Formik>
                        <MText
                            textStyle={[
                                COMMON.NormalText,
                                {
                                    alignSelf: 'center',
                                    marginVertical: METRIC_SIZES.large,
                                },
                            ]}>
                            Continues With{' '}
                        </MText>
                        <SectionRowSocialCenter
                            style={COMMON.EleUserSignin557}
                            navigation={navigation}
                            signUp={false}
                        />
                        <View
                            style={[
                                {
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                },
                            ]}>
                            <MText textStyle={COMMON.NormalText}>
                                Don't Have An Account ?{' '}
                            </MText>
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate('Signupstep1')
                                }>
                                <MText textStyle={COMMON.TxtUserSignin558}>
                                    {' '}
                                    Sign Up
                                </MText>
                            </TouchableOpacity>
                        </View>
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
    UserSignin: {
        backgroundColor: COLORS.Color304,
        height: '100%',
    },
});
export default UserSignin;
