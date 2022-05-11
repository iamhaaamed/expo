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
                const SectionTitleTopCenter02 = (props) => {
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
                <View style={[styles.SectionTitleTopCenter02,style]} >
<View  style ={COMMON.LineSectionTitleTopCenter02147}></View>
<MButton onPress={onPress} style ={COMMON.ButtonRect149} containerStyle={COMMON.Button148} 
 text="Title" textStyle ={COMMON.TextsButton150} 
 transparent 
/>
</View>

                );}
                const styles = StyleSheet.create({
                SectionTitleTopCenter02: { 
backgroundColor:COLORS.Color451,
alignItems:'center',
alignSelf:'center',
width:'100%',
height:verticalScale(41.5),
},

                });
                export default SectionTitleTopCenter02;
                
