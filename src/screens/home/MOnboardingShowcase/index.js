import React from 'react';
import { Dimensions } from 'react-native';
import { createScreen } from 'components/elements';
import {
    OBShowCaseOne,
    OBShowCaseTwo,
    OBShowCaseThree,
    OBShowCaseFour,
    OBShowCaseFive,
} from './onboarding.showcase';

const MOnboardingShowcase = createScreen(
    ({ navigation }) => {
        return <OBShowCaseFive />;
    },
    {
        scrollView: false,
        paddingTop: false,
        paddingBottom: false,
    },
);

export default MOnboardingShowcase;
