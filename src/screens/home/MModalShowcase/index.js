import React from 'react';
import { View } from 'react-native';
import { createScreen } from 'components/elements';
import {
    MShowCaseOne,
    MShowCaseTwo,
    MShowCaseThree,
    MShowCaseFour,
    MShowCaseFive,
    MShowCaseSix,
    MShowCaseSeven,
    MShowCaseEight,
    MShowCaseNine,
    MShowCaseTen,
} from './modal.showcase';

const MModalShowcase = createScreen(
    () => {
        return (
            <View style={{ padding: 24 }}>
                <MShowCaseOne />
                <MShowCaseTwo />
                <MShowCaseThree />
                <MShowCaseFour />
                <MShowCaseFive />
                <MShowCaseSix />
                <MShowCaseSeven />
                <MShowCaseEight />
                <MShowCaseNine />
                <MShowCaseTen />
            </View>
        );
    },
    {
        scrollView: false,
        paddingBottom: false,
        paddingTop: false,
    },
);

export default MModalShowcase;
