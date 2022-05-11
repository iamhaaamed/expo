import React, { useEffect } from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import LottieView from 'lottie-react-native';

/**
 * @typedef {{size: 'small || large' }}
 * */

const MLoading = ({ size, color, animationProps }) => {
  let animation = React.createRef();

  useEffect(() => {
    !!animationProps && animation.current.play();
  }, []);
  return (
    <View style={styles.container}>
      {!!animationProps ? (
        <View>
          <LottieView
            ref={animation}
            loop={!!animationProps.loop}
            style={{
              width: animationProps.width,
              height: animationProps.height,
            }}
            source={animationProps.source}
          />
        </View>
      ) : (
        <View>
          <ActivityIndicator size={size} color={color} />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
  },
});

export default MLoading;
