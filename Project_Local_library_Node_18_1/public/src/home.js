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

function getMostPopularBooks(books) {}

function getMostPopularAuthors(books, authors) {}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
