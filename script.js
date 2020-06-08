function ValidateEmail(inputText)
{
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(inputText.value.match(mailformat))
	{
		document.form1.text1.focus();
		window.location.replace("thankyou.html");
		return true;
	}
	else
	{
		alert("You have entered an invalid email address!");
		document.form1.text1.focus();
		return false;
	}
}

window.onscroll = function() {Scroll_Indicator()};

function Scroll_Indicator() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

function darkmode() {
   var element = document.body;
   element.classList.toggle("dark-mode");
   //element.classList.toggle("jumbotron");
 
   //var x= document.getElementById("top");
   //x.style.color="grey";
 
}
/*
function darkmode_til() {
 document.getElementById("widgetmain").style.backgroundColor = "grey"; 

} */

// Cookie for Welcome Message.

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user = getCookie("username");
  if (user != "") {
    alert("Welcome again, " + user + ". Continue to website");
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
} 