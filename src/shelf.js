function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    return shelf.unshift(book)
    }
  }

function unshelfBook(book, shelf) {
  for (var i=0; i < shelf.length; i++) {
    return shelf.splice(book)
    }
  }


module.exports = {
  shelfBook,
  unshelfBook,
  // listTitles,
  // searchShelf
};
