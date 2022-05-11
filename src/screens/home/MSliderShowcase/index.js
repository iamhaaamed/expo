import React from 'react';
import { createScreen } from 'components/elements';
import {
    MSliderShowcaseOne,
    MSliderShowcaseTwo,
    MSliderShowcaseThree,
    MSliderShowcaseFour,
    MSliderShowcaseFive,
    MSliderShowcaseSix,
    MSliderShowcaseSeven,
} from './slider.showcase';
import { View } from 'react-native';
const MSliderShowcase = createScreen(
    ({ navigation }) => {
        return (
            <View
                style={{
                    paddingVertical: 32,
                    paddingHorizontal: 12,
                    backgroundColor: '#FFF',
                }}>
                <MSliderShowcaseOne />
                <View style={{ marginVertical: 20 }} />
                <MSliderShowcaseTwo />
                <View style={{ marginVertical: 20 }} />
                <MSliderShowcaseThree />
                <View style={{ marginVertical: 20 }} />
                <MSliderShowcaseFour />
                <View style={{ marginVertical: 20 }} />
                <MSliderShowcaseFive />
                <View style={{ marginVertical: 20 }} />
                <MSliderShowcaseSix />
                <View style={{ marginVertical: 20 }} />
                <MSliderShowcaseSeven />
            </View>
        );
    },
    {
        scrollView: true,
    },
);

export default MSliderShowcase;
