import React from 'react';
import { Text, View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { scale } from 'utils';
import MIcon from './MIcon';
import useTheme from 'hooks/useTheme';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

/**
 *
 * @param {{containerStyle?: import('react-native').ViewStyle, textStyle?: import('react-native').TextStyle,
 * onPress?: () => void, color?: import('react-native').ColorValue, iconName?: string, IconComponent?: React.ReactNode,
 * iconSize?: number, iconColor?: import('react-native').ColorValue, iconStyle?: import('react-native').TextStyle,
 * loading?: boolean, skeletonOptions?: {numberOfLines?: number,
 * style?: import('react-native').ViewStyle, fullWidth?: boolean}}} props
 * @returns
 */
const MText = (props) => {
    const {
        containerStyle,
        onPress,
        textStyle,
        children,
        color,
        IconComponent,
        iconColor,
        iconName,
        iconSize,
        iconStyle,
        loading,
        skeletonOptions,
        ...rest
    } = props;

    const { TYPOGRAPHY } = useTheme();
    const mergedStyle = StyleSheet.flatten([
        TYPOGRAPHY.textRegular,
        textStyle,
        color && { color },
    ]);
    const customStyle =
        mergedStyle && mergedStyle.fontSize
            ? { ...mergedStyle, fontSize: scale(mergedStyle.fontSize) }
            : mergedStyle;

    if (loading) {
        const { numberOfLines, style: skeletonStyle, fullWidth } =
            skeletonOptions ?? {};
        const numLines = numberOfLines ?? 1;
        const lines = [];
        for (let i = 0; i < numLines; i++) {
            let width;
            if (!fullWidth) {
                width = Math.round(Math.random() * 50.0 + 50) + '%';
            }
            lines.push(
                <View
                    key={i}
                    style={[
                        width && { width },
                        {
                            height: customStyle.fontSize * 1.1,
                            borderRadius: 12,
                            marginBottom: customStyle.fontSize * 0.3,
                            ...skeletonStyle,
                        },
                    ]}
                />,
            );
        }

        return <SkeletonPlaceholder>{lines}</SkeletonPlaceholder>;
    }
    if (onPress) {
        return (
            <View style={containerStyle}>
                <TouchableWithoutFeedback onPress={() => onPress()}>
                    <Text
                        {...props}
                        style={[{ fontFamily: 'Calibri' }, customStyle]}
                        {...rest}>
                        {iconName && (
                            <MIcon
                                name={iconName}
                                IconComponent={IconComponent}
                                size={iconSize}
                                color={iconColor ?? color}
                                style={iconStyle}
                            />
                        )}
                        {children}
                    </Text>
                </TouchableWithoutFeedback>
            </View>
        );
    }

    return (
        <View style={containerStyle}>
            <Text
                {...props}
                style={[{ fontFamily: 'Calibri' }, customStyle]}
                {...rest}>
                {iconName && (
                    <MIcon
                        name={iconName}
                        IconComponent={IconComponent}
                        size={iconSize}
                        color={iconColor ?? color}
                        style={iconStyle}
                    />
                )}
                {children}
            </Text>
        </View>
    );
};

export default MText;
