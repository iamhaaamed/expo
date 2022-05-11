import { MText, MButton, MIcon } from "components/common";
import { METRIC_SIZES, COLORS } from 'constants/common';
import React,{useEffect} from "react";
import useTheme from 'hooks/useTheme';
import { View, StyleSheet, FlatList } from "react-native";
import { scale, verticalScale } from 'utils';
const ReviewRate = ({ item }) => {
    const { COMMON } = useTheme();
    useEffect(() => {
        console.log("item"+ JSON.stringify(item));
    },[item]);
    const getFillWidth=(isFill=true)=>{
        if(isFill) return (item.percent)+'%';
        else return (100-item.percent)+'%';
    }
    const getUnFillWidth=()=>{

    }
    return (
        <View style={[COMMON.RowItemEnd,styles.SectionCenter]}>
            {/* <View style={[COMMON.RowItemStart]}> */}
                {[...Array(item?.count)].map((item,index)=><MIcon name={'star'} size={scale(14)} color={COLORS.Color988} />)}
            {/* </View> */}
            <View style={[COMMON.RowItemStart,{width:'50%'}]}>
                <View style={{ width:getFillWidth(), height: 4, backgroundColor: COLORS.Color780, borderTopWidth: 1, borderBottomWidth: 1, borderColor: COLORS.Color780 }} />
                <View style={{ width:getFillWidth(false), height: 3.4, backgroundColor: COLORS.Color707 }} />
            </View>
        </View>
    )
}
export default ReviewRate;

const styles = StyleSheet.create({

    SectionCenter: {
        paddingHorizontal: verticalScale(16),
    },
})