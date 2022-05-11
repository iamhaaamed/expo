import React from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView, FlatList } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { scale, verticalScale, height } from 'utils';
import LinearGradient from 'react-native-linear-gradient';
import { DateTimePickerMod } from 'components/common/MDateTimePicker';
import {
    DrawerItem,
    DrawerItemList,
    DrawerContentScrollView,
    DrawerToggleButton,
} from '@react-navigation/drawer';

import {
    MIcon,
    MText,
    MTouchable,
    MButton,
    MInput,
    MImageBackground,
    MImage,
    MStatusBar,
    MSwitch,
    MCheckBox,
    MFlatList,
    MChip,
    MDropDown,
    MOnboarding,
    MDateTimePicker,
    MImagePicker,
    MLoading,
    MModal,
    MTab,
    MAccordion,
    MSnackbar,
    MSlider,
} from 'components/common';
import { SectionTop } from 'components/Sections';
import { SectionCenter } from 'components/Sections';
import DinningItem from 'components/Sections/DinningItem';
const Dinnings = createScreen(
    (props) => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();
        const clickCounter = useRef(0);
        const [currentHotel, setCurrentHotel] = useState(props.route?.params?.currentHotel)
        const onPress = () => {
            console.log(`Clicked! ${clickCounter.current}`);
            clickCounter.current = clickCounter.current + 1;
        };
        const isHotelRestaurant = (id) => {
            return currentHotel?.id === id;
        }
        return (
            <View style={styles.Dinnings}>
                <FlatList
                    data={[{hotelId:currentHotel?.id, telNumber:currentHotel.telNumber},{hotelId:currentHotel?.id + 1, telNumber:'099999'}]}
                    renderItem={({ item }) => (
                        <View>
                            <MText
                                textStyle={[
                                    COMMON.TxtDinnings638,
                                    { alignSelf: 'center', marginTop: '5%' },
                                ]}>
                                {(isHotelRestaurant(item.hotelId)) ? 'At This Hotel' : 'Nearby'}
                            </MText>
                            <DinningItem
                                style={COMMON.EleDinnings639}
                                item={item}
                                currentHotel={currentHotel}
                                isCurrent={isHotelRestaurant(item.hotelId)}
                                navigation={props.navigation}
                            />

                        </View>
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
    Dinnings: {
        backgroundColor: COLORS.Color304,
        height: '100%',
        paddingHorizontal: '5%',
        paddingBottom: '5%',
    },
});
export default Dinnings;
