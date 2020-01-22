var app = angular.module('acrt', ["ngSanitize"]);


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

//defining filter 
app.filter('unique', function() {
  return function(collection, keyname) {
    var output = [],
      keys = [];
    angular.forEach(collection, function(item) {
      var key = item[keyname];
      if (keys.indexOf(key) === -1) {
        keys.push(key);
        output.push(item);
      }
    });
    return output;
  };
});


function chkBxMsg(thecheckbox, thelabel) {

    var checkboxvar = document.getElementById(thecheckbox);
    var labelvar = document.getElementById(thelabel);
    if (!checkboxvar.checked) {
        labelvar.innerHTML = "Select Checkbox to view all test results. ";
    }
    else {
        labelvar.innerHTML = "Uncheck checkbox to hide all test results.";
    }
}



function grpImpact() {
  var x = document.getElementById("myImpact");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

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


app.controller('acrtFormCtrl', function($scope, $filter) {

  $scope.onlyUnique = function(value, index, self) {
    return self.indexOf(value) === index;
  }
  
  $scope.tstRsltMsg = function() {
     //alert($scope.checked1);
      if ($scope.checked1 == 'false' )
		  document.getElementById("msg").innerHTML = "Please select checkbox for detailed Test Results.";
	  if ($scope.checked1 == 'true' )
		  document.getElementById("msg").innerHTML = "Do not select checkbox to hide Test Results."; 
	  
	  
	  
  } 
  
 

  $scope.zoom = function(i) {
    var modal = document.getElementById(i);
    var img = document.getElementById("image" + i);
    var modalImg = document.getElementById("img" + i);
    var captionText = document.getElementById("caption" + i);
    var span = document.getElementsByClassName("close")[i];

    img.onclick = function() {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }

    span.onclick = function() {
      modal.style.display = "none";
    }

  }

  	
  $scope.uniqSCCrtId = [];
  $scope.totalSCCrtId = [];

  $scope.DisabilityImpactCollection = [];
	
	$scope.loadclicked = 0;

	
  $scope.loadFile = function loadFile() {

	  $scope.loadclicked= $scope.loadclicked+1;	

 var input, file, fr;

    if (typeof window.FileReader !== 'function') {
      alert("Please use file browser which supports file API.");
      return;
    }

    input = document.getElementById('fileinput');
    if (!input) {
      alert("Make sure you have file input element.");
    } else if (!input.files) {
      alert("Please use browser that supports the `files` property of file inputs.");
    } else if (!input.files[0]) {
      alert("Please select a JSON file first");
    } else {
      file = input.files[0];
      fr = new FileReader();
      fr.onload = receivedText;
      fr.readAsText(file);
    }

    function receivedText(e) {
      let lines = e.target.result;
      var newArr = JSON.parse(lines);
      $scope.jsonData = newArr;
  	  document.getElementById("msg1").innerHTML = "<b>File load completed</b>. <br> 'Undefined' denotes fields where no selections have been made";	
      document.getElementById('displayTestRslt').style.display = "block"; 	  
	  document.getElementById('htmlReportDiv').style.display = "block";  
      $scope.myBrowser = "";
      $scope.isDraft = false;
      $scope.CrtID = [];
      $scope.Test = [];
      $scope.TestName = [];
      $scope.TestID = [];
      $scope.TestCondition = [];
      $scope.IssueNo = [];
      $scope.TestResult = [];
      $scope.TesterComment = [];
	  $scope.location = [];
      $scope.T_brwsrType = [];
      $scope.T_brwsrVrsn = [];
      $scope.ImageSrc = [];
      $scope.GlobalIssue = [];
      $scope.RemediationDate = [];
      $scope.RemediationDetails = [];
      $scope.Counter = [];	 
      $scope.CrtIDCollection = [];
      $scope.myTextCollection = [];
      $scope.myTextCollection1 = [];
      $scope.sameCrtId = [];
      $scope.diffCrtId = [];
      $scope.myText = [];
      $scope.uniqSCCrtIdCollection = [];

      $scope.productID = $scope.jsonData[0].Product.P_Name;
      $scope.ownerID = $scope.jsonData[0].Product.P_Version;
      $scope.versionID = $scope.jsonData[0].Product.P_Owner;
      $scope.productType = $scope.jsonData[0].Product.P_Type;
      $scope.urlID = $scope.jsonData[0].Product.P_Location;
      $scope.flashID = $scope.jsonData[0].Product.P_Flash;
      $scope.javaID = $scope.jsonData[0].Product.P_java;
      $scope.prodDescID = $scope.jsonData[0].Product.P_Desc;
      $scope.prdNteDescID = $scope.jsonData[0].Product.P_Notes;
      $scope.compID = $scope.jsonData[0].System.S_Compatibility;
      $scope.myBrowserTested = $scope.jsonData[0].System.S_selectedBrowser;
      $scope.myBrowser = $scope.jsonData[0].System.S_selectedBrowserVersions;
      $scope.myOpsys = $scope.jsonData[0].System.S_osVrsnNo;
      $scope.myOpsysTested = $scope.jsonData[0].System.S_selectedOS;
      $scope.firstname = $scope.jsonData[0].Tester.T_fstnm;
      $scope.lastname = $scope.jsonData[0].Tester.T_lstnm;
      $scope.testerID = $scope.jsonData[0].Tester.T_ID;
      $scope.myRole = $scope.jsonData[0].Tester.T_Role;
      $scope.testerContact = $scope.jsonData[0].Tester.T_cntc;
      $scope.testScope = $scope.jsonData[0].Tester.T_scope;
      $scope.evalMethod = $scope.jsonData[0].Tester.T_eval;
      $scope.evalMethodVrsn = $scope.jsonData[0].Tester.T_evalMthd_Vrsn;
      $scope.dateSubmitted = $scope.jsonData[0].Tester.T_Date;
      $scope.Guideline = $scope.jsonData[0].Guideline.Guideline;
      $scope.Section508 = $scope.jsonData[0].Guideline.Section508;
      $scope.EN_Accessibility = $scope.jsonData[0].Guideline.EN_Accessibility;
      $scope.crtID = $scope.jsonData[0].Criteria[0].CrtID;
	  
	  
	 

      
      for (let b = 0; b < $scope.jsonData[0].Criteria.length; b++) {	
       	          
		let c=b+1;
        $scope.CrtID[b] = $scope.jsonData[0].Criteria[b].CrtID;		
        $scope.Test[b] = $scope.jsonData[0].Criteria[b].Test;
        $scope.TestName[b] = $scope.jsonData[0].Criteria[b].TestName;
        $scope.TestID[b] = $scope.jsonData[0].Criteria[b].TestID;
        $scope.TestCondition[b] = $scope.jsonData[0].Criteria[b].TestCondition;
        $scope.TestResult[b] = $scope.jsonData[0].Criteria[b].TestResult;
        $scope.IssueNo[b] = $scope.jsonData[0].Criteria[b].IssueNo;
		$scope.location[b] = $scope.jsonData[0].Criteria[b].location;
        $scope.TesterComment[b] = $scope.jsonData[0].Criteria[b].TesterComment;
        $scope.T_brwsrType[b] = $scope.jsonData[0].Criteria[b].T_brwsrType;
        $scope.T_brwsrVrsn[b] = $scope.jsonData[0].Criteria[b].T_brwsrVrsn;
        $scope.ImageSrc[b] = $scope.jsonData[0].Criteria[b].ImageSrc;
        $scope.GlobalIssue[b] = $scope.jsonData[0].Criteria[b].GlobalIssue;
        $scope.RemediationDate[b] = $scope.jsonData[0].Criteria[b].RemediationDate;
        $scope.RemediationDetails[b] = $scope.jsonData[0].Criteria[b].RemediationDetails;
        $scope.Counter[b] = $scope.jsonData[0].Criteria[b].Counter;		
        $scope.CrtIDCollection.push($scope.CrtID[b]);	
		

        var html2 = "<table class=\"table1\"  role=\"presentation\" >";

        html2 += "<tr>";
        html2 += "<th scope=\"col\">" + "Criteria ID" + "</th>";
        html2 += "<th scope=\"col\">" + "Test" + "</th>";
        html2 += "<th scope=\"col\">" + "TestName" + "</th>";
        html2 += "<th scope=\"col\">" + "TestID" + "</th>";
        html2 += "<th scope=\"col\">" + "TestCondition" + "</th>";
        html2 += "<th scope=\"col\">" + "IssueNo" + "</th>";
        html2 += "<th scope=\"col\">" + "TestResult" + "</th>";
        html2 += "<th scope=\"col\">" + "TesterComment" + "</th>";
        html2 += "<th scope=\"col\">" + "Browser Type" + "</th>";
        html2 += "<th scope=\"col\">" + "Browser Version " + "</th>";
        html2 += "<th scope=\"col\">" + "ScreenShot" + "</th>";
        html2 += "<th scope=\"col\">" + "GlobalIssue" + "</th>";
        html2 += "<th scope=\"col\">" + "RemediationDate" + "</th>";
        html2 += "<th scope=\"col\" >" + "RemediationDetails" + "</th>";
        html2 += "</tr>";
        html2 += "<tr>";
		html2 += "<th scope=\"row\" title=\"Success Criteria\">" + $scope.jsonData[0].Criteria[b].CrtID; + "</th>";        
        html2 += "<td title=\"Test\">" + $scope.jsonData[0].Criteria[b].Test; + "</td>";
        html2 += "<td title=\"Test Name\">" + $scope.jsonData[0].Criteria[b].TestName; + "</td>";
        html2 += "<td title=\"Test ID\">" + $scope.jsonData[0].Criteria[b].TestID; + "</td>";
        html2 += "<td title=\"Test Condition\">" + $scope.jsonData[0].Criteria[b].TestCondition; + "</td>";
        html2 += "<td title=\"Issue Number\">" + c + "</td>";
        html2 += "<td title=\"Test Result\">" + $scope.jsonData[0].Criteria[b].TestResult; + "</td>";
        html2 += "<td title=\"Tester's Comment\">" + $scope.jsonData[0].Criteria[b].TesterComment; + "</td>";
        html2 += "<td title=\"Browser Type\">" + $scope.jsonData[0].Criteria[b].T_brwsrType; + "</td>";
        html2 += "<td title=\"Browser Version\">" + $scope.jsonData[0].Criteria[b].T_brwsrVrsn; + "</td>";
        html2 += "<td title=\"Image Source\">" + "<img id=\"i\"  alt=\"test screenshot\" src= \"" + $scope.jsonData[0].Criteria[b].ImageSrc + 'onerror=\"this.style.display=\"none\"\"' + "\">" + "</td>";
        html2 += "<td title=\"Global Issue\">" + $scope.jsonData[0].Criteria[b].GlobalIssue; + "</td>";
        html2 += "<td title=\"Remediation Date\">" + $scope.jsonData[0].Criteria[b].RemediationDate; + "</td>";
        html2 += "<td title=\"Remediation Details\">" + $scope.jsonData[0].Criteria[b].RemediationDetails; + "</td>";
        html2 += "</tr>";
        //}
        html2 += "</table>";

        $scope.myText[b] = html2;
        if (b > 0) {
          if ($scope.jsonData[0].Criteria[b].CrtID == $scope.jsonData[0].Criteria[b - 1].CrtID) {
            $scope.sameCrtId[b] = true;
            $scope.myTextCollection.push($scope.myText[b]);
          } else {
            $scope.diffCrtId[b] = true;
            $scope.myTextCollection1.push($scope.myText[b]);
          }

        }
				$scope.$apply();
				
				if ($scope.jsonData[0].Criteria[b].DraftReport == 'true') {
          $scope.isDraft = true;
		  continue;
          
        }  

      }
$scope.impactedGroup = [];

      for (let a = 0; a < $scope.jsonData[0].SuccessCriteria.length; a++) {
		  if ($scope.jsonData[0].SuccessCriteria[a].DisabilityImpact == undefined || $scope.jsonData[0].SuccessCriteria[a].DisabilityImpact == 'undefined') 
           $scope.jsonData[0].SuccessCriteria[a].DisabilityImpact = "";
       
          if ($scope.jsonData[0].SuccessCriteria[a].DisabilityImpact != "" || $scope.jsonData[0].SuccessCriteria[a].DisabilityImpact != " ") {
            $scope.impactedGroup[a] = true;
			$scope.DisabilityImpactCollection.push($scope.jsonData[0].SuccessCriteria[a].DisabilityImpact + "<br>");
          }
       
        $scope.uniqSCCrtId[a] = $scope.jsonData[0].SuccessCriteria[a].CrtID;
        $scope.uniqSCCrtIdCollection.push($scope.uniqSCCrtId[a]);

      }
	
	  $scope.DisabilityImpactCollection = $scope.DisabilityImpactCollection.filter($scope.onlyUnique);
	 
	  $scope.DisabilityImpactCollectionLength = true;
	  for(let p=0; p< $scope.DisabilityImpactCollection.length; p++){
	  if($scope.DisabilityImpactCollection[p] == "<br>"){
		 
		  $scope.DisabilityImpactCollectionLength = false;
	  }
	  if($scope.DisabilityImpactCollection[p] != "<br>"){
		  $scope.DisabilityImpactCollectionLength = true;
		  break;
		  
	  }
	  
	  }
	  $scope.DisabilityImpactCollectionClean=[];
	  var temp = "<br>"+"";
	  for(let t=0; t< $scope.DisabilityImpactCollection.length;t++){
		  if($scope.DisabilityImpactCollection[t] != temp)
		$scope.DisabilityImpactCollectionClean.push($scope.DisabilityImpactCollection[t]);  
		  
	  }
	  
      $scope.DisabilityImpactCollection = $scope.DisabilityImpactCollectionClean;  
	  $scope.DisabilityImpactCollection = $scope.DisabilityImpactCollection.filter($scope.onlyUnique);
       $scope.DisabilityImpactCollection = $scope.DisabilityImpactCollection.toString().replace(/, /g, "").trim(); 
	  $scope.DisabilityImpactCollection = $scope.DisabilityImpactCollection.toString().replace(/,/g, ", ").trim(); 
      $scope.DisabilityImpactCollection = $scope.DisabilityImpactCollection.toString().replace(/[,\s]{2,}/, "");     
      

    }
	
	
  }

  $scope.capturedFormData = "";
  $scope.capturedTableData = [];
  $scope.capturedTableDataCollection = [];
  


  $scope.saveHtml = function() {	 
	  setTimeout(function() {
  		if ($scope.checkboxModel.alerts == "on")
			alert("Printer-friendly HTML report has been saved to your Downloads folder (unless otherwise specified).");
}, 3000);
    $scope.saveHtmlIsClickedd = true;
	
	//This creates WCAG report
	var html3 = "<table class=\"table2\" role=\"presentation\"> <strong>WCAG  Report </strong>";

    html3 += "<tr>";
    html3 += "<th scope=\"col\"  title=\"Criteria\"  width=\"98px\">" + "Criteria" + "</th>";
    html3 += "<th scope=\"col\"  title=\"Conformance Level\" width=\"218px\">" + "Conformance Level" + "</th>";
    html3 += "<th scope=\"col\"  title=\"Remarks and Explanations\" width=\"350px\">" + "Remarks and Explanations" + "</th>";    
    html3 += "</tr>";
     

    for (let i = 0; i < $scope.jsonData[0].SuccessCriteria.length; i++) {		
		let d=i+1;
      html3 += "<tr >";	 
      html3 += "<td width=\"100px\" title=\"Criteria\">" + $scope.jsonData[0].SuccessCriteria[i].CrtID; + "</td>";
      html3 += "<td  width=\"220px\" title=\"Conformance Level\">" + $scope.jsonData[0].SuccessCriteria[i].ConformanceLvl; + "</td>";
      html3 += "<td width=\"350px\" title=\"Remarks and Explanations\">" + $scope.jsonData[0].SuccessCriteria[i].RemarkExplntn; + "</td>";
      html3 += "</tr>";
    }
    html3 += "</table>";
	
	//this creates html test report
    var html2 = "<table class=\"table1\" role=\"presentation\"> <caption> Test Results</caption>";

    html2 += "<tr>";
    html2 += "<th scope=\"col\"  title=\"Test Name\"  width=\"60px\">" + "Test Name" + "</th>";
    html2 += "<th scope=\"col\"  title=\"Test ID\" width=\"35px\">" + "Test ID" + "</th>";
    html2 += "<th scope=\"col\"  title=\"Test Condition\" width=\"120px\">" + "Test Condition" + "</th>";
    html2 += "<th scope=\"col\"  title=\"Criteria ID\" width=\"40px\">" + "Criteria ID" + "</th>";
    html2 += "<th scope=\"col\"  title=\"Test\" width=\"60px\">" + "Test" + "</th>";
    html2 += "<th scope=\"col\"  title=\"Issue No.\" width=\"50px\">" + "Issue No." + "</th>";
    html2 += "<th scope=\"col\"  title=\"Test Result\" width=\"40px\">" + "Test Result" + "</th>";
	html2 += "<th scope=\"col\"  title=\"Location/Screen\" width=\"140px\">" + "Location/Screen" + "</th>";
    html2 += "<th scope=\"col\" title=\"Tester's Comment\" width=\"140px\">" + "Tester Comments" + "</th>";
    html2 += "<th scope=\"col\"  title=\"Browser Type\" width=\"80px\">" + "Browser Type" + "</th>";
    html2 += "<th scope=\"col\"  title=\"Browser Versions\" width=\"80px\">" + "Browser Ver." + "</th>";
    html2 += "<th scope=\"col\" title=\"Screenshot\" >" + "ScreenShot" + "</th>";
    html2 += "<th scope=\"col\"  title=\"Global Issue\" width=\"40px\">" + "Global Issue" + "</th>";
    html2 += "<th scope=\"col\"  title=\"Remediation Date\" width=\"60px\">" + "Remediation Date" + "</th>";
    html2 += "<th scope=\"col\" title=\"Remediation Details\" width=\"140px\">" + "Remediation Details" + "</th>";
    html2 += "</tr>";


    for (let i = 0; i < $scope.jsonData[0].Criteria.length; i++) {		
		let d=i+1;
      html2 += "<tr >";
	  html2 += "<th scope=\"row\"  title=\"Test Name\">" + $scope.jsonData[0].Criteria[i].TestName; + "</th>";      
      html2 += "<td title=\"Test ID\">" + $scope.jsonData[0].Criteria[i].TestID; + "</td>";
      html2 += "<td title=\"Test Condition\">" + $scope.jsonData[0].Criteria[i].TestCondition; + "</td>";
      html2 += "<td title=\"Success Criteria\">" + $scope.jsonData[0].Criteria[i].CrtID; + "</td>";
      html2 += "<td title=\"Test\">" + $scope.jsonData[0].Criteria[i].Test; + "</td>";
      html2 += "<td title=\"Issue Number\">" + d + "</td>";
      html2 += "<td title=\"Test Result\">" + $scope.jsonData[0].Criteria[i].TestResult; + "</td>";
	  html2 += "<td title=\"Location\">" + $scope.jsonData[0].Criteria[i].location; + "</td>";
      html2 += "<td title=\"Tester's comment\">" + $scope.jsonData[0].Criteria[i].TesterComment; + "</td>";
      html2 += "<td title=\"Browser Type\">" + $scope.jsonData[0].Criteria[i].T_brwsrType; + "</td>";
      html2 += "<td title=\"Browser's Version\">" + $scope.jsonData[0].Criteria[i].T_brwsrVrsn; + "</td>";
      html2 += "<td onclick=\"zoom("+$scope.jsonData[0].Criteria[i].Counter+")\"   title=\"Image Source\">" + "<img id=\"i\" width=\"350\"  src= \"" + $scope.jsonData[0].Criteria[i].ImageSrc + "\">" + "</td>";
      html2 += "<td title=\"Global Issue\">" + $scope.jsonData[0].Criteria[i].GlobalIssue; + "</td>";
      html2 += "<td title=\"Remediation Date\">" + $scope.jsonData[0].Criteria[i].RemediationDate; + "</td>";
      html2 += "<td title=\"Remediation Details\">" + $scope.jsonData[0].Criteria[i].RemediationDetails; + "</td>";
      html2 += "</tr>";
    }
    html2 += "</table>";


    $scope.capturedFormData = "<!DOCTYPE html>" +
      "<html lang=\"en\">" +
      "<head>" +
      "<title>ACRT Test Report </title>" +
      "<style>  body{font-family: \"system-ui\",\"Segoe UI\",\"Ubuntu\",\"Helvetica Neue\",\"sans-serif\";} h1,h2{color: #F8F8FF; background-color: rgb(0, 51, 102);font-family: \"system-ui\",\"Segoe UI\",\"Ubuntu\",\"Helvetica Neue\",\"sans-serif\"; text-align: center;}  table { font-family: \"system-ui\",\"Segoe UI\",\"Ubuntu\",\"Helvetica Neue\",\"sans-serif\"; text-decoration:none; border-collapse: collapse; width: 100%; display:block; padding: 3px; } td, th { border: 1px solid #A9A9A9; text-align: left; padding: 3px;font-family: \"system-ui\",\"Segoe UI\",\"Ubuntu\",\"Helvetica Neue\",\"sans-serif\";} th{vertical-align: top;} tr:nth-child(even) { background-color: #F0FFFF; padding-top: 0px; padding-bottom: 0px;font-family: \"system-ui\",\"Segoe UI\",\"Ubuntu\",\"Helvetica Neue\",\"sans-serif\";} tr, th {vertical-align: top;}</style>" +
          
	 "</head>" +
      "<button onclick=\"myPrint()\">Print this page</button> <br>" +	  
      "<h1> Test Report </h1>" +	  
      "  <h2 id=\"draftMsg\"  style=\"color: #F0FFFF; background-color: #FF0000;\" hidden> This is a Draft Report, To view final Report please select all required test results  </h2> " +     
	  " <p>This application was tested according to the Trusted Tester Section 508 Conformance Test Process version " + $scope.evalMethod + $scope.evalMethodVrsn + ". The review may be a sampling of pages to confirm product compliance.  The responsibility for full and complete testing and compliance remains with the owner of the application or website.  </p>" +
      " <br>*'Undefined' denotes fields where no selections have been made" +
	  "<br><b>Date test was submitted:  &nbsp;  </b>" + $scope.dateSubmitted + "<br>" +
      "<h2> Product Information </h2>" +
	  "<input type=\"text\" hidden id=\"isDraftValue\" value=" +  $scope.isDraft+ "> "   + 
      "<b> Name of Product:  &nbsp;  </b>" + $scope.productID + "<br>" +
      "<b>Product Version:  &nbsp;  </b>" + $scope.ownerID + "<br>" +
      "<b>Product Owner/Vendor:  &nbsp;  </b>" + $scope.versionID + "<br>" +
      "<b>Product Type:  &nbsp;  </b>" + $scope.productType + "<br>" +
      "<b>Location:  &nbsp;  </b>" + $scope.urlID + "<br>" +
      "<b>Product Description:  &nbsp;  </b>" + $scope.prodDescID + "<br>" +


      "<h2> Test Environment Information </h2>" +
      "<b>Browser:  &nbsp;  </b>" + $scope.myBrowserTested + "<br>" +
      "<b>Browser Version: &nbsp;  </b>" + $scope.myBrowser + "<br>" +
      "<b>Compatibility View:  &nbsp;  </b>" + $scope.compID + "<br>" +
      "<b>Operating System:  &nbsp;  </b>" + $scope.myOpsys + "<br>" +
      "<b>Operating System Version:  &nbsp;  </b>" + $scope.myOpsysTested + "<br>" +

      "<h2> Tester's Information </h2>" +
      "<b>Tester's First Name:  &nbsp;  </b>" + $scope.firstname + "<br>" +
      "<b>Tester's Last Name:  &nbsp;  </b>" + $scope.lastname + "<br>" +
      "<b>Trusted Tester ID:  &nbsp;  </b>" + $scope.testerID + "<br>" +
      "<b>Tester's Email:  &nbsp;  </b>" + $scope.testerContact + "<br>" +
      "<b>Notes:  &nbsp;  </b>" + $scope.testScope + "<br>" +
      "<b>Testing Method:  &nbsp;  </b>" + $scope.evalMethod + "<br>" +
      "<b>Testing Method Version:  &nbsp;  </b>" + $scope.evalMethodVrsn + "<br>" +  "<h2> Please check below for WCAG  Report </h2>" + html3 + "<br>" + "<h2> Test Results </h2>" + html2 + "<br>" +
      "<h2> Disability Impact Summary </h2>" + $scope.DisabilityImpactCollection + "<br><br>" +       
      "<h2> End of Report </h2>" +
      "<script>function myPrint(){window.print(); }; if(document.getElementById('isDraftValue').value==\"true\")document.getElementById('draftMsg').style.display = \"block\";  </script>" +
      "<script> function zoom(i) { var modal = document.getElementById(i); var img = document.getElementById(\"image\" + i); var modalImg = document.getElementById(\"img\" + i); var captionText = document.getElementById(\"caption\" + i); var span = document.getElementsByClassName(\"close\")[i]; img.onclick = function() { modal.style.display = \"block\"; modalImg.src = this.src; captionText.innerHTML = this.alt; }span.onclick = function() { modal.style.display = \"none\"; } } <script>"+     
	 "</body>" +
      "</html>";
    var htmlContent = [$scope.capturedFormData];

    var bl = new Blob(htmlContent, {
      type: "text/html"
    });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(bl);
    a.download = "ACRTHtmlResult.html";
    a.hidden = true;
    document.body.appendChild(a);
    a.innerHTML = "This section will not be visible";
    a.click();
  }

  function asgnValue() {
    $scope.saveHtmlIsClickedd = false;
  }

});