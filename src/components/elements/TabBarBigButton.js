import { MTouchable } from 'components/common';
import useTheme from 'hooks/useTheme';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

const TabBarBigButton = (props) => {
  const { COLORS } = useTheme();
  return (
    <MTouchable
      type="opacity"
      activeOpacity={0.9}
      {...props}
      style={[
        // props.accessibilityState.selected && props.selectedTabTopBorder
        //   ? { borderTopColor: 'red', borderTopWidth: 2 }
        //   : '',
        { backgroundColor: COLORS.primary },
        props.customStyle ?? s.touchable,
        ,
      ]}>
      {/* <Text>+</Text> */}
    </MTouchable>
  );
};

const s = StyleSheet.create({
  touchable: {
    borderRadius: 16,
    height: 80,
    width: 80,
    position: 'relative',
    bottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
  },
});

export default React.memo(TabBarBigButton);
