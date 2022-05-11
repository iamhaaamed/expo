import { MButton, MIcon, MText } from 'components/common';
import useTheme from 'hooks/useTheme';
import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';

/**
 * Custom BottomTabBar used only for React Navigation library, used the sample code from docs
 * @param {import('@react-navigation/bottom-tabs').BottomTabBarProps} props
 */
const MBottomTab = ({ state, descriptors, navigation, ...props }) => {
  const { LAYOUT, NAVIGATION_COLORS } = useTheme();
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View
      style={[
        LAYOUT.row,
        { minHeight: 50, backgroundColor: 'white' },
        { flexDirection: 'row', justifyContent: 'space-evenly' },
        // { borderColor: 'red', borderWidth: 1 },
      ]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel ?? options.title ?? route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        console.log(new Date());

        return (
          // {/* <View style={[LAYOUT.fill]}> */}
          // {/* {options.tabBarIcon} */}
          <MButton
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel ?? label}
            onPress={onPress}
            onLongPress={onLongPress}
            testID={options.tabBarTestID}
            text={label}
            type="opacity"
            activeOpacity={0.9}
            transparent
            color={
              isFocused
                ? props.activeTintColor ??
                  NAVIGATION_COLORS.tabBarActiveTint ??
                  NAVIGATION_COLORS.primary
                : props.inactiveTintColor ??
                  NAVIGATION_COLORS.tabBarInactiveTint
            }
            style={{
              flex: 1,
              // borderColor: 'green',
              // borderWidth: 1,
              justifyContent: 'center',
            }}
          />
          // {/* </View> */}
        );
      })}
    </View>
  );
};

export default React.memo(MBottomTab);
