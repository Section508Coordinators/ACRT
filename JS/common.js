
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
  if (x.innerHTML === "<i class=\"down\"></i> Hide Product section") {
    x.innerHTML = "<i class=\"up\"></i> Show Product section";
  } else {
    x.innerHTML = "<i class=\"down\"></i> Hide Product section";
  }

}

function expandCollapse2() {

  var y = document.getElementById("expandCollapse2");
  if (y.innerHTML === "<i class=\"down\"></i> Hide Test Environment section") {
    y.innerHTML = "<i class=\"up\"></i> Show Test Environment section";
  } else {
    y.innerHTML = "<i class=\"down\"></i> Hide Test Environment section";
  }

}

function expandCollapse3() {

  var z = document.getElementById("expandCollapse3");
  if (z.innerHTML === "<i class=\"down\"></i> Hide Testing Information section") {
    z.innerHTML = "<i class=\"up\"></i> Show Testing Information section";
  } else {
    z.innerHTML = "<i class=\"down\"></i> Hide Testing Information section";
  }
}



	
	



