
import React from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS, METRIC_SIZES } from 'constants/common';
import { MText, MButton, MInput } from 'components/common';
import { scale, verticalScale, height } from 'utils';
import ConfigItem from 'components/elements/ConfigItem';
const ProfilesettingsPersonalInformation = createScreen(
  () => {
    const { COMMON } = useTheme();

    const clickCounter = useRef(0);
    const onPress = () => {
      console.log(`Clicked! ${clickCounter.current}`);
      clickCounter.current = clickCounter.current + 1;
    };

    return (

      <View style={styles.ProfilesettingsPersonalInformation}>
        <ScrollView>
          <View style={COMMON.MainView}>
            <MText textStyle={COMMON.Title} >Confirm Your Identify </MText>
            <MText textStyle={COMMON.GrayNormalText} >You'll Receive A Temporary Verification Code To Protect Your Account </MText>
            <View style={COMMON.SectionPaddingProfilesettingsPersonalInformation169} >
              <MText textStyle={COMMON.Title2} >Name </MText>
              <MInput inputStyle={COMMON.InputRect23} containerStyle={COMMON.Input34}
                backgroundColor={COLORS.Color304}
                height={verticalScale(42)}
              />
            </View>
            <ConfigItem
              text="Visit Help Center" textStyle={COMMON.Title2}
            />
          </View>
        </ScrollView>
        <MButton onPress={onPress}
          style={[COMMON.ButtonRectColor988]}
          containerStyle={[COMMON.ButtonRectColor988, { marginBottom: scale(10),marginHorizontal: METRIC_SIZES.small }]}
          text="Submit" textStyle={COMMON.TextsButton}
          color={COLORS.Color988}
        />
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
  ProfilesettingsPersonalInformation: {
    backgroundColor: COLORS.Color304,
    height: '100%',

  }
});
export default ProfilesettingsPersonalInformation;

