import {StyleSheet, Text, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import React from 'react';
import Node from 'react-native';
import SafeAreaView from 'react-native/Libraries/Components/SafeAreaView/SafeAreaView';

export const JpText = (props): Node => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <SafeAreaView>
            <Text style={[
                styles.text,
                {
                    color: isDarkMode ? Colors.light : Colors.dark,
                },
            ]} >
                {props.text}</Text>
        </SafeAreaView>
    );
};
export const JpTextBlock = (props): Node => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <SafeAreaView>
            <Text style={[
                styles.text,
                {
                    color: isDarkMode ? Colors.light : Colors.dark,
                },
            ]} >
                {props.text}{props.children}</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 18,
    },
});
