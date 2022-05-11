import { MText } from 'components/common';
import {
    COLORS,
    METRIC_SIZES,
} from 'constants/common';
import useTheme from 'hooks/useTheme';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { scale, verticalScale } from 'utils';
import ReviewRate from 'components/elements/ReviewRate';

const RateCheckout = ({ items }) => {
    const { IMAGES, COMMON } = useTheme();
    const [average, setAverage] = useState(0);
    const [finalList, setFinalList] = useState([
        { count: 1, percent: 0 },
        { count: 2, percent: 0 },
        { count: 3, percent: 0 },
        { count: 4, percent: 0 },
        { count: 5, percent: 0 }
    ]);
    useEffect(() => {
        console.log("ratessss"+ JSON.stringify(items))
        if (items) {
            var tempList = [...finalList]
            let count1 = 0;
            let count2 = 0;
            let count3 = 0;
            let count4 = 0;
            let count5 = 0;
            let ave = 0;
            for (let i = 0; i < items.length; i++) {
                console.log("items i rate"+items[i].rate+" **"+items.length)
                ave += items[i].rate;
                switch (items[i].rate) {
                    case 1:
                        count1 += 1;
                        break;
                    case 2:
                        count2 += 1;
                        break;
                    case 3:
                        count3 += 1;
                        break;
                    case 4:
                        count4 += 1;
                        break;
                    case 5:
                        count5 += 1;
                        break;
                    default:
                        break;
                }
            }
            if (items.length > 0) {
                tempList[0].percent = Math.round((count1 / items.length)*100);
                tempList[1].percent =Math.round((count2 / items.length)*100);
                tempList[2].percent = Math.round((count3 / items.length)*100);
                tempList[3].percent = Math.round((count4 / items.length)*100);
                tempList[4].percent = Math.round((count5 / items.length)*100);
                ave = ave / items.length;
            }
            console.log("finalList"+ JSON.stringify(tempList))
            setFinalList(tempList);
            setAverage((ave).toFixed(2));
        }
    }, [items])
    return (
        <View style={[COMMON.RowItemStart, { marginVertical: METRIC_SIZES.small }]}>
            <View style={{ flex: 1, alignSelf: 'flex-start' }}>
                <MText textStyle={{ fontSize: 28 }}>{average?? '0'} </MText>
                <MText textStyle={COMMON.GrayNormalText}>Out of 5</MText>
            </View>
            {/* //[{ count: 5, percent: 50 }, { count: 4, percent: 60 },
            //        { count: 3, percent: 80 }, { count: 2, percent: 20 }, { count: 1, percent: 30 }] */}
            <View style={{ flex: 1 }}>
                <FlatList
                    data={finalList}
                    renderItem={({ item }) => (
                        <ReviewRate item={item} />
                    )}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    SectionCenter: {
        paddingBottom: verticalScale(16),
        paddingTop: verticalScale(16),
        paddingRight: scale(16),
        paddingLeft: scale(16),
        borderWidth: 1,
        borderColor: COLORS.Color707,
        backgroundColor: COLORS.Color304,
        alignSelf: 'center',
        width: '100%',
        borderRadius: METRIC_SIZES.small,
    },
    row: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: METRIC_SIZES.tiny,
        borderTopWidth: 2,
        borderTopColor: COLORS.disabled,
        marginTop: METRIC_SIZES.tiny,
    },
    separator: {
        height: 2,
        width: '100%',
    },
});
export default RateCheckout;
