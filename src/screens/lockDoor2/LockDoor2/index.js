
import React, { useEffect } from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS, METRIC_SIZES} from 'constants/common';

import { MText, MIcon } from 'components/common';
import { scale } from 'utils';
import { useLockAndUnlockDoor } from 'hooks/Home';
const LockDoor2 = createScreen(
  ({navigation}) => {
    const { LAYOUT, GUTTERS, TYPOGRAPHY, IMAGES, COMMON, CONSTANTS } = useTheme();

    const clickCounter = useRef(0);
    const onPress = () => {
      console.log(`Clicked! ${clickCounter.current}`);
      clickCounter.current = clickCounter.current + 1;
    };
    
    const { isLoading, data } = useLockAndUnlockDoor({ lockDoor: 'ON', reservationId: null });
    useEffect(() => {
      if (data && data?.status === 'SUCCESS') {
        navigation.replace('LockDoor3')
      }
      setTimeout(() => {

        navigation.replace('LockDoor3')
      }, 3000)
    }, [data])
    return (
      <View style={styles.LockDoor2}>
          <MText textStyle={COMMON.TxtLockDoor339} >Locking Door  </MText>
        <MIcon
          name={"key-wireless"}
          size={scale(70)}
          color={COLORS.white}
          style={{transform: [{rotate: '90deg',}]}}
        />
          <MText textStyle={COMMON.TxtLockDoor340} >Hold The Back Of Your Phone
            Against The Door </MText>
            <MText></MText>
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
  LockDoor2: {
    backgroundColor: COLORS.Color980,
    flex: 1,
    justifyContent: 'space-between',
    padding: METRIC_SIZES.large,
    alignItems: 'center'

  }
});
export default LockDoor2;

