import React from "react";
import { TouchableOpacity } from "react-native";
import NumberContainer from "./NumberContainer";

const CustomButton = props => {

    return(
        <TouchableOpacity onPress={props.Handler}>
            <NumberContainer buttonTextStyle= {props.buttonTextStyle }style={props.style} child = {props.Title}/>
        </TouchableOpacity>
    );
}


export default CustomButton;