
import React from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS, METRIC_SIZES } from 'constants/common';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { scale, verticalScale, height } from 'utils';
import LinearGradient from 'react-native-linear-gradient';
import { DateTimePickerMod, } from 'components/common/MDateTimePicker';
import { DrawerItem, DrawerItemList, DrawerContentScrollView, DrawerToggleButton, } from '@react-navigation/drawer';

import { MIcon, MText, MTouchable, MButton, MInput, MImageBackground, MImage, MStatusBar, MSwitch, MCheckBox, MFlatList, MChip, MDropDown, MOnboarding, MDateTimePicker, MImagePicker, MLoading, MModal, MTab, MAccordion, MSnackbar, MSlider } from 'components/common';
const LockDoor3 = createScreen(
  ({ navigation}) => {
    const { LAYOUT, GUTTERS, TYPOGRAPHY, IMAGES, COMMON, CONSTANTS } = useTheme();

    const clickCounter = useRef(0);
    const onPress = () => {
      navigation.goBack();
    };

    return (

      <View style={styles.LockDoor3}>
        {/* //<ScrollView contentContainerStyle={{justifyContent: 'center', alignItems: 'center',alignContent: 'center'}}> */}
        {/* <View style={{justifyContent: 'center',backgroundColor:'yellow'}}> */}
        <MText textStyle={COMMON.TxtLockDoor339} >Locked Door </MText>
        <MIcon
          name={"lock"}
          size={80}
          color={COLORS.white}
        />
        <MText textStyle={COMMON.TxtLockDoor340} >The Door Is locked . </MText>
        <MButton onPress={onPress} style={COMMON.ButtonRect42} containerStyle={COMMON.Button41}
          text="Done" textStyle={COMMON.TextsButton43}
          color={COLORS.Color304}
        />
        {/* </View> */}
        {/* </ScrollView> */}
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
  LockDoor3: {
    backgroundColor: COLORS.Color356,
    flex: 1,
    justifyContent: 'space-between',
    padding: METRIC_SIZES.large,
    alignItems: 'center'
  }
});
export default LockDoor3;

