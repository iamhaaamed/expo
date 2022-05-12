import { MText, MImage, MIcon } from "components/common";
import {
  METRIC_SIZES,
  COLORS,
  DEVICE_HEIGHT,
  DEVICE_WIDTH,
} from "constants/common";
import React from "react";
import useTheme from "hooks/useTheme";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcon from "@expo/vector-icons/MaterialCommunityIcons";

import { scale, verticalScale } from "utils";
const HomeTopSection = ({ name = "Dear", nights = "0", navigation }) => {
  const { COMMON, IMAGES } = useTheme();
  return (
    <View
      style={[
        COMMON.RowItemCenter,
        {
          margin: METRIC_SIZES.small,
          marginTop: "5%",
          paddingHorizontal: "5%",
        },
      ]}
    >
      <MText textStyle={[COMMON.NormalText]}>{"Hi " + name}</MText>
      <TouchableOpacity onPress={() => navigation.navigate("selected")}>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: METRIC_SIZES.small,
          }}
        >
          <MText textStyle={COMMON.NormalText}>{nights + " Nights"}</MText>
          <MaterialCommunityIcon name={"home"} />
          {/* <MIcon name={'chevron-right'} size={30} /> */}
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default HomeTopSection;
