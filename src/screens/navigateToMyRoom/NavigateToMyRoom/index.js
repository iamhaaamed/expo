
import React from 'react';
import { useRef } from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet,ScrollView } from 'react-native';
import { View,Image, Text, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { scale, verticalScale,height } from 'utils';
import LinearGradient from 'react-native-linear-gradient';
import {DateTimePickerMod,}from 'components/common/MDateTimePicker';
import {DrawerItem,DrawerItemList,DrawerContentScrollView,DrawerToggleButton,}from '@react-navigation/drawer';
 
                       import {MIcon,MText,MTouchable,MButton,MInput,MImageBackground,MImage,MStatusBar,MSwitch,MCheckBox,MFlatList,MChip,MDropDown,MOnboarding,MDateTimePicker,MImagePicker,MLoading,MModal,MTab,MAccordion,MSnackbar,MSlider} from 'components/common';
import {SectionTop} from 'components/Sections';
            const NavigateToMyRoom = createScreen(
              () => {
                const { LAYOUT, GUTTERS, TYPOGRAPHY, IMAGES ,COMMON,CONSTANTS } = useTheme();
                
                                         const clickCounter = useRef(0);
                                            const onPress = () => {
                                              console.log(`Clicked! ${clickCounter.current}`);
                                              clickCounter.current = clickCounter.current + 1;
    };









                return (

             <View style={styles.NavigateToMyRoom}>
<ScrollView>

<SectionTop style ={COMMON.EleNavigateToMyRoom495} />
<MButton onPress={onPress} style ={COMMON.buttonRect497} containerStyle={COMMON.button496} 
 text="turn to right and you can see the stairs" textStyle ={COMMON.Textsbutton498} 
 color={COLORS.Color304} 
/>
<MButton onPress={onPress} style ={COMMON.buttonRect500} containerStyle={COMMON.button499} 
 text="with elavator" textStyle ={COMMON.Textsbutton501} 
 color={COLORS.Color304} 
/>
<MImage imageSource={IMAGES.image2905} style ={COMMON.Image502}  customWidth={scale(344)} customHeight ={scale(505)} />

</ScrollView>
</View>


              );
            },
              {
                scrollView:false,
                paddingBottom: false,
                paddingTop: false,
            },
            );
            const styles = StyleSheet.create({
            NavigateToMyRoom:{
            backgroundColor:COLORS.Color304,
height:'100%',

                                }
            });
            export default NavigateToMyRoom;
            
