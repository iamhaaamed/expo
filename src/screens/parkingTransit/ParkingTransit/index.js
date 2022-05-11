
import React from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';

import { MIcon, MText } from 'components/common';
import { SectionTop } from 'components/Sections';
const ParkingTransit = createScreen(
  () => {
    const { COMMON } = useTheme();

    const clickCounter = useRef(0);
    const onPress = () => {
      console.log(`Clicked! ${clickCounter.current}`);
      clickCounter.current = clickCounter.current + 1;
    };

    return (

      <View style={styles.ParkingTransit}>
        <ScrollView>
          <View style={COMMON.MainView}>
            <MText textStyle={COMMON.TxtParkingTransit270} >Subway Station </MText>
            <MText textStyle={COMMON.TxtParkingTransit271} >7 th street/metro center </MText>
            <View style={COMMON.LineParkingTransit272}></View>
            <MText textStyle={COMMON.TxtParkingTransit273} >Parking </MText>
            <MText textStyle={COMMON.TxtParkingTransit274} >fees exclude tax uSD 51-61 overnight base on size of vehicle. electric charging available at USD 10 for up to 4 hous . </MText>
            <View style={COMMON.LineParkingTransit275}></View>
            <MText textStyle={COMMON.TxtParkingTransit276} >Valet parking </MText>
            <MText textStyle={COMMON.TxtParkingTransit277} >valet parking, fee:51 USD daily </MText>
            <View style={COMMON.LineParkingTransit278}></View>
            <MText textStyle={COMMON.TxtParkingTransit279} >electric car charging stations </MText>
            <MText textStyle={COMMON.TxtParkingTransit280} >for a fee </MText>
            <View style={COMMON.LineParkingTransit281}></View>
            <MText textStyle={COMMON.TxtParkingTransit282} >Airport </MText>
            <MText textStyle={COMMON.TxtParkingTransit283} >Hollywood burbank airport (bUR) </MText>
            <View style={COMMON.RowItemStart}>
              <MIcon name={'circle-medium'} />
              <MText textStyle={COMMON.TxtParkingTransit284} >Phone : 1 818-840-8840 </MText>
            </View>
            <View style={COMMON.RowItemStart}>
              <MIcon name={'circle-medium'} />
              <MText textStyle={COMMON.TxtParkingTransit284} >estimated taxi fare : 70 USD (one way) </MText>
            </View>
            <MText textStyle={COMMON.TxtParkingTransit286} >Los angeles international airport(LAX) </MText>
            <View style={COMMON.RowItemStart}>
              <MIcon name={'circle-medium'} />
              <MText textStyle={COMMON.TxtParkingTransit284} >Phone : 1 310-646-5252 </MText>
            </View>
            <View style={COMMON.RowItemStart}>
              <MIcon name={'circle-medium'} />
              <MText textStyle={COMMON.TxtParkingTransit284} >Estimated Taxi Fare : 68  USD (One Way) </MText>
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
  ParkingTransit: {
    backgroundColor: COLORS.Color304,
    height: '100%',

  }
});
export default ParkingTransit;