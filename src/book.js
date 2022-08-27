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

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
