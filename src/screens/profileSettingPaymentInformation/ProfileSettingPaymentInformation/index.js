
import React from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView, FlatList } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS, METRIC_SIZES } from 'constants/common';
import { MText, MButton, MInput } from 'components/common';
import { scale, verticalScale, height } from 'utils';
import ConfigItem from 'components/elements/ConfigItem';
import PaymentInfoItem from 'components/elements/PaymentInfoItem';
const ProfileSettingPaymentInformation = createScreen(
    () => {
        const { COMMON } = useTheme();

        const clickCounter = useRef(0);
        const onPress = () => {
            console.log(`Clicked! ${clickCounter.current}`);
            clickCounter.current = clickCounter.current + 1;
        };

        return (

            <View style={styles.ProfileSettingPaymentInformation}>
                <ScrollView>
                    <View style={COMMON.MainView}>
                        <FlatList
                            data={[{ cardNo: '0000-999-0000', name: 'Dexter Morgan', isChecked: true}, { cardNo: '0001-0989-9373-9878', name: 'John' }]}
                            renderItem={({ item }) => (
                                <PaymentInfoItem item={item} />
                            )}
                        />
                        <ConfigItem text={'Add New Card'} />
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
    ProfileSettingPaymentInformation: {
        backgroundColor: COLORS.Color304,
        height: '100%',

    }
});
export default ProfileSettingPaymentInformation;

