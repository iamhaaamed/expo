
import React from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS, METRIC_SIZES } from 'constants/common';
import { MText, MButton } from 'components/common';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DinningMenu from './DinningMenu';
import Orders from './Orders';
const Tab = createMaterialTopTabNavigator();
const Dinnings3 = createScreen(
    ({route}) => {
        const { LAYOUT, GUTTERS, TYPOGRAPHY, IMAGES, COMMON, CONSTANTS } = useTheme();
        const [listItems, setListItems] = useState([{ title: 'All' }, { title: 'Spa' }, { title: 'Room View' }, { title: 'Hotel View' }])
        const clickCounter = useRef(0);
        const onPress = () => {
            console.log(`Clicked! ${clickCounter.current}`);
            clickCounter.current = clickCounter.current + 1;
        };

        return (
            <View style={styles.Dinnings3}>
                <Tab.Navigator
                    sceneContainerStyle={{ backgroundColor: "transparent" }}
                    screenOptions={{
                        tabBarActiveTintColor: COLORS.Color332,
                        tabBarLabelStyle: { textTransform: "none" },
                        tabBarIndicatorStyle: { backgroundColor: COLORS.Color988 }
                    }}
                >
                    <Tab.Screen name={"Dinning"} component={DinningMenu}
                        initialParams={{ currentHotel: route?.params?.currentHotel }}
                    />
                    <Tab.Screen name={"Orders"} component={Orders}
                        initialParams={{ currentHotel: route?.params?.currentHotel }}
                    />
                </Tab.Navigator>
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
    Dinnings3: {
        backgroundColor: COLORS.Color304,
        flex: 1,

    },
});
export default Dinnings3;

