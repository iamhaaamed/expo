import { Container, MButton, MImage, MText } from 'components/common';
import { createScreen } from 'components/elements';
import { SectionTop } from 'components/Sections';
import { COLORS, DEVICE_WIDTH, METRIC_SIZES } from 'constants/common';
import useTheme from 'hooks/useTheme';
import React, { useEffect, useRef, useState } from 'react';
import { Linking, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { scale } from 'utils';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { showMessage } from 'react-native-flash-message';
import { useNavigateToRoom } from 'hooks/Home';
import GraphQlClient from 'GraphQl/GraphQlClient';


const NavigateToMyRoom2 = createScreen(
  ({ route }) => {
    const {
      LAYOUT,
      GUTTERS,
      TYPOGRAPHY,
      IMAGES,
      COMMON,
      CONSTANTS,
    } = useTheme();

    const clickCounter = useRef(0);
    const [scannedQR, setScannedQR] = useState(null);
    //GraphQlClient.setHeader("Authorization","Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImM2NzNkM2M5NDdhZWIxOGI2NGU1OGUzZWRlMzI1NWZiZjU3NTI4NWIiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiWmFocmEgVG9maXFpIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2Fwcy1nZW51ZXNob3RlbC1kZXYiLCJhdWQiOiJhcHMtZ2VudWVzaG90ZWwtZGV2IiwiYXV0aF90aW1lIjoxNjUwODMzMTk3LCJ1c2VyX2lkIjoiSFpLQmJ2RmFEUU5ieW03bzBMcER1akpzdFFvMSIsInN1YiI6IkhaS0JidkZhRFFOYnltN28wTHBEdWpKc3RRbzEiLCJpYXQiOjE2NTA4MzMxOTcsImV4cCI6MTY1MDgzNjc5NywiZW1haWwiOiJ6YWhyYS50b2ZpcWlAYXBzYWF6LmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTEwMjEwMDIyNzM4NDczMjAyNzgxIl0sImVtYWlsIjpbInphaHJhLnRvZmlxaUBhcHNhYXouY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.KXf3I3pROwWHb939EjZpkRjHRK6wU6LNY9amPmdHJxKpGZQjdhnLzWdxy9eo0MYLUsAsh8mjm8NLer7qFtfV-MYPAGh6kX6HaYvHh7dkDkPgBApCTtR8extdSzifQGvSqfJx9rCGPhN1A1nYNBEslPALkLby8ZUpiN1jd0J_zI9GPz2Rkx8gD5oNVYg7pxmtr5uVD0d4WdrH6hkM89Sb8Yue4BmNU8QPNvOdHXdPyyRRO7w7QgrZo9AJXcf-acBfG7ZkU6wVU8NQCoO22GdW8r2ZFa0BwTGMNMSnyj4jeKxkvJJ0XpgwS_QlARzF1dG3hVh8KZ325k7mRVJPpRYWtA")
    const { isLoading, data, error, refetch } = useNavigateToRoom({ position: scannedQR, roomId: route?.params?.roomId });
    console.log("roomId is " + JSON.stringify(route?.params))
    useEffect(() => {
      refetch();
    }, [scannedQR]);
    const onPress = () => {
      console.log(`Clicked! ${clickCounter.current}`);
      clickCounter.current = clickCounter.current + 1;
    };
    const onSuccess = (e) => {
      console.log("ee is " + JSON.stringify(e));
      showMessage({ message: "QR code scanned", type: "success" });
      if (e?.data) {
        try {
          let qrJson = JSON.parse(e.data);

          if (qrJson?.line && qrJson?.subLine && qrJson?.floor && qrJson?.roomNumber) {
            setScannedQR(qrJson)
            console.log("its here")
          }
          else showMessage({ message: "Invalid QR code" + JSON.stringify(qrJson), type: "danger" });
        } catch (e) {
          showMessage({ message: "Invalid QR codeeee", type: "danger" });
        }
      }
    };
    return (
      <Container loadingOnPage={isLoading} style={styles.NavigateToMyRoom2}>
        <ScrollView>
          {data?.hotel_navigateToRoom?.result &&
            <MButton
              onPress={onPress}
              style={[
                COMMON.buttonRect643,
                {
                  marginLeft: '5%',
                },
              ]}
              containerStyle={[COMMON.button642]}
              text={data?.hotel_navigateToRoom?.result}
              textStyle={COMMON.Textsbutton644}
              color={COLORS.Color304}
              iconRight={{
                name: 'arrow-right-alt',
                color: 'black',
                size: scale(25),
              }}
            />
          }
          <MButton
            onPress={onPress}
            style={[COMMON.buttonRect646, { marginLeft: '5%' }]}
            containerStyle={COMMON.button645}
            text="with elavator"
            textStyle={COMMON.Textsbutton647}
            color={COLORS.Color304}
            iconRight={{
              name: 'arrow-right-alt',
              color: 'black',
              size: scale(25),
            }}
          />
          {/* <MImage
            imageSource={IMAGES.image4662}
            style={COMMON.Image648}
            customWidth={scale(343)}
            customHeight={scale(295)}
          /> */}
          {/* <View style={{ width: 100, height: 100 }}> */}
          <MText textStyle={[COMMON.NormalText,COMMON.MainView,{alignSelf: 'center'}]}>Please scan the barcode to get help</MText>
          <QRCodeScanner
            onRead={onSuccess}
            containerStyle={styles.containerStyle}
            cameraStyle={styles.cameraStyle}
            flashMode={'off'}
            showMarker
            markerStyle={styles.markerStyle}
            reactivate
            reactivateTimeout={3000}
            cameraProps={{ ratio: "1:1" }}
          />
          {/* </View> */}
        </ScrollView>
      </Container>
    );
  },
  {
    scrollView: false,
    paddingBottom: false,
    paddingTop: false,
  },
);
const styles = StyleSheet.create({
  NavigateToMyRoom2: {
    backgroundColor: COLORS.Color304,
    height: '100%',
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  },
  markerStyle: {
    borderRadius: 20,
    width: DEVICE_WIDTH * 0.7,
    height: DEVICE_WIDTH * 0.7,
  },
  cameraStyle: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    borderWidth: 2,
  },
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
});
export default NavigateToMyRoom2;
