
import React from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';

import { MText } from 'components/common';
import { SectionTop } from 'components/Sections';
const profileMemberSupport = createScreen(
  () => {
    const { COMMON } = useTheme();

    return (

      <View style={styles.profileMemberSupport}>
        <ScrollView>
          <View style={COMMON.MainView}>
            <MText textStyle={COMMON.NormalText} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </MText>
          </View>
        </ScrollView>
      </View >


    );
  },
  {
    scrollView: false,
    paddingBottom: false,
    paddingTop: false,
  },
);
const styles = StyleSheet.create({
  profileMemberSupport: {
    backgroundColor: COLORS.Color304,
    height: '100%',

  }
});
export default profileMemberSupport;

