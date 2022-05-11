import { MButton, MCheckBox, MText } from 'components/common';
import { createScreen } from 'components/elements';
import { SectionTop } from 'components/Sections';
import { COLORS, METRIC_SIZES } from 'constants/common';
import useTheme from 'hooks/useTheme';
import React, { useRef, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

const paymenttermcondition2 = createScreen(
    ({ navigation }) => {
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

        const [isChecked, setIsChecked] = useState(false);

        return (
            <ScrollView>
                <View style={styles.paymenttermcondition2}>
                    <MText textStyle={[COMMON.TxtMedium, styles.header]}>
                        Prepaid - Non Refundable
                    </MText>
                    <MText textStyle={COMMON.TxtMedium}>
                        CANCELLATION POLICY
                    </MText>
                    <MText>
                        Reservation is non refundable. Entire reservation stay
                        will be charged, if cancelled or in case of a no show.
                        100% penalty.
                    </MText>
                    <MText textStyle={[COMMON.TxtMedium, styles.header]}>
                        Semi Flex
                    </MText>
                    <MText textStyle={COMMON.TxtMedium}>
                        CANCELLATION POLICY{' '}
                    </MText>
                    <MText>
                        Reservation is semi flexible. Free cancellation till 6pm
                        hotel time one week prior to arrival date. After the
                        deadline, the entire reservation stay will be charged in
                        case of late cancellation or a no show.
                    </MText>
                    <MText textStyle={[COMMON.TxtMedium, styles.header]}>
                        Fully Flex{' '}
                    </MText>
                    <MText textStyle={COMMON.TxtMedium}>
                        CANCELLATION POLICY{' '}
                    </MText>
                    <MText>
                        Reservation is fully flexible. Free cancellation till
                        6pm hotel time on the same day of arrival. After the
                        deadline, One night stay will be charged in case of late
                        cancellation or a no show.{' '}
                    </MText>
                    <MCheckBox
                        isChecked={isChecked}
                        setIsChecked={() => setIsChecked((p) => !p)}
                        containerStyle={COMMON.CheckBox101}>
                        <View>
                            <MText textStyle={COMMON.TextsCheckBox102}>
                                I Read Term and Conditions and
                            </MText>
                            <MText textStyle={COMMON.TextsCheckBox102}>
                                I Am Agree With Them
                            </MText>
                        </View>
                    </MCheckBox>
                    <MButton
                        onPress={() =>
                            navigation.navigate('SignupDone', {
                                text: 'Your room was booked.',
                            })
                        }
                        style={[
                            COMMON.ButtonRectColor988,
                            { backgroundColor: 'transparent' },
                        ]}
                        containerStyle={[
                            COMMON.ButtonRectColor988,
                            !isChecked && { backgroundColor: '#707070' },
                        ]}
                        text="Continue"
                        textStyle={COMMON.TextsButton}
                        color={COLORS.Color988}
                        disabled={!isChecked}
                    />
                </View>
            </ScrollView>
        );
    },
    {
        scrollView: false,
        paddingBottom: false,
        paddingTop: false,
    },
);
const styles = StyleSheet.create({
    paymenttermcondition2: {
        backgroundColor: COLORS.Color304,
        height: '100%',
        padding: METRIC_SIZES.small,
    },
    header: {
        paddingVertical: METRIC_SIZES.large,
    },
});
export default paymenttermcondition2;
