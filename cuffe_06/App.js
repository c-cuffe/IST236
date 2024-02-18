import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Colors from './constants/colors';
import AddRecipeScreen from './screens/AddRecipeScreen';
import RecipesScreen from './screens/RecipesScreen';
import { useFonts } from 'expo-font';
export default function App() {

  const [fontsLoaded] = useFonts ({
    recipeFont: require("./assets/fonts/Otto.ttf"),
  });

  const [currentScreen, setCurrentScreen] = useState("home");
  const [currentID, setCurrentID] = useState(3)
  const [currentRecipes, setCurrentRecipes] = useState([
    {
      id: 1, 
      title: "Spaghetti Bolognese",
      text: "1 1/2 tbsp olive oil/n2 garlic cloves , minced\n" +
       "1 onion , finely chopped (brown, yellow or white)\n" + 
       "1 lb / 500g beef mince (ground beef) OR half pork, half beef\n" +
       "1/2 cup (125 ml) dry red wine (sub water or beef broth/stock)\n" +
       "2 beef bouillon cubes,crumbled OR granulated beef bouillon\n" +
       "800g / 28 oz can crushed tomato (or tomato passata)\n" +
       "2 tbsp tomato paste\n" +
       "2 tsp white sugar, if needed\n" +
       "2 tsp Worcestershire sauce\n" +
       "2 dried bay leaves\n" + 
       "2 sprigs fresh thyme (or 1/2 tsp dried thyme or oregano)\n" +
       "Salt and pepper\n" +
       "400 g / 13 oz spaghetti, dried\n" +
       "Parmesan cheese and finely chopped parsley (optional)"
    },
    {
      id: 2, 
      title: "Chicken Piccata",
      text: "2 pounds boneless, skinless chicken cutlets or breasts, butterflied to create thinner pieces\n" +
      "1/2 teaspoon freshly cracked black pepper\n" +
      "1 3/4 teaspoons sea salt\n" +
      "1 cup flour\n" +
      "10 tablespoons unsalted butter\n" +
      "4 tablespoons extra-virgin olive oil\n" +
      "1 shallot, finely chopped\n" +
      "1 tablespoon minced garlic (from 4-6 cloves)\n" +
      "1 1/2cups chicken stock\n" +
      "1 teaspoons lemon zest (from 1 lemon), plus more to taste\n" +
      "1 tablespoon fresh lemon juice\n" +
      "2 tablespoons capers, drained\n" +
      "Fresh parsley, chopped, optional"
    }
  ]);

  function homeScreenHandler() {
    setCurrentScreen("home");
  };
  function recipesScreenHandler() {
    setCurrentScreen("recipes");
  };
  function addRecipeScreenHandler() {
    setCurrentScreen("add");
  };
  function addRecipeHandler(enteredRecipeTitle, enteredRecipeText){
    setCurrentRecipes((currentRecipes) => {
      return[...currentRecipes, { id: currentID, title: enteredRecipeTitle, text: enteredRecipeText }]
    });
    setCurrentID(currentID + 1);
    recipesScreenHandler();
  }

  function deleteRecipeHandler(id){
    setCurrentRecipes((currentRecipes) => {
      return currentRecipes.filter((item) => item.id !== id);
    })
  }

  let screen = <HomeScreen onNext={recipesScreenHandler}/>

  if (currentScreen === "add") {
    screen = <AddRecipeScreen onAdd={addRecipeHandler} onCancel={recipesScreenHandler}/>
  }
  if (currentScreen === "recipes") {
    screen = <RecipesScreen 
    onHome={homeScreenHandler}
    onAdd={addRecipeScreenHandler}
    onDelete={deleteRecipeHandler}
    currentRecipes={currentRecipes}
    />
  }  
  return (
    <>
    <StatusBar style="auto" />
    <SafeAreaProvider style={styles.container}>
      {screen}
    </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary800,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
