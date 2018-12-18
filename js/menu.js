function Menu(menu) {
  var classOpen = 'menu-nav--open';

  var menu_nav = menu.querySelector('.menu-nav'); 
  var menu_burgerBtn = menu.querySelector('.menu-button');

  var maxH;
  

  //раскрытие-закрытие меню по бургеру
  menu_burgerBtn.onclick = function() {
    //закрытие
    if(menu_nav.classList.contains(classOpen)){
      menu_nav.style.maxHeight = 0;
      menu_nav.classList.remove(classOpen);
    }
    //открытие
    else{
      maxH = menu_nav.querySelector('.menuList').offsetHeight;
      menu_nav.style.maxHeight = maxH+'px';
      menu_nav.classList.add(classOpen);
    }
  };


};


//usage
document.addEventListener('DOMContentLoaded', function() {
  var menus = document.querySelectorAll('.j-menu');
  for(var i=0; i<menus.length; i++){
    var menu = new Menu(menus[i]);
  };
});