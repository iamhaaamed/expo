import {
    MButton,
    MFlatList,
    MIcon,
    MImage,
    MInput,
    MText,
    MTouchable,
} from 'components/common';
import React from 'react';
import useTheme from 'hooks/useTheme';
import { ScrollView, StyleSheet, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const DrawerContentOne = (props) => {
    const { IMAGES } = useTheme();
    return (
        <ScrollView
            {...props}
            contentContainerStyle={DCOneStyles.containerStyle}>
            <View style={DCOneStyles.header}>
                <MImage imageSource={IMAGES.klopp} style={DCOneStyles.avatar} />
                <MText color="#fff" textStyle={DCOneStyles.name}>
                    Mohammad Fardin
                </MText>
                <MText color="#fff">@MFardin</MText>
                <View style={DCOneStyles.row}>
                    <View
                        style={[
                            DCOneStyles.view,
                            { backgroundColor: '#7a00ff' },
                        ]}
                    />
                    <View
                        style={[
                            DCOneStyles.view,
                            { backgroundColor: '#6a00ff' },
                        ]}
                    />
                    <View
                        style={[
                            DCOneStyles.view,
                            { backgroundColor: '#4575ff' },
                        ]}
                    />
                    <View
                        style={[
                            DCOneStyles.view,
                            { backgroundColor: '#0ccbe8' },
                        ]}
                    />
                </View>
            </View>
            <View>
                {[
                    { label: 'Home', icon: 'home' },
                    { label: 'Bookings', icon: 'date-range' },
                    { label: 'Payments', icon: 'money' },
                    { label: 'Contact Us', icon: 'account-circle' },
                    { label: 'About Us', icon: 'info' },
                    { label: 'Privacy Policy', icon: 'privacy-tip' },
                    { label: 'Log Out', icon: 'exit-to-app' },
                ].map((item) => (
                    <MButton
                        key={item.label}
                        text={item.label}
                        transparent
                        type="native"
                        style={DCOneStyles.item}
                        textStyle={{ color: 'black' }}
                        iconLeft={{
                            name: item.icon,
                            color: 'black',
                            Component: MaterialIcons,
                            style: { marginRight: 12 },
                        }}
                    />
                ))}
            </View>
        </ScrollView>
    );
};
const DCOneStyles = StyleSheet.create({
    containerStyle: {
        flex: 1,
    },
    header: {
        height: 200,
        paddingHorizontal: 14,
        justifyContent: 'center',
        backgroundColor: '#2f2c46',
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 12,
    },
    name: {
        fontSize: 18,
        marginTop: 12,
    },
    row: {
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute',
        flexDirection: 'row',
    },
    view: {
        flex: 1,
        height: 10,
    },
    item: {
        height: 48,
        justifyContent: 'flex-start',
    },
});

export const DrawerContentTwo = (props) => {
    return (
        <ScrollView
            {...props}
            contentContainerStyle={DCTwoStyles.containerStyle}>
            {[
                { label: 'Bookings', icon: 'date-range' },
                { label: 'Payments', icon: 'money' },
                { label: 'Contact Us', icon: 'account-circle' },
                { label: 'About Us' },
                { label: 'Privacy Policy' },
                { label: 'Log Out' },
            ].map((item) => (
                <MButton
                    key={item.label}
                    text={item.label}
                    transparent
                    type="native"
                    style={DCTwoStyles.item}
                    textStyle={{ color: 'white' }}
                    iconLeft={{
                        name: item.icon,
                        color: 'white',
                        Component: MaterialIcons,
                        style: { marginRight: 12 },
                    }}
                />
            ))}
        </ScrollView>
    );
};

const DCTwoStyles = StyleSheet.create({
    containerStyle: {
        padding: 16,
        width: '85%',
        borderRadius: 12,
        marginVertical: 50,
        marginHorizontal: 24,
        backgroundColor: '#2F2C46',
    },
    item: {
        height: 48,
        justifyContent: 'flex-start',
    },
});

export const DrawerContentThree = (props) => {
    const { IMAGES } = useTheme();
    return (
        <ScrollView
            {...props}
            contentContainerStyle={DCThreeStyles.containerStyle}>
            <View style={DCThreeStyles.header}>
                <MImage
                    imageSource={IMAGES.klopp}
                    style={DCThreeStyles.avatar}
                />
                <MText color="#fff" textStyle={DCThreeStyles.name}>
                    Mohammad Fardin
                </MText>
                <MText color="#fff">@MFardin</MText>
            </View>
            {[
                { label: 'Home', icon: 'home' },
                { label: 'Bookings', icon: 'date-range' },
                { label: 'Payments', icon: 'money' },
                { label: 'Contact Us', icon: 'account-circle' },
                { label: 'About Us' },
                { label: 'Privacy Policy' },
                { label: 'Log Out' },
            ].map((item) => (
                <MButton
                    key={item.label}
                    text={item.label}
                    transparent
                    type="native"
                    style={DCTwoStyles.item}
                    textStyle={{ color: 'white' }}
                    iconLeft={{
                        name: item.icon,
                        color: 'white',
                        Component: MaterialIcons,
                        style: { marginRight: 12 },
                    }}
                />
            ))}
        </ScrollView>
    );
};

const DCThreeStyles = StyleSheet.create({
    containerStyle: {
        top: 100,
        bottom: 100,
        paddingTop: 0,
        width: '100%',
        paddingBottom: 50,
        position: 'absolute',
        borderTopEndRadius: 18,
        borderBottomEndRadius: 18,
        backgroundColor: '#2f2c46',
    },
    header: {
        height: 200,
        paddingHorizontal: 14,
        borderTopEndRadius: 18,
        justifyContent: 'center',
        backgroundColor: '#6a00ff',
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 12,
    },
    name: {
        fontSize: 18,
        marginTop: 12,
    },
});

export const DrawerContentFour = (props) => {
    const { IMAGES } = useTheme();
    return (
        <ScrollView
            {...props}
            contentContainerStyle={DCFourStyles.containerStyle}>
            <View style={DCFourStyles.header}>
                <MImage
                    imageSource={IMAGES.klopp}
                    style={DCFourStyles.avatar}
                />
            </View>
            {[
                'home',
                'date-range',
                'money',
                'account-circle',
                'info',
                'privacy-tip',
                'exit-to-app',
            ].map((item) => (
                <MTouchable
                    type="opacity"
                    style={DCFourStyles.button}
                    onPress={() => console.log('Piow')}>
                    <MIcon
                        IconComponent={() => (
                            <MaterialIcons size={24} color="#FFF" name={item} />
                        )}
                    />
                </MTouchable>
            ))}
        </ScrollView>
    );
};

const DCFourStyles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#2f2c46',
    },
    header: {
        height: 100,
        paddingHorizontal: 14,
        borderTopEndRadius: 18,
        justifyContent: 'center',
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 8,
    },
    button: {
        width: 85,
        height: 85,
        alignItems: 'center',
        borderBottomWidth: 0.2,
        justifyContent: 'center',
        borderBottomColor: 'rgba(255,255,255,0.2)',
    },
});

