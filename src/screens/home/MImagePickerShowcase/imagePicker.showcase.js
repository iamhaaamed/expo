import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MImagePicker from 'components/common/MImagePicker';
import { MButton, MIcon, MImage, MModal, MText } from 'components/common';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import useTheme from 'hooks/useTheme';

export const ImagePickerShowCaseOne = ({ handleImage }) => (
    <MModal
        opener={
            <View style={styles.margin}>
                <MButton text="Open Show case 1" />
            </View>
        }>
        {({ handleClose }) => {
            return (
                <View style={styles.sc_1_centeredView}>
                    <View style={styles.sc_1_modalView}>
                        <MText textStyle={{ fontSize: 28 }}>Upload photo</MText>
                        <MImagePicker
                            getImage={handleImage}
                            //closeOverlay={handleClose}
                            >
                            {({ chooseImage, captureImage }) => (
                                <View>
                                    <MButton
                                        transparent
                                        text="Take Photo"
                                        textStyle={{ fontSize: 18 }}
                                        onPress={captureImage}
                                    />
                                    <MButton
                                        transparent
                                        text="Upload Photo"
                                        textStyle={{ fontSize: 18 }}
                                        onPress={chooseImage}
                                    />
                                    <MButton
                                        transparent
                                        text="Cancel"
                                        textStyle={{ fontSize: 18 }}
                                        onPress={() => handleClose(false)}
                                    />
                                </View>
                            )}
                        </MImagePicker>
                    </View>
                </View>
            );
        }}
    </MModal>
);

export const ImagePickerShowCaseTwo = ({ handleImage }) => (
    <MModal
        opener={
            <View style={styles.margin}>
                <MButton text="Open Show case 2" />
            </View>
        }>
        {({ handleClose }) => {
            return (
                <View style={styles.sc_2_centeredView}>
                    <View
                        style={[
                            styles.sc_2_modalView,
                            { backgroundColor: 'purple' },
                        ]}>
                        <MText color="white" textStyle={{ fontSize: 28 }}>
                            Upload photo
                        </MText>
                        <MImagePicker
                            getImage={handleImage}
                            closeOverlay={handleClose}>
                            {({ chooseImage, captureImage }) => (
                                <View>
                                    <MButton
                                        color="violet"
                                        text="Take Photo"
                                        onPress={captureImage}
                                        style={{
                                            borderRadius: 50,
                                            width: '100%',
                                        }}
                                        textStyle={{ fontSize: 18 }}
                                    />
                                    <MButton
                                        color="pink"
                                        text="Upload Photo"
                                        onPress={chooseImage}
                                        style={{
                                            borderRadius: 50,
                                            width: '100%',
                                        }}
                                        textStyle={{ fontSize: 18 }}
                                    />
                                    <MButton
                                        color="gray"
                                        text="Cancel"
                                        style={{
                                            borderRadius: 50,
                                            width: '100%',
                                        }}
                                        textStyle={{ fontSize: 18 }}
                                        onPress={() => handleClose(false)}
                                    />
                                </View>
                            )}
                        </MImagePicker>
                    </View>
                </View>
            );
        }}
    </MModal>
);

export const ImagePickerShowCaseThree = ({ handleImage }) => (
    <View style={styles.sc_3_card}>
        <View style={styles.sc_3_header}>
            <View style={styles.sc_3_headerTab}>
                <MText textStyle={{ fontSize: 16 }} color="blue">
                    Upload
                </MText>
            </View>
        </View>
        <View style={styles.sc_3_body}>
            <MImagePicker getImage={handleImage}>
                {({ chooseImage, captureImage }) => (
                    <View>
                        <MText>Lorem ipsum dolor sit</MText>
                        <MButton
                            color="blue"
                            text="Open Camera"
                            onPress={captureImage}
                            style={{ borderRadius: 8 }}
                            textStyle={{ fontSize: 14 }}
                        />
                    </View>
                )}
            </MImagePicker>
        </View>
    </View>
);

