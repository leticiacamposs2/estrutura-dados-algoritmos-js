var obj = new Object();
var obj = {}; // object literal syntax

obj = {
    name: {
        first: 'Gandalf',
        last: 'the Grey'
    },
    address: 'Middle Earth'
};

function Book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}

var book = new Book('title', 'pages', 'isbn');

console.log(book.title); // title
book.title = 'new title'; // update property
console.log(book.title); // new title

Book.prototype.printTitle = function () {
    console.log(this.title);
}
book.printTitle(); // new title

function Book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
    this.printIsbn = function () {
        console.log(this.isbn);
    }
}
book.printIsbn(); // isbn

