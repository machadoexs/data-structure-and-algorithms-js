export default class Book {
  constructor(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
  }

  printIsbn() {
    console.log(this.isbn)
  }

  printTitle() {
    console.log(this.title)
  }
}

let book = new Book('Lord of the Rings', 1000, '00000x')
console.log(book.title)
book.title = 'The Hobbit'
console.log(book.title)
