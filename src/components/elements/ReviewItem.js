import { MText, MButton, MIcon } from "components/common";
import { METRIC_SIZES, COLORS } from 'constants/common';
import React from "react";
import useTheme from 'hooks/useTheme';
import { View, StyleSheet } from "react-native";
import { scale, verticalScale, dayMonthFullYear, convertTimeToAmPm } from 'utils';
import { Rating, AirbnbRating } from 'react-native-ratings';
const ReviewItem = ({ item }) => {
    const { COMMON } = useTheme();
    return (
        <View style={styles.SectionCenter}>
            <View style={{ flexDirection: 'row' }}>
                <MText textStyle={[COMMON.Title, { marginBottom: 0, flex: 1 }]}>{item?.comments?.user?.fullName}</MText>
                {/* <View style={{width:''}}/> */}
                <View style={{ flex: 1 }} />
                <View style={[{ flexDirection: 'row' }]}>
                    <View style={{ flex: 1 }} />
                    <MIcon color={COLORS.Color988} size={28} name={'bed-outline'} />
                    <MText textStyle={COMMON.GrayNormalTextNoBottom}> {'Room ' + item?.comments?.room?.roomNumber}</MText>
                </View>
                <View style={{ flex: 1 }} />
            </View>
            <View style={COMMON.RowItemStart}>
                {item?.rates?.rate ? 
                    <AirbnbRating
                        defaultRating={item?.rates?.rate ?? 0}
                        ratingCount={3}
                        size={14}
                        showRating={false}
                        reviews={['', '', '', '', '', '']}
                        selectedColor={COLORS.Color988}
                        unSelectedColor={COLORS.Color780}
                        isDisabled={true}
                    />:null
                }
                <View style={{ flex: 1 }} />
                <View style={[{ flexDirection: 'row' }]}>
                    <MText textStyle={COMMON.GrayNormalTextNoBottom}>{convertTimeToAmPm(item?.comments?.createAt.split('T')[1])}</MText>
                    <MText textStyle={COMMON.GrayNormalTextNoBottom}> {dayMonthFullYear(item?.comments?.createAt.split('T')[0])}</MText>
                </View> 
                <View style={{ flex: 1 }} />
            </View>
            <MText>{item?.comments?.body}</MText>
        </View>
    )
}
export default ReviewItem;

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
        marginVertical: METRIC_SIZES.small
    },
})