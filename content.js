overflow = document.createElement('style');
overflow.innerHTML = '.tooltip {white-space: wrap;} .tooltip-inner {max-width: none; word-wrap: break-word !important;}'
document.body.appendChild(overflow)

setInterval(loadTooltips, 1000)
// loadTooltips();

function loadTooltips() {
    $('.AdaptiveMedia-container img').each(function(index) {
        img = $(this);
        description = img.attr('alt');
        // if(img.data && img.data('bs.tooltip')) {
        //     return;
        // }
        // else {
            if(!description || description === "") {
                description = "<i>No image description provided</i>";
            }
            img.tooltip({title: description, placement: "auto", html: true});
        // }
    })
}
