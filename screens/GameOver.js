import React from 'react'
import { Text, View, StyleSheet, Button} from 'react-native'



const GameOver = props => {
    return (
        <View>
            <Text>Game Over with {props.tries} tries!</Text>    
            <Text>Number was {props.userNumber} </Text>   
            <Button title="NEW GAME" onPress={()=>props.onRestart()} /> 
        </View>
    )
}


const styles = StyleSheet.create({
    
});

export default  GameOver;
