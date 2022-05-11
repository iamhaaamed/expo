import React from 'react';
import { View } from 'react-native';
import { createScreen } from 'components/elements';
import MLoading from 'components/common/MLoading';
import useTheme from 'hooks/useTheme';

const MLoadingShowcase = createScreen(
  () => {
    const { IMAGES } = useTheme();
    return (
      <>
        <View>
          <MLoading size="large" color="red" />
          <MLoading size="small" color="blue" />
          <MLoading size="large" color="green" />
          {/* <MLoading
            animationProps={{
              width: 200,
              height: 200,
              loop: true,
              source: IMAGES.sample1,
            }}
          /> */}
          {/* <MLoading
            animationProps={{
              width: 200,
              height: 200,
              loop: true,
              source: IMAGES.sample2,
            }}
          /> */}
          <MLoading
            animationProps={{
              width: 200,
              height: 200,
              loop: true,
              source: IMAGES.sample3,
            }}
          />
          {/* <MLoading
            animationProps={{
              width: 200,
              height: 200,
              loop: true,
              source: IMAGES.sample4,
            }}
          /> */}
        </View>
      </>
    );
  },
  {
    scrollView: false,
    paddingBottom: false,
    paddingTop: false,
  },
);

export default MLoadingShowcase;
