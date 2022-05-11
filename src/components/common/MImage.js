import React from 'react';
import { StyleSheet, Image } from 'react-native';
import Config from 'react-native-config';

const MImage = ({ imageSource, style, isLocal = false, props }) => {
    return (
        <Image
            style={[styles.image, style]}
            resizeMode={style?.resizeMode ?? null}
            borderRadius={style?.borderRadius ?? null}
            blurRadius={style?.blurRadius ?? null}
            source={imageSource?.uri ?
                {
                    uri: isLocal ?
                        imageSource.uri :
                        Config.FILE_URL + imageSource.uri
                }
                : imageSource}
            {...props}
        />
    );
};
const styles = StyleSheet.create({
    image: {
        backgroundColor: '#DEDEDE',
    },
});

export default MImage;
