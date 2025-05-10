const { Book, BookWithIsbn } = require('../09-ObjectOrientedJS');

test('Book instancia corretamente', () => {
    const book = new Book('Título', 100, '123');
    expect(book.title).toBe('Título');
    expect(book.pages).toBe(100);
    expect(book.isbn).toBe('123');
});

test('BookWithIsbn instancia corretamente', () => {
    const book = new BookWithIsbn('Título', 100, '123');
    expect(book.title).toBe('Título');
    expect(book.pages).toBe(100);
    expect(book.isbn).toBe('123');
});