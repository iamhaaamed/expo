import { MButton, MIcon, MCheckBox, MText } from 'components/common';
import useTheme from 'hooks/useTheme';
import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { WithLocalSvg } from "react-native-svg";
import { COLORS, METRIC_SIZES, DEVICE_WIDTH } from 'constants/common'
import { scale } from 'utils';
import { MaterialIcons } from 'react-native-vector-icons/MaterialIcons';
const PaymentInfoItem = ({ item }) => {
    const { LAYOUT, COMMON } = useTheme();
    const [isChecked, setIsChecked] = useState(item?.isChecked)
    return (
        <View
            style={[
                COMMON.RowItemStart, styles.container
            ]}>
            <View style={[styles.iconContainer]}>
                <MIcon name="card-account-details-star-outline" color={COLORS.Color988} size={scale(30)} />
            </View>
            <View
                style={[COMMON.RowItemStart, { borderColor: isChecked ? COLORS.Color988 : COLORS.Color707 },styles.borderView
                ]}>
                <View style={styles.cardInfoContainer}>
                    <MText style={COMMON.Title}>{(item?.cardType ? cardType : 'Visa Card') + '  ' + item.cardNo.substring(0, 4) + '****'}</MText>
                    <MText style={COMMON.Title}>{item?.name}</MText>
                </View>
                <MCheckBox isChecked={isChecked} setIsChecked={() => setIsChecked((p) => !p)}></MCheckBox>
                <MIcon name="delete" color={COLORS.Color780} size={scale(20)} style={{ alignSelf: 'flex-start' }} />
            </View>
        </View>
    );
};

export default React.memo(PaymentInfoItem);

const styles = StyleSheet.create({
    container: {
        marginBottom: METRIC_SIZES.small,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
    },
    borderView:{
        borderTopWidth:2,flex:1,alignSelf: 'center'
        ,borderBottomWidth:2,
        borderRightWidth:2,
    },
    iconContainer: {
        padding: METRIC_SIZES.large,
        backgroundColor: COLORS.Color850,
        height: undefined,
    },
    cardInfoContainer: {
        padding: METRIC_SIZES.small,
        flex: 1,
    },
    textStyle: {
        fontSize: scale(14),
        color: COLORS.Color292
    }
})