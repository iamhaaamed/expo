
import React, { useEffect } from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';

import { MImage, MButton, MSwitch, MText } from 'components/common';
import { MaterialIcons } from 'react-native-vector-icons/MaterialIcons';
import { StoreData, GetData } from 'utils';
const profileRoomPreference = createScreen(
  (props) => {
    const { LAYOUT, GUTTERS, TYPOGRAPHY, IMAGES, COMMON, CONSTANTS } = useTheme();
    const [accessibility, setAccessibility] = useState(true);
    const [featherFreeRoom, setFeatherFreeRoom] = useState(true);
    const { navigation } = props;
    const onPress = (root) => {
      navigation.navigate(root);
    };
    const savePreferences = async () => {
      await StoreData('ACCESSIBILITY', accessibility);
      await StoreData('FEATHER_FREE_ROOM', featherFreeRoom);
      let bedType= await GetData('BED_TYPE1');
      let roomType = await GetData('ROOM_TYPE1');
      let roomLocation = await GetData('ROOM_LOCATION1');
      await StoreData('BED_TYPE', bedType);
      await StoreData('ROOM_TYPE', roomType);
      await StoreData('ROOM_LOCATION', roomLocation);
      navigation.goBack();
    }
    useEffect(() => {
      (async () => {
        let accessibility = await GetData('ACCESSIBILITY');
        if (accessibility === false) setAccessibility(false);
        let featherFreeRoom = await GetData('FEATHER_FREE_ROOM');
        if (featherFreeRoom === false) setFeatherFreeRoom(false);
        let bedType= await GetData('BED_TYPE');
        let roomType = await GetData('ROOM_TYPE');
        let roomLocation = await GetData('ROOM_LOCATION');
        await StoreData('BED_TYPE1', bedType);
        await StoreData('ROOM_TYPE1', roomType);
        await StoreData('ROOM_LOCATION1', roomLocation);
      })();
    }, [])
    return (

      <View style={styles.profileRoomPreference}>
        <ScrollView>
          <View style={COMMON.MainView}>
            <MText textStyle={COMMON.TxtprofileRoomPreference227} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

            </MText>
            <MText textStyle={COMMON.TxtprofileRoomPreference228} >App Settings </MText>
            <View style={COMMON.RowItemStart}>
              <MText textStyle={COMMON.TxtprofileRoomPreference232} >Accessibility </MText>
              <View style={{ flex: 1 }} />
              <MSwitch style={COMMON.SwitchOn233}
                onBgColor={COLORS.Color988} offBgColor={COLORS.disabled}
                onColor={COLORS.Color304} offColor={COLORS.disabled}
                isOn={accessibility}
                onValueChanged={(value) => setAccessibility(value)}
              />
            </View>
            <View style={COMMON.LineprofileRoomPreference234}></View>
            <View style={COMMON.RowItemStart}>
              <MText textStyle={COMMON.TxtprofileRoomPreference232} >Feather-Free-Room </MText>
              <View style={{ flex: 1 }} />
              <MSwitch style={COMMON.SwitchOn233}
                onBgColor={COLORS.Color988} offBgColor={COLORS.disabled}
                onColor={COLORS.Color304} offColor={COLORS.disabled}
                isOn={featherFreeRoom}
                onValueChanged={(value) => setFeatherFreeRoom(value)}
              />
            </View>
            <View style={COMMON.LineprofileRoomPreference234}></View>
            <MButton onPress={() => onPress('ProfileRoomPreferenceroomlocaton')} style={COMMON.buttonRect236} containerStyle={COMMON.button235}
              text="Room Location" textStyle={COMMON.Textsbutton237}
              iconRight={{ name: "arrow-right-alt", IconComponent: { MaterialIcons }, color: "black" }}
              color={COLORS.Color304}
            />
            <MButton onPress={() => onPress('ProfileRoomPreferencebedtype')} style={COMMON.buttonRect239} containerStyle={COMMON.button238}
              text="Bed Type" textStyle={COMMON.Textsbutton240}
              iconRight={{ name: "arrow-right-alt", IconComponent: { MaterialIcons }, color: "black" }}
              color={COLORS.Color304}
            />
            <MButton onPress={() => onPress('ProfileRoomPreferenceroomtype')} style={COMMON.buttonRect242} containerStyle={COMMON.button241}
              text="Room Type" textStyle={COMMON.Textsbutton243}
              iconRight={{ name: "arrow-right-alt", IconComponent: { MaterialIcons }, color: "black" }}
              color={COLORS.Color304}
            />
            <MButton onPress={() => savePreferences()} style={COMMON.ButtonRectColor988} containerStyle={COMMON.ButtonRectColor988}
              text="Save Preferences" textStyle={COMMON.TextsButton}
              color={COLORS.Color988}
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
  profileRoomPreference: {
    backgroundColor: COLORS.Color304,
    height: '100%',

  }
});
export default profileRoomPreference;

