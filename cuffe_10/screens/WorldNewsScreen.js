import List from "../components/List/List";
import { ARTICLES } from "../data/dummy_data";

function WorldNewsScreen() {
  const category = "World";
  const displayedListings = ARTICLES.filter((listingItem) => {
    return listingItem.category === category;
  });

  return <List items={displayedListings} />;
}

export default WorldNewsScreen;
