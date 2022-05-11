import useTheme from 'hooks/useTheme';
import React from 'react';
import { StyleSheet, View } from 'react-native';
/**
 * @param {{paddingTop?: boolean, paddingBottom?: boolean,
 * backgroundColor?: import('react-native').ColorValue,
 * horizantalPadding?: boolean,
 * style?: import('react-native').ViewStyle}} props
 */
const MScreenContainer = ({
  children,
  paddingTop = true,
  paddingBottom = true,
  backgroundColor,
  horizantalPadding = false,
  loading = false,
  style,
  ...props
}) => {
  const { GUTTERS, COLORS } = useTheme();
  if (!backgroundColor) {
    backgroundColor = COLORS.background;
  }

  return (
    <View
      style={[
        styles.container,
        // paddingTop && GUTTERS.regularTPadding,//TODO
        // paddingBottom && GUTTERS.regularBPadding,//TODO
        horizantalPadding && GUTTERS.regularHPadding,
        {
          backgroundColor,
        },
        style,
      ]}
      {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MScreenContainer;
