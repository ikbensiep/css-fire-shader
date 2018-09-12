var filters = {
    'hue' : 0,
    'blur': 0,
    'contrast': 128
};


window.addEventListener("mousemove", function (e) {
    if (e.target.nodeName === 'INPUT') {

        filters[e.target.name] = e.target.value;

        var cssFilters = 'blur(' + filters['blur'] + 'px) contrast('+ filters['contrast'] +'%) hue-rotate('+ filters['hue']+'deg)'; 
        document.querySelector('.shader').setAttribute('style', 'filter: ' + cssFilters);
    }
});