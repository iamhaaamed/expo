import React from 'react';
import useTheme from 'hooks/useTheme';
import { ImageBackground, StyleSheet, StatusBar, View } from 'react-native';

const MImageBackground = ({
    removeDefaultMargins = true, //TODO
    children,
    imageSource,
    imageUrl,
    backgroundColor,
    hideStatusBar = false,
    style,
    resizeMode, // stretch | cover | contain | center
}) => {
    return (
        <View
            style={[
                styles.container,
                backgroundColor ? { backgroundColor: backgroundColor } : null,
                style,
            ]}>
            <ImageBackground
                style={[
                    styles.image,
                    // removeDefaultMargins ? styles.removeDefaultMargins : null,
                ]}
                resizeMode={resizeMode ?? null}
                source={
                    !!imageUrl
                        ? {
                              uri: imageUrl,
                          }
                        : imageSource ?? null
                }>
                <StatusBar hidden={hideStatusBar} />
                {children}
            </ImageBackground>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: { flex: 1, width: null, height: null },
    removeDefaultMargins: {
        marginTop: -20,
        marginBottom: -20,
    },
});

export default MImageBackground;
