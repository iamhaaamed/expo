import React from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { scale, verticalScale, height } from 'utils';
import LinearGradient from 'react-native-linear-gradient';
import { DateTimePickerMod } from 'components/common/MDateTimePicker';
import {
    DrawerItem,
    DrawerItemList,
    DrawerContentScrollView,
    DrawerToggleButton,
} from '@react-navigation/drawer';

import {
    MIcon,
    MText,
    MTouchable,
    MButton,
    MInput,
    MImageBackground,
    MImage,
    MStatusBar,
    MSwitch,
    MCheckBox,
    MFlatList,
    MChip,
    MDropDown,
    MOnboarding,
    MDateTimePicker,
    MImagePicker,
    MLoading,
    MModal,
    MTab,
    MAccordion,
    MSnackbar,
    MSlider,
} from 'components/common';
import { showMessage } from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';
import * as yup from 'yup';
import { Formik } from 'formik';
import { SectionTop04 } from 'components/Sections';
const forgotpassword = createScreen(
    () => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();
        const [isLoading, setIsLoading] = useState(false);
        const ValidationSchema = yup.object().shape({
            email: yup
                .string()
                .email('Invalid email address')
                .required('Invalid email address'),
        });
        const onSubmitForgotPassword = async (data) => {
            console.log(data);

            setIsLoading(true);
            try {
                await auth()
                    .sendPasswordResetEmail(data.email)
                    .then((result) => {
                        console.log(result, 'result');
                        setIsLoading(false);
                        navigate('VerifyEmail');
                    });
            } catch (err) {
                console.log(err?.message, 'err');
                showMessage({
                    message: err?.message.split(']')[1],
                    type: 'danger',
                });
            }
            setIsLoading(false);
        };

        const onSubmit = (data) => {
            onSubmitForgotPassword(data);
        };

        return (
            <View style={styles.forgotpassword}>
                <MLoading
                    size="large"
                    color={COLORS.Color323}
                    isLoading={isLoading}
                />
                <ScrollView>
                    <SectionTop04 style={COMMON.Eleforgotpassword247} />
                    <MText textStyle={COMMON.Txtforgotpassword248}>
                        please write your email address that send a link for
                        changing your password{' '}
                    </MText>
                    <Formik
                        validationSchema={ValidationSchema}
                        initialValues={{ email: '' }}
                        onSubmit={(values) => onSubmit(values)}>
                        {({ handleChange, handleSubmit, values, errors }) => (
                            <>
                                <View
                                    style={
                                        COMMON.SectionPaddingforgotpassword249
                                    }>
                                    <MText
                                        textStyle={COMMON.Txtforgotpassword250}>
                                        email{' '}
                                    </MText>

                                    <MInput
                                        inputStyle={COMMON.InputRect253}
                                        containerStyle={COMMON.Input251}
                                        placeholder="write your email "
                                        error={errors && errors.email}
                                        onChangeText={handleChange('email')}
                                        placeholderColor={COLORS.Color780}
                                        textStyle={COMMON.TextsInput252}
                                        backgroundColor={COLORS.Color304}
                                        height={verticalScale(42)}
                                    />
                                </View>
                                <MButton
                                    onPress={handleSubmit}
                                    style={COMMON.ButtonRect255}
                                    containerStyle={COMMON.Button254}
                                    text="send link"
                                    textStyle={COMMON.TextsButton256}
                                    color={COLORS.Color988}
                                />
                            </>
                        )}
                    </Formik>
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
    forgotpassword: {
        backgroundColor: COLORS.Color304,
        height: '100%',
    },
});
export default forgotpassword;
