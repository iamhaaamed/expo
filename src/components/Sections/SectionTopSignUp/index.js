import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { scale, verticalScale, height } from 'utils';
import useTheme from 'hooks/useTheme';
import { COLORS, DEVICE_HEIGHT, METRIC_SIZES } from 'constants/common'
import { useRef } from 'react';


import { MText, MImage } from 'components/common';
const SectionTopSignUp = (props) => {
    const {
        step = 1,
    } = props;
    const { COMMON } = useTheme();
    const clickCounter = useRef(0);
    const onPress = () => {
        console.log(`Clicked! ${clickCounter.current}`);
        clickCounter.current = clickCounter.current + 1;
    };

    return (
        <View style={[styles.SectionCenter]} >

            <View style={[COMMON.ColCenter, { width: '40%' }]}>
                <View style={[COMMON.RowItemStart]}>
                    <View style={[styles.outerDot, styles.activeDotBorder]}>
                        <View style={[styles.innerDot, styles.activeDotBg]} />
                    </View>
                    <View style={styles.line} />
                    <View style={[styles.outerDot, step == 1 ? styles.deactiveBorder : styles.activeDotBorder]}>
                        <View style={[styles.innerDot, step === 1 ? styles.deactiveDotBg : styles.activeDotBg]} />
                    </View>
                </View>
                <View style={[COMMON.RowItemCenter, { padding: METRIC_SIZES.tiny }]}>
                    <MText>Step1</MText>
                    <MText>Step2</MText>
                </View>
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    SectionCenter: {
        marginVertical: verticalScale(16),
        alignItems: 'center',
    },
    innerDot: {
        height: 14, width: 14, borderRadius: 7
    },
    outerDot: {
        borderWidth: 1,
        width: 20,
        height: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    activeDotBorder: {
        borderColor: COLORS.Color988,
    },
    deactiveDotBg: {
        backgroundColor: COLORS.disabled
    },
    deactiveBorder: {
        borderColor: COLORS.disabled
    },
    activeDotBg: {
        backgroundColor: COLORS.Color988,
    },
    line: {
        backgroundColor: COLORS.Color988,
        height: 2,
        width: '70%'
    }
});
export default SectionTopSignUp;

