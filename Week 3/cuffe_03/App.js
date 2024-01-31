import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Button, Pressable, Modal, TextInput} from "react-native";
import { useState } from "react";

export default function App() {

  const [ballResponse, setBallResponse] = useState("");
  const [userQuery, setUserQuery] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startBallResponse() {
    setModalIsVisible(true);
    const responses = [
      "It is certain",
      "It is decidedly so",
      "Without a doubt",
      "Yes definitely",
      "You may rely on it",
      "As I see it, yes",
      "Most likely",
      "Outlook good",
      "Yes",
      "Signs point to yes",
      "Reply hazy, try again",
      "Ask again later",
      "Better not tell you now",
      "Cannot predict now",
      "Concentrate and ask again",
      "Don't count on it",
      "My reply is no",
      "My sources say no",
      "Outlook not so good",
      "Very doubtful"
    ];

    const maxVal = responses.length;
    const minVal = 0;
    const randomResp = Math.floor(Math.random() * (maxVal - minVal)) + minVal;

    setBallResponse(responses[randomResp])


  }

  function closeBallResponse() {
    setUserQuery("");
    setModalIsVisible(false);
  };

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
      
        <View style={styles.titleContainer}>
          <Text style={styles.title}>MAGIC 8-Ball</Text>
        </View>
        <View>
        <Text style={styles.prompt}>What answers do you seek? </Text>
            <TextInput 
            style={styles.userInput}
            placeholder="Enter Your Query..."

            onChangeText={setUserQuery}

            value={userQuery}
            />
        </View>
        <View style={styles.rollButtonContainer}>
          <Pressable 
          android_ripple={{color: '#eaacf7'}}
          onPress={startBallResponse}
          style={({pressed})=> pressed && styles.pressedButton}
            >
            <View style={styles.askButton}>
              <Text style={styles.askButtonText}>ASK</Text>
            </View>
          </Pressable>
        </View>

        <Modal visible={modalIsVisible}>
          <SafeAreaView style={styles.modalContainer}>
          <View style={styles.resultsContainer}>
            <Text style={styles.resultText}>You asked... {userQuery} </Text>
          </View>
          <View style={styles.resultsContainer}>
            <Text style={styles.resultText}>The ball says... {ballResponse} </Text>
          </View>
          <View>
              <Button
              title="Cancel" 
              style={styles.cancelButton} 
              onPress={closeBallResponse}/>
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
    backgroundColor: '#282f66',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    backgroundColor: "white",
    padding: 20,
    borderWidth: 3,
    borderRadius: 10,
    margin: 15
  },
  title: {
    fontSize: 40
  },
  prompt: {
    color: "white",
    fontSize: 25
  },
  userInput: {
    backgroundColor: "white",
    fontSize: 15,
    padding: 20,
    margin: 10,
  },
  pressedButton: {
    backgroundColor: "#e5d3ee",
    opacity: 5,
    borderRadius: 15,
  },
  askButton: {
    backgroundColor: "white",
    borderWidth: 3,
    borderRadius: 15,
    padding: 5
  },
  askButtonText: {
    fontSize: 20
  },
  modalContainer: {
    width: "100%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center"
  },
  resultsContainer: {
    width: "75%",
    backgroundColor: "white",
    padding: 20,
    borderWidth: 3,
    borderRadius: 10,
    margin: 15
  },
  resultText: {
    fontSize: 25
  },
  cancelButton: {
    color: "black"
  }

});
