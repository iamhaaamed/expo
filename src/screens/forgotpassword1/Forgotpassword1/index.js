import { MButton, MInput, MSnackbar, MText } from 'components/common';
import { createScreen } from 'components/elements';
import { SectionTop04 } from 'components/Sections';
import { COLORS } from 'constants/common';
import useTheme from 'hooks/useTheme';
import React, { useRef } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { verticalScale } from 'utils';

const forgotpassword1 = createScreen(
    () => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();

        const clickCounter = useRef(0);
        const onPress = () => {
            console.log(`Clicked! ${clickCounter.current}`);
            clickCounter.current = clickCounter.current + 1;
        };

        return (
            <View style={styles.forgotpassword1}>
                <ScrollView>
                    <MText textStyle={COMMON.NormalText}>
                        Please write your email address that send a link for
                        changing your password{' '}
                    </MText>
                    <View style={COMMON.SectionPaddingforgotpassword1698}>
                        <MText textStyle={COMMON.NormalText}>
                            Email{' '}
                        </MText>
                        <MInput
                            inputStyle={COMMON.InputRect702}
                            containerStyle={COMMON.Input700}
                            placeholder="write your email "
                            placeholderColor={COLORS.Color780}
                            textStyle={COMMON.TextsInput701}
                            backgroundColor={COLORS.Color304}
                            // height={verticalScale(42)}
                        />
                    </View>

                    <MSnackbar
                        type="success"
                        position="center"
                        iconPosition="right"
                        duration={2000}
                        floating={true}
                        title="The link was sent to your email"
                        titleStyle={COMMON.TextsSnackbarSuccessCenter706}
                        style={COMMON.SnackbarSuccessCenterRect707}>
                        {({ showSnackbar }) => (
                            <MButton
                                onPress={() => {
                                    showSnackbar();
                                    onPress();
                                }}
                                style={COMMON.ButtonRectColor988}
                                containerStyle={COMMON.ButtonRectColor988}
                                text="Send Link"
                                textStyle={COMMON.TextsButton}
                                color={COLORS.Color988}
                            />
                        )}
                    </MSnackbar>
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
    forgotpassword1: {
        backgroundColor: COLORS.Color304,
        height: '100%',
        paddingHorizontal: '5%',
    },
});
export default forgotpassword1;
