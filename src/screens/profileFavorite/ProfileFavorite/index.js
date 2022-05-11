import React from 'react';
import { useEffect } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView, FlatList } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS, DEVICE_HEIGHT } from 'constants/common';
import { GetData } from 'utils';
import { MFlatList, Container } from 'components/common';
import HotelItem from 'components/elements/HotelItem';
import { useUserFavorites, useUserHistories } from 'hooks/Profile';
import { Config } from 'react-native-config';
const ProfileFavorite = createScreen(
    (props) => {
        const { COMMON, IMAGES } = useTheme();
        const [isFav, setIsFav] = useState(
            props?.route?.params?.title === 'Favorite',
        );
        const [userId, setUserId] = useState();
        const { fetchNextPage, data, isLoading } = useUserFavorites({
            userId: userId,
            isFav: isFav,
        });

        useEffect(() => {
            (async () => {
                let user = await GetData('USER_INFO');
                let token = await GetData('TOKEN');
                console.log('token' + token);
                setUserId(user?.id);
            })();
        }, []);
        useEffect(() => {
            console.log('data is ' + JSON.stringify(data));
        }, [data]);
        const {
            fetchNextPage: historyFetchNextPage,
            data: historyData,
            isLoading: historyLoading,
        } = useUserHistories({ userId: userId, isFav: isFav });
        return (
            <Container
                loadingOnPage={isLoading || historyLoading}
                style={styles.InRoomService2}>
                <ScrollView>
                    <View style={COMMON.MainView}>
                        <FlatList
                            columnWrapperStyle={{
                                justifyContent: 'space-between',
                            }}
                            data={isFav ? data?.pages : historyData?.pages}
                            numColumns={2}
                            onEndReached={
                                isFav ? fetchNextPage : historyFetchNextPage
                            }
                            renderItem={({ item, index }) => (
                                <HotelItem
                                    title={item?.hotel?.name ?? item?.name}
                                    isProfile={true}
                                    image={{
                                        uri:
                                            item?.hotel?.photoUrl ??
                                            item?.photoUrl,
                                    }}
                                />
                            )}
                        />
                    </View>
                </ScrollView>
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
    InRoomService2: {
        backgroundColor: COLORS.Color304,
        height: '100%',
    },
});
export default ProfileFavorite;
