// Books

function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}

function findBookById(books, id) {
  return books.find(book => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
// filter if a book is not returned and if a book is returned, then return those results
  const borrowedBooks = books.filter(book => !book.borrows[0].returned);
  const returnedBooks = books.filter(book => book.borrows[0].returned);
  return [borrowedBooks, returnedBooks];
}

function getBorrowersForBook(book, accounts) {
  // use map to check all borrow records in borrows array
  // for each, find the account that borrowed
  return book.borrows
  .map(borrow => {
    const account = accounts.find(account => account.id === borrow.id);
    return {
      ...borrow,
      ...account,
    };
  })
  // Now take the first 10 elemnents of the array so we end up with 10
  .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
