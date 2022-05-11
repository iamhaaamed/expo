import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createScreen } from 'components/elements';
import { DrawerToggleButton } from '@react-navigation/drawer';

const MDrawerShowcase = createScreen(
    ({ navigation }) => {
        return (
            <View style={styles.container}>
                <View style={styles.hamburgerMenu}>
                    <DrawerToggleButton />
                </View>
            </View>
        );
    },
    {
        scrollView: false,
        paddingBottom: false,
        paddingTop: false,
    },
);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    hamburgerMenu: {
        width: 48,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default MDrawerShowcase;
