import React from 'react';
import { scale } from 'utils';
import { View } from 'react-native';
import { MDropDown, MIcon, MText } from 'components/common';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const DDShowCaseOne = ({ data, setSelectedItem }) => (
    <View style={{ marginBottom: 10 }}>
        <MDropDown
            data={data}
            getSelectedItem={(item) => setSelectedItem(item)}
            placeholderObject={{ label: 'Default select 1' }}
            defaultAndroidMode={false}
            style={{
                inputAndroid: {
                    color: 'black',
                    fontSize: scale(16),
                    borderBottomWidth: 0.5,
                },
                inputIOS: {
                    fontSize: scale(16),
                    borderBottomWidth: 0.5,
                    paddingHorizontal: scale(5),
                    paddingVertical: scale(14),
                },
                inputAndroidContainer: {
                    justifyContent: 'center',
                },
                inputIOSContainer: {
                    justifyContent: 'center',
                },
            }}
        />
    </View>
);

export const DDShowCaseTwo = ({ data, setSelectedItem }) => (
    <View style={{ marginBottom: 10 }}>
        <MDropDown
            data={data}
            getSelectedItem={(item) => setSelectedItem(item)}
            placeholderObject={{ label: 'Default select 2' }}
            defaultAndroidMode={false}
            Icon={() => (
                <MIcon
                    color="#fff"
                    name="keyboard-arrow-down"
                    IconComponent={MaterialIcons}
                />
            )}
            style={{
                inputAndroid: {
                    color: '#fff',
                    fontSize: scale(16),
                },
                inputIOS: {
                    color: '#fff',
                    fontSize: scale(16),
                    paddingHorizontal: scale(5),
                    paddingVertical: scale(14),
                },
                inputAndroidContainer: {
                    paddingLeft: 14,
                    borderRadius: 8,
                    backgroundColor: 'gray',
                    justifyContent: 'center',
                },
                inputIOSContainer: {
                    paddingLeft: 14,
                    borderRadius: 8,
                    backgroundColor: 'gray',
                    justifyContent: 'center',
                },
            }}
        />
    </View>
);

export const DDShowCaseThree = ({ data, setSelectedItem }) => (
    <View style={{ marginBottom: 10 }}>
        <MDropDown
            data={data}
            getSelectedItem={(item) => setSelectedItem(item)}
            placeholderObject={{ label: 'Default select 3' }}
            defaultAndroidMode={false}
            Icon={() => (
                <MIcon
                    size={25}
                    color="gray"
                    name="arrow-drop-down"
                    IconComponent={MaterialIcons}
                />
            )}
            style={{
                inputAndroid: {
                    color: 'gray',
                    fontSize: scale(16),
                },
                inputIOS: {
                    color: '#gray',
                    fontSize: scale(16),
                },
                inputAndroidContainer: {
                    height: 85,
                    paddingLeft: 14,
                    borderRadius: 24,
                    backgroundColor: '#e5e5e5',
                    justifyContent: 'center',
                },
                inputIOSContainer: {
                    height: 85,
                    paddingLeft: 14,
                    borderRadius: 24,
                    backgroundColor: '#e5e5e5',
                    justifyContent: 'center',
                },
            }}
        />
    </View>
);

export const DDShowCaseFour = ({ data, setSelectedItem }) => (
    <View style={{ marginBottom: 10 }}>
        <MDropDown
            data={data}
            getSelectedItem={(item) => setSelectedItem(item)}
            placeholderObject={{ label: 'Default select 4' }}
            defaultAndroidMode={false}
            style={{
                inputAndroid: {
                    color: 'gray',
                    fontSize: scale(16),
                },
                inputIOS: {
                    color: 'gray',
                    fontSize: scale(16),
                },
                inputAndroidContainer: {
                    paddingLeft: 14,
                    borderRadius: 8,
                    backgroundColor: '#f3f8fa',
                    justifyContent: 'center',
                },
                inputIOSContainer: {
                    paddingLeft: 14,
                    borderRadius: 8,
                    backgroundColor: '#f3f8fa',
                    justifyContent: 'center',
                    paddingHorizontal: scale(5),
                    paddingVertical: scale(14),
                },
            }}
        />
    </View>
);

