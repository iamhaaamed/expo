import { MFlatList, MIcon, MText } from 'components/common';
import ConfigItem from 'components/elements/ConfigItem';
import {
    COLORS,
    METRIC_SIZES,
    DEVICE_WIDTH,
    DEVICE_HEIGHT,
} from 'constants/common';
import useTheme from 'hooks/useTheme';
import React, { useRef } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { scale, verticalScale } from 'utils';
const testHotel = {
    name: 'Test hotel',
    restaurants: [
        {
            telNumber: '098888',
            bar: 18,
            name: 'American',
            hotelId: 1,
            description: 'xxxxxxx',
            kitchen: true,
            menu: 'Hanger',
        },
        {
            telNumber: '0933338888',
            bar: 12,
            name: 'American',
            hotelId: 2,
            description: 'zzzzzzzzzzzzzzxxxxxxx',
            kitchen: false,
            menu: 'Hanger',
        },
    ],
    id: 1,
};
const UpcommingHotelFacilityItem = ({ currentHotel, navigation }) => {
    const { IMAGES, COMMON } = useTheme();

    return (
        <View>
            <FlatList
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                numColumns={3}
                data={[
                    {
                        title: 'Check In',
                        dest: 'UpcommingReservationcheckin',
                        icon: 'clock-time-one-outline',
                        desc: 'Lorem Ipsum - Lore',
                        colored: true,
                        params: currentHotel,
                    },
                    {
                        title: 'Manage Reservation',
                        dest: 'UpcommingReservationmanagereservations',
                        icon: 'calendar-range-outline',
                        desc: 'Lorem Ipsum -',
                        params: currentHotel,
                    },
                    {
                        title: 'Contact Support',
                        dest: 'ChatPage',
                        icon: 'contacts-outline',
                        desc: 'Lorem Ipsum -',
                        params: currentHotel,
                    },
                ]}
                renderItem={({ item }) => (
                    <View
                        style={[
                            styles.itemContainer,
                            {
                                backgroundColor: item?.colored
                                    ? COLORS.Color988
                                    : null,
                            },
                        ]}>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate(item?.dest, {
                                    currentHotel: item?.params,
                                })
                            }
                            style={{ flex: 1 }}>
                            <View style={{ flex: 1 }}>
                                <MText
                                    containerStyle={{
                                        marginBottom: METRIC_SIZES.small,
                                    }}
                                    textStyle={{
                                        color: item?.colored
                                            ? COLORS.Color304
                                            : COLORS.ColorHeader,
                                    }}>
                                    {item.title}
                                </MText>
                                <MText
                                    textStyle={{
                                        color: item?.colored
                                            ? COLORS.Color304
                                            : COLORS.ColorHeader,
                                    }}
                                    containerStyle={{
                                        marginBottom: METRIC_SIZES.large,
                                    }}>
                                    {item.desc}
                                </MText>
                                <View style={{ flex: 1 }} />
                                <MIcon
                                    name={item.icon}
                                    color={
                                        item?.colored
                                            ? COLORS.Color304
                                            : COLORS.ColorHeader
                                    }
                                    size={28}
                                    style={{ alignSelf: 'flex-end' }}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};
export default UpcommingHotelFacilityItem;
const styles = StyleSheet.create({
    itemContainer: {
        width: DEVICE_WIDTH * 0.3,
        backgroundColor: COLORS.Color304,
        borderRadius: METRIC_SIZES.small,
        borderWidth: 2,
        borderColor: COLORS.borderColor,
        marginVertical: METRIC_SIZES.small,
        padding: METRIC_SIZES.tiny,
    },
});
