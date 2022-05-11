
import React from 'react';
import { useRef, useState, useEffect } from 'react';
import useTheme from 'hooks/useTheme';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { MText, MTouchable, MButton, MImage, MFlatList, MLoading } from 'components/common';
import CounterItem from 'components/elements/CounterItem';
import { FlatList } from 'react-native-gesture-handler';
import useDinningOrders from 'store/setDinningOrders';
const Tab = createMaterialTopTabNavigator();
const DinningTab = createScreen(
    ({ route }) => {
        const {  COMMON } = useTheme();
        const [listItems, setListItems] = useState(route?.params?.items);
        const [menuType, setMenuType] = useState(route?.params?.type);
        const [orderMenu, setOrderMenu] = useState([]);
        const setBreakfastOrders = useDinningOrders((state) => state.setBreakfastOrders);
        const setDinnerOrders = useDinningOrders((state) => state.setDinnerOrders);
        const setLunchOrders = useDinningOrders((state) => state.setLunchOrders);
        const setDrinksOrder = useDinningOrders((state) => state.setDrinksOrder);
        const setPrice= useDinningOrders((state) => state.setPrice);
        const totalPrice=useDinningOrders((state) => state.price);
        const onItemCounterChanged = (index, counterValue) => {
            var tempOrderMenu = [...orderMenu];
            var resultIndex = orderMenu.findIndex(item => item.title === listItems[index].title);
            let prePrice=totalPrice;
            if (resultIndex > -1) {
                if (counterValue > 0){
                    prePrice-=(tempOrderMenu[resultIndex].number *tempOrderMenu[resultIndex].price);
                    tempOrderMenu[resultIndex].number = counterValue;
                    setPrice(prePrice+(counterValue * tempOrderMenu[resultIndex].price))
                }
                else{
                    prePrice-=(tempOrderMenu[resultIndex].number *tempOrderMenu[resultIndex].price);
                    setPrice(prePrice);
                    tempOrderMenu.splice(resultIndex, 1);
                }
            }
            else if (counterValue > 0) {
                let tempItem = listItems[index];
                tempItem.number = counterValue;
                tempOrderMenu.push(tempItem);
                setPrice(prePrice+(counterValue * listItems[index].price))
            }
            setOrderMenu(tempOrderMenu);
        }
        useEffect(() => {
            console.log("order menu is " + JSON.stringify(orderMenu));
            switch (menuType) {
                case 'Dinner':
                    setDinnerOrders(orderMenu);
                    break;
                case 'Lunch':
                    setLunchOrders(orderMenu);
                    break;
                case 'Breakfast':
                    setBreakfastOrders(orderMenu);
                    break;
                case 'Drinks':
                    setDrinksOrder(orderMenu);
                    break;

                default:
                    break;
            }
        }, [orderMenu])
        return (
            <View style={[COMMON.MainView, styles.DinningTab]}>
                <FlatList
                    data={route?.params?.items}
                    renderItem={({ item, index }) => (
                        <CounterItem
                            text={item.title}
                            subtext={item.price + ' USD'}
                            getCounter={(value) => onItemCounterChanged(index, value)}
                        />
                    )}
                />
            </View>


        );
    },
    {
        scrollView: false,
        paddingBottom: false,
        paddingTop: false,
    },
);
const styles = StyleSheet.create({
    DinningTab: {
        backgroundColor: COLORS.Color304,
        flex: 1,

    }
});
export default DinningTab;

