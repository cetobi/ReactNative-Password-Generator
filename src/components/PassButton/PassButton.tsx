import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard';

import { styles } from './PassButtonStyles';
import { PassTextInput } from '../PassTextInput/PassTextInput';
import generatePass from '../../services/passwordService';

export function PassButton() {
    const [password, setPassword] = useState('');

    function handleGenerateButton() {
        let generateToken: string = generatePass()
        setPassword(generateToken)
    }

    function handleCopyButton() {
        Clipboard.setStringAsync(password)
    }

    return (
        <>
            <PassTextInput password={password} />

            <Pressable style={styles.button} onPress={handleGenerateButton}>
                <Text style={styles.text}>⚡Generate⚡</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={handleCopyButton}>
                <Text style={styles.text}>⚡Copy⚡</Text>
            </Pressable>
        </>
    );
}