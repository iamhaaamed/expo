import React, { useRef } from 'react';
import { MButton } from 'components/common';
import useTheme from 'hooks/useTheme';
import { StyleSheet, View } from 'react-native';
import { createScreen } from 'components/elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { scale, verticalScale } from 'utils';

const MButtonXDShowcase = createScreen(
    () => {
        const { LAYOUT, GUTTERS, COLORS, TYPOGRAPHY, IMAGES } = useTheme();
        const clickCounter = useRef(0);
        const onPress = () => {
            console.log(`Clicked! ${clickCounter.current}`);
            clickCounter.current = clickCounter.current + 1;
        };
        return (
            <View style={LAYOUT.fill}>
                <View
                    style={[GUTTERS.regularHPadding, GUTTERS.regularVPadding]}>
                    <View style={s.row}>
                        <MButton
                            onPress={onPress}
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 25,
                            }}
                            icon={{
                                size: 24,
                                name: 'add',
                                Component: MaterialIcons,
                            }}
                        />
                        <MButton
                            onPress={onPress}
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 25,
                            }}
                            icon={{
                                size: 24,
                                name: 'chevron-right',
                                Component: MaterialCommunityIcons,
                            }}
                        />
                        <MButton
                            onPress={onPress}
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 25,
                            }}
                            icon={{
                                size: 24,
                                name: 'chevron-left',
                                Component: MaterialCommunityIcons,
                            }}
                        />
                        <MButton
                            onPress={onPress}
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 25,
                            }}
                            icon={{
                                size: 24,
                                name: 'chevron-up',
                                Component: MaterialCommunityIcons,
                            }}
                        />
                        <MButton
                            onPress={onPress}
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 25,
                            }}
                            icon={{
                                size: 24,
                                name: 'chevron-down',
                                Component: MaterialCommunityIcons,
                            }}
                        />
                        <MButton
                            disabled
                            onPress={onPress}
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 25,
                            }}
                            icon={{
                                size: 24,
                                name: 'close',
                                Component: MaterialCommunityIcons,
                            }}
                        />
                    </View>
                    <View style={s.row}>
                        <MButton
                            onPress={onPress}
                            text="ENABLED"
                            textStyle={s.bold}
                            color="#6200EE"
                            transparent
                        />
                        <MButton
                            onPress={onPress}
                            text="DISABLED"
                            textStyle={s.bold}
                            color="#6200EE"
                            transparent
                            disabled
                        />
                    </View>
                    <View style={s.row}>
                        <MButton
                            onPress={onPress}
                            text="ENABLED"
                            textStyle={s.bold}
                            color="#6200EE"
                            transparent
                            iconLeft={{
                                name: 'add',
                                Component: MaterialIcons,
                                size: 24,
                            }}
                        />
                        <MButton
                            onPress={onPress}
                            text="DISABLED"
                            textStyle={s.bold}
                            color="#6200EE"
                            transparent
                            disabled
                            iconLeft={{
                                name: 'add',
                                Component: MaterialIcons,
                                size: 24,
                            }}
                        />
                    </View>
                    <View style={s.row}>
                        <MButton
                            onPress={onPress}
                            text="ENABLED"
                            textStyle={s.bold}
                            color="#6200EE"
                            transparent
                            style={{
                                borderColor: 'rgba(0,0,0,0.12)',
                                borderWidth: 1,
                                borderRadius: 4,
                            }}
                        />
                        <MButton
                            onPress={onPress}
                            text="DISABLED"
                            textStyle={s.bold}
                            color="#6200EE"
                            transparent
                            disabled
                            style={{
                                borderColor: 'rgba(0,0,0,0.12)',
                                borderWidth: 1,
                                borderRadius: 4,
                            }}
                        />
                    </View>
                    <View style={s.row}>
                        <MButton
                            onPress={onPress}
                            text="ENABLED"
                            textStyle={s.bold}
                            color="#6200EE"
                            transparent
                            style={{
                                borderColor: 'rgba(0,0,0,0.12)',
                                borderWidth: 1,
                                borderRadius: 4,
                            }}
                            iconLeft={{
                                name: 'add',
                                Component: MaterialIcons,
                                size: 24,
                            }}
                        />
                        <MButton
                            onPress={onPress}
                            text="DISABLED"
                            textStyle={s.bold}
                            color="#6200EE"
                            transparent
                            disabled
                            iconLeft={{
                                name: 'add',
                                Component: MaterialIcons,
                                size: 24,
                            }}
                            style={{
                                borderColor: 'rgba(0,0,0,0.12)',
                                borderWidth: 1,
                                borderRadius: 4,
                            }}
                        />
                    </View>
                    <View style={s.row}>
                        <MButton
                            onPress={onPress}
                            text="ENABLED"
                            textStyle={s.bold}
                            color="#1492E6"
                            style={{
                                borderRadius: 4,
                            }}
                        />
                        <MButton
                            onPress={onPress}
                            text="DISABLED"
                            textStyle={s.bold}
                            color="#1492E6"
                            disabled
                            style={{
                                borderRadius: 4,
                            }}
                        />
                    </View>
                    <View style={s.row}>
                        <MButton
                            onPress={onPress}
                            text="ENABLED"
                            textStyle={s.bold}
                            color="#1492E6"
                            style={{
                                borderRadius: 4,
                            }}
                            iconLeft={{
                                name: 'add',
                                Component: MaterialIcons,
                                size: 24,
                            }}
                        />
                        <MButton
                            onPress={onPress}
                            text="DISABLED"
                            textStyle={s.bold}
                            color="#1492E6"
                            disabled
                            iconLeft={{
                                name: 'add',
                                Component: MaterialIcons,
                                size: 24,
                            }}
                            style={{
                                borderRadius: 4,
                            }}
                        />
                    </View>
                    <View style={s.row}>
                        <MButton
                            onPress={onPress}
                            text="Book Now"
                            textStyle={[
                                s.bold,
                                { color: 'white', fontSize: 14 },
                            ]}
                            color="#1492E6"
                            style={{
                                borderRadius: 100,
                                width: 140,
                            }}
                            backgroundImage={{
                                source: IMAGES.rainbow,
                                style: { flex: 1 },
                            }}
                        />
                        <MButton
                            onPress={onPress}
                            text="Book Now"
                            textStyle={[s.bold, { color: 'white' }]}
                            color="#00C6AD"
                            style={{
                                borderRadius: 100,
                                paddingHorizontal: 18,
                                paddingVertical: 12,
                            }}
                        />
                    </View>
                    <View style={s.row}>
                        <MButton
                            onPress={onPress}
                            text="Discover destinations"
                            textStyle={[
                                s.bold,
                                { color: 'white', fontSize: 10 },
                            ]}
                            color="#00C6AD"
                            style={{
                                borderRadius: 50,
                                paddingHorizontal: 6,
                                minWidth: 180,
                            }}
                            iconRight={{
                                name: 'chevron-right',
                                Component: MaterialCommunityIcons,
                            }}
                        />
                        <MButton
                            onPress={onPress}
                            text="Show more 5 rooms"
                            textStyle={[s.bold, { fontSize: 10 }]}
                            color="#00C6AD"
                            transparent
                            style={{
                                borderRadius: 50,
                                borderColor: '#00C6AD',
                                borderWidth: 1,
                                paddingVertical: 8,
                            }}
                        />
                    </View>
                    <View style={s.row}>
                        <MButton
                            text="Sign In"
                            textStyle={{
                                fontSize: scale(17),
                            }}
                            style={{
                                borderRadius: 16,
                                width: scale(300),
                                height: verticalScale(50),
                            }}
                            gradient={{
                                colors: ['#006D77', '#014950'],
                            }}
                        />
                    </View>
                    <View style={s.row}>
                        <MButton
                            text="Sign In"
                            textStyle={{
                                fontSize: scale(17),
                            }}
                            style={{
                                borderRadius: 50,
                                height: verticalScale(50),
                            }}
                            containerStyle={{
                                flex: 1,
                            }}
                            gradient={{
                                colors: ['#CB7B5C', '#E29578'],
                                start: { x: 0, y: 0 },
                                end: { x: 1, y: 0 },
                            }}
                        />
                    </View>
                    <View style={s.row}>
                        <MButton
                            text="Large Button"
                            textStyle={{
                                fontSize: scale(17),
                            }}
                            color="#0069D9"
                            style={{
                                borderRadius: 8,
                                height: verticalScale(50),
                                borderColor: '#72B0F2',
                                borderWidth: 3,
                            }}
                            containerStyle={{
                                flex: 1,
                            }}
                        />
                        <MButton
                            text="Large Button"
                            color="#007BFF"
                            style={{
                                borderRadius: 12,
                                height: verticalScale(50),
                            }}
                            containerStyle={{
                                flex: 1,
                            }}
                        />
                    </View>
                    <View style={s.row}>
                        <MButton
                            onPress={onPress}
                            text="Large Button"
                            color="#1492E6"
                            transparent
                            textStyle={{
                                fontSize: scale(14),
                            }}
                            style={{
                                borderRadius: 12,
                                borderColor: '#1492E6',
                                borderWidth: 2,
                                width: 156,
                                paddingVertical: 16,
                            }}
                            containerStyle={{
                                marginRight: 20,
                                alignSelf: 'center',
                            }}
                        />
                        <MButton
                            onPress={onPress}
                            color="#1492E6"
                            style={{
                                borderRadius: 100,
                                width: scale(50),
                                height: scale(50),
                                paddingLeft: 3,
                                paddingRight: 0,
                                justifyContent: 'center',
                            }}
                            iconLeft={{
                                name: 'chevron-right',
                                Component: MaterialCommunityIcons,
                                size: 32,
                            }}
                        />
                    </View>
                    <View style={s.row}>
                        <MButton
                            onPress={onPress}
                            color="#1492E6"
                            text="Facebook"
                            textStyle={{
                                fontSize: scale(16),
                            }}
                            style={{
                                borderRadius: 50,
                                paddingVertical: 16,
                                paddingLeft: 26,
                                paddingRight: 26,
                            }}
                            containerStyle={{ width: '80%' }}
                            iconLeft={{
                                name: 'facebook',
                                Component: MaterialCommunityIcons,
                                size: 26,
                            }}
                            iconRight={{
                                name: 'chevron-right',
                                Component: MaterialCommunityIcons,
                                size: 36,
                            }}
                        />
                    </View>
                    <View style={s.row}>
                        <MButton
                            onPress={onPress}
                            text="Enabled"
                            style={{
                                paddingBottom: verticalScale(6),
                                paddingTop: verticalScale(6),
                                paddingRight: scale(16),
                                paddingLeft: scale(8),
                                shadowColor: 'rgba(0,0,0,0.16)',
                                shadowOffset: { width: 0, height: 3 },
                                shadowRadius: 6,
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'row',
                                textAlign: 'center',
                                justifyContent: 'space-between',
                                borderTopLeftRadius: 4,
                                borderTopRightRadius: 4,
                                borderBottomRightRadius: 4,
                                borderBottomLeftRadius: 4,
                            }}
                            containerStyle={{
                                width: scale(104),
                                height: verticalScale(29),
                            }}
                            textStyle={{ fontSize: verticalScale(14) }}
                            color="#1492E6"
                            iconLeft={{
                                name: 'add',
                                Component: MaterialIcons,
                            }}
                        />
                    </View>
                </View>
            </View>
        );
    },
    {
        scrollView: true,
        paddingBottom: false,
        paddingTop: false,
    },
);

const s = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginBottom: 6,
    },
    bold: {
        fontWeight: '500',
    },
});

export default MButtonXDShowcase;
