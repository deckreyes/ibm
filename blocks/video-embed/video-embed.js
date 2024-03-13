var videoInfo = document.getElementsByClassName("video-embed")[0].innerHTML
var videoURL = videoInfo.replace(/<div>/g,'').replace(/<\/div>/g,'')

//alert (videoURL)

document.getElementById('video-placement').innerHTML = "<object type=\"text/html\" data=\"" + videoURL + "\" style=\"width:600px; height:400px\"></object>";