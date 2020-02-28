import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver';

export default function App() {
  const [userNumber, setUserNumber] = useState('');
  const [guessRounds, setGuessRounds] = useState(0);

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  const gameoverHandler = (rounds) => {

    setGuessRounds(rounds);
   
  }

  let content = <StartGameScreen  onStartGame={startGameHandler}/> ;

  if(userNumber && guessRounds <= 0){
    content = <GameScreen userNumber={userNumber} onGameOver={gameoverHandler}/>
  } 
  else if(guessRounds > 0){
    console.log("onGameOver  guessRounds "+guessRounds );

    content = <GameOver tries={guessRounds}/>
  }
                
  
  return (
    <View style={styles.screen}>
      <Header title="Guess a number"/>
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  screen:{
    flex: 1
  }
});
