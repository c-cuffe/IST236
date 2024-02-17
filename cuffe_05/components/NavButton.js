import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import Colors from "../constants/colors";
function NavButton(props){
    return(
        <Pressable 
        android_ripple={{color: "grey"}}
        onPress={props.onPress}>
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
        borderRadius: 5,
        width: 300,
        margin: 10,
        borderColor: Colors.primary500,
        borderWidth: 3

    },
    textContainer: {

    },
    text: {
        padding: 8,
        fontSize: 25,
        textAlign: "center",
        color: Colors.accent800,
        fontFamily: "blockletter"
    }
})
