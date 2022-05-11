import React, { useState } from 'react';
import { Alert, Modal, Pressable, StyleSheet, View } from 'react-native';

const MModal = ({
    opener,
    backdrop,
    children,
    wrapperStyle,
    animationType,
    dismissible = true,
}) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleOpen = () => {
        setModalVisible(true);
    };
    return (
        <>
            <View>
                <Modal
                    transparent={true}
                    visible={modalVisible}
                    animationType={animationType || 'fade'}
                    onRequestClose={() => setModalVisible(!modalVisible)}>
                    <Pressable
                        style={[StyleSheet.absoluteFillObject, backdrop]}
                        onPress={() => dismissible && setModalVisible(false)}
                    />
                    <View style={[styles.centeredView, wrapperStyle]}>
                        {children({ handleClose: setModalVisible })}
                    </View>
                </Modal>
            </View>
            <View>
                <Pressable onPress={() => handleOpen()}>
                    <View pointerEvents="none">{opener}</View>
                </Pressable>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default MModal;
