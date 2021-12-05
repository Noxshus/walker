function MenuClick(_menuItem) {
    var _count, _menuContent, _menuItemPrevious;

     //Get all elements with class="menucontent" and hide them
    _menuContent = document.getElementsByClassName("menucontent");
    for (_count = 0; _count < _menuContent.length; _count++) {
      _menuContent[_count].style.display = "none";
    }
  
    //Remove previous menu item 'is-active'
    document.getElementById(gameData.activeMenuItem).classList.remove("is-active");
  
    //Make new item active and display the contents
    document.getElementById(_menuItem).classList.add("is-active");
    document.getElementById(ReturnContentFromItem(_menuItem)).style.display = "block";

    //Finally, save this change to data
    gameData.activeMenuItem = document.getElementById(_menuItem).id;
} 

  //when given a string reference to a DOM ID relating to a menu or tab item, it will return the same string but pointing at the respective content instead
function ReturnContentFromItem (_item) {
    return _item.replace("item", "content");
}