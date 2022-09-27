import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Text, Button, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons'


import BodyText from "../components/BodyText";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";
import NumberContainer from "../components/NumberContainer";
import Colors from "../constants/Colors";


const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userChoice)
  );
  const [rounds, setRounds] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const {userChoice, onGameOver} = props;

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie!", "You know that is wrong... -_-", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds((currentRounds) => currentRounds + 1);
  };

  return (
    <View style={styles.screen}>
      <BodyText style={styles.text}>Opponent's Guess</BodyText> 
      <NumberContainer child={currentGuess} />
      <Card style={styles.buttonsContainer}>
        <CustomButton
          style={styles.butttonColor}
          Title={<Ionicons name="md-remove" size={30}/>}
          Handler={nextGuessHandler.bind(this, "lower")}
        />
        <CustomButton
          style={styles.butttonColor}
          Title={<Ionicons name="md-add" size={30}/>}
          Handler={nextGuessHandler.bind(this, "greater")}
        />
      </Card>
    </View>
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
    padding: 10,
    width: "100%",
    justifyContent: "space-around",
    paddingHorizontal: 15,
  },

  butttonColor: {
    color: Colors.primary,
    borderColor: Colors.primary,
  },
  text: {
    color: Colors.primary,
    fontSize: 20,
    padding: 10,
  },
});

export default GameScreen;
