var filters = {
    'hue-rotate' : {
        'value': 0,
        'unit': 'deg'
    },
    'blur': {
        'value': 0,
        'unit': 'px'
    },

    'contrast': {
        'value': 128,
        'unit': '%'
    },
    'brightness': {
        'value': 100,
        'unit': '%'
    }
};

function stampFilterString (filters) {

    return Object.entries(filters).map( ([name, value]) => {
        return `${name}(${value.value}${value.unit})`;
    }).join(' ');

}

window.addEventListener("mousemove", function (e) {
    if (e.target.nodeName === 'INPUT') {

        filters[e.target.name]['value'] = e.target.value;

        var cssFilters = stampFilterString(filters);
        //document.querySelector('.shader').setAttribute('style', 'filter: ' + cssFilters);
        document.querySelector('.shader').style.filter = cssFilters;
    }
});

window.addEventListener("touchmove", function (e) {
    if (e.target.nodeName === 'INPUT') {

        filters[e.target.name]['value'] = e.target.value;

        var cssFilters = stampFilterString(filters);
        //document.querySelector('.shader').setAttribute('style', 'filter: ' + cssFilters);
        document.querySelector('.shader').style.filter = cssFilters;
    }
});