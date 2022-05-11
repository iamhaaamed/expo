import { MText, MButton, MInput } from "components/common";
import { METRIC_SIZES, COLORS } from 'constants/common';
import React from "react";
import useTheme from 'hooks/useTheme';
import { View } from "react-native";
const SearchMic = ({text}) => {
    const { COMMON } = useTheme();
    return (
        <View style={[COMMON.RowItemStart,{paddingVertical: METRIC_SIZES.tiny}]}>
            <MInput
                iconRight={{name:'microphone',size:32,color:'black'}}
            />
        </View>
    )
}
export default SearchMic;