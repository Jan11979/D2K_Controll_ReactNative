import {StyleSheet, Text, useColorScheme} from 'react-native';

import React from 'react';
import Node from 'react-native';
import SafeAreaView from 'react-native/Libraries/Components/SafeAreaView/SafeAreaView';
import Slider from '@react-native-community/slider';


export const JpSlider = (props): Node => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <SafeAreaView>
            <Slider style={styles.slider}
                    minimumValue={0}
                    maximumValue={255}
                    step={1}
                    onValueChange={props.onChangeSlider}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    slider:{
        width: 200,
        height: 40,
        /*minimumValue: 0,
        maximumValue: 1,*/
        minimumTrackTintColor: "#FFFFFF",
        maximumTrackTintColor: "#000000",
    },

});
