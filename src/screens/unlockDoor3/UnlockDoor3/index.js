
import React, { useEffect } from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS, DEVICE_HEIGHT } from 'constants/common';
import { scale, verticalScale, height } from 'utils';

import { MText, MIcon } from 'components/common';
import { useLockAndUnlockDoor } from 'hooks/Home';
const UnlockDoor3 = createScreen(
  ({ navigation }) => {
    const { COMMON } = useTheme();
    const { isLoading, data } = useLockAndUnlockDoor({ lockDoor: 'OFF', reservationId: null });
    const clickCounter = useRef(0);
    const onPress = () => {
      console.log(`Clicked! ${clickCounter.current}`);
      clickCounter.current = clickCounter.current + 1;
    };
    useEffect(() => {
      if (data && data?.status === 'SUCCESS') {
        navigation.replace('UnlockDoor4')
      }
      setTimeout(() => {

        navigation.replace('UnlockDoor4')
      }, 3000)
    }, [data])
    return (

      <View style={styles.UnlockDoor3}>
        <ScrollView>
          <View style={[COMMON.MainView, { justifyContent: 'space-between', height: DEVICE_HEIGHT * 0.7 }]}>
            <View />
            <MText textStyle={COMMON.TxtUnlockDoor3478} >Unlocking  </MText>
            <MIcon
              name={"key-wireless"}
              size={scale(70)}
              color={COLORS.white}
              style={{ transform: [{ rotate: '90deg', }], alignSelf: 'center' }}
            />
            <View style={{ alignItems: 'center' }}>
              <MText textStyle={COMMON.TitleWhite} >Hold The Back Of Your Phone </MText>
              <MText textStyle={COMMON.TitleWhite}>Against The Door</MText>
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
  UnlockDoor3: {
    backgroundColor: COLORS.Color980,
    height: '100%',

  }
});
export default UnlockDoor3;

