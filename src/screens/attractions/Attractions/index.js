
import React from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';
import { MText } from 'components/common';
const Attractions = createScreen(
  () => {
    const { COMMON } = useTheme();

    const clickCounter = useRef(0);
    const onPress = () => {
      console.log(`Clicked! ${clickCounter.current}`);
      clickCounter.current = clickCounter.current + 1;
    };

    return (

      <View style={styles.Attractions}>
        <ScrollView>
          <View style={COMMON.MainView}>
            <MText textStyle={COMMON.Title} >Conference Center </MText>
            <MText textStyle={COMMON.NormalText} >los angeles convention center </MText>
            <View style={COMMON.ParagraphAttractions376}>
              <MText textStyle={COMMON.TxtAttractions377} onPress={() => console.log('Clicked!')}>Website </MText>
            </View>
            <MText textStyle={COMMON.NormalText} >los angeles tourism & convention boar </MText>
            <View style={COMMON.ParagraphAttractions379}>
              <MText textStyle={COMMON.TxtAttractions380} onPress={() => console.log('Clicked!')}>Website </MText>
            </View>
            <View style={COMMON.LineAttractions381}></View>
            <MText textStyle={COMMON.Title} >entertainment district </MText>
            <MText textStyle={COMMON.NormalText} >club nokia </MText>
            <View style={COMMON.ParagraphAttractions384}>
              <MText textStyle={COMMON.TxtAttractions385} onPress={() => console.log('Clicked!')}>Website </MText>
            </View>
            <MText textStyle={COMMON.NormalText} >lucky strike </MText>
            <View style={COMMON.ParagraphAttractions387}>
              <MText textStyle={COMMON.TxtAttractions388} onPress={() => console.log('Clicked!')}>Website </MText>
            </View>
            <MText textStyle={COMMON.NormalText} >regal cinemas L.A. Live </MText>
            <View style={COMMON.ParagraphAttractions390}>
              <MText textStyle={COMMON.TxtAttractions391} onPress={() => console.log('Clicked!')}>Website </MText>
            </View>
            <View style={COMMON.LineAttractions392}></View>
            <MText textStyle={COMMON.Title} >Gallery </MText>
            <MText textStyle={COMMON.NormalText} >los angeles country museum of art </MText>
            <View style={COMMON.ParagraphAttractions395}>
              <MText textStyle={COMMON.TxtAttractions396} onPress={() => console.log('Clicked!')}>Website </MText>
            </View>
            <View style={COMMON.LineAttractions397}></View>
            <MText textStyle={COMMON.Title} >landmark </MText>
            <MText textStyle={COMMON.NormalText} >beverly hills/rodeo drive </MText>
            <View style={COMMON.ParagraphAttractions400}>
              <MText textStyle={COMMON.TxtAttractions401} onPress={() => console.log('Clicked!')}>Website </MText>
            </View>
            <MText textStyle={COMMON.NormalText} >disney concert hall </MText>
            <View style={COMMON.ParagraphAttractions403}>
              <MText textStyle={COMMON.TxtAttractions404} >Website </MText>
            </View>
            <MText textStyle={COMMON.NormalText} >la brea tar pits </MText>
            <View style={COMMON.ParagraphAttractions406}>
              <MText textStyle={COMMON.TxtAttractions407} onPress={() => console.log('Clicked!')}>Website </MText>
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
  Attractions: {
    backgroundColor: COLORS.Color304,
    height: '100%',

  }
});
export default Attractions;

