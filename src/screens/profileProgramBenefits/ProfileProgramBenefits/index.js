
import React from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS, METRIC_SIZES } from 'constants/common';
import { scale, verticalScale } from 'utils';

import { MIcon, MText, MTouchable, MButton, MInput, MImageBackground, MImage, MStatusBar, MSwitch, MCheckBox, MFlatList, MChip, MDropDown, MOnboarding, MDateTimePicker, MImagePicker, MLoading, MModal, MTab, MAccordion, MSnackbar, MSlider } from 'components/common';
import { SectionTop } from 'components/Sections';
const profileProgramBenefits = createScreen(
  () => {
    const { LAYOUT, GUTTERS, TYPOGRAPHY, IMAGES, COMMON, CONSTANTS } = useTheme();

    const clickCounter = useRef(0);
    const onPress = () => {
      console.log(`Clicked! ${clickCounter.current}`);
      clickCounter.current = clickCounter.current + 1;
    };


    return (

      <View style={styles.profileProgramBenefits}>
        <ScrollView>
          <View style={COMMON.MainView}>
            <MText textStyle={COMMON.Title} >Overview </MText>
            <MText textStyle={COMMON.NormalText} >Residence InnLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  L.A </MText>
            <MText textStyle={[COMMON.Title, { marginTop: METRIC_SIZES.large }]} >Member Level Benefit </MText>
            <View style={COMMON.RowItemStart}>
              <View style={styles.circle}/>
              <View style={{marginHorizontal: METRIC_SIZES.small}}>
                <MText textStyle={[COMMON.Title, { marginBottom: 0 }]} >Silver Elite </MText>
                <MText textStyle={COMMON.NormalText} >30% discount with 5 nights stay in hotels/year </MText>
              </View>
            </View>
            <View style={COMMON.RowItemStart}>
              <View style={[styles.circle,{borderColor:COLORS.Color180}]}/>
              <View style={{marginHorizontal: METRIC_SIZES.small}}>
                <MText textStyle={[COMMON.Title, { marginBottom: 0 }]} >Gold Elite </MText>
                <MText textStyle={COMMON.NormalText} >45% discount with 15 nights stay in hotels/year </MText>
              </View>
            </View>
            <View style={COMMON.RowItemStart}>
              <View style={[styles.circle,{borderColor: COLORS.Color179}]}/>
              <View style={{marginHorizontal: METRIC_SIZES.small}}>
                <MText textStyle={[COMMON.Title, { marginBottom: 0 }]} >Platinum Elite</MText>
                <MText textStyle={COMMON.NormalText} >60% Discount With 25 Nights Stay In Hotels/Year </MText>
              </View>
            </View>
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
  profileProgramBenefits: {
    backgroundColor: COLORS.Color304,
    height: '100%',

  },
  circle: {
    borderWidth:4,
    borderRadius:scale(14),
    height:scale(28),
    width:scale(28),
    borderColor: COLORS.Color707,
    marginVertical: METRIC_SIZES.large
  }
});
export default profileProgramBenefits;

