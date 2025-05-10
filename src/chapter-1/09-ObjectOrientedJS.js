var obj = {
    name: {
        first: 'Gandalf',
        last: 'the Grey'
    },
    address: 'Middle Earth'
};
console.log(obj);

function Book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}

var book = new Book('title', 'pages', 'isbn');

console.log(book.title);
book.title = 'new title';
console.log(book.title);

Book.prototype.printTitle = function () {
    console.log(this.title);
};
book.printTitle();

function BookWithIsbn(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
    this.printIsbn = function () {
        console.log(this.isbn);
    };
}
var book2 = new BookWithIsbn('title', 'pages', 'isbn');
book2.printIsbn();