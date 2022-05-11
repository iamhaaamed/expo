
import React from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { scale, verticalScale, height } from 'utils';
import LinearGradient from 'react-native-linear-gradient';
import { DateTimePickerMod, } from 'components/common/MDateTimePicker';
import { DrawerItem, DrawerItemList, DrawerContentScrollView, DrawerToggleButton, } from '@react-navigation/drawer';

import { MIcon, MText, MTouchable, MButton, MInput, MImageBackground, MImage, MStatusBar, MSwitch, MCheckBox, MFlatList, MChip, MDropDown, MOnboarding, MDateTimePicker, MImagePicker, MLoading, MModal, MTab, MAccordion, MSnackbar, MSlider } from 'components/common';
import { SectionTop } from 'components/Sections';
const paymenttermcondition = createScreen(
  () => {
    const { LAYOUT, GUTTERS, TYPOGRAPHY, IMAGES, COMMON, CONSTANTS } = useTheme();

    const clickCounter = useRef(0);
    const onPress = () => {
      console.log(`Clicked! ${clickCounter.current}`);
      clickCounter.current = clickCounter.current + 1;
    };





    const [isChecked, setIsChecked] = useState(false);



    return (

      <View style={styles.paymenttermcondition}>
        <ScrollView>

          <MText textStyle={COMMON.Txtpaymenttermcondition107} >Prepaid - Non Refundable

            CANCELLATION POLICY
            Reservation is non refundable. Entire reservation stay will be charged, if cancelled or in case of a no show. 100% penalty.


            Semi Flex

            CANCELLATION POLICY
            Reservation is semi flexible. Free cancellation till 6pm hotel time one week prior to arrival date. After the deadline, the entire reservation stay will be charged in case of late cancellation or a no show.


            Fully Flex

            CANCELLATION POLICY
            Reservation is fully flexible. Free cancellation till 6pm hotel time on the same day of arrival. After the deadline, One night stay will be charged in case of late cancellation or a no show. </MText>
          <MCheckBox isChecked={isChecked} setIsChecked={() => setIsChecked((p) => !p)} style={COMMON.CheckBox108} >
            <MText textStyle={COMMON.TextsCheckBox109} >I read term and conditions and
              i am agree with them</MText>
          </MCheckBox>
          <MButton onPress={onPress} style={COMMON.ButtonRect111} containerStyle={COMMON.Button110}
            text="continue" textStyle={COMMON.TextsButton112}
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
  paymenttermcondition: {
    backgroundColor: COLORS.Color304,
    height: '100%',

  }
});
export default paymenttermcondition;

