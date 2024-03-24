import List from "../components/List/List";
import { ARTICLES } from "../data/dummy_data";

function UsNewsScreen() {
  const category = "US";
  const displayedArticles = ARTICLES.filter((articleItem) => {
    return articleItem.category === category;
  });

  return <List items={displayedArticles} />;
}

export default UsNewsScreen;
