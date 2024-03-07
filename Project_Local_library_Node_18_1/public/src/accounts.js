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

function getTotalNumberOfBorrows(account, books) {}

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
