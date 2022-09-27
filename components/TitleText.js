import React from "react";
import { Text, StyleSheet } from "react-native";

const TitleText = (props) => (   
  <Text style={{ ...styles.general, ...props.style }}>{props.children}</Text>
);

const styles = StyleSheet.create({
  general: {
    fontFamily: "boldFont",
  },
});

export default TitleText;