export const DDShowCaseFive = ({ data, setSelectedItem }) => (
    <View style={{ marginBottom: 10 }}>
        <MDropDown
            data={data}
            getSelectedItem={(item) => setSelectedItem(item)}
            placeholderObject={{ label: 'Default select 5' }}
            defaultAndroidMode={false}
            style={{
                inputAndroid: {
                    color: 'gray',
                    fontSize: scale(16),
                },
                inputIOS: {
                    color: 'gray',
                    fontSize: scale(16),
                    paddingHorizontal: scale(5),
                    paddingVertical: scale(14),
                },
                inputAndroidContainer: {
                    borderWidth: 1,
                    paddingLeft: 14,
                    borderRadius: 8,
                    borderColor: '#ccc',
                    backgroundColor: '#fff',
                    justifyContent: 'center',
                },
                inputIOSContainer: {
                    borderWidth: 1,
                    paddingLeft: 14,
                    borderRadius: 8,
                    borderColor: '#ccc',
                    backgroundColor: '#fff',
                    justifyContent: 'center',
                },
            }}
        />
    </View>
);

export const DDShowCaseSix = ({ data, setSelectedItem }) => (
    <View style={{ marginBottom: 10 }}>
        <MDropDown
            disabled
            data={data}
            getSelectedItem={(item) => setSelectedItem(item)}
            placeholderObject={{ label: 'Default select 6' }}
            defaultAndroidMode={false}
            style={{
                inputAndroid: {
                    color: 'gray',
                    fontSize: scale(16),
                },
                inputIOS: {
                    color: 'gray',
                    fontSize: scale(16),
                    paddingHorizontal: scale(5),
                    paddingVertical: scale(14),
                },
                inputAndroidContainer: {
                    borderWidth: 1,
                    paddingLeft: 14,
                    borderRadius: 8,
                    borderColor: '#ccc',
                    backgroundColor: '#e5e5e5',
                    justifyContent: 'center',
                },
                inputIOSContainer: {
                    borderWidth: 1,
                    paddingLeft: 14,
                    borderRadius: 8,
                    borderColor: '#ccc',
                    backgroundColor: '#e5e5e5',
                    justifyContent: 'center',
                },
            }}
        />
    </View>
);

export const DDShowCaseSeven = ({ data, setSelectedItem }) => (
    <View style={{ marginBottom: 10 }}>
        <MDropDown
            label="Default"
            message="Default state"
            data={data}
            getSelectedItem={(item) => setSelectedItem(item)}
            placeholderObject={{ label: 'Default select 7' }}
            defaultAndroidMode={false}
            style={{
                inputAndroid: {
                    color: 'gray',
                    fontSize: scale(16),
                },
                inputIOS: {
                    color: 'gray',
                    fontSize: scale(16),
                    paddingHorizontal: scale(5),
                    paddingVertical: scale(14),
                },
                inputAndroidContainer: {
                    borderWidth: 1,
                    paddingLeft: 14,
                    borderRadius: 8,
                    borderColor: '#ccc',
                    backgroundColor: '#fff',
                    justifyContent: 'center',
                },
                inputIOSContainer: {
                    borderWidth: 1,
                    paddingLeft: 14,
                    borderRadius: 8,
                    borderColor: '#ccc',
                    backgroundColor: '#fff',
                    justifyContent: 'center',
                },
            }}
        />
    </View>
);

export const DDShowCaseEight = ({ data, setSelectedItem }) => (
    <View style={{ marginBottom: 10 }}>
        <MDropDown
            label="Success"
            message="Success state"
            messageStyle={{ color: 'green' }}
            data={data}
            getSelectedItem={(item) => setSelectedItem(item)}
            placeholderObject={{ label: 'Default select 8' }}
            defaultAndroidMode={false}
            style={{
                inputAndroid: {
                    color: 'gray',
                    fontSize: scale(16),
                },
                inputIOS: {
                    color: 'gray',
                    fontSize: scale(16),
                    paddingHorizontal: scale(5),
                    paddingVertical: scale(14),
                },
                inputAndroidContainer: {
                    borderWidth: 1,
                    paddingLeft: 14,
                    borderRadius: 8,
                    borderColor: 'green',
                    backgroundColor: '#fff',
                    justifyContent: 'center',
                },
                inputIOSContainer: {
                    borderWidth: 1,
                    paddingLeft: 14,
                    borderRadius: 8,
                    borderColor: 'green',
                    backgroundColor: '#fff',
                    justifyContent: 'center',
                },
            }}
        />
    </View>
);

