import { MButton, MText, MImage, MIcon } from 'components/common';
import { createScreen } from 'components/elements';
import ConfigItem from 'components/elements/ConfigItem';
import ExpandItem from 'components/elements/ExpandItem';
import { SectionTitleTopCenter02 } from 'components/Sections';
import {
    COLORS,
    DEVICE_HEIGHT,
    DEVICE_WIDTH,
    METRIC_SIZES,
} from 'constants/common';
import useTheme from 'hooks/useTheme';
import React, { useRef } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { scale, verticalScale, GetData } from 'utils';
import { useEffect, useState } from 'react';
import { mutateCheckIn } from 'hooks/Upcomming';
const UpcommingReservationcheckin = createScreen(
    ({ navigation, route }) => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();
        const { isLoading, mutate, error } = mutateCheckIn();
        console.log(route?.params.currentHotel);
        const data = route?.params.currentHotel;
        const clickCounter = useRef(0);
        const onPress = () => {
            navigation.navigate('UpcommingReservationcheckin2', { data: data });
        };
        const [userInfo, setuserInfo] = useState({});
        useEffect(() => {
            (async () => {
                const userInfo = await GetData('USER_INFO');
                setuserInfo(userInfo);
            })();
        }, []);
        const getDate = (item = data?.reservation) => {
            const checkIn = new Date(item?.checkIn);
            const checkOut = new Date(item?.checkOut);
            return `${checkIn.getFullYear()}/${
                checkIn.getMonth() + 1
            }/${checkIn.getDate()} - ${checkOut.getFullYear()}/${
                checkOut.getMonth() + 1
            }/${checkOut.getDate()}`;
        };
        return (
            <View style={styles.UpcommingReservationcheckin}>
                <ScrollView>
                    <View style={styles.innerView}>
                        <MText
                            textStyle={
                                COMMON.TxtUpcommingReservationcheckin152
                            }>
                            Hi {userInfo.fullName} , lets get you checked in for
                            your stay{' '}
                        </MText>
                        <MText
                            textStyle={
                                COMMON.TxtUpcommingReservationcheckin153
                            }>
                            Reservation Number{' '}
                        </MText>
                        <MText
                            textStyle={
                                COMMON.TxtUpcommingReservationcheckin154
                            }>
                            {data?.reservation?.id}
                        </MText>
                        <View style={[LAYOUT.row, styles.view2]}>
                            <MImage
                                imageSource={{ uri: data?.hotel?.photoUrl }}
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
                                    <MText> {getDate()}</MText>
                                </View>
                                <MText containerStyle={styles.reserveItem}>
                                    {data?.hotel?.name}
                                </MText>
                                <MText containerStyle={styles.reserveItem}>
                                    1 Room{' '}
                                    {data?.reservation?.numberOfChilds +
                                        data?.reservation?.numberOfAdults}{' '}
                                    Geust
                                </MText>
                            </View>
                        </View>
                        <ExpandItem
                            text={'Arrival Time'}
                            iconRight={{ color: 'black' }}
                            rightText="3:00 Pm"
                        />
                        <MText
                            textStyle={
                                COMMON.TxtUpcommingReservationcheckin158
                            }>
                            Billing informtion{' '}
                        </MText>
                        <MText
                            textStyle={
                                COMMON.TxtUpcommingReservationcheckin159
                            }>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.{' '}
                        </MText>
                        <MText
                            textStyle={
                                COMMON.TxtUpcommingReservationcheckin160
                            }>
                            Visa****1111{' '}
                        </MText>
                        <MButton
                            onPress={onPress}
                            style={[
                                COMMON.ButtonRectColor988,
                                { backgroundColor: 'transparent' },
                            ]}
                            containerStyle={COMMON.ButtonRectColor988}
                            text="check in"
                            textStyle={COMMON.TextsButton}
                            color={COLORS.Color988}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    },
    {
        scrollView: false,
        paddingBottom: false,
        paddingTop: false,
    },
);
const styles = StyleSheet.create({
    UpcommingReservationcheckin: {
        backgroundColor: COLORS.Color304,
        height: '100%',
    },
    innerView: {
        padding: METRIC_SIZES.small,
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
export default UpcommingReservationcheckin;
