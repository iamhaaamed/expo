import { MText } from 'components/common';
import { COLORS } from 'constants/common';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DotIndicator } from 'react-native-indicators';
import useTheme from 'hooks/useTheme';

const Spinner = ({ withText = true, style }) => {
    const { COMMON } = useTheme();

    return (
        <View style={[styles.container, style]}>
            <DotIndicator color={COLORS.primary} size={13} />
            {withText && <MText textStyle={[styles.txt, COMMON.NormalText]}>
                {'Please Wait...'}
            </MText>}
        </View>
    );
};
export default Spinner;
const styles = StyleSheet.create({
    container: {
        marginVertical: '5%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
        marginVertical: '5%',
        color: COLORS.primary,
        fontWeight: 'bold',
    },
});
