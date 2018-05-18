setInterval(loadTooltips, 1000)

function loadTooltips() {
    images = document.querySelectorAll('.AdaptiveMedia-container img');
    for(i = 0, len = images.length; i < len; i++) {
        image = images[i];
        if(image.hasAttribute('data-tippy')) {
            continue;
        }
        else {
            description = image.getAttribute('alt');
            if(!description || description === "") {
                description = "<i>No image description provided</i>";
            }
            image.setAttribute('title', description);
        }
    }

    tippy('.AdaptiveMedia-container img', {arrow: true, arrowType: 'round'});
}
