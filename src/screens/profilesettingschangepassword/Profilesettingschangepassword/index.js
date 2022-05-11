
import React from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS, METRIC_SIZES } from 'constants/common';
import { MText, MButton, MInput } from 'components/common';
import { scale, verticalScale } from 'utils';
const Profilesettingschangepassword = createScreen(
  () => {
    const { COMMON, CONSTANTS } = useTheme();

    const clickCounter = useRef(0);
    const onPress = () => {
      console.log(`Clicked! ${clickCounter.current}`);
      clickCounter.current = clickCounter.current + 1;
    };

    return (

      <View style={styles.Profilesettingschangepassword}>
        <ScrollView>
          <View style={COMMON.MainView}>
            <MText textStyle={COMMON.NormalText} >Please Write Your Email Address That Send a Link For
              Changing Your Password  </MText>
            <View style={{ marginTop: METRIC_SIZES.large }}>
              <MText textStyle={COMMON.TxtProfilesettingschangepassword506} >Email </MText>
              <MInput inputStyle={COMMON.InputRect23} containerStyle={COMMON.Input34}
                backgroundColor={COLORS.Color304}
                height={verticalScale(42)}
              />
            </View>
          </View>
        </ScrollView>
        <View style={COMMON.MainView}>
          <MButton onPress={onPress} style={COMMON.ButtonRectColor988} containerStyle={COMMON.ButtonRectColor988}
            text="Submit" textStyle={COMMON.TextsButton}
            color={COLORS.Color988}
          />
        </View>
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
  Profilesettingschangepassword: {
    backgroundColor: COLORS.Color304,
    height: '100%',

  }
});
export default Profilesettingschangepassword;

