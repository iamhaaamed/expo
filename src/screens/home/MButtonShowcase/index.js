import React from 'react';
import { View } from 'react-native';
import useTheme from 'hooks/useTheme';
import { MButton } from 'components/common';
import { createScreen } from 'components/elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MButtonShowcaseScreen = createScreen(
    (props) => {
        const { LAYOUT, GUTTERS, COLORS } = useTheme();
        const onPress = () => {
            console.log('clicked!');
        };
        return (
            <View style={LAYOUT.fill}>
                <View
                    style={[
                        LAYOUT.colCenter,
                        GUTTERS.regularHPadding,
                        GUTTERS.regularVPadding,
                    ]}>
                    <MButton text="Regular button" onPress={onPress} />
                    <MButton
                        text="Transparent button"
                        onPress={onPress}
                        transparent
                    />
                    <MButton
                        text="Colored button"
                        onPress={onPress}
                        color="dodgerblue"
                    />
                    <MButton
                        text="Colored Transparent button"
                        onPress={onPress}
                        color="orange"
                        transparent
                    />
                    <MButton
                        text="Icon button"
                        onPress={onPress}
                        iconLeft={{ name: 'rocket' }}
                    />
                    <MButton
                        text="Customized Icon button"
                        onPress={onPress}
                        iconLeft={{
                            name: 'star',
                            color: 'crimson',
                            size: 36,
                        }}
                        style={{ borderRadius: 16 }}
                    />
                    <MButton
                        text="Right Icon button"
                        onPress={onPress}
                        iconRight={{
                            name: 'star',
                        }}
                    />
                    <MButton
                        text="Top Icon button"
                        onPress={onPress}
                        iconTop={{
                            name: 'star',
                        }}
                    />
                    <MButton
                        text="Bottom Icon button"
                        onPress={onPress}
                        iconBottom={{
                            name: 'star',
                        }}
                    />
                    <MButton
                        text="Disabled button"
                        type="native"
                        onPress={onPress}
                        iconLeft={{
                            name: 'star',
                        }}
                        disabled
                    />
                    <MButton
                        text="Disabled Transparent button"
                        type="native"
                        onPress={onPress}
                        iconLeft={{
                            name: 'star',
                        }}
                        disabled
                        transparent
                    />
                    <MButton
                        text="Native Feedback button"
                        type="native"
                        onPress={onPress}
                        iconLeft={{
                            name: 'star',
                        }}
                    />
                    <MButton
                        text="Native Feedback button"
                        type="native"
                        onPress={onPress}
                        iconTop={{
                            name: 'star',
                        }}
                    />
                    <MButton
                        text="Native Feedback Transparent button"
                        type="native"
                        onPress={onPress}
                        iconTop={{
                            name: 'star',
                        }}
                        transparent
                    />
                    <MButton
                        text="Highlight Feedback button"
                        type="highlight"
                        onPress={onPress}
                        iconLeft={{
                            name: 'star',
                        }}
                    />
                    <MButton
                        text="Facebook"
                        onPress={onPress}
                        style={{ borderRadius: 16, width: 160 }}
                        iconLeft={{
                            name: 'facebook',
                            Component: MaterialCommunityIcons,
                        }}
                        iconRight={{
                            name: 'chevron-right',
                            Component: MaterialCommunityIcons,
                        }}
                    />
                    <MButton
                        text="4 Sides"
                        onPress={onPress}
                        color="darkgreen"
                        style={{ borderRadius: 40, width: 170 }}
                        iconLeft={{
                            name: 'facebook',
                            Component: MaterialCommunityIcons,
                        }}
                        iconRight={{
                            name: 'chevron-right',
                            Component: MaterialCommunityIcons,
                        }}
                        iconTop={{
                            name: 'car',
                        }}
                        iconBottom={{
                            name: 'rocket',
                        }}
                    />
                </View>
            </View>
        );
    },
    {
        scrollView: true,
        paddingBottom: false,
        paddingTop: false,
    },
);

export default MButtonShowcaseScreen;
