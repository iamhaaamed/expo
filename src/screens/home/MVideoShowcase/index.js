import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createScreen } from 'components/elements';
import {
    VTShowCaseOne,
    VTShowCaseTwo,
    VTShowCaseThree,
    VTShowCaseFour,
    VTShowCaseFive,
} from './video-thumbnail.showcases';

const MVideoShowcase = createScreen(
    ({ navigation }) => {
        const pressHandler = () => navigation.navigate('MVideoPlayer');
        return (
            <View style={styles.container}>
                <VTShowCaseOne onPress={pressHandler} />
                <VTShowCaseTwo onPress={pressHandler} />
                <VTShowCaseThree onPress={pressHandler} />
                <VTShowCaseFour onPress={pressHandler} />
                <VTShowCaseFive onPress={pressHandler} />
            </View>
        );
    },
    {
        scrollView: true,
        paddingBottom: false,
        paddingTop: false,
    },
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});
export default MVideoShowcase;
