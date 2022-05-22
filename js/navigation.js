/*function MenuClick(_menuItem) {
    let _count, _menuContent, _menuItemPrevious;

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
}*/

//Tab functionality - when clicking a tab, reveal its content and hide that of the previous tab
function TabClick(_tabItem) {
    let _count, _tabContent;

     //Get all elements with class="tabcontent" and hide them
    _tabContent = document.getElementsByClassName("tabcontent");
    for (_count = 0; _count < _tabContent.length; _count++) {
      _tabContent[_count].style.display = "none";
    }
  
    //Remove previous menu item 'is-active'
    document.getElementById(gameData.activeTabItem).classList.remove("is-active");
  
    //Make new item active and display the contents
    document.getElementById(_tabItem).classList.add("is-active");
    document.getElementById(ReturnContentFromItem(_tabItem)).style.display = "block";

    //Finally, save this change to data
    gameData.activeTabItem = document.getElementById(_tabItem).id;
}

  //when given a string reference to a DOM ID relating to a menu or tab item, it will return the same string but pointing at the respective content instead of the item
function ReturnContentFromItem (_item) {
    return _item.replace("item", "content");
}

//function to replace all the classes of an element with another set of classes. Main purpose of this is to keep HTML managable
function ReplaceAllClassElementsWithElementClass(_toReplace, _replaceWith) {
  let _toReplaceCollection = document.getElementsByClassName(_toReplace);
  while (_toReplaceCollection.length) {
    _toReplaceCollection[0].className = _replaceWith;
  }
}