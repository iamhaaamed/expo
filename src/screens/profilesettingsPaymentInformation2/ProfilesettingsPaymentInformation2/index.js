import { MButton, MInput, MText } from 'components/common';
import { createScreen } from 'components/elements';
import { COLORS, METRIC_SIZES } from 'constants/common';
import useTheme from 'hooks/useTheme';
import React, { useRef } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { verticalScale } from 'utils';

const ProfilesettingsPaymentInformation2 = createScreen(
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
        return (
            <ScrollView>
                <View style={styles.ProfilesettingsPaymentInformation2}>
                    <MText
                        textStyle={
                            COMMON.TxtProfilesettingsPaymentInformation29
                        }>
                        Add A Card{' '}
                    </MText>
                    <View
                        style={
                            COMMON.SectionPaddingProfilesettingsPaymentInformation210
                        }>
                        <MText
                            textStyle={
                                COMMON.TxtProfilesettingsPaymentInformation211
                            }>
                            Card Number{' '}
                        </MText>
                        <MInput
                            inputStyle={COMMON.InputRect23}
                            containerStyle={COMMON.Input34}
                            placeholder="**** **** **** ****"
                            placeholderColor={COLORS.Color780}
                            textStyle={COMMON.TextsInput13}
                            backgroundColor={COLORS.Color304}
                            height={verticalScale(42)}
                        />
                    </View>
                    <View
                        style={
                            COMMON.SectionPaddingProfilesettingsPaymentInformation215
                        }>
                        <MText
                            textStyle={
                                COMMON.TxtProfilesettingsPaymentInformation216
                            }>
                            Card Nickname(Optional){' '}
                        </MText>
                        <MInput
                            inputStyle={COMMON.InputRect23}
                            containerStyle={COMMON.Input34}
                            placeholder="write your full name "
                            placeholderColor={COLORS.Color780}
                            textStyle={COMMON.TextsInput18}
                            backgroundColor={COLORS.Color304}
                            height={verticalScale(42)}
                        />
                    </View>
                    <View
                        style={
                            COMMON.SectionPaddingProfilesettingsPaymentInformation220
                        }>
                        <MText
                            textStyle={
                                COMMON.TxtProfilesettingsPaymentInformation221
                            }>
                            Card Type{' '}
                        </MText>
                        <MInput
                            inputStyle={COMMON.InputRect23}
                            containerStyle={COMMON.Input34}
                            backgroundColor={COLORS.Color304}
                            height={verticalScale(42)}
                        />
                    </View>
                    <View
                        style={
                            COMMON.SectionPaddingProfilesettingsPaymentInformation224
                        }>
                        <MText
                            textStyle={
                                COMMON.TxtProfilesettingsPaymentInformation225
                            }>
                            Zip/Postal Card{' '}
                        </MText>
                        <MInput
                            inputStyle={COMMON.InputRect23}
                            containerStyle={COMMON.Input34}
                            backgroundColor={COLORS.Color304}
                            height={verticalScale(42)}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View
                            style={
                                COMMON.SectionPaddingProfilesettingsPaymentInformation232
                            }>
                            <MText
                                textStyle={
                                    COMMON.TxtProfilesettingsPaymentInformation229
                                }>
                                Expireration Date{' '}
                            </MText>
                            <MInput
                                inputStyle={COMMON.InputRect23}
                                containerStyle={COMMON.Input34}
                                backgroundColor={COLORS.Color304}
                                height={verticalScale(42)}
                            />
                        </View>
                        <View style={{ width: '10%' }} />
                        <View
                            style={
                                COMMON.SectionPaddingProfilesettingsPaymentInformation232
                            }>
                            <MText
                                textStyle={
                                    COMMON.TxtProfilesettingsPaymentInformation233
                                }>
                                Cvv{' '}
                            </MText>
                            <MInput
                                inputStyle={COMMON.InputRect23}
                                containerStyle={COMMON.Input34}
                                backgroundColor={COLORS.Color304}
                                height={verticalScale(42)}
                            />
                        </View>
                    </View>
                    <MButton
                        onPress={onPress}
                        style={COMMON.ButtonRect37}
                        containerStyle={COMMON.Button36}
                        text="Done"
                        textStyle={COMMON.TextsButton38}
                        color={COLORS.Color988}
                    />
                </View>
            </ScrollView>
        );
    },
    {
        scrollView: false,
        paddingBottom: false,
        paddingTop: false,
    },
);
const styles = StyleSheet.create({
    ProfilesettingsPaymentInformation2: {
        backgroundColor: COLORS.Color304,
        height: '100%',
        padding: METRIC_SIZES.small,
    },
});
export default ProfilesettingsPaymentInformation2;
