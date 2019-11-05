
document.addEventListener('DOMContentLoaded', (event) => {

    partials("MIG-navigation");
    partials("MIG-header",navbutton);
    partials("MIG-footer");

    //navbutton();

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

