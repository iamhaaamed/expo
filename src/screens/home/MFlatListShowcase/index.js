import React from 'react';
import { MButton, MText, MIcon, MImage } from 'components/common';
import useTheme from 'hooks/useTheme';
import { View } from 'react-native';
import { createScreen } from 'components/elements';
import MFlatList from 'components/common/MFlatList';
import { scale, verticalScale } from 'utils';

const MFlatListShowcase = createScreen(
    (props) => {
        const { LAYOUT, GUTTERS, CONSTANTS } = useTheme();
        const DATA = CONSTANTS.flatList;
        return (
            <View style={LAYOUT.fill}>
                <View
                    style={[
                        LAYOUT.colCenter,
                        GUTTERS.regularHPadding,
                        GUTTERS.regularVPadding,
                    ]}>
                    <MFlatList
                        data={DATA}
                        horizontal
                        style={{ fontSize: 15 }}
                        renderComponent={({ item }) => {
                            return (
                                <View
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        backgroundColor: '#E9E7ED',
                                        borderRadius: 30,
                                        marginHorizontal: 5,
                                        padding: 10,
                                    }}>
                                    <MText>{item?.title ?? ''}</MText>
                                    <MIcon name={item?.iconName} />
                                </View>
                            );
                        }}
                    />
                    <MFlatList
                        data={DATA}
                        horizontal
                        style={{ fontSize: 15 }}
                        renderComponent={({ item, onPress, selectedId }) => {
                            return (
                                <MButton
                                    text={item?.title}
                                    color={
                                        item?.id === selectedId
                                            ? 'green'
                                            : 'red'
                                    }
                                    onPress={onPress}
                                    iconRight={{
                                        name:
                                            item.id === selectedId
                                                ? 'star'
                                                : item?.iconName,
                                    }}
                                />
                            );
                        }}
                    />
                    <MFlatList
                        data={DATA}
                        horizontal
                        style={{ fontSize: 15 }}
                        renderComponent={({ item }) => {
                            return (
                                <View
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        borderRadius: 30,
                                        marginHorizontal: 5,
                                        padding: 10,
                                    }}>
                                    <View
                                        style={{
                                            backgroundColor:
                                                item?.color ?? 'red',
                                            width: 50,
                                            height: 50,
                                            borderRadius: 50,
                                            marginBottom: 10,
                                            borderWidth: 1,
                                            borderColor: 'grey',
                                        }}></View>
                                    <MText>{item?.title ?? ''}</MText>
                                </View>
                            );
                        }}
                    />
                    <MFlatList
                        data={DATA}
                        horizontal
                        style={{ fontSize: 15 }}
                        renderComponent={({ item }) => {
                            return (
                                <>
                                    <MImage
                                        style={{
                                            width: 120,
                                            height: 120,
                                            borderRadius: 30,
                                            marginHorizontal: 5,
                                        }}
                                        imageSource={item?.imageSource}
                                    />
                                    <View
                                        style={{
                                            position: 'absolute',
                                            left: 0,
                                            right: 0,
                                            bottom: 25,
                                            alignItems: 'center',
                                        }}>
                                        <MText
                                            textStyle={{
                                                color: 'white',
                                                fontSize: 15,
                                                fontWeight: 'bold',
                                            }}>
                                            {item?.title ?? ''}
                                        </MText>
                                    </View>
                                </>
                            );
                        }}
                    />
                    <MFlatList
                        data={DATA}
                        horizontal
                        style={{ fontSize: 15 }}
                        renderComponent={({ item }) => {
                            return (
                                <View
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: 200,
                                        backgroundColor: 'white',
                                        marginHorizontal: 10,
                                        borderRadius: 10,
                                        borderColor: 'grey',
                                        borderWidth: 1,
                                        paddingVertical: 15,
                                    }}>
                                    <MImage
                                        style={{
                                            width: '85%',
                                            height: 120,
                                            borderRadius: 10,
                                            marginHorizontal: 5,
                                        }}
                                        imageSource={item?.imageSource}
                                    />
                                    <MText
                                        textStyle={{
                                            color: 'black',
                                            fontSize: 15,
                                            fontWeight: 'bold',
                                            marginTop: 15,
                                            marginBottom: 5,
                                        }}>
                                        {item?.title ?? ''}
                                    </MText>
                                    <MText
                                        textStyle={{
                                            color: 'black',
                                            alignSelf: 'center',
                                            fontSize: 14,
                                            marginHorizontal: 15,
                                            textAlign: 'center',
                                        }}
                                        customStyle={{ alignItems: 'center' }}>
                                        {item?.body ?? ''}
                                    </MText>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            marginTop: 10,
                                            marginHorizontal: 15,
                                        }}>
                                        <MButton
                                            text="Follow"
                                            textStyle={{
                                                fontSize: scale(17),
                                            }}
                                            style={{
                                                borderRadius: 10,
                                                height: verticalScale(50),
                                                backgroundColor: '#55D98E',
                                            }}
                                            containerStyle={{
                                                flex: 1,
                                            }}
                                        />
                                    </View>
                                </View>
                            );
                        }}
                    />
                    <MFlatList
                        data={DATA}
                        columnsCount={2}
                        renderComponent={({ item }) => {
                            return (
                                <View>
                                    <MImage
                                        imageSource={item.imageSource}
                                        style={{
                                            width: 170,
                                            height: 170,
                                            resizeMode: 'cover',
                                            borderRadius: 10,
                                            margin: 5,
                                        }}
                                    />
                                </View>
                            );
                        }}
                    />
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

export default MFlatListShowcase;
