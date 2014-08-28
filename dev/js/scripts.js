window.onload = function() {

	var myVideo = document.getElementById("video1"); 

	document.getElementById("play").onclick = function() {playPause()};
	document.getElementById("expand").onclick = function() {makeBig()};
	document.getElementById("shrink").onclick = function() {makeSmall()};
	document.getElementById("normal").onclick = function() {makeNormal()};

	// Play Button
	function playPause() {

		if (myVideo.paused) {

			myVideo.play();
			$("i").addClass("fa-pause").removeClass("fa-play");

		}

		else {

			myVideo.pause();
			$("i").addClass("fa-play").removeClass("fa-pause");

		}

	};

	// Expand Video
	function makeBig() { 

	  	myVideo.width = 1080;
	  	myVideo.height = 720;
	
	};

	
	// Shrink Video
	function makeSmall() { 
	
		myVideo.width = 320;
		myVideo.height = 200;
	
	}; 

	// Resize Video to Default
	function makeNormal() { 
	
	  myVideo.width = 720;
	  myVideo.height = 404; 

	}; 

};