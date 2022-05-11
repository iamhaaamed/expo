import React from 'react';
import Stepper from 'components/common/MStepper';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { MText } from 'components/common';

const labels = [
    'Cart',
    'Delivery Address',
    'Order Summary',
    'Payment Method',
    'Track',
];

const MStepperShowcase = ({ style }) => {
    return (
        <SafeAreaView style={[styles.container, style]}>
            <View
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginHorizontal: 10,
                    marginBottom: 10,
                    borderRadius: 10,
                    height: 50,
                    backgroundColor: 'white',
                    shadowOffset: { width: 0, height: 5 },
                    shadowOpacity: 5,
                    shadowColor: 'gray',
                }}>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: 20,
                        marginTop: 10,
                    }}>
                    <MText textStyle={{ fontWeight: 'bold', color: '#b388ff' }}>
                        25%
                    </MText>
                    <MText textStyle={{ fontWeight: 'bold' }}>
                        Update in progress...
                    </MText>
                    <MText textStyle={{ fontWeight: 'bold', color: '#ffb6ff' }}>
                        5s left
                    </MText>
                </View>
                <Stepper
                    stepsStyles={{
                        primaryColor: '#b388ff',
                        unFinishedColor: '#ffeeff',
                    }}
                    stepCount={25}
                    type={'singleLine'}
                />
            </View>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignContent: 'center',
                    marginHorizontal: 10,
                    shadowOffset: { width: 0, height: 5 },
                    shadowOpacity: 5,
                    shadowColor: 'gray',
                    backgroundColor: 'white',
                    borderRadius: 10,
                    padding: 10,
                    marginBottom: 10,
                }}>
                <Stepper
                    type={'oneCircle'}
                    stepCount={5}
                    stepsStyles={{
                        primaryColor: '#b388ff',
                        unFinishedColor: 'gray',
                        textColor: 'black',
                        stepIndicatorSize: 70,
                        stepStrokeWidth: 4,
                    }}
                />
                <View
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginLeft: 15,
                    }}>
                    <MText textStyle={{ fontWeight: 'bold' }}>Step 2</MText>
                    <MText>Overview of UI/UX</MText>
                </View>
            </View>
            <View
                style={{
                    height: '5%',
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 20,
                }}>
                <Stepper
                    type={'line'}
                    stepCount={6}
                    lineStyles={{
                        primaryColor: 'purple',
                        unFinishedColor: 'grey',
                    }}
                />
            </View>
            <View
                style={{
                    height: '15%',
                    display: 'flex',
                    marginHorizontal: 10,
                    marginBottom: 10,
                    borderRadius: 10,
                    backgroundColor: 'white',
                    shadowOffset: { width: 0, height: 5 },
                    shadowOpacity: 5,
                    shadowColor: 'gray',
                    paddingVertical: 10,
                }}>
                <Stepper
                    type={'circles'}
                    labels={{
                        titles: labels,
                        labelsColor: 'black',
                        currentLabelColor: '#b388ff',
                    }}
                    stepsStyles={{
                        primaryColor: '#b388ff',
                        unFinishedColor: 'gray',
                        textColor: 'black',
                    }}
                    stepCount={5}
                />
            </View>
            <View
                style={{
                    height: '30%',
                    display: 'flex',
                    marginHorizontal: 10,
                    marginBottom: 10,
                    borderRadius: 10,
                    backgroundColor: 'white',
                    shadowOffset: { width: 0, height: 5 },
                    shadowOpacity: 5,
                    shadowColor: 'gray',
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                }}>
                <Stepper
                    type={'circles'}
                    direction="vertical"
                    labels={{
                        titles: labels,
                        labelsColor: 'black',
                        currentLabelColor: '#b388ff',
                    }}
                    stepsStyles={{
                        primaryColor: '#b388ff',
                        unFinishedColor: 'gray',
                        textColor: 'black',
                    }}
                />
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
    },
});
export default MStepperShowcase;
