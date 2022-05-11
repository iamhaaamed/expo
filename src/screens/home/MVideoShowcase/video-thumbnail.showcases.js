import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {
    MIcon,
    MText,
    MImage,
    MFlatList,
    MTouchable,
    MImageBackground,
} from 'components/common';

const { width, height } = Dimensions.get('screen');

const VIDEOS = [
    {
        id: 1,
        date: '18 Nov',
        title: 'Jigar',
        subtitle: 'Jigaram',
        thumbnail: 'https://media.ion.ir/content/modulefile/file/1015509.jpg',
    },
    {
        id: 2,
        date: '19 Nov',
        title: 'Kolah Ghermezi',
        subtitle: 'Kolah ghermezi',
        thumbnail:
            'https://www.filimo.com/shot/wp-content/uploads/2021/10/Kolah-ghermezi-00.jpg',
    },
    {
        id: 3,
        date: '20 Nov',
        title: 'Pesar Khale',
        subtitle: 'Ba maram',
        thumbnail:
            'https://static.cdn.asset.aparat.com/avt/10343352-5930-b.jpg',
    },
    {
        id: 4,
        date: '21 Nov',
        title: 'Babaei',
        subtitle: 'Baaaaa',
        thumbnail:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP2Emf3IO4jf6WLYwMahtsvsnMfA-K_fccjm0evHrg86sXTvoaSy2hnT66WVMEa9vaDic&usqp=CAU',
    },
];

export const VTShowCaseOne = ({ onPress }) => (
    <View style={VTShowCaseOneStyles.wrapper}>
        <MText textStyle={VTShowCaseOneStyles.name}>Showcase One</MText>
        <MFlatList
            data={VIDEOS}
            columnsCount={2}
            keyExtractorName="id"
            renderComponent={({ item, selectedId }) => (
                <MTouchable
                    type="opacity"
                    onPress={onPress}
                    style={VTShowCaseOneStyles.container}>
                    <MImage
                        resizeMode="cover"
                        imageSource={{ uri: item.thumbnail }}
                        style={VTShowCaseOneStyles.image}
                    />
                    <MText textStyle={VTShowCaseOneStyles.title}>
                        {item.title}
                    </MText>
                    <MText textStyle={VTShowCaseOneStyles.subtitle}>
                        {item.subtitle}
                    </MText>
                </MTouchable>
            )}
        />
    </View>
);

const VTShowCaseOneStyles = StyleSheet.create({
    wrapper: {
        paddingVertical: 14,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 14,
    },
    container: {
        flex: 0.5,
        margin: 10,
        aspectRatio: 0.8,
    },
    image: {
        width: '100%',
        aspectRatio: 1,
        borderRadius: 12,
        overflow: 'hidden',
    },
    title: {
        fontSize: 16,
        marginTop: 5,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 12,
        color: 'gray',
    },
});

export const VTShowCaseTwo = ({ onPress }) => (
    <View style={VTShowCaseTwoStyles.wrapper}>
        <MText textStyle={VTShowCaseTwoStyles.name}>Showcase Two</MText>
        <MFlatList
            horizontal
            data={VIDEOS}
            keyExtractorName="id"
            renderComponent={({ item, selectedId }) => (
                <MTouchable
                    type="opacity"
                    onPress={onPress}
                    style={VTShowCaseTwoStyles.container}>
                    <MImageBackground imageUrl={item.thumbnail}>
                        <View style={VTShowCaseTwoStyles.text}>
                            <MText textStyle={VTShowCaseTwoStyles.title}>
                                {item.title}
                            </MText>
                            <MText textStyle={VTShowCaseTwoStyles.subtitle}>
                                {item.subtitle}
                            </MText>
                        </View>
                        <View style={VTShowCaseTwoStyles.playWrapper}>
                            <View style={VTShowCaseTwoStyles.playBack}>
                                <MIcon name="play-outline" color="#fff" />
                            </View>
                        </View>
                    </MImageBackground>
                </MTouchable>
            )}
        />
    </View>
);

const VTShowCaseTwoStyles = StyleSheet.create({
    wrapper: {
        paddingVertical: 14,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 14,
    },
    container: {
        margin: 12,
        width: width * 0.6,
        aspectRatio: 0.8,
        borderRadius: 14,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        aspectRatio: 1,
        borderRadius: 12,
        overflow: 'hidden',
    },
    text: {
        left: 16,
        bottom: 20,
        position: 'absolute',
    },
    title: {
        fontSize: 16,
        marginTop: 5,
        color: 'white',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 12,
        color: 'white',
    },
    playWrapper: {
        right: 16,
        width: 50,
        bottom: 18,
        height: 50,
        borderRadius: 25,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,0,255,0.3)',
    },
    playBack: {
        width: 38,
        height: 38,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,0,255,1)',
    },
});

export const VTShowCaseThree = ({ onPress }) => (
    <View style={VTShowCaseThreeStyles.wrapper}>
        <MText textStyle={VTShowCaseThreeStyles.name}>Showcase Three</MText>
        <MFlatList
            data={VIDEOS}
            keyExtractorName="id"
            renderComponent={({ item, selectedId }) => (
                <MTouchable
                    activeOpacity={1}
                    type="opacity"
                    onPress={onPress}
                    style={VTShowCaseThreeStyles.container}>
                    <View style={VTShowCaseThreeStyles.image}>
                        <MImageBackground imageUrl={item.thumbnail}>
                            <View style={VTShowCaseThreeStyles.iconWrapper}>
                                <MIcon
                                    name="play-circle"
                                    color="white"
                                    size={32}
                                />
                            </View>
                        </MImageBackground>
                    </View>
                    <View style={VTShowCaseThreeStyles.card}>
                        <MText textStyle={VTShowCaseThreeStyles.subtitle}>
                            {item.date}
                        </MText>
                        <MText textStyle={VTShowCaseThreeStyles.title}>
                            {item.title}
                        </MText>
                        <MText textStyle={VTShowCaseThreeStyles.subtitle}>
                            {item.subtitle}
                        </MText>
                    </View>
                </MTouchable>
            )}
        />
    </View>
);

