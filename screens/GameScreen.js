
import React, {useState, useRef, useEffect} from 'react'
import { Button, Text, View, StyleSheet, Alert} from 'react-native'
import Card from './../components/Card';

const generateRandonNumber = (min,max,exclude) => { 

  min = Math.ceil(min);
  max = Math.floor(max);
 

  const rndnum = Math.floor(Math.random() * (max-min)) + min;

  console.log("inside generateRandonNumber " );

      if(rndnum === exclude){
        console.log("rguessed right!"+ rndnum)
        generateRandonNumber(min,max,exclude);
      }
      else {
        console.log("returning rndnum "+ rndnum)
        return rndnum;
      }

}

const GameScreen = props => {
  const currentLow = useRef(1);
  const currentHigh = useRef(100);


    const [currentGuess, setCurrentGuess] = useState(generateRandonNumber(1,100, props.userChoice));
    const [guessRounds, setGuessRounds] = useState(0);
    const { userChoice, onGameOver } = props;
    useEffect(() => {
      if(currentGuess === userChoice){
        console.log("onGameOver  guessRounds "+guessRounds );
        onGameOver(guessRounds);
      }
    }, [currentGuess, userChoice, onGameOver]);

    const guess = (guessDirection) => {

      console.log("in guess method " + guessDirection === 'lower');
      console.log("guessDirection " + guessDirection);
      console.log("currentGuess " + currentGuess);
      console.log("pprops.userNumbece " + props.userNumber);

      let nextguess = 0;
      if((guessDirection === 'lower' && currentGuess < props.userNumber) ||
        (guessDirection === 'greater' && currentGuess > props.userNumber)){
          // Alert.alert("Invalid Guess",'Try again', [{text:'Sorry!', style:'cancel'}]);

        console.log("alert ");
        return;
        }

        if(guessDirection === 'lower'){
          currentHigh.current = currentGuess;
        }
        else{
          currentLow.current = currentGuess;
        }

        console.log("currentHigh " + currentHigh.current);
        console.log("currentLow " + currentLow.current);
        const g = generateRandonNumber(currentLow.current,currentHigh.current,currentGuess);
        setCurrentGuess(g);
        setGuessRounds(guessRounds => guessRounds+1);


    }

   
  

    return (
        <View style={styles.screen}>
              <View style={{padding: 20}}>
                <Text>Opponents Guess: {currentGuess}</Text>
              </View>

              <Card>
                  <View style={{padding: 2, marginVertical: 2, flexDirection: 'row'}}>
                    <Button title="Lower" onPress={() => guess("lower")}/>
                    <Button title="Greater" onPress={() => guess("greater")}/>
                  </View>
              </Card>
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
      flex:1,
      padding:10,
      alignItems: 'center'
    }
});

export default  GameScreen;