import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { MIcon, MCheckBox, MText, MTouchable, MImage } from 'components/common';

export const CBShowCaseOne = () => (
    <React.Fragment>
        <MCheckBox>Check Box 1</MCheckBox>
        <MCheckBox>Check Box 2</MCheckBox>
        <MCheckBox
            isChecked={true}
            activeBorderColor="purple"
            activeBackgroundColor="purple">
            Check Box 3
        </MCheckBox>
        <MCheckBox
            isChecked={true}
            activeBorderColor="purple"
            activeBackgroundColor="purple">
            Check Box 4
        </MCheckBox>
        <View>
            <View style={styles.row}>
                <MCheckBox
                    activeBorderColor="purple"
                    activeBackgroundColor="purple">
                    Check Box 5
                </MCheckBox>
                <MIcon size={24} color="gray" name="md-alert-circle-outline" />
            </View>
            <View style={styles.separator} />
        </View>
        <View>
            <MCheckBox
                activeBorderColor="purple"
                activeBackgroundColor="purple">
                Check Box 6
            </MCheckBox>
            <View style={styles.separator} />
        </View>
        <View>
            <View style={styles.row}>
                <MCheckBox
                    isChecked={true}
                    activeBorderColor="purple"
                    activeBackgroundColor="purple">
                    Check Box 7
                </MCheckBox>
                <MIcon size={24} color="gray" name="md-alert-circle-outline" />
            </View>
            <View style={styles.separator} />
        </View>
        <View style={styles.card}>
            <View>
                <View style={styles.row}>
                    <MCheckBox
                        activeBorderColor="purple"
                        activeBackgroundColor="purple">
                        Check Box 5
                    </MCheckBox>
                    <MIcon
                        size={24}
                        color="gray"
                        name="md-alert-circle-outline"
                    />
                </View>
                <View style={styles.separator} />
            </View>
            <View>
                <MCheckBox
                    activeBorderColor="purple"
                    activeBackgroundColor="purple">
                    Check Box 6
                </MCheckBox>
                <View style={styles.separator} />
            </View>
            <View>
                <View style={styles.row}>
                    <MCheckBox
                        isChecked={true}
                        activeBorderColor="purple"
                        activeBackgroundColor="purple">
                        Check Box 7
                    </MCheckBox>
                    <MIcon
                        size={24}
                        color="gray"
                        name="md-alert-circle-outline"
                    />
                </View>
                <View style={styles.separator} />
            </View>
            <View>
                <MCheckBox
                    isChecked={true}
                    activeBorderColor="purple"
                    activeBackgroundColor="purple">
                    Check Box 7
                </MCheckBox>
                <View style={styles.separator} />
            </View>
        </View>
    </React.Fragment>
);
export const CBShowCaseTwo = () => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleIsChecked = () => setIsChecked((p) => !p);

    return (
        <React.Fragment>
            <MCheckBox iconContainerStyle={{ borderRadius: 10 }}>
                Check Box 1
            </MCheckBox>
            <MCheckBox iconContainerStyle={{ borderRadius: 10 }}>
                Check Box 2
            </MCheckBox>
            <MCheckBox
                isChecked={true}
                activeBorderColor="purple"
                activeBackgroundColor="purple"
                iconContainerStyle={{ borderRadius: 10 }}>
                Check Box 3
            </MCheckBox>
            <MCheckBox
                isChecked={true}
                activeBorderColor="purple"
                activeBackgroundColor="purple"
                iconContainerStyle={{ borderRadius: 10 }}>
                Check Box 4
            </MCheckBox>
            <View>
                <View style={styles.row}>
                    <MCheckBox
                        activeBorderColor="purple"
                        activeBackgroundColor="purple"
                        iconContainerStyle={{ borderRadius: 10 }}>
                        Check Box 5
                    </MCheckBox>
                    <MIcon
                        size={24}
                        color="gray"
                        name="md-alert-circle-outline"
                    />
                </View>
                <View style={styles.separator} />
            </View>
            <View>
                <MCheckBox
                    activeBorderColor="purple"
                    activeBackgroundColor="purple"
                    iconContainerStyle={{ borderRadius: 10 }}>
                    Check Box 6
                </MCheckBox>
                <View style={styles.separator} />
            </View>
            <View>
                <View style={styles.row}>
                    <MCheckBox
                        isChecked={true}
                        activeBorderColor="purple"
                        activeBackgroundColor="purple"
                        iconContainerStyle={{ borderRadius: 10 }}>
                        Check Box 7
                    </MCheckBox>
                    <MIcon
                        size={24}
                        color="gray"
                        name="md-alert-circle-outline"
                    />
                </View>
                <View style={styles.separator} />
            </View>
            <MTouchable
                type="opacity"
                style={[
                    styles.view,
                    isChecked && {
                        borderColor: 'orange',
                        backgroundColor: 'orange',
                    },
                ]}
                onPress={toggleIsChecked}>
                <>
                    <View style={{ flex: 1 }}>
                        <MText textStyle={isChecked && { color: '#fff' }}>
                            Check Box
                        </MText>
                        <MText textStyle={isChecked && { color: '#fff' }}>
                            Check Box
                        </MText>
                    </View>
                    <MCheckBox
                        iconSize={16}
                        iconName="circle"
                        iconColor="#fff"
                        isChecked={isChecked}
                        activeBorderColor="#fff"
                        deActiveBorderColor="gray"
                        activeBackgroundColor="orange"
                        iconContainerStyle={{ borderRadius: 16 }}
                    />
                </>
            </MTouchable>
        </React.Fragment>
    );
};
export const CBShowCaseThree = () => {
    const [data, setData] = useState(['Master Card', 'Visa Card', 'Paypal']);
    const [isChecked, setIsChecked] = useState(0);
    return (
        <View>
            {data.map((item) => (
                <MTouchable
                    key={item}
                    type="opacity"
                    onPress={() => setIsChecked(item)}
                    style={[
                        styles.row,
                        {
                            padding: 12,
                            borderWidth: 1,
                            borderRadius: 5,
                            marginVertical: 5,
                            backgroundColor: 'white',
                            borderColor: isChecked == item ? 'orange' : 'gray',
                        },
                    ]}>
                    <>
                        <MCheckBox
                            iconSize={16}
                            iconName="circle"
                            iconColor="orange"
                            activeBorderColor="orange"
                            deActiveBorderColor="gray"
                            isChecked={isChecked == item}
                            activeBackgroundColor="white"
                            setIsChecked={() => setIsChecked(item)}
                            iconContainerStyle={{ borderRadius: 16 }}>
                            {item}
                        </MCheckBox>
                        <MImage
                            style={{ width: 24, height: 24 }}
                            imageSource={require('assets/images/sample-logo.png')}
                        />
                    </>
                </MTouchable>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 12,
        padding: 16,
        elevation: 10,
        borderRadius: 8,
        backgroundColor: '#FFF',
    },
    row: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        height: 1,
        width: '91%',
        alignSelf: 'flex-end',
        backgroundColor: 'gray',
    },
    view: {
        margin: 12,
        minHeight: 100,
        padding: 16,
        borderWidth: 1,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'stretch',
        borderColor: 'gray',
        backgroundColor: '#FFF',
    },
});
