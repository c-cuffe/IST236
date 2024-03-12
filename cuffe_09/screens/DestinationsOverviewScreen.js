import { useLayoutEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { COUNTRIES, DESTINATIONS } from "../data/dummy-data";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import DestinationItem from "../components/DestinationItem";


function DestinationsOverviewScreen(props){

    const countryId = props.route.params.countryId;

    useLayoutEffect(() => {
        const country = COUNTRIES.find((country) => country.id === countryId);
        props.navigation.setOptions({ title: country ? country.name : null});
    }, [countryId, props.navigation]);

    const displayedDestinations = DESTINATIONS.filter((destinationItem) => {
        return destinationItem.countryId === countryId;
    });

    function renderDestinationItem(itemData){
        const destinationItemProps = {
            name: itemData.item.name,
            imageUrl: itemData.item.imageUrl,
            avgCost: itemData.item.avgCost,
            foundedYear: itemData.item.foundedYear,
            rating: itemData.item.rating,
            listIndex: itemData.index
        }
        return <DestinationItem {...destinationItemProps} />
    }
    return (
        <View style={styles.container}>
            <FlatList 
                data={displayedDestinations}
                keyExtractor={(item) => item.id}
                renderItem={renderDestinationItem}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})
export default DestinationsOverviewScreen;