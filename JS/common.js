window.onload = function() {	
	setTimeout(function() {		
		var a_focus = document.getElementById('defaultFocus');
       if(a_focus) a_focus.focus();
   }, 5000); 

function KeyPress(e) {	  
      var evtobj = window.event? event : e	          
	  if (evtobj.keyCode == 83 && evtobj.altKey) document.getElementById("sbtBtn").click(); //Alt+S to save 
	  if (evtobj.keyCode == 77 && evtobj.altKey) document.getElementById("helpID").focus();  //Alt+M to go to main content 
	  }
	  document.onkeydown = KeyPress;   
};






function myHome() {
  var x = document.getElementById("myHme");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  } 
} 

function myContact() {
  var x = document.getElementById("myCntct");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  } 
}


/*
//Change checkbox message 
function chkBxMsg(thecheckbox, thelabel) {

    var checkboxvar = document.getElementById(thecheckbox);
    var labelvar = document.getElementById(thelabel);
    if (!checkboxvar.checked) {
        labelvar.innerHTML = "<strong>Disable</strong>  Common alerts.";
    }
    else {
        labelvar.innerHTML = "<strong>Enable</strong>  Common alerts.";
    }
}*/

//this section will make area collapsible
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
			content.style.display = "none";
    } else {
			content.style.display = "block";
			content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}


function expandCollapse1() {
  var x = document.getElementById("expandCollapse1");
  if (x.innerHTML === "<i class=\"down\"></i> Hide Product Section") {
    x.innerHTML = "<i class=\"up\"></i> Show Product Section";
  } else {
    x.innerHTML = "<i class=\"down\"></i> Hide Product Section";
  }

}

function expandCollapse2() {

  var y = document.getElementById("expandCollapse2");
  if (y.innerHTML === "<i class=\"down\"></i> Hide Test Environment Section") {
    y.innerHTML = "<i class=\"up\"></i> Show Test Environment Section";
  } else {
    y.innerHTML = "<i class=\"down\"></i> Hide Test Environment Section";
  }

}

function expandCollapse3() {

  var z = document.getElementById("expandCollapse3");
  if (z.innerHTML === "<i class=\"down\"></i> Hide Testing Information Section") {
    z.innerHTML = "<i class=\"up\"></i> Show Testing Information Section";
  } else {
    z.innerHTML = "<i class=\"down\"></i> Hide Testing Information Section";
  }
}



	
	



