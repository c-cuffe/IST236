import List from "../components/List/List";
import { ARTICLES } from "../data/dummy_data";

function SportsNewsScreen() {
  const category = "Sports";
  const displayedArticles = ARTICLES.filter((articleItem) => {
    return articleItem.category === category;
  });

  return <List items={displayedArticles} />;
}

export default SportsNewsScreen;
