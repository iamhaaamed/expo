
import React from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { StyleSheet, ScrollView } from 'react-native';
import { View } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';
import { MText } from 'components/common';
const UnlockDoor2 = createScreen(
  () => {
    const { COMMON } = useTheme();

    return (

      <View style={styles.UnlockDoor2}>
        <ScrollView>
          <View style={COMMON.MainView}>
            <MText textStyle={COMMON.NormalText} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  </MText>
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
  UnlockDoor2: {
    backgroundColor: COLORS.Color304,
    height: '100%',

  }
});
export default UnlockDoor2;