export const DDShowCaseNine = ({ data, setSelectedItem }) => (
    <View style={{ marginBottom: 10 }}>
        <MDropDown
            label="Error"
            message="Error state"
            messageStyle={{ color: 'red' }}
            data={data}
            getSelectedItem={(item) => setSelectedItem(item)}
            placeholderObject={{ label: 'Default select 9' }}
            defaultAndroidMode={false}
            style={{
                inputAndroid: {
                    color: 'gray',
                    fontSize: scale(16),
                },
                inputIOS: {
                    color: 'gray',
                    fontSize: scale(16),
                    paddingHorizontal: scale(5),
                    paddingVertical: scale(14),
                },
                inputAndroidContainer: {
                    borderWidth: 1,
                    paddingLeft: 14,
                    borderRadius: 8,
                    borderColor: 'red',
                    backgroundColor: '#fff',
                    justifyContent: 'center',
                },
                inputIOSContainer: {
                    borderWidth: 1,
                    paddingLeft: 14,
                    borderRadius: 8,
                    borderColor: 'red',
                    backgroundColor: '#fff',
                    justifyContent: 'center',
                },
            }}
        />
    </View>
);

export const DDShowCaseTen = ({ data, setSelectedItem }) => (
    <View style={{ marginBottom: 10, flexDirection: 'row' }}>
        <MText
            containerStyle={{
                borderWidth: 1,
                borderColor: '#ccc',
                paddingHorizontal: 16,
                borderTopLeftRadius: 8,
                justifyContent: 'center',
                borderBottomLeftRadius: 8,
                backgroundColor: '#e5e5e5',
            }}
            textStyle={{ fontSize: 20 }}>
            Button
        </MText>
        <MDropDown
            data={data}
            getSelectedItem={(item) => setSelectedItem(item)}
            placeholderObject={{ label: 'Default select 10' }}
            defaultAndroidMode={false}
            style={{
                wrapperStyle: {
                    flex: 1,
                },
                inputAndroid: {
                    color: 'gray',
                    fontSize: scale(16),
                },
                inputIOS: {
                    color: 'gray',
                    fontSize: scale(16),
                    paddingHorizontal: scale(5),
                    paddingVertical: scale(14),
                },
                inputAndroidContainer: {
                    borderWidth: 1,
                    paddingLeft: 14,
                    borderColor: '#ccc',
                    backgroundColor: '#fff',
                    borderTopRightRadius: 8,
                    justifyContent: 'center',
                    borderBottomRightRadius: 8,
                },
                inputIOSContainer: {
                    borderWidth: 1,
                    paddingLeft: 14,
                    borderColor: '#ccc',
                    backgroundColor: '#fff',
                    borderTopRightRadius: 8,
                    justifyContent: 'center',
                    borderBottomRightRadius: 8,
                },
            }}
        />
    </View>
);

export const DDShowCaseEleven = ({ data, setSelectedItem }) => (
    <View style={{ marginBottom: 10, flexDirection: 'row' }}>
        <MDropDown
            data={data}
            getSelectedItem={(item) => setSelectedItem(item)}
            placeholderObject={{ label: 'Drop down' }}
            defaultAndroidMode={false}
            Icon={() => (
                <MIcon
                    size={25}
                    color="gray"
                    name="arrow-drop-down"
                    IconComponent={MaterialIcons}
                />
            )}
            style={{
                wrapperStyle: {
                    width: 'auto',
                    minWidth: scale(120),
                },
                inputAndroid: {
                    color: 'gray',
                    fontSize: scale(16),
                },
                inputIOS: {
                    color: 'gray',
                    fontSize: scale(16),
                    paddingHorizontal: scale(5),
                    paddingVertical: scale(14),
                },
                inputAndroidContainer: {
                    flex: 1,
                    borderWidth: 1,
                    paddingLeft: 14,
                    borderColor: '#000',
                    backgroundColor: '#fff',
                    justifyContent: 'center',
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                },
                inputIOSContainer: {
                    borderWidth: 1,
                    paddingLeft: 14,
                    borderColor: '#000',
                    backgroundColor: '#fff',
                    justifyContent: 'center',
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                },
            }}
        />
        <MText
            containerStyle={{
                flex: 1,
                borderWidth: 1,
                borderColor: '#ccc',
                paddingHorizontal: 16,
                justifyContent: 'center',
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8,
            }}
            textStyle={{ fontSize: 20 }}>
            Button
        </MText>
    </View>
);

