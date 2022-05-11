import React from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';
import setReservationItems from 'store/setReservationItems';

import { MText, Container } from 'components/common';
import { SectionTop } from 'components/Sections';
import CircleItem from 'components/elements/CircleItem';
import { useGetRoom } from 'hooks/Booking';
const SelectRoomroomdetails = createScreen(
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

        const { isLoading, data } = useGetRoom({
            roomId: route?.params?.id,
        });
        console.log('rrrrrrr!!!', data?.hotel_getRoom?.result?.roomFacilities);

        return (
            <Container
                loadingOnPage={isLoading}
                style={styles.SelectRoomroomdetails}>
                <ScrollView>
                    <View style={COMMON.MainView}>
                        <MText textStyle={COMMON.TxtSelectRoomroomdetails301}>
                            2 Double Beds, Guest Room{' '}
                        </MText>
                        <MText textStyle={COMMON.NormalText}>
                            {reservation?.hotelName}
                        </MText>
                        <MText textStyle={COMMON.TxtSelectRoomroomdetails301}>
                            Room Overview{' '}
                        </MText>
                        <CircleItem text={'Guest Room'} />
                        <MText textStyle={COMMON.TxtSelectRoomroomdetails301}>
                            Beds & Bedding{' '}
                        </MText>
                        <CircleItem text={'Maximum Occupancy  4'} />
                        <CircleItem text={'Rollaway Beds Not Permitted'} />
                        <CircleItem text={'Cribs Permitted  1'} />
                        <MText textStyle={COMMON.TxtSelectRoomroomdetails301}>
                            Room Features{' '}
                        </MText>
                        {data?.hotel_getRoom?.result?.roomFacilities?.map(
                            (item) => (
                                <CircleItem
                                    text={item?.title + 'Air-Conditioned'}
                                />
                            ),
                        )}
                        {/* <CircleItem text={'Air-Conditioned'} />
                        <CircleItem text={'This Room is non-smoking'} />
                        <CircleItem text={'Windows, soundproof'} /> */}
                        <MText textStyle={COMMON.TxtSelectRoomroomdetails301}>
                            Bath and bathRoom featues{' '}
                        </MText>
                        <CircleItem text={'Hair dryer'} />
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
    SelectRoomroomdetails: {
        backgroundColor: COLORS.Color304,
        height: '100%',
    },
});
export default SelectRoomroomdetails;
