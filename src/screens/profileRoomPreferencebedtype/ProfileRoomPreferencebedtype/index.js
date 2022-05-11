
import React from 'react';
import { useEffect } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';

import { MIcon, MText, MTouchable, MButton, MInput, MImageBackground, MImage, MStatusBar, MSwitch, MCheckBox, MFlatList, MChip, MDropDown, MOnboarding, MDateTimePicker, MImagePicker, MLoading, MModal, MTab, MAccordion, MSnackbar, MSlider } from 'components/common';
import { SectionTop } from 'components/Sections';
import { GetData, StoreData } from 'utils';
const profileRoomPreferencebedtype = createScreen(
  () => {
    const { COMMON } = useTheme();

    const onPress = async (index) => {
      let arr = new Array(checkArray.length).fill(false);
      arr[index] = !checkArray[index];
      await StoreData('BED_TYPE1', data[index]);
      setCheckArray(arr);
    };

    const [checkArray, setCheckArray] = useState([false, false, false]);
    const data = ['KING_BED', '2DOUBLES_BED', 'NO_PREFERENCE'];
    useEffect(() => {
      (async () => {
        let bedType = await GetData('BED_TYPE1');
        if (bedType) {
          let arr = new Array(checkArray.length).fill(false);
          let index = data.findIndex(item=> item===bedType);
          if (index > -1) {
            arr[index] = true;
            setCheckArray(arr);
          }
        }
      })();
    },[])

    return (

      <View style={styles.profileRoomPreferencebedtype}>
        <ScrollView>
          <View style={COMMON.MainView}>
            <MCheckBox isChecked={checkArray[0]} setIsChecked={() => onPress(0)} style={COMMON.CheckBox673} crossCheckBox={true}>
              <MText textStyle={COMMON.NormalText} >King Bed</MText>
            </MCheckBox>
            <View style={COMMON.LineprofileRoomPreferencebedtype675}></View>
            <MCheckBox isChecked={checkArray[1]} setIsChecked={() => onPress(1)} style={COMMON.CheckBox676} crossCheckBox={true}>
              <MText textStyle={COMMON.NormalText} >2 Double Beds</MText>
            </MCheckBox>
            <View style={COMMON.LineprofileRoomPreferencebedtype678}></View>
            <MCheckBox isChecked={checkArray[2]} setIsChecked={() => onPress(2)} style={COMMON.CheckBox679} crossCheckBox={true}>
              <MText textStyle={COMMON.NormalText} >No Preference</MText>
            </MCheckBox>
            <View style={COMMON.LineprofileRoomPreferencebedtype681}></View>
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
  profileRoomPreferencebedtype: {
    backgroundColor: COLORS.Color304,
    height: '100%',

  }
});
export default profileRoomPreferencebedtype;

