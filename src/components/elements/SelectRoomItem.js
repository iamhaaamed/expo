import { MButton, MSlider, MImage, MText } from 'components/common';
import { COLORS, DEVICE_HEIGHT, METRIC_SIZES } from 'constants/common';
import useTheme from 'hooks/useTheme';
import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { scale, verticalScale } from 'utils';
import ConfigItem from './ConfigItem';
import { SliderBox } from 'react-native-image-slider-box';
import Config from 'react-native-config';
import { Image } from 'react-native-svg';

const SelectRoomItem = (props) => {
    const {
        img,
        description,
        paymentInfo,
        facilities,
        navigation,
        data,
    } = props;
    const {
        LAYOUT,
        GUTTERS,
        TYPOGRAPHY,
        IMAGES,
        COMMON,
        CONSTANTS,
    } = useTheme();
    console.log('PRIIIIC', data?.roomPrices[0]?.price);
    const [Image, setImage] = useState([]);
    useEffect(() => {
        let arr = [];
        img.map((item) => {
            arr.push(Config.FILE_URL + item);
        });
        console.log('IIIIIIII111111', arr);

        setImage(arr);
    }, []);
    return (
        <View style={[styles.SectionCenter]}>
            <SliderBox
                images={Image}
                sliderBoxHeight={DEVICE_HEIGHT * 0.4}
                backgroundColor={'#DEDEDE'}
            />
            <View style={{ padding: METRIC_SIZES.small }}>
                <ConfigItem
                    text={description}
                    onPress={() =>
                        navigation.navigate('SelectRoomroomdetails', {
                            id: data?.id,
                        })
                    }
                />
                <View
                    style={[
                        COMMON.LineSectionTop047,
                        { padding: METRIC_SIZES.small },
                    ]}
                />
                <View
                    style={[
                        COMMON.ColRowCenter,
                        { paddingVertical: METRIC_SIZES.small },
                    ]}>
                    <View>
                        <MText textStyle={[COMMON.Title, { marginBottom: 0 }]}>
                            {paymentInfo}
                        </MText>
                        <MText textStyle={COMMON.GrayNormalText}>
                            {facilities}
                        </MText>
                    </View>
                    <MButton
                        style={{
                            paddingHorizontal: METRIC_SIZES.large,
                            borderRadius: METRIC_SIZES.large,
                        }}
                        onPress={() =>
                            navigation.navigate('Termconditionn2', {
                                id: data?.id,
                                price: data?.roomPrices[0]?.price,
                            })
                        }
                        textStyle={COMMON.TextsButton}
                        text="Select"
                        color={COLORS.Color988}
                    />
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    SectionCenter: {
        paddingBottom: verticalScale(16),
        borderWidth: 1,
        borderColor: COLORS.Color707,
        backgroundColor: COLORS.Color304,
        alignSelf: 'center',
        width: '100%',
        borderRadius: METRIC_SIZES.small,
        overflow: 'hidden',
        marginVertical: METRIC_SIZES.tiny,
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
export default SelectRoomItem;
