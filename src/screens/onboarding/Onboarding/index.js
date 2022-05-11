import {
    MButton,
    MChip,
    MIcon,
    MImage,
    MOnboarding,
    MText,
} from 'components/common';
import { createScreen } from 'components/elements';
import { COLORS } from 'constants/common';
import useTheme from 'hooks/useTheme';
import React, { useRef } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { scale } from 'utils';

const onboarding = createScreen(
    () => {
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
            <View style={styles.onboarding}>
                <ScrollView>
                    <View style={COMMON.SectionPaddingonboarding625}>
                        <MOnboarding
                            prevButton={
                                <MIcon
                                    size={24}
                                    name="chevron-back"
                                    color="#ccc"
                                />
                            }
                            nextButton={
                                <MChip
                                    onPress={onPress}
                                    style={COMMON.ChipNextRect627}
                                    containerStyle={COMMON.ChipNext626}
                                    text="go to sign in"
                                    textStyle={COMMON.TextsChipNext628}
                                    color={COLORS.Color988}
                                />
                            }
                            nextButtonStyle={{
                                bottom: 20,
                                alignSelf: 'center',
                            }}
                            getStartButton={
                                <MChip
                                    onPress={onPress}
                                    style={COMMON.ChipNextRect627}
                                    containerStyle={COMMON.ChipNext626}
                                    text="go to sign in"
                                    textStyle={[
                                        COMMON.TextsChipNext628,
                                        { fontWeight: 'bold' },
                                    ]}
                                    color={COLORS.Color988}
                                />
                            }
                            onFinish={() => console.log('Piow')}
                            showsPagination={false}
                            prevButtonStyle={{ top: 24, left: 24 }}>
                            <View style={COMMON.item630}>
                                <MImage
                                    imageSource={IMAGES.image5383}
                                    style={COMMON.image631}
                                    customWidth={scale(375)}
                                    customHeight={scale(406)}
                                />

                                <MText
                                    textStyle={[
                                        COMMON.Txtitem632,
                                        { fontWeight: 'bold' },
                                    ]}>
                                    searching by your voice{' '}
                                </MText>
                                <MText textStyle={COMMON.Txtitem633}>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text{' '}
                                </MText>
                            </View>
                        </MOnboarding>
                    </View>
                    <MButton
                        onPress={onPress}
                        style={COMMON.ButtonRect635}
                        containerStyle={[
                            COMMON.Button634,
                            { alignSelf: 'center', backgroundColor: '"red' },
                        ]}
                        text="skip"
                        textStyle={COMMON.TextsButton636}
                        color={COLORS.Color304}
                    />
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
    onboarding: {
        backgroundColor: COLORS.Color304,
        height: '100%',
    },
});
export default onboarding;
