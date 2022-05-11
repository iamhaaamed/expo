import React from 'react';
import { useRef, useEffect } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS, METRIC_SIZES } from 'constants/common';
import { MText, MButton, MCheckBox, MIcon } from 'components/common';
import ConfigItem from 'components/elements/ConfigItem';
import setReservationItems from 'store/setReservationItems';
import { useIsFocused } from '@react-navigation/native';

const Dates2 = createScreen(
    ({ navigation, route }) => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();
        const isFocused = useIsFocused();

        const [data, setData] = useState(
            setReservationItems((state) => state.reservation),
        );
        useEffect(() => {
            console.log(data);
            setData(data);
        }, [isFocused]);
        return (
            <View style={styles.Dates2}>
                <ScrollView>
                    <View style={COMMON.MainView}>
                        <View style={[COMMON.RowItemStart]}>
                            <MIcon
                                name="map-marker"
                                color={COLORS.Color988}
                                size={24}
                            />
                            <MText
                                textStyle={[
                                    COMMON.TxtUpcommingReservationmanagereservations197,
                                ]}>
                                Location
                            </MText>
                        </View>
                        <MText
                            textStyle={
                                COMMON.TxtUpcommingReservationmanagereservations198
                            }>
                            {data?.hotelName}
                        </MText>
                        <View
                            style={
                                COMMON.LineUpcommingReservationmanagereservations199
                            }></View>
                        <View style={COMMON.RowItemStart}>
                            <MIcon
                                name="calendar-blank"
                                color={COLORS.Color988}
                                size={24}
                            />
                            <MText
                                textStyle={
                                    COMMON.TxtUpcommingReservationmanagereservations197
                                }>
                                Dates{' '}
                            </MText>
                        </View>
                        <MText
                            textStyle={
                                COMMON.TxtUpcommingReservationmanagereservations201
                            }>
                            {data?.checkIn}
                            {'              '} {data?.checkOut}
                        </MText>
                        <View
                            style={
                                COMMON.LineUpcommingReservationmanagereservations199
                            }></View>
                        <MText
                            textStyle={
                                COMMON.TxtUpcommingReservationmanagereservations203
                            }>
                            Guests{' '}
                        </MText>
                        <ConfigItem
                            text={
                                data?.numberOfAdults +
                                data?.numberOfChilds +
                                ' guest'
                            }
                            rightIconColor={COLORS.Color988}
                            textColor={COLORS.Color304}
                            onPress={() =>
                                navigation.navigate('Dates3', {
                                    data: route?.params,
                                })
                            }
                        />
                        <View
                            style={
                                COMMON.LineUpcommingReservationmanagereservations199
                            }></View>
                        <MText
                            textStyle={
                                COMMON.TxtUpcommingReservationmanagereservations208
                            }>
                            Special Rates & Points{' '}
                        </MText>
                        <ConfigItem
                            text="Lowest Regula Rate"
                            rightIconColor={COLORS.Color988}
                            textColor={COLORS.Color304}
                            onPress={() =>
                                navigation.navigate('Dates4', {
                                    data: route?.params,
                                })
                            }
                        />
                        <View
                            style={
                                COMMON.LineUpcommingReservationmanagereservations199
                            }></View>
                        <MText
                            textStyle={
                                COMMON.TxtUpcommingReservationmanagereservations213
                            }>
                            Currency{' '}
                        </MText>
                        <ConfigItem
                            text="USD"
                            rightIconColor={COLORS.Color988}
                            textColor={COLORS.Color304}
                        />
                        <View
                            style={
                                COMMON.LineUpcommingReservationmanagereservations217
                            }></View>
                    </View>
                </ScrollView>
                <View
                    style={{
                        backgroundColor: COLORS.Color850,
                        padding: METRIC_SIZES.small,
                    }}>
                    <MButton
                        onPress={() => navigation.navigate('SelectRoom')}
                        style={[
                            COMMON.ButtonRectColor988,
                            { backgroundColor: 'transparent' },
                        ]}
                        containerStyle={COMMON.ButtonRectColor988}
                        text="Check Availability"
                        textStyle={COMMON.TextsButton}
                        color={COLORS.Color988}
                    />
                </View>
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
    Dates2: {
        backgroundColor: COLORS.Color980,
        height: '100%',
    },
});
export default Dates2;
