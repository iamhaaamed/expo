import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { TabBarIcon } from "components/elements";
import { SectionTop } from "components/Sections";
import {
  DEFAULT_TABBAR_OPTIONS,
  DEFAULT_TAB_OPTIONS,
  getBottomNavbar,
  ROOT_SCREENS,
} from "constants/screens";
import useTheme from "hooks/useTheme";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";

// import { ModalScreen } from 'screens';
const RootStack = createStackNavigator();
const AppTab = createBottomTabNavigator();

const getPreviousNavbarIndex = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};
const TabNavigator = () => {
  const { navbarIndex } = useTheme();
  const [AppStacks, setAppStacks] = useState(false);
  const [selectedNavbar, setSelectedNavbar] = useState(false);
  const prevNavbarIndex = getPreviousNavbarIndex(navbarIndex.bottomNavbarIndex);
  const { NAVIGATION_COLORS } = useTheme();
  const selectedBottomNavbar = getBottomNavbar({
    navbarIndex: navbarIndex.bottomNavbarIndex,
  });

  useEffect(() => {
    if (navbarIndex.bottomNavbarIndex) {
      setSelectedNavbar(selectedBottomNavbar.screens);
      const stacks = selectedBottomNavbar.screens.map((tab) => {
        const Stack = createStackNavigator();
        return () => (
          <Stack.Navigator>
            {tab.screens?.map(
              ({ Component, name, title, options, optionsFunc }) => (
                <Stack.Screen
                  name={"name"}
                  key={name}
                  component={Component}
                  options={(props) => {
                    const funcRes = optionsFunc ? optionsFunc(props) : {};
                    return {
                      title: title ?? name,
                      ...options,
                      ...funcRes,
                    };
                  }}
                />
              )
            )}
          </Stack.Navigator>
        );
      });
      setAppStacks(stacks);
    }
  }, [navbarIndex]);

  /**
   *   In first render, AppStack === false
   * prevNavbarIndex === navbarIndex.bottomNavbarIndex, to match AppStacks[i] with correct result of
   * selectedBottomNavbar.screens
   * In first render, selected navbar === false
   */
  return (
    AppStacks !== false &&
    prevNavbarIndex === navbarIndex.bottomNavbarIndex &&
    selectedNavbar && (
      <>
        <AppTab.Navigator
          screenOptions={DEFAULT_TAB_OPTIONS}
          tabBarOptions={{
            activeTintColor: NAVIGATION_COLORS.tabBarActiveTint,
            ...selectedBottomNavbar.settings.customTabBarOptions,
            ...DEFAULT_TABBAR_OPTIONS,
            style: {
              ...selectedBottomNavbar.settings.style,
              paddingBottom: 0,
            },
          }}
          tabBar={(props) => (
            <View style={styles.navigatorContainer}>
              <BottomTabBar {...props} />
              {/* {IS_IPHONE_X && (
                <View
                  style={[
                    styles.xFillLine,
                    {
                      backgroundColor: barColor,
                    },
                  ]}
                />
              )} */}
            </View>
          )}
          // tabBar={
          //   CustomBottomTab && ((tabProps) => <CustomBottomTab {...tabProps} />)
          // }
        >
          {selectedBottomNavbar.screens.map(
            (
              {
                name,
                // iconOptions,
                // focusIconName,
                // focusIconOptions,
                // iconName,
                options,
                optionsFunc,
                title,
              },
              i
            ) => {
              return (
                <AppTab.Screen
                  name={name}
                  key={name}
                  component={AppStacks[i]}
                  options={(props) => {
                    const { navigation, route } = props;

                    const funcRes = optionsFunc
                      ? optionsFunc({ route, navigation })
                      : {};
                    return {
                      title: title ?? options?.title ?? name,
                      // tabBarIcon: (tbProps) => (
                      //   <TabBarIcon
                      //     {...{
                      //       iconName,
                      //       focusIconName,
                      //       iconOptions,
                      //       focusIconOptions,
                      //     }}
                      //     {...tbProps}
                      //   />
                      // ),
                      ...options,
                      ...funcRes,
                      // tabBarVisible: false,//TODO hide bottomNavbar
                    };
                  }}
                />
              );
            }
          )}
        </AppTab.Navigator>
      </>
    )
  );
};

export const RootNavigator = () => {
  console.log("HOME_SCREEN");
  return (
    <RootStack.Navigator initialRouteName={"Splash"}>
      <RootStack.Screen
        name="AppTab"
        key="AppTab"
        component={TabNavigator}
        options={{ headerShown: false }}
      />

      {ROOT_SCREENS.map(
        ({
          Component,
          name,
          title,
          isDarkMode = false,
          options,
          optionsFunc,
        }) => (
          <RootStack.Screen
            name={name}
            key={name}
            component={Component}
            options={{
              header: (props) => (
                <SectionTop
                  {...props}
                  title={title ?? name}
                  isDarkMode={isDarkMode}
                  options={options}
                  // style={COMMON.EleAmentities708}
                />
              ),
              ...options,
            }}
          />
        )
      )}
    </RootStack.Navigator>
  );
};

const styles = StyleSheet.create({
  navigatorContainer: {
    // position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    // SHADOW
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  xFillLine: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 34,
  },
});
