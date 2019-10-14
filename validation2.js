function validate() {
	var image1 = getImage(emailCheck(document.forms["contactForms"]["email"].value), "email");
    document.getElementById("email").appendChild(image1);
	var image2 = getImage(phoneCheck(document.forms["contactForms"]["telephone"].value), "telephone");
    document.getElementById("telephone").appendChild(image2);
	var image3 = getImage(addressCheck(document.forms["contactForms"]["address"].value), "address");
	document.getElementById("address").appendChild(image3);

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
function emailCheck(email) {
    atSplit = email.split('@');
    if (atSplit.length == 2 && alphaNumCheck(atSplit[0])) {
        periodSplit = atSplit[1].split('.');
        if (periodSplit.length == 2 && alphaNumCheck(periodSplit[0] + periodSplit[1])) {
            return true;
        }
    }
    return false;
}
function phoneCheck(entry){
	var regex = /^[0-9]\d{2}-\d{3}-\d{4}/;
	var regex2 = /^[0-9]\d{2}\d{3}\d{4}/;
	if((entry.match(regex) || entry.match(regex2)) && entry != null && (entry.length == 12 || entry.length == 10))
			return true;
	else
			return false;
}
function addressCheck(entry){
atSplit = entry.split(',');
if(alphaNumCheck(atSplit[0]) && alphaNumCheck(atSplit[1]) && atSplit.length == 2)
		return true;
else	
	return false;
}