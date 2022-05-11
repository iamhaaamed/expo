import { MText } from 'components/common';
import { createScreen } from 'components/elements';
import CircleItem from 'components/elements/CircleItem';
import { SectionTop } from 'components/Sections';
import { COLORS, METRIC_SIZES } from 'constants/common';
import useTheme from 'hooks/useTheme';
import React, { useRef } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';

const Amentities = createScreen(
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
            <View style={styles.Amentities}>
                <ScrollView>
                    {/* <SectionTop style={COMMON.EleAmentities708} /> */}
                    <MText textStyle={COMMON.TxtAmentities709}>
                        Bathroom amenities
                    </MText>
                    <CircleItem
                        text={"Hair dyer"}
                        style={{ paddingVertical: 0 }}
                    />
                    <CircleItem
                        text={"Bathroom Amenities"}
                        style={{ paddingVertical: 0 }}
                    />
                    <MText
                        textStyle={COMMON.TxtAmentities712}
                        containerStyle={{ marginTop: METRIC_SIZES.large, marginBottom: METRIC_SIZES.tiny }}
                    >
                        Business amenities
                    </MText>
                    <CircleItem
                        text={"Two-line Phone"}
                        style={{ paddingVertical: 0 }}
                    />
                    <CircleItem
                        text={"Electrical outlet : desk level"}
                        style={{ paddingVertical: 0 }}
                    />

                    <MText
                        textStyle={COMMON.TxtAmentities715}
                        containerStyle={{ marginTop: METRIC_SIZES.large, marginBottom: METRIC_SIZES.tiny }}
                    >
                        Business amenities
                    </MText>
                    <CircleItem
                        text={"Coffee Maker/Tea Service"}
                        style={{ paddingVertical: 0 }}
                    />
                    <CircleItem
                        text={"Alarm Clock"}
                        style={{ paddingVertical: 0 }}
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
    Amentities: {
        backgroundColor: COLORS.Color304,
        height: '100%',
        paddingHorizontal: '5%',
    },
});
export default Amentities;
