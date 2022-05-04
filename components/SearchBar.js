import useWindowDimensions from "../useWindowDimensions";
import React from 'react'
import { TextInput } from "react-native-web";

export default function SearchBar() {
    const { height, width } = useWindowDimensions();
    const wwidth = width - 54;

    // const styles = new StyleSheet.create({
    //     input: {
    //         padding: width - 54,
    //     },
    // });
    return (
        <div>
            <input placeholder="Ne Aramak İstersiniz?" style={{
                width: wwidth,
                padding: 10,
                borderRadius: 10,
                borderColor: '#B7B7B7',
                borderWidth:1,
            }}></input>
        </div>
    )
}
