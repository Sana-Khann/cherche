const toggleButton = document.getElementById("toggle-button");
const closeButton = document.getElementById("close-button");
const navList = document.getElementById("nav-list");

if(toggleButton)
{
    toggleButton.addEventListener("click", ()=>{
    navList.classList.add("show")
    })
}
if(closeButton)
{
    closeButton.addEventListener("click", ()=>{
        navList.classList.remove("show");
    })
}
const navItems = document.querySelectorAll(".nav-item");
for(var i=0;i<navItems.length;i++)
{
    navItems[i].addEventListener("click", ()=>{
        navList.classList.remove("show");
    })
}


const color=["#00B894", "#D63031", "#6C5CE7", "#E84393", "#74B9FF", " #0984E3", "#2D3436", "#FDCB6E", " #A29BFE", " #F96058", "#000000", "#5C5C5C"];
const tableItems= document.querySelectorAll(".table-item");
for(var i=0;i<tableItems.length;i++)
{
    var j= Math.floor(Math.random()*(color.length - 1));
    tableItems[i].style.color= color[j];
}


const tileItems= document.querySelectorAll(".box-decor")
for(var i=0;i<tileItems.length;i++)
{
    var j= Math.floor(Math.random()*(color.length - 1));
    tileItems[i].style.backgroundColor = color[j];
}
