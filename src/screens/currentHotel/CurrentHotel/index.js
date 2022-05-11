import { MButton, MIcon, MText, Container } from 'components/common';
import { createScreen } from 'components/elements';
import HotelFacilities from 'components/Sections/HotelFacilities';
import HotelGallery from 'components/Sections/HotelGallery';
import {
    COLORS,
    DEVICE_HEIGHT,
    DEVICE_WIDTH,
    METRIC_SIZES,
} from 'constants/common';
import useTheme from 'hooks/useTheme';
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { AirbnbRating } from 'react-native-ratings';
import { MaterialIcons } from 'react-native-vector-icons/MaterialIcons';
import { MImage } from 'components/common';
import CurrentHotelFacilityItem from 'components/Sections/CurrentHotelFacilityItem';
import ConfigItem from 'components/elements/ConfigItem';
import { GetData } from 'utils';
import { useCurrentHotel, useRoomComments, useRoomRatings } from 'hooks/Home';
const SelectHotel = createScreen(
    ({ navigation, route }) => {
        const { COMMON, IMAGES } = useTheme();
        const [userInfo, setUserInfo] = useState();
        const [ratingData, setRatingData] = useState(null);
        const [commentingData, setCommentingData] = useState(null);
        const [currentHotel, setCurrentHotel] = useState(
            route?.params?.currentHotel,
        );
        const {
            data: rateData,
            isLoading: rateLoading,
            fetchNextPage: rateFetchNextPage,
            hasNextPage: rateHasNextPage,
        } = useRoomRatings({ roomId: route?.params?.roomId });
        const {
            data: commentData,
            isLoading: commentLoading,
            fetchNextPage: commentFetchNextPage,
            hasNextPage: commentHasNextPage,
        } = useRoomComments({ roomId: route?.params?.roomId });
        useEffect(() => {
            (async () => {
                let user = await GetData('USER_INFO');
                setUserInfo(user);
            })();
        }, []);
        useEffect(() => {
            console.log("rate data"+JSON.stringify(rateData))
            if (rateData && rateData?.pages && rateHasNextPage) {
                console.log("**** *")
                rateFetchNextPage();
            }
            else if(rateData?.pages && !rateHasNextPage){
                console.log("---")
                setRatingData(rateData?.pages)            
            }
        }, [rateData]);
        useEffect(() => {
            if (commentData && commentData?.pages && commentHasNextPage) {
                commentFetchNextPage();
            }
            else if(commentData && !commentHasNextPage){
                console.log("**** *")
                setCommentingData(commentData?.pages);
            }
        }, [commentData]);
        const getAverageRating = () => {
            if (ratingData) {
                let totalCount = 0;
                for (let i = 0; i < ratingData.length; i++) {
                    totalCount += ratingData[i].rate;
                }
                return (totalCount / ratingData.length).toFixed(2);
            }
            return '0';
        };
        return (
            <Container 
            loadingOnPage={ commentLoading || rateLoading }
            style={styles.ProfileSettingPaymentInformation}>
                <ScrollView style={{ width: '100%' }}>
                    <View style={COMMON.MainView}>
                        <MImage
                            imageSource={
                                currentHotel?.photoUrl
                                    ? { uri: currentHotel?.photoUrl }
                                    : null
                            }
                            style={{
                                width: DEVICE_WIDTH * 0.95,
                                height: DEVICE_HEIGHT * 0.35,
                            }}
                        />
                        <CurrentHotelFacilityItem
                            navigation={navigation}
                            currentHotel={currentHotel}
                            roomId={route?.params?.roomId}
                            comments={commentingData}
                            rates={ratingData}
                        />
                        <View
                            style={[
                                COMMON.RowItemCenter,
                                {
                                    marginVertical: METRIC_SIZES.small,
                                    marginRight: '10%',
                                },
                            ]}>
                            <AirbnbRating
                                defaultRating={getAverageRating()}
                                ratingCount={5}
                                size={18}
                                isDisabled={true}
                                showRating={false}
                                reviews={['', '', '', '', '', '']}
                                selectedColor={COLORS.Color988}
                                unSelectedColor={COLORS.Color780}
                            />
                            <MText>{getAverageRating()}</MText>
                            <MText
                                textStyle={COMMON.NormalText}
                                containerStyle={{
                                    flex: 1,
                                    alignItems: 'center',
                                }}>
                                {commentingData?.length+' Review' ?? '0 Review'}
                            </MText>
                            <MIcon
                                name={'arrow-right-alt'}
                                IconComponent={MaterialIcons}
                                size={30}
                            />
                        </View>
                        <View
                            style={[
                                COMMON.LineSectionTop047,
                                { padding: METRIC_SIZES.small },
                            ]}
                        />
                        <ConfigItem
                            text="Navigate to My Room"
                            onPress={() =>
                                navigation.navigate('NavigateToMyRoom2', {
                                    roomId: route?.params?.roomId,
                                })
                            }
                        />
                        <View
                            style={[
                                COMMON.RowItemStart,
                                { paddingVertical: METRIC_SIZES.large },
                            ]}>
                            <MText
                                style={[
                                    COMMON.GrayNormalTextNoBottom,
                                    { width: '60%' },
                                ]}>
                                {currentHotel?.locations[0]
                                    ? currentHotel.locations[0]?.address +
                                    ' ,' +
                                    currentHotel.locations[0]?.city +
                                    '  ,' +
                                    currentHotel.locations[0]?.province +
                                    ' ,' +
                                    currentHotel.locations[0]?.country +
                                    ' ,'
                                    : ''}
                            </MText>
                            <View style={{ flex: 1 }} />
                            <MIcon name={'directions'} size={28} />
                        </View>
                        <MText textStyle={COMMON.GrayNormalTextNoBottom}>
                            {currentHotel?.telNumber ?? '+1(310)641-5700'}
                        </MText>
                        <View style={styles.mapContainer}>
                            <MapView
                                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                                style={styles.map}
                                region={{
                                    latitude: 37.78825,
                                    longitude: -122.4324,
                                    latitudeDelta: 0.015,
                                    longitudeDelta: 0.0121,
                                }}></MapView>
                        </View>
                        <MText textStyle={COMMON.Title}>
                            {currentHotel?.about}
                        </MText>
                        <MText textStyle={COMMON.NormalText}>
                            {currentHotel?.description}
                        </MText>
                        <MButton
                            text="Read More"
                            transparent
                            iconRight={{ name: 'chevron-down', size: 30 }}
                            containerStyle={{ width: '30%' }}
                        />
                        <View
                            style={[
                                COMMON.LineSectionTop047,
                                { padding: METRIC_SIZES.small },
                            ]}
                        />
                        <HotelGallery
                            items={currentHotel?.hotelPhotos}
                            navigation={navigation}
                        />
                        <View
                            style={[
                                COMMON.LineSectionTop047,
                                { marginVertical: METRIC_SIZES.large },
                            ]}
                        />
                        <HotelFacilities
                            navigation={navigation}
                            currentHotel={currentHotel}
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
    ProfileSettingPaymentInformation: {
        backgroundColor: COLORS.Color304,
        height: '100%',
        alignItems: 'center',
        paddingBottom: '3%',
    },
    mapContainer: {
        height: DEVICE_HEIGHT * 0.3,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: METRIC_SIZES.small,
        overflow: 'hidden',
        marginVertical: METRIC_SIZES.large,
    },

    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
export default SelectHotel;
