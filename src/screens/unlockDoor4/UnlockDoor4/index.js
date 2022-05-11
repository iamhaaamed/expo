
import React from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS, DEVICE_HEIGHT } from 'constants/common';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { scale, verticalScale, height } from 'utils';
import LinearGradient from 'react-native-linear-gradient';
import { DateTimePickerMod, } from 'components/common/MDateTimePicker';
import { DrawerItem, DrawerItemList, DrawerContentScrollView, DrawerToggleButton, } from '@react-navigation/drawer';

import { MIcon, MText, MTouchable, MButton, MInput, MImageBackground, MImage, MStatusBar, MSwitch, MCheckBox, MFlatList, MChip, MDropDown, MOnboarding, MDateTimePicker, MImagePicker, MLoading, MModal, MTab, MAccordion, MSnackbar, MSlider } from 'components/common';
const UnlockDoor4 = createScreen(
  ({ navigation }) => {
    const { LAYOUT, GUTTERS, TYPOGRAPHY, IMAGES, COMMON, CONSTANTS } = useTheme();

    const clickCounter = useRef(0);
    const onPress = () => {
      navigation.goBack();
    };

    return (

      <View style={styles.UnlockDoor4}>
        <ScrollView>
          <View style={[COMMON.MainView,{justifyContent:'space-between',height:DEVICE_HEIGHT*0.8}]}>
            <View/>
            <MText textStyle={COMMON.TxtUnlockDoor4471} >You're In </MText>
            <MIcon
              name={"lock-open"}
              color={COLORS.Color304}
              size={scale(60)}
            />
            <MText textStyle={[COMMON.TitleWhite,{alignSelf: 'center'}]} >The Door Is Unlocked. </MText>
            <MButton onPress={onPress} style={COMMON.ButtonRect474} containerStyle={COMMON.Button473}
              text="Done" textStyle={COMMON.TextsButton475}
              color={COLORS.Color304}

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
  UnlockDoor4: {
    backgroundColor: COLORS.Color177,
    height: '100%',

  }
});
export default UnlockDoor4;

