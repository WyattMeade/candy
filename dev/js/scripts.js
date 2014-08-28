window.onload = function() {

	var myVideo = document.getElementById("video1"); 

	document.getElementById("playbutton").onclick = function() {playPause()};
	document.getElementById("enlargebutton").onclick = function() {makeBig()};

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

	function makeBig() { 
	
	  myVideo.width = 1080;
	
	};

	function makeSmall() { 
	
		myVideo.width = 320; 
	
	}; 

	function makeNormal() { 
	
	  myVideo.width = 720; 

	}; 

};