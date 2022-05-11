import React, { useState } from 'react';
import { createScreen } from 'components/elements';
import MImagePicker from 'components/common/MImagePicker';
import { MButton, MFlatList, MImage } from 'components/common';
import { StyleSheet, View } from 'react-native';
import {
  ImagePickerShowCaseEight,
  ImagePickerShowCaseEleven,
  ImagePickerShowCaseFive,
  ImagePickerShowCaseFour,
  ImagePickerShowCaseNine,
  ImagePickerShowCaseOne,
  ImagePickerShowCaseSeven,
  ImagePickerShowCaseSix,
  ImagePickerShowCaseTen,
  ImagePickerShowCaseThree,
  ImagePickerShowCaseTwelve,
  ImagePickerShowCaseTwo,
} from './imagePicker.showcase';

import placeholder from 'assets/images/placeholder.png';

const MImagePickerShowcase = createScreen(
  () => {
    const [imageSource, setImageSource] = useState(placeholder);
    const [images, setImages] = useState([]);
    const uploadPhoto = (response) => {
      let file = response?.assets?.[0];
      if (!!file) setImageSource(file);
    };
    const handleImage = (response) => {
      let file = response?.assets?.[0];
      if (!!file) {
        setImages([...images, file]);
      }
    };
    return (
      <>
        <View
          style={{
            flex: 1,
            paddingBottom: 90,
            paddingHorizontal: 15,
          }}>
          <MFlatList
            data={images}
            keyExtractorName="fileName"
            columnsCount={2}
            renderComponent={({ item }) => {
              return (
                <View>
                  <MImage
                    imageSource={{
                      uri: item.uri,
                    }}
                    style={{
                      width: 170,
                      height: 170,
                      resizeMode: 'cover',
                      borderRadius: 10,
                      margin: 5,
                    }}
                  />
                </View>
              );
            }}
          />
        </View>
        <View style={styles.sc_3_photoView}>
          <MImage imageSource={imageSource} style={styles.image} />
        </View>
        <ImagePickerShowCaseOne handleImage={handleImage} />
        <ImagePickerShowCaseTwo handleImage={handleImage} />
        <ImagePickerShowCaseThree handleImage={uploadPhoto} />
        <ImagePickerShowCaseFour handleImage={uploadPhoto} />
        <ImagePickerShowCaseFive handleImage={handleImage} />
        <ImagePickerShowCaseSix handleImage={handleImage} />
        <ImagePickerShowCaseSeven handleImage={handleImage} />
        <ImagePickerShowCaseEight handleImage={handleImage} />
        <ImagePickerShowCaseNine handleImage={handleImage} />
        <ImagePickerShowCaseTen handleImage={handleImage} />
        <ImagePickerShowCaseEleven handleImage={handleImage} />
        <ImagePickerShowCaseTwelve handleImage={handleImage} />
      </>
    );
  },
  {
    scrollView: true,
    paddingBottom: true,
    paddingTop: false,
  },
);

const styles = StyleSheet.create({
  sc_3_photoView: {
    width: '100%',
    aspectRatio: 2,
    backgroundColor: '#e5e5e5',
    marginBottom: 50,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default MImagePickerShowcase;
