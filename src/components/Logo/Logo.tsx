import React from 'react';
import { Text, Image } from 'react-native';

import { styles } from './LogoStyles';
import LogoPNG from '../../../assets/adaptive-icon.png'

export function Logo() {
  return (
    <>
        <Text style={styles.title}>Password Generator</Text>
        <Image source={LogoPNG}
            style={{
                resizeMode: 'contain',
                height: 180,
            }}
        />
    </>
  );
}