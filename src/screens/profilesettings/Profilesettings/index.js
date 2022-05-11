
import React from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS, METRIC_SIZES } from 'constants/common';
import { MIcon, MText, MButton, MSwitch, Container } from 'components/common';
import ConfigItem from 'components/elements/ConfigItem';
import auth from "@react-native-firebase/auth";
import { RemoveData } from 'utils/RemoveData';
const Profilesettings = createScreen(
  (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const { COMMON } = useTheme();
    const { navigation } = props;
    const clickCounter = useRef(0);
    const onPress = (root) => {
      navigation.navigate(root);
    };
    const SignOut = async () => {
      try {
        setIsLoading(true);
        await RemoveData('TOKEN');
        await RemoveData('USER_INFO');
        await RemoveData('SCAN_VOICE_PATH');
        await auth().signOut();
        setIsLoading(false);
        navigation.reset({
          index: 0,
          routes: [{ name: 'Splash' }],
        });
      } catch (error) {
        console.log("eeeeeeeeeeeeee", error);
        setIsLoading(false);
      }
    }
    return (

      <Container
        loadingOnPage={isLoading}
        style={styles.Profilesettings}
      >
        <ScrollView >
          <View style={COMMON.MainView}>
            <MText textStyle={COMMON.TitleGrayText} >Manage Profile </MText>
            <ConfigItem onPress={() => onPress('ProfilesettingsPersonalInformation')}
              text="Personal Information"
            />
            <ConfigItem onPress={() => onPress('Profilesettingschangepassword')}
              text="Change Password"
            />
            <ConfigItem onPress={() => onPress('ProfileSettingPaymentInformation')}
              text="Payment Information"
            />
            <MText>Add A Credit Card</MText>
            <MText textStyle={[COMMON.TitleGrayText, { marginTop: METRIC_SIZES.large }]} >App Settings </MText>
            <View style={[COMMON.RowItemCenter, { paddingVertical: METRIC_SIZES.tiny }]}>
              <MText textStyle={COMMON.TxtProfilesettings421} >Enable Face ID </MText>
              <MSwitch style={COMMON.SwitchOn422}
                onBgColor={COLORS.Color988} offBgColor={COLORS.disabled}
                onColor={COLORS.Color304} offColor={COLORS.disabled}
                isOn={true}
              />
            </View>
            {/* <View style={{height: "8%"}}/> */}
            <MText textStyle={[COMMON.TitleGrayText, { marginTop: METRIC_SIZES.large }]} >Support And Information </MText>
            <ConfigItem
              text="Visit Help Center"
            />
            <ConfigItem
              text="Terms And Conditions"
            />
            <MButton onPress={() => SignOut()} style={COMMON.ButtonRectColor988} containerStyle={[COMMON.ButtonRectColor988, { marginTop: 40 }]}
              text="Sign Out" textStyle={COMMON.TextsButton}
              color={COLORS.Color988}
            />
          </View>
        </ScrollView>
      </Container>


    );
  },
  {
    scrollView: false,
    paddingBottom: false,
    paddingTop: false,
  },
);
const styles = StyleSheet.create({
  Profilesettings: {
    backgroundColor: COLORS.Color304,
    height: '100%',
  }
});
export default Profilesettings;

