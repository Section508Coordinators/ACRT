//Alert message before navigating away from page
//

window.onbeforeunload = function(event) {
  var message = 'Are you Sure you want to leave Create Report Page ?';
  if (typeof event == 'undefined') {
    event = window.event;
  }
  if (event) {
    event.returnValue = message;
  }
  return message;
}

//Change checkbox message 
function chkBxMsg(thecheckbox, thelabel) {

    var checkboxvar = document.getElementById(thecheckbox);
    var labelvar = document.getElementById(thelabel);
    if (!checkboxvar.checked) {
        labelvar.innerHTML = "Check checkbox to Disable common alerts.";
    }
    else {
        labelvar.innerHTML = "Uncheck checkbox to Enable common alerts.";
    }
}

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
  if (x.innerHTML === "<i class=\"down\"></i> Click to hide Product section") {
    x.innerHTML = "<i class=\"up\"></i> Click to show Product section";
  } else {
    x.innerHTML = "<i class=\"down\"></i> Click to hide Product section";
  }

}

function expandCollapse2() {

  var y = document.getElementById("expandCollapse2");
  if (y.innerHTML === "<i class=\"down\"></i> Click to hide Test Environment section") {
    y.innerHTML = "<i class=\"up\"></i> Click to show Test Environment section";
  } else {
    y.innerHTML = "<i class=\"down\"></i> Click to hide Test Environment section";
  }

}

function expandCollapse3() {

  var z = document.getElementById("expandCollapse3");
  if (z.innerHTML === "<i class=\"down\"></i> Click to hide Testing Information section") {
    z.innerHTML = "<i class=\"up\"></i> Click to show Testing Information section";
  } else {
    z.innerHTML = "<i class=\"down\"></i> Click to hide Testing Information section";
  }
}


