import { View } from "react-native";
import Title from "../components/Title";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import Colors from "../constants/colors";
import NavButton from "../components/NavButton";
import { LinearGradient } from "expo-linear-gradient";

function ServiceReviewScreen(props){
    const insets= useSafeAreaInsets();
    return (
        <LinearGradient
        colors={[Colors.accent500,Colors.primary800]}
        style={styles.rootContainer}>
        <View style={[
            styles.rootContainer,
            {
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right
            }
        ]}>
            <View style={styles.titleContainer}>
                <Title>Services Summary</Title>
            </View>
            <View style={styles.subTitleContainer}>
                <Text style={styles.subTitle}>Your appointment has been made with the service details below</Text>
            </View>
            <View style={styles.servicesContainer}>
                <Text style={styles.service}>Repair Time:</Text>
                <Text style={styles.subService}>{props.repairTime}</Text>
                <Text style={styles.service}>Services:</Text>
                {props.services.map((item) => {
                    if (item.value) {
                        return (
                            <Text key={item.id}style={styles.subService}>{item.name}</Text>
                        );
                    }
                })}
                <Text style={styles.service}>Additions:</Text>
                <Text style={styles.subService}>{props.newletter ? "Newsletter" : ""}</Text>
                <Text style={styles.subService}>{props.rentalMembership ? "Rental Membership" : ""}</Text>            
            </View>
            <View style={styles.subTitleContainer}>
                <Text style={styles.subTitle}>Subtotal: ${props.price.toFixed(2)}</Text>
                <Text style={styles.subTitle}>Tax: ${(props.price + props.price * 0.06).toFixed(2)}</Text>
                <Text style={styles.subTitle}>Total: ${(props.price + (props.price * 0.06)).toFixed(2)}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <NavButton onPress={props.onNext}>Return Home</NavButton>
            </View>
        </View>
        </LinearGradient>
    );
}

export default ServiceReviewScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        width: "100%"
    },
    titleContainer: {
        marginBottom: 10,
        marginHorizontal: 10,
        paddingVertical: 3,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: Colors.primary500
    },
    subTitleContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10
    },
    subTitle: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        color: Colors.primary500
    },
    servicesContainer: {
        flex: 3
    },
    service: {
        fontSize: 20,
        color: Colors.primary500,
        padding: 10
    },
    subService: {
        textAlign: "center",
        fontSize: 17,
        fontWeight: "bold",
        color: Colors.primary500
    },
    buttonContainer: {
        alignItems: "center",
        justifyContent: "center"
    }
})