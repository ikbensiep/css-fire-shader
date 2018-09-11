var filters = {
    'hue' : 180,
    'blur': 0,
    'contrast': 120
};



window.addEventListener("mousemove", function (e) {
    if (e.target.nodeName === 'INPUT') {

        filters[e.target.name] = e.target.value;

        var cssFilters = 'blur(' + filters['blur'] + 'px) contrast('+ filters['contrast'] +'%) hue-rotate('+ filters['hue']+'deg)'; 
        document.querySelector('.shader').setAttribute('style', 'filter: ' + cssFilters);
        console.log(cssFilters);
        
//            shader.style.filter = cssFilters;
        
        }
});