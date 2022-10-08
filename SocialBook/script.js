'Use strict';

let settingMenuToggler = document.getElementById('profile');
let settingMenu = document.querySelector(".settings-menu");
let darkBtn = document.getElementById('dark-btn');
let inputField = document.getElementById('inputField')
settingMenuToggler.addEventListener('click', function() {
    settingMenu.classList.toggle('settings-menu-height');
})

darkBtn.addEventListener('click', function(){
    darkBtn.classList.toggle('dark-btn-on');
    document.body.classList.toggle('dark-theme');
    if(localStorage.getItem("theme") == "light"){
          localStorage.setItem("theme", "dark");
        
    }else{
         localStorage.setItem("theme", "light");
    }
})


if (localStorage.getItem("theme") == "light"){
      darkBtn.classList.remove("dark-btn-on");
      document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){
     darkBtn.classList.add("dark-btn-on");
     document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme", "light");
}
