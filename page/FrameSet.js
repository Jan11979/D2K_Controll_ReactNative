import React from 'react';
import {View, StyleSheet, useColorScheme} from 'react-native';
import {JpText} from './element/JpText';
import {JpSlider} from './element/JpSlider';

export default function FrameSet() {
    const isDarkMode = useColorScheme() === 'dark';

    const [testNumber, setTestNumber] = React.useState(null);

    const sliderChange = (number) => {
        setTestNumber(number);
    };

    return (
        <View style={styles.container}>
            <View style={styles.textblock}>
                <JpText text="Miau->"/><JpText text={testNumber}/><JpText text="<-Miau"/>
            </View>
            <JpSlider onChangeSlider={sliderChange}/>
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
    textblock: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '90%',
        margin: '5%',
        borderRadius: 10,
        borderStyle: 'solid',
        borderColor: '#9a2323',
        borderWidth: 1,
    },
});
