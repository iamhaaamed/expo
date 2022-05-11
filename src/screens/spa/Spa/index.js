
import React from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';

import { MText } from 'components/common';
import { SectionTop } from 'components/Sections';
import { SectionCenter } from 'components/Sections';
const Spa = createScreen(
  () => {
    const { LAYOUT, GUTTERS, TYPOGRAPHY, IMAGES, COMMON, CONSTANTS } = useTheme();

    const clickCounter = useRef(0);
    const onPress = () => {
      console.log(`Clicked! ${clickCounter.current}`);
      clickCounter.current = clickCounter.current + 1;
    };


    return (

      <View style={styles.Spa}>
        <ScrollView>
          <View style={COMMON.MainView}>
            <MText textStyle={[COMMON.Title, { textAlign: 'center' }]} >Nearby </MText>
            <SectionCenter
              subtitle="0.1 Miles"
              title=" "
              data={[{ content: ['The Ritz-Carlton', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"] },
              { content: ["Treatment& Amenities", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"] }]}
              contactInfo={{phone:"+12",phoneTitle:"Call Spa",website:"http://example.com"}}
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
  Spa: {
    backgroundColor: COLORS.Color304,
    height: '100%',

  }
});
export default Spa;

