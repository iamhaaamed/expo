import React, { useRef, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { scale } from 'utils';
import useTheme from 'hooks/useTheme';
import MText from './MText';
import MTouchable from './MTouchable';
import validate from 'validate.js';
import MIcon from './MIcon';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

/**
 *
 * @param {{borderColor?: import('react-native').ColorValue, borderWidth?: number,
 * borderRadius?: number, multiline?: boolean,
 * containerStyle?: import('react-native').ViewStyle, height?: number | string,
 * wrapperStyle?: import('react-native').ViewStyle, inputStyle?: import('react-native').TextStyle,
 * align?: 'right' | 'left' | 'center', textArea?: boolean, separator?: boolean,
 * onChangeText?: (text: string) => void, placeholder?: string, prefix?: string,
 * keyboardType?: import('react-native').KeyboardTypeOptions, ltr?: boolean,
 * clearButton?: boolean, englishChar?: boolean, onKeyUp?: () => void,
 * disabled?: boolean, error?: boolean, value?: string,
 * backgroundColor?: import('react-native').ColorValue,
 * textColor?: import('react-native').ColorValue,
 * placeholderColor?: import('react-native').ColorValue,
 * loading?: boolean,
 * skeletonOptions?: { style?: import('react-native').ViewStyle,
 * speed?: number, backgroundColor?: import('react-native').ColorValue,
 * highlightColor?: import('react-native').ColorValue}
 * iconRight?: {name: string, Component?: React.ReactNode, size?: number,
 * color?: import('react-native').ColorValue, style?: import('react-native').TextStyle,
 * onPress?: () => void}, iconLeft?: {name: string, Component?: React.ReactNode, size?: number,
 * color?: import('react-native').ColorValue, style?: import('react-native').TextStyle,
 * onPress?: () => void}} props
 */
const MInput = ({
    borderColor,
    borderWidth = 0,
    borderRadius = 100,
    multiline = false,
    containerStyle,
    wrapperStyle,
    inputStyle,
    height = 50,
    align = 'right',
    textArea = false,
    separator = false,
    onChangeText = () => {},
    placeholder,
    prefix,
    keyboardType,
    ltr = true,
    clearButton = false,
    // showPasswordButton = false,
    englishChar,
    onKeyUp = () => {},
    disabled = false,
    error = false,
    value,
    backgroundColor,
    textColor,
    placeholderColor,
    loading,
    skeletonOptions,
    iconRight,
    iconLeft,
    ...props
}) => {
    const { COLORS, TYPOGRAPHY } = useTheme();
    const data = useRef({ value: '', multiline: true });
    const [state, setState] = useState(data.current);
    // const [showPass, setShowPass] = useState(false);
    const [isTyping, setIsTyping] = useState({
        name: '',
        typing: false,
        typingTimeout: 0,
    });

    const flatContainerStyle = StyleSheet.flatten(containerStyle ?? {});

    if (loading) {
        const {
            speed,
            backgroundColor: skeletonBg,
            highlightColor,
            style: skeletonStyle,
        } = skeletonOptions ?? {};
        return (
            <SkeletonPlaceholder
                backgroundColor={skeletonBg}
                {...{ speed, highlightColor }}>
                <View
                    style={[
                        { height },
                        {
                            marginVertical:
                                styles.containerDefault.marginVertical,
                            marginHorizontal:
                                styles.containerDefault.marginHorizontal,
                            borderRadius: styles.containerDefault.borderRadius,
                        },
                        skeletonStyle,
                    ]}
                />
            </SkeletonPlaceholder>
        );
    }

    const resetState = () => {
        data.current = { ...data.current, value: '' };
        setState(data.current);
        onChangeText('');
    };

    // const togglePassword = () => {
    //   setShowPass((prev) => !prev);
    // };

    const change = (val = {}) => {
        data.current = { ...data.current, ...val };
        setState(data.current);

        if (onKeyUp) {
            if (isTyping.typingTimeout) {
                clearTimeout(isTyping.typingTimeout);
            }
            setIsTyping({
                name: data.current.value,
                typing: false,
                typingTimeout: setTimeout(() => {
                    onKeyUp(data.current.value);
                }, 500),
            });
        }
    };

    const _handleFocus = () => {
        change({
            multiline: textArea,
        });
    };

    const _handleBlur = () => {
        change({
            multiline: true,
        });
    };

    const _onChangeText = (value) => {
        if (!disabled) {
            value = separator ? value.split(',').join('') : value;
            if (keyboardType === 'numeric' && !validate.isNumber(value * 1)) {
                return;
            }
            change({ value });
            onChangeText(value);
        }
    };

    return (
        <View
            style={[
                styles.containerDefault,
                {
                    height,
                    backgroundColor: backgroundColor ?? COLORS.inputBackground,
                },
                containerStyle,
                {
                    borderColor:
                        flatContainerStyle.borderColor ?? 'transparent',
                },
            ]}>
            <View
                style={[
                    styles.wrapperDefault,
                    {
                        alignItems: { left: 'flex-start', center: 'center' }[
                            align
                        ],
                    },
                    wrapperStyle,
                ]}>
                <TextInput
                    multiline={multiline}
                    style={[
                        styles.inputDefault,

                        textArea && styles.textArea,
                        {
                            textAlign: 'left',
                            textAlignVertical: textArea ? 'top' : 'center',
                            ...{ borderColor, borderWidth, borderRadius },
                            color: textColor ?? COLORS.inputText,
                        },
                        keyboardType === 'numeric' && styles.ltr,
                        prefix && styles.paddingLeft,
                        {
                            // borderWidth: 1,
                            borderColor: error
                                ? COLORS.error
                                : borderColor ?? 'transparent',
                        },
                        inputStyle,
                    ]}
                    onChangeText={_onChangeText}
                    onFocus={_handleFocus}
                    onBlur={_handleBlur}
                    value={value}
                    underlineColorAndroid="transparent"
                    autoCorrect={false}
                    keyboardType={keyboardType}
                    placeholder={placeholder}
                    placeholderTextColor={
                        placeholderColor ?? COLORS.placeholder
                    }
                    // secureTextEntry={
                    //   showPasswordButton ? !data.current.showPassword : false
                    // }
                    {...props}
                />

                {/* {showPasswordButton ? (
          <View style={styles.button}>
            <MTouchable type="native" onPress={togglePassword} borderless>
              <MIcon
                name={showPass ? 'eye-off' : 'eye'}
                IconComponent={MaterialCommunityIcons}
                color={COLORS.inputText}
              />
            </MTouchable>
          </View>
        ) : null} */}

                {/* {clearButton && state.value ? (
          <View style={styles.button}>
            <MTouchable type="native" onPress={resetState} borderless>
              <MIcon
                name="clear"
                IconComponent={MaterialIcons}
                color={COLORS.inputText}
              />
            </MTouchable>
          </View>
        ) : null} */}

                {iconRight && iconRight.name ? (
                    <View style={styles.button}>
                        <MTouchable
                            type="native"
                            onPress={iconRight.onPress}
                            borderless>
                            <MIcon
                                name={iconRight.name}
                                IconComponent={iconRight.Component}
                                color={iconRight.color ?? COLORS.inputText}
                                size={iconRight.size}
                                style={iconRight.style}
                            />
                        </MTouchable>
                    </View>
                ) : null}

                {prefix && (
                    <View style={styles.prefix}>
                        <MText
                            textStyle={TYPOGRAPHY.span}
                            color={COLORS.primary}>
                            {prefix}
                        </MText>
                    </View>
                )}
            </View>
            {iconLeft && iconLeft.name ? (
                <MIcon
                    size={iconLeft.size ?? scale(14)}
                    style={[
                        styles.icon,
                        textArea && styles.iconTextArea,
                        iconLeft.style,
                    ]}
                    name={iconLeft.name}
                    IconComponent={iconLeft.Component}
                    color={iconLeft.color}
                />
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    containerDefault: {
        shadowColor: 'gray',
        shadowOpacity: 0.32,
        shadowRadius: 5.5,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        elevation: 5,
        marginVertical: 5,
        justifyContent: 'center',
        position: 'relative',
        // overflow: 'hidden',
        borderRadius: 25,
        borderWidth: 1,
        flexDirection: 'row-reverse',
    },
    wrapperDefault: {
        flex: 1,
        justifyContent: 'center',
    },
    inputDefault: {
        fontSize: scale(14),
        width: '100%',
        padding: 0,
        textAlign: 'left',
        position: 'relative',
        zIndex: 10,
        paddingHorizontal: 10,
        height: '100%',
        paddingVertical: 10,
    },
    textArea: {
        textAlignVertical: 'top',
        paddingTop: 10,
    },
    ltr: {
        textAlign: 'left',
    },
    paddingLeft: {
        paddingLeft: 50,
    },
    marginLeft: {
        marginLeft: 10,
    },
    label: {
        position: 'absolute',
        zIndex: -1,
        height: '100%',
        paddingHorizontal: 0,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    labelPrefix: {
        marginLeft: 40,
    },
    labelTop: {
        alignItems: 'flex-start',
        paddingTop: 10,
    },
    prefix: {
        position: 'absolute',
        zIndex: -1,
        left: 10,
    },
    button: {
        zIndex: 2000,
        position: 'absolute',
        right: 5,
        padding: 10,
    },
    icon: {
        marginLeft: 10,
        alignSelf: 'center',
    },
    iconTextArea: {
        marginTop: 10,
        alignSelf: 'flex-start',
    },
});

export default MInput;
