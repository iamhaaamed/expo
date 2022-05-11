
import React from 'react';
import { useRef, useEffect } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { MText, MTouchable, MButton, MImage, MFlatList, MLoading } from 'components/common';
import HotelGalleryTabScreen from './../HotelGalleryTabScreen/index';
import { GetData } from 'utils';
const Tab = createMaterialTopTabNavigator();
const HotelPhotoGallery = createScreen(
    ({route}) => {
        const { LAYOUT, GUTTERS, TYPOGRAPHY, IMAGES, COMMON, CONSTANTS } = useTheme();
        const [listItems, setListItems] = useState([
            { title: 'All', view: 'HOTEL_VIEW', items: route?.params?.hotelPhotos},
            { title: 'Hotel View', view: 'HOTEL_VIEW' },
            { title: 'Room View', view: 'ROOM_VIEW' },
            { title: 'Spa', view: 'SPA_VIEW' },
            // { title: 'Other View', view: 'OTHER_VIEW' }
        ]);
        
        return (
            <Tab.Navigator
                sceneContainerStyle={{ backgroundColor: "transparent" }}
                screenOptions={{
                    tabBarActiveTintColor: COLORS.Color332,
                    tabBarLabelStyle: { textTransform: "none" },
                    tabBarIndicatorStyle: { backgroundColor: COLORS.Color988 }
                }}
            >
                {route?.params?.tabWithItems?.map((item, index) => {
                    if (item && item?.title)
                        return (
                            <Tab.Screen name={item.title} component={HotelGalleryTabScreen}
                                initialParams={{ items: item.items }}
                            />
                        );
                })}
            </Tab.Navigator>


        );
    },
    {
        scrollView: false,
        paddingBottom: false,
        paddingTop: false,
    },
);
const styles = StyleSheet.create({
    HotelPhotoGallery: {
        backgroundColor: COLORS.Color304,
        flex: 1,

    }
});
export default HotelPhotoGallery;

