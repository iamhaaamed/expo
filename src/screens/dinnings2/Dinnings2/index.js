
import React, { useEffect } from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS, METRIC_SIZES } from 'constants/common';
import DatePicker from 'react-native-date-picker'
import { MText, MButton } from 'components/common';
import SectionBottomDinning2 from 'components/Sections/SectionBottomDinning2';
import useDinningOrders from 'store/setDinningOrders';
import { convertTimeToAmPm, dayMonthFullYear } from 'utils';
const Dinnings2 = createScreen(
  (props) => {
    const { LAYOUT, GUTTERS, TYPOGRAPHY, IMAGES, COMMON, CONSTANTS } = useTheme();
    const [date, setDate] = useState(new Date());
    const setOrderDetails = useDinningOrders((state) => state.setOrderDetails);
    const orderDetails = useDinningOrders((state) => state.orderDetails);
    useEffect(() => {
      let temp = orderDetails;
      temp.time = date;
      setOrderDetails(temp);
    }, [date])
    return (

      <View style={styles.Dinnings2}>
        <ScrollView>
          <View style={COMMON.MainView}>
            <MText
              textStyle={COMMON.NormalText}
              containerStyle={{ marginTop: METRIC_SIZES.large }}
            >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  </MText>

          </View>
          {/* <ExpandItem text={"Deliver to room . Today "+ getTimeStr(date.toTimeString())}
            iconRight={{ color: 'black' }}>
            <SectionBottomDinning2 navigation={props.navigation}/>
            <View style={[COMMON.RowItemStart, { marginTop: METRIC_SIZES.large }]}>
              <MText
                containerStyle={{ alignSelf: 'center', flex: 1 }}
                textStyle={[{ textAlign: 'center' }, COMMON.Title]}>{date.toISOString().substring(0, 10)}</MText>
              <MText textStyle={COMMON.Title}>{getTimeStr(date.toTimeString())}</MText>
            </View>
            <View style={styles.calender}>
              <DatePicker
                fadeToColor={'none'}
                date={date}
                onDateChange={(value) => setDate(value)}
              />
            </View>
          </ExpandItem> */}

          <SectionBottomDinning2
            navigation={props.navigation}
            imageSource={props?.route?.params?.currentHotel?.photoUrl}
            text={"Deliver to room . Today " + convertTimeToAmPm(date.toTimeString())}
            currentHotel={props?.route?.params?.currentHotel}
            iconRight={{ color: 'black' }}
          >
            <View style={[COMMON.RowItemStart, { marginTop: METRIC_SIZES.large, paddingHorizontal: METRIC_SIZES.small }]}>
              <MText
                containerStyle={{ alignSelf: 'center', flex: 1 }}
                textStyle={[{ textAlign: 'center' }, COMMON.NormalText]}>{dayMonthFullYear(date.toISOString().substring(0, 10))}</MText>
              <MText textStyle={COMMON.NormalText}>{convertTimeToAmPm(date.toTimeString())}</MText>
            </View>
            <View style={styles.calender}>
              <DatePicker
                fadeToColor={'none'}
                date={date}
                onDateChange={(value) => setDate(value)}
              />
            </View>
          </SectionBottomDinning2>
        </ScrollView>
      </View>


    );
  },
  {
    scrollView: false,
    paddingBottom: false,
    paddingTop: false,
  },
);
const styles = StyleSheet.create({
  Dinnings2: {
    backgroundColor: COLORS.Color304,
    height: '100%',

  },
  calender: {
    backgroundColor: COLORS.borderColor
  }
});
export default Dinnings2;

