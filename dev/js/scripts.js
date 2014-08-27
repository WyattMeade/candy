window.onload = function() {

	var myVideo = document.getElementById("video1"); 

	function playPause() { 

		if (myVideo.paused) 

	    myVideo.play(); 

	  else 

	  	myVideo.pause(); 

	} 

	function makeBig() { 
	
	  myVideo.width = 1080;
	
	} 

	function makeSmall() { 
	
	  myVideo.width = 320; 
	
	} 

	function makeNormal() { 
	
	    myVideo.width = 720; 

	} 

}