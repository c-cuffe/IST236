import { View, Text, FlatList } from "react-native";
import { COUNTRIES } from "../data/dummy-data";
import CountryGridTile from "../components/CountryGridTile";




function HomeScreen(props){

    function renderCountryItem(itemData){

        function pressHandler() {
            props.navigation.navigate("DestinationsOverviewScreen", {
                countryId: itemData.item.id,
            });
        }
        return (
            <CountryGridTile
            name={itemData.item.name}
            color={itemData.item.color}
            onPress={pressHandler}
            />

        )
    }
    return (
        <View>
            <FlatList
            data={COUNTRIES}
            keyExtractor={(item) => {
                return item.id
            }}
            renderItem={renderCountryItem}
            numColumns={2}
            ></FlatList>
        </View>
    );
}

export default HomeScreen;