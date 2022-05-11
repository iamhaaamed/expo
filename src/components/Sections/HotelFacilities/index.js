import { MFlatList, MIcon, MText } from 'components/common';
import ConfigItem from 'components/elements/ConfigItem';
import { COLORS, METRIC_SIZES } from 'constants/common';
import useTheme from 'hooks/useTheme';
import React, { useRef } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { scale, verticalScale } from 'utils';

const HotelFacilities = ({ navigation, currentHotel, desc }) => {
    const { IMAGES, COMMON } = useTheme();
    const clickCounter = useRef(0);
    const onPress = () => {
        console.log(`Clicked! ${clickCounter.current}`);
        clickCounter.current = clickCounter.current + 1;
    };

    return (
        <View>
            <MText textStyle={COMMON.Title}>what to expect</MText>
            <MText textStyle={COMMON.NormalText}>
                {currentHotel?.description2}
            </MText>
            <FlatList
                data={[
                    {
                        title: 'Amenities',
                        dest: 'Amentities',
                        icon: IMAGES.book_open,
                    },
                    {
                        title: 'Dinning',
                        dest: 'Dinningfeaturelist',
                        icon: IMAGES.silverware,
                    },
                    {
                        title: 'Fitness',
                        dest: 'Fitness',
                        icon: IMAGES.dumbbell,
                    },
                    { title: 'Spa', dest: 'Spa', icon: IMAGES.spa_outline },
                    {
                        title: 'Attractions',
                        dest: 'Attractions',
                        icon: IMAGES.bank_outline,
                    },
                    {
                        title: 'Parking& Transit',
                        dest: 'ParkingTransit',
                        icon: IMAGES.subway_variant,
                    },
                    {
                        title: 'Accessibility',
                        dest: 'Accessibility',
                        icon: IMAGES.wheelchair,
                    },
                ]}
                renderItem={({ item }) => (
                    <View>
                        <View
                            style={[
                                COMMON.LineSectionTop047,
                                { marginVertical: METRIC_SIZES.tiny },
                            ]}
                        />
                        <ConfigItem
                            text={item.title}
                            textStyle={{
                                textAlign: 'left',
                                alignSelf: 'flex-start',
                            }}
                            imgName={item.icon}
                            onPress={() => navigation.navigate(item.dest)}
                        />
                    </View>
                )}
            />
        </View>
    );
};
export default HotelFacilities;
