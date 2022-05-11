import React from 'react';
import { View } from 'react-native';
import { createScreen } from 'components/elements';
import { MButton, MSnackbar } from 'components/common';

const MSnackbarShowcase = createScreen(
    () => {
        return (
            <View style={{ marginTop: 5 }}>
                <MSnackbar
                    type="success"
                    title="Success Message"
                    description="This is a success message"
                    position="bottom"
                    iconPosition={'right'}
                    duration={2000}
                    floating={true}
                    style={{
                        // backgroundColor: 'white',
                        borderWidth: 1,
                        borderColor: 'blue',
                    }}
                    titleStyle={{ fontSize: 17, color: 'blue' }}
                    textStyle={{ fontSize: 15, color: 'white' }}>
                    {({ showSnackbar }) => (
                        <View>
                            <MButton
                                onPress={() => showSnackbar()}
                                text="Fix toast"
                            />
                        </View>
                    )}
                </MSnackbar>
                <MSnackbar
                    type="danger"
                    title="danger Message"
                    description="This is a danger message"
                    position="bottom"
                    iconPosition={'right'}
                    duration={2000}
                    floating={false}
                    style={
                        {
                            // backgroundColor: 'orange',
                        }
                    }
                    titleStyle={{ fontSize: 17, color: 'yellow' }}
                    textStyle={{ fontSize: 15, color: 'white' }}>
                    {({ showSnackbar }) => (
                        <View>
                            <MButton
                                onPress={() => showSnackbar()}
                                text="danger toast"
                            />
                        </View>
                    )}
                </MSnackbar>
                <MSnackbar
                    type="info"
                    title="info Message"
                    description="This is a info message"
                    position="bottom"
                    iconPosition={'right'}
                    duration={2000}
                    floating={true}
                    style={{
                        // backgroundColor: 'white',
                        borderWidth: 1,
                        borderColor: 'blue',
                    }}
                    titleStyle={{ fontSize: 17, color: 'blue' }}
                    textStyle={{ fontSize: 15, color: 'white' }}>
                    {({ showSnackbar }) => (
                        <View>
                            <MButton
                                onPress={() => showSnackbar()}
                                text="Info Toast"
                            />
                        </View>
                    )}
                </MSnackbar>
                <MSnackbar
                    type="warning"
                    title="warning Message"
                    description="This is a warning message"
                    position="bottom"
                    iconPosition={'left'}
                    duration={2000}
                    floating={false}
                    style={{
                        // backgroundColor: 'white',
                        borderWidth: 1,
                        borderColor: 'blue',
                    }}
                    titleStyle={{ fontSize: 17, color: 'blue' }}
                    textStyle={{ fontSize: 15, color: 'white' }}>
                    {({ showSnackbar }) => (
                        <View>
                            <MButton
                                onPress={() => showSnackbar()}
                                text="warning Toast"
                            />
                        </View>
                    )}
                </MSnackbar>
            </View>
        );
    },
    {
        scrollView: false,
        paddingBottom: false,
        paddingTop: false,
    },
);

export default MSnackbarShowcase;
