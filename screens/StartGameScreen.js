import React, {useState} from 'react'
import { Button, Text, View, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native'
import Card from './../components/Card';
import Input from './../components/Input';
import GameScreen from './GameScreen';


const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [selectedNumber, setSelectedNumber] = useState('');
    const [confirmed, setConfirmed] = useState(false);

    const numberInputHandler = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g,''));
    }

    const resetInputHandler = () => {
        console.log("resetInputHandler ")
        setSelectedNumber('');
        setEnteredValue('');
        setConfirmed(false);
    }

    let confirmedOutput;

    if(confirmed){
        confirmedOutput = (
            <Card style={{padding: 20, marginVertical: 10}}>
                <View>
                    <Text>You selected {selectedNumber}</Text>
                </View>
                <Button title="Start Game!" onPress={()=> props.onStartGame(selectedNumber)}/>
            </Card>

        );
    }
    const confirmInputHandler = () => {
        console.log("enterd value "+enteredValue)
        const chosenNumber = parseInt(enteredValue);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert("Invalid Number",'Number must be between 1 to 99', [{text:'Okay', style:'destructive', onPress: resetInputHandler}]);
            //return;
        }
        setConfirmed(true);    
        setSelectedNumber(chosenNumber);    
        setEnteredValue('');
    }


    return (

    <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
    }}>
        <View style={styles.screen}>
            <Text style={styles.title}>Start a new Game!</Text>

            <Card style={styles.inputContainer}>
                <Text>Select a number</Text>
                <Input style={styles.input} 
                blurOnSubmit 
                autoCapitalize="none" 
                autoCorrect={false} 
                //keyboardType="number-pad" 
                maxLength={2}
                value={enteredValue}
                onChangeText={numberInputHandler}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                         <Button title="Reset" onPress={resetInputHandler} />
                    </View>
                    <View style={styles.button}>
                         <Button title="Confirm" onPress={confirmInputHandler} />
                    </View>
                </View>       
            </Card>
            {confirmedOutput}
        </View>
    </TouchableWithoutFeedback>

    )
}


const styles = StyleSheet.create({
    screen : {
        flex: 1,
        padding: 10,
        alignItems: 'center'
     },
      buttonContainer : {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
      },
      inputContainer : {
        width: 300,
        maxHeight: '80%',
        alignItems: 'center'
      },
      title:{
          fontSize: 20,
          marginVertical: 10
      },
      button:{
          width: 100
      },
      input:{
          width: 70,
          textAlign: 'center'
      }
});

export default  StartGameScreen;