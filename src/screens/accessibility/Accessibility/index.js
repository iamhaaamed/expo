
import React from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';

import { MIcon, MText, MTouchable, MButton, MInput, MImageBackground, MImage, MStatusBar, MSwitch, MCheckBox, MFlatList, MChip, MDropDown, MOnboarding, MDateTimePicker, MImagePicker, MLoading, MModal, MTab, MAccordion, MSnackbar, MSlider } from 'components/common';
import { SectionTop } from 'components/Sections';
import CircleItem from 'components/elements/CircleItem';
const Accessibility = createScreen(
  () => {
    const { LAYOUT, GUTTERS, TYPOGRAPHY, IMAGES, COMMON, CONSTANTS } = useTheme();

    const clickCounter = useRef(0);
    const onPress = () => {
      console.log(`Clicked! ${clickCounter.current}`);
      clickCounter.current = clickCounter.current + 1;
    };

    return (

      <View style={styles.Accessibility}>
        <ScrollView>
          <View style={COMMON.MainView}>
            <MText textStyle={COMMON.NormalText} >Accessible Areas With Accessible Routes From Public Entrance </MText>
            <CircleItem text="Fitness Center"/>
            <CircleItem text="meeting spaces and ballrooms"/>
            <CircleItem text="restaurant/lounges "/>
            <CircleItem text="pool pathway "/>
            <CircleItem text="registration desk" />
            <MText textStyle={[COMMON.NormalText,{marginTop: 15}]} >Accessible Hotel Features </MText>
            <CircleItem text="elevators"/>
            <CircleItem text="service animals are welcome"/>
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
  Accessibility: {
    backgroundColor: COLORS.Color304,
    height: '100%',

  }
});
export default Accessibility;

