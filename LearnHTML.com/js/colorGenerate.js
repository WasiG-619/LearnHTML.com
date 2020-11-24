function generateColor() {
    var code = document.getElementById("colorCode").value;
    document.getElementById("result").style.backgroundColor = code;

    var code2 = document.getElementById("result").style.backgroundColor;
    if (code2==''){
    	alert("Invalid RGB value");
    }
  }