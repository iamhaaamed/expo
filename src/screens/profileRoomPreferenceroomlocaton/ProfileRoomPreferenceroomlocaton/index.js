
import React from 'react';
import useTheme from 'hooks/useTheme';
import { useState, useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';
import { MText, MCheckBox } from 'components/common';
import { GetData, StoreData } from 'utils';
const profileRoomPreferenceroomlocaton = createScreen(
  () => {
    const { COMMON } = useTheme();
    const onPress = async(index) => {
      let arr = new Array(checkArray.length).fill(false);
      arr[index]=!checkArray[index];
      await StoreData('ROOM_LOCATION1', data[index]);
      setCheckArray(arr);
    };
    const [checkArray, setCheckArray] = useState([false,false,false,false]);
    const data=['HIGH_FLOOR','LOW_FLOOR','NEAR_LIFT','NO_PREFERENCE']


    useEffect(() => {
      (async () => {
        let roomLocation = await GetData('ROOM_LOCATION1');
        if (roomLocation) {
          let arr = new Array(checkArray.length).fill(false);
          let index = data.findIndex(item => item === roomLocation);
          if (index > -1) {
            arr[index] = true;
            setCheckArray(arr);
          }
        }
      })();
    },[])
    return (

      <View style={styles.profileRoomPreferenceroomlocaton}>
        <ScrollView>
          <View style={COMMON.MainView}>
            <MCheckBox 
            isChecked={checkArray[0]} 
            setIsChecked={() => onPress(0)} 
            style={COMMON.CheckBox483} 
            crossCheckBox={true}
            >
              <MText textStyle={COMMON.NormalText} >High Floor</MText>
            </MCheckBox>
            <View style={COMMON.LineprofileRoomPreferenceroomlocaton485}></View>
            <MCheckBox isChecked={checkArray[1]} setIsChecked={() => onPress(1)} style={COMMON.CheckBox486} 
            crossCheckBox={true}>
              <MText textStyle={COMMON.NormalText} >Low Floor</MText>
            </MCheckBox>
            <View style={COMMON.LineprofileRoomPreferenceroomlocaton488}></View>
            <MCheckBox isChecked={checkArray[2]} setIsChecked={() => onPress(2)} style={COMMON.CheckBox489} 
            crossCheckBox={true}>
              <MText textStyle={COMMON.NormalText} >Near Lift</MText>
            </MCheckBox>
            <View style={COMMON.LineprofileRoomPreferenceroomlocaton491}></View>
            <MCheckBox isChecked={checkArray[3]} setIsChecked={() => onPress(3)} style={COMMON.CheckBox492} 
            crossCheckBox={true}>
              <MText textStyle={COMMON.NormalText} >No Preference</MText>
            </MCheckBox>
            <View style={COMMON.LineprofileRoomPreferenceroomlocaton494}></View>
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
  profileRoomPreferenceroomlocaton: {
    backgroundColor: COLORS.Color304,
    height: '100%',

  }
});
export default profileRoomPreferenceroomlocaton;

