
import React from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';
import { scale, verticalScale, height } from 'utils';

import { MIcon, MText, MButton, MImage, MChip, MOnboarding } from 'components/common';
const onboarding2 = createScreen(
  () => {
    const { LAYOUT, GUTTERS, TYPOGRAPHY, IMAGES, COMMON, CONSTANTS } = useTheme();

    const clickCounter = useRef(0);
    const onPress = () => {
      console.log(`Clicked! ${clickCounter.current}`);
      clickCounter.current = clickCounter.current + 1;
    };


    return (

      <View style={styles.onboarding2}>
        <ScrollView>
          <View style={COMMON.SectionPaddingonboarding2257} >
            <MOnboarding
              prevButton={<MIcon size={24} name='chevron-back' color='#ccc' />}
              nextButton={<MChip onPress={onPress} style={COMMON.ButtonRectColor988} containerStyle={COMMON.ButtonRectColor988}
                text="Go To Sign In" textStyle={COMMON.TextsButton}
                color={COLORS.Color988}
              />}
              nextButtonStyle={{ bottom: 20, alignSelf: 'center' }}
              getStartButton={<MChip onPress={onPress} style={COMMON.ChipNextRect259} containerStyle={COMMON.ChipNext258}
                text="Go To Sign In" textStyle={COMMON.TextsButton}
                color={COLORS.Color988}
              />}
              onFinish={() => console.log('Piow')}
              showsPagination={false}
              prevButtonStyle={{ top: 24, left: 24 }}>
              <View style={COMMON.Item262}  >
                <MImage imageSource={IMAGES.image9557} style={COMMON.Image263} customWidth={scale(375)} customHeight={scale(375)} />

                <MText textStyle={COMMON.TxtItem264} >Feel the best experience </MText>
                <MText textStyle={COMMON.TxtItem265} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  </MText>
              </View>

            </MOnboarding>

          </View>
          <MButton onPress={onPress} style={COMMON.ButtonRect267} containerStyle={COMMON.Button266}
            text="Skip" textStyle={COMMON.TextsButton268}
            color={COLORS.Color304}
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
  onboarding2: {
    backgroundColor: COLORS.Color304,
    height: '100%',

  }
});
export default onboarding2;

