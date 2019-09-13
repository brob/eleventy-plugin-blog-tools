---
layout: "base.njk"
---
## YouTube Embed
    
<div style="width: 500px;">
    {% youtube "-ugZb-o0l0s" %}
</div>


## Vimeo Embed

<div style="width: 500px;">
    {% vimeo "65107797" %}
</div>

## Codepen Embed

{% codepen "http://codepen.io/brob/pen/vGRBeQ/", {tabs: "css,result", height: "300"}  %}


{% blockquote "Bryan Robinson", "something" %}
This is a quote by the person in the citation

Another p?
{% endblockquote %}
