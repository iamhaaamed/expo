import { MText } from 'components/common';
import { createScreen } from 'components/elements';
import useTheme from 'hooks/useTheme';
import React from 'react';
import { View } from 'react-native';

const ExploreScreen = createScreen(() => {
  const { LAYOUT } = useTheme();
  return (
    <View style={[LAYOUT.fill, LAYOUT.center]}>
      <MText>Explore Screen</MText>
    </View>
  );
}, {});

export default ExploreScreen;
