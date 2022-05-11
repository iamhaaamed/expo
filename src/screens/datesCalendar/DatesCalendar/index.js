import { MButton, MCheckBox, MText } from 'components/common';
import { createScreen } from 'components/elements';
import {
    COLORS,
    DEVICE_HEIGHT,
    DEVICE_WIDTH,
    METRIC_SIZES,
} from 'constants/common';
import useTheme from 'hooks/useTheme';
import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { CalendarList, LocaleConfig } from 'react-native-calendars';
import setReservationItems from 'store/setReservationItems';
import { scale } from 'utils';
const todayDate = new Date();
LocaleConfig.locales['En'] = {
    monthNames: [
        'JANUARY',
        'FEBRUARY',
        'MARCH',
        'APRIL',
        'MAY',
        'JUNE',
        'JULY',
        'AUGUST',
        'SEPTEMBER',
        'OCTOBER',
        'NOVEMBER',
        'DECEMBER',
    ],
    monthNamesShort: [
        'JANUARY',
        'FEBRUARY',
        'MARCH',
        'APRIL',
        'MAY',
        'JUNE',
        'JULY',
        'AUGUST',
        'SEPTEMBER',
        'OCTOBER',
        'NOVEMBER',
        'DECEMBER',
    ],
    dayNames: ['S', 'S', 'M', 'T', 'W', 'T', 'F'],
    dayNamesShort: ['S', 'S', 'M', 'T', 'W', 'T', 'F'],
    today: 'TODAY',
};

const DayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
LocaleConfig.defaultLocale = 'En';
const DatesCalendar = createScreen(
    ({ navigation, route }) => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();
        const [isChecked1, setIsChecked1] = useState(false);
        const [FirstDaySelected, setFirstDaySelected] = useState('');
        const [SecondDaySelected, setSecondDaySelected] = useState('');
        const [markedDate, setMarkedDate] = useState({});
        const setReservation = setReservationItems(
            (state) => state.setReservation,
        );
        const reservation = setReservationItems((state) => state.reservation);
        useEffect(() => {
            setMarkedDate({
                [FirstDaySelected.toString()]: {
                    startingDay: true,
                    color: '#C61C33',
                    textColor: 'white',
                },
                [SecondDaySelected.toString()]: {
                    endingDay: true,
                    color: '#C61C33',
                    textColor: 'white',
                },
            });
        }, [FirstDaySelected, SecondDaySelected]);
        const navigateToDates2 = () => {
            setReservation({
                checkIn: FirstDaySelected,
                checkOut: SecondDaySelected,
                flexibleTime: isChecked1,
                hotelName: route?.params.hotelName,
                hotelId: route?.params.hotelId,
                numberOfAdults: 1,
                numberOfChilds: 0,
            });
            navigation.navigate('Dates2');
        };
        return (
            <View style={styles.Dates3}>
                <View
                    style={[
                        COMMON.RowItemCenter,
                        COMMON.MainView,
                        {
                            paddingHorizontal: '5%',
                            borderTopColor: '#7570A4',
                            borderBottomColor: '#7570A4',
                            borderWidth: 1,
                        },
                    ]}>
                    <MText
                        style={{
                            color: 'white',
                            fontSize: scale(16),
                        }}>
                        {FirstDaySelected}
                    </MText>
                    <MText
                        style={{
                            color: 'white',
                            fontSize: scale(16),
                        }}>
                        {SecondDaySelected}
                    </MText>
                    <TouchableOpacity
                        onPress={() => {
                            setFirstDaySelected('');
                            setSecondDaySelected('');
                        }}>
                        <MText
                            style={{
                                color: '#FF5A5F',
                                fontSize: scale(14),
                            }}>
                            Cancel
                        </MText>
                    </TouchableOpacity>
                </View>
                <View
                    style={[
                        COMMON.RowItemCenter,
                        {
                            backgroundColor: '#5B5BA6',
                            paddingHorizontal: '8.5%',
                            borderTopColor: '#7570A4',
                            borderBottomColor: '#7570A4',
                            paddingVertical: 5,
                            borderWidth: 1,
                        },
                    ]}>
                    {DayNames.map((item) => (
                        <MText
                            style={{
                                color: 'white',
                                fontSize: scale(17),
                            }}>
                            {item}
                        </MText>
                    ))}
                </View>
                {/* <ScrollView> */}
                <CalendarList
                    // Callback which gets executed when visible months change in scroll view. Default = undefined
                    onVisibleMonthsChange={(months) => {
                        console.log('now these months are visible', months);
                    }}
                    style={{
                        height: DEVICE_HEIGHT * 0.6,
                        width: '100%',
                    }}
                    minDate={new Date()}
                    onDayPress={(day) => {
                        if (FirstDaySelected == '')
                            setFirstDaySelected(day.dateString);
                        else setSecondDaySelected(day.dateString);
                        console.log('selected day', day);
                    }}
                    // Max amount of months allowed to scroll to the past. Default = 50
                    pastScrollRange={50}
                    // Max amount of months allowed to scroll to the future. Default = 50
                    futureScrollRange={50}
                    // Enable or disable scrolling of calendar list
                    scrollEnabled={true}
                    scrollIndicator={true}
                    hideDayNames={true}
                    theme={{
                        backgroundColor: COLORS.Color980,
                        calendarBackground: COLORS.Color980,
                        textSectionTitleColor: 'white',
                        textSectionBackgroundColor: '#7570A4',
                        textSectionTitleDisabledColor: 'red',
                        selectedDayBackgroundColor: 'yellow',
                        // selectedDayTextColor: 'red',

                        todayTextColor: 'white',
                        todayBackgroundColor: '#5B5BA6',
                        dayTextColor: 'white',
                        textDisabledColor: '#5B5BA6',
                        dotColor: '#00adf5',
                        monthTextColor: 'white',
                        indicatorColor: 'white',
                        // textDayFontFamily: 'monospace',
                        // textMonthFontFamily: 'monospace',
                        // textDayHeaderFontFamily: 'monospace',
                        textDayFontWeight: '300',
                        textDayHeaderFontWeight: '300',
                        textDayFontSize: 16,
                        textMonthFontSize: 20,
                        textDayHeaderFontSize: 17,
                    }}
                    markingType={'period'}
                    markedDates={markedDate}
                />
                {console.log(markedDate)}
                {/* <View
                        style={[COMMON.RowItemCenter, styles.lightView]}>

                        </View> */}
                {/* </ScrollView> */}

                <View style={[styles.lightView, { marginBottom: 3 }]}>
                    <MCheckBox
                        activeBorderColor={COLORS.Color988}
                        deActiveBorderColor={COLORS.Color988}
                        activeBackgroundColor={COLORS.Color988}
                        deActiveBackgroundColor={'#5B5BA6'}
                        isChecked={isChecked1}
                        setIsChecked={() => setIsChecked1((p) => !p)}
                        style={COMMON.CheckBox365}>
                        <MText textStyle={COMMON.TextsCheckBoxDate}>
                            My Dates Are Flexible
                        </MText>
                    </MCheckBox>
                </View>
                <View style={styles.lightView}>
                    <MButton
                        onPress={() => navigateToDates2()}
                        style={[
                            COMMON.ButtonRectColor988,
                            { backgroundColor: 'transparent' },
                        ]}
                        containerStyle={[COMMON.ButtonRectColor988]}
                        text="Check Availability"
                        disabled={!FirstDaySelected || !SecondDaySelected}
                        textStyle={COMMON.TextsButton}
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
    Dates3: {
        backgroundColor: COLORS.Color980,
        height: '100%',
    },
    orangeText: {
        color: COLORS.Color988,
        paddingHorizontal: METRIC_SIZES.tiny,
    },
    lightView: {
        backgroundColor: COLORS.Color850,
        padding: METRIC_SIZES.tiny,
        width: '100%',
    },
    ageTxt: {
        color: COLORS.Color780,
        paddingVertical: METRIC_SIZES.tiny,
        width: DEVICE_WIDTH,
        textAlign: 'center',
    },
    selectedAge: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        width: DEVICE_WIDTH,
        borderColor: COLORS.black,
        textAlign: 'center',
        paddingVertical: METRIC_SIZES.tiny,
        color: COLORS.Color988,
    },
    doneView: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        flexDirection: 'row',
        paddingVertical: METRIC_SIZES.tiny,
        marginVertical: METRIC_SIZES.small,
    },
});
export default DatesCalendar;
