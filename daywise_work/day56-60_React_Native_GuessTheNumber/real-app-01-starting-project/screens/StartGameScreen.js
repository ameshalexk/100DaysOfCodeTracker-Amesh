import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';

function StartGameScreen() {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    setConfirmed(true);

    const chosenNumber = parseInt(enteredValue);
    if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99) {
      return;
    }

    setSelectedNumber(chosenNumber);
    setEnteredValue('');
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = <Text>Chose Number: {selectedNumber}</Text>;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start A New Game! </Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChange={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              title="Reset"
              onPress={resetInputHandler}
              color={Colors.accent}
            />
            <Button
              style={styles.button}
              title="Confirm"
              onPress={confirmInputHandler}
              color={Colors.primary}
            />
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  input: {
    width: 50,
    textAlign: 'center',
  },
});
export default StartGameScreen;
