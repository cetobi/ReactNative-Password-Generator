import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import styles from './HomeStyle';
import { Logo } from '../../components/Logo/Logo';
import { PassButton } from '../../components/PassButton/PassButton';

export default function Home() {
  return (
    <View style={styles.appContainer}>
        <View style={styles.logoContainer}>
            <Logo />
        </View>

        <View style={styles.inputContainer}>
            <PassButton />
        </View>

        <StatusBar style='light' />
    </View>
  );
}