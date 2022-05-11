import React, { useState } from 'react';
import { createScreen } from 'components/elements';
import { MButton } from 'components/common';
import { View, ScrollView } from 'react-native';
import MVideo from 'components/common/MVideo';
import MVideoPicker from 'components/common/MVideoPicker';

const MVideoPickerShowcase = createScreen(
  () => {
    const [videos, setVideos] = useState([]);
    const handleImage = (response) => {
      let file = response?.assets?.[0];
      if (!!file) {
        setVideos([...videos, file]);
      }
    };
    return (
      <>
        <ScrollView style={{ marginBottom: 90 }}>
          {videos.map((item, index) => (
            <MVideo
              key={index}
              source={{ uri: item.uri }}
              style={{ borderBottomWidth: 2, borderColor: 'black' }}
            />
          ))}
        </ScrollView>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
          }}>
          <MVideoPicker getImage={handleImage}>
            {({ chooseFile, captureImage }) => {
              return (
                <View>
                  <MButton
                    onPress={() => captureImage()}
                    text="Launch Camera for Video"
                  />
                  <MButton onPress={() => chooseFile()} text="Choose Video" />
                </View>
              );
            }}
          </MVideoPicker>
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

export default MVideoPickerShowcase;
