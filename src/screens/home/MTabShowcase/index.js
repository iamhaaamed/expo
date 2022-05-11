import React from 'react';
import { MImage, MText } from 'components/common';
import { View } from 'react-native';
import { createScreen } from 'components/elements';
import { TabView } from 'react-native-elements';
import MTab from 'components/common/MTab';
import useTheme from 'hooks/useTheme';
import {
    TShowCaseFive,
    TShowCaseFour,
    TShowCaseOne,
    TShowCaseThree,
    TShowCaseTwo,
} from './tab.showcase';

const MTabShowcase = createScreen(
    () => {
        return (
            <>
                <TShowCaseOne />
                <TShowCaseTwo />
                <TShowCaseThree />
                <TShowCaseFour />
                <TShowCaseFive />
            </>
        );
    },
    {
        scrollView: true,
        paddingBottom: false,
        paddingTop: false,
    },
);

export default MTabShowcase;
