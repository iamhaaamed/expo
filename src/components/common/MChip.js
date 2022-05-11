import useTheme from 'hooks/useTheme';
import React from 'react';
import { ImageBackground, Platform, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MIcon from './MIcon';
import MText from './MText';
import MTouchable from './MTouchable';

/**
 * @param {{text?: string, onPress: () => void, onLongPress: () => void, type?: 'default' | 'opacity' | 'native' | 'highlight' | 'none',
 * style?: import('react-native').ViewStyle, textStyle?: import('react-native').TextStyle, disabled?: boolean,
 * transparent?: boolean, color?: import('react-native').ColorValue,
 * iconLeft?: {name: string, Component?: React.ReactNode, size?: number, color?: import('react-native').ColorValue,
 * style?: import('react-native').TextStyle}, iconRight?: {name: string, Component?: React.ReactNode, size?: number,
 * color?: import('react-native').ColorValue, style?: import('react-native').TextStyle}, iconTop?: {name: string,
 * Component?: React.ReactNode, size?: number, color?: import('react-native').ColorValue,
 * style?: import('react-native').TextStyle}, iconBottom?: {name: string,
 * Component?: React.ReactNode, size?: number, color?: import('react-native').ColorValue,
 * style?: import('react-native').TextStyle}
 * rippleColor?: import('react-native').ColorValue, primary?: boolean, secondary?: boolean,
 * disabledColor?: import('react-native').ColorValue,
 * backgroundImage?: import('react-native').ImageBackgroundProps,
 * containerStyle?: import('react-native').ViewStyle,
 * gradient?: import('react-native-linear-gradient').LinearGradientProps}} props
 */
const MChip = (props) => {
    const {
        text,
        style,
        textStyle,
        type,
        disabled,
        color,
        transparent,
        iconLeft,
        iconRight,
        iconTop,
        iconBottom,
        rippleColor,
        primary,
        secondary,
        disabledColor,
        backgroundImage,
        containerStyle,
        gradient,
    } = props;
    const { COLORS, GUTTERS, TYPOGRAPHY } = useTheme();
    const selectedType =
        type === 'native'
            ? Platform.OS === 'android' && Platform.Version >= 21
                ? 'native'
                : 'opacity'
            : !type || type === 'default'
            ? 'opacity'
            : type;

    const textAndIconColor = disabled
        ? transparent
            ? disabledColor ?? COLORS.disabled
            : COLORS.textOnPrimary
        : transparent
        ? color ?? COLORS.primary
        : COLORS.textOnPrimary;

    const bgColor = backgroundImage
        ? null
        : transparent
        ? 'transparent'
        : disabled
        ? disabledColor ?? COLORS.disabled
        : color
        ? color
        : primary
        ? COLORS.primary
        : secondary
        ? COLORS.secondary
        : COLORS.primary;

    const customProps =
        selectedType === 'opacity' && transparent ? { activeOpacity: 0.5 } : {};

    const flatContainerStyle = StyleSheet.flatten(containerStyle);
    const flatStyle = StyleSheet.flatten(style);
    const hasHorizontalIcon =
        (iconRight && iconRight.name) || (iconLeft && iconLeft.name);

    const ButtonContent = (
        <View
            style={[
                styles.buttonWrapper,
                !transparent && {
                    ...styles.withBackground,
                    backgroundColor: bgColor,
                },
                !transparent && !backgroundImage && !gradient && styles.shadow,
                gradient && styles.gradient,
                iconLeft && iconLeft.name && styles.paddingRight,
                iconRight && iconRight.name && styles.paddingLeft,
                iconLeft &&
                    iconLeft.name &&
                    iconRight &&
                    iconRight.name &&
                    styles.paddingHorizontal,
                hasHorizontalIcon && styles.paddingVertical,
                hasHorizontalIcon && styles.justifyBetween,
                style,
            ]}>
            {iconLeft && iconLeft.name && (
                <MIcon
                    name={iconLeft.name}
                    IconComponent={iconLeft.Component}
                    color={iconLeft.color ?? textAndIconColor}
                    size={iconLeft.size}
                    style={[styles.iconLeft, iconLeft.style]}
                />
            )}
            <View style={styles.centerWrapper}>
                {iconTop && iconTop.name && (
                    <MIcon
                        name={iconTop.name}
                        IconComponent={iconTop.Component}
                        color={iconTop.color ?? textAndIconColor}
                        size={iconTop.size}
                        style={[styles.iconTop, iconTop.style]}
                    />
                )}
                {text && (
                    <MText
                        textStyle={[
                            styles.defaultText,
                            TYPOGRAPHY.textButton,
                            { color: textAndIconColor },
                            textStyle,
                        ]}>
                        {text}
                    </MText>
                )}
                {iconBottom && iconBottom.name && (
                    <MIcon
                        name={iconBottom.name}
                        IconComponent={iconBottom.Component}
                        color={iconBottom.color ?? textAndIconColor}
                        size={iconBottom.size}
                        style={[styles.iconBottom, iconBottom.style]}
                    />
                )}
            </View>
            {iconRight && iconRight.name && (
                <MIcon
                    name={iconRight.name}
                    IconComponent={iconRight.Component}
                    color={iconRight.color ?? textAndIconColor}
                    size={iconRight.size}
                    style={[styles.iconRight, iconRight.style]}
                />
            )}
        </View>
    );

    return (
        <View
            {...props}
            style={[
                GUTTERS.nanoVMargin,
                GUTTERS.nanoHMargin,
                !transparent && (backgroundImage || gradient) && styles.shadow,
                containerStyle,
            ]}
            borderless={transparent}>
            {backgroundImage ? (
                <ImageBackground
                    {...backgroundImage}
                    style={[styles.imageBackground, backgroundImage.style]}
                    borderRadius={
                        backgroundImage.borderRadius ??
                        flatStyle?.borderRadius ??
                        flatContainerStyle?.borderRadius ??
                        styles.withBackground.borderRadius
                    }
                    borderTopLeftRadius={
                        backgroundImage.borderTopLeftRadius ??
                        backgroundImage.borderRadius ??
                        flatStyle?.borderTopLeftRadius ??
                        flatStyle?.borderRadius ??
                        flatContainerStyle?.borderTopLeftRadius ??
                        flatContainerStyle?.borderRadius ??
                        styles.withBackground.borderRadius
                    }
                    borderTopRightRadius={
                        backgroundImage.borderTopRightRadius ??
                        backgroundImage.borderRadius ??
                        flatStyle?.borderTopRightRadius ??
                        flatStyle?.borderRadius ??
                        flatContainerStyle?.borderTopRightRadius ??
                        flatContainerStyle?.borderRadius ??
                        styles.withBackground.borderRadius
                    }
                    borderBottomLeftRadius={
                        backgroundImage.borderBottomLeftRadius ??
                        backgroundImage.borderRadius ??
                        flatStyle?.borderBottomLeftRadius ??
                        flatStyle?.borderRadius ??
                        flatContainerStyle?.borderBottomLeftRadius ??
                        flatContainerStyle?.borderRadius ??
                        styles.withBackground.borderRadius
                    }
                    borderBottomRightRadius={
                        backgroundImage.borderBottomRightRadius ??
                        backgroundImage.borderRadius ??
                        flatStyle?.borderBottomRightRadius ??
                        flatStyle?.borderRadius ??
                        flatContainerStyle?.borderBottomRightRadius ??
                        flatContainerStyle?.borderRadius ??
                        styles.withBackground.borderRadius
                    }>
                    {ButtonContent}
                </ImageBackground>
            ) : gradient ? (
                <LinearGradient
                    {...gradient}
                    style={[
                        gradient.style,
                        Platform.OS === 'android' ? styles.shadow : {},
                        {
                            borderRadius:
                                gradient.style?.borderRadius ??
                                flatStyle?.borderRadius ??
                                flatContainerStyle?.borderRadius ??
                                styles.withBackground.borderRadius,
                            borderTopLeftRadius:
                                gradient.style?.borderTopLeftRadius ??
                                gradient.style?.borderRadius ??
                                flatStyle?.borderTopLeftRadius ??
                                flatStyle?.borderRadius ??
                                flatContainerStyle?.borderTopLeftRadius ??
                                flatContainerStyle?.borderRadius ??
                                styles.withBackground.borderRadius,
                            borderTopRightRadius:
                                gradient.style?.borderTopRightRadius ??
                                gradient.style?.borderRadius ??
                                flatStyle?.borderTopRightRadius ??
                                flatStyle?.borderRadius ??
                                flatContainerStyle?.borderTopRightRadius ??
                                flatContainerStyle?.borderRadius ??
                                styles.withBackground.borderRadius,
                            borderBottomLeftRadius:
                                gradient.style?.borderBottomLeftRadius ??
                                gradient.style?.borderRadius ??
                                flatStyle?.borderBottomLeftRadius ??
                                flatStyle?.borderRadius ??
                                flatContainerStyle?.borderBottomLeftRadius ??
                                flatContainerStyle?.borderRadius ??
                                styles.withBackground.borderRadius,
                            borderBottomRightRadius:
                                gradient.style?.borderBottomRightRadius ??
                                gradient.style?.borderRadius ??
                                flatStyle?.borderBottomRightRadius ??
                                flatStyle?.borderRadius ??
                                flatContainerStyle?.borderBottomRightRadius ??
                                flatContainerStyle?.borderRadius ??
                                styles.withBackground.borderRadius,
                        },
                    ]}>
                    {ButtonContent}
                </LinearGradient>
            ) : (
                ButtonContent
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    buttonWrapper: {
        paddingHorizontal: 6,
        paddingVertical: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // flex: 1,
    },
    justifyBetween: {
        justifyContent: 'space-between',
    },
    paddingVertical: {
        paddingVertical: 6,
    },
    paddingRight: {
        paddingRight: 6,
    },
    paddingLeft: {
        paddingLeft: 6,
    },
    paddingHorizontal: {
        paddingRight: 6,
        paddingLeft: 6,
        paddingHorizontal: 6,
    },
    withBackground: {
        // borderRadius: 3,
    },
    shadow: {
        // shadowColor: 'black',
        // shadowOpacity: 0.26,
        // shadowOffset: { width: 0, height: 2 },
        // shadowRadius: 6,
        // elevation: 6,
    },
    defaultText: {
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    centerWrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconRight: {
        marginHorizontal: 0,
        paddingRight: 0,
        marginVertical: 0,
        paddingVertical: 0,
    },
    iconLeft: {
        marginHorizontal: 0,
        paddingLeft: 0,
        marginVertical: 0,
        paddingVertical: 0,
    },
    iconTop: {
        marginTop: 0,
        paddingVertical: 0,
    },
    iconBottom: {
        marginBottom: 0,
        paddingVertical: 0,
    },
    imageBackground: {
        flex: 1,
    },
    gradient: {
        backgroundColor: null,
    },
});

export default React.memo(MChip);
