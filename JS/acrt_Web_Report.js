var app = angular.module('acrt', ["ngSanitize"]); 
   
 
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

function expandCollapse4() {

  var z = document.getElementById("expandCollapse4");
  if (z.innerHTML === "<i class=\"down\"></i> Hide terms used in the Conformance Level") {
    z.innerHTML = "<i class=\"up\"></i> Show terms used in the Conformance Level";
  } else {
    z.innerHTML = "<i class=\"down\"></i> Hide terms used in the Conformance Level";
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

/*
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

*/



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
  
 $scope.noResult =[];

  //zoom image 
$scope.zoom = function(i) {
var modal = document.getElementById(i);
var img = document.getElementById("image"+i);
var modalImg = document.getElementById("img"+i);
var captionText = document.getElementById("caption"+i);
//var span = document.getElementsByClassName("close")[i];
var span = document.getElementById("cls"+i);

img.onclick = function(){
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
	$scope.dataLoaded = false;
	$scope.wcagRprt = false;
	$scope.sucCrtLngth =0;

	
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
	  $scope.Guideline =[];	  
	  $scope.dataLoaded = true;
	  $scope.companyname="";
	  $scope.counterCollection =[];
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
	  $scope.companyname = $scope.jsonData[0].Tester.T_companyname;
      $scope.myRole = $scope.jsonData[0].Tester.T_Role;
      $scope.testerContact = $scope.jsonData[0].Tester.T_cntc;
      $scope.testScope = $scope.jsonData[0].Tester.T_scope;
      $scope.evalMethod = $scope.jsonData[0].Tester.T_eval;
      $scope.evalMethodVrsn = $scope.jsonData[0].Tester.T_evalMthd_Vrsn;
      $scope.dateSubmitted = $scope.jsonData[0].Tester.T_Date;
      //$scope.Guideline = $scope.jsonData[0].Guideline.Guideline;
      //$scope.Section508 = $scope.jsonData[0].Guideline.Section508;
      //$scope.EN_Accessibility = $scope.jsonData[0].Guideline.EN_Accessibility;
      $scope.crtID = $scope.jsonData[0].Criteria[0].CrtID;
	        
      for (let b = 0; b < $scope.jsonData[0].Criteria.length; b++) {	
       	$scope.noResult[b] = true;         
		let c=b+1;
        $scope.CrtID[b] = $scope.jsonData[0].Criteria[b].CrtID;		
        $scope.Test[b] = $scope.jsonData[0].Criteria[b].Test;
        $scope.TestName[b] = $scope.jsonData[0].Criteria[b].TestName;
        $scope.TestID[b] = $scope.jsonData[0].Criteria[b].TestID;
		$scope.counterCollection[b]= $scope.jsonData[0].Criteria[b].Counter;
		$scope.Guideline[b] = $scope.jsonData[0].Criteria[b].Guideline;
        $scope.TestCondition[b] = $scope.jsonData[0].Criteria[b].TestCondition;
        $scope.TestResult[b] = $scope.jsonData[0].Criteria[b].TestResult;
		if($scope.TestResult[b]!= 'undefined') {$scope.noResult[b]=true; }
		if($scope.TestResult[b]== 'undefined') {$scope.TestResult[b] = ''; $scope.noResult[b]=false; };		
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
		if ($scope.jsonData[0].Criteria[b].TestResult == 'undefined') $scope.jsonData[0].Criteria[b].TestResult ='';

        var table1 = "<table class=\"table1\"  role=\"presentation\" >";

        table1 += "<tr>";
        table1 += "<th scope=\"col\">" + "Criteria ID" + "</th>";
        table1 += "<th scope=\"col\">" + "Test" + "</th>";
        table1 += "<th scope=\"col\">" + "TestName" + "</th>";
        table1 += "<th scope=\"col\">" + "TestID" + "</th>";
        table1 += "<th scope=\"col\">" + "TestCondition" + "</th>";
        table1 += "<th scope=\"col\">" + "IssueNo" + "</th>";
        table1 += "<th scope=\"col\">" + "TestResult" + "</th>";
        table1 += "<th scope=\"col\">" + "TesterComment" + "</th>";
        table1 += "<th scope=\"col\">" + "Browser Type" + "</th>";
        table1 += "<th scope=\"col\">" + "Browser Version " + "</th>";
        table1 += "<th scope=\"col\">" + "ScreenShot" + "</th>";
        table1 += "<th scope=\"col\">" + "GlobalIssue" + "</th>";
        table1 += "<th scope=\"col\">" + "Remediation Date" + "</th>";
        table1 += "<th scope=\"col\" >" + "RemediationDetails" + "</th>";
        table1 += "</tr>";
        table1 += "<tr>";
		table1 += "<th scope=\"row\" title=\"Success Criteria\">" + $scope.jsonData[0].Criteria[b].CrtID; + "</th>";        
        table1 += "<td title=\"Test\">" + $scope.jsonData[0].Criteria[b].Test; + "</td>";
        table1 += "<td title=\"Test Name\">" + $scope.jsonData[0].Criteria[b].TestName; + "</td>";
        table1 += "<td title=\"Test ID\">" + $scope.jsonData[0].Criteria[b].TestID; + "</td>";
        table1 += "<td title=\"Test Condition\">" + $scope.jsonData[0].Criteria[b].TestCondition; + "</td>";
        table1 += "<td title=\"Issue Number\">" + $scope.jsonData[0].Criteria[b].Counter; + "</td>";
        table1 += "<td title=\"Test Result\">" + $scope.jsonData[0].Criteria[b].TestResult; + "</td>";
        table1 += "<td title=\"Tester's Comment\">" + $scope.jsonData[0].Criteria[b].TesterComment; + "</td>";
        table1 += "<td title=\"Browser Type\">" + $scope.jsonData[0].Criteria[b].T_brwsrType; + "</td>";
        table1 += "<td title=\"Browser Version\">" + $scope.jsonData[0].Criteria[b].T_brwsrVrsn; + "</td>";
        table1 += "<td title=\"Image Source\">" + "<img id=\"i\"  alt=\"screenshot\" src= \"" + $scope.ImageSrc[b] + 'onerror=\"this.style.display=\"none\"\"' + "\">" + "</td>";
        table1 += "<td title=\"Global Issue\">" + $scope.jsonData[0].Criteria[b].GlobalIssue; + "</td>";
        table1 += "<td title=\"Remediation Date\">" + $scope.jsonData[0].Criteria[b].RemediationDate; + "</td>";
        table1 += "<td title=\"Remediation Details\">" + $scope.jsonData[0].Criteria[b].RemediationDetails; + "</td>";
        table1 += "</tr>";
        //}
        table1 += "</table>";

        $scope.myText[b] = table1;
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
		
		
setTimeout(function() {
document.getElementById("dsblGrpBtn").click();
}, 1000);	    
      }
      $scope.impactedGroup = [];
       document.getElementById("msg1").innerHTML = "<strong>"+$scope.evalMethod +" Version "+$scope.evalMethodVrsn +"</strong> file load completed.<br>";		  
        alert('To save printer friendly HTML file, select the keyboard shortcut (ctrl + z) or Save button located at the bottom of the page.');
	  
	  //$scope.validData=true;
      if($scope.jsonData[0].SuccessCriteria == undefined){
	 // $scope.validData = false;
	  alert('Either select different file (by refreshing this page) or use "Create Report" option for same file.');
	  }
	  
	  if($scope.jsonData[0].SuccessCriteria != undefined){
      $scope.sucCrtLngth =  $scope.jsonData[0].SuccessCriteria.length;	
	  //alert($scope.sucCrtLngth);
     }

    //if($scope.productID == " ")
	//alert('Either refresh page & select different file or use "Create Report" option.');
	    
     if ($scope.sucCrtLngth == 0){
	$scope.wcagRprt = false;
     alert('Make sure to load file with all mandatory fields and at least one valid test result to view complete report page.');	 
	 }

    if ($scope.sucCrtLngth >0) {
		$scope.wcagRprt = true;
		//making sure table displays only for valid data. 
		document.getElementById('displayTestRslt').style.display = "block"; 	
		document.getElementById('htmlReportDiv').style.display = "block";	
	}
		
	 for (let a = 0; a < $scope.sucCrtLngth; a++) {
		  if ($scope.jsonData[0].SuccessCriteria[a].DisabilityImpact == undefined || $scope.jsonData[0].SuccessCriteria[a].DisabilityImpact == 'undefined') 
           $scope.jsonData[0].SuccessCriteria[a].DisabilityImpact = "";
       
          if ($scope.jsonData[0].SuccessCriteria[a].DisabilityImpact != "" || $scope.jsonData[0].SuccessCriteria[a].DisabilityImpact != " ") {
            $scope.impactedGroup[a] = true;			
			$scope.DisabilityImpactCollection.push($scope.jsonData[0].SuccessCriteria[a].DisabilityImpact);
          }
       
        $scope.uniqSCCrtId[a] = $scope.jsonData[0].SuccessCriteria[a].CrtID;
        $scope.uniqSCCrtIdCollection.push($scope.uniqSCCrtId[a]);

      }
	
	  $scope.DisabilityImpactCollection = $scope.DisabilityImpactCollection.filter($scope.onlyUnique);	  
	  
	  $scope.DisabilityImpactCollection = Array.from(new Set($scope.DisabilityImpactCollection));
	  $scope.DisabilityImpactCollectionString ="";
	  $scope.DisabilityImpactCollectionString = $scope.DisabilityImpactCollection.toString();	  
	  $scope.DisabilityImpactCollectionString = Array.from(new Set($scope.DisabilityImpactCollectionString.split(','))).toString();
	  $scope.DisabilityImpactCollectionString = $scope.DisabilityImpactCollectionString.replace(/^,/, ''); //removes first comma from string 
	  $scope.DisabilityImpactCollectionString = $scope.DisabilityImpactCollectionString.replace(/,\s*$/, " "); //removes comma from last of string
	  $scope.DisabilityImpactCollectionString = $scope.DisabilityImpactCollectionString.replace(/,+/g, ','); //removes multiple commas from string
	  
	  $scope.DisabilityImpactCollection = $scope.DisabilityImpactCollectionString; 
	  
	  if($scope.DisabilityImpactCollection.length >0)
	  $scope.DisabilityImpactCollectionLength = true;
	  	 
	  	
	 /* commented out because we dont want to display duplicate groups based on failed test conditions
	  
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
	  $scope.DisabilityImpactCollection = $scope.DisabilityImpactCollection.filter($scope.onlyUnique); */
       $scope.DisabilityImpactCollection.toString().replace(/, /g, "").trim(); 
	  $scope.DisabilityImpactCollection.toString().replace(/,/g, ", ").trim(); 
      $scope.DisabilityImpactCollection.toString().replace(/[,\s]{2,}/, "");     
      

    }
	
	
function KeyPress(e) {	  
      var evtobj = window.event? event : e
	  if($scope.dataLoaded == true){        
	  if (evtobj.keyCode == 90 && evtobj.ctrlKey) document.getElementById("sbtBtn").click();  //ctrl+z to save 
	  }}
	  document.onkeydown = KeyPress;
		
  }

  $scope.capturedFormData = "";
  $scope.capturedTableData = [];
  $scope.capturedTableDataCollection = [];
  


  $scope.saveHtml = function() {	 
	  setTimeout(function() {  		
			alert("Please keep  both JSON & HTML files for future reference.Printer-friendly HTML report has been saved to your Downloads folder (unless otherwise specified).");
}, 6000);
    $scope.saveHtmlIsClickedd = true;
	
	//This creates WCAG report
	var WCAG = "<table class=\"table2\" > <caption>WCAG Report </caption>";

    WCAG += "<tr>";
    WCAG += "<th scope=\"col\"  title=\"Criteria\"  width=\"98px\">" + "Criteria" + "</th>";
    WCAG += "<th scope=\"col\"  title=\"Conformance Level\" width=\"218px\">" + "Conformance Level" + "</th>";
	WCAG += "<th scope=\"col\"  title=\"Guideline\" width=\"450px\">" + "Standard/Guideline" + "</th>"; 
    WCAG += "<th scope=\"col\"  title=\"Remarks and Explanations\" width=\"398px\">" + "Remarks and Explanations" + "</th>";  
    //WCAG += "<th scope=\"col\"  title=\"Impacted Group\" width=\"398px\">" + "Impacted Group" + "</th>";   	
    WCAG += "</tr>";
     

    for (let i = 0; i < $scope.jsonData[0].SuccessCriteria.length; i++) {		
		let d=i+1;
      WCAG += "<tr >";	 
      WCAG += "<td width=\"100px\" title=\"Criteria\">" + $scope.jsonData[0].SuccessCriteria[i].CrtID; + "</td>";
      WCAG += "<td  width=\"220px\" title=\"Conformance Level\">" + $scope.jsonData[0].SuccessCriteria[i].ConformanceLvl; + "</td>";
	  WCAG += "<td width=\"450px\" title=\"Guideline\">" + $scope.jsonData[0].SuccessCriteria[i].Guideline; + "</td>";
      WCAG += "<td width=\"400px\" title=\"Remarks and Explanations\">" + $scope.jsonData[0].SuccessCriteria[i].RemarkExplntn; + "</td>";	
     //WCAG += "<th scope=\"col\"  title=\"Impacted Group\" width=\"398px\">" + $scope.jsonData[0].SuccessCriteria[i].DisabilityImpact; + "</th>"; 	  
      WCAG += "</tr>";
    }
    WCAG += "</table>";
	
	//this creates html test report
    var testResult = "<table class=\"table1\" > <caption> Test Results</caption>";

    testResult += "<tr>";
    testResult += "<th scope=\"col\"  title=\"Test Name\"  width=\"60px\">" + "Test Name" + "</th>";
    testResult += "<th scope=\"col\"  title=\"Test ID\" width=\"35px\">" + "Test ID" + "</th>";
    testResult += "<th scope=\"col\"  title=\"Test Condition\" width=\"120px\">" + "Test Condition" + "</th>";
    testResult += "<th scope=\"col\"  title=\"Criteria ID\" width=\"40px\">" + "Criteria ID" + "</th>";
    //testResult += "<th scope=\"col\"  title=\"Test\" width=\"60px\">" + "Test" + "</th>";
    testResult += "<th scope=\"col\"  title=\"Issue No.\" width=\"50px\">" + "Issue No." + "</th>";
    testResult += "<th scope=\"col\"  title=\"Test Result\" width=\"40px\">" + "Test Result" + "</th>";
	testResult += "<th scope=\"col\"  title=\"Location/Screen\" width=\"140px\">" + "Location/Screen" + "</th>";
    testResult += "<th scope=\"col\" title=\"Tester's Comment\" width=\"140px\">" + "Tester Comments" + "</th>";
    testResult += "<th scope=\"col\"  title=\"Browser Type\" width=\"80px\">" + "Browser Type" + "</th>";
    testResult += "<th scope=\"col\"  title=\"Browser Versions\" width=\"80px\">" + "Browser Ver." + "</th>";
    testResult += "<th scope=\"col\" title=\"Screenshot\" >" + "Screenshot" + "</th>";
    testResult += "<th scope=\"col\"  title=\"Global Issue\" width=\"40px\">" + "Global Issue" + "</th>";
    testResult += "<th scope=\"col\"  title=\"Remediation Date\" width=\"60px\">" + "Remediation Date" + "</th>";
    testResult += "<th scope=\"col\" title=\"Remediation Details\" width=\"140px\">" + "Remediation Details" + "</th>";
    testResult += "</tr>";
 

    for (let i = 0; i < $scope.jsonData[0].Criteria.length; i++) {		
     if ($scope.jsonData[0].Criteria[i].TestResult == 'undefined') $scope.jsonData[0].Criteria[i].TestResult ='';	
		let d=i+1;
		if($scope.noResult[i]== true){
      testResult += "<tr >";
	  testResult += "<th scope=\"row\"  title=\"Test Name\">" + $scope.jsonData[0].Criteria[i].TestName; + "</th>";      
      testResult += "<td title=\"Test ID\">" + $scope.jsonData[0].Criteria[i].TestID; + "</td>";
      testResult += "<td title=\"Test Condition\">" + $scope.jsonData[0].Criteria[i].TestCondition; + "</td>";
      testResult += "<td title=\"Success Criteria\">" + $scope.jsonData[0].Criteria[i].CrtID; + "</td>";
     // testResult += "<td title=\"Test\">" + $scope.jsonData[0].Criteria[i].Test; + "</td>";
      testResult += "<td title=\"Issue Number\"> Issue " + $scope.jsonData[0].Criteria[i].Counter; + "</td>";
      testResult += "<td title=\"Test Result\">" + $scope.jsonData[0].Criteria[i].TestResult; + "</td>";
	  testResult += "<td title=\"Location\">" + $scope.jsonData[0].Criteria[i].location; + "</td>";
      testResult += "<td title=\"Tester's comment\">" + $scope.jsonData[0].Criteria[i].TesterComment; + "</td>";
      testResult += "<td title=\"Browser Type\">" + $scope.jsonData[0].Criteria[i].T_brwsrType; + "</td>";
      testResult += "<td title=\"Browser's Version\">" + $scope.jsonData[0].Criteria[i].T_brwsrVrsn; + "</td>";
      testResult += "<td onclick=\"zoom("+$scope.jsonData[0].Criteria[i].Counter+")\"   title=\"ScreenShot Captured\">" + "<img id=\""+$scope.jsonData[0].Criteria[i].Counter+"\" width=\"350\"  alt=\"screenshot\" src= \"" + $scope.ImageSrc[i] + '" '+"onerror=\"this.style.display='none'\"" + "\>" + "</td>";
      testResult += "<td title=\"Global Issue\">" + $scope.jsonData[0].Criteria[i].GlobalIssue; + "</td>";
      testResult += "<td title=\"Remediation Date\">" + $scope.jsonData[0].Criteria[i].RemediationDate; + "</td>";
      testResult += "<td title=\"Remediation Details\">" + $scope.jsonData[0].Criteria[i].RemediationDetails; + "</td>";
      testResult += "</tr>";
    }
	}
    testResult += "</table>";


    $scope.capturedFormData = "<!DOCTYPE html>" +
      "<html lang=\"en\">" +
      "<head>" +
      "<title>"+$scope.productID+" Accessibility Conformance Report</title>" +
      "<style>  body{font-family: \"system-ui\",\"Segoe UI\",\"Ubuntu\",\"Helvetica Neue\",\"sans-serif\";} h1,h2{color: #F8F8FF; background-color: rgb(0, 51, 102);font-family: \"system-ui\",\"Segoe UI\",\"Ubuntu\",\"Helvetica Neue\",\"sans-serif\"; text-align: center;}  table { font-family: \"system-ui\",\"Segoe UI\",\"Ubuntu\",\"Helvetica Neue\",\"sans-serif\"; text-decoration:none; border-collapse: collapse; width: 100%; display:block; padding: 3px; } td, th { border: 1px solid #A9A9A9; text-align: left; padding: 3px;font-family: \"system-ui\",\"Segoe UI\",\"Ubuntu\",\"Helvetica Neue\",\"sans-serif\";} th{vertical-align: top;} tr:nth-child(even) { background-color: #F0FFFF; padding-top: 0px; padding-bottom: 0px;font-family: \"system-ui\",\"Segoe UI\",\"Ubuntu\",\"Helvetica Neue\",\"sans-serif\";} tr, th {vertical-align: top;}</style>" +
          
	 "</head>" +
      "<button onclick=\"myPrint()\">Print this page</button> <br>" +	  
      "<h1>"+$scope.companyname+" Accessibility Conformance Report </h1>" +	  
	 // "<span> Based on VPAT® Version 2.4 </span>"+
      "  <h2 id=\"draftMsg\"  style=\"color: #FFFFFF; background-color: #be0004;\" hidden> This is a Draft Report, To view final Report please select all required test results  </h2> " +     
	  " <p>This application was tested according to the Trusted Tester Section 508 Conformance Test method: " + $scope.evalMethod +" "+ $scope.evalMethodVrsn + ". The review may be a sampling of pages to confirm product compliance. The responsibility for full and complete testing and compliance remains with the owner of the application or website.</p>" +
      
	  "<br><b>Review Date:  &nbsp;  </b>" + $scope.dateSubmitted + "<br>" +
      "<h2> Product Information </h2>" +
	  "<input type=\"text\" hidden id=\"isDraftValue\" value=" +  $scope.isDraft+ "> "   + 
      "<b> Product Name:  &nbsp;  </b>" + $scope.productID + "<br>" +
      "<b>Product Version:  &nbsp;  </b>" + $scope.ownerID + "<br>" +
      "<b>Product Owner/Vendor:  &nbsp;  </b>" + $scope.versionID + "<br>" +
      "<b>Product Type:  &nbsp;  </b>" + $scope.productType + "<br>" +
      "<b>Location:  &nbsp;  </b>" + $scope.urlID + "<br>" +
      "<b>Product Description:  &nbsp;  </b>" + $scope.prodDescID + "<br>" +


      "<h2> Test Environment Information </h2>" +
      "<strong>Browser:  &nbsp;  </strong>" + $scope.myBrowserTested + "<br>" +
      "<strong>Browser Version: &nbsp;  </strong>" + $scope.myBrowser + "<br>" +
      "<strong>Compatibility View:  &nbsp;  </strong>" + $scope.compID + "<br>" +
      "<strong>Operating System:  &nbsp;  </strong>" + $scope.myOpsys + "<br>" +
      "<strong>Operating System Version:  &nbsp;  </strong>" + $scope.myOpsysTested + "<br>" +

      "<h2> Tester's Information </h2>" +
      "<strong>Tester's First Name:  &nbsp;  </strong>" + $scope.firstname + "<br>" +
      "<strong>Tester's Last Name:  &nbsp;  </strong>" + $scope.lastname + "<br>" +
      "<strong>Trusted Tester ID:  &nbsp;  </strong>" + $scope.testerID + "<br>" +
	  "<strong>Company Name:  &nbsp;  </strong>" + $scope.companyname + "<br>" +
      "<strong>Tester's Email:  &nbsp;  </strong>" + $scope.testerContact + "<br>" +
      "<strong>Notes:  &nbsp;  </strong>" + $scope.testScope + "<br>" +
      "<strong>Testing Method:  &nbsp;  </strong>" + $scope.evalMethod + "<br>" +
      "<strong>Testing Method Version:  &nbsp;  </strong>" + $scope.evalMethodVrsn + "<br>" +  
     "<h2> Terms used in the Conformance Level </h2> <ul> <li> <strong>Supports:</strong> The functionality of the product has at least one method that meets the criterion without known defects or meets with equivalent facilitation. </li>  <li> <strong>Does Not Support:</strong> The majority of product functionality does not meet the criterion.</li> <li> <strong>Not Applicable:</strong> The criterion is not relevant to the product. </li> <li> <strong>Not Evaluated:</strong> The product has not been evaluated against the criterion.  This can only be used in WCAG 2.x Level AAA.</li> </ul> <br>" +
    "<h2> Web Content Accessibility Guidelines (WCAG) Report </h2>" + WCAG + "<br>" + "<h2> Test Results </h2>" + testResult + "<br>" +
	 "<h2> Disability Impact Summary </h2>" + $scope.DisabilityImpactCollection + "<br><br>" +       
      "<h2> End of Report </h2>" +
      "<script>function myPrint(){window.print(); }; if(document.getElementById('isDraftValue').value==\"true\")document.getElementById('draftMsg').style.display = \"block\";  </script>" +
      "<script> function zoom("+0+") { var modal = document.getElementById("+0+"); var img = document.getElementById(\"image\" + "+0+"); var modalImg = document.getElementById(\"img\" + "+0+"); var captionText = document.getElementById(\"caption\" + "+0+"); var span = document.getElementsByClassName(\"close\")["+0+"]; img.onclick = function() { modal.style.display = \"block\"; modalImg.src = this.src; captionText.innerHTML = this.alt; }span.onclick = function() { modal.style.display = \"none\"; } } </script>"+     
	 "</body>" +
      "</html>";
    var htmlContent = [$scope.capturedFormData];

    var bl = new Blob(htmlContent, {
      type: "text/html"
    });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(bl);
    //a.download = "ACRTHtmlResult.html";
	a.download = $scope.productID+$scope.ownerID+'.html';
    a.hidden = true;
    document.body.appendChild(a);
    a.innerHTML = "This section will not be visible";
    a.click();
  }

  function asgnValue() {
    $scope.saveHtmlIsClickedd = false;
  }

});
