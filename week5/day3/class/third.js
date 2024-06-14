class Book {
    constructor(title, author, date) {
      this.title = title;
      this.author = author;
      this.publicationdate = date;
    }

    showbook() {
        console.log(this.title)
        console.log(this.author)
        console.log(this.publicationdate)
    }
}

class Ebook extends Book {
  constructor(title, author, pages, price) {
    super(title, author, pages); 
    this.price = price;
  }

  showPrice() {
    console.log("Price : ", this.price);
  }
}

const book_ = new Ebook("ibrahim", "ibrahim Muradov", new Date(), 9.99);
book_.showPrice(); 
book_.showbook()
  