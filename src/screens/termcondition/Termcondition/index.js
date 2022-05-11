import { MButton, MCheckBox, MText } from 'components/common';
import { createScreen } from 'components/elements';
import { SectionTop } from 'components/Sections';
import { COLORS } from 'constants/common';
import useTheme from 'hooks/useTheme';
import React, { useRef, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

const termcondition = createScreen(
    () => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();

        const clickCounter = useRef(0);
        const onPress = () => {
            console.log(`Clicked! ${clickCounter.current}`);
            clickCounter.current = clickCounter.current + 1;
        };

        const [isChecked, setIsChecked] = useState(false);

        return (
            <View style={styles.termcondition}>
                <ScrollView>
                    <MText textStyle={COMMON.Txttermcondition666}>
                        <MText textStyle={COMMON.Txttermcondition666bold}>
                            1. Hotel booking process
                        </MText>
                        {` \nIn the context of the hotel booking process – whether this takes place online on brand websites, through an online booking channel, via a travel agent, through our call center or directly at the hotel – we process your Personal Data for the purpose of (i) enabling you to reserve a room in the hotel of your choice; (ii) verifying the availability of the hotel and  to administer the booking; (iii) sending you a booking  confirmation; and (iv) sending you pre-arrival emails. You may unsubscribe from pre-arrival emails at any time by clicking on the unsubscribe link in the emails sent to you.\n\n`}
                        Processed data categories
                        {`\n\n Address, Booking details (including reservation number), Date of arrival and departure, Email address, First name / Last name, First name / Last name of adult co-guest(s), Payment card type, number and expiration date, membership number, Telephone number, Title \n\n`}
                        Source of data
                        {`\n\nDepending on the booking mechanism used: \n- Directly from you through the online booking form \n- Through the online booking channel you used to make the booking \n- From your travel agent \n- From our call center \n- From the hotel you made a direct booking with\n\n`}
                        Ground for processing
                        {`\n\nProcessing is necessary to take steps to enter into and perform a contract. \nRecipients of data \n- The hotel of your choice \n- Other Hotel Group entities involved \n- IT service providers involved in the (online) \n\n`}
                        booking process
                        {`\n\n- IT service providers \n- Email communications service provider\n\n`}
                        {`Total estimated cost for stay includes the room rate, estimated taxes, and estimated fees.Total estimated cost for a stay does not include any additional applicable service charges or fees that may be charged by the hotel. Estimated taxes and estimated fees include applicable local taxes, governmental fees,and resort fees as estimated by the hotel. Actual taxes and fees may vary.\n Currency conversions are estimates and are provided for comparison purposes only. \nThe final cost for stay is charged in the hotel’s local currency. \nGuests are required to present to submit valid and legal photo identification along with valid credit card details, for related charges during the stay. \nThe guest who made the booking must be the holder of the bank card. \nIn case a card is not presented, prepayment will be returned, and a different payment method will be required. \nThe rate details are displayed for comparison purposes only and reflect the rate prior to the offered discount. \nThe rate rules may vary based on and not limited to dates selected, length of stay, type of rate, any additional services, etc.`}
                    </MText>
                    <MCheckBox
                        isChecked={isChecked}
                        setIsChecked={() => setIsChecked((p) => !p)}
                        style={COMMON.CheckBox667}>
                        <MText textStyle={COMMON.TextsCheckBox668}>
                            I read term and conditions and i am agree with them
                        </MText>
                    </MCheckBox>
                    <MButton
                        onPress={onPress}
                        style={COMMON.ButtonRect670}
                        containerStyle={COMMON.Button669}
                        text="continue"
                        textStyle={COMMON.TextsButton671}
                        color={COLORS.Color780}
                    />
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
    termcondition: {
        backgroundColor: COLORS.Color304,
        height: '100%',
        paddingHorizontal: '5%',
    },
});
export default termcondition;
