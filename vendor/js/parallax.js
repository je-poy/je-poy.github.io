var yposition, home;

function parallax(){
	yposition = window.pageYOffset;
	home = document.getElementById("home-div");
	if (yposition < 430) 
		home.style.top = yposition * .9 + 'px';
	console.log(yposition);
}
window.addEventListener('scroll',parallax);