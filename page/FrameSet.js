import React from 'react';
import {View, StyleSheet, useColorScheme} from 'react-native';
import {JpText} from './element/JpText';
import {JpSlider} from './element/JpSlider';
import {JpPicker} from './element/JpPicker';

export default function FrameSet() {
    const isDarkMode = useColorScheme() === 'dark';

    const [testNumber, setTestNumber] = React.useState(null);
    const [testList, setTestList] = React.useState(["Eins", "Zwei", "Drei","Vier"]);

    const sliderChange = (number) => {
        setTestNumber(number);
    };

    return (
        <View style={styles.container}>
            <View style={styles.textblock}>
                <JpText text="Miau->"/><JpText text={testNumber}/><JpText text="<-Miau"/>
            </View>
            <View style={styles.pickerblock}>
            <JpPicker list={testList}/>
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
        height: 500,
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
    pickerblock: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '90%',
        height: '40%',
        margin: '5%',
        borderRadius: 10,
        borderStyle: 'solid',
        borderColor: '#9a2323',
        borderWidth: 1,
    },
});
