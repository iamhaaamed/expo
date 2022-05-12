import { MImageBackground } from "components/common";
import { createScreen } from "components/elements";
import { COLORS } from "constants/common";
import GraphQlClient from "GraphQl/GraphQlClient";
import { useSignIn } from "hooks/Auth";
import useTheme from "hooks/useTheme";
import React, { useRef, useEffect } from "react";
import { StyleSheet } from "react-native";
import { GetData, StoreData } from "utils";

const Splash = createScreen(
  ({ navigation }) => {
    const { LAYOUT, GUTTERS, TYPOGRAPHY, IMAGES, COMMON, CONSTANTS } =
      useTheme();
    const { isLoading: SignInLoading, mutate: SignInMutate } = useSignIn();
    useEffect(() => {
      (async () => {
        let user = await GetData("USER_INFO");
        if (!user) {
          navigation.replace("UserSignin");
        } else {
          let idToken = await GetData("TOKEN");
          GraphQlClient.setHeader("authorization", "Bearer " + idToken);
          // navigation.navigate('Signupstep2');
          SignInMutate(
            {},
            {
              onSuccess: async (data) => {
                if (data?.user_signIn?.status == "SUCCESS") {
                  await StoreData("USER_INFO", data?.user_signIn?.result);
                  navigation.replace("AppTab");
                } else navigation.replace("UserSignin");
              },
            }
          );
        }
      })();
    }, []);
    return (
      <MImageBackground
        imageSource={IMAGES.splash}
        hideStatusBar={true}
      ></MImageBackground>
    );
  },
  {
    scrollView: false,
    paddingBottom: false,
    paddingTop: false,
  }
);
const styles = StyleSheet.create({
  Splash: {
    backgroundColor: COLORS.Color304,
    height: "100%",
  },
});
export default Splash;
