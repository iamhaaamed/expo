import { MButton, MImage, MText, Container } from 'components/common';
import { createScreen } from 'components/elements';
import { COLORS, METRIC_SIZES } from 'constants/common';
import useTheme from 'hooks/useTheme';
import React, { useRef, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { scale } from 'utils';
import setReservationItems from 'store/setReservationItems';
import { GetData } from 'utils';
import { useGetRoom } from 'hooks/Booking';

const taxes = 54;

const SelectRoomReviewReservation = createScreen(
    ({ navigation, route }) => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();
        const reservation = setReservationItems((state) => state.reservation);
        console.log(reservation);
        const [userInfo, setUserInfo] = useState({});
        const { isLoading, data } = useGetRoom({
            roomId: route?.params?.roomId,
        });
        const [totalP, setTotalPrice] = useState(0);
        console.log(data);
        useEffect(() => {
            (async () => {
                const userInfo = await GetData('USER_INFO');
                setUserInfo(userInfo);
                const totalPrice = 0;
                data?.hotel_getRoom?.result?.roomPrices?.map((item) => {
                    totalPrice = totalPrice + item?.price;
                });
                setTotalPrice(totalPrice + taxes);
            })();
        }, []);
        const getFacilities = (item = data?.hotel_getRoom?.result) => {
            let i = '';
            item?.roomFacilities?.map((value) => {
                i = i + value.title + ',';
            });
            return i;
        };
        return (
            <Container
                loadingOnPage={isLoading}
                style={styles.SelectRoomReviewReservation}>
                <ScrollView>
                    <View style={COMMON.MainView}>
                        <View
                            style={[
                                COMMON.RowItemStart,
                                { marginBottom: METRIC_SIZES.small },
                            ]}>
                            <MImage
                                imageSource={IMAGES.image5127}
                                style={COMMON.image447}
                                customWidth={scale(76)}
                                customHeight={scale(51)}
                            />
                            <MText
                                textStyle={
                                    COMMON.TxtSelectRoomReviewReservation448
                                }>
                                {reservation.hotelName}
                            </MText>
                        </View>

                        <MText
                            textStyle={
                                COMMON.TxtSelectRoomReviewReservation449
                            }>
                            Stay Informations{' '}
                        </MText>
                        <MText
                            textStyle={
                                COMMON.TxtSelectRoomReviewReservation450
                            }>
                            Dates : {reservation.checkIn} -{' '}
                            {reservation.checkOut}
                        </MText>
                        <MText
                            textStyle={
                                COMMON.TxtSelectRoomReviewReservation451
                            }>
                            1 Rooms,{' '}
                            {reservation?.numberOfChilds +
                                reservation?.numberOfAdults}{' '}
                            Guests{' '}
                        </MText>
                        <MText
                            textStyle={
                                COMMON.TxtSelectRoomReviewReservation452
                            }>
                            {getFacilities()}
                        </MText>
                        <MText textStyle={COMMON.TitleGrayText}>
                            Hotel Messages{' '}
                        </MText>
                        <MText
                            textStyle={[
                                COMMON.NormalText,
                                { marginBottom: METRIC_SIZES.small },
                            ]}>
                            Experience space modern convenience in the city of
                            angels at residence inn los angeles L.A Live. our
                            dual branded ...{' '}
                        </MText>
                        <MText textStyle={COMMON.TitleGrayText}>
                            Summary Of Charges{' '}
                        </MText>
                        {data?.hotel_getRoom?.result?.roomPrices?.map(
                            (item) => (
                                <View style={COMMON.RowItemCenter}>
                                    <MText
                                        textStyle={
                                            COMMON.GrayNormalTextNoBottom
                                        }>
                                        {item?.date}
                                    </MText>

                                    <MText
                                        textStyle={
                                            COMMON.GrayNormalTextNoBottom
                                        }>
                                        {item?.price} USD
                                    </MText>
                                </View>
                            ),
                        )}

                        <View style={COMMON.RowItemCenter}>
                            <MText textStyle={COMMON.GrayNormalTextNoBottom}>
                                taxes & fees{' '}
                            </MText>
                            <MText textStyle={COMMON.GrayNormalTextNoBottom}>
                                54.00 USD{' '}
                            </MText>
                        </View>
                        <View
                            style={[
                                COMMON.RowItemCenter,
                                {
                                    marginTop: METRIC_SIZES.tiny,
                                    marginBottom: METRIC_SIZES.small,
                                },
                            ]}>
                            <MText textStyle={COMMON.NormalText}>total </MText>
                            <MText textStyle={COMMON.NormalText}>
                                {totalP}
                            </MText>
                        </View>
                        <MText textStyle={COMMON.TitleGrayText}>
                            Guest Information{' '}
                        </MText>
                        <MText textStyle={COMMON.NormalText}>
                            {userInfo?.fullName}
                        </MText>
                        <MText textStyle={COMMON.NormalText}>
                            Member number : {userInfo?.id}
                        </MText>
                        <MText textStyle={COMMON.NormalText}>
                            {userInfo?.email}
                        </MText>
                        <View style={{ height: 60 }} />
                        <MButton
                            onPress={() => navigation.navigate('Paymentmethod')}
                            style={[
                                COMMON.ButtonRectColor988,
                                { backgroundColor: 'trnasparent' },
                            ]}
                            containerStyle={COMMON.ButtonRectColor988}
                            text={'Book Now ' + totalP + ' USD'}
                            textStyle={COMMON.TextsButton}
                            color={COLORS.Color988}
                        />
                    </View>
                </ScrollView>
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
    SelectRoomReviewReservation: {
        backgroundColor: COLORS.Color304,
        height: '100%',
    },
});
export default SelectRoomReviewReservation;
