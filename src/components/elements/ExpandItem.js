import { MButton, MIcon, MImage, MText } from 'components/common';
import useTheme from 'hooks/useTheme';
import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { WithLocalSvg } from "react-native-svg";
import { COLORS, METRIC_SIZES, DEVICE_WIDTH } from 'constants/common'
import { scale } from 'utils';
const ExpandItem = ({ state, navigation, ...props }) => {
    const { LAYOUT, IMAGES } = useTheme();
    const [isVisible, setVisiblity] = useState(false);
    const {
        children,
        text,
        iconRight,
        rightText,
        resizeMode = "contain",
        visibleComponent
    } = props;

    return (
        <View>
            <TouchableWithoutFeedback onPress={() => setVisiblity(!isVisible)}>
                <View
                    style={[
                        LAYOUT.rowCenter, styles.container
                    ]}>
                    <MText
                        textStyle={styles.textStyle}>{text}</MText>
                    <View style={{ flex: 1 }} />
                    {rightText &&
                        <MText
                            textStyle={styles.textStyle}
                            containerStyle={styles.textContainer}>{rightText}</MText>}
                    {iconRight &&
                        <MIcon
                            name={isVisible ? 'chevron-down' : 'chevron-up'}
                            IconComponent={iconRight.Component}
                            color={iconRight.color ?? "black"}
                            size={iconRight.size}
                            style={[styles.iconRight, iconRight.style]}
                        />
                    }
                </View>
            </TouchableWithoutFeedback>
            {isVisible && children}
        </View>
    );
};

export default React.memo(ExpandItem);

const styles = StyleSheet.create({
    container: {
        paddingVertical: METRIC_SIZES.small,
    },
    textContainer: {
        paddingHorizontal: METRIC_SIZES.small,
    },
    textStyle: {
        fontSize: scale(14),
        color: COLORS.Color292
    }
})