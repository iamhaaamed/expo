import { StyleSheet } from 'react-native';

const typography = ({ FONT_SIZE, COLORS }) => {
  return StyleSheet.create({
    textSmall: {
      fontSize: FONT_SIZE.small,
      color: COLORS.text,
    },
    textRegular: {
      fontSize: FONT_SIZE.regular,
      color: COLORS.text,
    },
    textLarge: {
      fontSize: FONT_SIZE.large,
      color: COLORS.text,
    },
    textButton: {
      fontSize: FONT_SIZE.button,
    },
    titleSmall: {
      fontSize: FONT_SIZE.small * 2,
      fontWeight: 'bold',
      color: COLORS.text,
    },
    titleRegular: {
      fontSize: FONT_SIZE.regular * 2,
      fontWeight: 'bold',
      color: COLORS.text,
    },
    titleLarge: {
      fontSize: FONT_SIZE.large * 2,
      fontWeight: 'bold',
      color: COLORS.text,
    },
    textCenter: {
      textAlign: 'center',
    },
    textJustify: {
      textAlign: 'justify',
    },
    textLeft: {
      textAlign: 'left',
    },
    textRight: {
      textAlign: 'right',
    },
    span: {
      fontSize: 13,
    },
  });
};

export default typography;
