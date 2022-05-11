import { MFlatList, MIcon, MText, Container } from 'components/common';
import ConfigItem from 'components/elements/ConfigItem';
import ReviewItem from 'components/elements/ReviewItem';
import {
    COLORS,
    METRIC_SIZES,
    DEVICE_WIDTH,
    DEVICE_HEIGHT,
} from 'constants/common';
import { useHotelCommentsRate } from 'hooks/Home';
import useTheme from 'hooks/useTheme';
import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { scale, verticalScale } from 'utils';

const CheckoutCommentList = ({ roomId, style, setLoading }) => {
    const { IMAGES, COMMON } = useTheme();
    const { data, isLoading } = useHotelCommentsRate({ roomId: roomId });
    useEffect(() => {
        setLoading(isLoading);
    },[isLoading])
    return (
        <Container style={style}>
            <FlatList
                data={data?.hotel_getCommentsWithRates?.result}
                renderItem={({ item }) => (
                    <ReviewItem item={item} />
                )}
            />
        </Container>
    );
};
export default CheckoutCommentList;
const styles = StyleSheet.create({
    itemContainer: {
        width: DEVICE_WIDTH * 0.3,
        backgroundColor: COLORS.Color304,
        borderRadius: METRIC_SIZES.small,
        borderWidth: 2,
        borderColor: COLORS.borderColor,
        marginVertical: METRIC_SIZES.small,
        padding: METRIC_SIZES.tiny,
    },
});
