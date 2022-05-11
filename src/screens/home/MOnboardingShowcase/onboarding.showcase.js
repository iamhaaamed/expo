import React from 'react';
import { MIcon, MOnboarding, MText } from 'components/common';
import {
    View,
    Image,
    Dimensions,
    StyleSheet,
    ImageBackground,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const Images = [
    'https://wallpapercave.com/wp/wp9389286.jpg',
    'https://wallpapercave.com/wp/wp3913920.jpg',
    'https://wallpapercave.com/wp/wp5550132.jpg',
    'https://wallpapercave.com/wp/wp7482262.jpg',
    'https://wallpapercave.com/wp/wp7865998.jpg',
    'https://wallpapercave.com/wp/wp9207105.jpg',
];

export const OBShowCaseOne = () => (
    <MOnboarding
        dot={<View style={OBShowCaseOneStyles.dot} />}
        paginationStyle={{ bottom: 50 }}
        activeDot={<View style={OBShowCaseOneStyles.activeDot} />}
        nextButton={
            <View style={OBShowCaseOneStyles.nextButton}>
                <MIcon name="chevron-forward" color="#fff" />
            </View>
        }
        nextButtonStyle={{ bottom: 32, right: 24 }}
        prevButton={
            <View style={OBShowCaseOneStyles.prevButton}>
                <MIcon name="chevron-back" color="#fff" />
            </View>
        }
        prevButtonStyle={{ bottom: 32, left: 24 }}
        getStartButton={
            <View style={OBShowCaseOneStyles.getStarted}>
                <MText textStyle={{ color: '#FFF' }}>Get Start</MText>
                <MIcon name="chevron-forward" color="#fff" />
            </View>
        }
        onFinish={() => console.log('Piow')}>
        <View style={OBShowCaseOneStyles.slide}>
            <ImageBackground
                style={OBShowCaseOneStyles.image}
                source={{ uri: Images[0] }}>
                <MText textStyle={OBShowCaseOneStyles.title}>I am Groot</MText>
                <MText textStyle={OBShowCaseOneStyles.subtitle}>
                    a baby tree
                </MText>
            </ImageBackground>
        </View>
        <View style={OBShowCaseOneStyles.slide}>
            <ImageBackground
                style={OBShowCaseOneStyles.image}
                source={{ uri: Images[1] }}>
                <MText textStyle={OBShowCaseOneStyles.title}>I am Groot</MText>
                <MText textStyle={OBShowCaseOneStyles.subtitle}>
                    a baby tree
                </MText>
            </ImageBackground>
        </View>
        <View style={OBShowCaseOneStyles.slide}>
            <ImageBackground
                style={OBShowCaseOneStyles.image}
                source={{ uri: Images[2] }}>
                <MText textStyle={OBShowCaseOneStyles.title}>I am Groot</MText>
                <MText textStyle={OBShowCaseOneStyles.subtitle}>
                    a baby tree
                </MText>
            </ImageBackground>
        </View>
        <View style={OBShowCaseOneStyles.slide}>
            <ImageBackground
                style={OBShowCaseOneStyles.image}
                source={{ uri: Images[3] }}>
                <MText textStyle={OBShowCaseOneStyles.title}>I am Groot</MText>
                <MText textStyle={OBShowCaseOneStyles.subtitle}>
                    a baby tree
                </MText>
            </ImageBackground>
        </View>
    </MOnboarding>
);
const OBShowCaseOneStyles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    image: {
        width,
        flex: 1,
        zIndex: -1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    dot: {
        width: 8,
        height: 8,
        margin: 4,
        borderRadius: 4,
        backgroundColor: 'rgba(255,255,255,.5)',
    },
    activeDot: {
        width: 8,
        height: 8,
        margin: 4,
        borderRadius: 4,
        backgroundColor: 'rgba(255,255,255,1)',
    },
    nextButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#492eb9',
    },
    prevButton: {
        width: 50,
        height: 50,
        borderWidth: 2,
        borderRadius: 25,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    getStarted: {
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 12,
        justifyContent: 'center',
        backgroundColor: '#492eb9',
    },
    title: {
        fontSize: 28,
        color: '#fff',
    },
    subtitle: {
        fontSize: 20,
        color: '#fff',
        marginBottom: height * 0.25,
    },
});

