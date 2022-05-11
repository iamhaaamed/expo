import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

const CustomTabButton = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      {...props}
      style={
        props.accessibilityState.selected
          ? [
              props.style,
              {
                borderTopColor: props.borderTopColor ?? 'red',
                borderTopWidth: props.borderTopWidth ?? 2,
              },
              s.defaultStyle,
            ]
          : props.style
      }
    />
  );
};

const s = StyleSheet.create({
  defaultStyle: {},
});

export default React.memo(CustomTabButton);
