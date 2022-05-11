import { MButton, MCheckBox, MText } from 'components/common';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';
import useTheme from 'hooks/useTheme';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import setReservationItems from 'store/setReservationItems';
import { scale } from 'utils';

const Dates4 = createScreen(
    ({ navigation, route }) => {
        const { COMMON } = useTheme();
        const [isChecked1, setIsChecked1] = useState(false);
        const [isChecked2, setIsChecked2] = useState(false);
        const [isChecked3, setIsChecked3] = useState(false);
        const [isChecked4, setIsChecked4] = useState(false);
        const reservation = setReservationItems((state) => state.reservation);

        const setReservation = setReservationItems(
            (state) => state.setReservation,
        );
        const onPress = () => {
            const R = Object.assign(reservation, {
                lowesRegularRate: isChecked1,
                govermenttMilitary: isChecked2,
                aAACAA: isChecked3,
                seniorDiscount: isChecked4,
            });
            setReservation(R);
            navigation.goBack();
        };
        useEffect(() => {
            console.log('RRRR ', route?.params?.data?.reservation);
            let R = null;
            if (route?.params?.data?.reservation)
                R = route?.params?.data?.reservation;
            else R = reservation;
            setIsChecked1(R?.lowesRegularRate ?? false);
            setIsChecked2(R?.govermenttMilitary ?? false);
            setIsChecked3(R?.aAACAA ?? false);
            setIsChecked4(R?.seniorDiscount ?? false);
        }, []);

        return (
            <View style={styles.Dates4}>
                <ScrollView>
                    <View
                        style={[
                            COMMON.RowItemCenter,
                            COMMON.MainView,
                            { backgroundColor: COLORS.Color850 },
                        ]}>
                        <MText textStyle={COMMON.TxtDates4354}>
                            Lowest Regular Rate{' '}
                        </MText>
                        <MButton
                            style={COMMON.buttonRect356}
                            containerStyle={COMMON.button355}
                            text="Cancel"
                            textStyle={COMMON.Textsbutton357}
                            transparent
                            onPress={() => navigation.goBack()}
                        />
                    </View>
                    <View style={COMMON.MainView}>
                        <MText
                            textStyle={[
                                COMMON.TextsCheckBox363,
                                { paddingVertical: scale(20) },
                            ]}>
                            Select Up To Five Rates{' '}
                        </MText>

                        <MCheckBox
                            activeBorderColor={COLORS.Color988}
                            deActiveBorderColor={COLORS.Color988}
                            activeBackgroundColor={COLORS.Color988}
                            deActiveBackgroundColor={COLORS.Color980}
                            isChecked={isChecked1}
                            setIsChecked={() => setIsChecked1((p) => !p)}
                            style={COMMON.CheckBox365}
                            crossCheckBox={true}>
                            <MText textStyle={COMMON.TextsCheckBox363}>
                                Lowest Regular Rate
                            </MText>
                        </MCheckBox>
                        <View style={COMMON.LineDates4361}></View>

                        <MCheckBox
                            activeBorderColor={COLORS.Color988}
                            deActiveBorderColor={COLORS.Color988}
                            activeBackgroundColor={COLORS.Color988}
                            deActiveBackgroundColor={COLORS.Color980}
                            isChecked={isChecked2}
                            setIsChecked={() => setIsChecked2((p) => !p)}
                            style={COMMON.CheckBox365}
                            crossCheckBox={true}>
                            <MText textStyle={COMMON.TextsCheckBox363}>
                                Govermentt & Military
                            </MText>
                        </MCheckBox>
                        <View style={COMMON.LineDates4361}></View>
                        <MCheckBox
                            activeBorderColor={COLORS.Color988}
                            deActiveBorderColor={COLORS.Color988}
                            activeBackgroundColor={COLORS.Color988}
                            deActiveBackgroundColor={COLORS.Color980}
                            isChecked={isChecked3}
                            setIsChecked={() => setIsChecked3((p) => !p)}
                            style={COMMON.CheckBox365}
                            crossCheckBox={true}>
                            <MText textStyle={COMMON.TextsCheckBox363}>
                                AAA/CAA
                            </MText>
                        </MCheckBox>
                        <View style={COMMON.LineDates4361}></View>

                        <MCheckBox
                            activeBorderColor={COLORS.Color988}
                            deActiveBorderColor={COLORS.Color988}
                            activeBackgroundColor={COLORS.Color988}
                            deActiveBackgroundColor={COLORS.Color980}
                            isChecked={isChecked4}
                            setIsChecked={() => setIsChecked4((p) => !p)}
                            style={COMMON.CheckBox365}
                            crossCheckBox={true}>
                            <MText textStyle={COMMON.TextsCheckBox363}>
                                Senior Discount
                            </MText>
                        </MCheckBox>
                    </View>
                </ScrollView>
                <View
                    style={[
                        COMMON.MainView,
                        { backgroundColor: COLORS.Color850 },
                    ]}>
                    <MButton
                        onPress={onPress}
                        style={[
                            COMMON.ButtonRectColor988,
                            { backgroundColor: 'transparent' },
                        ]}
                        containerStyle={COMMON.ButtonRectColor988}
                        text="Apply"
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
    Dates4: {
        backgroundColor: COLORS.Color980,
        height: '100%',
    },
});
export default Dates4;
