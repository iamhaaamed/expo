import React, { useState } from 'react';
import StepIndicator from 'react-native-step-indicator';
import { Text, View, Dimensions, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stepper = ({
    type,
    direction,
    labels,
    primaryColor,
    stepsStyles,
    lineStyles,
    stepCount,
}) => {
    const [currentPosition, setCurrentPosition] = useState(2);

    const onPageChange = (position) => {
        setCurrentPosition(position);
    };

    const renderStepIndicator = ({ position, stepStatus }) => {
        if (stepStatus === 'finished') {
            return <Ionicons name={'checkmark'} color={primaryColor} />;
        }
        return (
            <Text style={{ color: stepsStyles.textColor }}>{position + 1}</Text>
        );
    };
    return (
        <>
            {(() => {
                switch (type) {
                    case 'singleLine':
                        return (
                            <View
                                style={{
                                    display: 'flex',
                                    backgroundColor:
                                        stepsStyles.unFinishedColor,
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10,
                                }}>
                                <View
                                    style={{
                                        backgroundColor:
                                            stepsStyles.primaryColor,
                                        height: 10,
                                        width:
                                            Dimensions.get('window').width /
                                            (100 / stepCount),
                                        borderBottomLeftRadius: 10,
                                    }}></View>
                            </View>
                        );
                    case 'line':
                        return (
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    backgroundColor: 'white',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flex: 1,
                                    width: '95%',
                                    borderRadius: 8,
                                    borderColor: 'black',
                                    elevation: 5,
                                    shadowOffset: {
                                        width: 0,
                                        height: 5,
                                    },
                                    shadowOpacity: 5,
                                    shadowRadius: 3,
                                    shadowColor: 'gray',
                                    marginHorizontal: 50,
                                }}>
                                {[...Array(stepCount)].map((_item, index) => (
                                    <Pressable
                                        onPress={() =>
                                            setCurrentPosition(index - 1)
                                        }
                                        style={{
                                            marginHorizontal: 4,
                                            height: 7,
                                            width:
                                                (Dimensions.get('window')
                                                    .width -
                                                    40 -
                                                    stepCount * 8) /
                                                stepCount,
                                            backgroundColor:
                                                currentPosition >= index
                                                    ? lineStyles.primaryColor
                                                    : lineStyles.unFinishedColor,
                                            borderRadius: 5,
                                        }}></Pressable>
                                ))}
                            </View>
                        );
                    case 'circles':
                        const customStyle = {
                            stepIndicatorSize: 25,
                            currentStepIndicatorSize: 30,
                            separatorStrokeWidth: 2,
                            currentStepStrokeWidth: 3,
                            stepStrokeCurrentColor: stepsStyles.primaryColor,
                            stepStrokeWidth: 2,
                            stepStrokeFinishedColor: stepsStyles.primaryColor,
                            stepStrokeUnFinishedColor:
                                stepsStyles.unFinishedColor ?? '#aaaaaa',
                            separatorFinishedColor: stepsStyles.primaryColor,
                            separatorUnFinishedColor:
                                stepsStyles.unFinishedColor ?? '#aaaaaa',
                            stepIndicatorFinishedColor: '#ffffff',
                            stepIndicatorUnFinishedColor: '#ffffff',
                            stepIndicatorCurrentColor: stepsStyles.primaryColor,
                            stepIndicatorLabelFontSize: 13,
                            currentStepIndicatorLabelFontSize: 13,
                            stepIndicatorLabelCurrentColor:
                                stepsStyles.primaryColor,
                            stepIndicatorLabelFinishedColor: '#ffffff',
                            stepIndicatorLabelUnFinishedColor:
                                stepsStyles.unFinishedColor ?? '#aaaaaa',
                            labelColor: labels?.labelsColor ?? 'black',
                            labelSize: 13,
                            currentStepLabelColor:
                                labels?.currentLabelColor ?? 'black',
                        };
                        return (
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                }}>
                                <StepIndicator
                                    customStyles={customStyle}
                                    currentPosition={currentPosition}
                                    labels={labels ? labels.titles : null}
                                    onPress={(position) =>
                                        onPageChange(position)
                                    }
                                    direction={direction ?? 'horizontal'}
                                    renderStepIndicator={renderStepIndicator}
                                    stepCount={
                                        stepCount ?? labels.titles.length
                                    }
                                />
                            </View>
                        );
                    case 'oneCircle':
                        return (
                            <View
                                style={{
                                    height: stepsStyles.stepIndicatorSize,
                                    width: stepsStyles.stepIndicatorSize,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderWidth: stepsStyles.stepStrokeWidth,
                                    borderRadius:
                                        stepsStyles.stepIndicatorSize / 2,
                                    borderColor:
                                        stepsStyles.primaryColor ?? 'purple',
                                }}>
                                <Text
                                    style={{
                                        color: stepsStyles.textColor ?? 'black',
                                        fontWeight: 'bold',
                                    }}>{`${currentPosition} of ${
                                    stepCount ?? labels.titles.length
                                }`}</Text>
                            </View>
                        );
                    default:
                        break;
                }
            })()}
        </>
    );
};

export default Stepper;
