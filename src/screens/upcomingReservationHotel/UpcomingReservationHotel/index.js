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
import UpcommingHotelFacilityItem from 'components/Sections/UpcommingHotelFacilityItem';
import ConfigItem from 'components/elements/ConfigItem';
import { GetData, scale } from 'utils';
import { useCurrentHotel } from 'hooks/Home';
const UpcomingReservationHotel = createScreen(
    ({ navigation, route }) => {
        const { COMMON, IMAGES } = useTheme();
        const [userInfo, setUserInfo] = useState();
        const currentHotel = route?.params?.currentHotel;
        useEffect(() => {
            (async () => {
                let user = await GetData('USER_INFO');
                console.log('token ' + JSON.stringify(route?.params));
                setUserInfo(user);
            })();
        }, []);
        // useEffect(() => {
        //     if (data && data?.hotel_getCurrentHotel?.result?.currentHotel) {
        //         setCurrentHotel(data?.hotel_getCurrentHotel?.result?.currentHotel);
        //     }
        // }, [data]);
        console.log('CH', currentHotel);
        const checkInDate = new Date(currentHotel?.reservation?.checkIn);
        console.log(
            'CH',
            checkInDate,
            checkInDate.getFullYear(),
            checkInDate.getMonth() + 2,
            checkInDate.getDate(),
            checkInDate.getHours(),
            checkInDate.getMinutes(),
            checkInDate.getUTCDay(),
        );

        const getAverageRating = () => {
            if (currentHotel?.hotel?.ratings.length > 0) {
                const totalCount = 0;
                for (let i = 0; i < currentHotel.hotel?.ratings?.length; i++) {
                    totalCount += currentHotel.hotel?.ratings[i]?.rate;
                }
                return (
                    totalCount / currentHotel.hotel?.ratings.length
                ).toFixed(2);
            }
            return '0';
        };
        return (
            <Container style={styles.ProfileSettingPaymentInformation}>
                <ScrollView style={{ width: '100%' }}>
                    <View style={COMMON.MainView}>
                        <MImage
                            imageSource={
                                currentHotel?.hotel?.photoUrl
                                    ? { uri: currentHotel?.hotel?.photoUrl }
                                    : null
                            }
                            style={{
                                width: DEVICE_WIDTH * 0.95,
                                height: DEVICE_HEIGHT * 0.35,
                            }}
                        />
                        <UpcommingHotelFacilityItem
                            navigation={navigation}
                            currentHotel={currentHotel}
                        />
                        <MText
                            textStyle={COMMON.NormalText}
                            containerStyle={{
                                marginTop: '10%',
                                mrginBottom: '8%',
                            }}>
                            Check In{'        '}
                            {checkInDate.getFullYear() +
                                '/' +
                                checkInDate.getMonth() +
                                1 +
                                '/' +
                                checkInDate.getDate() +
                                '    ' +
                                checkInDate.getHours() +
                                ' : ' +
                                checkInDate.getMinutes()}
                        </MText>

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
                                {currentHotel?.hotel?.comments
                                    ? currentHotel.hotel?.comments.length +
                                      ' Review'
                                    : '0 Review'}
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
                                {currentHotel?.hotel?.locations[0]
                                    ? currentHotel?.hotel?.locations[0]
                                          ?.address +
                                      ' ,' +
                                      currentHotel?.hotel?.locations[0]?.city +
                                      '  ,' +
                                      currentHotel?.hotel?.locations[0]
                                          ?.province +
                                      ' ,' +
                                      currentHotel?.hotel?.locations[0]
                                          ?.country +
                                      ' ,'
                                    : ''}
                            </MText>
                            <View style={{ flex: 1 }} />
                            <MIcon name={'directions'} size={28} />
                        </View>
                        <MText textStyle={COMMON.GrayNormalTextNoBottom}>
                            {currentHotel?.hotel?.telNumber ??
                                '+1(310)641-5700'}
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
                            {currentHotel?.hotel?.about}
                        </MText>
                        <MText textStyle={COMMON.NormalText}>
                            {currentHotel?.hotel?.description}
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
export default UpcomingReservationHotel;
