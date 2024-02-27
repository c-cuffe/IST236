import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import Colors from "../constants/colors";
function NavButton(props){
    return(
        <Pressable 
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={props.onPress}
        >
            <View style={styles.buttonContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{props.children}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default NavButton;

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 300,
        width: 300,
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: Colors.primary500

    },
    pressedItem: {
        opacity: 0.3
    },
    text: {
        padding: 8,
        fontSize: 25,
        textAlign: "center",
        color: Colors.accent500,
        fontFamily: ""
    }
})
