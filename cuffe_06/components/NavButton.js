import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import Colors from "../constants/colors";
function NavButton(props){
    return(
        <Pressable 
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={props.onNext}>
            <View style={styles.buttonContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{props.children}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default NavButton

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
        height: 75,
        width: 150,
        margin: 8,
        backgroundColor: Colors.accent500

    },
    pressedItem: {
        opacity: 0.8
    },
    text: {
        padding: 8,
        fontSize: 25,
        textAlign: "center",
        color: Colors.primary300,
        fontFamily: ""
    }
})