const VTShowCaseThreeStyles = StyleSheet.create({
    wrapper: {
        paddingVertical: 14,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 14,
    },
    card: {
        padding: 16,
        width: '85%',
        elevation: 5,
        height: '100%',
        borderRadius: 12,
        backgroundColor: '#fff',
    },
    iconWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        margin: 10,
        aspectRatio: 2.5,
        width: width * 0.95,
        justifyContent: 'center',
    },
    image: {
        right: 0,
        elevation: 6,
        height: '85%',
        aspectRatio: 1,
        borderRadius: 12,
        overflow: 'hidden',
        position: 'absolute',
    },
    title: {
        fontSize: 16,
        marginTop: 5,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 12,
        color: 'gray',
    },
    iconContainer: {
        backgroundColor: '#fff',
        width: 30,
        height: 30,
        borderRadius: 15,
    },
});

export const VTShowCaseFour = ({ onPress }) => (
    <View style={VTShowCaseFourStyles.wrapper}>
        <MText textStyle={VTShowCaseFourStyles.name}>Showcase Four</MText>
        <View
            style={{
                width: '100%',
                flexDirection: 'row',
                paddingHorizontal: 12,
            }}>
            <MTouchable
                type="opacity"
                onPress={onPress}
                style={{ flex: 1, marginRight: 5 }}>
                <MImage
                    imageSource={{ uri: VIDEOS[0].thumbnail }}
                    style={VTShowCaseFourStyles.image}
                />
            </MTouchable>
            <View
                style={{
                    flex: 1,
                    marginLeft: 5,
                    justifyContent: 'space-between',
                }}>
                <MTouchable
                    type="opacity"
                    onPress={onPress}
                    style={{ flex: 1 }}>
                    <MImage
                        imageSource={{ uri: VIDEOS[1].thumbnail }}
                        style={VTShowCaseFourStyles.square}
                    />
                </MTouchable>
                <MTouchable
                    type="opacity"
                    onPress={onPress}
                    style={{ flex: 1 }}>
                    <MImage
                        imageSource={{ uri: VIDEOS[2].thumbnail }}
                        style={VTShowCaseFourStyles.square}
                    />
                </MTouchable>
            </View>
        </View>
        <MTouchable type="opacity" onPress={onPress}>
            <MImage
                imageSource={{ uri: VIDEOS[3].thumbnail }}
                style={VTShowCaseFourStyles.container}
            />
        </MTouchable>
    </View>
);

const VTShowCaseFourStyles = StyleSheet.create({
    wrapper: {
        paddingVertical: 14,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 14,
    },
    container: {
        margin: 12,
        aspectRatio: 2,
        borderRadius: 14,
        overflow: 'hidden',
        width: width * 0.94,
    },
    image: {
        aspectRatio: 0.5,
        borderRadius: 14,
        overflow: 'hidden',
        // flex: 1,
    },
    square: {
        margin: 2,
        aspectRatio: 1,
        borderRadius: 14,
        overflow: 'hidden',
    },
});

export const VTShowCaseFive = ({ onPress }) => (
    <View style={VTShowCaseFiveStyles.wrapper}>
        <MText textStyle={VTShowCaseFiveStyles.name}>Showcase Five</MText>
        <MFlatList
            data={VIDEOS}
            keyExtractorName="id"
            renderComponent={({ item, selectedId }) => (
                <MTouchable
                    type="opacity"
                    onPress={onPress}
                    style={VTShowCaseFiveStyles.container}>
                    <MImageBackground imageUrl={item.thumbnail}>
                        <View style={VTShowCaseFiveStyles.text}>
                            <MText textStyle={VTShowCaseFiveStyles.title}>
                                {item.title}
                            </MText>
                            <MText textStyle={VTShowCaseFiveStyles.subtitle}>
                                {item.subtitle}
                            </MText>
                        </View>
                        <MTouchable
                            type="opacity"
                            style={VTShowCaseFiveStyles.menu}>
                            <MIcon
                                color="#fff"
                                name="more-vertical"
                                IconComponent={Feather}
                            />
                        </MTouchable>
                    </MImageBackground>
                </MTouchable>
            )}
        />
    </View>
);

const VTShowCaseFiveStyles = StyleSheet.create({
    wrapper: {
        paddingVertical: 14,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 14,
    },
    container: {
        margin: 12,
        aspectRatio: 2,
        borderRadius: 14,
        overflow: 'hidden',
        width: width * 0.94,
    },
    image: {
        width: '100%',
        aspectRatio: 1,
        borderRadius: 12,
        overflow: 'hidden',
    },
    text: {
        left: 16,
        bottom: 20,
        position: 'absolute',
    },
    title: {
        fontSize: 16,
        marginTop: 5,
        color: 'white',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 12,
        color: 'white',
    },
    menu: {
        width: 24,
        height: 24,
        top: 18,
        right: 16,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    playBack: {
        width: 38,
        height: 38,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,0,255,1)',
    },
});
