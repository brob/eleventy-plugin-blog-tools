module.exports = function(items, categorizeBy, categoryArray = [], threshold = 1, excludedSlug = "") {
  let posts = Array.from(items).filter(item => {
    return item.fileSlug != excludedSlug // removes "excluded item" aka the current item
  });

  let filteredPosts = posts.filter(item => {
    let matchedCount = 0; // Counter to match our threshold
    if (categorizeBy in item.data) {
      item.data[categorizeBy].forEach(cat => {
        if (categoryArray.includes(cat)) {
          return matchedCount++
        }
      });
    }
    return (matchedCount >= threshold);
  })
  return filteredPosts
}