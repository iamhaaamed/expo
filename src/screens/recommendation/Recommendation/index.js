import React from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, FlatList } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS, METRIC_SIZES } from 'constants/common';
import HotelItem from 'components/elements/HotelItem';
import { MText } from 'components/common';
import { useRecomendedHotels } from 'hooks/Booking';
import { GetData } from 'utils';

const Recommendation = createScreen(
    ({ navigation }) => {
        const [userInfo, setUserInfo] = useState();

        useEffect(() => {
            (async () => {
                let user = await GetData('USER_INFO');
                setUserInfo(user);
            })();
        }, []);
        const { COMMON, IMAGES } = useTheme();
        const { data, isLoading } = useRecomendedHotels({
            userId: userInfo?.id,
        });
        console.log(
            'data:: ',
            data?.booking_getRecommendedHotels?.result?.recommendedHotels,
        );

        return (
            <View style={styles.InRoomService2}>
                <ScrollView>
                    <View style={COMMON.MainView}>
                        <MText
                            textStyle={[
                                COMMON.TitleGrayText,
                                { paddingVertical: METRIC_SIZES.small },
                            ]}>
                            Recently Review
                        </MText>
                        <FlatList
                            columnWrapperStyle={{
                                justifyContent: 'space-between',
                            }}
                            data={
                                data?.booking_getRecommendedHotels?.result
                                    ?.bookedHotels
                            }
                            numColumns={2}
                            renderItem={({ item, index }) => (
                                <HotelItem
                                    title={item.name}
                                    image={item.photoUrl}
                                    navigation={navigation}
                                    id={item.id}
                                />
                            )}
                        />
                        <MText
                            textStyle={[
                                COMMON.TitleGrayText,
                                { paddingVertical: METRIC_SIZES.small },
                            ]}>
                            Recommended For You
                        </MText>
                        <FlatList
                            columnWrapperStyle={{
                                justifyContent: 'space-between',
                            }}
                            data={
                                data?.booking_getRecommendedHotels?.result
                                    ?.recommendedHotels
                            }
                            numColumns={2}
                            renderItem={({ item, index }) => (
                                <HotelItem
                                    title={item.name}
                                    image={item.photo}
                                    navigation={navigation}
                                    id={item.id}
                                />
                            )}
                        />
                    </View>
                </ScrollView>
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
    InRoomService2: {
        backgroundColor: COLORS.Color304,
        height: '100%',
    },
});
export default Recommendation;
