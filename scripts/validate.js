function validateForm() {
    var x = document.forms["myForm"]["name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    var y = document.forms["myForm"]["phoneno"].value;
    if (isNaN(y)) {
      alert("Numeric value to be filled");
      return false;
    }
    if (y == "") {
        alert("Phone Number must be filled out");
        return false;
    }

    var radios = document.getElementsByName("yesno");
    var formValid = false;
    var i = 0;
    while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;        
    }
    if (!formValid) alert("Must check some option!");
    return formValid;
  }