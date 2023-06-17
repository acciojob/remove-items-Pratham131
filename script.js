//your JS code here. If required.
function removeColor() {
	let selectElement = document.getElementById("colorSelect")
	let selectOption = selectElement.options[selectElement.selectedIndex]

	if(selectOption){
		selectElement.removeChild(selectOption)
	}
}
