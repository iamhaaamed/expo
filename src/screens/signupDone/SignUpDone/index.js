import { MButton, MIcon, MText } from 'components/common';
import { createScreen } from 'components/elements';
import { COLORS, DEVICE_WIDTH, METRIC_SIZES } from 'constants/common';
import useTheme from 'hooks/useTheme';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { scale, verticalScale } from 'utils';

const SignUpDone = createScreen(
    ({ navigation, route }) => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();

        const onPress = () => {
            if (text) navigation.navigate('AppTab', { screen: 'Upcoming' });
            else navigation.navigate('Home');
        };
        const text = route?.params?.text;
        console.log(text);
        return (
            <View style={styles.signupstep1}>
                <View
                    style={{
                        width: DEVICE_WIDTH * 0.5,
                        height: DEVICE_WIDTH * 0.5,
                        borderRadius: DEVICE_WIDTH * 0.25,
                        backgroundColor: COLORS.Color980,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginVertical: METRIC_SIZES.large,
                    }}>
                    <MIcon
                        name="check"
                        size={scale(80)}
                        color={COLORS.Color988}
                    />
                </View>

                <MText style={styles.title}>
                    Thank You, {text ?? 'Your Information Was'}
                </MText>
                {!text ? (
                    <MText style={styles.title}> Registered Correctly</MText>
                ) : null}
                <View style={{ flex: 1 }} />
                <MButton
                    onPress={onPress}
                    style={COMMON.ButtonRectColor988}
                    containerStyle={COMMON.ButtonRectColor988}
                    text="Home"
                    textStyle={[
                        COMMON.TextsButton,
                        { fontWeight: 'bold', width: DEVICE_WIDTH * 0.8 },
                    ]}
                    color={COLORS.Color988}
                />
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
        paddingVertical: '5%',
        alignItems: 'center',
        //justifyContent: 'center'
    },
    title: {
        fontSize: verticalScale(20),
        fontFamily: 'Calibri',
        color: COLORS.Color292,
    },
});
export default SignUpDone;
