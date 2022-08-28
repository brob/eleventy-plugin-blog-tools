const seperator = {
    start: '<!-- excerpt start -->', 
    end: '<!-- excerpt end -->', 
    total: '<!-- excerpt -->'
};


module.exports = function(article) {
    let excerpt = article.data.excerpt ? `<p>${article.data.excerpt}</p>` : "";
    const articleContent = article.templateContent;

    let startPosition = articleContent.toLowerCase().indexOf(seperator.start);
    let endPosition = articleContent.toLowerCase().indexOf(seperator.end);
    let totalPosition = articleContent.toLowerCase().indexOf(seperator.total)

    if (totalPosition !== -1) {
        excerpt = articleContent.substring(0, totalPosition);
    } else if (startPosition !== -1 && endPosition !== -1) {
        excerpt = articleContent.substring(startPosition + seperator.start.length, endPosition);
    } else if (!article.data.excerpt) {
        let startPosition = articleContent.toLowerCase().indexOf('<p>');
        let endPosition = articleContent.toLowerCase().indexOf('</p>');
        
        excerpt = articleContent.substring(startPosition + 3, endPosition);
    }
    return excerpt
} 