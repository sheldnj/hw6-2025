var video;
// First loads
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	console.log("Auto play is set to " + video.autoplay);
	video.loop = false;
	console.log("Loop is set to " + video.loop);
});
// play video
document.getElementById("play").addEventListener("click", function() {
	console.log("Play Video");
	video = document.getElementById("player1");
	video.play();
});
// pause video
document.getElementById("pause").addEventListener("click", function() {
	console.log("Pause Video");
	video = document.getElementById("player1");
	video.pause();
});
// slow video
document.getElementById("slower").addEventListener("click", function() {
	console.log("Slow down video");
	video = document.getElementById("player1");
	video.playbackRate = video.playbackRate * 0.9;
	console.log("Speed is " + video.playbackRate);
});
// speed video
document.getElementById("faster").addEventListener("click", function() {
	console.log("Speed up video");
	video = document.getElementById("player1");
	video.playbackRate = video.playbackRate * (1/0.9);
	console.log("Speed is " + video.playbackRate);
});
// skip 10 seconds
document.getElementById("skip").addEventListener("click", function() {
	video = document.getElementById("player1");
	if (video.currentTime + 10 > video.duration){
		video.currentTime = 0;
	}
	else{
		video.currentTime += 10;
	}
	console.log("Video current time is " + video.currentTime);
});
// mute/unmute
document.getElementById("mute").addEventListener("click", function(){
	video = document.getElementById("player1");
	let muteText = document.getElementById("mute");
	if (!video.muted){
		video.muted = true;
		muteText.textContent = "Unmute";
	}
	else{
		video.muted = false;
		muteText.textContent = "Mute";
	}

});

//volume slider
document.getElementById("slider").addEventListener("input", function(){
	video = document.getElementById("player1");
	let volSlider = document.getElementById("slider").value / 100;
	video.volume = volSlider;
	console.log("The current value is " + volSlider); 

});

//old school
document.getElementById("vintage").addEventListener("click", function(){
	video = document.getElementById("player1");
	video.style.filter = "grayscale(100%)";

});

//original 
document.getElementById("orig").addEventListener("click", function(){
	video = document.getElementById("player1");
	video.style.filter = "grayscale(0%)";

});