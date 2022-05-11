import React from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS, METRIC_SIZES } from 'constants/common';

import { MText, MButton, MCheckBox, MIcon } from 'components/common';
import { SectionTop04 } from 'components/Sections';
import ConfigItem from 'components/elements/ConfigItem';
import { MaterialIcons } from 'react-native-vector-icons/MaterialIcons';
const UpcommingReservationmanagereservations = createScreen(
    ({ navigation, route }) => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();
        console.log(route?.params?.currentHotel);
        const clickCounter = useRef(0);
        const onPress = () => {
            console.log(`Clicked! ${clickCounter.current}`);
            clickCounter.current = clickCounter.current + 1;
        };
        const data = route?.params?.currentHotel;
        const [isChecked, setIsChecked] = useState(false);
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
            <View style={styles.UpcommingReservationmanagereservations}>
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
                                Location{' '}
                            </MText>
                        </View>
                        <MText
                            textStyle={
                                COMMON.TxtUpcommingReservationmanagereservations198
                            }>
                            {data?.hotel?.name}
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
                                Dates
                            </MText>
                        </View>
                        <MText
                            textStyle={
                                COMMON.TxtUpcommingReservationmanagereservations201
                            }>
                            {getDate(data?.reservation)}
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
                                data?.reservation?.numberOfAdults
                                    ? parseInt(
                                          data?.reservation?.numberOfAdults,
                                      )
                                    : 0 + data?.reservation?.numberOfChilds
                                    ? parseInt(
                                          data?.reservation?.numberOfChilds,
                                      )
                                    : 0 + ' guest'
                            }
                            rightIconColor={COLORS.Color988}
                            textColor={COLORS.Color304}
                            onPress={() =>
                                navigation.navigate('Dates3', {
                                    data: data?.reservation,
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
                                    data: data,
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
                <View style={{ backgroundColor: COLORS.Color850 }}>
                    <MCheckBox
                        deActiveBorderColor={COLORS.Color988}
                        activeBorderColor={COLORS.Color988}
                        activeBackgroundColor={COLORS.Color988}
                        deActiveBackgroundColor={COLORS.Color850}
                        isChecked={isChecked}
                        setIsChecked={() => setIsChecked((p) => !p)}
                        containerStyle={{ padding: METRIC_SIZES.small }}
                        style={COMMON.CheckBox218}>
                        <MText textStyle={COMMON.TextsCheckBox219}>
                            Maintain changes for the same room
                        </MText>
                    </MCheckBox>
                    <View
                        style={{
                            height: '2%',
                            backgroundColor: COLORS.Color980,
                        }}
                    />
                    <View
                        style={{
                            flexDirection: 'row-reverse',
                            paddingHorizontal: METRIC_SIZES.large,
                            paddingVertical: METRIC_SIZES.tiny,
                        }}>
                        <MButton
                            onPress={onPress}
                            style={[
                                COMMON.ButtonRectColor988,
                                { backgroundColor: 'transparent' },
                            ]}
                            containerStyle={[
                                COMMON.ButtonRectColor988,
                                { flex: 1 },
                            ]}
                            text="Cancel Reservation"
                            textStyle={COMMON.TextsButton}
                            color={COLORS.Color988}
                        />
                        <MButton
                            onPress={() =>
                                navigation.navigate('DatesCalendar', {
                                    data: data,
                                })
                            }
                            style={COMMON.ButtonRect224}
                            containerStyle={[COMMON.Button223, { flex: 1 }]}
                            text="Modify"
                            textStyle={COMMON.TextsButton}
                            transparent
                        />
                    </View>
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
    UpcommingReservationmanagereservations: {
        backgroundColor: COLORS.Color980,
        height: '100%',
    },
});
export default UpcommingReservationmanagereservations;
