import { MText } from 'components/common';
import MImageBackground from 'components/common/MImageBackground';
import { createScreen } from 'components/elements';
import useTheme from 'hooks/useTheme';
import React from 'react';
import { View, StyleSheet } from 'react-native';

const FullBackground = createScreen(({ route }) => {
  const { LAYOUT } = useTheme();
  const {
    imageSource,
    imageUrl,
    backgroundColor,
    hideStatusBar,
    title,
    resizeMode,
  } = route.params;
  return (
    <MImageBackground
      imageSource={imageSource}
      imageUrl={imageUrl}
      backgroundColor={backgroundColor}
      hideStatusBar={hideStatusBar}
      resizeMode={resizeMode}>
      <View style={[LAYOUT.fill, LAYOUT.center]}>
        <MText containerStyle={styles.container} textStyle={styles.title}>
          {title}
        </MText>
      </View>
    </MImageBackground>
  );
}, {});
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 15,
  },
  title: {
    fontSize: 40,
    color: 'white',
  },
});
export default FullBackground;
