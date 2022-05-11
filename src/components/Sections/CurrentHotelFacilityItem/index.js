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

const CurrentHotelFacilityItem = ({ currentHotel, navigation, roomId, comments, rates }) => {
    const { IMAGES, COMMON } = useTheme();

    return (
        <View>
            <FlatList
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                numColumns={3}
                data={[
                    {
                        title: 'Check Out',
                        dest: 'Checkout1',
                        icon: 'comment-text-outline',
                        desc: 'Lorem Ipsum - Lore',
                        colored: true,
                        params: {
                            comments:comments,
                            rates: rates,
                            roomId: roomId,
                        }
                    },
                    {
                        title: 'Chat With Concierge',
                        dest: 'ChatPage',
                        icon: 'desk',
                        desc: 'Lorem Ipsum -',
                        params: {
                            roomId: roomId,
                        }
                    },
                    {
                        title: 'Dinning',
                        dest: 'Dinnings',
                        icon: 'table-chair',
                        desc: 'Lorem Ipsum -',
                        params: {
                            currentHotel: currentHotel,
                            roomId: roomId,
                        },
                    },
                    {
                        title: 'Lock Door',
                        dest: 'LockDoor',
                        icon: 'lock',
                        desc: 'Lorem Ipsum -',
                    },
                    {
                        title: 'Unlock Door',
                        dest: 'UnlockDoor',
                        icon: 'lock-open',
                        desc: 'Lorem Ipsum -',
                    },
                    {
                        title: 'In Room Service',
                        dest: 'InRoomService',
                        icon: 'room-service-outline',
                        desc: 'Lorem Ipsum -',
                        params: {
                            currentHotel: currentHotel,
                            roomId: roomId,
                        }
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
                                navigation.navigate(item?.dest, item?.params)
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
export default CurrentHotelFacilityItem;
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