export const OBShowCaseTwo = () => (
    <MOnboarding
        prevButton={<></>}
        nextButton={
            <View style={OBShowCaseTwoStyles.nextButton}>
                <MText color="#fff" textStyle={{ fontSize: 16 }}>
                    Next
                </MText>
                <MIcon
                    color="#fff"
                    name="chevron-forward"
                    style={{ position: 'absolute', right: 12 }}
                />
            </View>
        }
        nextButtonStyle={{ bottom: height * 0.07, alignSelf: 'center' }}
        getStartButton={
            <View style={OBShowCaseTwoStyles.nextButton}>
                <MText color="#fff" textStyle={{ fontSize: 16 }}>
                    Next
                </MText>
                <MIcon
                    color="#fff"
                    name="chevron-forward"
                    style={{ position: 'absolute', right: 12 }}
                />
            </View>
        }
        onFinish={() => console.log('Piow')}
        disablePrevButton={true}
        dot={<View style={OBShowCaseTwoStyles.dot} />}
        paginationStyle={OBShowCaseTwoStyles.paginationStyle}
        activeDot={<View style={OBShowCaseTwoStyles.activeDot} />}>
        <View style={OBShowCaseTwoStyles.slide}>
            <Image
                resizeMode="contain"
                style={OBShowCaseTwoStyles.image}
                source={require('assets/images/onboarding1.png')}
            />
            <View style={OBShowCaseTwoStyles.text}>
                <MText textStyle={OBShowCaseTwoStyles.title}>I am Groot</MText>
                <MText textStyle={OBShowCaseTwoStyles.subtitle}>
                    a baby tree
                </MText>
            </View>
        </View>
        <View style={OBShowCaseTwoStyles.slide}>
            <Image
                resizeMode="contain"
                style={OBShowCaseTwoStyles.image}
                source={require('assets/images/onboarding2.png')}
            />
            <View style={OBShowCaseTwoStyles.text}>
                <MText textStyle={OBShowCaseTwoStyles.title}>I am Groot</MText>
                <MText textStyle={OBShowCaseTwoStyles.subtitle}>
                    a baby tree
                </MText>
            </View>
        </View>
        <View style={OBShowCaseTwoStyles.slide}>
            <Image
                resizeMode="contain"
                style={OBShowCaseTwoStyles.image}
                source={require('assets/images/onboarding3.png')}
            />
            <View style={OBShowCaseTwoStyles.text}>
                <MText textStyle={OBShowCaseTwoStyles.title}>I am Groot</MText>
                <MText textStyle={OBShowCaseTwoStyles.subtitle}>
                    a baby tree
                </MText>
            </View>
        </View>
    </MOnboarding>
);
const OBShowCaseTwoStyles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
    },
    image: {
        aspectRatio: 1,
        width: width * 0.5,
    },
    paginationStyle: {
        bottom: height * 0.2,
    },
    dot: {
        width: 8,
        height: 8,
        margin: 2,
        borderRadius: 4,
        backgroundColor: '#e5e5e5',
    },
    activeDot: {
        width: 8,
        height: 8,
        margin: 2,
        borderRadius: 4,
        backgroundColor: 'orange',
    },
    nextButton: {
        height: 50,
        borderRadius: 25,
        width: width * 0.8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
    },
    text: {
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        color: '#000',
    },
    subtitle: {
        fontSize: 20,
        color: '#000',
        marginBottom: height * 0.25,
    },
});

