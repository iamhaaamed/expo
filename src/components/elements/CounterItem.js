import { MText, MButton } from "components/common";
import { METRIC_SIZES, COLORS } from 'constants/common';
import React, { useState, useEffect} from "react";
import useTheme from 'hooks/useTheme';
import { View } from "react-native";
const CounterItem = ({ text, subtext, getCounter }) => {
    const { COMMON } = useTheme();
    const [counter, SetCounter] = useState(0);
    useEffect(() => {
        if(getCounter){
            getCounter(counter);
        }
    },[counter])
    return (
        <View style={[COMMON.RowItemStart, { paddingVertical: METRIC_SIZES.tiny }]}>
            <View>
                <MText textStyle={COMMON.NormalText} >{text}</MText>
                {subtext && <MText textStyle={COMMON.GrayNormalText} >{subtext}</MText>}
            </View>
            <View style={{ flex: 1 }} />
            <MButton
                onPress={() => SetCounter((p) => p + 1)}
                text="+"
                transparent
                textStyle={[COMMON.NormalText, { color: COLORS.Color332 }]}
            />
            <MText textStyle={COMMON.NormalText}>{counter}</MText>
            <MButton
                onPress={() => SetCounter((p) => p < 1 ? 0 : p - 1)}
                text="-"
                transparent
                textStyle={[COMMON.NormalText, { color: COLORS.Color332 }]}
            />
        </View>
    )
}
export default CounterItem;