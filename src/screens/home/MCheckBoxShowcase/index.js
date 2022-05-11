import React from 'react';
import { View } from 'react-native';
import useTheme from 'hooks/useTheme';
import { createScreen } from 'components/elements';

import {
    CBShowCaseOne,
    CBShowCaseTwo,
    CBShowCaseThree,
} from './checkbox.showcase';

const MCheckBoxShowcase = createScreen(
    (props) => {
        const { LAYOUT, GUTTERS, IMAGES } = useTheme();

        return (
            <View style={[LAYOUT.fill, GUTTERS.regularHPadding]}>
                <CBShowCaseThree />
            </View>
        );
    },
    {
        scrollView: true,
        paddingBottom: false,
        paddingTop: false,
    },
);

export default MCheckBoxShowcase;
