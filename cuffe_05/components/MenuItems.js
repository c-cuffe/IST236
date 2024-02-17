import { StyleSheet, View } from "react-native";
import { Text } from "react-native";
import Colors from "../constants/colors";
import { Image } from "react-native";

// Define functiion to display each menu item
function MenuItem(props) {
    return(
        <View style={styles.itemContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.name}</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={props.image}/>
            </View>
            <View style={styles.priceContainer}>
                <Text style={styles.price}>{props.price}</Text>
            </View>
        </View>
    )
}

export default MenuItem;

styles = StyleSheet.create({
    titleContainer: {
        backgroundColor: Colors.accent800,
        borderWidth: 3,
        borderRadius: 5
    },
    itemContainer: {
        marginBotom: 20
    },
    imageContainer: {
        alginItems: "center",
        borderWidth: 3,
        borderRadius: 5,
        backgroundColor: "black"
    },
    priceContainer: {
        backgroundColor: Colors.accent800,
        borderWidth: 3,
        borderRadius: 5 
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        fontFamily: "blockletter"
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        fontFamily: "blockletter"
    },
    image: {
        width: "100%",
        height: 250,
        resizeMode: "cover"    
    },
    price: {
        fontSize: 40,
        textAlign: "center",
        fontFamily: "blockletter"
    }
})