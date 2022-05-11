
import React from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS, METRIC_SIZES} from 'constants/common';
import { MText, MButton } from 'components/common';
import { SectionTop } from 'components/Sections';
import ConfigItem from 'components/elements/ConfigItem';
const InRoomService = createScreen(
  ({navigation, route}) => {
    const { COMMON, IMAGES } = useTheme();
    console.log('current hotel'+JSON.stringify(route?.params?.currentHotel))
    const clickCounter = useRef(0);
    const onPress = (dest) => {
      navigation.navigate(dest,{hotelId:route?.params?.currentHotel?.id});
    };
    return (
      <View style={styles.InRoomService}>
        <ScrollView>
          <View style={styles.innerView}>
            <ConfigItem
              iconName='call'
              text={'Call To Resturant'}
            />
            <MText textStyle={COMMON.TxtInRoomService133} >Requests additional </MText>
            <ConfigItem
              imgName={IMAGES.towels}
              text={'Towels'}
              onPress={() =>onPress('InRoomService2')}
            />
            <ConfigItem
              imgName={IMAGES.bedding}
              text={'Bedding & Pillows'}
              onPress={() =>onPress('InRoomService2')}
            />
            <ConfigItem
              imgName={IMAGES.bath}
              text={'Bath Amenties'}
              onPress={() =>onPress('InRoomService2')}
            />
            <MText textStyle={COMMON.TxtInRoomService133} >Requests service </MText>
            <ConfigItem
              imgName={IMAGES.valet}
              text={'Valet'}
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
  InRoomService: {
    backgroundColor: COLORS.Color304,
    height: '100%',

  },
  innerView: {
    paddingHorizontal: METRIC_SIZES.small
  }
});
export default InRoomService;

