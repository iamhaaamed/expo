import React from 'react';
import useTheme from 'hooks/useTheme';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconFallback } from 'utils';

/**
 * @param {{name: string, IconComponent?: React.ReactNode, size?: number, color?: import('react-native').ColorValue, style?: import('react-native').TextStyle}} props
 */
const MIcon = (props) => {
    const { COLORS, FONT_SIZE, GUTTERS } = useTheme();
    const { name, IconComponent = MaterialCommunityIcon, size, color, style } = props;

    const { Icon_Name, Icon_Component } = IconFallback(name, IconComponent);

    return (
        <Icon_Component
            {...props}
            name={Icon_Name}
            style={[styles.default, style ?? {}]}
            size={size ?? FONT_SIZE.icon}
            color={color ?? COLORS.text}
        />
    );
};

const styles = StyleSheet.create({
    default: {
        textAlign: 'center',
        textAlignVertical: 'center',
    },
});

export default MIcon;