export const DrawerContentFive = (props) => {
    return (
        <ScrollView {...props}>
            <View style={DCFiveStyles.searchView}>
                <MInput
                    placeholder="Search"
                    containerStyle={DCFiveStyles.input}
                    iconLeft={{ name: 'search', size: 22 }}
                />
            </View>
            <MFlatList
                data={[
                    { name: 'Home', icon: 'home', color: '#3d67e5' },
                    { name: 'Bookings', icon: 'date-range', color: '#5e00e5' },
                    { name: 'Payments', icon: 'money', color: '#6c00e5' },
                    {
                        name: 'Contact Us',
                        icon: 'account-circle',
                        color: '#4575ff',
                    },
                    { name: 'About Us', icon: 'info', color: '#6a00ff' },
                    {
                        name: 'Privacy Policy',
                        icon: 'privacy-tip',
                        color: '#7a00ff',
                    },
                ]}
                keyExtractorName="name"
                columnsCount={3}
                renderComponent={({ item, onPress, selectedId }) => {
                    return (
                        <MTouchable
                            type="opacity"
                            style={[
                                DCFiveStyles.button,
                                { backgroundColor: item.color },
                            ]}>
                            <MIcon
                                IconComponent={() => (
                                    <MaterialIcons
                                        size={24}
                                        color="#FFF"
                                        name={item.icon}
                                    />
                                )}
                            />
                            <MText color="#fff">{item.name}</MText>
                        </MTouchable>
                    );
                }}
            />
        </ScrollView>
    );
};

const DCFiveStyles = StyleSheet.create({
    searchView: {
        padding: 16,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#2f2c46',
    },
    input: {
        height: 50,
        borderRadius: 8,
    },
    button: {
        flex: 1,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
