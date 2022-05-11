import React from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';

import { MText, MButton, MCheckBox } from 'components/common';
import { SectionTop } from 'components/Sections';
const paymentmethod = createScreen(
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
            <View style={styles.paymentmethod}>
                <ScrollView>
                    <View style={COMMON.MainView}>
                        <MCheckBox
                            isChecked={isChecked}
                            setIsChecked={() => setIsChecked((p) => !p)}
                            style={COMMON.CheckBox441}>
                            <View style={COMMON.RowItemCenter}>
                                <MText textStyle={COMMON.NormalText}>
                                    Credit Card{' '}
                                </MText>
                                <MText textStyle={COMMON.TextsCheckBox442}>
                                    (visa/master card/amex)
                                </MText>
                            </View>
                        </MCheckBox>
                    </View>
                </ScrollView>
                <MButton
                    onPress={() => navigation.navigate('Paymenttermcondition2')}
                    style={[
                        COMMON.ButtonRectColor988,
                        { backgroundColor: 'transparent' },
                    ]}
                    containerStyle={COMMON.ButtonRectColor988}
                    text="Payment"
                    textStyle={COMMON.TextsButton}
                    color={COLORS.Color988}
                />
                <View style={{ height: 10 }} />
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
    paymentmethod: {
        backgroundColor: COLORS.Color304,
        height: '100%',
    },
});
export default paymentmethod;
