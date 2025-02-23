//your JS code here. If required.

let squares = document.querSelectorAll(".square");

function onEnter(event) {
	squares.foreach(square => {
		if (square !== event.target) {
			square.style.backgroundColor = "#6F4E37"; 
		}
	});
}

function onLeave() {
	squares.forEach(square =>{
		square.style.backgroundColor = "#E6E6FA";
	});
}

squares.forEach(square =>{
	square.addEventListener("Oncursor", onEnter);
	square.addEvenetListener("Offcursor", onLeave);
});