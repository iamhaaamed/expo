import { MFlatList, MIcon, MText } from 'components/common';
import { COLORS, METRIC_SIZES } from 'constants/common';
import useTheme from 'hooks/useTheme';
import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { scale, verticalScale } from 'utils';

const SectionCenter = (props) => {
    const { style, data, title = 'American', contactInfo } = props;
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

    return (
        <View style={[styles.SectionCenter, style]}>
            <MText textStyle={COMMON.Title}>{title} </MText>
            <MFlatList
                data={
                    data ?? [
                        {
                            content: [
                                'Hanger 18 bar + kitchen',
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
                            ],
                        },
                        { content: ['Hours', 'Open for lunch and dinner'] },
                        { content: ['Dress code : ', 'Casual'] },
                    ]
                }
                renderComponent={({ item }) => {
                    return (
                        <View>
                            <MText textStyle={COMMON.TxtSectionCenter55}>
                                {item?.content[0]}
                            </MText>
                            <MText textStyle={COMMON.TxtSectionCenter56}>
                                {item?.content[1]}
                            </MText>
                            <MText textStyle={COMMON.TxtSectionCenter56}>
                                {item?.content[2]}
                            </MText>
                        </View>
                    );
                }}
            />
            {/* <MText textStyle={COMMON.TxtSectionCenter55} >Hanger 18 bar + kitchen  </MText>
      <MText textStyle={COMMON.TxtSectionCenter56} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  </MText>
      <MText textStyle={COMMON.TxtSectionCenter57} >Hours </MText>
      <MText textStyle={COMMON.TxtSectionCenter58} >Open for lunch and dinner </MText>
      <MText textStyle={COMMON.TxtSectionCenter59} >Dress code : </MText>
      <MText textStyle={COMMON.TxtSectionCenter60} >Casual </MText> */}
            {contactInfo && (
                <View>
                    <View style={styles.row}>
                        <MText textStyle={COMMON.TxtSectionCenter60}>
                            Call To Resturant{' '}
                        </MText>
                        <MIcon name="phone" />
                    </View>
                    <View style={styles.row}>
                        <MText textStyle={COMMON.TxtSectionCenter60}>
                            Visit Website{' '}
                        </MText>
                        <MIcon name="web" />
                    </View>
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
export default SectionCenter;
