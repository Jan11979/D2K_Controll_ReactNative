import React from 'react';
import {View, Text, StyleSheet, useColorScheme} from 'react-native';


export default function FrameSet() {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <View style={styles.container}>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '90%',
        height: 600,
        margin: '5%',
        borderRadius: 10,
        borderStyle: 'solid',
        borderColor: '#9a2323',
        borderWidth: 1,
    },
});
