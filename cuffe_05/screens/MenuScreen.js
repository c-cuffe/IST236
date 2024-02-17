import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import NavButton from "../components/NavButton";
import Title from "../components/Title";
import { useState } from "react";
import MenuItem from "../components/MenuItems";
import { FlatList } from "react-native";
function MenuScreen(props) {
    // Set Safe Area Screen Boundaries
    const insets = useSafeAreaInsets();
    
    const [menuItems, setMenuItems] = useState([
        {
            name: "Buffalo Chicken Pizza",
            image: require("../assets/images/buffalo.jpg"),
            price: "$14.99",
            id: 1,
        },
        {
            name: "Cheeseburger Pizza",
            image: require("../assets/images/cheeseburger.jpg"),
            price: "$13.99",
            id: 2,
        },
        {
            name: "Traditional Pizza",
            image: require("../assets/images/traditional.jpg"),
            price: "$12.99",
            id: 3,
        },
        {
            name: "Deluxe Pizza",
            image: require("../assets/images/deluxe.jpg"),
            price: "$15.99",
            id: 4,
        },
        {
            name: "White Pizza",
            image: require("../assets/images/white.jpg"),
            price: "$13.99",
            id: 5,
        },
    
    ]);
    
    return (
        <View style={[
            styles.rootContainer,
            {
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
            }
        ]}>

            {/* Display menu items */}
            <View style={styles.titleContainer}>
                <Title>Menu</Title>
            </View>
            <View style={styles.listContainer}>
                <FlatList 
                data = {menuItems}
                keyExtractor = {(item,) => item.id}

                alwaysBounceVertical = {false}
                showsVerticalScrollIndicator = {false}
                renderItem = {(itemData) => {
                    return(
                        <MenuItem 
                        name={itemData.item.name}
                        image={itemData.item.image}
                        price={itemData.item.price}
                        />
                    );
                }}
                />
            </View>
            <View style={styles.buttonContainer}>
                <NavButton onPress={props.onNext}>Home</NavButton>
            </View>

        </View>
    )
}

export default MenuScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: "center"
    },
    titleContainer: {
        flex: 1,
        justifyContent: "center",
    },
    listContainer: {
        flex: 7,
        width: 300
    },
    buttonContainer: {
        flex: 1
    }
})