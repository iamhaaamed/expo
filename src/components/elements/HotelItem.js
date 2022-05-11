import { MText, MImage } from 'components/common';
import {
    METRIC_SIZES,
    COLORS,
    DEVICE_HEIGHT,
    DEVICE_WIDTH,
} from 'constants/common';
import React from 'react';
import useTheme from 'hooks/useTheme';
import Config from 'react-native-config';

import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { scale, verticalScale } from 'utils';
const HotelItem = ({ title, image, navigation, id, isProfile = false }) => {
    const { COMMON } = useTheme();
    // console.log('iiiD: ', image);
    return (
        <TouchableOpacity
            style={styles.SectionCenter}
            onPress={() => {
                if (!isProfile)
                    navigation.navigate('SelectHotel', {
                        id: id,
                        title: title,
                    });
            }}>
            <MImage
                imageSource={{ uri: Config.FILE_URL + image }}
                style={styles.image}
                uri
            />
            <MText
                textStyle={[
                    COMMON.NormalText,
                    { alignSelf: 'center', marginVertical: METRIC_SIZES.small },
                ]}>
                {title}
            </MText>
        </TouchableOpacity>
    );
};
export default HotelItem;
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
