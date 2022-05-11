import React from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Image } from 'react-native';
import { scale, verticalScale, GetData } from 'utils';
import { useState, useEffect } from 'react';
import useTheme from 'hooks/useTheme';
import { COLORS, METRIC_SIZES} from 'constants/common';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MIcon, MText, MTouchable, MButton, MInput, MImageBackground, MImage, MStatusBar, MSwitch, MCheckBox, MFlatList, MChip, MDropDown, MOnboarding, MDateTimePicker, MImagePicker, MLoading, MModal, MTab, MAccordion, MSnackbar, MSlider } from 'components/common';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import ConfigItem from 'components/elements/ConfigItem';
const SectionTop01 = (props) => {
  const {
    style,
    navigation
  } = props;
  const { LAYOUT, GUTTERS, TYPOGRAPHY, IMAGES, COMMON, CONSTANTS } = useTheme();
  const [userInfo, setUserInfo] = useState();
  const onPress = () => {
    navigation.navigate('Book');
  };
  useEffect(() => {
    (async () => {
      let user = await GetData('USER_INFO');
      console.log("user data: " + JSON.stringify(user));
      setUserInfo(user);
    }
    )();
  }, [])

  return (
    <View style={[styles.SectionTop01, style]} >
      <ConfigItem
        text={userInfo?.fullName}
        rightIconName={'settings'}
        onPress={() => navigation.navigate('Profilesettings')}
      />
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: METRIC_SIZES.large }}>
        <AnimatedCircularProgress
          size={scale(220)}
          width={10}
          fill={10}
          tintColor={COLORS.Color332}
          backgroundColor={COLORS.Color178}
          padding={0}
          arcSweepAngle={180}
          rotation={270}
        />
        <View style={{ marginTop: "5%", position: "absolute" }}>
          <MIcon
            name={'weather-night-partly-cloudy'}
            color={COLORS.Color988}
            Component={MaterialCommunityIcons}
            size={scale(65)}
            style={{ marginBottom: "2%" }}
          />
          <MText textStyle={[COMMON.Title, { marginBottom: 0, width:scale(200), textAlign: 'center',}]}>Book A Stay To Begin </MText>
          <MText textStyle={[COMMON.Title, { alignSelf: 'center', width:scale(200), textAlign: 'center', }]}>Earning Night</MText>
          <MButton onPress={() => onPress()} style={COMMON.ButtonRectColor988} containerStyle={COMMON.ButtonRectColor988}
            text="Explore Hotels" textStyle={COMMON.TextsButton}
            color={COLORS.Color988}
          />
        </View>
      </View>
    </View>

  );
}
const styles = StyleSheet.create({
  SectionTop01: {
    backgroundColor: COLORS.Color304,
    width: '100%',
  },

});
export default SectionTop01;

