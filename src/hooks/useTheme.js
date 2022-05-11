import { useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useContext } from 'react';
import { ThemeContext, NavbarContext } from 'components/contexts';
import themes from 'constants/themes';
import * as DefaultVariables from 'constants/common';
import gutters from 'helpers/theme/gutters';
import typography from 'helpers/theme/typography';
import commonStyles from 'helpers/theme/commonStyles';
import images from 'helpers/theme/images';
import layout from 'helpers/theme/layout';
import mockData from 'constants/mock-data';

/**
 * @typedef {object} TypographyType
 * @property {import('react-native').TextStyle} textSmall
 * @property {import('react-native').TextStyle} textRegular
 * @property {import('react-native').TextStyle} textLarge
 * @property {import('react-native').TextStyle} textButton
 * @property {import('react-native').TextStyle} titleSmall
 * @property {import('react-native').TextStyle} titleRegular
 * @property {import('react-native').TextStyle} titleLarge
 * @property {import('react-native').TextStyle} textCenter
 * @property {import('react-native').TextStyle} textJustify
 * @property {import('react-native').TextStyle} textLeft
 * @property {import('react-native').TextStyle} textRight
 * @property {import('react-native').TextStyle} span
 */

/**
 * @typedef {object} LayoutType
 * @property {import('react-native').ViewStyle} column
 * @property {import('react-native').ViewStyle} columnReverse
 * @property {import('react-native').ViewStyle} colCenter
 * @property {import('react-native').ViewStyle} colVCenter
 * @property {import('react-native').ViewStyle} colHCenter
 * @property {import('react-native').ViewStyle} row
 * @property {import('react-native').ViewStyle} rowReverse
 * @property {import('react-native').ViewStyle} rowCenter
 * @property {import('react-native').ViewStyle} rowVCenter
 * @property {import('react-native').ViewStyle} rowHCenter
 * @property {import('react-native').ViewStyle} center
 * @property {import('react-native').ViewStyle} alignItemsCenter
 * @property {import('react-native').ViewStyle} alignItemsStart
 * @property {import('react-native').ViewStyle} alignItemsStretch
 * @property {import('react-native').ViewStyle} justifyContentCenter
 * @property {import('react-native').ViewStyle} justifyContentAround
 * @property {import('react-native').ViewStyle} justifyContentBetween
 * @property {import('react-native').ViewStyle} scrollSpaceAround
 * @property {import('react-native').ViewStyle} scrollSpaceBetween
 * @property {import('react-native').ViewStyle} selfStretch
 * @property {import('react-native').ViewStyle} fill
 * @property {import('react-native').ViewStyle} fullWidth
 * @property {import('react-native').ViewStyle} fullHeight
 * @property {import('react-native').ViewStyle} mirror
 * @property {import('react-native').ViewStyle} rotate90
 * @property {import('react-native').ViewStyle} rotate90Inverse
 */

/**
 * @returns {{TYPOGRAPHY: TypographyType, GUTTERS: object, COMMON: object,CONSTANTS: object, IMAGES: object, LAYOUT: LayoutType, COLORS: object, NAVIGATION_COLORS: object, FONT_SIZE: object, METRIC_SIZES: object}}
 */
export default function () {
    // Get the scheme device
    const colorScheme = useColorScheme();
    const mode = useContext(ThemeContext);
    const navbarIndex = useContext(NavbarContext);

    // Get current theme from the store
    const currentTheme = 'default';
    const darkMode =
        mode === 'device'
            ? colorScheme === 'dark'
            : mode === 'dark'
            ? true
            : 'false';

    //Select the right theme light theme ({} if not exist)
    const { Variables: themeConfigVars = {}, ...themeConfig } =
        themes[currentTheme] || {};

    const { Variables: darkThemeConfigVars = {}, ...darkThemeConfig } = darkMode
        ? themes[`${currentTheme}_dark`] || {}
        : {};

    const themeVariables = mergeVariables(
        DefaultVariables,
        themeConfigVars,
        darkThemeConfigVars,
    );

    // Build the default theme
    const baseTheme = {
        TYPOGRAPHY: typography(themeVariables),
        GUTTERS: gutters(themeVariables),
        COMMON: commonStyles(themeVariables),
        IMAGES: images(themeVariables),
        LAYOUT: layout(themeVariables),
        CONSTANTS: mockData,
        ...themeVariables,
    };

    // Merge and return the current Theme
    return buildTheme(
        darkMode,
        baseTheme,
        formatTheme(themeVariables, themeConfig || {}),
        formatTheme(themeVariables, darkThemeConfig || {}),
        navbarIndex,
    );
}

/**
 * Generate Theme with theme variables
 *
 * @param variables
 * @param theme
 * @return {{}|{[p: string]: *}}
 */
const formatTheme = (variables, theme) => {
    return Object.entries(theme).reduce((acc, [name, generate]) => {
        return {
            ...acc,
            [name]: generate(variables),
        };
    }, {});
};

/**
 * Merge all variables for building the theme
 * baseTheme <- currentTheme <- currentDarkTheme
 *
 * @param variables : {MetricsSizes?: {small: number, large: number, tiny: number, regular: number}, NavigationColors?: {primary: string}, FontSize?: {small: number, large: number, regular: number}, Colors?: {white: string, success: string, text: string, error: string, transparent: string, primary: string}} variables from @Theme/Variables
 * @param themeConfig : currentTheme form @Theme/themes
 * @param darkThemeConfig : currentDarkTheme from @Theme/themes
 * @return {{}|{[p: string]: *}}
 */
const mergeVariables = (variables, themeConfig, darkThemeConfig) =>
    Object.entries(variables).reduce((acc, [group, vars]) => {
        return {
            ...acc,
            [group]: {
                ...vars,
                ...(themeConfig[group] || {}),
                ...(darkThemeConfig[group] || {}),
            },
        };
    }, {});

/**
 * Provide all the theme exposed with useTheme()
 *
 * @param darkMode : boolean
 * @param baseTheme
 * @param themeConfig
 * @param darkThemeConfig
 * @return {{[p: string]: *, NavigationTheme: {colors}, darkMode: *}}
 */
const buildTheme = (
    darkMode,
    baseTheme,
    themeConfig,
    darkThemeConfig,
    navbarIndex,
) => {
    return {
        ...mergeTheme(baseTheme, themeConfig, darkThemeConfig),
        darkMode,
        NavigationTheme: mergeNavigationTheme(
            darkMode ? DarkTheme : DefaultTheme,
            baseTheme.NavigationColors,
        ),
        navbarIndex,
    };
};

/**
 * Merge theme from baseTheme <- currentTheme <- currentDarkTheme
 *
 * @param baseTheme
 * @param theme
 * @param darkTheme
 * @return {{[p: string]: *}}
 */
const mergeTheme = (baseTheme, theme, darkTheme) => ({
    ...Object.entries(baseTheme).reduce(
        (acc, [key, value]) => ({
            ...acc,
            [key]: {
                ...value,
                ...(theme[key] || {}),
                ...(darkTheme[key] || {}),
            },
        }),
        {},
    ),
});

/**
 * Merge the React Navigation Theme
 *
 * @param reactNavigationTheme
 * @param overrideColors
 * @return {{colors}}
 */
const mergeNavigationTheme = (reactNavigationTheme, overrideColors) => ({
    ...reactNavigationTheme,
    colors: {
        ...reactNavigationTheme.colors,
        ...overrideColors,
    },
});
