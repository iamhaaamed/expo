import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import useTheme from 'hooks/useTheme';
import MScreenContainer from './MScreenContainer';

export const createScreen = (
    ScreenComponent,
    {
        scrollView = false,
        paddingTop = true,
        paddingBottom = true,
        horizantalPadding = false,
        backgroundColor,
        hideNavBar = false,
        customTitle,
    },
) => (props) => {
    const navigation = props.navigation;
    const [loading, setLoading] = useState(false);
    const { LAYOUT, COLORS } = useTheme();
    useEffect(() => {
        requestAnimationFrame(() => setLoading(false));
    }, []);
    useLayoutEffect(() => {
        if (customTitle) {
            navigation.setOptions({ title: customTitle });
        }
        if (hideNavBar) {
            navigation.setOptions({ headerShown: false });
        }
    }, [navigation]);

    return (
        <MScreenContainer
            {...{
                backgroundColor,
                horizantalPadding,
                paddingBottom,
                paddingTop,
            }}>
            {loading ? (
                <View style={[LAYOUT.fill, LAYOUT.center]}>
                    <ActivityIndicator size="large" color={COLORS.primary} />
                </View>
            ) : scrollView ? (
                <ScrollView>
                    <ScreenComponent {...props} />
                </ScrollView>
            ) : (
                <ScreenComponent {...props} />
            )}
        </MScreenContainer>
    );
};
