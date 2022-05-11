import { MText, MImage, MIcon } from 'components/common';
import {
    METRIC_SIZES,
    COLORS,
    DEVICE_HEIGHT,
    DEVICE_WIDTH,
} from 'constants/common';
import React from 'react';
import useTheme from 'hooks/useTheme';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { scale, verticalScale } from 'utils';
const UpcommingHotelFacilityItem = ({ currentHotel, navigation, roomId }) => {
    const { COMMON, IMAGES } = useTheme();
    return (
        <TouchableOpacity
            onPress={() =>
                navigation.navigate('CurrentHotel', {
                    currentHotel: currentHotel,
                    title: currentHotel?.name,
                    roomId: roomId,
                })
            }>
            <View>
                <MText
                    style={[
                        COMMON.TitleGrayText,
                        {
                            fontSize: verticalScale(24),
                            marginVertical: '5%',
                        },
                    ]}>
                    Current Hotel
                </MText>
                <View style={[styles.shadowView]} elevation={5}>
                    <View style={styles.imageView}>
                        <MImage
                            style={{ height: '100%', width: '100%' }}
                            imageSource={currentHotel?.photoUrl}
                        />
                    </View>
                    <MText
                        textStyle={[
                            COMMON.Title,
                            {
                                textAlign: 'center',
                                color: '#152233',
                                fontWeight: '',
                                fontSize: verticalScale(22),
                            },
                        ]}
                        containerStyle={styles.text}>
                        {currentHotel?.name}
                    </MText>
                    <View style={{ flex: 1 }} />
                    <MIcon
                        name={'map-marker-check'}
                        color={COLORS.Color988}
                        style={styles.icon}
                        size={verticalScale(28)}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
};
export default UpcommingHotelFacilityItem;
const styles = StyleSheet.create({
    text: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        height: DEVICE_HEIGHT * 0.2,
    },
    imageView: { height: '100%', width: DEVICE_WIDTH * 0.25 },
    shadowView: {
        backgroundColor: Platform.OS === 'ios' ? 'white' : 'white',
        shadowColor: Platform.OS === 'ios' ? 'green' : 'red',
        shadowOffset: {
            width: Platform.OS === 'ios' ? 3 : 0,
            height: Platform.OS === 'ios' ? 3 : 2,
        },
        shadowOpacity: Platform.OS === 'ios' ? 1 : 0.8,
        shadowRadius: Platform.OS === 'ios' ? null : 40,
        elevation: Platform.OS === 'ios' ? null : 4,
        marginVertical: METRIC_SIZES.small,
        borderRadius: METRIC_SIZES.small,
        overflow: 'hidden',
        height: DEVICE_HEIGHT * 0.18,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: { alignSelf: 'flex-start', padding: METRIC_SIZES.small },
});
