function createTitle(title) {
  return `The ${title}`
}

 function buildMainCharacter(name, age, pronouns) {
   var character = {
    name: name,
    age: age,
    pronouns: pronouns,
    }
    return character
  }

  function saveReview (comment, reviews) {
    if (!reviews.includes(comment)) {
      return reviews.push(comment)
    } else {
      return
    }
  }

  function calculatePageCount(title) {
   return title.length * 20
  }

  function writeBook(title, mainCharacter, genre) {
    return {
    title: title,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(title),
    genre: genre,
    }
  }

  function editBook(title) {
    title.pageCount = title.pageCount * .75
  }

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
