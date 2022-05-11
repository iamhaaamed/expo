import React, { useState } from 'react';
import { createScreen } from 'components/elements';
import { ScrollView, StyleSheet, View } from 'react-native';
import {
    DDShowCaseEight,
    DDShowCaseEleven,
    DDShowCaseFive,
    DDShowCaseFour,
    DDShowCaseFourteen,
    DDShowCaseNine,
    DDShowCaseOne,
    DDShowCaseSeven,
    DDShowCaseSix,
    DDShowCaseTen,
    DDShowCaseThirteen,
    DDShowCaseThree,
    DDShowCaseTwelve,
    DDShowCaseTwo,
} from './dropdown.showcase';
import useTheme from 'hooks/useTheme';

const MDropDownShowcase = createScreen(
    () => {
        const { CONSTANTS } = useTheme();
        const [selectedItem, setSelectedItem] = useState(null);
        return (
            <View style={styles.container}>
                <DDShowCaseOne
                    data={CONSTANTS.dropDown}
                    setSelectedItem={setSelectedItem}
                />
                <DDShowCaseTwo
                    data={CONSTANTS.dropDown}
                    setSelectedItem={setSelectedItem}
                />
                <DDShowCaseThree
                    data={CONSTANTS.dropDown}
                    setSelectedItem={setSelectedItem}
                />
                <DDShowCaseFour
                    data={CONSTANTS.dropDown}
                    setSelectedItem={setSelectedItem}
                />
                <DDShowCaseFive
                    data={CONSTANTS.dropDown}
                    setSelectedItem={setSelectedItem}
                />
                <DDShowCaseSix
                    data={CONSTANTS.dropDown}
                    setSelectedItem={setSelectedItem}
                />
                <DDShowCaseSeven
                    data={CONSTANTS.dropDown}
                    setSelectedItem={setSelectedItem}
                />
                <DDShowCaseEight
                    data={CONSTANTS.dropDown}
                    setSelectedItem={setSelectedItem}
                />
                <DDShowCaseNine
                    data={CONSTANTS.dropDown}
                    setSelectedItem={setSelectedItem}
                />
                <DDShowCaseTen
                    data={CONSTANTS.dropDown}
                    setSelectedItem={setSelectedItem}
                />
                <DDShowCaseEleven
                    data={CONSTANTS.dropDown}
                    setSelectedItem={setSelectedItem}
                />
                <DDShowCaseTwelve
                    data={CONSTANTS.dropDown}
                    setSelectedItem={setSelectedItem}
                />
                <DDShowCaseThirteen
                    data={CONSTANTS.dropDown}
                    setSelectedItem={setSelectedItem}
                />
                <DDShowCaseFourteen
                    data={CONSTANTS.dropDown}
                    setSelectedItem={setSelectedItem}
                />
            </View>
        );
    },
    {
        scrollView: true,
        paddingBottom: false,
        paddingTop: false,
    },
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 22,
        backgroundColor: 'white',
    },
});

export default MDropDownShowcase;
