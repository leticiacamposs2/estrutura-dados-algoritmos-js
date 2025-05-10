var obj = {
    name: {
        first: 'Gandalf',
        last: 'the Grey'
    },
    address: 'Middle Earth'
};
if (require.main === module) console.log(obj);

function Book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}

var book = new Book('title', 'pages', 'isbn');
if (require.main === module) console.log(book.title);
book.title = 'new title';
if (require.main === module) console.log(book.title);

if (require.main === module) {
    Book.prototype.printTitle = function () {
        console.log(this.title);
    };
    book.printTitle();
}

function BookWithIsbn(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
    this.printIsbn = function () {
        if (require.main === module) console.log(this.isbn);
    }
}

var book2 = new BookWithIsbn('title', 'pages', 'isbn');
book2.printIsbn();

module.exports = { Book, BookWithIsbn };