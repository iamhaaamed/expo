import React, { useLayoutEffect, useReducer, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { MInput } from 'components/common';
import useTheme from 'hooks/useTheme';
import { myReducer } from './myReducer';
import { createScreen } from 'components/elements';

const MInputShowcaseScreen = createScreen(
  () => {
    const { LAYOUT, GUTTERS } = useTheme();
    const [state, dispatch] = useReducer(myReducer, {
      firstName: '',
      middleName: '',
      jobName: '',
      description: '',
      lastName: '',
      nickName: '',
      username: '',
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
            value={state.firstName}
            onChangeText={(value) =>
              dispatch({ inputName: 'firstName', value })
            }
            placeholder="First Name"
            prefix="Dr."
          />
          <MInput
            value={state.middleName}
            onChangeText={(value) =>
              dispatch({ inputName: 'middleName', value })
            }
            placeholder="Middle Name"
            iconLeft={{
              name: 'person',
            }}
          />
          <MInput
            value={state.lastName}
            onChangeText={(value) => dispatch({ inputName: 'lastName', value })}
            placeholder="Last Name"
            iconLeft={{
              name: 'person',
              color: 'dodgerblue',
            }}
            backgroundColor="#e3f2fd"
            prefix="Mr."
          />
          <MInput
            value={state.jobName}
            onChangeText={(value) => dispatch({ inputName: 'jobName', value })}
            placeholder="Job Name"
            prefix="@"
          />
          <MInput
            value={state.description}
            onChangeText={(value) =>
              dispatch({ inputName: 'description', value })
            }
            placeholder="Description"
            textArea
            multiline
            height={150}
            iconLeft={{
              name: 'star',
            }}
          />
          <MInput
            value={state.nickName}
            onChangeText={(value) => dispatch({ inputName: 'nickName', value })}
            placeholder="Address"
            textArea
            multiline
            height={150}
            iconLeft={{
              name: 'star',
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

export default MInputShowcaseScreen;
