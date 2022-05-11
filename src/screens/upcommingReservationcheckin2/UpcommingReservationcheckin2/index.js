import { MButton, MText } from 'components/common';
import { createScreen } from 'components/elements';
import { SectionTitleTopCenter02 } from 'components/Sections';
import { COLORS } from 'constants/common';
import useTheme from 'hooks/useTheme';
import React, { useRef } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

const UpcommingReservationcheckin2 = createScreen(
    ({ navigation, route }) => {
        const {
            LAYOUT,
            GUTTERS,
            TYPOGRAPHY,
            IMAGES,
            COMMON,
            CONSTANTS,
        } = useTheme();

        const clickCounter = useRef(0);
        const onPress = () => {
            console.log(`Clicked! ${clickCounter.current}`);
            clickCounter.current = clickCounter.current + 1;
        };
        const data = route?.params?.data;
        console.log('====================================');
        console.log(data);
        console.log('====================================');
        const getDate = (item = data?.reservation) => {
            const checkIn = new Date(item?.checkIn);
            const checkOut = new Date(item?.checkOut);
            return `${checkIn.getFullYear()}/${
                checkIn.getMonth() + 1
            }/${checkIn.getDate()} - ${checkOut.getFullYear()}/${
                checkOut.getMonth() + 1
            }/${checkOut.getDate()}`;
        };
        return (
            <View style={styles.UpcommingReservationcheckin2}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <MText
                        textStyle={COMMON.TxtUpcommingReservationcheckin2683}>
                        You Are Checked In!{' '}
                    </MText>
                    <MText
                        textStyle={COMMON.TxtUpcommingReservationcheckin2684}>
                        Reservation Number{' '}
                    </MText>
                    <MText
                        textStyle={COMMON.TxtUpcommingReservationcheckin2685}>
                        {data?.reservation?.id}
                    </MText>
                    <MButton
                        onPress={onPress}
                        style={COMMON.buttonRect687}
                        containerStyle={COMMON.button686}
                        text={
                            data?.hotel?.locations[0]
                                ? data?.hotel.locations[0]?.address +
                                  ' ,' +
                                  data?.hotel.locations[0]?.city +
                                  '  ,' +
                                  data?.hotel.locations[0]?.province +
                                  ' ,' +
                                  data?.hotel.locations[0]?.country
                                : ''
                        }
                        textStyle={COMMON.Textsbutton688}
                        color={COLORS.Color304}
                    />
                    <MText
                        textStyle={COMMON.TxtUpcommingReservationcheckin2689}>
                        stay informations{' '}
                    </MText>
                    <MText
                        textStyle={COMMON.TxtUpcommingReservationcheckin2690}>
                        {getDate()}
                    </MText>
                    <MText
                        textStyle={COMMON.TxtUpcommingReservationcheckin2691}>
                        1 Room ,{' '}
                        {data?.reservation?.numberOfChilds +
                            data?.reservation?.numberOfAdults}{' '}
                        Guests{' '}
                    </MText>
                    <MText
                        textStyle={COMMON.TxtUpcommingReservationcheckin2692}>
                        2 Double Beds, Guest Room, Mobility Accessible Room With
                        Bathtub{' '}
                    </MText>
                </ScrollView>
                <View style={{ flex: 1 }} />
                <MButton
                    onPress={() =>
                        navigation.navigate('UpcomingReservationHotel', {
                            currentHotel: data,
                        })
                    }
                    style={[
                        COMMON.ButtonRectColor988,
                        { width: '100%', backgroundColor: 'transparent' },
                    ]}
                    containerStyle={[
                        COMMON.ButtonRectColor988,
                        { width: '100%' },
                    ]}
                    text="Done"
                    textStyle={COMMON.TextsButton}
                    color={COLORS.Color988}
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
    UpcommingReservationcheckin2: {
        backgroundColor: COLORS.Color304,
        height: '100%',
        paddingHorizontal: '5%',
        paddingBottom: '5%',
    },
});
export default UpcommingReservationcheckin2;
