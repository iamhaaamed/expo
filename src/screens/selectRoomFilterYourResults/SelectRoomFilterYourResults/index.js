import React from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';

import { MText, MButton, MCheckBox } from 'components/common';
import { SectionTop } from 'components/Sections';
const SelectRoomFilterYourResults = createScreen(
    ({ navigation }) => {
        const { COMMON } = useTheme();

        const clickCounter = useRef(0);
        const onPress = () => {
            console.log(`Clicked! ${clickCounter.current}`);
            clickCounter.current = clickCounter.current + 1;
        };

        const [isChecked1, setIsChecked1] = useState(false);
        const [isChecked2, setIsChecked2] = useState(false);
        const [isChecked3, setIsChecked3] = useState(false);
        const [isChecked4, setIsChecked4] = useState(false);
        const [isChecked5, setIsChecked5] = useState(false);
        const [isChecked6, setIsChecked6] = useState(false);
        const [isChecked7, setIsChecked7] = useState(false);

        return (
            <View style={styles.SelectRoomFilterYourResults}>
                <ScrollView>
                    <View style={[COMMON.MainView,{shrink:1}]}>
                        <MCheckBox
                            isChecked={isChecked1}
                            setIsChecked={() => setIsChecked1((p) => !p)}
                            style={COMMON.CheckBox511}
                            labelContainer={{flexShrink: 1}}
                            labelStyle={COMMON.CheckBoxText}
                            crossCheckBox={true}>
                                Pool View
                        </MCheckBox>
                        <View
                            style={
                                COMMON.LineSelectRoomFilterYourResults513
                            }></View>
                        <MCheckBox
                            isChecked={isChecked2}
                            setIsChecked={() => setIsChecked2((p) => !p)}
                            style={COMMON.CheckBox514}
                            labelContainer={{flexShrink: 1}}
                            labelStyle={COMMON.CheckBoxText}
                            crossCheckBox={true}>
                                Hearing-Accessible
                        </MCheckBox>
                        <View
                            style={
                                COMMON.LineSelectRoomFilterYourResults516
                            }></View>
                        <MCheckBox
                            isChecked={isChecked3}
                            setIsChecked={() => setIsChecked3((p) => !p)}
                            style={COMMON.CheckBox517}
                            labelContainer={{flexShrink: 1}}
                            labelStyle={COMMON.CheckBoxText}
                            crossCheckBox={true}>
                                Mobility Accessible Room With Bathtub
                        </MCheckBox>
                        <View
                            style={
                                COMMON.LineSelectRoomFilterYourResults519
                            }></View>
                        <MCheckBox
                            isChecked={isChecked4}
                            setIsChecked={() => setIsChecked4((p) => !p)}
                            style={COMMON.CheckBox520}
                            labelContainer={{flexShrink: 1}}
                            labelStyle={COMMON.CheckBoxText}
                            crossCheckBox={true}>
                                Mobility Accessible Room With Roll- In Shower 
                        </MCheckBox>
                        <View
                            style={
                                COMMON.LineSelectRoomFilterYourResults522
                            }></View>
                        <MCheckBox
                            isChecked={isChecked5}
                            setIsChecked={() => setIsChecked5((p) => !p)}
                            style={COMMON.CheckBox523}
                            labelContainer={{flexShrink: 1}}
                            labelStyle={COMMON.CheckBoxText}
                            crossCheckBox={true}>
                            Balcony
                        </MCheckBox>
                        <View
                            style={
                                COMMON.LineSelectRoomFilterYourResults525
                            }></View>
                        <MCheckBox
                            isChecked={isChecked6}
                            setIsChecked={() => setIsChecked6((p) => !p)}
                            style={COMMON.CheckBox526}
                            labelContainer={{flexShrink: 1}}
                            labelStyle={COMMON.CheckBoxText}
                            crossCheckBox={true}>
                                Patio
                        </MCheckBox>
                        <View
                            style={
                                COMMON.LineSelectRoomFilterYourResults528
                            }></View>
                        <MCheckBox
                            isChecked={isChecked7}
                            setIsChecked={() => setIsChecked7((p) => !p)}
                            style={COMMON.CheckBox529}
                            labelContainer={{flexShrink: 1}}
                            labelStyle={COMMON.CheckBoxText}
                            crossCheckBox={true}>
                                Higher Floor - 9th And Above
                        </MCheckBox>
                    </View>
                </ScrollView>
                <View style={COMMON.MainView}>
                    <MButton
                        onPress={() => navigation.goBack()}
                        style={COMMON.ButtonRectColor988}
                        containerStyle={[
                            COMMON.ButtonRectColor988,
                            COMMON.MainView,
                        ]}
                        text="Show Results"
                        textStyle={COMMON.TextsButton}
                        color={COLORS.Color988}
                    />
                </View>
            </View>
        );
    },
    {
        scrollView: false,
        paddingBottom: false,
        paddingTop: false,
    },
);
const styles = StyleSheet.create({
    SelectRoomFilterYourResults: {
        backgroundColor: COLORS.Color304,
        height: '100%',
    },
});
export default SelectRoomFilterYourResults;