export const OBShowCaseThree = () => (
    <MOnboarding
        disablePrevButton
        prevButton={<MIcon size={24} name="chevron-back" color="#ccc" />}
        nextButton={
            <View style={OBShowCaseThreeStyles.nextButton}>
                <MText color="#fff" textStyle={{ fontSize: 16 }}>
                    Next
                </MText>
            </View>
        }
        nextButtonStyle={{ bottom: height * 0.07, alignSelf: 'center' }}
        getStartButton={
            <View style={OBShowCaseThreeStyles.getStarted}>
                <MText color="#fff" textStyle={{ fontSize: 16 }}>
                    Get Started
                </MText>
            </View>
        }
        onFinish={() => console.log('Piow')}
        skipButton={
            <MText textStyle={{ fontSize: 18, color: '#ccc' }}>Skip</MText>
        }
        skipButtonStyle={{ top: 24, right: 24 }}
        prevButtonStyle={{ top: 24, left: 24 }}
        dot={<View style={OBShowCaseThreeStyles.dot} />}
        paginationStyle={OBShowCaseThreeStyles.paginationStyle}
        activeDot={<View style={OBShowCaseThreeStyles.activeDot} />}>
        <View style={OBShowCaseThreeStyles.slide}>
            <View style={OBShowCaseThreeStyles.text}>
                <MText textStyle={OBShowCaseThreeStyles.title}>
                    I am Groot
                </MText>
                <MText textStyle={OBShowCaseThreeStyles.subtitle}>
                    a baby tree
                </MText>
            </View>
            <Image
                resizeMode="contain"
                style={OBShowCaseThreeStyles.image}
                source={require('assets/images/onboarding1.png')}
            />
        </View>
        <View style={OBShowCaseThreeStyles.slide}>
            <View style={OBShowCaseThreeStyles.text}>
                <MText textStyle={OBShowCaseThreeStyles.title}>
                    I am Groot
                </MText>
                <MText textStyle={OBShowCaseThreeStyles.subtitle}>
                    a baby tree
                </MText>
            </View>
            <Image
                resizeMode="contain"
                style={OBShowCaseThreeStyles.image}
                source={require('assets/images/onboarding2.png')}
            />
        </View>
        <View style={[OBShowCaseThreeStyles.slide]}>
            <View>
                <View style={OBShowCaseThreeStyles.text}>
                    <MText textStyle={OBShowCaseThreeStyles.title}>
                        I am Groot
                    </MText>
                    <MText textStyle={OBShowCaseThreeStyles.subtitle}>
                        a baby tree
                    </MText>
                </View>
                <Image
                    resizeMode="contain"
                    style={OBShowCaseThreeStyles.image}
                    source={require('assets/images/onboarding3.png')}
                />
            </View>
        </View>
    </MOnboarding>
);
const OBShowCaseThreeStyles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 64,
        justifyContent: 'flex-start',
        backgroundColor: 'white',
    },
    image: {
        aspectRatio: 1,
        width: width * 0.5,
    },
    paginationStyle: {
        bottom: height * 0.15,
    },
    dot: {
        width: 8,
        height: 8,
        margin: 2,
        borderRadius: 4,
        backgroundColor: '#e5e5e5',
    },
    activeDot: {
        width: 8,
        height: 8,
        margin: 2,
        borderRadius: 4,
        backgroundColor: '#7d00ff',
    },
    nextButton: {
        height: 50,
        borderRadius: 12,
        width: width * 0.8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7d00ff',
    },
    getStarted: {
        height: 50,
        borderRadius: 12,
        width: width * 0.8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7d00ff',
    },
    text: {
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        color: '#000',
    },
    subtitle: {
        fontSize: 20,
        color: '#000',
        marginBottom: 50,
    },
});

export const OBShowCaseFour = () => (
    <MOnboarding
        disablePrevButton
        prevButton={<MIcon size={24} name="chevron-back" color="#ccc" />}
        nextButton={
            <View style={OBShowCaseFourStyles.nextButton}>
                <MText textStyle={{ fontSize: 16 }}>Next</MText>
            </View>
        }
        nextButtonStyle={{ bottom: height * 0.11, alignSelf: 'center' }}
        getStartButton={
            <View style={OBShowCaseFourStyles.getStarted}>
                <MText textStyle={{ fontSize: 16 }}>Start</MText>
            </View>
        }
        onFinish={() => console.log('Piow')}
        skipButton={
            <MText textStyle={{ fontSize: 18, color: '#ccc' }}>Skip</MText>
        }
        skipButtonStyle={{ top: 24, right: 24 }}
        prevButtonStyle={{ top: 24, left: 24 }}
        dot={<View style={OBShowCaseFourStyles.dot} />}
        paginationStyle={OBShowCaseFourStyles.paginationStyle}
        activeDot={<View style={OBShowCaseFourStyles.activeDot} />}>
        <View style={OBShowCaseFourStyles.slide}>
            <Image
                resizeMode="contain"
                style={OBShowCaseFourStyles.image}
                source={require('assets/images/onboarding1.png')}
            />
            <View style={OBShowCaseFourStyles.text}>
                <MText textStyle={OBShowCaseFourStyles.title}>I am Groot</MText>
                <MText textStyle={OBShowCaseFourStyles.subtitle}>
                    a baby tree
                </MText>
            </View>
        </View>
        <View style={OBShowCaseFourStyles.slide}>
            <Image
                resizeMode="contain"
                style={OBShowCaseFourStyles.image}
                source={require('assets/images/onboarding2.png')}
            />
            <View style={OBShowCaseFourStyles.text}>
                <MText textStyle={OBShowCaseFourStyles.title}>I am Groot</MText>
                <MText textStyle={OBShowCaseFourStyles.subtitle}>
                    a baby tree
                </MText>
            </View>
        </View>
        <View style={[OBShowCaseFourStyles.slide]}>
            <View>
                <Image
                    resizeMode="contain"
                    style={OBShowCaseFourStyles.image}
                    source={require('assets/images/onboarding3.png')}
                />
                <View style={OBShowCaseFourStyles.text}>
                    <MText textStyle={OBShowCaseFourStyles.title}>
                        I am Groot
                    </MText>
                    <MText textStyle={OBShowCaseFourStyles.subtitle}>
                        a baby tree
                    </MText>
                </View>
            </View>
        </View>
    </MOnboarding>
);
const OBShowCaseFourStyles = StyleSheet.create({
    slide: {
        flex: 1,
        paddingTop: 64,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ba0096',
    },
    image: {
        aspectRatio: 1,
        width: width * 0.5,
        bottom: 45,
    },
    paginationStyle: {
        bottom: height * 0.07,
    },
    dot: {
        width: 8,
        height: 8,
        margin: 2,
        borderRadius: 4,
        backgroundColor: '#e5e5e5',
    },
    activeDot: {
        width: 8,
        height: 8,
        margin: 2,
        borderRadius: 4,
        backgroundColor: '#7d00ff',
    },
    nextButton: {
        height: 50,
        borderRadius: 12,
        width: width * 0.4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
    },
    getStarted: {
        height: 50,
        borderRadius: 12,
        width: width * 0.4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
    },
    text: {
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        color: '#fff',
    },
    subtitle: {
        fontSize: 20,
        color: '#fff',
        marginBottom: 50,
    },
});

