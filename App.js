import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Font from "expo-font";
// import { AppLoading } from "expo";
import AppLoading from 'expo-app-loading';

import Header from "./components/Header";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

const fetchFonts = () => {
  return Font.loadAsync({
    'regularFont' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'boldFont' : require('./assets/fonts/OpenSans-Bold.ttf'),
    
  });
};



export default function App() {
  const [userNumber, SetUserNumber] = useState(null);
  const [guessRounds, SetGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError = { (error) => console.log(error)}
      />
    );
  }

  const startGameHandler = (selectedNumber) => {
    SetUserNumber(selectedNumber);
    SetGuessRounds(0);
  };

  const playAgainHandler = () => {
    SetGuessRounds(0);
    SetUserNumber(null);
  };
  const gameOverHandler = (noOfRounds) => {
    SetGuessRounds(noOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  // content = (
  //   <GameOverScreen
  //     summary={1}
  //     onPlayAgain={playAgainHandler}
  //     number={1}
  //   />
  // )
  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        summary={guessRounds}
        onPlayAgain={playAgainHandler}
        number={userNumber}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title={"Guess A Number"} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
