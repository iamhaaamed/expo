import React, { useRef } from 'react';
import { MButton } from 'components/common';
import useTheme from 'hooks/useTheme';
import { StyleSheet, View } from 'react-native';
import { createScreen } from 'components/elements';
import { screens } from 'constants/screens';

const MBottomNavbarShowcase = createScreen(
  () => {
    const { LAYOUT, GUTTERS, navbarIndex } = useTheme();
    const clickCounter = useRef(0);

    const onPress = (index) => {
      clickCounter.current = clickCounter.current + 1;
      navbarIndex.setBottomNavbarIndex(index);
    };
    return (
      <View style={LAYOUT.fill}>
        <View style={[GUTTERS.regularHPadding, GUTTERS.regularVPadding]}>
          {screens.map((x, i) => (
            <View key={i} style={s.row}>
              <MButton
                onPress={() => onPress(i + 1)}
                text={i === 12 ? 'MainNavbar' : `Pro${i + 1}-BottomNavbar`}
                textStyle={s.bold}
                color="#1492E6"
                style={{
                  borderRadius: 4,
                }}
              />
            </View>
          ))}
        </View>
      </View>
    );
  },
  {
    scrollView: true,
    paddingBottom: false,
    paddingTop: false,
  },
);

const s = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  bold: {
    fontWeight: '500',
  },
});

export default MBottomNavbarShowcase;
