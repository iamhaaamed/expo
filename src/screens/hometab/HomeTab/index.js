import React from "react";
import { useRef, useState, useEffect } from "react";
import useTheme from "hooks/useTheme";
import { StyleSheet, ScrollView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { createScreen } from "components/elements";
import {
  COLORS,
  METRIC_SIZES,
  DEVICE_HEIGHT,
  DEVICE_WIDTH,
} from "constants/common";
import { MText, MButton, MImage, MIcon, Container } from "components/common";
import { scale, verticalScale, height, GetData } from "utils";
import ImageAbsoluteText from "components/elements/ImageAbsoluteText";
import CurrentHotelSection from "components/Sections/CurrentHotelSection";
import HomeTopSection from "components/Sections/HomeTopSection";
import { useCurrentHotel } from "hooks/Home";
const HomeTab = createScreen(
  ({ navigation }) => {
    const { COMMON, IMAGES } = useTheme();
    const [userInfo, setUserInfo] = useState();
    const { data, isLoading } = useCurrentHotel({ userId: userInfo?.id });
    useEffect(() => {
      (async () => {
        let user = await GetData("USER_INFO");
        setUserInfo(user);
      })();
    }, []);
    useEffect(() => {
      if (data) {
        console.log("fetched data" + JSON.stringify(data));
      }
    }, [data]);

    return (
      <Container
        loadingOnPage={isLoading}
        style={styles.ProfileSettingPaymentInformation}
      >
        <ScrollView nestedScrollEnabled={true}>
          <HomeTopSection
            name={userInfo?.fullName}
            navigation={navigation}
            nights={
              data?.hotel_getCurrentHotel?.result?.reservationInfo?.stayNight
            }
          />
          <ImageAbsoluteText
            containerStyle={{ height: DEVICE_HEIGHT * 0.42 }}
            image={IMAGES.home_section}
            texts={[
              "Your journey is",
              "Our pleasure",
              "7 Hotel brands . Endless experience",
            ]}
          />
          <View style={COMMON.MainView}>
            {data?.hotel_getCurrentHotel?.result?.currentHotel && (
              <View>
                <CurrentHotelSection
                  currentHotel={
                    data?.hotel_getCurrentHotel?.result?.currentHotel
                  }
                  roomId={
                    data?.hotel_getCurrentHotel?.result?.reservationInfo?.room
                      ?.id
                  }
                  navigation={navigation}
                />
                <View
                  style={[
                    COMMON.RowItemStart,
                    {
                      marginBottom: METRIC_SIZES.large,
                      alignItems: "center",
                      alignSelf: "center",
                      justifyContent: "center",
                    },
                  ]}
                >
                  <MIcon name={"map-marker-distance"} color={COLORS.Color988} />
                  <View
                    style={{
                      flex: 0.95,
                      height: 1,
                      paddingHorizontal: "5%",
                      backgroundColor: COLORS.Color332,
                      marginHorizontal: METRIC_SIZES.small,
                    }}
                  />
                  <MText
                    textStyle={[
                      COMMON.NormalText,
                      {
                        color: COLORS.Color988,
                      },
                    ]}
                  >
                    1.7 km
                  </MText>
                </View>
              </View>
            )}
            {data?.hotel_getCurrentHotel?.result?.recommendedHotels && (
              <View>
                <MText
                  textStyle={COMMON.TitleGrayText}
                  containerStyle={{
                    marginVertical: METRIC_SIZES.small,
                  }}
                >
                  Recommended For You
                </MText>
                <View>
                  <FlatList
                    data={
                      data?.hotel_getCurrentHotel?.result?.recommendedHotels
                    }
                    horizontal={true}
                    extraData={
                      data?.hotel_getCurrentHotel?.result?.recommendedHotels
                    }
                    renderItem={({ item }) => (
                      <ImageAbsoluteText
                        image={{ uri: item?.photoUrl }}
                        containerStyle={styles.recommendedView}
                        imgStyle={styles.recommendedImage}
                        texts={[
                          "",
                          "Receive 15% off when you",
                          "stay 3 night or longer",
                        ]}
                      />
                    )}
                  />
                </View>
              </View>
            )}
          </View>
        </ScrollView>
      </Container>
    );
  },
  {
    scrollView: false,
    paddingBottom: false,
    paddingTop: false,
  }
);
const styles = StyleSheet.create({
  ProfileSettingPaymentInformation: {
    backgroundColor: COLORS.Color304,
    height: "100%",
  },
  shadowView: {
    backgroundColor: Platform.OS === "ios" ? "white" : "white",
    shadowColor: Platform.OS === "ios" ? "green" : "red",
    shadowOffset: {
      width: Platform.OS === "ios" ? 3 : 0,
      height: Platform.OS === "ios" ? 3 : 2,
    },
    shadowOpacity: Platform.OS === "ios" ? 1 : 0.8,
    shadowRadius: Platform.OS === "ios" ? null : 40,
    elevation: Platform.OS === "ios" ? null : 4,
    marginVertical: METRIC_SIZES.small,
    borderRadius: METRIC_SIZES.small,
    overflow: "hidden",
    height: DEVICE_HEIGHT * 0.2,
    flexDirection: "row",
    alignItems: "center",
  },
  recommendedView: {
    width: DEVICE_WIDTH * 0.8,
    height: DEVICE_HEIGHT * 0.3,
    margin: METRIC_SIZES.tiny,
  },
  recommendedImage: {
    width: DEVICE_WIDTH * 0.8,
    height: DEVICE_HEIGHT * 0.3,
    borderRadius: METRIC_SIZES.small,
    overflow: "hidden",
  },
});
export default HomeTab;
