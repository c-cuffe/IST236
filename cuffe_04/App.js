import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import {useState} from "react";

import MovieItem from './components/MovieItem';

export default function App() {
  const [movieItems, setMovieItems] = useState([
    {
      name: "The Empire Strikes Back",
      image: require("./assets/images/empire.jpg"),
      rating: "4.4",
    },
    {
      name: "Top Gun",
      image: require("./assets/images/topgun.jpg"),
      rating: "3.3",
    },
    {
      name: "Raiders of the Lost Ark",
      image: require("./assets/images/raiders.jpg"),
      rating: "4.2",
    },
    {
      name: "The Karate Kid",
      image: require("./assets/images/karate.jpg"),
      rating: "3.7",
    },
    {
      name: "Fast Times at Ridgemont High",
      image: require("./assets/images/ridgemont.jpg"),
      rating: "3.5",
    },
    {
      name: "Ferris Beuller's Day Off",
      image: require("./assets/images/ferris.jpg"),
      rating: "3.9",
    },
    {
      name: "Heathers",
      image: require("./assets/images/heathers.jpg"),
      rating: "3.8",
    },
    {
      name: "Dirty Dancing",
      image: require("./assets/images/dirtydancing.jpg"),
      rating: "3.6",
    },
    {
      name: "The Outsiders",
      image: require("./assets/images/outsiders.jpg"),
      rating: "3.6",
    },
    {
      name: "The Breakfast Club",
      image: require("./assets/images/breakfast.jpg"),
      rating: "3.8",
    },
  ]);

  return (
    <>
    <StatusBar style="dark"/>
    <SafeAreaView style={styles.rootContainer}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Top 10 80's Movies</Text>
    </View>

    <View style={styles.listContainer}>
      <ScrollView>
        {movieItems.map((itemData) => (<MovieItem 
        name={itemData.name} 
        image={itemData.image}
        rating={itemData.rating}/>))}
      </ScrollView>
    </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#ff5fbc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    marginBotton: 20,
    paddingHorizontal: 5,
    borderWidth: 5,
    borderRadius: 10
  },
  title: {
    fontSize: 35,
    fontWeight: "bold"
  },
  listContainer: {
    flex: 8,
    width: "80%"
  }
});
