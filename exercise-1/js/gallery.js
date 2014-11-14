var changeImage = function(linkElement){
	var largeImg = document.getElementById("largeImg");
	var largeImgIndex = largeImg.src.substring(largeImg.src.indexOf('img')+3, largeImg.src.indexOf('img')+4);
	var thumbImgIndex = linkElement.title.substring(linkElement.title.indexOf(' ')+1);
	largeImg.src = 'images/img'+thumbImgIndex+'-lg.jpg';
	linkElement.childNodes[0].src = 'images/img'+largeImgIndex+'-thumb.jpg';
	linkElement.title = 'Image '+largeImgIndex;
}

var listImages = [];
var thumbIndex = 1;

var loadImages = function(){
	var a = new XMLHttpRequest();
	a.open("POST","images.json",true);
	a.onreadystatechange = function() {
  		if( a.readyState == 4) {
    		if( a.status == 200) {
      			listImages = JSON.parse(a.responseText);
      			renderHTML(listImages);
    		}
    		else alert("HTTP error "+this.status+" "+this.statusText);
  		}
	}
	a.send();
}

var renderHTML = function(imageList){
	var largeImg = document.getElementById("largeImg");
	largeImg.src = imageList[0].large;
	var thumbsElement = document.getElementsByClassName("thumbs");
	var thumbNodes = '';
	for(var i = 1; i < imageList.length; i++){
		thumbNodes = thumbNodes+'<a href="#" onclick="changeImage(this)" title="Image '+(i+1)+'"><img src="'+imageList[i].thumb+'" /></a>';
	}
	thumbsElement[0].innerHTML = thumbNodes;
}

var prevImage = function(){
	if(thumbIndex == 1) thumbIndex = 6;
	var largeImg = document.getElementById("largeImg");
	var largeImgIndex = largeImg.src.substring(largeImg.src.indexOf('img')+3, largeImg.src.indexOf('img')+4);
	var thumbsElements = document.getElementsByClassName("thumbs")[0].childNodes;
	var currentThumbElement = thumbsElements[thumbIndex-2];
	var thumbImgIndex = currentThumbElement.title.substring(currentThumbElement.title.indexOf(' ')+1);
	largeImg.src = 'images/img'+thumbImgIndex+'-lg.jpg';
	currentThumbElement.childNodes[0].src = 'images/img'+largeImgIndex+'-thumb.jpg';
	currentThumbElement.title = 'Image '+largeImgIndex;
	--thumbIndex; 
}

var nextImage = function(){
	if(thumbIndex == 6) thumbIndex = 1;
	var largeImg = document.getElementById("largeImg");
	var largeImgIndex = largeImg.src.substring(largeImg.src.indexOf('img')+3, largeImg.src.indexOf('img')+4);
	var thumbsElements = document.getElementsByClassName("thumbs")[0].childNodes;
	var currentThumbElement = thumbsElements[thumbIndex-1];
	var thumbImgIndex = currentThumbElement.title.substring(currentThumbElement.title.indexOf(' ')+1);
	largeImg.src = 'images/img'+thumbImgIndex+'-lg.jpg';
	currentThumbElement.childNodes[0].src = 'images/img'+largeImgIndex+'-thumb.jpg';
	currentThumbElement.title = 'Image '+largeImgIndex;
	++thumbIndex;
}