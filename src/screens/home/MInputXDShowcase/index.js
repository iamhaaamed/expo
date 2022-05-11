import React, { useLayoutEffect, useReducer, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { MInput } from 'components/common';
import useTheme from 'hooks/useTheme';
import { myReducer } from './myReducer';
import { createScreen } from 'components/elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MInputXDShowcaseScreen = createScreen(
  () => {
    const { LAYOUT, GUTTERS } = useTheme();
    const [state, dispatch] = useReducer(myReducer, {
      username1: '',
      password: '',
      comments: '',
      username2: 'Sam Snacksalot',
      password2: '',
      email: 'cliffordchi@domain.com',
      search: '',
    });

    return (
      <View style={LAYOUT.fill}>
        <View
          style={[
            LAYOUT.colCenter,
            GUTTERS.regularHPadding,
            GUTTERS.regularVPadding,
          ]}>
          <MInput
            value={state.username1}
            onChangeText={(value) =>
              dispatch({ inputName: 'username1', value })
            }
            placeholder="Username"
            iconLeft={{
              name: 'person',
              color: '#DBDBDB',
              size: 18,
            }}
            placeholderColor="#DBDBDB"
            backgroundColor="transparent"
            height={30}
            containerStyle={{
              borderBottomColor: 'black',
              borderBottomWidth: 2,
              borderRadius: 0,
              marginBottom: 20,
            }}
          />
          <MInput
            value={state.password}
            onChangeText={(value) => dispatch({ inputName: 'password', value })}
            placeholder="Password"
            iconLeft={{
              name: 'key',
              color: '#DBDBDB',
              size: 18,
              Component: MaterialCommunityIcons,
            }}
            placeholderColor="#DBDBDB"
            backgroundColor="transparent"
            height={30}
            containerStyle={{
              borderBottomColor: 'black',
              borderBottomWidth: 2,
              borderRadius: 0,
              marginBottom: 20,
            }}
            secureTextEntry
          />
          <MInput
            value={state.comments}
            onChangeText={(value) => dispatch({ inputName: 'comments', value })}
            placeholder="Comments..."
            placeholderColor="#DBDBDB"
            textArea
            multiline
            height={152}
            backgroundColor="transparent"
            borderColor="black"
            borderWidth={2}
            borderRadius={16}
            containerStyle={{
              marginBottom: 20,
            }}
            inputStyle={{
              paddingTop: 20,
              paddingLeft: 20,
              paddingRight: 20,
              paddingBottom: 20,
            }}
          />
          <MInput
            value={state.username2}
            onChangeText={(value) =>
              dispatch({ inputName: 'username2', value })
            }
            placeholder="Username"
            iconLeft={{
              name: 'person',
              color: '#FC6550',
              size: 18,
            }}
            placeholderColor="#DBDBDB"
            backgroundColor="transparent"
            height={30}
            containerStyle={{
              borderBottomColor: '#FC6550',
              borderBottomWidth: 2,
              borderRadius: 0,
              marginBottom: 20,
            }}
          />
          <MInput
            value={state.password2}
            onChangeText={(value) =>
              dispatch({ inputName: 'password2', value })
            }
            placeholder="Password"
            placeholderColor="#DBDBDB"
            backgroundColor="transparent"
            height={44}
            containerStyle={{
              borderColor: '#C8C7CC',
              borderWidth: 1,
              borderRadius: 8,
              marginBottom: 20,
            }}
            secureTextEntry
          />
          <MInput
            value={state.email}
            onChangeText={(value) => dispatch({ inputName: 'email', value })}
            placeholder="Email Address"
            placeholderColor="#DBDBDB"
            backgroundColor="transparent"
            height={44}
            containerStyle={{
              borderColor: '#C8C7CC',
              borderWidth: 1,
              borderRadius: 8,
              marginBottom: 20,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 20,
            }}>
            <MInput
              containerStyle={{
                borderColor: '#C8C7CC',
                borderWidth: 1,
                borderRadius: 8,
                width: 50,
                marginLeft: 6,
                marginRight: 6,
                shadowColor: 'black',
                shadowOpacity: 0.16,
                shadowRadius: 6,
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
              }}
              height={44}
              backgroundColor="transparent"
              inputStyle={{
                textAlign: 'center',
              }}
              maxLength={1}
            />
            <MInput
              containerStyle={{
                borderColor: '#C8C7CC',
                borderWidth: 1,
                borderRadius: 8,
                width: 50,
                marginLeft: 6,
                marginRight: 6,
                shadowColor: 'black',
                shadowOpacity: 0.16,
                shadowRadius: 6,
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
              }}
              height={44}
              backgroundColor="transparent"
            />
            <MInput
              containerStyle={{
                borderColor: '#C8C7CC',
                borderWidth: 1,
                borderRadius: 8,
                width: 50,
                marginLeft: 6,
                marginRight: 6,
                shadowColor: 'black',
                shadowOpacity: 0.16,
                shadowRadius: 6,
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
              }}
              height={44}
              backgroundColor="transparent"
            />
            <MInput
              containerStyle={{
                borderColor: '#C8C7CC',
                borderWidth: 1,
                borderRadius: 8,
                width: 50,
                marginLeft: 6,
                marginRight: 6,
                shadowColor: 'black',
                shadowOpacity: 0.16,
                shadowRadius: 6,
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
              }}
              height={44}
              backgroundColor="transparent"
            />
          </View>
          <MInput
            value={state.search}
            onChangeText={(value) => dispatch({ inputName: 'search', value })}
            placeholder="Search"
            placeholderColor="#BBBBBB"
            backgroundColor="transparent"
            height={50}
            containerStyle={{
              borderColor: 'crimson',
              borderWidth: 1,
              borderRadius: 50,
              marginBottom: 20,
            }}
            inputStyle={{ paddingLeft: 20 }}
            iconRight={{
              name: 'search',
              color: 'black',
              onPress: () => console.log('hi'),
            }}
          />
        </View>
      </View>
    );
  },
  {
    customTitle: 'Custom Title',
    scrollView: true,
    paddingTop: false,
    paddingBottom: false,
    horizantalPadding: true,
  },
);

const styles = StyleSheet.create({});

export default MInputXDShowcaseScreen;
