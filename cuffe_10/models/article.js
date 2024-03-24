class Article {
    constructor(
      id,
      category,
      date,
      headline,
      author,
      agency,
      description,
      imageUrl,
    ) {
      this.id = id;
      this.category = category;
      this.date = date;
      this.headline = headline;
      this.author = author;
      this.agency = agency;
      this.imageUrl = imageUrl;
      this.description = description;
    }
  
    toString() {
      return `Publication Date: ${this.date} - Headline: ${this.headline} - Author: ${this.author} - Description: ${this.description} - Image URL: ${this.imageUrl}`;
    }
  }
  
  export default Article;  