export const ImagePickerShowCaseFour = ({ handleImage }) => (
    <View style={styles.sc_3_card}>
        <View style={styles.sc_3_header}>
            <View style={styles.sc_3_headerTab}>
                <MText textStyle={{ fontSize: 16 }} color="blue">
                    Upload
                </MText>
            </View>
        </View>
        <View style={styles.sc_3_body}>
            <MImagePicker getImage={handleImage}>
                {({ chooseImage, captureImage }) => (
                    <View>
                        <MText>Lorem ipsum dolor sit</MText>
                        <MButton
                            color="blue"
                            text="Choose photo"
                            onPress={chooseImage}
                            style={{ borderRadius: 8 }}
                            textStyle={{ fontSize: 14 }}
                        />
                    </View>
                )}
            </MImagePicker>
        </View>
    </View>
);

export const ImagePickerShowCaseFive = ({ handleImage }) => (
    <View style={styles.sc_5_card}>
        <View style={styles.sc_5_header}>
            <MIcon name="users" IconComponent={Feather} size={32} />
        </View>
        <MText textStyle={{ fontSize: 26 }}>Users</MText>
        <MText textStyle={{ fontSize: 14 }}>Profile photo</MText>
        <View style={{ position: 'absolute', bottom: -20 }}>
            <MImagePicker getImage={handleImage}>
                {({ chooseImage, captureImage }) => (
                    <MButton
                        color="blue"
                        iconLeft={{
                            name: 'plus',
                            Component: MaterialCommunityIcons,
                        }}
                        onPress={captureImage}
                        style={styles.sc_5_plus}
                        textStyle={{ fontSize: 8 }}
                    />
                )}
            </MImagePicker>
        </View>
    </View>
);

export const ImagePickerShowCaseSix = ({ handleImage }) => (
    <View style={styles.sc_6_card}>
        <View style={{ position: 'absolute', bottom: -18, right: -18 }}>
            <MImagePicker getImage={handleImage}>
                {({ chooseImage, captureImage }) => (
                    <MButton
                        color="blue"
                        iconLeft={{
                            name: 'plus',
                            Component: MaterialCommunityIcons,
                        }}
                        onPress={captureImage}
                        style={styles.sc_6_plus}
                        textStyle={{ fontSize: 8 }}
                    />
                )}
            </MImagePicker>
        </View>
        <MText textStyle={{ fontSize: 14 }}>Profile photo</MText>
    </View>
);

export const ImagePickerShowCaseSeven = ({ handleImage }) => {
    const { LAYOUT, GUTTERS, IMAGES } = useTheme();
    return (
        <MModal
            opener={
                <View style={styles.margin}>
                    <MButton text="Open Show case 7" />
                </View>
            }>
            {({ handleClose }) => {
                return (
                    <View style={styles.sc_7_centeredView}>
                        <View style={{ alignItems: 'center' }}>
                            <MImage
                                imageSource={IMAGES.klopp}
                                showType="custom"
                                style={{
                                    width: 85,
                                    height: 85,
                                    borderRadius: 50,
                                    resizeMode: 'cover',
                                }}
                            />
                            <MText color="white">Montreal, QC</MText>
                            <MText color="white">Easy and Gentle Yoga</MText>
                        </View>
                        <View style={[styles.sc_7_modalView]}>
                            <MImagePicker
                                getImage={handleImage}
                                closeOverlay={handleClose}>
                                {({ chooseImage, captureImage }) => (
                                    <View>
                                        <MButton
                                            color="gray"
                                            text="Take Photo"
                                            onPress={captureImage}
                                            style={{
                                                borderRadius: 50,
                                                width: '100%',
                                            }}
                                            textStyle={{ fontSize: 18 }}
                                        />
                                        <MButton
                                            color="gray"
                                            text="Upload Photo"
                                            onPress={chooseImage}
                                            style={{
                                                borderRadius: 50,
                                                width: '100%',
                                            }}
                                            textStyle={{ fontSize: 18 }}
                                        />
                                        <MButton
                                            color="purple"
                                            text="Cancel"
                                            style={{
                                                borderRadius: 50,
                                                width: '100%',
                                            }}
                                            textStyle={{ fontSize: 18 }}
                                            onPress={() => handleClose(false)}
                                        />
                                    </View>
                                )}
                            </MImagePicker>
                        </View>
                    </View>
                );
            }}
        </MModal>
    );
};

