
import React from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState, useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS, METRIC_SIZES } from 'constants/common';

import { MText, MCheckBox } from 'components/common';
import { GetData, StoreData } from 'utils';
const profileRoomPreferenceroomtype = createScreen(
  () => {
    const { COMMON } = useTheme();
    const onPress = async (index) => {
      let arr = new Array(checkArray.length).fill(false);
      arr[index] = !checkArray[index];
      await StoreData('ROOM_TYPE1', data[index]);
      setCheckArray(arr);
    };
    useEffect(() => {
      (async () => {
        let roomType = await GetData('ROOM_TYPE1');
        if (roomType) {
          let arr = new Array(checkArray.length).fill(false);
          let index = data.findIndex(item => item === roomType);
          if (index > -1) {
            arr[index] = true;
            setCheckArray(arr);
          }
        }
      })();
    },[])
    const [checkArray, setCheckArray] = useState([false, false, false]);
    const data = ['NON_SMOKING', 'SMOKING', 'NO_PREFERENCE'];
    return (
      <View style={styles.mainView}>
        <ScrollView>
          <View style={styles.profileRoomPreferenceroomtype}>
            <MCheckBox isChecked={checkArray[0]} setIsChecked={() => onPress(0)} style={COMMON.CheckBox178} crossCheckBox={true}>
              <MText textStyle={COMMON.TextsCheckBox179} >Non-Smoking</MText>
            </MCheckBox>
            <View style={COMMON.LineprofileRoomPreferenceroomtype180}></View>
            <MCheckBox isChecked={checkArray[1]} setIsChecked={() => onPress(1)} style={COMMON.CheckBox181} crossCheckBox={true}>
              <MText textStyle={COMMON.TextsCheckBox182} >Smoking</MText>
            </MCheckBox>
            <View style={COMMON.LineprofileRoomPreferenceroomtype180}></View>
            <MCheckBox isChecked={checkArray[2]} setIsChecked={() => onPress(2)} style={COMMON.CheckBox184} crossCheckBox={true}>
              <MText textStyle={COMMON.TextsCheckBox185} >No Preference</MText>
            </MCheckBox>
            <View style={COMMON.LineprofileRoomPreferenceroomtype180}></View>
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
  profileRoomPreferenceroomtype: {
    backgroundColor: COLORS.Color304,
    height: '100%',
    padding: METRIC_SIZES.small,

  },
  mainView: {
    backgroundColor: COLORS.Color304,
    flex: 1,
  }
});
export default profileRoomPreferenceroomtype;

