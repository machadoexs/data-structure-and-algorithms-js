class Book {
  constructor(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
  }

  printIsbn() {
    console.log(this.isbn)
  }
}

class ITBook extends Book {
  constructor(title, pages, isbn, technology) {
    super(title, pages, isbn)
    this.technology = technology
  }

  printTechnology() {
    console.log(this.technology)
  }
}

let elixirBook = new ITBook('Elixir in Action', 300, '123455676709', 'Elixir')
console.log(elixirBook.title)
console.log(elixirBook.printTechnology())
console.log(elixirBook.printIsbn())
