import { Container, MFlatList, MIcon, MImage, MText } from 'components/common';
import { createScreen } from 'components/elements';
import {
    COLORS,
    DEVICE_HEIGHT,
    DEVICE_WIDTH,
    METRIC_SIZES,
} from 'constants/common';
import { useUpcommingReservation } from 'hooks/Upcomming';
import useTheme from 'hooks/useTheme';
import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { scale, verticalScale, GetData } from 'utils';

const upcommingReservation = createScreen(
    ({ navigation }) => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();
        const [userInfo, setUserInfo] = useState();

        useEffect(() => {
            (async () => {
                let user = await GetData('USER_INFO');
                setUserInfo(user);
            })();
        }, []);
        const { data, isLoading } = useUpcommingReservation({
            userId: userInfo?.id,
        });

        const date = new Date('2023-01-01T11:11:11.000Z');
        console.log('data:: ', data?.pages, date.getFullYear());
        const getDate = (item) => {
            const checkIn = new Date(item?.checkIn);
            const checkOut = new Date(item?.checkOut);
            return `${checkIn.getFullYear()}/${
                checkIn.getMonth() + 1
            }/${checkIn.getDate()} - ${checkOut.getFullYear()}/${
                checkOut.getMonth() + 1
            }/${checkOut.getDate()}`;
        };
        return (
            <Container
                loadingOnPage={isLoading}
                style={styles.upcommingReservation}>
                <MText textStyle={COMMON.TxtUpcommingReservationcheckin153}>
                    Recently Review
                </MText>
                <MFlatList
                    data={data?.pages}
                    renderComponent={({ item }) => {
                        return (
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() =>
                                    navigation.navigate(
                                        'UpcomingReservationHotel',
                                        { currentHotel: item },
                                    )
                                }
                                style={[LAYOUT.row, styles.view2]}>
                                {console.log(item?.hotel?.photoUrl)}
                                <MImage
                                    imageSource={{ uri: item?.hotel?.photoUrl }}
                                    style={{
                                        width: DEVICE_WIDTH * 0.4,
                                        height: DEVICE_HEIGHT * 0.2,
                                        resizeMode: 'cover',
                                    }}
                                />
                                <View style={styles.reserveView}>
                                    <View
                                        style={[
                                            LAYOUT.rowHCenter,
                                            styles.reserveItem,
                                        ]}>
                                        <MIcon
                                            name="calendar-blank"
                                            color={COLORS.Color988}
                                            size={scale(26)}
                                        />
                                        <MText
                                            style={{
                                                width: '100%',
                                            }}>
                                            {getDate(item.reservation)}
                                        </MText>
                                    </View>
                                    <MText containerStyle={styles.reserveItem}>
                                        {item?.hotel?.name}
                                    </MText>
                                    <MText containerStyle={styles.reserveItem}>
                                        1 Room{' '}
                                        {item?.reservation?.numberOfChilds +
                                            item?.reservation
                                                ?.numberOfAdults}{' '}
                                        Geust
                                    </MText>
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                />
            </Container>
        );
    },
    {
        scrollView: false,
        paddingBottom: false,
        paddingTop: false,
    },
);
const styles = StyleSheet.create({
    upcommingReservation: {
        backgroundColor: COLORS.Color304,
        height: '100%',
        padding: '5%',
    },
    innerView: {
        padding: METRIC_SIZES.small,
        backgroundColor: 'red',
        height: '100%',
    },
    reserveItem: {
        padding: METRIC_SIZES.tiny,
    },
    reserveView: {
        borderColor: COLORS.Color707,
        borderWidth: 1,
        flex: 1,
    },
    view2: {
        width: '100%',
        marginVertical: verticalScale(20),
    },
});
export default upcommingReservation;
