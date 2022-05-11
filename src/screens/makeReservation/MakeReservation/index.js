import { Container, MText } from 'components/common';
import { createScreen } from 'components/elements';
import HotelItem from 'components/elements/HotelItem';
import SearchVoiceBox from 'components/Sections/SearchVoiceBox';
import { COLORS, METRIC_SIZES } from 'constants/common';
import { useRecomendedHotels } from 'hooks/Booking';
import useTheme from 'hooks/useTheme';
import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { GetData } from 'utils';

const MakeReservation = createScreen(
    ({ navigation }) => {
        const { COMMON, IMAGES } = useTheme();
        const [userInfo, setUserInfo] = useState();
        const [speechText, setSpeechText] = useState();
        const [isConverting, setIsConverting] = useState(false);
        const [verifyResponse, setVerifyResponse] = useState(false);
        useEffect(() => {
            if (verifyResponse && speechText)
                navigation.navigate('ChatBotPage');
        }, [verifyResponse, speechText]);
        useEffect(() => {
            (async () => {
                let user = await GetData('USER_INFO');
                setUserInfo(user);
            })();
        }, []);
        const { data, isLoading } = useRecomendedHotels({
            userId: userInfo?.id,
        });
        console.log(
            'data:: ',
            data?.booking_getRecommendedHotels?.result?.recommendedHotels,
        );

        return (
            <Container
                loadingOnPage={isLoading || isConverting}
                style={styles.InRoomService2}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={COMMON.MainView}>
                        <SearchVoiceBox
                            style={{ marginTop: METRIC_SIZES.small }}
                            needVerify={false}
                            navigation={navigation}
                            onSpeechConverted={(value) => setSpeechText(value)}
                            isConverting={(value) => setIsConverting(value)}
                            setVerifyResponse={(value) =>
                                setVerifyResponse(value)
                            }
                        />
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
                            Hotels
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
        // height: '100%',
    },
});
export default MakeReservation;
