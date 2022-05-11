import { MButton, MIcon, MImage, MText } from 'components/common';
import useTheme from 'hooks/useTheme';
import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { WithLocalSvg } from 'react-native-svg';
import { COLORS, METRIC_SIZES, DEVICE_WIDTH } from 'constants/common';
import { scale } from 'utils';
import { MaterialIcons } from 'react-native-vector-icons/MaterialIcons';
const ConfigItem = ({ state, navigation, ...props }) => {
    const { LAYOUT, IMAGES } = useTheme();
    const {
        iconName,
        text,
        destination,
        imgName,
        resizeMode = 'contain',
        width = DEVICE_WIDTH * 0.05,
        height = DEVICE_WIDTH * 0.05,
        rightIconColor = 'black',
        rightIconName = 'arrow-right-alt',
        textColor = 'black',
        onPress,
    } = props;

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[LAYOUT.rowCenter, styles.container]}>
                {iconName && (
                    <MIcon
                        name={iconName?.name ? iconName.name : iconName}
                        style={[styles.textContainer]}
                        color={iconName?.color}
                    />
                )}
                {imgName && (
                    <WithLocalSvg
                        asset={imgName}
                        style={[
                            styles.textContainer,
                            { marginRight: METRIC_SIZES.small },
                        ]}
                        resizeMode={resizeMode}
                        width={width}
                        height={height}
                    />
                )}
                <MText textStyle={[styles.textStyle, { color: textColor }]}>
                    {text}
                </MText>
                <View style={{ flex: 1 }} />
                <MIcon
                    name={rightIconName}
                    IconComponent={MaterialIcons}
                    color={rightIconColor}
                    size={30}
                />
                {/* <WithLocalSvg
                    asset={IMAGES.arrow_right_thin}
                    style={{ color: rightIconColor }}
                    resizeMode={resizeMode}
                    width={DEVICE_WIDTH * 0.04}
                    height={DEVICE_WIDTH * 0.06}
                    fill={rightIconColor}
                /> */}
            </View>
        </TouchableWithoutFeedback>
    );
};

export default React.memo(ConfigItem);

const styles = StyleSheet.create({
    container: {
        paddingVertical: METRIC_SIZES.small,
    },
    textContainer: {
        paddingHorizontal: METRIC_SIZES.small,
    },
    textStyle: {
        fontSize: scale(14),
        color: COLORS.Color292,
    },
});
