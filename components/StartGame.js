import react from "react";
import { StyleSheet, View, Button, Text, BackHandler } from "react-native";
import Colors from "../constants/Colors";
import Card from "./Card";
import BodyText from "./BodyText";
import NumberContainer from "./NumberContainer";

const StartGame = (props) => {
  return (
    <Card style={styles.screen}>
      <BodyText style={styles.text}>Number Selected</BodyText>
      <NumberContainer child={props.Number} />
      <View style={styles.button}>
        <Button
          color={Colors.primary}
          title="Start Game"
          onPress={() => {
            props.Handler(props.Number);
          }}
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: "80%",
    marginVertical: 10,
    padding: 20,
    alignItems: "center",
  },

  text: {
    color: Colors.primary,
    fontSize: 20,
    padding: 10,
  },

  button: {
    margin: 5,
    width: "40%",
  },
});

export default StartGame;
