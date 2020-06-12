import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from './components/header/header';
export default function App() {
  let [score, setScore] = useState(1);
  let [previousNumber, setPreviousNumber] = useState();
  let [number, setNumber] = useState(1);

  function generateNewNumber() {
    return Math.floor(Math.random() * 13) + 1;
  }
  const getNewNumber = () => {
    setPreviousNumber(number);
    let newNumber = generateNewNumber();
    if (newNumber === previousNumber) { //Ensure that new number is not equal to previous number
      while (newNumber === previousNumber) {
        newNumber = generateNewNumber();
      }
    }
    return newNumber;
  }
  const nextRound = (info) => {
    let nextNumber = getNewNumber(); //Generate next number
    if (info == 'Higher') {
      if (number < nextNumber) {
        //success
        score++;
        setScore(score);
        setNumber(nextNumber); //Set new number as current number
      } else {
        //Initiate Restart
        restart(nextNumber);
      }
    } else if (info == 'Lower') {
      if (number > nextNumber) {
        score++;
        setScore(score);
        setNumber(nextNumber); //Set new number as current number
      } else {
        restart(nextNumber);
      }
    }

  }
  const restart = (number) => {
    setScore(0);
    setNumber(1);
    alert('Failed: number was : ' + number);
  }
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.bodyContainer}>
        <Text>Current score is {score}</Text>
        <Text>Current number is {number}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity styles={styles.lowerButton} onPress={() => nextRound('Lower')}>
          <Text>Lower</Text>
        </TouchableOpacity>
        <TouchableOpacity styles={styles.higherButton} onPress={() => nextRound('Higher')}>
          <Text>Higher</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  bodyContainer: {
    backgroundColor: '#ffcd3c',
  },
  lowerButton: {
    backgroundColor: '#35d0ba'
  },
  higherButton: {
    backgroundColor: '#d92027'
  },
});
