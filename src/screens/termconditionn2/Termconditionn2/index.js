import { MButton, MCheckBox, MText, Container } from 'components/common';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';
import { mutateReservRoom } from 'hooks/Booking';
import useTheme from 'hooks/useTheme';
import React, { useRef, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { GetData } from 'utils';
import setReservationItems from 'store/setReservationItems';

const termconditionn2 = createScreen(
    ({ navigation, route }) => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();
        const { isLoading, mutate, error } = mutateReservRoom();
        const reservation = setReservationItems((state) => state.reservation);
        const [isChecked, setIsChecked] = useState(false);
        console.log('PRICE: ', route?.params?.price);
        return (
            <Container loadingOnPage={isLoading} style={styles.termconditionn2}>
                <ScrollView>
                    <View style={COMMON.MainView}>
                        <MText textStyle={COMMON.TitleBoldVerticalMargin}>
                            1. Hotel booking process
                        </MText>
                        <MText textStyle={COMMON.NormalTextBottomMargin}>
                            In the context of the hotel booking process –
                            whether this takes place online on brand websites,
                            through an online booking channel, via a travel
                            agent, through our call center or directly at the
                            hotel – we process your Personal Data for the
                            purpose of (i) enabling you to reserve a room in the
                            hotel of your choice; (ii) verifying the
                            availability of the hotel and to administer the
                            booking; (iii) sending you a booking confirmation;
                            and (iv) sending you pre-arrival emails. You may
                            unsubscribe from pre-arrival emails at any time By
                            clicking on the unsubscribe link in the emails sent
                            to you.
                        </MText>

                        <MText textStyle={COMMON.NormalTextBottomMargin}>
                            Processed data categories
                        </MText>
                        <MText textStyle={COMMON.NormalTextBottomMargin}>
                            Address, Booking details (including reservation
                            number), Date of arrival and departure, Email
                            address, First name / Last name, First name / Last
                            name of adult co-guest(s), Payment card type, number
                            and expiration date, membership number, Telephone
                            number, Title
                        </MText>

                        <MText textStyle={COMMON.NormalTextBottomMargin}>
                            Source of data
                        </MText>

                        <MText textStyle={COMMON.NormalTextBottomMargin}>
                            Depending on the booking mechanism used:
                        </MText>
                        <MText textStyle={COMMON.NormalText}>
                            - Directly from you through the online booking form
                        </MText>
                        <MText textStyle={COMMON.NormalText}>
                            - Through the online booking channel you used to
                            make the booking
                        </MText>
                        <MText textStyle={COMMON.NormalText}>
                            - From your travel agent
                        </MText>
                        <MText textStyle={COMMON.NormalText}>
                            - From our call center
                        </MText>
                        <MText textStyle={COMMON.NormalTextBottomMargin}>
                            - From the hotel you made a direct booking with
                        </MText>

                        <MText textStyle={COMMON.NormalTextBottomMargin}>
                            Ground for processing
                        </MText>

                        <MText textStyle={COMMON.NormalTextBottomMargin}>
                            Processing is necessary to take steps to enter into
                            and perform a contract.
                        </MText>
                        <MText textStyle={COMMON.NormalTextBottomMargin}>
                            Recipients of data
                        </MText>
                        <MText textStyle={COMMON.NormalText}>
                            - The hotel of your choice
                        </MText>
                        <MText textStyle={COMMON.NormalText}>
                            - Other Hotel Group entities involved
                        </MText>
                        <MText textStyle={COMMON.NormalTextBottomMargin}>
                            - IT service providers involved in the (online)
                        </MText>

                        <MText textStyle={COMMON.NormalTextBottomMargin}>
                            booking process
                        </MText>

                        <MText textStyle={COMMON.NormalText}>
                            - IT service providers
                        </MText>
                        <MText textStyle={COMMON.NormalTextBottomMargin}>
                            - Email communications service provider
                        </MText>

                        <MText textStyle={COMMON.NormalTextBottomMargin}>
                            Total estimated cost for stay includes the room
                            rate, estimated taxes, and estimated fees. Total
                            estimated cost for a stay does not include any
                            additional applicable service charges or fees that
                            may be charged by the hotel. Estimated taxes and
                            estimated fees include applicable local taxes,
                            governmental fees, and resort fees as estimated by
                            the hotel. Actual taxes and fees may vary.
                        </MText>
                        <MText textStyle={COMMON.NormalTextBottomMargin}>
                            Currency conversions are estimates and are provided
                            for comparison purposes only. The final cost for
                            stay is charged in the hotel’s local currency.
                        </MText>
                        <MText textStyle={COMMON.NormalTextBottomMargin}>
                            Guests are required to present to submit valid and
                            legal photo identification along with valid credit
                            card details, for related charges during the stay.
                            The guest who made the booking must be the holder of
                            the bank card. In case a card is not presented,
                            prepayment will be returned, and a different payment
                            method will be required. The rate details are
                            displayed for comparison purposes only and reflect
                            the rate prior to the offered discount. The rate
                            rules may vary based on and not limited to dates
                            selected, length of stay, type of rate, any
                            additional services, etc.{' '}
                        </MText>

                        <MCheckBox
                            isChecked={isChecked}
                            setIsChecked={() => setIsChecked((p) => !p)}
                            containerStyle={COMMON.CheckBox101}>
                            <View>
                                <MText textStyle={COMMON.TextsCheckBox102}>
                                    I Read Term and Conditions and
                                </MText>
                                <MText textStyle={COMMON.TextsCheckBox102}>
                                    I Am Agree With Them
                                </MText>
                            </View>
                        </MCheckBox>
                        <MButton
                            onPress={async () => {
                                const userInfo = await GetData('USER_INFO');
                                const date1 = new Date(reservation?.checkIn);
                                const date2 = new Date(reservation?.checkOut);
                                const diffTime = Math.abs(date2 - date1);
                                const diffDays = Math.ceil(
                                    diffTime / (1000 * 60 * 60 * 24),
                                );

                                mutate(
                                    {
                                        reservationInputs: {
                                            userId: userInfo?.id,
                                            roomId: route?.params?.id,
                                            aAACAA:
                                                reservation?.aAACAA ?? false,
                                            createAt: '2022-04-25',
                                            stayNight: 10,
                                            checkIn: reservation?.checkIn,
                                            checkOut: reservation?.checkOut,
                                            lateCheckOut: true,
                                            govermenttMilitary:
                                                reservation?.govermenttMilitary ??
                                                false,
                                            price: parseInt(
                                                route?.params?.price ?? 0,
                                            ),
                                            reservedStatus: 'RESERVE',
                                            flexibleTime:
                                                reservation?.flexibleTime,
                                            arrivalAt: reservation?.checkIn,
                                            lowesRegularRate:
                                                reservation?.lowesRegularRate ??
                                                false,
                                            paymentStatus: 'PAID',
                                            seniorDiscount:
                                                reservation?.seniorDiscount ??
                                                false,
                                        },
                                    },
                                    {
                                        onSuccess: async (data) => {
                                            navigation.navigate(
                                                'SelectRoomReviewReservation',
                                                { roomId: route?.params?.id },
                                            );
                                        },
                                        onError: (err) => {
                                            alert(err.message);
                                        },
                                    },
                                );
                            }}
                            style={[
                                COMMON.ButtonRectColor988,
                                { backgroundColor: 'transparent' },
                            ]}
                            containerStyle={[
                                COMMON.ButtonRectColor988,
                                !isChecked && { backgroundColor: '#707070' },
                            ]}
                            text="Continue"
                            textStyle={[COMMON.TextsButton]}
                            color={COLORS.Color988}
                            disabled={!isChecked}
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
    termconditionn2: {
        backgroundColor: COLORS.Color304,
        height: '100%',
    },
});
export default termconditionn2;
