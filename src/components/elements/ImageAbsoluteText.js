import { MText, MImageBackground } from 'components/common';
import {
    METRIC_SIZES,
    COLORS,
    DEVICE_HEIGHT,
    DEVICE_WIDTH,
} from 'constants/common';
import React from 'react';
import useTheme from 'hooks/useTheme';
import { View, StyleSheet } from 'react-native';
import { scale, verticalScale } from 'utils';
import LinearGradient from 'react-native-linear-gradient';

const ImageAbsoluteText = ({ containerStyle, image, texts, imgStyle }) => {
    const { COMMON, IMAGES } = useTheme();
    return (
        <View style={containerStyle}>
            <MImageBackground
                imageSource={image}
                resizeMode={'stretch'}
                style={
                    imgStyle ?? {
                        width: '100%',
                        height: '100%',
                    }
                }>
                <LinearGradient
                    colors={[
                        'rgba(0,0,0,0)',
                        'rgba(0,0,0,0.1)',
                        'rgba(0,0,0,0.3)',
                        'rgba(0,0,0,0.5)',
                        'rgba(0,0,0,0.7)',
                    ]}
                    locations={[0, 0.5, 0.7, 0.9, 1]}
                    style={{ width: '100%', height: '100%' }}></LinearGradient>
            </MImageBackground>
            <View
                style={{
                    position: 'absolute',
                    justifyContent: 'flex-start',
                    width: '100%',
                    height: '90%',
                    margin: METRIC_SIZES.small,
                }}>
                <View style={{ flex: 1 }} />
                <MText
                    textStyle={[
                        COMMON.TitleWhite,
                        { marginBottom: verticalScale(8), fontWeight: 'bold' },
                    ]}>
                    {texts[0]}
                </MText>
                <MText
                    textStyle={[
                        COMMON.TitleWhite,
                        { marginBottom: verticalScale(0), fontWeight: 'bold' },
                    ]}>
                    {texts[1]}
                </MText>
                <MText
                    textStyle={[
                        COMMON.TitleWhite,

                        {
                            marginBottom: verticalScale(8),
                            fontWeight: 'bold',
                            fontSize: verticalScale(15),
                        },
                    ]}>
                    {texts[2]}
                </MText>
            </View>
        </View>
    );
};
export default ImageAbsoluteText;
const styles = StyleSheet.create({
    SectionCenter: {
        paddingBottom: verticalScale(16),
        marginBottom: verticalScale(16),
        borderWidth: 1,
        borderColor: COLORS.Color707,
        backgroundColor: COLORS.Color304,
        alignSelf: 'center',
        borderBottomStartRadius: METRIC_SIZES.small,
        borderBottomEndRadius: METRIC_SIZES.small,
    },
    image: {
        width: DEVICE_WIDTH * 0.45,
        height: DEVICE_HEIGHT * 0.25,
    },
    separator: {
        height: 2,
        width: '100%',
    },
});
