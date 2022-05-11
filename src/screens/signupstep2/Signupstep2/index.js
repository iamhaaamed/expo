import { MButton, MInput, MText } from 'components/common';
import { createScreen } from 'components/elements';
import SectionTopSignUp from 'components/Sections/SectionTopSignUp';
import { COLORS, METRIC_SIZES } from 'constants/common';
import useTheme from 'hooks/useTheme';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { verticalScale } from 'utils';

const signupstep2 = createScreen(
    (props) => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();
        const [fullname, setFullname] = useState();
        const [address, setAddress] = useState();
        const [countryCode, setCountryCode] = useState();
        const [phoneNo, setPhoneNo] = useState();
        const checkInputs = () => {
            if (!phoneNo) return 'phone number is required';
            if (!address) return 'address is required';
            if (!fullname) return 'fullname is required';
            else return null;
        };
        const onPress = () => {
            const result = checkInputs();
            if (result) {
                showMessage({ message: result, type: 'danger' });
                return;
            }
            props.navigation.navigate('Signupstep3', {
                userInput: {
                    address: address,
                    phoneNumber: countryCode + phoneNo,
                    fullName: fullname,
                },
            });
        };

        return (
            <View style={styles.signupstep2}>
                <ScrollView>
                    <View style={COMMON.MainView}>
                        <SectionTopSignUp step={1} />
                        <View style={COMMON.SectionPaddingsignupstep264}>
                            <MText textStyle={COMMON.Txtsignupstep265}>
                                Full Name{' '}
                            </MText>
                            <MInput
                                inputStyle={COMMON.InputRect23}
                                containerStyle={COMMON.Input34}
                                placeholder=" Write Your Full Name "
                                placeholderColor={COLORS.Color780}
                                textStyle={COMMON.TextsInput67}
                                backgroundColor={COLORS.Color304}
                                height={verticalScale(42)}
                                onChangeText={(value) => setFullname(value)}
                            />
                        </View>
                        <View style={COMMON.SectionPaddingsignupstep269}>
                            <MText textStyle={COMMON.Txtsignupstep270}>
                                Address{' '}
                            </MText>
                            <MInput
                                inputStyle={COMMON.InputRect23}
                                containerStyle={COMMON.Input34}
                                placeholder=" Write Your Address "
                                placeholderColor={COLORS.Color780}
                                textStyle={COMMON.TextsInput72}
                                backgroundColor={COLORS.Color304}
                                height={verticalScale(42)}
                                onChangeText={(value) => setAddress(value)}
                            />
                        </View>
                        <View style={COMMON.SectionPaddingsignupstep274}>
                            <MText textStyle={COMMON.Txtsignupstep275}>
                                Phone Number{' '}
                            </MText>
                            <View style={[COMMON.RowItemStart]}>
                                <MInput
                                    inputStyle={COMMON.phoneLeftBox}
                                    containerStyle={styles.phoneLeftBox}
                                    placeholder="+1"
                                    placeholderColor={COLORS.Color780}
                                    textStyle={[
                                        COMMON.TextsInput77,
                                        { textAlign: 'center' },
                                    ]}
                                    backgroundColor={COLORS.Color304}
                                    textAlign="center"
                                    keyboardType="phone-pad"
                                    height={verticalScale(42)}
                                    onChangeText={(value) =>
                                        setCountryCode(value)
                                    }
                                />
                                <MInput
                                    inputStyle={COMMON.phoneRightBox}
                                    containerStyle={styles.phoneRightBox}
                                    placeholderColor={COLORS.Color780}
                                    textStyle={COMMON.TextsInput77}
                                    backgroundColor={COLORS.Color304}
                                    height={verticalScale(42)}
                                    keyboardType={'number-pad'}
                                    onChangeText={(value) => setPhoneNo(value)}
                                />
                            </View>
                        </View>

                        <View style={{ height: 14 }} />
                        <MButton
                            onPress={onPress}
                            style={[
                                COMMON.ButtonRectColor988,
                                { backgroundColor: 'transparent' },
                            ]}
                            containerStyle={COMMON.ButtonRectColor988}
                            text="Next Step"
                            textStyle={COMMON.TextsButton}
                            color={COLORS.Color988}
                        />
                    </View>
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
    signupstep2: {
        backgroundColor: COLORS.Color304,
        height: '100%',
    },
    phoneRightBox: {
        height: verticalScale(50),
        borderTopLeftRadius: 0,
        borderTopRightRadius: METRIC_SIZES.tiny,
        borderBottomRightRadius: METRIC_SIZES.tiny,
        borderBottomLeftRadius: 0,
        flex: 3,
        borderWidth: 1,
        borderColor: COLORS.Color893,
    },
    phoneLeftBox: {
        height: verticalScale(50),
        borderTopLeftRadius: METRIC_SIZES.tiny,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: METRIC_SIZES.tiny,
        borderWidth: 1,
        borderColor: COLORS.Color893,
        flex: 1,
        textAlign: 'center',
    },
});
export default signupstep2;
