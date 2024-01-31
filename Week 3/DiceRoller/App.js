import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Button, Pressable, Modal, TextInput} from "react-native";
import { useState, parseInt } from "react";

export default function App() {
  const maxVal = 6;
  const minVal = 1;

  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [userGuess, setUserGuess] = useState("");
  const [userWager, setUserWager] = useState("");
  const [diceSum, setDiceSum] = useState(0);

  function startDiceRollHandler() {
    setModalIsVisible(true);
    setUserGuess("");
    setUserWager("");
  }
  
  function endDiceRollHandler() {
    setModalIsVisible(false);
  }

  function onDiceRoll() {
    const randNum1 = Math.floor(Math.random() * (maxVal - minVal)) + minVal;
    const randNum2 = Math.floor(Math.random () * (maxVal - minVal)) + minVal;
    setDice1(randNum1);
    setDice2(randNum2);

    let result = randNum1 + randNum2;
    setDiceSum(result);

    endDiceRollHandler();
  }

  let resultText = (
    <Text>Roll the Dice and Make a Wager </Text>
  )

  const userGuessNum = parseInt(userGuess);
  const diceSumNum = paseInt(diceSum);


  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
      
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Dice Roller</Text>
        </View>

        <View style={styles.rollButtonContainer}>
          <Pressable 
          android_ripple={{color: '#eaacf7'}}
          onPress={startDiceRollHandler}
          style={({pressed})=> pressed && styles.pressedButton}
            >
            <View style={styles.rollButton}>
              <Text style={styles.rollButtonText}>Roll Dice</Text>
            </View>
          </Pressable>
          {/* <Button style={styles.rollbutton} title="Roll Dice"/> */}
        </View>

        <View style={styles.diceContainer}>
          <View style={styles.dice}>
            <Text style={styles.diceNum}>{dice1}</Text>
          </View>
          <View style={styles.dice}>
            <Text style={styles.diceNum}>{dice2}</Text>
          </View>
        </View>

        <View style={styles.resultsContainer}>
          <Text style={styles.resulttext}>The resulting dice roll is {diceSum} </Text>
        </View>

        <View style={styles.resultsContainer}>
          <Text style={styles.resultText}>You Won / Lost ___</Text>
        </View>



        <Modal visible={modalIsVisible}>
          <SafeAreaView style={styles.modalcontainer}>
            <Text>Guess the Roll Value:</Text>
            <TextInput 
            placeholder="Enter a guess between 2 and 12"
            keyboardType = "number-pad"

            onChangeText={setUserGuess}

            value={userGuess}
            />
             <Text>What's your wager:</Text>
            <TextInput 
            placeholder="Enter your wager amount"
            keyboardType = "decimal-pad"

            onChangeText={setUserWager}

            value={userWager}
            />



            <View>
              <View>
                <Button
                  title="Roll Dice" onPress={onDiceRoll}
                />
              </View>
              <View>
                <Button
                title="Cancel" onPress={endDiceRollHandler}/>
              </View>
            </View>
          </SafeAreaView>
        </Modal>



      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#543666",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    backgroundColor: "white",
    padding: 5,
    margin: 15,
    marginTop: 50,
    borderWidth: 5,
    borderRadius: 10
  },
  title: {
    fontSize: 60,
    fontWeight: "bold"
  },
  rollButtonContainer: {
    flex: 1,
    justifyContent: "center"
  },
  pressedButton: {
    opacity: 0.5,
    borderRadius: 10,
  },
  rollButton: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    borderWidth: 3,
    borderRadius: 10

  },
  rollButtonText: {
    fontSize: 25
  },
  diceContainer: {
    flex: 3,
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },
  dice: {
    backgroundColor: "white",
    borderWidth: 2,
    margin: 20,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  diceNum: {
    fontSize: 40,
    fontWeight: "bold"
  },
  resultsContainer: {
    flex: 1

  },
  resultText: {
    fontSize: 25
  }
});