export const ImagePickerShowCaseEight = ({ handleImage }) => {
    const { LAYOUT, GUTTERS, IMAGES } = useTheme();
    return (
        <View style={styles.sc_8_card}>
            <MImagePicker getImage={handleImage}>
                {({ chooseImage, captureImage }) => (
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-evenly',
                        }}>
                        <MButton
                            transparent
                            iconTop={{
                                size: 32,
                                name: 'camera',
                                color: '#ccc',
                                style: { width: 40, height: 40 },
                                Component: MaterialCommunityIcons,
                            }}
                            text="Capture"
                            onPress={captureImage}
                            color="#ccc"
                            style={[styles.sc_6_plus, { height: 60 }]}
                            textStyle={{ fontSize: 14 }}
                        />
                        <View
                            style={{
                                height: 50,
                                width: 1,
                                backgroundColor: '#e5e5e5',
                            }}
                        />
                        <MButton
                            transparent
                            iconTop={{
                                size: 32,
                                name: 'image',
                                color: '#ccc',
                                style: { width: 40, height: 40 },
                                Component: MaterialCommunityIcons,
                            }}
                            text="Import"
                            onPress={chooseImage}
                            style={[styles.sc_6_plus, { height: 60 }]}
                            color="#ccc"
                            textStyle={{ fontSize: 14 }}
                        />
                    </View>
                )}
            </MImagePicker>
        </View>
    );
};

export const ImagePickerShowCaseNine = ({ handleImage }) => {
    return (
        <MModal
            opener={
                <View style={styles.margin}>
                    <MButton text="Open Show case 9" />
                </View>
            }>
            {({ handleClose }) => {
                return (
                    <View style={styles.sc_9_centeredView}>
                        <MImagePicker
                            getImage={handleImage}
                            closeOverlay={handleClose}>
                            {({ chooseImage, captureImage }) => (
                                <View style={styles.sc_9_button}>
                                    <View style={styles.sc_9_actionButtons}>
                                        <MButton
                                            transparent
                                            text="Take Photo"
                                            onPress={captureImage}
                                            color="blue"
                                            style={styles.sc_9_plus}
                                            textStyle={{ fontSize: 16 }}
                                        />
                                        <View
                                            style={{
                                                width: '100%',
                                                height: 1,
                                                backgroundColor: '#ccc',
                                            }}
                                        />
                                        <MButton
                                            transparent
                                            text="Upload Photo"
                                            onPress={chooseImage}
                                            color="blue"
                                            style={styles.sc_9_plus}
                                            textStyle={{ fontSize: 16 }}
                                        />
                                    </View>
                                    <View style={styles.sc_9_cancelButton}>
                                        <MButton
                                            transparent
                                            text="Cancel"
                                            onPress={handleClose}
                                            color="blue"
                                            style={styles.sc_9_plus}
                                            textStyle={{ fontSize: 16 }}
                                        />
                                    </View>
                                </View>
                            )}
                        </MImagePicker>
                    </View>
                );
            }}
        </MModal>
    );
};

export const ImagePickerShowCaseTen = ({ handleImage }) => {
    return (
        <MImagePicker getImage={handleImage}>
            {({ chooseImage, captureImage }) => (
                <MButton
                    transparent
                    color="blue"
                    text="Add Image"
                    onPress={captureImage}
                    style={styles.sc_10_camera}
                    textStyle={{ fontSize: 12 }}
                    iconTop={{
                        name: 'camera',
                        Component: MaterialCommunityIcons,
                    }}
                />
            )}
        </MImagePicker>
    );
};

export const ImagePickerShowCaseEleven = ({ handleImage }) => {
    return (
        <MImagePicker getImage={handleImage}>
            {({ chooseImage, captureImage }) => (
                <MButton
                    transparent
                    color="orange"
                    onPress={chooseImage}
                    style={styles.sc_11_camera}
                    iconTop={{
                        name: 'camera-plus',
                        size: 24,
                        Component: MaterialCommunityIcons,
                    }}
                />
            )}
        </MImagePicker>
    );
};