export const OBShowCaseFive = () => (
    <MOnboarding
        prevButton={<MIcon size={24} name="chevron-back" color="#ccc" />}
        nextButton={
            <View style={OBShowCaseFiveStyles.nextButton}>
                <MIcon name="chevron-forward" color="#fff" />
            </View>
        }
        nextButtonStyle={{ bottom: 32, right: 24 }}
        getStartButton={
            <View style={OBShowCaseFiveStyles.getStarted}>
                <MText color="#fff" textStyle={{ fontSize: 16 }}>
                    Start
                </MText>
            </View>
        }
        onFinish={() => console.log('Piow')}
        showsPagination={false}
        skipButton={
            <MText textStyle={{ fontSize: 18, color: '#dadb00' }}>Skip</MText>
        }
        skipButtonStyle={{ bottom: 45, left: 24 }}
        prevButtonStyle={{ top: 24, left: 24 }}>
        <View style={OBShowCaseFiveStyles.slide}>
            <Image
                resizeMode="contain"
                style={OBShowCaseFiveStyles.image}
                source={require('assets/images/onboarding1.png')}
            />
            <View style={OBShowCaseFiveStyles.text}>
                <MText textStyle={OBShowCaseFiveStyles.title}>I am Groot</MText>
                <View style={OBShowCaseFiveStyles.separator} />
                <MText textStyle={OBShowCaseFiveStyles.subtitle}>
                    a baby tree
                </MText>
            </View>
        </View>
        <View style={OBShowCaseFiveStyles.slide}>
            <Image
                resizeMode="contain"
                style={OBShowCaseFiveStyles.image}
                source={require('assets/images/onboarding2.png')}
            />
            <View style={OBShowCaseFiveStyles.text}>
                <MText textStyle={OBShowCaseFiveStyles.title}>I am Groot</MText>
                <View style={OBShowCaseFiveStyles.separator} />
                <MText textStyle={OBShowCaseFiveStyles.subtitle}>
                    a baby tree
                </MText>
            </View>
        </View>
        <View style={[OBShowCaseFiveStyles.slide]}>
            <Image
                resizeMode="contain"
                style={OBShowCaseFiveStyles.image}
                source={require('assets/images/onboarding3.png')}
            />
            <View style={OBShowCaseFiveStyles.text}>
                <MText textStyle={OBShowCaseFiveStyles.title}>I am Groot</MText>
                <View style={OBShowCaseFiveStyles.separator} />
                <MText textStyle={OBShowCaseFiveStyles.subtitle}>
                    a baby tree
                </MText>
            </View>
        </View>
    </MOnboarding>
);
const OBShowCaseFiveStyles = StyleSheet.create({
    slide: {
        flex: 1,
        paddingTop: 64,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    image: {
        aspectRatio: 1,
        width: width * 0.5,
        bottom: 45,
    },
    separator: {
        width: 50,
        height: 2,
        backgroundColor: '#dadb00',
    },
    nextButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#dadb00',
    },
    getStarted: {
        height: 50,
        borderRadius: 25,
        width: width - 48,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#dadb00',
    },
    text: {
        width: '100%',
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 28,
        color: '#000',
    },
    subtitle: {
        fontSize: 20,
        color: '#000',
        marginBottom: 50,
    },
});
