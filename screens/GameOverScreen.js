import React from "react";
import { View, StyleSheet, Image } from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import CustomButton from "../components/CustomButton";
import Colors from "../constants/Colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText style={styles.titleText}>GAME OVER</TitleText>
      <View style={styles.imageContainer}>
        <Image
        fadeDuration={2000}
          source={require("../assets/success.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <BodyText style={styles.bodyText}>
        Number of Rounds : {props.summary}
      </BodyText>
      <BodyText style={styles.bodyText}>Number was : {props.number}</BodyText>

      <View>
        <CustomButton
          buttonTextStyle={styles.playAgainButton}
          style={styles.buttonStyle}
          Title={"PLAY AGAIN!"}
          Handler={props.onPlayAgain}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  titleText: {
    fontSize: 25,
    padding: 10,
    color: Colors.primary,
  },

  bodyText: {
    fontSize: 20,
    marginVertical: 5,
    color: Colors.accent,
  },

  sumaryText: {
    width: "80%",
  },

  buttonStyle: {
    borderColor: Colors.primary,
  },

  endButton: {
    color: "red",
  },
  playAgainButton: {
    color: "green",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.accent,
    overflow : 'hidden',
    marginVertical : 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default GameOverScreen;
