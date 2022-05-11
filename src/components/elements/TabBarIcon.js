import React from 'react';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

/**
 * @param {{focused: boolean, iconName: string,
 * focusIconName?: string,
 * iconOptions?: import('constants/screens').IconOptions,
 * focusIconOptions?: import('constants/screens').IconOptions,
 * color: import('react-native').ColorValue,
 * size: number}} props
 */
const TabBarIcon = ({
  focused,
  iconName,
  focusIconName,
  iconOptions,
  focusIconOptions,
  color,
  size,
  ...props
}) => {
  if (!iconName) {
    return <></>;
  }
  if (focused) {
    const Component = focusIconOptions?.Component ?? MaterialCommunityIcon;
    return (
      <Component
        name={focusIconName ?? iconName}
        size={focusIconOptions?.size ?? size}
        color={focusIconOptions?.color ?? color}
        style={iconOptions?.style}
        {...props}
      />
    );
  } else {
    const Component = iconOptions?.Component ?? MaterialCommunityIcon;
    return (
      <Component
        name={iconName}
        size={iconOptions?.size ?? size}
        color={iconOptions?.color ?? color}
        style={iconOptions?.style}
        {...props}
      />
    );
  }
};

export default React.memo(TabBarIcon);
