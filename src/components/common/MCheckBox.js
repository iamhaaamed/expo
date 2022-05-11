import React from 'react';
import { IconFallback } from 'utils';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DEVICE_WIDTH } from 'constants/common';

const MCheckBox = ({
    children,
    labelStyle,
    wrapperStyle,
    isChecked = false,
    setIsChecked,
    labelContainer,
    containerStyle,
    iconSize = 14,
    iconName = 'check',
    iconColor = '#fff',
    iconContainerStyle,
    activeBorderColor = '#000',
    deActiveBorderColor = '#000',
    activeBackgroundColor = '#000',
    deActiveBackgroundColor = '#fff',
    IconComponent = MaterialIcons,
    crossCheckBox = false,
}) => {
    const { Icon_Name, Icon_Component } = IconFallback(iconName, IconComponent);

    return (
        <React.Fragment>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={setIsChecked}
                disabled={!setIsChecked}
                style={[styles.wrapperStyle, wrapperStyle]}>
                <View style={[styles.containerStyle, containerStyle]}>
                    {children && crossCheckBox ? (
                        <View style={labelContainer}>
                            <Text style={[styles.labelStyle, labelStyle]}>
                                {children}
                            </Text>
                        </View>
                    ) : null}
                    {crossCheckBox && <View style={{ flex: 1,flexShrink:1 }} />}
                    <View
                        style={[
                            styles.iconContainer,
                            {
                                width: iconSize + 6,
                                height: iconSize + 6,
                            },
                            isChecked
                                ? {
                                    borderColor: activeBorderColor,
                                    backgroundColor: activeBackgroundColor,
                                }
                                : {
                                    borderColor: deActiveBorderColor,
                                    backgroundColor: deActiveBackgroundColor,
                                },
                            iconContainerStyle,
                        ]}>
                        {isChecked ? (
                            <Icon_Component
                                name={Icon_Name}
                                size={iconSize}
                                color={iconColor}
                            />
                        ) : (
                            <View
                                style={{
                                    width: iconSize,
                                    height: iconSize,
                                }}
                            />
                        )}
                    </View>
                    {children && !crossCheckBox ? (
                        <View style={labelContainer}>
                            <Text style={[styles.labelStyle, labelStyle]}>
                                {children}
                            </Text>
                        </View>
                    ) : null}
                </View>
            </TouchableOpacity>
        </React.Fragment>
    );
};
const styles = StyleSheet.create({
    wrapperStyle: {
        padding: 4,
    },
    containerStyle: {
        alignItems: 'center',
        flexDirection: 'row',
        flexShrink:1
    },
    iconContainer: {
        padding: 1,
        marginRight: 8,
        aspectRatio: 1,
        borderRadius: 3,
        borderWidth: 1.5,
    },
    divider: {
        width: '88%',
        marginLeft: 24,
        marginBottom: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#ebebeb',
    },
    labelStyle: {flexShrink:1},
    checkBox: {
        alignItems: 'center',
        flexDirection: 'row',
    },
});

export default MCheckBox;
