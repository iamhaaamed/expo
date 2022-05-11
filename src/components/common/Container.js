import { COLORS, DEVICE_HEIGHT, DEVICE_WIDTH } from 'constants/common';
import React from 'react';
import { Keyboard, StatusBar, StyleSheet, View } from 'react-native';
import Spinner from './Spinner';

const Container = ({ style, children, isLoading, loadingOnPage }) => {
    console.log('====================================');
    console.log(isLoading);
    console.log('====================================');
    const shouldSetResponse = () => true;
    const onRelease = () => Keyboard.dismiss();
    return (
        <View
            onResponderRelease={onRelease}
            onStartShouldSetResponder={shouldSetResponse}
            style={[style, { paddingTop: '5%' }]}>
            {isLoading ? (
                <Spinner />
            ) : (
                <>
                    {children}

                    {loadingOnPage && (
                        <View style={styles.view}>
                            <Spinner />
                        </View>
                    )}
                </>
            )}
            <StatusBar
                translucent
                barStyle="dark-content"
                backgroundColor={'transparent'}
            />
        </View>
    );
};
export default React.memo(Container);

const styles = StyleSheet.create({
    view: {
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT,
        position: 'absolute',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
        paddingBottom: '10%',
        zIndex: 20,
    },
});
