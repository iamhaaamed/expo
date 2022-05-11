import { MButton, MIcon, MText } from 'components/common';
import { COLORS, METRIC_SIZES, DEVICE_WIDTH } from 'constants/common';
import useTheme from 'hooks/useTheme';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';


const ResultModal = ({ closeModal, type, onDonePressed }) => {
    const {
        LAYOUT,
        GUTTERS,
        TYPOGRAPHY,
        IMAGES,
        COMMON,
        CONSTANTS,
    } = useTheme();

    return (
        <View>
            <View style={styles.modalHeader}>
                <MText
                    containerStyle={{
                        flex: 5,
                        justifyContent: 'center',
                    }}
                    textStyle={[
                        COMMON.Title,
                        { textAlign: 'center', marginBottom: 0 },
                    ]}
                >Scan Your Voice</MText>
            </View>
            <MText
                textStyle={[COMMON.Title2, { textAlign: 'center', }]}
                containerStyle={styles.titleText}
            >{type === 'SUCCESS' ? 'Your voice scan is well done thank you' : 'Your voice is not scanned well, please try again'}
            </MText>
            <MIcon
                name={type === 'SUCCESS' ? "check-outline" : "close-outline"}
                color={type === 'SUCCESS' ? COLORS.Color177 : COLORS.Color356}
                size={METRIC_SIZES.large * 2}
                style={{ marginVertical: METRIC_SIZES.large }}
            />
            <MButton text={type === 'SUCCESS' ? "Done" : "Try again"}
                containerStyle={COMMON.ButtonRectColor988}
                textStyle={COMMON.TextsButton}
                style={[COMMON.ButtonRectColor988,{backgroundColor:"transparent"}]}
                onPress={() => {
                    if (type === 'SUCCESS') {
                        onDonePressed();
                        closeModal();
                    }
                    else
                        closeModal("Try");
                }
                }
            />
        </View>
    );
};
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalContainer: {
        alignSelf: "center",
        width: DEVICE_WIDTH * 0.9,
        backgroundColor: COLORS.Color304,
        alignItems: 'center',
        padding: METRIC_SIZES.small,
        borderRadius: METRIC_SIZES.small
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: "100%",
    },
    titleText: {
        alignSelf: 'center',
        marginTop: METRIC_SIZES.large
    }
});
export default ResultModal;
