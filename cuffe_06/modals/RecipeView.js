import { View, Text, Modal } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native";


function RecipeView(props){
    // Set Safe Area Screen Boundaries
    const insets = useSafeAreaInsets();

    return (
        <Modal visible={props.visible} animationType="slide">
        <View
        style={[styles.rootContainer, {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right
        }]}
        >
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
            <ScrollView style={styles.textContainer}>
                <Text style={styles.text}>{props.text}</Text>
            </ScrollView>

            <View style={styles.navButtonContainer}>
                <NavButton onNext={props.onClose}>Return to Recipes</NavButton>
            </View>
        </View>
        </Modal>
    );
}

styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        width: "100%",
        backgroundColor: Colors.accent800,
        alignItems: "center"
    },
    titleContainer: {
        flex: 1,
        justifyContent: "center",
    },
    title: {
        fontSize: 70,
        textAlign: "center",
        fontFamily: "recipeFont",
        color: Colors.primary300
    },
    textContainer: {
        flex: 5,
        width: "90%",
        borderWidth: 3,
        borderColor: Colors.primary500,
        padding: 10
    },
    text: {
        color: Colors.primary300,
        fontSize: 40,
        fontFamily: "recipeFont",
    },
    navButtonContainer: {
        marginTop: 10,
        flex: 1,
    }
});
export default RecipeView;

