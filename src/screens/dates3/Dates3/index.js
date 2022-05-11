import {
    MButton,
    MFlatList,
    MIcon,
    MText,
    MTouchable,
} from 'components/common';
import { createScreen } from 'components/elements';
import { COLORS, METRIC_SIZES } from 'constants/common';
import useTheme from 'hooks/useTheme';
import React, { useRef, useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { DEVICE_WIDTH } from './../../../constants/common';
import setReservationItems from 'store/setReservationItems';

const Dates3 = createScreen(
    ({ navigation, route }) => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();
        const [adultCount, setAdultCount] = useState(1);
        const [childCount, setChildCount] = useState(0);
        const [selectedAge, setSelectedAge] = useState({
            id: 0,
            text: '0 to 12 Months',
        });
        const [flatListVisible, setFlatlistVisible] = useState(false);
        const reservation = setReservationItems((state) => state.reservation);
        const setReservation = setReservationItems(
            (state) => state.setReservation,
        );

        useEffect(() => {
            setAdultCount(reservation?.numberOfAdults ?? 1);
            setChildCount(reservation?.numberOfChilds ?? 0);
        }, []);
        const saveData = () => {
            console.log('RRRRRRRR111111111 ', reservation);
            // if(route?.params?.update)
            if (reservation == null) {
                setReservation({
                    numberOfAdults: adultCount,
                    numberOfChilds: childCount,
                    childrensAge: selectedAge.text,
                });
            } else {
                const R = Object.assign(reservation, {
                    numberOfAdults: adultCount,
                    numberOfChilds: childCount,
                    childrensAge: selectedAge.text,
                });
                setReservation(R);
                console.log('RRRRRRRR ', R);
            }
            navigation.goBack();
        };
        console.log(reservation);
        return (
            <View style={styles.Dates3}>
                <ScrollView>
                    {/* <SectionTop style={COMMON.EleDates3113} /> */}
                    <View style={[COMMON.RowItemCenter, styles.lightView]}>
                        <MText
                            textStyle={[
                                COMMON.TxtMedium,
                                { color: COLORS.white },
                            ]}>
                            {adultCount + childCount} Guests
                        </MText>
                        <MButton
                            onPress={() => navigation.goBack()}
                            style={COMMON.buttonRect115}
                            text="Cancel"
                            textStyle={COMMON.Textsbutton116}
                            color={COLORS.Color850}
                        />
                    </View>
                    <View style={{ padding: METRIC_SIZES.small }}>
                        <MText textStyle={COMMON.TxtDates3117}>
                            Maximum: 8 Total Guests Per Room{' '}
                        </MText>
                        <View style={COMMON.RowItemCenter}>
                            <MText textStyle={COMMON.TxtDates3118}>
                                Adults Per Room{' '}
                            </MText>
                            <View style={{ flex: 1 }} />
                            <MButton
                                text={'+'}
                                textStyle={COMMON.TextsButton}
                                style={{ backgroundColor: COLORS.Color980 }}
                                onPress={() => {
                                    if (adultCount < 4)
                                        setAdultCount(adultCount + 1);
                                }}
                            />
                            <MText textStyle={styles.orangeText}>
                                {adultCount}
                            </MText>
                            <MButton
                                text={'-'}
                                textStyle={COMMON.TextsButton}
                                style={{ backgroundColor: COLORS.Color980 }}
                                onPress={() => {
                                    if (adultCount > 1)
                                        setAdultCount(adultCount - 1);
                                }}
                            />
                        </View>
                        <View style={COMMON.LineDates3119}></View>
                        <View style={COMMON.RowItemCenter}>
                            <MText textStyle={COMMON.TxtDates3118}>
                                Child Per Room{' '}
                            </MText>
                            <View style={{ flex: 1 }} />
                            <MButton
                                text={'+'}
                                textStyle={COMMON.TextsButton}
                                style={{ backgroundColor: COLORS.Color980 }}
                                onPress={() => {
                                    if (childCount < 4)
                                        setChildCount(childCount + 1);
                                }}
                            />
                            <MText textStyle={styles.orangeText}>
                                {childCount}
                            </MText>
                            <MButton
                                text={'-'}
                                textStyle={COMMON.TextsButton}
                                style={{ backgroundColor: COLORS.Color980 }}
                                onPress={() => {
                                    if (childCount > 0)
                                        setChildCount(childCount - 1);
                                }}
                            />
                        </View>
                        <View style={COMMON.LineDates3121}></View>
                    </View>
                    <View style={[COMMON.RowItemCenter, styles.lightView]}>
                        <MText textStyle={COMMON.TxtDates3122}>
                            Age-Based Rates May Be Available{' '}
                        </MText>
                    </View>
                    <View style={[styles.lightView]}>
                        <MTouchable
                            onPress={() =>
                                setFlatlistVisible(!flatListVisible)
                            }>
                            <View style={COMMON.RowItemCenter}>
                                <MText textStyle={COMMON.TextsButton}>
                                    Child 1 Age (Required)
                                </MText>
                                <MIcon
                                    name={'chevron-down'}
                                    color={COLORS.Color988}
                                />
                            </View>
                        </MTouchable>
                        {flatListVisible && (
                            <View>
                                <View style={styles.doneView}>
                                    <View style={{ flex: 1 }} />
                                    <MText textStyle={styles.orangeText}>
                                        Done
                                    </MText>
                                </View>
                                <View
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: DEVICE_WIDTH,
                                    }}>
                                    <MFlatList
                                        data={[
                                            { text: '0 to 12 Months', id: 0 },
                                            { text: '1', id: 1 },
                                            { text: '2', id: 2 },
                                            { text: '3', id: 3 },
                                            { text: '4', id: 4 },
                                            { text: '5', id: 5 },
                                        ]}
                                        renderComponent={({
                                            item,
                                            onPress,
                                            selectedId,
                                        }) => {
                                            return (
                                                <MTouchable
                                                    //onPress={() => console.log('Press ' + item.id)}
                                                    onPress={() =>
                                                        setSelectedAge(item)
                                                    }
                                                    type="opacity">
                                                    <MText
                                                        textStyle={
                                                            item.id ===
                                                            selectedAge.id
                                                                ? styles.selectedAge
                                                                : styles.ageTxt
                                                        }>
                                                        {item.text}
                                                    </MText>
                                                </MTouchable>
                                            );
                                        }}
                                    />
                                </View>
                            </View>
                        )}
                    </View>
                </ScrollView>
                <View style={styles.lightView}>
                    <MButton
                        onPress={() => saveData()}
                        style={[
                            COMMON.ButtonRectColor988,
                            { backgroundColor: 'transparent' },
                        ]}
                        containerStyle={[COMMON.ButtonRectColor988]}
                        text="Apply"
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
        padding: METRIC_SIZES.small,
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
export default Dates3;
