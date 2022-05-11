import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MButton, MText } from 'components/common';
import useTheme from 'hooks/useTheme';
import { createScreen } from 'components/elements';

const pages = [
    {
        text: 'ProfilesettingsPaymentInformation2',
        navName: 'ProfilesettingsPaymentInformation2',
    },
    { text: 'LockDoor3', navName: 'LockDoor3' },
    { text: 'Dinningfeaturelist', navName: 'Dinningfeaturelist' },
    { text: 'Paymenttermcondition2', navName: 'Paymenttermcondition2' },
    { text: 'Paymenttermcondition', navName: 'Paymenttermcondition' },
    { text: 'Dates3', navName: 'Dates3' },
    { text: 'InRoomService', navName: 'InRoomService' },
    {
        text: 'UpcommingReservationcheckin',
        navName: 'UpcommingReservationcheckin',
    },
    { text: 'LockDoor2', navName: 'LockDoor2' },
    {
        text: 'ProfilesettingsPersonalInformation',
        navName: 'ProfilesettingsPersonalInformation',
    },
    {
        text: 'ProfileRoomPreferenceroomtype',
        navName: 'ProfileRoomPreferenceroomtype',
    },
    { text: 'UnlockDoor', navName: 'UnlockDoor' },
    {
        text: 'UpcommingReservationmanagereservations',
        navName: 'UpcommingReservationmanagereservations',
    },
    { text: 'ProfileRoomPreference', navName: 'ProfileRoomPreference' },
    { text: 'Forgotpassword', navName: 'Forgotpassword' },
    { text: 'Onboarding2', navName: 'Onboarding2' },
    { text: 'ParkingTransit', navName: 'ParkingTransit' },
    { text: 'Termconditionn2', navName: 'Termconditionn2' },
    { text: 'SelectRoomroomdetails', navName: 'SelectRoomroomdetails' },
    { text: 'LockDoor', navName: 'LockDoor' },
    { text: 'Profile', navName: 'Profile' },
    { text: 'InRoomService3', navName: 'InRoomService3' },
    { text: 'Dates4', navName: 'Dates4' },
    { text: 'Attractions', navName: 'Attractions' },
    { text: 'Fitness', navName: 'Fitness' },
    { text: 'Profilesettings', navName: 'Profilesettings' },
    { text: 'Dinnings2', navName: 'Dinnings2' },
    { text: 'Spa', navName: 'Spa' },
    { text: 'Paymentmethod', navName: 'Paymentmethod' },
    {
        text: 'SelectRoomReviewReservation',
        navName: 'SelectRoomReviewReservation',
    },
    { text: 'UnlockDoor4', navName: 'UnlockDoor4' },
    { text: 'UnlockDoor2', navName: 'UnlockDoor2' },
    { text: 'UnlockDoor3', navName: 'UnlockDoor3' },
    { text: 'ProfileMemberSupport', navName: 'ProfileMemberSupport' },
    {
        text: 'ProfileRoomPreferenceroomlocaton',
        navName: 'ProfileRoomPreferenceroomlocaton',
    },
    { text: 'NavigateToMyRoom', navName: 'NavigateToMyRoom' },
    {
        text: 'Profilesettingschangepassword',
        navName: 'Profilesettingschangepassword',
    },
    {
        text: 'SelectRoomFilterYourResults',
        navName: 'SelectRoomFilterYourResults',
    },
    { text: 'Accessibility', navName: 'Accessibility' },
    { text: 'SelectRoom', navName: 'SelectRoom' },
    { text: 'ProfileProgramBenefits', navName: 'ProfileProgramBenefits' },
    { text: 'InRoomService2', navName: 'InRoomService2' },
    { text: 'Dates2', navName: 'Dates2' },
    { text: 'Onboarding', navName: 'Onboarding' },
    { text: 'Dinnings', navName: 'Dinnings' },
    { text: 'NavigateToMyRoom2', navName: 'NavigateToMyRoom2' },
    { text: 'Termcondition', navName: 'Termcondition' },
    {
        text: 'ProfileRoomPreferencebedtype',
        navName: 'ProfileRoomPreferencebedtype',
    },
    {
        text: 'UpcommingReservationcheckin2',
        navName: 'UpcommingReservationcheckin2',
    },
    { text: 'Forgotpassword1', navName: 'Forgotpassword1' },
    { text: 'Amentities', navName: 'Amentities' },
    { text: 'ProfileFavorite', navName: 'ProfileFavorite' },
    { text: 'Recommendation', navName: 'Recommendation' },
    {
        text: 'ProfileSettingPaymentInformation',
        navName: 'ProfileSettingPaymentInformation',
    },
    { text: 'Checkout1', navName: 'Checkout1' },
    { text: 'SelectHotel', navName: 'SelectHotel' },
    { text: 'HomeTab', navName: 'HomeTab' },
    { text: 'SignupDone', navName: 'SignupDone' },
    { text: 'Signupstep1Verify', navName: 'Signupstep1Verify' },
    { text: 'Signupstep3', navName: 'Signupstep3' },
    { text: 'Signupstep1', navName: 'Signupstep1' },
    { text: 'Signupstep2', navName: 'Signupstep2' },
    { text: 'UserSignin', navName: 'UserSignin' },
    { text: 'CurrentHotel', navName: 'CurrentHotel' },
    { text: 'ChatPage', navName: 'ChatPage' },
    { text: 'HotelPhotoGallery', navName: 'HotelPhotoGallery'}
];

const HomeScreen = createScreen(
    ({ navigation, route }) => {
        const { TYPOGRAPHY, LAYOUT, GUTTERS } = useTheme();
        return (
            <View style={[LAYOUT.fill, LAYOUT.center, styles.screen]}>
                <MText
                    containerStyle={[GUTTERS.smallVMargin]}
                    textStyle={TYPOGRAPHY.titleRegular}>
                    Model Template
                </MText>
                {pages.map((page) => (
                    <View key={page.navName}>
                        <MButton
                            text={page.text}
                            onPress={() => navigation.navigate(page.navName)}
                            type="native"
                        />
                    </View>
                ))}
            </View>
        );
    },
    { scrollView: true },
);

const styles = StyleSheet.create({
    screen: {},
});

export default HomeScreen;
