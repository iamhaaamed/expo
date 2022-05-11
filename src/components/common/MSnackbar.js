import React from 'react';
import { showMessage, hideMessage } from 'react-native-flash-message';
/**
 * @param {{
 * type: string => 'success'|'warning'|'info'|'danger',
 * title?: string,
 * description?: string,
 * position?: string => 'top'|'bottom'|'center',
 * duration: number =>milliseconds,
 * iconPosition? string => 'right'|'left',
 * floating: boolean,
 * style: Object,
 * textStyle: Object,
 * titleStyle: Object,
 * }} props
 */

const MSnackbar = (props) => {
    const {
        type,
        title,
        description,
        position,
        duration,
        children,
        iconPosition,
        floating,
        style,
        textStyle,
        titleStyle,
    } = props;
    const showSnackbar = () => {
        showMessage({
            message: title ?? '',
            description: description ?? '',
            type: type,
            position: position ?? 'bottom',
            icon: iconPosition ? { icon: type, position: iconPosition } : null,
            duration: duration ?? 2000,
            floating: floating ?? false,
            style: style ?? null,
            textStyle: textStyle ?? null,
            titleStyle: titleStyle ?? null,
        });
    };
    return <>{children({ showSnackbar })}</>;
};

export default MSnackbar;
