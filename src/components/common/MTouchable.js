import React from 'react';
import {
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  Platform,
  View,
} from 'react-native';

/**
 * @param {{onPress: () => void, type?: 'opacity' | 'native' | 'highlight' | 'none',
 * style?: import('react-native').ViewStyle, disabled?: boolean,
 * nativeBackground?: import('react-native').BackgroundPropType, useForeground?: boolean,
 * rippleColor?: import('react-native').ColorValue, borderless?: boolean, onLongPress: () => void}} props
 */
const MTouchable = (props) => {
  const {
    onPress,
    onLongPress,
    style,
    type,
    disabled,
    children,
    nativeBackground,
    useForeground,
    rippleColor,
    borderless,
  } = props;
  let TouchableComponent = null;
  let defaultProps = {};

  switch (type) {
    case 'highlight':
      TouchableComponent = TouchableHighlight;
      break;
    case 'opacity':
      TouchableComponent = TouchableOpacity;
      defaultProps = { activeOpacity: 0.85 };
      break;
    case 'none':
      TouchableComponent = TouchableWithoutFeedback;
      break;
    case 'native':
      TouchableComponent =
        Platform.OS === 'android' && Platform.Version >= 21
          ? TouchableNativeFeedback
          : TouchableWithoutFeedback;
      defaultProps = {
        background:
          nativeBackground ?? rippleColor
            ? TouchableNativeFeedback.Ripple(rippleColor, borderless)
            : TouchableNativeFeedback.SelectableBackground(),
        useForeground: useForeground ?? false,
      };
      break;
    default:
      TouchableComponent = TouchableWithoutFeedback;
      break;
  }

  // console.log(`type: ${type}`);
  // console.log(defaultProps);
  // console.log(style);

  if (TouchableComponent === TouchableNativeFeedback) {
    return (
      <TouchableNativeFeedback
        onPress={onPress}
        onLongPress={onLongPress}
        disabled={disabled}
        {...defaultProps}
        {...props}>
        <View style={style}>{children}</View>
      </TouchableNativeFeedback>
    );
  }

  return (
    <TouchableComponent
      {...defaultProps}
      {...props}
      onPress={onPress}
      onLongPress={onLongPress}
      disabled={disabled ?? false}
      style={style}>
      {children}
    </TouchableComponent>
  );
};

export default MTouchable;
