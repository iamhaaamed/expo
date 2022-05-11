import React from 'react';
import { MImage, MText, MButton } from 'components/common';
import { View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { scale } from 'utils';

const onboardingData = (images) => {
  const onBoarding0 = {
    nextButton: (
      <MText textStyle={{ fontSize: 18, fontWeight: 'bold' }}>Next</MText>
    ),
    nextButtonStyle: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 50,
      alignItems: 'center',
    },
    showsPagination: false,
    slides: [
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MImage
          imageSource={images.onboarding1}
          style={{
            width: 300,
            height: 300,
            resizeMode: 'contain',
          }}
        />
        <MText
          textStyle={{ fontSize: 18, fontWeight: 'bold' }}
          containerStyle={{ marginVertical: 10 }}>
          Choose From Our Menu 1
        </MText>
        <MText
          textStyle={{ textAlign: 'center', fontSize: 16 }}
          containerStyle={{ width: 300 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </MText>
      </View>,
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MImage
          imageSource={images.onboarding2}
          style={{
            width: 300,
            height: 300,
            resizeMode: 'contain',
          }}
        />
        <MText
          textStyle={{ fontSize: 18, fontWeight: 'bold' }}
          containerStyle={{ marginVertical: 10 }}>
          Choose From Our Menu 2
        </MText>
        <MText
          textStyle={{ textAlign: 'center', fontSize: 16 }}
          containerStyle={{ width: 300 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </MText>
      </View>,
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MImage
          imageSource={images.onboarding3}
          style={{
            width: 300,
            height: 300,
            resizeMode: 'contain',
          }}
        />
        <MText
          textStyle={{ fontSize: 18, fontWeight: 'bold' }}
          containerStyle={{ marginVertical: 10 }}>
          Choose From Our Menu 3
        </MText>
        <MText
          textStyle={{ textAlign: 'center', fontSize: 16 }}
          containerStyle={{ width: 300 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </MText>
      </View>,
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MImage
          imageSource={images.contact}
          style={{
            width: 300,
            height: 300,
            resizeMode: 'contain',
          }}
        />
        <MText
          textStyle={{ fontSize: 18, fontWeight: 'bold' }}
          containerStyle={{ marginVertical: 10 }}>
          Choose From Our Menu 4
        </MText>
        <MText
          textStyle={{ textAlign: 'center', fontSize: 16 }}
          containerStyle={{ width: 300 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </MText>
      </View>,
    ],
  };
  const onBoarding1 = {
    nextButton: <MButton text="Next" />,
    previousButton: <MButton text="Back" />,
    nextButtonStyle: { position: 'absolute', bottom: 0, right: 0 },
    previousButtonStyle: {
      position: 'absolute',
      bottom: 0,
      left: 0,
    },
    showsPagination: true,
    slides: [
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MImage
          imageSource={images.onboarding1}
          style={{ width: 300, height: 300, resizeMode: 'contain' }}
        />
        <MText
          textStyle={{ fontSize: 18, fontWeight: 'bold' }}
          containerStyle={{ marginVertical: 10 }}>
          Choose From Our Menu 1
        </MText>
        <MText
          textStyle={{ textAlign: 'center', fontSize: 16 }}
          containerStyle={{ width: 300 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </MText>
      </View>,
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MImage
          imageSource={images.onboarding2}
          style={{ width: 300, height: 300, resizeMode: 'contain' }}
        />
        <MText
          textStyle={{ fontSize: 18, fontWeight: 'bold' }}
          containerStyle={{ marginVertical: 10 }}>
          Choose From Our Menu 2
        </MText>
        <MText
          textStyle={{ textAlign: 'center', fontSize: 16 }}
          containerStyle={{ width: 300 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </MText>
      </View>,
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MImage
          imageSource={images.onboarding3}
          style={{ width: 300, height: 300, resizeMode: 'contain' }}
        />
        <MText
          textStyle={{ fontSize: 18, fontWeight: 'bold' }}
          containerStyle={{ marginVertical: 10 }}>
          Choose From Our Menu 3
        </MText>
        <MText
          textStyle={{ textAlign: 'center', fontSize: 16 }}
          containerStyle={{ width: 300 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </MText>
      </View>,
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MImage
          imageSource={images.contact}
          style={{ width: 300, height: 300, resizeMode: 'contain' }}
        />
        <MText
          textStyle={{ fontSize: 18, fontWeight: 'bold' }}
          containerStyle={{ marginVertical: 10 }}>
          Choose From Our Menu 4
        </MText>
        <MText
          textStyle={{ textAlign: 'center', fontSize: 16 }}
          containerStyle={{ width: 300 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </MText>
      </View>,
    ],
  };
  const onBoarding2 = {
    hideStatusBar: true,
    nextButton: <MButton text="Next" />,
    nextButtonStyle: {
      marginBottom: 30,
    },
    startButton: <MButton text="Get Started" />,
    startButtonStyle: {
      marginBottom: 30,
    },
    showsPagination: true,
    slides: [
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MText textStyle={{ fontSize: 18, fontWeight: 'bold' }}>
          Choose From Our Menu 1
        </MText>
        <MText
          textStyle={{ textAlign: 'center', fontSize: 16 }}
          containerStyle={{ width: 300, marginVertical: 10 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </MText>
        <MImage
          imageSource={images.onboarding1}
          style={{ width: 300, height: 300, resizeMode: 'contain' }}
        />
      </View>,
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MImage
          imageSource={images.onboarding2}
          style={{ width: 300, height: 300, resizeMode: 'contain' }}
        />
        <MText
          textStyle={{ fontSize: 18, fontWeight: 'bold' }}
          containerStyle={{ marginVertical: 10 }}>
          Choose From Our Menu 2
        </MText>
        <MText
          textStyle={{ textAlign: 'center', fontSize: 16 }}
          containerStyle={{ width: 300 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </MText>
      </View>,
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MImage
          imageSource={images.onboarding3}
          style={{ width: 300, height: 300, resizeMode: 'contain' }}
        />
        <MText
          textStyle={{ fontSize: 18, fontWeight: 'bold' }}
          containerStyle={{ marginVertical: 10 }}>
          Choose From Our Menu 3
        </MText>
        <MText
          textStyle={{ textAlign: 'center', fontSize: 16 }}
          containerStyle={{ width: 300 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </MText>
      </View>,
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MImage
          imageSource={images.contact}
          style={{ width: 300, height: 300, resizeMode: 'contain' }}
        />
        <MText
          textStyle={{ fontSize: 18, fontWeight: 'bold' }}
          containerStyle={{ marginVertical: 10 }}>
          Choose From Our Menu 4
        </MText>
        <MText
          textStyle={{ textAlign: 'center', fontSize: 16 }}
          containerStyle={{ width: 300 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </MText>
      </View>,
    ],
  };
  const onBoarding3 = {
    nextButton: (
      <View style={{ flexDirection: 'row', marginBottom: 6 }}>
        <MButton
          color="#1492E6"
          style={{
            borderRadius: 100,
            width: scale(50),
            height: scale(50),
            paddingLeft: 3,
            paddingRight: 0,
            justifyContent: 'center',
          }}
          iconLeft={{
            name: 'chevron-right',
            Component: MaterialCommunityIcons,
            size: 32,
          }}
        />
      </View>
    ),
    nextButtonStyle: {
      position: 'absolute',
      right: 20,
      bottom: 30,
      alignItems: 'center',
    },
    skipButton: (
      <MText textStyle={{ fontSize: 16, color: '#1492E6' }}>Skip</MText>
    ),
    skipButtonStyle: {
      position: 'absolute',
      left: 22,
      bottom: 50,
      alignItems: 'center',
    },
    // startButton: (
    //   <MButton
    //     text="Let's Get Started"
    //     textStyle={{ color: 'white' }}
    //     color="#6965FB"
    //     style={{
    //       borderRadius: 100,
    //       paddingHorizontal: 18,
    //       paddingVertical: 12,
    //       marginHorizontal: 20,
    //     }}
    //   />
    // ),
    startButtonStyle: {
      marginBottom: 30,
    },
    showsPagination: false,
    slides: [
      <View
        style={{
          flex: 1,
          marginLeft: 25,
          justifyContent: 'center',
          // alignItems: 'center',
        }}>
        <MImage
          imageSource={images.onboarding1}
          style={{
            width: 300,
            height: 300,
            resizeMode: 'contain',
            marginTop: 25,
            marginBottom: 15,
          }}
        />
        <MText
          textStyle={{
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'left',
          }}>
          Slide 1
        </MText>
        <MText
          textStyle={{ textAlign: 'left', fontSize: 16 }}
          containerStyle={{ width: 300, marginVertical: 10 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </MText>
      </View>,
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MImage
          imageSource={images.onboarding2}
          style={{ width: 300, height: 300, resizeMode: 'contain' }}
        />
        <MText
          textStyle={{ fontSize: 18, fontWeight: 'bold' }}
          containerStyle={{ marginVertical: 10 }}>
          Slide 2
        </MText>
        <MText
          textStyle={{ textAlign: 'center', fontSize: 16 }}
          containerStyle={{ width: 300 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </MText>
      </View>,
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MImage
          imageSource={images.onboarding3}
          style={{ width: 300, height: 300, resizeMode: 'contain' }}
        />
        <MText
          textStyle={{ fontSize: 18, fontWeight: 'bold' }}
          containerStyle={{ marginVertical: 10 }}>
          Slide 3
        </MText>
        <MText
          textStyle={{ textAlign: 'center', fontSize: 16 }}
          containerStyle={{ width: 300 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </MText>
      </View>,
    ],
  };
  return [onBoarding0, onBoarding1, onBoarding2, onBoarding3];
};
export default onboardingData;
