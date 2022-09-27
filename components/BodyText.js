import React from "react";
import { Text, StyleSheet } from "react-native";

const BodyText = (props) => (
  <Text style={{ ...styles.general, ...props.style }}>{props.children}</Text>
);

const styles = StyleSheet.create({
  general: {
    fontFamily: "regularFont",
  },
});

export default BodyText;
