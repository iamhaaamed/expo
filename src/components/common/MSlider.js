import React, { useRef } from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { Text, View, Animated, StyleSheet } from 'react-native';

const AnimatedView = Animated.createAnimatedComponent(View);

const width = 50;
const pointerWidth = width * 0.2;

function LabelBase(props) {
    const { position, value, leftDiff, pressed } = props;
    const scaleValue = React.useRef(new Animated.Value(0.1)); // Behaves oddly if set to 0
    const cachedPressed = React.useRef(pressed);

    React.useEffect(() => {
        Animated.timing(scaleValue.current, {
            toValue: pressed ? 1 : 0.1,
            duration: 200,
            delay: pressed ? 0 : 2000,
            useNativeDriver: false,
        }).start();
        cachedPressed.current = pressed;
    }, [pressed]);

    return (
        Number.isFinite(position) &&
        Number.isFinite(value) && (
            <AnimatedView
                style={[
                    styles.sliderLabel,
                    {
                        left: position - width / 2,
                        transform: [
                            { translateY: width },
                            { scale: scaleValue.current },
                            { translateY: -width },
                        ],
                    },
                ]}>
                <View style={styles.pointer} />
                <Text style={styles.sliderLabelText}>{value}</Text>
            </AnimatedView>
        )
    );
}
export function CustomLabel(props) {
    const {
        leftDiff,
        oneMarkerValue,
        twoMarkerValue,
        oneMarkerPressed,
        twoMarkerPressed,
        oneMarkerLeftPosition,
        twoMarkerLeftPosition,
    } = props;

    return (
        <View style={styles.parentView}>
            <LabelBase
                leftDiff={leftDiff}
                value={oneMarkerValue}
                pressed={oneMarkerPressed}
                position={oneMarkerLeftPosition}
            />
            <LabelBase
                leftDiff={leftDiff}
                value={twoMarkerValue}
                pressed={twoMarkerPressed}
                position={twoMarkerLeftPosition}
            />
        </View>
    );
}

/**
 * @param {{
 * min?: number,
 * max?: number,
 * step?: number,
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

/**
 * @param {{ children?: import('react').ReactNode}} props
 */
const MSliderLeft = (props) => <>{props.children}</>;

MSliderLeft.displayName = 'MSlider.Left';

/**
 * @param {{ children?: import('react').ReactNode}} props
 */
const MSliderRight = (props) => <>{props.children}</>;

MSliderRight.displayName = 'MSlider.Right';

/**
 * @param {{
 * max?: number,
 * min?: number,
 * step,: number,
 * snapped: boolean,
 * vertical: boolean,
 * showMinMax: boolean,
 * valuePrefix: string,
 * valueSuffix: string,
 * onChange: () => void,
 * enableLabel: boolean,
 * sliderLength,: number,
 * isMarkersSeparated: boolean,
 * values: number | Array<number>,
 * customMarker: import('react').ReactNode,
 * customMarkerLeft: import('react').ReactNode,
 * customMarkerRight: import('react').ReactNode,
 * trackStyle: import('react-native').ViewStyle,
 * markerStyle: import('react-native').ViewStyle
 * selectedStyle: import('react-native').ViewStyle,
 * containerStyle: import('react-native').ViewStyle,
 * unselectedStyle: import('react-native').ViewStyle,
 * markerContainerStyle: import('react-native').ViewStyle }} props
 */
const MSlider = (props) => {
    const {
        step,
        min = 0,
        values,
        max = 100,
        children,
        onChange,
        vertical,
        showMinMax,
        trackStyle,
        markerStyle,
        customMarker,
        sliderLength,
        selectedStyle,
        containerStyle,
        snapped = false,
        unselectedStyle,
        valuePrefix = '',
        valueSuffix = '',
        customMarkerLeft,
        customMarkerRight,
        enableLabel = true,
        isMarkersSeparated,
        markerContainerStyle,
        onValuesChangeFinish,
    } = props;

    const sliderRef = useRef();

    const stepUp = () => console.log(sliderRef.current);

    const stepDown = () => console.log(sliderRef.current);

    return (
        <View style={[styles.container, containerStyle]}>
            {React.Children.toArray(children)
                .filter((e) => e.type == MSliderLeft)
                .slice(0, 1)
                .map((child, i) => (
                    <MSliderLeft key={i}>{child}</MSliderLeft>
                ))}
            <View>
                {showMinMax && (
                    <View
                        style={{
                            alignItems: 'center',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                        <Text>{`${valuePrefix}${min}${valueSuffix}`}</Text>
                        <Text>{`${valuePrefix}${max}${valueSuffix}`}</Text>
                    </View>
                )}
                <MultiSlider
                    max={max}
                    min={min}
                    step={step}
                    ref={sliderRef}
                    values={values}
                    snapped={snapped}
                    vertical={vertical}
                    trackStyle={trackStyle}
                    valuePrefix={valuePrefix}
                    valueSuffix={valueSuffix}
                    customLabel={CustomLabel}
                    enableLabel={enableLabel}
                    markerStyle={markerStyle}
                    onValuesChange={onChange}
                    customMarker={customMarker}
                    sliderLength={sliderLength}
                    selectedStyle={selectedStyle}
                    unselectedStyle={unselectedStyle}
                    customMarkerLeft={customMarkerLeft}
                    customMarkerRight={customMarkerRight}
                    isMarkersSeparated={isMarkersSeparated}
                    markerContainerStyle={markerContainerStyle}
                    onValuesChangeFinish={onValuesChangeFinish}
                />
            </View>
            {React.Children.toArray(children)
                .filter((e) => e.type == MSliderRight)
                .slice(0, 1)
                .map((child, i) => (
                    <MSliderRight key={i}>{child}</MSliderRight>
                ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    parentView: {
        position: 'relative',
    },
    sliderLabel: {
        width: width,
        bottom: '100%',
        height: width / 1.5,
        position: 'absolute',
        justifyContent: 'center',
    },
    sliderLabelText: {
        flex: 1,
        fontSize: 18,
        color: '#fff',
        borderWidth: 2,
        borderRadius: 8,
        textAlign: 'center',
        backgroundColor: '#000',
        textAlignVertical: 'center',
    },
    pointer: {
        width: pointerWidth,
        position: 'absolute',
        height: pointerWidth,
        backgroundColor: '#000',
        bottom: -pointerWidth / 4,
        left: (width - pointerWidth) / 2,
        transform: [{ rotate: '45deg' }],
    },
});

// @component
MSlider.Left = MSliderLeft;
// @component
MSlider.Right = MSliderRight;

export default MSlider;
