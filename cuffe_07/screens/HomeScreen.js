import { Text, View, StyleSheet, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import { RadioGroup } from "react-native-radio-buttons-group";
import Colors from "../constants/colors";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import NavButton from "../components/NavButton";
import { ImageBackground } from "react-native";
import { Switch } from "react-native";
function HomeScreen(props) {
    const insets = useSafeAreaInsets();
    return (
        <ImageBackground
        source={require("../assets/images/background.jpg")}
        resizeMode="cover">
        <View
            style={[
                styles.rootContainer,
                {
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom,
                    paddingLeft: insets.left,
                    paddingRight: insets.right
                }
            ]}>
            <View style={styles.titleContainer}>
                <Title>Bike Repair Shop</Title>
            </View>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.radioContainer}>
                    <Text style={styles.radioHeader}>Service Times:</Text>
                    <RadioGroup
                        radioButtons={props.repairTimeRadioButtons}
                        onPress={props.onSetRepairTimeId}
                        selectedId={props.repairTimeId}
                        layout="row"
                        containerStyle={styles.radioGroup}
                        labelStyle={styles.radioGroupLabels}
                    />
                </View>
                <View style={styles.rowContainer}>
                    <View style={styles.checkBoxContainer}>
                        <Text style={styles.checkBoxHeader}>Services:</Text>
                        <View style={styles.checkBoxSubContainer}>
                            {props.services.map((item) => {
                                return <BouncyCheckbox 
                                key={item.id}
                                text={item.name}
                                onPress={props.onSetServices.bind(this,item.id)}
                                textStyle={{
                                    textDecorationLine: "none",
                                    color: Colors.primary500
                                }}
                                innerIconStyle={{
                                    borderRadius: 0,
                                    borderColor: Colors.primary500
                                }}
                                iconStyle={{
                                    borderRadius: 0,
                                }}
                                fillColor={Colors.primary500}
                                style={{
                                    padding: 2
                                }}
                                />
                            }

                            )}
                        </View>
                    </View>
                </View>
                <View style={styles.optionsContainer}>
                            <Text style={styles.optionsLabel}>Signup for Newsletter</Text>
                            <Switch
                            onValueChange={props.onSetNewsletter}
                            value={props.newsletter}
                            thumbColor={props.newsletter ? Colors.primary500 : Colors.primary800}
                            trackColor={{false: Colors.primary300, ture: Colors.primary800}} />
                            <Text style={styles.optionsLabel}>Rental Membership Signup</Text>
                            <Switch
                            onValueChange={props.onSetRentalMembership}
                            value={props.rentalMembership}
                            thumbColor={props.rentalMembership ? Colors.primary500 : Colors.primary800}
                            trackColor={{false: Colors.primary300, ture: Colors.primary800}} />
                    </View>
                <View style={styles.buttonContainer}>
                    <NavButton onPress={props.onNext}>Submit</NavButton>
                </View>
            </ScrollView>
        </View>
        </ImageBackground>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    titleContainer: {
        marginBottom: 10,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: Colors.primary500
    },
    scrollContainer: {
        flex: 1
    },
    radioContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    radioContainer: {
    },
    radioHeader: {
        fontSize: 30,
        color: Colors.primary500
    },
    radioGroup: {
        paddingBottom: 20
    },
    radioGroupLabels: {
        fontSize: 20,
        color: Colors.primary500
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 20
    },
    checkBoxContainer: {},
    checkBoxHeader: {
        fontSize: 20,
        color: Colors.primary500
    },
    checkBoxSubContainer: {
        padding: 2
    },
    cheeseContainer: {
        alignItems: "center",
    },
    optionsContainer: {
        justifyContent: "space-between",
    },
    optionsLabel: {
        color: Colors.primary500,
        fontSize: 20
    },
    optionsSwitches: {
        alignItems: "center"
    },
    buttonContainer: {
        alignItems: "center",
        justifyContent: "center"
    }
})