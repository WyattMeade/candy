var myVideo = document.getElementById("video1");
var display = document.getElementById("timeDisplay");
var duration = document.getElementById("duration");
var volumeBar = document.getElementById("volume");

document.getElementById("play").onclick = function() {
    playPause();
};
document.getElementById("expand").onclick = function() {
    makeBig();
};
document.getElementById("shrink").onclick = function() {
    makeSmall();
};
document.getElementById("default").onclick = function() {
    makeDefault();
};
document.getElementById("stop").onclick = function() {
    stopVideo();
};
document.getElementById("replay").onclick = function() {
    replayVideo();
};
document.getElementById("mute").onclick = function() {
    muteVideo();
};

// Play/Pause Button
function playPause() {

    if (myVideo.paused) {

        myVideo.play();
        $("#play").find("i").attr("data-icon", "pause");

    } else {

        myVideo.pause();
        $("#play").find("i").attr("data-icon", "play");

    }

}

// Stop Button
function stopVideo() {

    myVideo.pause();
    myVideo.currentTime = 0;
    $("#play").find("i").attr("data-icon", "play");

}

// Replay Button
function replayVideo() {

    myVideo.currentTime = 0;

}

// Mute Button
function muteVideo() {

    if (myVideo.muted) {

        myVideo.muted = false;
        $("#mute").find("i").attr("data-icon", "volume-up");
        volumeBar.value = 1;

    } else {

        myVideo.muted = true;
        $("#mute").find("i").attr("data-icon", "mute");
        volumeBar.value = 0;

    }

}

// Sound Slider
volumeBar.addEventListener("change", function() {

    myVideo.volume = volumeBar.value;

});

// Expand Video
function makeBig() {

    myVideo.width = 1080;
    myVideo.height = 720;

}

// Shrink Video
function makeSmall() {

    myVideo.width = 320;
    myVideo.height = 200;

}

// Resize Video to Default
function makeDefault() {

    myVideo.width = 720;
    myVideo.height = 404;

}

// Show Elapsed Time
myVideo.addEventListener("timeupdate", function() {

    display.innerText = myVideo.currentTime.toFixed(2);

}, false);

// Show Duration
duration.innerText = myVideo.duration.toFixed(2);