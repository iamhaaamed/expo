import { Container, MButton, MIcon, MText } from 'components/common';
import { createScreen } from 'components/elements';
import { SectionTop } from 'components/Sections';
import HotelFacilities from 'components/Sections/HotelFacilities';
import HotelGallery from 'components/Sections/HotelGallery';
import {
    COLORS,
    DEVICE_HEIGHT,
    DEVICE_WIDTH,
    METRIC_SIZES,
} from 'constants/common';
import { useSelectHotels } from 'hooks/Booking';
import useTheme from 'hooks/useTheme';
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, Platform } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { AirbnbRating } from 'react-native-ratings';
import { MaterialIcons } from 'react-native-vector-icons/MaterialIcons';
import Config from 'react-native-config';

const SelectHotel = createScreen(
    ({ navigation, route }) => {
        const { COMMON, IMAGES } = useTheme();
        console.log('nnnnnnnnV ', route);

        const { data, isLoading } = useSelectHotels({
            hotelId: route?.params?.id,
        });
        console.log(
            'sssssssDDDDDD ',
            data?.hotel_getHotel?.result?.hotelPhotos,
        );
        const [Img, setImg] = useState([]);
        console.log('sssssssDDDDDD ', route?.params?.title);
        const getAverageRating = () => {
            const result = data?.hotel_getHotel?.result?.ratings;
            if (result?.length > 0) {
                const totalCount = 0;
                for (let i = 0; i < result?.length; i++) {
                    totalCount += result[i]?.rate;
                }
                return (totalCount / result?.length).toFixed(2);
            }
            return '0';
        };
        useEffect(() => {
            let arr = [];
            // data?.hotel_getHotel?.result?.hotelPhotos?.map((item) => {
            //     arr.push(Config.FILE_URL + item?.photoUrl);
            // });
            console.log(arr);
            setImg(arr);
        }, []);
        return (
            <Container
                isLoading={isLoading}
                style={styles.ProfileSettingPaymentInformation}>
                <SectionTop
                    title={route?.params?.title}
                    hasLike={true}
                    navigation={navigation}
                    hotelId={data?.hotel_getHotel?.result?.id}
                />
                <ScrollView style={{ width: '100%' }}>
                    <View style={COMMON.MainView}>
                        <SliderBox
                            paginationBoxStyle={{ marginRight: 120 }}
                            images={Img}
                            sliderBoxHeight={DEVICE_HEIGHT * 0.35}
                            parentWidth={DEVICE_WIDTH * 0.95}
                            ImageComponentStyle={{
                                borderRadius: 15,
                                width: '100%',
                            }}
                            dotColor={COLORS.Color304}
                            dotStyle={{
                                width: 15,
                                height: 15,
                                borderRadius: 15,
                                padding: 0,
                                margin: 0,
                            }}
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
                                textStyle={[
                                    COMMON.NormalText,
                                    { color: '#2A3277' },
                                ]}
                                containerStyle={{
                                    flex: 1,
                                    alignItems: 'center',
                                }}>
                                {data?.hotel_getHotel?.result?.comments
                                    ? data?.hotel_getHotel?.result?.comments
                                          ?.length + ' Review'
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
                                {data?.hotel_getHotel?.result?.locations[0]
                                    ?.country +
                                    ', ' +
                                    data?.hotel_getHotel?.result?.locations[0]
                                        ?.province +
                                    ', ' +
                                    data?.hotel_getHotel?.result?.locations[0]
                                        ?.city +
                                    ', ' +
                                    data?.hotel_getHotel?.result?.locations[0]
                                        ?.streeet +
                                    ', ' +
                                    data?.hotel_getHotel?.result?.locations[0]
                                        ?.address +
                                    ', '}
                            </MText>
                            <MIcon name={'directions'} size={28} />
                        </View>
                        <MText textStyle={COMMON.GrayNormalTextNoBottom}>
                            {data?.hotel_getHotel?.result?.telNumber}
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
                            stretch out in style at our hotel in downtown los
                            angeles
                        </MText>
                        <MText textStyle={COMMON.NormalText}>
                            {data?.hotel_getHotel?.result?.about}
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
                            items={data?.hotel_getHotel?.result?.hotelPhotos}
                        />
                        <View
                            style={[
                                COMMON.LineSectionTop047,
                                { marginVertical: METRIC_SIZES.large },
                            ]}
                        />

                        <HotelFacilities
                            desc={data?.hotel_getHotel?.result?.description}
                            navigation={navigation}
                        />
                    </View>
                </ScrollView>
                <MButton
                    onPress={() =>
                        navigation.navigate('DatesCalendar', {
                            hotelName: route?.params?.title,
                            hotelId: route?.params?.id,
                        })
                    }
                    style={[
                        COMMON.ButtonRect37,
                        { alignSelf: 'center', width: '90%' },
                    ]}
                    containerStyle={COMMON.Button36}
                    text="Check Availability"
                    textStyle={COMMON.TextsButton38}
                    color={COLORS.Color988}
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
