
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
import { SectionTop } from 'components/Sections';
import { SectionCenter } from 'components/Sections';
const Dinningfeaturelist = createScreen(
  () => {
    const { LAYOUT, GUTTERS, TYPOGRAPHY, IMAGES, COMMON, CONSTANTS } = useTheme();

    const clickCounter = useRef(0);
    const onPress = () => {
      console.log(`Clicked! ${clickCounter.current}`);
      clickCounter.current = clickCounter.current + 1;
    };

    return (

      <ScrollView>
        <View style={styles.Dinningfeaturelist}>
          <MText textStyle={COMMON.TxtDinningfeaturelist53} >At This Hotel </MText>
          <SectionCenter style={COMMON.EleDinningfeaturelist61} />
          <MText textStyle={COMMON.TxtDinningfeaturelist53} >Nearby </MText>
          <SectionCenter contactInfo={{web:"ss",phone:"123"}}/>
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
  Dinningfeaturelist: {
    backgroundColor: COLORS.Color304,
    height: '100%',
    padding: METRIC_SIZES.small

  }
});
export default Dinningfeaturelist;

