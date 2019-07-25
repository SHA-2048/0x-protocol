import { colors } from 'ts/utils/colors';
import * as React from 'react';

export interface RequiredLabelProps {
    label: string | React.ReactNode;
}

export const RequiredLabel = (props: RequiredLabelProps) => {
    return (
        <span>
            {props.label}
            <span style={{ color: colors.red600 }}>*</span>
        </span>
    );
};
