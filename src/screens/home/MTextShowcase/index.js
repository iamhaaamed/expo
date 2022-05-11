import React from 'react';
import { View, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import useTheme from 'hooks/useTheme';
import { MIcon, MText } from 'components/common';
import { createScreen } from 'components/elements';
import MStatusBar from 'components/common/MStatusBar';

const MTextShowcaseScreen = createScreen(
  () => {
    const { LAYOUT, TYPOGRAPHY, GUTTERS } = useTheme();
    return (
      <View style={[LAYOUT.fill, LAYOUT.colHCenter, GUTTERS.regularHPadding]}>
        <MText textStyle={TYPOGRAPHY.titleLarge}>Title Large</MText>
        <MText textStyle={TYPOGRAPHY.titleRegular}>Title Regular</MText>
        <MText textStyle={TYPOGRAPHY.titleSmall}>Title Small</MText>
        <MText textStyle={TYPOGRAPHY.textLarge}>Text Large</MText>
        <MText textStyle={TYPOGRAPHY.textRegular}>Text Regular</MText>
        <MText textStyle={TYPOGRAPHY.textSmall}>Text Small</MText>
        <MText textStyle={TYPOGRAPHY.textCenter}>Text Center</MText>
        <MText textStyle={TYPOGRAPHY.textJustify}>Text Justify</MText>
        <MText textStyle={TYPOGRAPHY.textLeft}>Text Left</MText>
        <MText textStyle={TYPOGRAPHY.textRight}>Text Right</MText>
        <MText textStyle={TYPOGRAPHY.textCenter} color="purple">
          With color
        </MText>
        <MText textStyle={[TYPOGRAPHY.textCenter, styles.custom]}>
          With custom textStyle
        </MText>
        <MText
          containerStyle={styles.container}
          textStyle={TYPOGRAPHY.textCenter}>
          With Container Style
        </MText>
        <MText
          containerStyle={styles.button}
          textStyle={[TYPOGRAPHY.textCenter, styles.buttonText]}
          onPress={() => console.log('Clicked!')}>
          With onPress
        </MText>
        <MText textStyle={TYPOGRAPHY.textCenter} iconName="car">
          With icon
        </MText>
        <MText
          textStyle={TYPOGRAPHY.textCenter}
          iconName="alarm"
          onPress={() => console.log('Alarm Clicked')}
          containerStyle={styles.button}
          color="white">
          With icon & onPress
        </MText>
        <MIcon name="alarm-outline" />
        <MIcon
          name="directions-walk"
          size={42}
          color="blue"
          IconComponent={MaterialIcons}
        />
        <MStatusBar
          backgroundColor = "Orange"
        />
      </View>
    );
  },
  {
    scrollView: true,
    paddingBottom: false,
    paddingTop: false,
  },
);

const styles = StyleSheet.create({
  custom: {
    color: 'red',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  container: {
    borderColor: 'blue',
    borderRadius: 6,
    borderWidth: 3,
    padding: 6,
    marginVertical: 3,
    backgroundColor: '#ccc',
  },
  button: {
    backgroundColor: 'dodgerblue',
    borderRadius: 6,
    padding: 6,
    marginVertical: 3,
  },
  buttonText: {
    color: 'white',
  },
});

export default MTextShowcaseScreen;
