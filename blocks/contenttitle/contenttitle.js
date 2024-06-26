var titleRaw = document.getElementsByClassName("contenttitle")
var titleDiv = titleRaw[0].innerHTML.replace(/<div>|<\/div>/g, '');
var title = titleDiv.replace(/ /g, "");


if ((title.trim().length) > 50){
    alert ("No bueno")
    //document.getElementsByClassName("contenttitle")[0].textContent = titleDiv.substring(0, 50) + "...";
}




