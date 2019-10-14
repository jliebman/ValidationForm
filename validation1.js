function validate() {
	
	var image1 = getImage(alphaNumCheck(document.forms["contactForm"]["fname"].value), "fname");
    document.getElementById("fname").appendChild(image1);
	var image2 = getImage(alphaNumCheck(document.forms["contactForm"]["lastn"].value), "lastn");
    document.getElementById("lastn").appendChild(image2);
	var image3 = getImage((document.forms["contactForm"]["Gender"].value != 0), "Gender");
	document.getElementById("Gender").appendChild(image3);
	var image4 = getImage((document.forms["contactForm"]["State"].value != 0), "State");
	document.getElementById("State").appendChild(image4);
	
	if(alphaNumCheck(document.forms["contactForm"]["lastn"].value) && alphaNumCheck(document.forms["contactForm"]["fname"].value) && (document.forms["contactForm"]["Gender"].value != 0) && (document.forms["contactForm"]["State"].value != 0))
	{
	window.location.href = "./validation2.html";	
	}
}
function getImage(bool, ID) {
    var i = document.getElementById("image" + ID);
    if (i == null) {
        i = new Image(15, 15);
        i.id = "image" + ID;
    }
    i.src = bool ? './correct.png' : './wrong.png';
    return i;
}
function alphaNumCheck(entry) {
    let regex = /^[a-z0-9]+$/i;
    if (entry != null && entry.match(regex)) {
        return true;
    } else {
        return false;
    }
}
