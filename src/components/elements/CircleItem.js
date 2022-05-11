import { MText, MIcon } from "components/common";
import { METRIC_SIZES } from 'constants/common';
import React from "react";
import useTheme from 'hooks/useTheme';
import { View } from "react-native";
const CircleItem = ({text, style}) => {
    const { COMMON } = useTheme();
    return (
        <View style={[COMMON.RowItemStart,{paddingVertical: METRIC_SIZES.tiny},style]}>
            <MIcon name={'circle'} size={10}/>
            <MText textStyle={COMMON.NormalText} containerStyle={{marginStart: METRIC_SIZES.tiny}}>{text}</MText>
        </View>
    )
}
export default CircleItem;