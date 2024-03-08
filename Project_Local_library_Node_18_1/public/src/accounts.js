// Accounts

function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}

function sortAccountsByLastName(accounts) {
  // slice the names of the accounts up and sort them by last name after making all letter lowercase for comparing equally
  return accounts.slice().sort((a, b) => {
    //  make variable extracting a lowercase last name
    const lastNameA = a.name.last.toLowerCase();
    const lastNameB = b.name.last.toLowerCase();
    // compoare using localeCompare
    return lastNameA.localeCompare(lastNameB);
  })
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((count, book) => {
    const borrowCount = book.borrows.filter(borrow => borrow.id === account.id).length;
    return count + borrowCount;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  const borrowedBooks = books.filter(book =>
    book.borrows.some(borrow => borrow.id === account.id && !borrow.returned)
  );

  // Add author information to each borrowed book
  const booksWithAuthors = borrowedBooks.map(book => {
    const author = authors.find(author => author.id === book.authorId);
    return {
      ...book,
      author,
    };
  });

  return booksWithAuthors;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
