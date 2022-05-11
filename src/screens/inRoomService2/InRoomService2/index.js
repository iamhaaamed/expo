
import React from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';

import { MIcon, MText, MTouchable, MButton, MInput, MImageBackground, MImage, MStatusBar, MSwitch, MCheckBox, MFlatList, MChip, MDropDown, MOnboarding, MDateTimePicker, MImagePicker, MLoading, MModal, MTab, MAccordion, MSnackbar, MSlider, Container } from 'components/common';
import { SectionTop } from 'components/Sections';
import CounterItem from 'components/elements/CounterItem';
import { showMessage } from 'react-native-flash-message';
import { createServiceRequest } from 'hooks/Home';
import { GetData } from 'utils';
const services = ['SOAP', 'SHAMPOO', 'BODY_LOTION', 'BADY_WASH', 'COMB', 'SHOWER_CAP'];
const InRoomService2 = createScreen(
  (props) => {
    const { COMMON } = useTheme();
    const [counters, setCounters] = useState([0, 0, 0, 0, 0, 0]);
    const { mutate, isLoading } = createServiceRequest();
    const onCounterChange = (index, value) => {
      let tempCounter = [...counters];
      tempCounter[index] = value;
      setCounters(tempCounter);
    }
    const onPress = async () => {
      if (counters.every((val, i, arr) => val === 0))
        showMessage({ message: "Please add at least one item", type: 'warning' });
      else {
        const userInfo = await GetData('USER_INFO');
        let array = Array();
        for (let i = 0; i < services.length; i++) {
          if (counters[i] != 0) {
            array.push({ number: counters[i], orderType: services[i] })
          }
        }
        console.log("final item to send" + JSON.stringify(props));
        let request = {
          createAt: new Date(),
          forAt: new Date(),
          userId: userInfo?.id,
          hotelId: props?.route?.params?.hotelId,
          requestItems: array,
          processingStatuse: 'PENDING'
        }
        mutate({requestInput:request},{
          onSuccess:(data)=>{
            if(data?.booking_createRquest?.status==='SUCCESS')
              props.navigation.replace("InRoomService3",{items:request})
            else
            showMessage({ message: "Failed To send Request", type: 'warning' });
          }
        })
      }
    };


    return (

      <Container style={styles.InRoomService2} loadingOnPage={isLoading}>
        <ScrollView>
          <View style={COMMON.MainView}>
            <CounterItem text={'Soap'} getCounter={(value) => onCounterChange(0, value)} />
            <CounterItem text={'Shampoo'} getCounter={(value) => onCounterChange(1, value)} />
            <CounterItem text={'Body Lotion'} getCounter={(value) => onCounterChange(2, value)} />
            <CounterItem text={'Body Wash'} getCounter={(value) => onCounterChange(3, value)} />
            <CounterItem text={'Comb'} getCounter={(value) => onCounterChange(4, value)} />
            <CounterItem text={'Shower Cap'} getCounter={(value) => onCounterChange(5, value)} />
          </View>
        </ScrollView>
        <View style={COMMON.MainView}>
          <MButton onPress={onPress} style={[COMMON.ButtonRectColor988]} containerStyle={[COMMON.ButtonRectColor988]}
            text="Submit" textStyle={COMMON.TextsButton}
            color={COLORS.Color988}
          />
        </View>
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
  InRoomService2: {
    backgroundColor: COLORS.Color304,
    height: '100%',

  }
});
export default InRoomService2;

