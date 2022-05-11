import React from 'react';
                                    import { View,Text,TouchableOpacity , TouchableWithoutFeedback, StyleSheet,Image} from 'react-native';
                                    import { scale, verticalScale,height } from 'utils';
                                    import { useState } from 'react';
                                  import useTheme from 'hooks/useTheme';
                                  import { COLORS } from 'constants/common'
                                  import { useRef } from 'react';
                                  import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
                                  import LinearGradient from 'react-native-linear-gradient';
                                  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


                                       import {MIcon,MText,MTouchable,MButton,MInput,MImageBackground,MImage,MStatusBar,MSwitch,MCheckBox,MFlatList,MChip,MDropDown,MOnboarding,MDateTimePicker,MImagePicker,MLoading,MModal,MTab,MAccordion,MSnackbar,MSlider} from 'components/common';
                const SectionTop04 = (props) => {
                const {
                style,
                } = props;
                const { LAYOUT, GUTTERS, TYPOGRAPHY, IMAGES ,COMMON,CONSTANTS } = useTheme();
                
                

                


              
                                         const clickCounter = useRef(0);
                                            const onPress = () => {
                                              console.log(`Clicked! ${clickCounter.current}`);
                                              clickCounter.current = clickCounter.current + 1;
    };

                return (                
                <View style={[styles.SectionTop04,style]} >
<View style ={[COMMON.RowItemCenter,COMMON.RowItemSectionTop040]}>
<View style={{width:'20%'}} > 
<MButton onPress={onPress} style ={COMMON.ButtonRect2} containerStyle={COMMON.Button1} 
 text="Back" textStyle ={COMMON.TextsButton3} 
 color={COLORS.Color304} 
iconLeft={
                        {
                        name: 'chevron-left',
                        color: COLORS.Color263,
                        Component: MaterialCommunityIcons,
                       }
                       }

/>
</View>
<View style={{width:'60%'}} > 
<MButton onPress={onPress} style ={COMMON.ButtonRect5} containerStyle={COMMON.Button4} 
 text="Title" textStyle ={COMMON.TextsButton6} 
 transparent 
/>
</View>
</View>
<View  style ={COMMON.LineSectionTop047}></View>
</View>

                );}
                const styles = StyleSheet.create({
                SectionTop04: { 
backgroundColor:COLORS.Color451,
width:'100%',
height:verticalScale(44),
},

                });
                export default SectionTop04;
                
