import { MButton, MIcon, MText } from 'components/common';
import { COLORS, METRIC_SIZES } from 'constants/common';
import useTheme from 'hooks/useTheme';
import React, { useRef } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { scale, verticalScale } from 'utils';
import { DialNumber } from 'utils/DialNumber';

const DinningOrderItem = ({ item, isCurrent = false, navigation }) => {
    const {
        LAYOUT,
        GUTTERS,
        TYPOGRAPHY,
        IMAGES,
        COMMON,
        CONSTANTS,
    } = useTheme();
    const clickCounter = useRef(0);
    const onPress = () => {
        console.log(`Clicked! ${clickCounter.current}`);
        clickCounter.current = clickCounter.current + 1;
    };

    return (
        <View style={[styles.SectionCenter]}>
            <View style={COMMON.RowItemStart}>
                <View style={{ flex: 1 }}>
                    <MText style={{ flex: 1, marginBottom: METRIC_SIZES.small }} textStyle={COMMON.TitleText}>{item?.inRoomDining ? "In Room Dinning" : "In Room Dinning"}</MText>
                    <MText>{'$ ' + item?.price}</MText>
                </View>
                <View style={{ flex: 1 }}>
                    <MText>{item?.createdAt}</MText>
                    <FlatList
                        data={item?.diningItems}
                        renderItem={({ item }) => (
                            <View style={COMMON.RowItemStart}>
                                <MText containerStyle={{ flex: 1 }}>{item?.diningType}</MText>
                                <MText
                                    textStyle={{ color: COLORS.Color304, textAlign: 'center', fontSize: 18 }}
                                    containerStyle={{ width: 30, height: 30, borderRadius: 15, backgroundColor: COLORS.Color780, alignItems: 'center', justifyContent: 'flex-end' }}
                                >{item?.number}</MText>
                            </View>
                        )}
                    />
                </View>
            </View>
            <View style={[COMMON.RowItemStart, { marginTop: METRIC_SIZES.large }]}>
                <MButton text='View Invoice' textStyle={{ color: COLORS.Color332 }} containerStyle={{ flex: 1 }} style={{ borderColor: COLORS.Color988, borderWidth: 2, borderRadius: METRIC_SIZES.small }} transparent={true} />
                <MButton text='Order Again' containerStyle={[{ flex: 1 }, COMMON.ButtonRectColor988]} style={COMMON.ButtonRectColor988} />
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
        margin: METRIC_SIZES.small
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
export default DinningOrderItem;
