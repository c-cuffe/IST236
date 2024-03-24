import { View, StyleSheet, FlatList } from "react-native";
import ArticleItem from "./ArticleItem";

function List(props) {
  function renderArticleItem(itemData) {
    const articleItemProps = {
      id: itemData.item.id,
      category: itemData.item.category,
      date: itemData.item.date,
      headline: itemData.item.headline,
      author: itemData.item.author,
      agency: itemData.item.agency,
      description: itemData.item.description,
      imageUrl: itemData.item.imageUrl,
    };
    return <ArticleItem {...articleItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={props.items}
        keyExtractor={(item) => item.id}
        renderItem={renderArticleItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "black"
  },
  backgroundImage: {
    opacity: 0.1,
  },
});
