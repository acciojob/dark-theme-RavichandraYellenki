//your code here
let btnElement = document.getElementById("swap");
btnElement.addEventListener("click",swapTheme);

function swapTheme(){
	let element = document.getElementById("app");
	app.classList.toggle("night");
}
