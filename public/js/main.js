
document.addEventListener('DOMContentLoaded', (event) => {

    partials("MIG-navigation");
    partials("MIG-header",navbutton);
    partials("MIG-footer");

    //navbutton();

    // partial classname to search for
    var _showOnScroll = 'show-on-scroll__';
    
    // Detect request animation frame
    var scroll = window.requestAnimationFrame ||
        // IE Fallback
        function(callback){ window.setTimeout(callback, 1000/60)};
    
    // find classes that contains _showOnScroll
    var elementsToShow = document.querySelectorAll(`[class*="show-on-scroll__"]`); 
    //console.log(elementsToShow);

    // Call the loop for the first time
    loop(scroll, elementsToShow);
    //console.log("loop started");

    function loop() {
        elementsToShow.forEach(function (element) {
            if (isElementInViewport(element)) {
                //element.classList.add('animation--moveinleft');
                extractAnnimationClassname(element, 'add');
            } else {
                //element.classList.remove('animation--moveinleft');
                extractAnnimationClassname(element, 'remove');
            }
        });
        
        scroll(loop);
    }
    
    //Helper functin: extract annimation classname
    // action: add, remove
    function extractAnnimationClassname(_element, _action) {
        var _class = null;
        var _classIterator = _element.classList.values();
        for(var _value of _classIterator) {
            if(_value.includes(_showOnScroll)){
                var _r = _value.replace(_showOnScroll,'');
                if(_action == 'add') {
                    _element.classList.add(_r);
                } else {
                    _element.classList.remove(_r);
                }
                
            }
            
        }
    }
    
    // Helper function from: http://stackoverflow.com/a/7557433/274826
    function isElementInViewport(el) {
        // special bonus for those using jQuery
        if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
        }
        var rect = el.getBoundingClientRect();
        return (
            (rect.top <= 0
            && rect.bottom >= 0)
            ||
            (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight))
            ||
            (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
        );
    }
    

});

const  partials = (partial, addfunction=null) => {
    let path = "/partials/";
    let extention = ".html";
    let data_atribute = "*[data='MIG']";
    let res_data_atribute = data_atribute.replace("MIG", partial);
    let file = document.querySelector(res_data_atribute);

    if (file != null) {

        fetch(path.concat(partial, extention))
        .then(response => {
            return response.text();
        })
        .then(data => {
            file.innerHTML = data;  
        })
        .then(() => {
            if(addfunction !=null) { addfunction(); }
        }
            
        );     
    }
 
}

const navbutton = () => {
    let navigation;
    let nav_icon;
    let nav_icon_container;

    navigation = document.getElementById('navigation');
    console.log(document.getElementById('navigation'));
    
    nav_icon_container = document.getElementById('nav-icon__container');
    nav_icon = document.getElementById('nav-icon');
    nav_icon.addEventListener('click', _toggle);
    
    function _toggle() {
        nav_icon.classList.toggle('open');
        nav_icon_container.classList.toggle('fixed');
        navigation.classList.toggle('open');
    } 
}



