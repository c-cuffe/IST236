import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Linking, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import Title from "../components/Title";
import { Image } from "react-native";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";
function HomeScreen(props) {
    // Set Safe Area Screen Boundaries
    const insets = useSafeAreaInsets();
    
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
            <View>
                <Title style={styles.titleContainer} >Pittsburgh Pizza Pub</Title>
            </View>

            <View style={styles.imageContainer}>
                <Image 
                    style={styles.image} 
                    source={require("../assets/images/ppp.jpg")}
                    />
            </View>
            <View style={styles.infoContainer}>
                <Text 
                    style={styles.infoText}
                    onPress= {() => Linking.openURL("tel:+18433534444")}>843-272-3000
                </Text>
                <Text 
                    style={styles.infoText}
                    onPress= {() => Linking.openURL("https://maps.app.goo.gl/2YWz6T9TM7KwdShdA")}>
                        730 Hwy 17 S{"\n"}North Myrtle Beach, SC 29582
                </Text>
                <Text 
                    style={styles.infoText}
                    onPress= {() => Linking.openURL("https://www.pittsburghpizzapubmenu.com/?utm_source=gbp")}>
                    www.pittsburhgpizzapub.com
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <NavButton onPress={props.onNext}>View Menu</NavButton>
            </View>

        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: "center"
    },
    titleContainer: {
        flex: 1,
        justifyContent: "center"
    },
    imageContainer: {
        flex: 4,
    },
    image: {
        resizeMode: "cover",
        height: "100%",
        width: 380
    },
    infoContainer: {
        flex: 3,
        justifyContent: "center"
    },
    infoText: {
        fontSize: 30,
        textAlign: "center",
        padding: 7,
        color: Colors.primary500,
        fontFamily: "blockletter"
    },
    buttonContainer: {
        flex: 1
    }
})