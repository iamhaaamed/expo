import React from 'react';
import { StyleSheet } from 'react-native';
import { MTab, MText } from 'components/common';

const activeColor = '#00a389',
    deActiveColor = '#808799';

export const TShowCaseOne = () => (
    <MTab
        variant="default"
        disableIndicator
        style={styles.tab}
        activeColor={activeColor}
        deActiveColor={deActiveColor}>
        <MTab.Item title="Home" />
        <MTab.Item title="Profile" />
        <MTab.Item title="Cart" />
        <MTab.View style={styles.view}>
            <MText h1>Home</MText>
        </MTab.View>
        <MTab.View style={styles.view}>
            <MText h1>Shop</MText>
        </MTab.View>
        <MTab.View style={styles.view}>
            <MText h1>Cart</MText>
        </MTab.View>
    </MTab>
);
export const TShowCaseTwo = () => (
    <MTab
        variant="default"
        style={styles.tab}
        activeColor={activeColor}
        deActiveColor={deActiveColor}
        indicatorStyle={styles.indicatorTwoStyle}>
        <MTab.Item title="Home" />
        <MTab.Item title="Profile" />
        <MTab.Item title="Cart" />
        <MTab.View style={styles.view}>
            <MText h1>Home</MText>
        </MTab.View>
        <MTab.View style={styles.view}>
            <MText h1>Shop</MText>
        </MTab.View>
        <MTab.View style={styles.view}>
            <MText h1>Cart</MText>
        </MTab.View>
    </MTab>
);
export const TShowCaseThree = () => (
    <MTab
        variant="default"
        style={styles.tab}
        activeColor={activeColor}
        deActiveColor={deActiveColor}
        indicatorStyle={styles.indicatorThreeStyle}>
        <MTab.Item title="Home" />
        <MTab.Item title="Profile" />
        <MTab.Item title="Cart" />
        <MTab.View style={styles.view}>
            <MText h1>Home</MText>
        </MTab.View>
        <MTab.View style={styles.view}>
            <MText h1>Shop</MText>
        </MTab.View>
        <MTab.View style={styles.view}>
            <MText h1>Cart</MText>
        </MTab.View>
    </MTab>
);
export const TShowCaseFour = () => (
    <MTab
        variant="default"
        style={styles.tab}
        activeColor={activeColor}
        deActiveColor={deActiveColor}
        indicatorStyle={styles.indicatorThreeStyle}>
        <MTab.Item title="One" />
        <MTab.Item title="Two" />
        <MTab.Item title="Three" />
        <MTab.Item title="Four" />
        <MTab.Item title="Five" />
        <MTab.Item title="Six" />
        <MTab.View style={styles.view}>
            <MText h1>One</MText>
        </MTab.View>
        <MTab.View style={styles.view}>
            <MText h1>Two</MText>
        </MTab.View>
        <MTab.View style={styles.view}>
            <MText h1>Three</MText>
        </MTab.View>
        <MTab.View style={styles.view}>
            <MText h1>Four</MText>
        </MTab.View>
        <MTab.View style={styles.view}>
            <MText h1>Five</MText>
        </MTab.View>
        <MTab.View style={styles.view}>
            <MText h1>Six</MText>
        </MTab.View>
    </MTab>
);
export const TShowCaseFive = () => (
    <MTab
        variant="default"
        style={styles.tab}
        indicatorStyle={styles.indicatorFiveStyle}
        activeColor={activeColor}
        deActiveColor={deActiveColor}>
        <MTab.Item icon="home" iconSize={24} />
        <MTab.Item icon="person" iconSize={24} />
        <MTab.Item icon="cart" iconSize={24} />
        <MTab.View style={styles.view}>
            <MText h1>Home</MText>
        </MTab.View>
        <MTab.View style={styles.view}>
            <MText h1>Shop</MText>
        </MTab.View>
        <MTab.View style={styles.view}>
            <MText h1>Cart</MText>
        </MTab.View>
    </MTab>
);

const styles = StyleSheet.create({
    tab: {
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'white',
    },
    view: {
        height: 100,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fafafa',
    },
    indicatorTwoStyle: {
        height: 4,
        backgroundColor: activeColor,
    },
    indicatorThreeStyle: {
        top: 0,
        height: 4,
        borderBottomEndRadius: 5,
        borderBottomStartRadius: 5,
        backgroundColor: activeColor,
    },
    indicatorFiveStyle: {
        backgroundColor: activeColor,
    },
});
