import React from "react";
import { TextInput, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const Input = (props) => {
  return <TextInput {...props} style={{...styles.inputfield, ...props.style}} />;
};

const styles = StyleSheet.create({
  inputfield: {
    
    borderBottomColor: Colors.primary,
    borderBottomWidth: 1,
    padding: 13,
    marginVertical: 10,
    marginBottom :30
  },
});

export default Input;
