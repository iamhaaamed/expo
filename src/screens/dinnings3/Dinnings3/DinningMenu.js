
import React, { useEffect } from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView, Alert } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS, METRIC_SIZES } from 'constants/common';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { MText, MTouchable, MButton, MImage, MFlatList, MLoading, MIcon, Container } from 'components/common';
import DinningTab from './DinningTab';
import { MaterialIcons } from 'react-native-vector-icons/MaterialIcons';
import useDinningOrders from 'store/setDinningOrders';
import { GetData } from 'utils';
import { bookDinning } from 'hooks/Home';
import { showMessage } from 'react-native-flash-message';
const Tab = createMaterialTopTabNavigator();
const DinningMenu = createScreen(
    ({ route, navigation }) => {
        const { COMMON } = useTheme();
        const [listItems, setListItems] = useState([
            { title: 'Breakfast', items: [{ title: 'breakfastttt1', price: 5, type: 'BREAKFAST' }, { title: 'breakfast2', price: 7, type: 'BREAKFAST' }] },
            { title: 'Lunch', items: [{ title: 'Lunch1', price: 6, type: 'LUNCH' }, { title: 'Lunch2', price: 8, type: 'LUNCH' }] },
            { title: 'Dinner', items: [{ title: 'Dinner', price: 17, type: 'DINNER' }, { title: 'Dinner1', price: 17, type: 'DINNER' }] },
            { title: 'Drinks', items: [{ title: 'Drinks1', price: 8, type: 'DRINKS' }, { title: 'Drinks', price: 17, type: 'DRINKS' }] },
        ])
        const { mutate, isLoading } = bookDinning();
        const resetState = useDinningOrders((state) => state.resetState);
        const breakfastOrders = useDinningOrders((state) => state.breakfastOrders);
        const dinnerOrders = useDinningOrders((state) => state.dinnerOrders);
        const lunchOrders = useDinningOrders((state) => state.lunchOrders);
        const drinksOrder = useDinningOrders((state) => state.drinksOrder);
        const orderDetails = useDinningOrders((state) => state.orderDetails);
        const priceAll = useDinningOrders((state) => state.price);
        useEffect(() => { resetState() }, [])
        const onPaymentClick = async () => {
            console.log("breakfastOrders" + JSON.stringify(lunchOrders))
            const userInfo = await GetData('USER_INFO');
            let finalOrders = Array();
            if (breakfastOrders.length > 0) finalOrders.push(...breakfastOrders);
            if (lunchOrders.length > 0) finalOrders.push(...lunchOrders);
            if (dinnerOrders.length > 0) finalOrders.push(...dinnerOrders);
            if (drinksOrder.length > 0) finalOrders.push(...drinksOrder);
            if (finalOrders.length > 0) {
                let array = Array();
                let totalPrice = 0;
                for (let i = 0; i < finalOrders.length; i++) {
                    totalPrice += (finalOrders[i].price * finalOrders[i].number)
                    array.push({ diningType: finalOrders[i].type, number: finalOrders[i].number })
                }
                let diningInput = {
                    price: priceAll,
                    diningItems: array,
                    inRoomDining: orderDetails.inRoomDining,
                    restaurantId: orderDetails.restaurantId,
                    paymentStatus: orderDetails.paymentStatus,
                    processingStatuse: orderDetails.processingStatuse,
                    createAt: new Date(),
                    deliverToRoom: orderDetails.time,
                    userId: userInfo?.id
                }
                console.log("final diningInput" + JSON.stringify(diningInput))
                if (orderDetails.inRoomDining)
                    bookOrder(diningInput);
            }
            else {
                showMessage({ message: "Please add at least one item", type: "warning" });
            }
        };
        const bookOrder = (diningInput) => {
            mutate({diningInput:diningInput}, {
                onSuccess: (data) => {
                    console.log("dinnig reservation response" + JSON.stringify(data))
                    if (data?.booking_reservingDining?.status === 'SUCCESS') {
                        navigation.navigate('Paymentmethod',
                            {
                                dinningReservingResponse: data?.booking_reservingDining?.result
                            });
                    }
                    else Alert.alert(data?.booking_reservingDining?.status);
                    // navigation.navigate('Paymentmethod',
                    // {
                    //     dinningReservingResponse:data?.booking_reservingDining?.result
                    // });
                }
            })
        }
        return (
            <Container
                style={[styles.DinningMenu]}
                loadingOnPage={isLoading}
            >
                <View style={[COMMON.MainView]}>
                    <MText style={COMMON.Title}>In Room Dinning</MText>
                    <MText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </MText>

                </View>
                <Tab.Navigator
                    sceneContainerStyle={{ backgroundColor: "red" }}
                    screenOptions={{
                        tabBarActiveTintColor: COLORS.Color332,
                        tabBarLabelStyle: { textTransform: "none" },
                        tabBarIndicatorStyle: { backgroundColor: COLORS.Color988 }
                    }}
                >
                    {listItems?.map((item, index) => {
                        if (item && item?.title)
                            return (
                                <Tab.Screen name={item.title} component={DinningTab}
                                    initialParams={{ items: item.items, type: item.title }}
                                />
                            );
                    })}
                </Tab.Navigator>
                <TouchableOpacity onPress={() => onPaymentClick()}>
                    <View style={[COMMON.RowItemStart, { backgroundColor: COLORS.Color980, padding: METRIC_SIZES.tiny }]}>
                        <MText textStyle={[COMMON.NormalText, { textAlign: 'center', color: COLORS.Color304 }]}>{priceAll + ' USD'}</MText>
                        <MText containerStyle={{ flex: 1, alignSelf: 'center' }} textStyle={[COMMON.NormalText, { textAlign: 'center', color: COLORS.Color304 }]}>Go To Payment</MText>
                        <MIcon name={'arrow-right-alt'}
                            IconComponent={MaterialIcons}
                            color={COLORS.Color304}
                            size={30}
                        />
                    </View>
                </TouchableOpacity>
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
    DinningMenu: {
        backgroundColor: COLORS.Color304,
        flex: 1,

    }
});
export default DinningMenu;

