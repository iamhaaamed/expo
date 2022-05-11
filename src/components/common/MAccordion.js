import React from 'react';
import {
    View,
    StyleSheet,
    LayoutAnimation,
    TouchableOpacity,
} from 'react-native';
import MIcon from './MIcon';

/**
 * @param {{ children?: import('react').ReactNode}} props
 */
const MAccordionHeader = (props) => <>{props.children}</>;

MAccordionHeader.displayName = 'MAccordion.Header';

/**
 * @param {{ children?: import('react').ReactNode}} props
 */
const MAccordionContent = (props) => <>{props.children}</>;

MAccordionContent.displayName = 'MAccordion.Content';

/**
 * @param {{
 * icon?:boolean,
 * expanded: boolean,
 * onPress: () => void,
 * children: import('react').ReactNode,
 * style: import('react-native').ViewStyle,
 * headerStyle: import('react-native').ViewStyle,
 * separatorStyle: import('react-native').ViewStyle }} props
 */
const MAccordion = (props) => {
    const { children, expanded, onPress, icon = true, separatorStyle } = props;

    const handleExpand = () => onPress?.();

    return (
        <View style={[styles.container, props.style]}>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={handleExpand}
                style={[styles.row, props.headerStyle]}>
                <View style={styles.head}>
                    {React.Children.toArray(children)
                        .filter((e) => e.type == MAccordionHeader)
                        .slice(0, 1)
                        .map((child, i) => (
                            <MAccordionHeader key={i}>{child}</MAccordionHeader>
                        ))}
                </View>
                {icon && (
                    <View
                        style={[
                            styles.iconContainerStyle,
                            props.iconContainerStyle,
                        ]}>
                        <MIcon
                            name={expanded ? 'chevron-up' : 'chevron-down'}
                        />
                    </View>
                )}
            </TouchableOpacity>
            {expanded && <View style={[styles.separator, separatorStyle]} />}
            {expanded &&
                React.Children.toArray(children)
                    .filter((e) => e.type == MAccordionContent)
                    .slice(0, 1)
                    .map((child, i) => (
                        <MAccordionContent key={i}>{child}</MAccordionContent>
                    ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        alignItems: 'stretch',
    },
    head: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
    },
    row: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    iconContainerStyle: {
        padding: 5,
        aspectRatio: 1,
    },
    separator: {
        height: 5,
        width: '100%',
    },
});

// @component
MAccordion.Header = MAccordionHeader;
// @component
MAccordion.Content = MAccordionContent;

export default MAccordion;
