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
      <View>
        <Text>Current score: {score}</Text>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.gameContainer}>
          <View>
            <TouchableOpacity style={styles.lowerButton} onPress={() => nextRound('Lower')}>
              <Text>Lower</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.numberContainer}>{number}</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.higherButton} onPress={() => nextRound('Higher')}>
              <Text>Higher</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  bodyContainer: {
    backgroundColor: '#f4f4f4',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center'
  },
  gameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 350,
    height: '30vh',
    alignItems: 'center'
  },
  numberContainer: {

  }
});
