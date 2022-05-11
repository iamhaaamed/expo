import { MInput, MText } from 'components/common';
import { createScreen } from 'components/elements';
import useTheme from 'hooks/useTheme';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import Color from 'color';

const SkeletonShowcaseScreen = createScreen(
  () => {
    const { TYPOGRAPHY, LAYOUT, COLORS } = useTheme();
    const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //   const myTimeout = setTimeout(
    //     () => setLoading((prevValue) => !prevValue),
    //     6000,
    //   );
    //   return () => clearTimeout(myTimeout);
    // }, [loading]);
    return (
      <View>
        <View style={s.switchContainer}>
          <MText>Loading</MText>
          <Switch value={loading} onValueChange={setLoading} />
        </View>
        <MText
          textStyle={TYPOGRAPHY.titleLarge}
          loading={loading}
          skeletonOptions={{ numberOfLines: 1 }}>
          Title Large
        </MText>
        <MText
          textStyle={TYPOGRAPHY.textRegular}
          loading={loading}
          skeletonOptions={{
            numberOfLines: 5,
            fullWidth: false,
          }}>
          Text regular: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Pretium fusce id velit ut tortor pretium viverra. Curabitur vitae nunc
          sed velit dignissim sodales.
        </MText>
        <MInput
          placeholder="First Name"
          loading={loading}
          skeletonOptions={{
            highlightColor: '#b3e5fc',
          }}
        />
        <MInput
          placeholder="Description"
          loading={loading}
          textArea
          multiline
          height={150}
        />
      </View>
    );
  },
  {
    scrollView: true,
    horizantalPadding: true,
  },
);

const s = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 16,
  },
});

export default SkeletonShowcaseScreen;
