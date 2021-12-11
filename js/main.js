var gameData = {

    //activeMenuItem : "dashboardmenuitem",
    activeTabItem : "combattabitem"
}

window.onload = function () 
{
    document.getElementById(ReturnContentFromItem(gameData.activeTabItem)).style.display = "block"; //unhide the previously selected menu item onload
}

function SaveGame ()
{
    localStorage.setItem("walkerSave",JSON.stringify(gameData));
}

function LoadGame ()
{
    let gameData = JSON.parse(localStorage.getItem("walkerSave"));
    if (typeof gameData.cookies !== "undefined") cookies = gameData.cookies; 
}

function DeleteSave ()
{
    localStorage.removeItem("walkerSave");
}

