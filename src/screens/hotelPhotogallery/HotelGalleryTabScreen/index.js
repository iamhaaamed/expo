
import React from 'react';
import useTheme from 'hooks/useTheme';
import { useState } from 'react';
import { StyleSheet, FlatList, Modal, useWindowDimensions, StatusBar } from 'react-native';
import { View, TouchableOpacity } from 'react-native';
import { createScreen } from 'components/elements';
import { COLORS, DEVICE_HEIGHT, DEVICE_WIDTH, METRIC_SIZES } from 'constants/common';
import { MImage } from 'components/common';
const HotelGalleryTabScreen = createScreen(
    ({ route }) => {
        const { COMMON, IMAGES } = useTheme();
        const [modalVisible, setModalVisible] = useState(false);
        const [selectedImg, setSelectedImagery] = useState(null);
        return (

            <View style={styles.InRoomService2}>
                <FlatList
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    data={route?.params?.items}
                    numColumns={2}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => {
                            setSelectedImagery(item.photoUrl);
                            setModalVisible(true)
                        }
                        }>
                            <View style={{ marginBottom: DEVICE_WIDTH * 0.02 }}>
                                <MImage
                                    imageSource={{uri:item.photoUrl}}
                                    style={{ width: DEVICE_WIDTH * 0.49, height: DEVICE_WIDTH * 0.42, resizeMode: 'stretch' }}
                                />
                            </View>
                        </TouchableOpacity>
                    )}
                />
                <Modal
                    backdropOpacity={0.8}
                    statusBarTranslucent
                    transparent
                    deviceHeight={
                        Platform.OS === 'ios'
                            ? useWindowDimensions().height
                            : useWindowDimensions().height +
                            StatusBar.currentHeight * 2
                    }
                    visible={modalVisible}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalContainer}>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <MImage
                                    imageSource={{uri:selectedImg}}
                                    style={{ width: DEVICE_WIDTH, height: DEVICE_HEIGHT * 0.42, resizeMode: 'stretch' }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

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
    InRoomService2: {
        backgroundColor: COLORS.Color304,
        flex: 1,

    },
    centeredView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContainer: {
        alignSelf: 'center',
        width: DEVICE_WIDTH,
        alignItems: 'center',
    },
});
export default HotelGalleryTabScreen;

