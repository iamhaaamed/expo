import * as React from 'react';
import { Tab, TabView } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { IconFallback } from 'utils';

/**
 * @param {{
 * icon?: string,
 * title?: string,
 * iconSize?: number,
 * disabled?: boolean,
 * useForeground?: boolean,
 * type?: "solid" | "clear" | "outline",
 * style?: import('react-native').ViewStyle,
 * IconComponent?: import('react').ReactNode,
 * titleStyle?: import('react-native').TextStyle,
 * buttonStyle?: import('react-native').ViewStyle
 * disabledStyle?: import('react-native').ViewStyle
 * containerStyle?: import('react-native').ViewStyle
 * iconPosition?: "bottom" | "left" | "right" | "top"
 * iconContainerStyle?: import('react-native').ViewStyle }} props
 */
const MTabItem = (props) => {
    const {
        icon,
        type,
        style,
        title,
        active,
        onPress,
        disabled,
        iconSize,
        titleStyle,
        activeColor,
        buttonStyle,
        iconPosition,
        deActiveColor,
        disabledStyle,
        useForeground,
        containerStyle,
        iconContainerStyle,
        IconComponent = Ionicons,
    } = props;

    const { Icon_Name, Icon_Component } = IconFallback(icon, IconComponent);

    const color = active ? activeColor : deActiveColor;

    return (
        <Tab.Item
            type={type}
            style={style}
            title={title}
            active={active}
            onPress={onPress}
            disabled={disabled}
            iconPosition={iconPosition}
            disabledStyle={disabledStyle}
            useForeground={useForeground}
            containerStyle={containerStyle}
            iconContainerStyle={iconContainerStyle}
            titleStyle={[{ color, fontSize: 14 }, titleStyle]}
            buttonStyle={[{ backgroundColor: '#fff', flex: 1 }, buttonStyle]}
            icon={
                icon ? (
                    <Icon_Component
                        name={Icon_Name}
                        size={iconSize}
                        color={color}
                    />
                ) : null
            }
        />
    );
};
MTabItem.displayName = 'MTab.Item';

/**
 * @param {{ style?: import('react-native').ViewStyle }} props
 */
const MTabView = (props) => (
    <TabView.Item style={props.style}>{props.children}</TabView.Item>
);
MTabView.displayName = 'MTab.View';

/**
 * @param {{
 * activeColor?: string,
 * deActiveColor?: string,
 * disableIndicator?:boolean,
 * variant?: "primary" | "default",
 * style?: import('react-native').ViewStyle
 * indicatorStyle?: import('react-native').ViewStyle }} props
 */
const MTab = (props) => {
    const [index, setIndex] = React.useState(0);

    const {
        style,
        variant,
        children,
        activeColor,
        deActiveColor,
        indicatorStyle,
        disableIndicator,
    } = props;

    return (
        <>
            <Tab
                value={index}
                variant={variant}
                onChange={setIndex}
                indicatorStyle={indicatorStyle}
                disableIndicator={disableIndicator}>
                {React.Children.toArray(children)
                    .filter((e) => e.type == MTabItem)
                    .map((child, i) => (
                        <MTabItem
                            key={i}
                            active={index == i}
                            activeColor={activeColor}
                            onPress={() => setIndex(i)}
                            deActiveColor={deActiveColor}
                            {...child.props}
                        />
                    ))}
            </Tab>
            <TabView value={index} onChange={setIndex} animationType="spring">
                {React.Children.toArray(children)
                    .filter((e) => e.type === MTabView)
                    .map((child, i) => (
                        <MTabView key={i} style={child.props.style}>
                            {child}
                        </MTabView>
                    ))}
            </TabView>
        </>
    );
};

// @component
MTab.Item = MTabItem;
// @component
MTab.View = MTabView;

export default MTab;
