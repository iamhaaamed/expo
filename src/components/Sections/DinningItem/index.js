import { MButton, MIcon, MText } from 'components/common';
import { COLORS, METRIC_SIZES } from 'constants/common';
import useTheme from 'hooks/useTheme';
import React, { useRef } from 'react';
import { Linking, StyleSheet, TouchableOpacity, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { scale, verticalScale } from 'utils';
import { DialNumber } from 'utils/DialNumber';

const DinningItem = ({ item, isCurrent = false, navigation, currentHotel }) => {
    const {
        LAYOUT,
        GUTTERS,
        TYPOGRAPHY,
        IMAGES,
        COMMON,
        CONSTANTS,
    } = useTheme();
    const clickCounter = useRef(0);
    const onPress = () => {
        console.log(`Clicked! ${clickCounter.current}`);
        clickCounter.current = clickCounter.current + 1;
    };
    const onWebSitePressed = () => {
        Linking.openURL("www.google.com")
        .catch((err) => showMessage({message: "Website address is invalid",type:'warning'}))
    }
    return (
        <View style={[styles.SectionCenter]}>
            <MText textStyle={COMMON.Title}>{'American'} </MText>

            <View>
                <MText textStyle={COMMON.TxtSectionCenter55}>
                    {'Hanger 18 Bar + Kitchen '}
                </MText>
                <MText textStyle={COMMON.TxtSectionCenter56}>
                    {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "}
                </MText>
            </View>
            {isCurrent && (
                <View>
                    <TouchableOpacity onPress={()=>DialNumber(item?.telNumber)}>
                        <View style={styles.row}>
                            <MText textStyle={COMMON.TxtSectionCenter60}>
                                Call To Resturant{' '}
                            </MText>
                            <MIcon name="phone" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('Dinnings2',{currentHotel: currentHotel})}>
                        <View style={styles.row}>
                            <MText textStyle={COMMON.TxtSectionCenter60}>
                                Make A Reservation
                            </MText>
                            <MIcon name="calendar-blank" />
                        </View>
                    </TouchableOpacity>
                </View>
            )}
            {!isCurrent && item?.telNumber && (
                <View>
                    <TouchableOpacity onPress={()=>DialNumber(item?.telNumber)}>
                        <View style={styles.row}>
                            <MText textStyle={COMMON.TxtSectionCenter60}>
                                Call To Resturant{' '}
                            </MText>
                            <MIcon name="phone" />
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={()=>onWebSitePressed()}>
                    <View style={styles.row}>
                        <MText textStyle={COMMON.TxtSectionCenter60}>
                            Visit Website{' '}
                        </MText>
                        <MIcon name="web" />
                    </View>

                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    SectionCenter: {
        paddingBottom: verticalScale(16),
        paddingTop: verticalScale(16),
        paddingRight: scale(16),
        paddingLeft: scale(16),
        borderWidth: 1,
        borderColor: COLORS.Color707,
        backgroundColor: COLORS.Color304,
        alignSelf: 'center',
        width: '100%',
        borderRadius: METRIC_SIZES.small,
    },
    row: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: METRIC_SIZES.tiny,
        borderTopWidth: 2,
        borderTopColor: COLORS.disabled,
        marginTop: METRIC_SIZES.tiny,
    },
    separator: {
        height: 2,
        width: '100%',
    },
});
export default DinningItem;
