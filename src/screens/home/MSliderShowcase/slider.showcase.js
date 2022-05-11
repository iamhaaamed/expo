import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MIcon, MSlider, MText } from 'components/common';

const ACTIVE_COLOR = '#AB8BFB',
    DEACTIVE_COLOR = '#FBD5FB';

export const MSliderShowcaseOne = () => {
    const [sliderValue, setSliderValue] = React.useState([85]);
    return (
        <MSlider
            values={sliderValue}
            onChange={setSliderValue}
            markerContainerStyle={{ top: -17 }}
            trackStyle={MSliderShowcaseOneStyles.trackStyle}
            markerStyle={MSliderShowcaseOneStyles.markerStyle}
            selectedStyle={MSliderShowcaseOneStyles.selectedStyle}
            containerStyle={MSliderShowcaseOneStyles.containerStyle}
            unselectedStyle={MSliderShowcaseOneStyles.unselectedStyle}>
            <MSlider.Left>
                <View style={MSliderShowcaseOneStyles.button}>
                    <MIcon name="volume-off" color={ACTIVE_COLOR} />
                </View>
            </MSlider.Left>
            <MSlider.Right>
                <View style={MSliderShowcaseOneStyles.button}>
                    <MIcon name="volume-medium" color={ACTIVE_COLOR} />
                </View>
            </MSlider.Right>
        </MSlider>
    );
};

