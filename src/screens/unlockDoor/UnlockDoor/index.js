
import React from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS, DEVICE_HEIGHT, METRIC_SIZES } from 'constants/common';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { scale, verticalScale, height } from 'utils';
import LinearGradient from 'react-native-linear-gradient';
import { DateTimePickerMod, } from 'components/common/MDateTimePicker';
import { DrawerItem, DrawerItemList, DrawerContentScrollView, DrawerToggleButton, } from '@react-navigation/drawer';

import { MIcon, MText, MTouchable, MButton, MInput, MImageBackground, MImage, MStatusBar, MSwitch, MCheckBox, MFlatList, MChip, MDropDown, MOnboarding, MDateTimePicker, MImagePicker, MLoading, MModal, MTab, MAccordion, MSnackbar, MSlider } from 'components/common';
import { SectionTop } from 'components/Sections';
import ConfigItem from 'components/elements/ConfigItem';
const UnlockDoor = createScreen(
  ({ navigation }) => {
    const { LAYOUT, GUTTERS, TYPOGRAPHY, IMAGES, COMMON, CONSTANTS } = useTheme();

    const clickCounter = useRef(0);
    const onPress = () => {
      console.log(`Clicked! ${clickCounter.current}`);
      clickCounter.current = clickCounter.current + 1;
    };

    return (

      <View style={styles.UnlockDoor}>
        <ScrollView>
          <View style={COMMON.MainView}>
            <MText textStyle={COMMON.Title} >Room #A-001 </MText>
            <TouchableOpacity onPress={() => navigation.navigate('UnlockDoor3')}>
              <View style={styles.iconContainer}>
                <MIcon
                  name={"key-wireless"}
                  size={scale(50)}
                  color={COLORS.white}
                  style={{ transform: [{ rotate: '90deg', }], alignSelf: 'center' }}
                />
              </View>
            </TouchableOpacity>
            <MText textStyle={COMMON.TxtUnlockDoor189} >Tap To Unlock The Door </MText>
            <ConfigItem
              text="How It Work"
              onPress={() => navigation.navigate('UnlockDoor2')}
            />
            <ConfigItem
              text="Where It Work"
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
  UnlockDoor: {
    backgroundColor: COLORS.Color304,
    height: '100%',
  },
  iconContainer: {
    backgroundColor: COLORS.Color980,
    borderRadius: METRIC_SIZES.tiny,
    height: DEVICE_HEIGHT * 0.4,
    justifyContent: 'center',
    marginVertical: METRIC_SIZES.small
  }
});
export default UnlockDoor;