export const ImagePickerShowCaseTwelve = ({ handleImage }) => {
    return (
        <MImagePicker getImage={handleImage}>
            {({ chooseImage, captureImage }) => (
                <MButton
                    transparent
                    color="blue"
                    onPress={captureImage}
                    text="+ Add or take a photo"
                    style={styles.sc_12_camera}
                    textStyle={{ fontSize: 12 }}
                    iconLeft={{
                        name: 'camera-plus',
                        Component: MaterialCommunityIcons,
                    }}
                />
            )}
        </MImagePicker>
    );
};

const styles = StyleSheet.create({
    margin: {
        width: '100%',
        alignSelf: 'center',
    },
    sc_1_centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 22,
    },
    sc_1_modalView: {
        width: '100%',
        height: 285,
        backgroundColor: 'white',
        borderTopEndRadius: 50,
        borderTopStartRadius: 50,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    sc_2_centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    sc_2_modalView: {
        width: '85%',
        height: 285,
        backgroundColor: 'white',
        borderRadius: 24,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    sc_3_card: {
        margin: 12,
        height: 150,
        width: '85%',
        borderWidth: 1,
        borderRadius: 8,
        alignSelf: 'center',
        borderColor: '#ccc',
    },
    sc_3_header: {
        height: 50,
        width: '100%',
        backgroundColor: '#e5e5e5',
    },
    sc_3_headerTab: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ccc',
        bottom: 0,
        left: 10,
        padding: 5,
        borderTopEndRadius: 5,
        borderTopStartRadius: 5,
        borderBottomWidth: 0,
    },
    sc_3_body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sc_5_card: {
        width: 150,
        height: 200,
        flex: 1,
        borderWidth: 1,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#ccc',
        backgroundColor: 'white',
        elevation: 8,
        alignSelf: 'center',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
    },
    sc_5_header: {
        height: 60,
        padding: 5,
        aspectRatio: 1,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e5e5e5',
    },
    sc_5_plus: {
        width: 36,
        aspectRatio: 1,
        paddingLeft: 0,
        paddingRight: 0,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sc_6_card: {
        marginVertical: 24,
        width: 100,
        height: 100,
        flex: 1,
        borderWidth: 1,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#ccc',
        backgroundColor: 'white',
        elevation: 8,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        alignSelf: 'center',
    },
    sc_6_plus: {
        width: 32,
        aspectRatio: 1,
        borderWidth: 1,
        paddingLeft: 0,
        paddingRight: 0,
        borderRadius: 12,
        alignItems: 'center',
        borderColor: 'white',
        justifyContent: 'center',
    },
    sc_7_centeredView: {
        flex: 1,
        backgroundColor: 'pink',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    sc_7_modalView: {
        width: '85%',
        height: 285,
        borderRadius: 24,
        padding: 35,
        alignItems: 'center',
    },
    sc_8_card: {
        width: '100%',
        marginVertical: 20,
        backgroundColor: 'white',
        elevation: 10,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,
        aspectRatio: 2,
        alignSelf: 'center',
    },
    sc_9_centeredView: {
        flex: 1,
        backgroundColor: '#ccc',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    sc_9_plus: {
        width: '100%',
    },
    sc_9_button: {
        width: '100%',
        height: '100%',
        paddingBottom: 32,
        justifyContent: 'flex-end',
    },
    sc_9_cancelButton: {
        height: 50,
        marginTop: 12,
        borderRadius: 12,
        backgroundColor: 'white',
        width: Dimensions.get('window').width * 0.9,
    },
    sc_9_actionButtons: {
        height: 100,
        borderRadius: 12,
        backgroundColor: '#e5e5e5',
        width: Dimensions.get('window').width * 0.9,
    },
    sc_10_camera: {
        width: 85,
        aspectRatio: 1,
        borderStyle: 'dashed',
        borderWidth: 1,
        borderRadius: 8,
        alignSelf: 'center',
    },
    sc_11_camera: {
        width: '85%',
        aspectRatio: 2,
        backgroundColor: '#e5e5e5',
        borderRadius: 8,
        alignSelf: 'center',
    },
    sc_12_camera: {
        aspectRatio: 3.5,
        borderRadius: 8,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});
