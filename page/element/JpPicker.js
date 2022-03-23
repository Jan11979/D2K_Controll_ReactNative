import React, { useState } from "react";
import {Picker} from '@react-native-picker/picker';

export const JpPicker = (props): Node => {
    const [selectedValue, setSelectedValue] = useState("java");
    return (
            <Picker
                selectedValue={selectedValue}
                style={{ height: 230, width: 250 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                {props.list.map((elem, i) => < Picker.Item key={i} label={elem} value={elem}/>)}
            </Picker>
    );
};
