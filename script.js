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