const MSliderShowcaseOneStyles = StyleSheet.create({
    containerStyle: {
        elevation: 5,
        borderRadius: 16,
        paddingVertical: 12,
        paddingHorizontal: 8,
        backgroundColor: '#FFF',
    },
    selectedStyle: {
        backgroundColor: ACTIVE_COLOR,
    },
    unselectedStyle: {
        backgroundColor: DEACTIVE_COLOR,
    },
    markerStyle: {
        width: 25,
        height: 25,
        elevation: 3,
        borderRadius: 13,
        backgroundColor: 'white',
    },
    trackStyle: {
        height: 12,
        borderRadius: 6,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export const MSliderShowcaseTwo = () => {
    const [multiSliderValue, setMultiSliderValue] = React.useState([70, 85]);
    return (
        <MSlider
            values={multiSliderValue}
            markerContainerStyle={{ top: -17 }}
            trackStyle={MSliderShowcaseTwoStyles.trackStyle}
            markerStyle={MSliderShowcaseTwoStyles.markerStyle}
            selectedStyle={MSliderShowcaseTwoStyles.selectedStyle}
            containerStyle={MSliderShowcaseTwoStyles.containerStyle}
            unselectedStyle={MSliderShowcaseTwoStyles.unselectedStyle}>
            <MSlider.Left>
                <View style={MSliderShowcaseTwoStyles.button}>
                    <MIcon name="minus" color={ACTIVE_COLOR} />
                </View>
            </MSlider.Left>
            <MSlider.Right>
                <View style={MSliderShowcaseTwoStyles.button}>
                    <MIcon name="plus" color={ACTIVE_COLOR} />
                </View>
            </MSlider.Right>
        </MSlider>
    );
};

const MSliderShowcaseTwoStyles = StyleSheet.create({
    containerStyle: {
        borderRadius: 16,
        paddingVertical: 12,
        paddingHorizontal: 8,
        backgroundColor: '#FFF',
    },
    selectedStyle: {
        backgroundColor: ACTIVE_COLOR,
    },
    unselectedStyle: {
        backgroundColor: DEACTIVE_COLOR,
    },
    markerStyle: {
        width: 25,
        height: 25,
        elevation: 3,
        borderRadius: 13,
        backgroundColor: 'white',
    },
    trackStyle: {
        height: 12,
        borderRadius: 6,
    },
    button: {
        elevation: 5,
        aspectRatio: 1,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: '#FFF',
        justifyContent: 'center',
    },
});

export const MSliderShowcaseThree = () => {
    const [multiSliderValue, setMultiSliderValue] = React.useState([75, 85]);
    return (
        <MSlider
            values={multiSliderValue}
            markerContainerStyle={{ top: -17 }}
            onChange={(values) => setMultiSliderValue(values)}
            trackStyle={MSliderShowcaseThreeStyles.trackStyle}
            markerStyle={MSliderShowcaseThreeStyles.markerStyle}
            selectedStyle={MSliderShowcaseThreeStyles.selectedStyle}
            containerStyle={MSliderShowcaseThreeStyles.containerStyle}
            unselectedStyle={MSliderShowcaseThreeStyles.unselectedStyle}>
            <MSlider.Left>
                <View style={MSliderShowcaseThreeStyles.button}>
                    <MText>{multiSliderValue[0]}</MText>
                </View>
            </MSlider.Left>
            <MSlider.Right>
                <View style={MSliderShowcaseThreeStyles.button}>
                    <MText>{multiSliderValue[1]}</MText>
                </View>
            </MSlider.Right>
        </MSlider>
    );
};

const MSliderShowcaseThreeStyles = StyleSheet.create({
    containerStyle: {
        borderRadius: 16,
        paddingVertical: 12,
        paddingHorizontal: 8,
        backgroundColor: '#FFF',
    },
    selectedStyle: {
        backgroundColor: ACTIVE_COLOR,
    },
    unselectedStyle: {
        backgroundColor: DEACTIVE_COLOR,
    },
    markerStyle: {
        width: 25,
        height: 25,
        elevation: 3,
        borderRadius: 13,
        backgroundColor: 'white',
    },
    trackStyle: {
        height: 12,
        borderRadius: 6,
    },
    button: {
        padding: 12,
        elevation: 5,
        aspectRatio: 1,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: '#FFF',
        justifyContent: 'center',
    },
});

export const MSliderShowcaseFour = () => {
    const [multiSliderValue, setMultiSliderValue] = React.useState([65, 85]);
    return (
        <MSlider
            values={multiSliderValue}
            isMarkersSeparated={true}
            customMarkerRight={() => (
                <View style={MSliderShowcaseFourStyles.rightMarker} />
            )}
            markerContainerStyle={{ top: -17 }}
            trackStyle={MSliderShowcaseFourStyles.trackStyle}
            markerStyle={MSliderShowcaseFourStyles.markerStyle}
            selectedStyle={MSliderShowcaseFourStyles.selectedStyle}
            containerStyle={MSliderShowcaseFourStyles.containerStyle}
            unselectedStyle={MSliderShowcaseFourStyles.unselectedStyle}>
            <MSlider.Left>
                <View style={MSliderShowcaseFourStyles.button}>
                    <MIcon name="minus" color={ACTIVE_COLOR} />
                </View>
            </MSlider.Left>
            <MSlider.Right>
                <View style={MSliderShowcaseFourStyles.button}>
                    <MIcon name="plus" color={ACTIVE_COLOR} />
                </View>
            </MSlider.Right>
        </MSlider>
    );
};

const MSliderShowcaseFourStyles = StyleSheet.create({
    containerStyle: {
        borderRadius: 16,
        paddingVertical: 12,
        paddingHorizontal: 8,
        backgroundColor: '#FFF',
    },
    rightMarker: {
        width: 25,
        height: 25,
        elevation: 3,
        borderRadius: 13,
        backgroundColor: ACTIVE_COLOR,
    },
    selectedStyle: {
        backgroundColor: ACTIVE_COLOR,
    },
    unselectedStyle: {
        backgroundColor: DEACTIVE_COLOR,
    },
    markerStyle: {
        width: 25,
        height: 25,
        elevation: 3,
        borderRadius: 13,
        backgroundColor: 'white',
    },
    trackStyle: {
        height: 12,
        borderRadius: 6,
    },
    button: {
        elevation: 5,
        aspectRatio: 1,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: '#FFF',
        justifyContent: 'center',
    },
});

export const MSliderShowcaseFive = () => {
    const [sliderValue, setSliderValue] = React.useState([45]);
    return (
        <MSlider
            min={0}
            max={100}
            enableLabel={false}
            values={sliderValue}
            onChange={setSliderValue}
            markerContainerStyle={{ top: -17 }}
            trackStyle={MSliderShowcaseFiveStyles.trackStyle}
            markerStyle={MSliderShowcaseFiveStyles.markerStyle}
            selectedStyle={MSliderShowcaseFiveStyles.selectedStyle}
            containerStyle={MSliderShowcaseFiveStyles.containerStyle}
            unselectedStyle={MSliderShowcaseFiveStyles.unselectedStyle}>
            <MSlider.Right>
                <View style={MSliderShowcaseFiveStyles.button}>
                    <MText color={'#fff'}>{sliderValue[0]}%</MText>
                </View>
            </MSlider.Right>
        </MSlider>
    );
};

const MSliderShowcaseFiveStyles = StyleSheet.create({
    containerStyle: {
        borderRadius: 16,
        paddingVertical: 12,
        paddingHorizontal: 8,
        backgroundColor: '#FFF',
    },
    selectedStyle: {
        backgroundColor: ACTIVE_COLOR,
    },
    unselectedStyle: {
        backgroundColor: DEACTIVE_COLOR,
    },
    markerStyle: {
        width: 25,
        height: 25,
        elevation: 3,
        borderRadius: 13,
        backgroundColor: 'white',
    },
    trackStyle: {
        height: 12,
        borderRadius: 6,
    },
    button: {
        width: 50,
        height: 35,
        elevation: 5,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: '#000',
        justifyContent: 'center',
    },
});

export const MSliderShowcaseSix = () => {
    const [sliderValue, setSliderValue] = React.useState([40]);
    return (
        <MSlider
            min={0}
            max={100}
            showMinMax
            valueSuffix="%"
            enableLabel={false}
            values={sliderValue}
            onChange={setSliderValue}
            markerContainerStyle={{ top: -17 }}
            trackStyle={MSliderShowcaseSixStyles.trackStyle}
            markerStyle={MSliderShowcaseSixStyles.markerStyle}
            selectedStyle={MSliderShowcaseSixStyles.selectedStyle}
            containerStyle={MSliderShowcaseSixStyles.containerStyle}
            unselectedStyle={MSliderShowcaseSixStyles.unselectedStyle}
        />
    );
};

const MSliderShowcaseSixStyles = StyleSheet.create({
    containerStyle: {
        borderRadius: 16,
        paddingVertical: 12,
        paddingHorizontal: 8,
        backgroundColor: '#FFF',
    },
    selectedStyle: {
        backgroundColor: ACTIVE_COLOR,
    },
    unselectedStyle: {
        backgroundColor: DEACTIVE_COLOR,
    },
    markerStyle: {
        width: 25,
        height: 25,
        elevation: 3,
        borderWidth: 3,
        borderRadius: 13,
        backgroundColor: 'white',
        borderColor: ACTIVE_COLOR,
    },
    trackStyle: {
        height: 12,
        borderRadius: 6,
    },
    button: {
        width: 50,
        height: 35,
        elevation: 5,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: '#000',
        justifyContent: 'center',
    },
});

export const MSliderShowcaseSeven = () => {
    const [sliderValue, setSliderValue] = React.useState([2.5]);
    return (
        <MSlider
            min={0}
            max={5}
            step={0.5}
            enableLabel={false}
            values={sliderValue}
            onChange={setSliderValue}
            markerContainerStyle={{ top: -22 }}
            trackStyle={MSliderShowcaseSevenStyles.trackStyle}
            selectedStyle={MSliderShowcaseSevenStyles.selectedStyle}
            containerStyle={MSliderShowcaseSevenStyles.containerStyle}
            unselectedStyle={MSliderShowcaseSevenStyles.unselectedStyle}
            customMarker={() => (
                <View style={MSliderShowcaseSevenStyles.markerStyle}>
                    <Text>{sliderValue[0]}</Text>
                </View>
            )}
        />
    );
};

const MSliderShowcaseSevenStyles = StyleSheet.create({
    containerStyle: {
        borderRadius: 16,
        paddingVertical: 12,
        paddingHorizontal: 8,
        backgroundColor: '#FFF',
    },
    selectedStyle: {
        backgroundColor: ACTIVE_COLOR,
    },
    unselectedStyle: {
        backgroundColor: DEACTIVE_COLOR,
    },
    markerStyle: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderColor: ACTIVE_COLOR,
    },
    trackStyle: {
        height: 6,
        borderRadius: 6,
    },
    button: {
        width: 50,
        height: 35,
        elevation: 5,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: '#000',
        justifyContent: 'center',
    },
});
