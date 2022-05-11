import { Dimensions } from 'react-native';

export const { width,height } = Dimensions.get('window');

//Guideline sizes are based on standard ~5 screen mobile device
const guidelineBaseWidth = 375;
            const guidelineBaseHeight = 812;
            export const screenSize = Math.sqrt(width * height) / 100;

            export const scale = (size) => (width / guidelineBaseWidth) * size;
            export const verticalScale = (size) => (height / guidelineBaseHeight) * size;

            export const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;
            export const scaleSpace = (size) => {
                ((height / guidelineBaseHeight) * size).toFixed(2);
            };
            export const scaleSpaceW = (size) => {
                (width / guidelineBaseWidth) * size;
            };
            