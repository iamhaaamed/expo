import { MButton, MInput, MText } from 'components/common';
import { createScreen } from 'components/elements';
import { SectionTop04 } from 'components/Sections';
import { COLORS, DEVICE_HEIGHT, DEVICE_WIDTH, METRIC_SIZES } from 'constants/common';
import useTheme from 'hooks/useTheme';
import React, { useRef, useState } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { verticalScale } from 'utils';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from "react-native-confirmation-code-field";

const CELL_COUNT = 4;
const signupstep1verify = createScreen(
    () => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();
        const [value, setValue] = useState("");
        const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
        const [props, getCellOnLayoutHandler] = useClearByFocusCell({
            value,
            setValue,
        });
        const clickCounter = useRef(0);
        const onPress = () => {
            console.log(`Clicked! ${clickCounter.current}`);
            clickCounter.current = clickCounter.current + 1;
        };

        return (
            <View style={styles.signupstep1}>
                <ScrollView>
                    <View
                        style={COMMON.MainView}>
                        <MText
                            textStyle={[
                                COMMON.Txtsignupstep1650,
                                { fontWeight: 'bold' },
                            ]}>
                            Verify Email
                        </MText>
                        <MText textStyle={COMMON.NormalText}>
                            Enter 4-digit Verification Code Sent To Your Email
                        </MText>
                        <CodeField
                            ref={ref}
                            {...props}
                            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                            value={value}
                            onChangeText={(txt) => setValue(txt)}
                            cellCount={CELL_COUNT}
                            rootStyle={styles.codeFieldRoot}
                            keyboardType="number-pad"
                            textContentType="oneTimeCode"
                            renderCell={({ index, symbol, isFocused }) => (
                                // <CustomText
                                //     key={index}
                                //     style={[styles.cell, isFocused && styles.focusCell]}
                                //     onLayout={getCellOnLayoutHandler(index)}
                                // />
                                <MText
                                    key={index}
                                    style={[styles.cell, isFocused && styles.focusCell]}
                                    onLayout={getCellOnLayoutHandler(index)}
                                    underlineColorAndroid={'black'}
                                >
                                    {symbol || (isFocused ? <Cursor /> : null)}
                                </MText>
                            )}
                        />
                    </View>
                </ScrollView>
                <View style={{ padding: METRIC_SIZES.small }}>
                    <View style={styles.centerRow}>
                        <MText style={COMMON.NormalText}>Don't Receive The Code? </MText>
                        <MText style={[COMMON.NormalText,{textDecorationLine: 'underline', color: COLORS.Color988}]}> Resend</MText>
                    </View>
                    <MButton
                        onPress={onPress}
                        style={COMMON.ButtonRectColor988}
                        containerStyle={COMMON.ButtonRectColor988}
                        text="Verify"
                        textStyle={[
                            COMMON.TextsButton,
                            { fontWeight: 'bold' },
                        ]}
                        color={COLORS.Color988}
                    />

                </View>
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
    },
    codeFieldRoot: { marginTop: DEVICE_HEIGHT * 0.05, },
    cell: {
        width: DEVICE_WIDTH * 0.18,
        height: DEVICE_WIDTH * 0.18,
        lineHeight: DEVICE_WIDTH * 0.18,
        fontSize: 24,
        borderWidth: 1,
        borderColor: COLORS.Color332,
        borderRadius: METRIC_SIZES.small,
        textAlign: 'center',
    },
    focusCell: {
        borderColor: '#000',
    },
    centerRow: { 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: METRIC_SIZES.large,
    }
});
export default signupstep1verify;
