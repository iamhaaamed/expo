
import React, { useEffect } from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView, FlatList } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS, METRIC_SIZES } from 'constants/common';
import { MText, MButton, Container } from 'components/common';
import { SectionCenter } from 'components/Sections';
import DinningOrderItem from 'components/Sections/DinningOrderItem';
import { useDinningOrdersList } from 'hooks/Home';
const Orders = createScreen(
    () => {
        const { LAYOUT, GUTTERS, TYPOGRAPHY, IMAGES, COMMON, CONSTANTS } = useTheme();
        const [orderItems, SetOrderItems] = useState();
        const [userInfo, setUserInfo] = useState(null);
        const { data, isLoading, hasNextPage } = useDinningOrdersList({ userId: userInfo?.id })
        const clickCounter = useRef(0);
        useEffect(() => {
            (async () => {
                let user = await GetData('USER_INFO');
                setUserInfo(user);
            })()
        }, [])
        const onPress = () => {
            console.log(`Clicked! ${clickCounter.current}`);
            clickCounter.current = clickCounter.current + 1;
        };

        return (
            <Container
                style={[styles.Orders, COMMON.MainView]}
                loadingOnPage={isLoading}
            >
                <FlatList
                    data={data?.pages}
                    onEndReached={hasNextPage}
                    renderItem={({ item, index }) => (
                        <DinningOrderItem item={item} />
                    )}
                />
            </Container>


        );
    },
    {
        scrollView: false,
        paddingBottom: false,
        paddingTop: false,
    },
);
const styles = StyleSheet.create({
    Orders: {
        backgroundColor: COLORS.Color304,
        flex: 1

    },
    calender: {
        backgroundColor: COLORS.borderColor
    }
});
export default Orders;

