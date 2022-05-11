import React from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { scale, verticalScale, height } from 'utils';
import { useState } from 'react';
import useTheme from 'hooks/useTheme';
import { COLORS, DEVICE_HEIGHT, METRIC_SIZES } from 'constants/common'
import { useRef } from 'react';


import { MText, MImage, MIcon } from 'components/common';
const SectionBottomDinning2 = (props) => {
    const {
        children,
        style,
        imageSource,
        title = "Dinning In Room",
        description = "Description",
        text,
        iconRight,
        rightText,
        navigation,
        currentHotel
    } = props;
    const { LAYOUT, GUTTERS, TYPOGRAPHY, IMAGES, COMMON, CONSTANTS } = useTheme();
    const [isVisible, setVisiblity] = useState(false);
    const clickCounter = useRef(0);
    const onPress = () => {
        console.log(`Clicked! ${clickCounter.current}`);
        clickCounter.current = clickCounter.current + 1;
    };

    return (

        <View>
            <View style={COMMON.MainView}>
                <TouchableWithoutFeedback onPress={() => setVisiblity(!isVisible)}>
                    <View
                        style={[
                            LAYOUT.rowCenter, {marginBottom: METRIC_SIZES.large}
                        ]}>
                        <MText
                            textStyle={COMMON.NormalText}>{text}</MText>
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
                <View style={[styles.SectionCenter, style]} >
                    <TouchableOpacity onPress={() => navigation.navigate('Dinnings3',{currentHotel: currentHotel})}>
                        <MImage
                            imageSource={imageSource}
                            style={styles.img}
                            resizeMode={'cover'}
                        />
                    </TouchableOpacity>
                    <View style={COMMON.MainView}>
                        <MText textStyle={COMMON.Title} >{title}  </MText>
                        <MText textStyle={COMMON.NormalText}>{description}</MText>
                    </View>
                </View>
            </View>
            {isVisible && children}
        </View>

    );
}
const styles = StyleSheet.create({
    SectionCenter: {
        paddingBottom: verticalScale(16),
        borderWidth: 1,
        borderColor: COLORS.Color707,
        backgroundColor: COLORS.Color304,
        alignSelf: 'center',
        width: '100%',
        borderRadius: METRIC_SIZES.small,
        overflow: 'hidden',
    },
    img: {
        width: "100%",
        height: DEVICE_HEIGHT * 0.4,
        resizeMode: 'cover',
    },

});
export default SectionBottomDinning2;

