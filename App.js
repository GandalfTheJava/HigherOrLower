import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

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
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>High or Lower?</Text>
        </View>
        <View style={styles.bodyContainer}>
          <Text>Current score is {score}</Text>
          <Text>Current number is {number}</Text>
        </View>
      </View>
      <Button onPress={() => nextRound('Lower')} title="Lower" />
      <Button onPress={() => nextRound('Higher')} title="Higher" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  header: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'flex-start',
    flexDirection: 'column',
    backgroundColor: 'red'
  },
  headerTitle: {
    fontWeight: 'bold',
    justifyContent: 'center',
    fontSize: 15
  },
  bodyContainer: {
    height: '90vh'
  }
});
