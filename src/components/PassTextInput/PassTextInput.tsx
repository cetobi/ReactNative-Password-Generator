import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './PassTextInputStyles';

interface PassTextInputProps {
    password: string;
}

export function PassTextInput(props: PassTextInputProps) {
    return (
        <TextInput
            style={styles.inputer}
            placeholder='Password'
            value={props.password}
        />
    );
}