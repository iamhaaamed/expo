import React, { useState } from 'react';
import useTheme from 'hooks/useTheme';
import { MIcon, MText } from 'components/common';
import { Platform, View, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RNPickerSelect, { PickerStyle } from 'react-native-picker-select';

/**
 * @param {label: string}
 * @param {labelStyle: TextStyle}
 * @typedef {data: {label: string, value: any}[]}
 * defaultAndroidMode: If defaultAndroidMode = false, some features like 'inputAndroid in style' can be reachable in android devices
 * placeholderObject: contain an object with two keys: label and color
 * @typedef {placeholderObject{label: string, color: string }}
 * getSelectedItem: A function for setState in parent component
 * @param {PickerStyle} style
 * */

const defaultIcon = () => (
  <MIcon
    color="gray"
    name="keyboard-arrow-down"
    IconComponent={MaterialIcons}
  />
);

const MDropDown = ({
  data,
  label,
  style,
  status,
  message,
  disabled,
  labelStyle,
  messageStyle,
  getSelectedItem,
  placeholderObject,
  defaultAndroidMode,
  Icon = defaultIcon,
  ...rest
}) => {
  const { COLORS, GUTTERS, TYPOGRAPHY } = useTheme();
  const [selectedItem, setSelectedItem] = useState({
    value: null,
    index: null,
  });
  const handleOnChange = (value, index) => {
    setSelectedItem({ value, index });
    getSelectedItem({ value, index });
  };

  return (
    <View style={style?.wrapperStyle}>
      {label && (
        <MText textStyle={[styles.defaultText, labelStyle]}>{label}</MText>
      )}
      <View style={style?.container}>
        <RNPickerSelect
          items={data}
          disabled={disabled}
          placeholder={placeholderObject}
          onValueChange={(value, index) => handleOnChange(value, index)}
          useNativeAndroidPickerStyle={
            !defaultAndroidMode ?? Platform.OS === 'android' ? false : true
          }
          style={style}
          value={selectedItem.value}
          Icon={Icon}
          {...rest}
        />
      </View>
      {message && (
        <MText textStyle={[styles.defaultMessage, messageStyle]}>
          {message}
        </MText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  pickerTextColor: {
    color: '#000',
  },
  defaultText: {
    fontSize: 16,
  },
  defaultMessage: {
    color: '#ccc',
    fontSize: 14,
  },
});

export default MDropDown;
