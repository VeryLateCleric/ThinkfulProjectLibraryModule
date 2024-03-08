// Home

function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
    // filter to make new array with only books that have been borrowed, then return that length
    return books.filter(books => !books.borrows[0].returned).length
}

function getMostCommonGenres(books) {
  // Create an object to store the genre counts
  const genreCounts = {};

  // Calculate the genre counts for each book
  books.forEach(book => {
    const genres = Array.isArray(book.genre) ? book.genre : [book.genre];
    
    genres.forEach(genre => {
      genreCounts[genre] = (genreCounts[genre] || 0) + 1;
    });
  });
  // Convert the genreCounts object to an array of objects
  const genreArray = Object.entries(genreCounts).map(([genre, count]) => ({
    name: genre,
    count,
  }));
  // Sort the array in descending order
  genreArray.sort((a, b) => b.count - a.count);
  // Take top 5 only with .slice
  const topGenres = genreArray.slice(0, 5);
  // Return an array of genre objects with 'name' and 'count' properties
  return topGenres;
}

function getMostPopularBooks(books) {
  // create new array that checks each book in original array for their title and borrowCOunt
  // count is calculated with borrows.length
  const booksWithBorrowCounts = books.map(book => ({
    title: book.title,
    borrowCount: book.borrows.length,
  }));
  // sort books in order of most borrowed to least
  booksWithBorrowCounts.sort((a, b) => b.borrowCount - a.borrowCount);
  // take top 5 books with .slice
  const topBooks = booksWithBorrowCounts.slice(0, 5);
  // since we want to return the books with the keys "name" and "count" map this out
  return topBooks.map(book => ({
    name: book.title,
    count: book.borrowCount,
  }));
}

function getMostPopularAuthors(books, authors) {
  // create an empty object {}
  const authorBorrowCounts = {};
  // Calculate borrowCount of each author. Here we first extract authorId and borrowsCount.
  books.forEach(book => {
    const authorId = book.authorId;
    const borrowCount = book.borrows.length;
  // Case for if there are no borrows yet for author, set borrows for author to 0. Then we can add
    if (!authorBorrowCounts[authorId]) {
      authorBorrowCounts[authorId] = 0;
    }
  // Now we add borrowCount to authorBorrowCount for that specific author [authorId]
    authorBorrowCounts[authorId] += borrowCount
  })
  // Here we want to make an array of objects out of authorBorrowCounts using Object.entries
  const authorArray = Object.entries(authorBorrowCounts).map(([authorId, borrowCount]) => {
    const author = authors.find(author => author.id === parseInt(authorId));
    return {
      author,
      borrowCount,
    };
  })
  // SOrt array by borrow count into descending order
  authorArray.sort((a, b) => b.borrowCount - a.borrowCount);
  // take top 5
  const topAuthors = authorArray.slice(0, 5);
  return topAuthors.map(authorObject => ({
    name: `${authorObject.author.name.first} ${authorObject.author.name.last}`,
    count: authorObject.borrowCount,
  }))
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
