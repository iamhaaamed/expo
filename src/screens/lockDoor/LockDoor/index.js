
import React from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS, METRIC_SIZES, DEVICE_HEIGHT } from 'constants/common';
import { scale, verticalScale, height } from 'utils';
import { MText, MButton, MIcon } from 'components/common';
import ConfigItem from 'components/elements/ConfigItem';
const LockDoor = createScreen(
  ({ navigation }) => {
    const { LAYOUT, GUTTERS, TYPOGRAPHY, IMAGES, COMMON, CONSTANTS } = useTheme();

    const clickCounter = useRef(0);
    const onPress = () => {
      console.log(`Clicked! ${clickCounter.current}`);
      clickCounter.current = clickCounter.current + 1;
    };


    return (

      <View style={styles.LockDoor}>
        <ScrollView>
          <View style={COMMON.MainView}>
            <MText textStyle={COMMON.Title} >Room #A-001 </MText>
            <TouchableOpacity onPress={() =>navigation.navigate('LockDoor2')}>
              <View style={styles.iconContainer}>
                <MIcon
                  name={"key-wireless"}
                  size={scale(50)}
                  color={COLORS.white}
                  style={{ transform: [{ rotate: '90deg', }], alignSelf: 'center' }}
                />
              </View>
            </TouchableOpacity>
            <MText textStyle={COMMON.TxtUnlockDoor189} >Tap To Lock The Door </MText>
            <ConfigItem
              text="How It Work"
              onPress={() => navigation.navigate('UnlockDoor2')}
            />
            <ConfigItem
              text="Where It Work"
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
  LockDoor: {
    backgroundColor: COLORS.Color304,
    height: '100%',

  },
  iconContainer: {
    backgroundColor: COLORS.Color980,
    borderRadius: METRIC_SIZES.tiny,
    height: DEVICE_HEIGHT * 0.4,
    justifyContent: 'center',
    marginVertical: METRIC_SIZES.small
  }
});
export default LockDoor;

