var emptyObj = new Object()
var emptyObj2 = {}

console.log(emptyObj)
console.log(emptyObj2)

var objMage = {name: {first: 'Gandalf', last: 'the Grey'}, address: 'Middle Earth'}
console.log(objMage)

function Book(title, pages, isbn) {
  this.title = title
  this.pages = pages
  this.isbn = isbn

  this.printIsbn = function() {
    console.log("Printing isbn as function " + this.isbn)
  }
}

var book = new Book('Lord of the Rings', '1000', 9999)
console.log(book.title)
book.title = 'Lord of the Rings - The Fellowship of the Ring'
console.log(book.title)

Book.prototype.printTitle = function() {
  console.log("Printing title as function " + this.title)
}
book.printTitle()
book.printIsbn()
