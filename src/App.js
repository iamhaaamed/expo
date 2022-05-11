import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
// import MDrawer from "components/common/MDrawer";
import { DrawerContent, drawerStyle } from "components/Screen/Menu";

import { NavbarContext, ThemeContext } from "components/contexts";
import React, { useState, useEffect, useCallback } from "react";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

import { LogBox } from "react-native";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { enableScreens } from "react-native-screens";
import { RootNavigator } from "services/navigation";
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import GraphQlClient from "GraphQl/GraphQlClient";
import { StoreData, GetData } from "utils";
import { Google_Config } from "values/Google_Config1";
// import { Settings } from 'react-native-fbsdk-next';
import auth from "@react-native-firebase/auth";
import useUserSpeechProfile from "store/speechProfile";
import { removeProfileId } from "verifySpeech";

LogBox.ignoreAllLogs();
let queryClient: QueryClient;

enableScreens();

const App = ({ navigation }) => {
  const Drawer = createDrawerNavigator();
  const [bottomNavbarIndex, setBottomNavbarIndex] = useState(1);
  const value = { bottomNavbarIndex, setBottomNavbarIndex };
  const [initializing, setInitializing] = useState(true);
  const profileId = useUserSpeechProfile((state) => state.profileId);
  useEffect(() => {
    (async () => {
      console.log(await GetData("TOKEN"));
    })();
    // CheckNet();
    return async () => {
      console.log("component unmount");
      if (profileId) {
        await removeProfileId(profileId);
      }
      // Anything in here is fired on component unmount.
    };
  }, []);
  useEffect(() => {
    GoogleSignin.configure(Google_Config);
    // Settings.initializeSDK(); // facebook social login sdk setting
  }, []);
  // const isDarkTheme = useSelector(state => state?.themeData?.theme);
  // let theme = isDarkTheme ? darkTheme : defaultTheme;
  const handleUser = useCallback(
    async (user) => {
      if (user) {
        const idToken = await auth().currentUser?.getIdToken();
        console.log(idToken);
        if (idToken) {
          GraphQlClient.setHeader("authorization", "Bearer " + idToken);
          await StoreData("TOKEN", idToken);
        }
        queryClient.invalidateQueries();
      } else {
        GraphQlClient.setHeader("authorization", "");
        queryClient.clear();
      }
      if (initializing) {
        setInitializing(false);
      }
    },
    [initializing]
  );

  useEffect(() => {
    const unsubscribe = auth().onIdTokenChanged(handleUser);
    return () => unsubscribe();
  }, [handleUser]);
  const mutationCache = new MutationCache({
    onSuccess: async (data) => {
      const first = data[Object?.keys(data)[0]];
      const status = first?.status;
      console.log("====================================MMMMMMM");
      console.log(status);
      console.log("====================================");

      if (status === "AUTHENTICATION_FAILED" || status == "USER_NOT_FOUND") {
        showMessage({
          message: "please login first",
          type: "danger",
        });
        navigation.navigate("UserSignin");
      }
    },
    onError(error) {
      // if (CheckNet())
      //     showMessage({
      //         message: error?.toString(),
      //         type: 'danger',
      //     });
    },
  });
  const queryCache = new QueryCache({
    onSuccess: (data) => {
      const first = data[Object?.keys(data)[0]];
      const status = first?.status;
      console.log("====================================QQQQQQQ    ");
      console.log(status);
      console.log("====================================");
      if (status === "AUTHENTICATION_FAILED" || status == "USER_NOT_FOUND") {
        // showMessage({
        //     message: 'please login first',
        //     type: 'danger',
        // });
        // navigate(SIGN_IN);
      }
    },
    onError(error) {
      console.log("onErrroooooor: ", error);
      // if (CheckNet())
      //     showMessage({
      //         message: error?.toString(),
      //         type: 'danger',
      //     });
    },
  });
  queryClient = new QueryClient({
    mutationCache,
    queryCache,
    defaultOptions: {
      queries: {
        retry: 0,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <NavbarContext.Provider value={value}>
        <ThemeContext.Provider value={value}>
          <NavigationContainer>
            <Drawer.Navigator
              initialRouteName="HomeScreen"
              screenOptions={{
                swipeEnabled: false,
                drawerStyle: drawerStyle,
              }}
            >
              <Drawer.Screen
                name="HomeScreen"
                component={RootNavigator}
                options={{ headerShown: false }}
              />
            </Drawer.Navigator>
          </NavigationContainer>
          <FlashMessage />
        </ThemeContext.Provider>
      </NavbarContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
