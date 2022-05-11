import {
    MButton,
    MCheckBox,
    MIcon,
    MImage,
    MText,
    Container,
} from 'components/common';
import { createScreen } from 'components/elements';
import SelectRoomItem from 'components/elements/SelectRoomItem';
import { COLORS, METRIC_SIZES } from 'constants/common';
import { useAvilabeRooms } from 'hooks/Booking';
import useTheme from 'hooks/useTheme';
import React, { useRef, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { scale } from 'utils';
import setReservationItems from 'store/setReservationItems';

const SelectRoom = createScreen(
    ({ navigation }) => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();
        const reservation = setReservationItems((state) => state.reservation);

        const { isLoading, data } = useAvilabeRooms({
            hotelId: reservation?.hotelId,
            roomAvailabilityInput: {
                checkInAt: reservation?.checkIn,
                checkOutAt: reservation?.checkOut,
                floors: 1,
                numberOfGuests:
                    reservation?.numberOfAdults + reservation?.numberOfChilds,
            },
        });
        console.log(
            '-----------',
            {
                hotelId: reservation?.hotelId,
                roomAvailabilityInput: {
                    checkInAt: reservation?.checkIn,
                    checkOutAt: reservation?.checkOut,
                    floors: 1,
                    numberOfGuests:
                        reservation?.numberOfAdults ??
                        1 + reservation?.numberOfChilds ??
                        0,
                },
            },
            data,
        );
        console.log(data);
        const [isChecked, setIsChecked] = useState(false);
        const getFacilities = (item) => {
            let i = '';
            item?.roomFacilities?.map((value) => {
                i = i + value?.description + ',';
            });
            return i;
        };
        const getPhotos = (item) => {
            let i = [];
            item?.roomPhotos?.map((value) => {
                i.push(value?.photoUrl);
            });
            return i;
        };
        return (
            <Container loadingOnPage={isLoading} style={styles.SelectRoom}>
                <ScrollView>
                    <View style={COMMON.MainView}>
                        <View
                            style={[
                                COMMON.RowItemStart,
                                { marginBottom: METRIC_SIZES.small },
                            ]}>
                            <MImage
                                imageSource={IMAGES.image2482}
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
                        <View style={COMMON.LineSelectRoom572}></View>
                        <View style={[LAYOUT.rowHCenter, styles.reserveItem]}>
                            <MIcon
                                name="calendar-blank"
                                color={COLORS.Color988}
                                size={scale(26)}
                            />
                            <MText>
                                {reservation.checkIn} - {reservation.checkOut}
                            </MText>
                        </View>
                        <MButton
                            style={COMMON.buttonRect575}
                            containerStyle={[
                                COMMON.button574,
                                { marginVertical: METRIC_SIZES.small },
                            ]}
                            text="Preference"
                            textStyle={COMMON.Textsbutton576}
                            color={COLORS.Color304}
                            iconRight={{
                                name: 'filter-variant',
                                color: 'black',
                                size: 32,
                            }}
                            onPress={() =>
                                navigation.navigate(
                                    'SelectRoomFilterYourResults',
                                )
                            }
                        />
                        <MCheckBox
                            isChecked={isChecked}
                            setIsChecked={() => setIsChecked((p) => !p)}
                            containerStyle={[
                                COMMON.CheckBox577,
                                { marginVertical: METRIC_SIZES.small },
                            ]}
                            crossCheckBox={true}>
                            <MText textStyle={COMMON.TextsCheckBox578}>
                                Include Taxes And Fees
                            </MText>
                        </MCheckBox>
                        <MText textStyle={COMMON.NormalText}>
                            {data?.pages.length} Room Types Available
                        </MText>
                        <FlatList
                            data={data?.pages}
                            renderItem={({ item, index }) => (
                                <SelectRoomItem
                                    description={getFacilities(item)}
                                    img={getPhotos(item)}
                                    paymentInfo={
                                        item?.roomPrices[0]?.price ??
                                        0 + ' USD/night'
                                    }
                                    facilities={
                                        isChecked
                                            ? 'Include taxes and fees'
                                            : ''
                                    }
                                    data={item}
                                    navigation={navigation}
                                />
                            )}
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
    SelectRoom: {
        backgroundColor: COLORS.Color304,
        height: '100%',
    },
    reserveItem: {
        padding: METRIC_SIZES.tiny,
    },
});
export default SelectRoom;