export const DDShowCaseTwelve = ({ data, setSelectedItem }) => (
    <View style={{ marginBottom: 10, flexDirection: 'row' }}>
        <MDropDown
            data={data}
            getSelectedItem={(item) => setSelectedItem(item)}
            placeholderObject={{ label: 'Action' }}
            defaultAndroidMode={false}
            Icon={() => (
                <MIcon
                    size={25}
                    color="gray"
                    name="arrow-drop-down"
                    IconComponent={MaterialIcons}
                />
            )}
            style={{
                wrapperStyle: {
                    width: 'auto',
                    minWidth: scale(110),
                },
                iconContainer: {
                    height: '100%',
                    borderLeftWidth: 1,
                    justifyContent: 'center',
                },
                inputAndroid: {
                    color: 'gray',
                    fontSize: scale(16),
                },
                inputIOS: {
                    color: 'gray',
                    fontSize: scale(16),
                    paddingHorizontal: scale(5),
                    paddingVertical: scale(14),
                },
                inputAndroidContainer: {
                    flex: 1,
                    borderWidth: 1,
                    paddingLeft: 14,
                    borderColor: '#000',
                    backgroundColor: '#fff',
                    justifyContent: 'center',
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                },
                inputIOSContainer: {
                    borderWidth: 1,
                    paddingLeft: 14,
                    borderColor: '#000',
                    backgroundColor: '#fff',
                    justifyContent: 'center',
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                },
            }}
        />
        <MText
            containerStyle={{
                flex: 1,
                borderWidth: 1,
                borderColor: '#ccc',
                paddingHorizontal: 16,
                justifyContent: 'center',
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8,
            }}
            textStyle={{ fontSize: 20 }}>
            Button
        </MText>
    </View>
);

export const DDShowCaseThirteen = ({ data, setSelectedItem }) => (
    <View style={{ marginBottom: 10 }}>
        <MDropDown
            data={data}
            getSelectedItem={(item) => setSelectedItem(item)}
            placeholderObject={{ label: 'Body' }}
            defaultAndroidMode={false}
            Icon={() => (
                <MIcon
                    size={25}
                    color="black"
                    name="arrow-drop-down"
                    IconComponent={MaterialIcons}
                />
            )}
            style={{
                container: {
                    elevation: 3,
                    borderRadius: 8,
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 0.3,
                },
                iconContainer: {
                    height: '100%',
                    borderLeftWidth: 1,
                    borderColor: '#ccc',
                    justifyContent: 'center',
                },
                inputAndroid: {
                    color: 'gray',
                    fontSize: scale(16),
                },
                inputIOS: {
                    color: 'gray',
                    fontSize: scale(16),
                    paddingHorizontal: scale(5),
                    paddingVertical: scale(14),
                },
                inputAndroidContainer: {
                    flex: 1,
                    paddingLeft: 14,
                    borderRadius: 8,
                    backgroundColor: '#fff',
                    justifyContent: 'center',
                },
                inputIOSContainer: {
                    paddingLeft: 14,
                    borderRadius: 8,
                    backgroundColor: '#fff',
                    justifyContent: 'center',
                },
            }}
        />
    </View>
);

export const DDShowCaseFourteen = ({ data, setSelectedItem }) => (
    <View style={{ marginBottom: 10 }}>
        <MDropDown
            data={data}
            getSelectedItem={(item) => setSelectedItem(item)}
            placeholderObject={{ label: 'Body' }}
            defaultAndroidMode={false}
            Icon={() => (
                <MIcon
                    size={25}
                    color="black"
                    name="arrow-drop-down"
                    IconComponent={MaterialIcons}
                />
            )}
            style={{
                container: {
                    elevation: 3,
                    borderRadius: 8,
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 0.3,
                },
                inputAndroid: {
                    color: 'gray',
                    fontSize: scale(16),
                },
                inputIOS: {
                    color: 'gray',
                    fontSize: scale(16),
                    paddingHorizontal: scale(5),
                    paddingVertical: scale(14),
                },
                inputAndroidContainer: {
                    flex: 1,
                    paddingLeft: 14,
                    borderRadius: 8,
                    backgroundColor: '#fff',
                    justifyContent: 'center',
                },
                inputIOSContainer: {
                    paddingLeft: 14,
                    borderRadius: 8,
                    backgroundColor: '#fff',
                    justifyContent: 'center',
                },
            }}
        />
    </View>
);
