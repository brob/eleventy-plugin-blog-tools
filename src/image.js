module.exports = function(imgSrc, alt, options) {
    console.dir(options);
    let caption;
    if (options.caption || options.altCaption) {
        caption = options.altCaption ? alt : options.caption 
    }



    const classString = `img-float--${options.float} img-size--${options.size}`

    return `<figure class="${classString}">
            <img src="${imgSrc}" alt="${alt}" >
            ${caption ? `<figcaption>${caption}</figcaption>` : ``}</figure>`
}   