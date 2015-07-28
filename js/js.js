document.getElementsByClassName("drop-down")[0].onclick = function() {
	var subMenu = document.getElementsByClassName("drop-down__menu")[0];

	if(subMenu.style.display =="") {
		subMenu.style.display = "block";
	}

	else {
		subMenu.style.display = "";
	}
}