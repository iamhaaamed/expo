import { MIcon, MText } from 'components/common';
import { COLORS, METRIC_SIZES } from 'constants/common';
import useTheme from 'hooks/useTheme';
import React, { useRef, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { scale, GetData } from 'utils';
import { mutateAddToFavorite } from 'hooks/Booking';
const SectionTop = (props) => {
    const { style, title, isDarkMode, options, hasLike, hotelId } = props;
    const {
        LAYOUT,
        GUTTERS,
        TYPOGRAPHY,
        IMAGES,
        COMMON,
        CONSTANTS,
    } = useTheme();

    console.log(hasLike, title);
    const { loading, mutate, error } = mutateAddToFavorite();

    const [heartSelect, setHeartSelect] = useState('heart-outline');
    return (
        <View
            style={[
                styles.SectionTop,
                style,
                {
                    backgroundColor: isDarkMode
                        ? COLORS.ColorHeader
                        : COLORS.Color451,
                },
            ]}>
            <View style={[COMMON.RowItemCenter, COMMON.RowItemSectionTop44]}>
                <TouchableOpacity
                    onPress={() => props.navigation.goBack()}
                    style={{ flex: 1 }}>
                    <MIcon
                        name="chevron-left"
                        color={isDarkMode ? COLORS.Color304 : COLORS.black}
                        size={scale(36)}
                    />
                </TouchableOpacity>
                <MText
                    containerStyle={{ flex: 5 }}
                    textStyle={[
                        COMMON.TextsButton50,
                        { color: isDarkMode ? COLORS.Color304 : COLORS.black },
                    ]}>
                    {props?.scene?.route?.params?.title ?? title}
                </MText>
                {hasLike ? (
                    <TouchableOpacity
                        onPress={async () => {
                            const userInfo = await GetData('USER_INFO');

                            setHeartSelect(
                                heartSelect == 'heart'
                                    ? 'heart-outline'
                                    : 'heart',
                            );
                            mutate(
                                { hotelId: hotelId, userId: userInfo?.id },
                                {
                                    onSuccess: async (data) => {
                                        console.log(data);
                                    },
                                    onError: (err) => {
                                        setHeartSelect(
                                            heartSelect == 'heart'
                                                ? 'heart-outline'
                                                : 'heart',
                                        );
                                    },
                                },
                            );
                        }}
                        style={{ flex: 1 }}>
                        <MIcon
                            name={heartSelect}
                            color={COLORS.Color988}
                            size={scale(27)}
                        />
                    </TouchableOpacity>
                ) : (
                    <View style={{ flex: 1 }} />
                )}
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    SectionTop: {
        backgroundColor: COLORS.Color451,
        width: '100%',
        // height: verticalScale(44),
        paddingBottom: METRIC_SIZES.small,
        paddingTop: METRIC_SIZES.large,
    },
});
export default SectionTop;
