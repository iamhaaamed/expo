/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

import { Dimensions } from 'react-native';
import { scale } from 'utils';

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;

/**
 * Colors
 */
export const COLORS = {
    // Example colors:
    transparent: 'transparent',
    inputBackground: '#FFFFFF',
    white: '#ffffff',
    text: '#212529',
    primary: '#3f51b5',
    secondary: '#ffb300',
    textOnPrimary: '#ffffff',
    textOnSecondary: '#000000',
    success: '#28a745',
    error: '#dc3545',
    inputText: '#212529',
    placeholder: '#86888a',
    background: 'whitesmoke',
    disabled: '#989898',
    Color304: '#FFFFFF',
    Color3042: '#FEFEFE',
    Color451: 'rgba(255,255,255,0.94)',
    Color193: '#B388FF',
    Color263: '#707070',
    Color386: '#141414',
    Color415: '#C6C6C8',
    Color292: '#121212',
    Color780: '#8E8E8E',
    Color893: '#DEDEDE',
    Color988: '#FF5A5F',
    Color356: '#C81719',
    Color707: '#C5C5C5',
    Color980: '#2A3277',
    Color850: '#5B5BA6',
    Color792: '#F1EDFF',
    Color332: '#000000',
    Color703: '#008000',
    Color669: '#9FEB9F',
    Color177: '#00A03B',
    Color178: '#DFDFDF',
    Color179: '#8D99AE',
    Color180: '#FFB700',
    ColorHeader: '#000D4A',
    borderColor: '#DEDEDE',
};

export const NAVIGATION_COLORS = {
    primary: COLORS.primary,
    tabBarActiveTint: COLORS.primary,
    tabBarInactiveTint: COLORS.disabled,
};

/**
 * FontSizes
 */
export const FONT_SIZE = {
    tiny: 6,
    small: 8,
    regular: 12,
    large: 16,
    h1: 22,
    h2: 20,
    h3: 18,
    h4: 16,
    h5: 14,
    icon: 20,
    button: 12,
};

/**
 * Metrics Sizes
 */
const nano = scale(3);
const tiny = scale(6);
const small = scale(12);
const regular = scale(16);
const large = scale(32);
export const METRIC_SIZES = {
    nano,
    tiny,
    small,
    regular,
    large,
};
