import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    StyleSheet,
    useWindowDimensions,
    TouchableOpacity,
    TouchableHighlight,
    Modal,
    StatusBar,
    PermissionsAndroid,
} from 'react-native';
import { COLORS, DEVICE_WIDTH, METRIC_SIZES } from 'constants/common';
import { scale, verticalScale, height } from 'utils';
import useTheme from 'hooks/useTheme';
import {
    MIcon,
    MText,
    MLoading,
    MButton,
    MImage,
    MImagePicker,
    MModal,
    Spinner,
} from 'components/common';
import { WithLocalSvg } from 'react-native-svg';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { UploadFile } from 'utils/UploadFile';
import { RNCamera } from 'react-native-camera';
import { DotIndicator } from 'react-native-indicators';
import { CheckPermission } from 'utils/AudioHelper';
const UploadPicture = ({
    isAvatar = true,
    imgStyle,
    containerStyle,
    getImage,
    topic,
    ...props
}) => {
    const { IMAGES, COMMON } = useTheme();
    const [imageSource, setImageSource] = useState();
    const [modalImage, setModalImage] = useState();
    const [isModalVisible, setModalVisible] = useState(false);
    const [uploadLoading, setUploadLoading] = useState(false);
    const [cameraType, setCameraType] = useState('back');
    const camera = useRef(null)
    useEffect(() => {
        (async () => {
            await CheckPermission(PermissionsAndroid.PERMISSIONS.CAMERA);
        })()
    }, [])
    const handleImage = (response) => {
        let file = response?.assets?.[0];
        console.log('file is' + JSON.stringify(file));
        if (!!file) {
            setModalImage(file);
            console.log('**');
        }
    };
    const UploadImage = async () => {
        if (modalImage) {
            setUploadLoading(true);
            const { uploadedUrl } = await UploadFile(modalImage);
            setUploadLoading(false);
            console.log('upload result' + JSON.stringify(uploadedUrl));
            getImage(uploadedUrl ?? null);
        } else getImage(null);
        console.log('Modal image is '+ JSON.stringify(modalImage))
        setImageSource(modalImage);
        setModalVisible(false);
    };
    const chooseImage = async () => {
        let options = {
            mediaType: 'photo',
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
            cameraType: cameraType,
        };
        console.log('camera type is ' + cameraType)
        launchCamera(options, (response) => {
            if (response.didCancel) {
                alert('User cancelled camera picker');
                return;
            } else if (response.errorCode == 'camera_unavailable') {
                alert('Camera not available on device');
                return;
            } else if (response.errorCode == 'permission') {
                alert('Permission not satisfied');
                return;
            } else if (response.errorCode == 'others') {
                alert(response.errorMessage);
                return;
            }
            handleImage(response);
            //closeOverlay && closeOverlay(false);
        });
    };
    return (
        <View style={containerStyle}>
            {imageSource ? (
                <View>
                    <MImage imageSource={imageSource} style={imgStyle} isLocal={true}/>
                    <TouchableHighlight
                        style={{ position: 'absolute', alignSelf: 'flex-end' }}>
                        <MImage
                            imageSource={IMAGES.closeic}
                            style={[
                                COMMON.closeic,
                                { position: 'absolute', alignSelf: 'flex-end' },
                            ]}
                        />
                    </TouchableHighlight>
                </View>
            ) : (
                <View style={[imgStyle, styles.avatarContainer]}>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <WithLocalSvg
                            asset={IMAGES.noImage}
                            style={[styles.noImage]}
                            resizeMode={'cover'}
                            width={DEVICE_WIDTH * 0.07}
                            height={DEVICE_WIDTH * 0.07}
                        />
                    </TouchableOpacity>
                </View>
            )}
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
                visible={isModalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalHeader}>
                            <TouchableOpacity
                                style={{ flex: 1 }}
                                onPress={() => {
                                    setModalVisible(false);
                                    console.log('Modal');
                                }}>
                                <MIcon
                                    name="chevron-left"
                                    color={COLORS.black}
                                    size={scale(36)}
                                />
                            </TouchableOpacity>
                            <MText
                                containerStyle={{
                                    flex: 5,
                                    justifyContent: 'center',
                                }}
                                textStyle={[
                                    COMMON.Title,
                                    { textAlign: 'center', marginBottom: 0 },
                                ]}>
                                Take A Picture
                            </MText>
                            <View style={{ flex: 1 }} />
                        </View>
                        <MText
                            textStyle={[
                                COMMON.NormalText,
                                { marginTop: '5%', marginBottom: '8%' },
                            ]}>
                            {topic ?? 'please take picture from your self'}
                        </MText>
                        <View style={styles.modalImageContainer}>
                            {modalImage ? (
                                <MImage
                                    imageSource={modalImage}
                                    style={imgStyle}
                                    isLocal={true}
                                />
                            ) : (
                                <View
                                    style={[imgStyle, styles.avatarContainer]}>
                                    <WithLocalSvg
                                        asset={IMAGES.noImage}
                                        style={[styles.noImage]}
                                        resizeMode={'cover'}
                                        width={DEVICE_WIDTH * 0.07}
                                        height={DEVICE_WIDTH * 0.07}
                                    />
                                </View>
                            )}
                        </View>
                        <View
                            style={[
                                COMMON.RowItemCenter,
                                { paddingVertical: METRIC_SIZES.small },
                            ]}>
                            <MButton
                                text={'Take A Picture'}
                                containerStyle={COMMON.TransparentButton}
                                textStyle={COMMON.TextsButtonBlack}
                                transparent
                                onPress={() => chooseImage()}
                            />
                            <MButton
                                text={'Rotate the Camera'}
                                containerStyle={COMMON.TransparentButton}
                                textStyle={COMMON.TextsButtonBlack}
                                transparent
                                onPress={() => setCameraType(cameraType === 'back' ? 'front' : 'back')}
                            />
                        </View>
                        {uploadLoading && (
                            <View style={{margin: METRIC_SIZES.small}}>
                                <DotIndicator color={COLORS.primary} size={13} />
                            </View>
                        )}
                        <MButton
                            text={'Save'}
                            style={COMMON.ButtonRectColor988}
                            containerStyle={[
                                COMMON.ButtonRectColor988,
                                { width: '100%' , marginTop: METRIC_SIZES.small},
                            ]}
                            textStyle={COMMON.TextsButton}
                            onPress={() => {
                                UploadImage();
                            }}
                            disabled={uploadLoading}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default React.memo(UploadPicture);

const styles = StyleSheet.create({
    avatarContainer: {
        borderWidth: 2,
        borderColor: COLORS.disabled,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.background,
    },
    noImage: {
        width: DEVICE_WIDTH * 0.07,
        height: DEVICE_WIDTH * 0.07,
        backgroundColor: COLORS.background,
    },
    centeredView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContainer: {
        alignSelf: 'center',
        width: DEVICE_WIDTH * 0.9,
        backgroundColor: COLORS.Color304,
        // alignItems: 'center',
        padding: METRIC_SIZES.small,
        borderRadius: METRIC_SIZES.small,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },
    modalImageContainer: {
        width: DEVICE_WIDTH * 0.8,
        backgroundColor: COLORS.Color332,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: METRIC_SIZES.large,
        borderRadius: METRIC_SIZES.small,
    },
});
