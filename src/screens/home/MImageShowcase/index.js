import React from 'react';
import { MButton, MCheckBox, MText } from 'components/common';
import useTheme from 'hooks/useTheme';
import { View, StyleSheet } from 'react-native';
import { createScreen } from 'components/elements';
import MImage from 'components/common/MImage';

const MImageShowcase = createScreen(
  ({ navigation }) => {
    const { LAYOUT, GUTTERS, IMAGES } = useTheme();

    return (
      <View style={LAYOUT.fill}>
        <View
          style={[
            LAYOUT.colCenter,
            GUTTERS.regularHPadding,
            GUTTERS.regularVPadding,
          ]}>
          <MButton
            onPress={() =>
              navigation.navigate('FullBackgroundImage', {
                imageUrl:
                  'https://liverpoolcore.com/wp-content/uploads/2019/08/liverpool_fc_by_hokage455_dd4mmqt-pre.jpg',
                title: 'Liverpool',
                hideStatusBar: true,
                resizeMode: 'stretch',
              })
            }
            text="Full background image(external image) no StatusBar"
            color="#1492E6"
            style={{
              borderRadius: 4,
            }}
          />
          <MButton
            onPress={() =>
              navigation.navigate('FullBackgroundImage', {
                imageUrl:
                  'https://w0.peakpx.com/wallpaper/148/564/HD-wallpaper-liverpool-champions-league-germany-jurgen-klopp.jpg',
                hideStatusBar: false,
                resizeMode: 'stretch',
              })
            }
            text="Full background image(external image) with StatusBar"
            color="#1492E6"
            style={{
              borderRadius: 4,
            }}
          />
          <MButton
            onPress={() =>
              navigation.navigate('FullBackgroundImage', {
                imageSource: IMAGES.background,
                title: 'Blue Background',
                hideStatusBar: true,
                resizeMode: 'stretch',
              })
            }
            text="Full background image(local image) no StatusBar"
            color="#1492E6"
            style={{
              borderRadius: 4,
            }}
          />
          <MButton
            onPress={() =>
              navigation.navigate('FullBackgroundImage', {
                imageSource: IMAGES.circles,
                backgroundColor: '#4A48BA',
                title: 'Circles',
                hideStatusBar: true,
                resizeMode: 'stretch',
              })
            }
            text="Full background image(local image) no StatusBar"
            color="#1492E6"
            style={{
              borderRadius: 4,
            }}
          />
          <View style={styles.imageContainer}>
            <MImage
              imageSource={IMAGES.hamburger}
              style={{ resizeMode: 'cover', width: 390, height: 100 }}
            />
          </View>
          <View style={styles.imageContainer}>
            <MImage
              imageSource={IMAGES.contact}
              style={{ resizeMode: 'contain', width: 300, height: 120 }}
            />
          </View>
          <View style={styles.imageContainer}>
            <MImage
              imageSource={IMAGES.klopp}
              showType="custom"
              // customWidth={800}
              // customHeight={300}
              // blurRadius={0}
              // borderRadius={20}
              style={{
                resizeMode: 'contain',
                width: 800,
                height: 300,
                borderRadius: 20,
                blurRadius: 0,
              }}
            />
          </View>
          <View style={styles.imageContainer}>
            <MImage
              imageSource={IMAGES.avatar}
              style={{
                resizeMode: 'cover',
                width: 200,
                height: 200,
                borderRadius: 100,
              }}
            />
          </View>
        </View>
      </View>
    );
  },
  {
    scrollView: true,
    paddingBottom: false,
    paddingTop: false,
  },
);
const styles = StyleSheet.create({
  imageContainer: { marginTop: 10 },
});
export default MImageShowcase;
