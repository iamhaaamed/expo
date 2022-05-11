import React from 'react';
import { createScreen } from 'components/elements';
import { View, StyleSheet } from 'react-native';
import MVideo from 'components/common/MVideo';
import futsal from '../../../assets/video/futsal.mp4';

const MVideoPlayer = createScreen(
    () => {
        return (
            <View style={styles.container}>
                <MVideo
                    source={futsal}
                    style={{ borderBottomWidth: 2, borderColor: 'white' }}
                />
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
export default MVideoPlayer;
