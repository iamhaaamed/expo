
import React, { useEffect } from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, ScrollView, FlatList } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS, METRIC_SIZES } from 'constants/common';

import { MText, MButton, MSnackbar, MIcon } from 'components/common';
import { useMyRequestList } from 'hooks/Home';
import { GetData } from 'utils';
import { showMessage } from 'react-native-flash-message';
const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const InRoomService3 = createScreen(
  ({ route, navigation }) => {
    const { COMMON } = useTheme();
    const [sentRequest] = useState(route?.params?.items);
    const [userInfo, setUserInfo] = useState();
    const { data, isLoading, hasNextPage } = useMyRequestList({ userId: userInfo?.id });
    useEffect(() => {
      (async () => {
        // showSnackbar();
        let user = await GetData('USER_INFO');
        setUserInfo(user);
      })();
    }, []);
    const showSnackbar = () => {
      showMessage({
        message: 'We Got It .. Check And Send To Your Roommm',
        type: 'success',
        position: 'bottom',
        icon: 'right',
        // duration: 2000,
        floating: true,
        style: COMMON.SnackbarsuccessbottomRect352,
        titleStyle: COMMON.TextsSnackbarsuccessbottom351,
      });
    };
    const getDateString = (isoDate) => {
      if (isoDate.indexOf('T') > 0) {
        let datePart = isoDate.split('T')[0];
        let dateDetails = datePart.split('-');
        let timePart = isoDate.split('T')[1];
        let timeDetails = timePart.split(':');
        let timeStr = parseInt(timeDetails[0]) > 12 ?
          (parseInt(timeDetails[0]) - 12) + ':' + timeDetails[1] + ' PM'
          : (timeDetails[0] + ':' + timeDetails[1] + ' AM');
        return dateDetails[2] + Months[parseInt(dateDetails[1]) - 1] + '. ' + convertTime(timePart);
      }
      return isoDate;
    }
    const getItemOrderName = (type) => {
      switch (type) {
        case 'BADY_WASH':
          return 'Body wash';
        case 'SHAMPOO':
          return "Shampoo";
        case 'BODY_LOTION':
          return "Body lotion";
        case 'COMB':
          return 'Comb';
        case 'SHOWER_CAP':
          return "Shower Cap";
        case "SOAP":
          return "Soap";
        default:
          break;
      }
    }
    const convertTime = (isoTime) => {
      var hours = parseInt(isoTime.substring(0, 2), 10),
        minutes = isoTime.substring(3, 5),
        ampm = 'am';

      if (hours == 12) {
        ampm = 'pm';
      } else if (hours == 0) {
        hours = 12;
      } else if (hours > 12) {
        hours -= 12;
        ampm = 'pm';
      }

      return hours + ':' + minutes + ' ' + ampm;
    }
    return (

      <View style={styles.InRoomService3}>
        <ScrollView>
          <View style={COMMON.MainView}>
            <MText textStyle={COMMON.NormalTextBottomMargin} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  </MText>
            <MText textStyle={COMMON.TxtInRoomService3348} >Requests additional </MText>
            {/* Data from previous screen */}
            <FlatList
              data={sentRequest?.requestItems}
              renderItem={({ item }) => (
                <View style={COMMON.RowItemCenter}>
                  <MText textStyle={COMMON.TxtInRoomService3349} >{getItemOrderName(item.orderType) + ' : ' + item?.number} </MText>
                  <MText textStyle={COMMON.TxtInRoomService3349} >{getDateString(sentRequest?.createAt.toISOString())} </MText>
                </View>
              )}
            />
            {/* <FlatList
              data={data?.pages}
              onEndReached={hasNextPage}
              renderItem={({ item:mainItem,index:mainIndex })=>(
                <FlatList
                  data={mainItem?.requestItems}
                  onEndReached={hasNextPage}
                  renderItem={({ item }) => (
                    <View style={COMMON.RowItemCenter}>
                      <MText textStyle={COMMON.TxtInRoomService3349} >{getItemOrderName(item?.orderType) + ' : ' + item?.number} </MText>
                      <MText textStyle={COMMON.TxtInRoomService3349} >{getDateString(data.pages[mainIndex]?.createAt)} </MText>
                    </View>
                  )}
                />)}
            /> */}
          </View>
        </ScrollView>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={[COMMON.RowItemStart, COMMON.SnackbarsuccessbottomRect352, { padding: METRIC_SIZES.small }]}>
            <MText
              textStyle={[COMMON.TextsSnackbarsuccessbottom351, { fontSize: 18 }]}
            >We Got It .. Check And Send To Your Room</MText>
            <MIcon name='check' color={COLORS.Color703} size={24} />
          </View>
        </TouchableOpacity>
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
  InRoomService3: {
    backgroundColor: COLORS.Color304,
    height: '100%',

  }
});
export default InRoomService3;

