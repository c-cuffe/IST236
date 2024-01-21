import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Image, StyleSheet, Text, View, Linking } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
        <Image style={styles.imageStyle} source={require("./assets/images/picture.jpg")}/>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoContainer}>Name: Cecilia Cuffe</Text>
          <Text style={styles.infoContainer} onPress={() => Linking.openURL("mailto:ccuffe@hgtc.edu")}>Email: ccuffe@hgtc.edu</Text>
          <Text style={styles.infoContainer} onPress={() => Linking.openURL("tel:8438777686")}>Phone Number: 843-877-7686</Text>
          <Text style={styles.infoContainer} onPress={() => Linking.openURL("https://github.com/c-cuffe/IST236/")}>GitHub Link: https://github.com/c-cuffe/IST236/ </Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 2,
    width: "100%",
    backgroundColor: "#8A9A5B",
    padding: 10,
    paddingTop: 50
  },
  infoContainer: {
    flex: 1,
    backgroundColor: "#E3735E",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: "100%"
  },
  textStyle: {
    fontSize: 20,
    paddingTop: 10
  },
  imageStyle: {
    height: 500,
    width: "100%",
    resizeMode: "cover"
  }
});
