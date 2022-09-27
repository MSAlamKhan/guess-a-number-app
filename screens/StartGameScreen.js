import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import BodyText from "../components/BodyText";
import Card from "../components/Card";
import Input from "../components/Input";
import StartGame from "../components/StartGame";
import TitleText from "../components/TitleText";
import Colors from "../constants/Colors";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmedState, setConfirmedState] = useState(false);
  const [selectedNumber, setselectedNumber] = useState();

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetNumberInputHandler = () => {
    setEnteredValue("");
    setConfirmedState(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99 ) {
      Alert.alert("Invalid Number", "Number has to be number between 1-99", [
        {
          text: "Okay",
          style: "destructive",
          onPress: resetNumberInputHandler,
        },
      ]);
      return;
    }
    setConfirmedState(true);
    setselectedNumber(chosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmedState) {
    confirmedOutput = <StartGame Handler={props.onStartGame} Number={selectedNumber} />;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <TitleText style={styles.title} text={"Start The Game"}/>
        <Card style={styles.inputContainer}>
          <BodyText >Select a number</BodyText>
          <Input
            keyboardType={"number-pad"}
            maxLength={2}
            style={styles.inputField}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.button}>
              <Button
                color={Colors.accent}
                onPress={resetNumberInputHandler}
                title="reset"
              />
            </View>

            <View style={styles.button}>
              <Button
                color={Colors.primary}
                onPress={confirmInputHandler}
                title="confirm"
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },

  title: {
    fontSize: 20,
    fontFamily: 'boldFont',
    marginVertical: 10,
  },

  inputContainer: {
    width: 300,
    padding: 20,
    maxHeight: "80%",
    alignItems: "center",
  },
  button: {
    width: "40%",
  },
  inputField: {
    width: "30%",
    textAlign: "center",
  },
});

export default StartGameScreen;
