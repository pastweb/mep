var showHideCustomControls = function(linkElement){
	var linkElement = document.getElementById("showHideLink");
	if(linkElement.innerHTML.indexOf('show') == 0){
		linkElement.innerHTML = 'hide custom controls';
		hideNativeControls();
	}else{
		linkElement.innerHTML = 'show custom controls';
		showNativeControls();
	}
}

var hideNativeControls = function(){
	var videoElement = document.getElementById("videoPlayer");
	videoElement.removeAttribute("controls");
	showCustomControls();
//	var bodyElement = document.getElementsByTagName("body")[0];
//	bodyElement.removeChild(document.getElementById("customControls"));
}

var showNativeControls = function(){
	var bodyElement = document.getElementsByTagName("body")[0];
	bodyElement.removeChild(document.getElementById("customControls"));
	var videoElement = document.getElementById("videoPlayer");
	videoElement.setAttribute("controls", "");
}

var showCustomControls = function(){
	var customControlsNode = document.createElement("div");
	customControlsNode.setAttribute("id", "customControls");

	var customButtonNode = document.createElement("button");
	customButtonNode.setAttribute("onclick", "playPause()");
	customButtonNode.appendChild(document.createTextNode("Play/Pause"));
	customControlsNode.appendChild(customButtonNode);

	customButtonNode = document.createElement("button");
	customButtonNode.setAttribute("onclick", "makeBig()");
	customButtonNode.appendChild(document.createTextNode("Big"));
	customControlsNode.appendChild(customButtonNode);
	
	customButtonNode = document.createElement("button");
	customButtonNode.setAttribute("onclick", "makeSmall()");
	customButtonNode.appendChild(document.createTextNode("Small"));
	customControlsNode.appendChild(customButtonNode);

	customButtonNode = document.createElement("button");
	customButtonNode.setAttribute("onclick", "makeNormal()");
	customButtonNode.appendChild(document.createTextNode("Normal"));
	customControlsNode.appendChild(customButtonNode);

	var bodyElement = document.getElementsByTagName("body")[0];
	bodyElement.appendChild(customControlsNode);
}

var playPause = function(){ 
	var videoElement = document.getElementById("videoPlayer");
    if (videoElement.paused) 
        videoElement.play(); 
    else 
        videoElement.pause(); 
} 

var makeBig = function() {
	var videoElement = document.getElementById("videoPlayer");
    videoElement.width = 560; 
} 

var makeSmall = function(){
	var videoElement = document.getElementById("videoPlayer");
    videoElement.width = 320; 
}

var makeNormal = function(){
	var videoElement = document.getElementById("videoPlayer"); 
    videoElement.width = 420; 
}