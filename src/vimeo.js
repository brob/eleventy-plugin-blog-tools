
module.exports = function(id) {

    return `<div style="position: relative;
width: 100%;
height: 0;
padding-bottom: 56.25%; margin-bottom: 1rem;">
<iframe src="https://player.vimeo.com/video/${id}" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen style="
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;"><p><a href="https://vimeo.com/${id}">Watch the video on Vimeo</a></p></iframe>
</div>`
}