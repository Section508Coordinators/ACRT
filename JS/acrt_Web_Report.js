var app = angular.module('acrt', ["ngSanitize"]); 
   
window.addEventListener("error", handleError, true);
 


function handleError(evt) {
    if (evt.message) { // Chrome sometimes provides this
      //alert("error: "+evt.message +" at linenumber: "+evt.lineno+" of file: "+evt.filename);
	  alert('Please select file for ACRT, error message: '+evt.message);
    } /*else {
      //alert("error: "+evt.type+" from element: "+(evt.srcElement || evt.target));
	  alert('Please select and load valid JSON file for ACRT');
    }*/
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
var displaytstRslt = false;
function chkBxMsg(thecheckbox, thelabel) {

    var checkboxvar = document.getElementById(thecheckbox);
    var labelvar = document.getElementById(thelabel);
	
    if (!checkboxvar.checked) {
        //labelvar.innerHTML = "Select Checkbox to view all test results. ";
		document.getElementById("displaytstRslt1").style.visibility = "hidden";
		alert('unckecked');
    }
    else {
        //labelvar.innerHTML = "Uncheck checkbox to hide all test results.";
		//alert('checked');
	   if(checkboxvar == selector112 ) { displaytstRslt=true; alert('Pass');}
		if(checkboxvar == selector113 ) {displaytstRslt=true;alert('Fail');}
		if(checkboxvar == selector114 ) {displaytstRslt=true;alert('Does Not Apply');}
		if(checkboxvar == selector115 ) {displaytstRslt=true;alert('Not Tested');}
		

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
   //$scope.displaytstRslt1 = displaytstRslt;
   $scope.onlyUnique = function(value, index, self) {
    return self.indexOf(value) === index;
  }
$scope.selected_name_tstrsltdsply = '';	
$scope.optionsRsltDsply = [];
$scope.default_SelectedResultDsply = 'All';  

$scope.optionsRsltDsply = [
{
    id: 0,
    name: 'Pass'
  },
  {
    id: 1,
    name: 'Fail'
  },
  {
    id: 2,
    name: 'Does Not Apply'
  }
  ,
  {
    id: 3,
    name: 'Not Tested'
  },{
    id: 4,
    name: 'All'
  }

];  
  
 
 
$scope.displayTestResult = function() {
    $scope.displaytstRslt = false;
	$scope.filterResult1 = false;	
	//$scope.selected_name_tstrsltdsply == 'All';
        if($scope.selected_name_tstrsltdsply == 'All' ) { $scope.displaytstRslt=true; $scope.filterResult1 = true;} 
	    if($scope.selected_name_tstrsltdsply == 'Pass' ) { $scope.displaytstRslt=true; $scope.filterResult = 'Pass';} 
		if($scope.selected_name_tstrsltdsply == 'Fail' ) {$scope.displaytstRslt=true;$scope.filterResult = 'Fail';}
		if($scope.selected_name_tstrsltdsply == 'Does Not Apply' ) {$scope.displaytstRslt=true; $scope.filterResult = 'Does Not Apply';}
		if($scope.selected_name_tstrsltdsply == 'Not Tested' ) {$scope.displaytstRslt=true; $scope.filterResult = 'Not Tested';}
		

   
}


  
  $scope.load = function() {    
	function KeyPress(e) {	  
      var evtobj = window.event? event : e	          
	  
	  if (evtobj.keyCode == 77 && evtobj.altKey) document.getElementById("helpID").focus();  //Alt+M to go to main content 
	  }
	  document.onkeydown = KeyPress;

 }
 
 
  
     $scope.fileNameChanged = function () {
	  $scope.fileInput1 = true;	
	  $scope.$apply();
      document.getElementById("selMsg").innerHTML = "File is Selected, please select 'Load File' below to proceed.";	
	  document.getElementById('fileinput').setAttribute('title', 'File is Selected, please select Load File below to proceed.');	
      document.getElementById("buttonLoad").focus(); 	  
    } 
  
  $scope.tstRsltMsg = function() {
     //alert($scope.checked1);
      if ($scope.checked1 == 'false' )
		  document.getElementById("msg").innerHTML = "Please select checkbox for detailed Test Results.";
	  if ($scope.checked1 == 'true' )
		  document.getElementById("msg").innerHTML = "Do not select checkbox to hide Test Results."; 
	  
  } 
  
  $scope.fileInput = function fileInput() {
$scope.fileInput1 = true;	
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
  
  $scope.zoom2 = function(i) {
var modal2 = document.getElementById('rmd2'+i);
var img2 = document.getElementById("image2"+i);
var modalImg2 = document.getElementById("img2"+i);
var captionText2 = document.getElementById("caption2"+i);
//var span = document.getElementsByClassName("close")[i];
var span2 = document.getElementById("cls2"+i);

img2.onclick = function(){
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
}

span2.onclick = function() { 
  modal2.style.display = "none";
}
	  
  }

  	
  $scope.uniqSCCrtId = [];
  $scope.totalSCCrtId = [];

  $scope.DisabilityImpactCollection = [];
  $scope.DisabilityImpactCollectionSC =[];
	
	$scope.loadclicked = 0;
	$scope.dataLoaded = false;
	$scope.wcagRprt = false;
	$scope.sucCrtLngth =0;
	$scope.checked1= false;
	$scope.checked2= false;
	$scope.checked3= false;
	$scope.checked4= false;
	$scope.checked5= false;
	
	
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
	  $scope.ImageSrc2 = [];
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
		$scope.ImageSrc2[b] = $scope.jsonData[0].Criteria[b].ImageSrc2;
        $scope.Counter[b] = $scope.jsonData[0].Criteria[b].Counter;		
        $scope.CrtIDCollection.push($scope.CrtID[b]);	
		if ($scope.jsonData[0].Criteria[b].TestResult == 'undefined') $scope.jsonData[0].Criteria[b].TestResult ='';

      /*  var table1 = "<table class=\"table1\"  role=\"presentation\" >";

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

        } */
				$scope.$apply();
				
				if ($scope.jsonData[0].Criteria[b].DraftReport == 'true') {
          $scope.isDraft = true;
		  continue;
          
        } 
		
if($scope.DisabilityImpactCollection.length >0)		
setTimeout(function() {
document.getElementById("dsblGrpBtn").click();
}, 1000);	   
      }
      $scope.impactedGroup = [];
       document.getElementById("msg1").innerHTML = "<strong>"+$scope.evalMethod +" Version "+$scope.evalMethodVrsn + " "+$scope.productID+$scope.ownerID+".json"+ "</strong> file load completed.<br> To load a different file, <strong>reload</strong> this page.";		  
        alert('To save printer-friendly HTML report, use Alt+S or Save button at the bottom of the page.');
	  
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
            $scope.impactedGroup[a] = true;	{		
			$scope.DisabilityImpactCollection.push($scope.jsonData[0].SuccessCriteria[a].DisabilityImpact);
			//$scope.DisabilityImpactCollectionSC.push($scope.jsonData[0].SuccessCriteria[a].CrtID);
			}
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
      else {
      document.getElementById("dsblImpctDsply").innerHTML = 'No One Impacted';
	  $scope.DisabilityImpactCollection = 'No One Impacted'; 
	  }
	  	 
	  	
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
      $scope.displaytstRslt=true; $scope.filterResult1 = true;	
      $scope.$apply();	  
      
    }
	
	


	
	//if($scope.checked2== true){alert('a')};
     function KeyPress(e) {	  
      var evtobj = window.event? event : e
	  if($scope.dataLoaded == true){        
	  if (evtobj.keyCode == 83 && evtobj.altKey) document.getElementById("sbtBtn").click();  //Alt+s to save 
	  //if (evtobj.keyCode == 75 && evtobj.altKey) document.getElementById("fileinput").click();  //Alt+s to save 
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
	testResult += "<th scope=\"col\"  title=\"Issue No.\" width=\"50px\">" + "Issue No." + "</th>";
    testResult += "<th scope=\"col\"  title=\"Test Name\"  width=\"60px\">" + "Test Name" + "</th>";
    testResult += "<th scope=\"col\"  title=\"Test ID\" width=\"35px\">" + "Test ID" + "</th>";
    testResult += "<th scope=\"col\"  title=\"Test Condition\" width=\"120px\">" + "Test Condition" + "</th>";
    testResult += "<th scope=\"col\"  title=\"Criteria ID\" width=\"40px\">" + "Criteria ID" + "</th>";
    //testResult += "<th scope=\"col\"  title=\"Test\" width=\"60px\">" + "Test" + "</th>";    
    testResult += "<th scope=\"col\"  title=\"Test Result\" width=\"40px\">" + "Test Result" + "</th>";
	testResult += "<th scope=\"col\" title=\"Tester's Comment\" width=\"140px\">" + "Tester Comments" + "</th>";
	testResult += "<th scope=\"col\"  title=\"Location/Screen\" width=\"140px\">" + "Location/Screen" + "</th>";    
    testResult += "<th scope=\"col\"  title=\"Browser Type\" width=\"80px\">" + "Browser Type" + "</th>";
    testResult += "<th scope=\"col\"  title=\"Browser Versions\" width=\"80px\">" + "Browser Ver." + "</th>";
    testResult += "<th scope=\"col\" title=\"Screenshot\" >" + "Screenshot" + "</th>";
    testResult += "<th scope=\"col\"  title=\"Global Issue\" width=\"40px\">" + "Global Issue" + "</th>";    
    testResult += "<th scope=\"col\" title=\"Remediation Details\" width=\"140px\">" + "Remediation Details" + "</th>";
	testResult += "<th scope=\"col\" title=\"Screenshot\" >" + "Remediation Screenshot" + "</th>";
	testResult += "<th scope=\"col\"  title=\"Remediation Date\" width=\"60px\">" + "Remediation Date" + "</th>";
    testResult += "</tr>";
 

    for (let i = 0; i < $scope.jsonData[0].Criteria.length; i++) {		
     if ($scope.jsonData[0].Criteria[i].TestResult == 'undefined') $scope.jsonData[0].Criteria[i].TestResult ='';	
		let d=i+1;
		//if($scope.noResult[i]== true && $scope.TestResult[i]== $scope.filterResult){
		if($scope.TestResult[i]== $scope.filterResult){
      testResult += "<tr >";
	  testResult += "<th  title=\"Issue Number\"> Issue " + $scope.jsonData[0].Criteria[i].Counter; + "</th>";
	  testResult += "<th   scope=\"row\" title=\"Test Name\">" + $scope.jsonData[0].Criteria[i].TestName; + "</th>";      
      testResult += "<td title=\"Test ID\">" + $scope.jsonData[0].Criteria[i].TestID; + "</td>";
      testResult += "<td title=\"Test Condition\">" + $scope.jsonData[0].Criteria[i].TestCondition; + "</td>";
      testResult += "<td title=\"Success Criteria\">" + $scope.jsonData[0].Criteria[i].CrtID; + "</td>";
     // testResult += "<td title=\"Test\">" + $scope.jsonData[0].Criteria[i].Test; + "</td>";      
      testResult += "<td title=\"Test Result\">" + $scope.jsonData[0].Criteria[i].TestResult; + "</td>";
	  testResult += "<td title=\"Tester's comment\">" + $scope.jsonData[0].Criteria[i].TesterComment; + "</td>";
	  testResult += "<td title=\"Location\">" + $scope.jsonData[0].Criteria[i].location; + "</td>";      
      testResult += "<td title=\"Browser Type\">" + $scope.jsonData[0].Criteria[i].T_brwsrType; + "</td>";
      testResult += "<td title=\"Browser's Version\">" + $scope.jsonData[0].Criteria[i].T_brwsrVrsn; + "</td>";
      testResult += "<td onclick=\"zoom("+$scope.jsonData[0].Criteria[i].Counter+")\"   title=\"ScreenShot Captured\">" + "<img id=\""+$scope.jsonData[0].Criteria[i].Counter+"\" width=\"350\"  alt=\"screenshot\" src= \"" + $scope.ImageSrc[i] + '" '+"onerror=\"this.style.display='none'\"" + "\>" + "</td>";
      testResult += "<td title=\"Global Issue\">" + $scope.jsonData[0].Criteria[i].GlobalIssue; + "</td>";
	  testResult += "<td title=\"Remediation Details\">" + $scope.jsonData[0].Criteria[i].RemediationDetails; + "</td>";
	  testResult += "<td onclick=\"zoom("+$scope.jsonData[0].Criteria[i].Counter+")\"   title=\"ScreenShot Captured\">" + "<img id=\""+$scope.jsonData[0].Criteria[i].Counter+"\" width=\"350\"  alt=\"screenshot\" src= \"" + $scope.ImageSrc2[i] + '" '+"onerror=\"this.style.display='none'\"" + "\>" + "</td>";
      testResult += "<td title=\"Remediation Date\">" + $scope.jsonData[0].Criteria[i].RemediationDate; + "</td>";
      
      testResult += "</tr>";
    }
	
	//if($scope.noResult[i]== true && $scope.filterResult1== true){
	if($scope.filterResult1== true){
      testResult += "<tr >";
	  testResult += "<td  title=\"Issue Number\"> Issue " + $scope.jsonData[0].Criteria[i].Counter; + "</td>";
	  testResult += "<th   scope=\"row\" title=\"Test Name\">" + $scope.jsonData[0].Criteria[i].TestName; + "</th>";      
      testResult += "<td title=\"Test ID\">" + $scope.jsonData[0].Criteria[i].TestID; + "</td>";
      testResult += "<td title=\"Test Condition\">" + $scope.jsonData[0].Criteria[i].TestCondition; + "</td>";
      testResult += "<td title=\"Success Criteria\">" + $scope.jsonData[0].Criteria[i].CrtID; + "</td>";
     // testResult += "<td title=\"Test\">" + $scope.jsonData[0].Criteria[i].Test; + "</td>";      
      testResult += "<td title=\"Test Result\">" + $scope.jsonData[0].Criteria[i].TestResult; + "</td>";
	  testResult += "<td title=\"Tester's comment\">" + $scope.jsonData[0].Criteria[i].TesterComment; + "</td>";
	  testResult += "<td title=\"Location\">" + $scope.jsonData[0].Criteria[i].location; + "</td>";      
      testResult += "<td title=\"Browser Type\">" + $scope.jsonData[0].Criteria[i].T_brwsrType; + "</td>";
      testResult += "<td title=\"Browser's Version\">" + $scope.jsonData[0].Criteria[i].T_brwsrVrsn; + "</td>";
      testResult += "<td onclick=\"zoom("+$scope.jsonData[0].Criteria[i].Counter+")\"   title=\"ScreenShot Captured\">" + "<img id=\""+$scope.jsonData[0].Criteria[i].Counter+"\" width=\"350\"  alt=\"screenshot\" src= \"" + $scope.ImageSrc[i] + '" '+"onerror=\"this.style.display='none'\"" + "\>" + "</td>";
      testResult += "<td title=\"Global Issue\">" + $scope.jsonData[0].Criteria[i].GlobalIssue; + "</td>";
	  testResult += "<td title=\"Remediation Details\">" + $scope.jsonData[0].Criteria[i].RemediationDetails; + "</td>";
	  testResult += "<td onclick=\"zoom("+$scope.jsonData[0].Criteria[i].Counter+")\"   title=\"ScreenShot Captured\">" + "<img id=\""+$scope.jsonData[0].Criteria[i].Counter+"\" width=\"350\"  alt=\"screenshot\" src= \"" + $scope.ImageSrc2[i] + '" '+"onerror=\"this.style.display='none'\"" + "\>" + "</td>";
      testResult += "<td title=\"Remediation Date\">" + $scope.jsonData[0].Criteria[i].RemediationDate; + "</td>";
      
      testResult += "</tr>";
    }
	}
    testResult += "</table>";


    $scope.capturedFormData = "<!DOCTYPE html>" +
      "<html lang=\"en\">" +
      "<head>" +	 
      "<title>"+$scope.productID+" Accessibility Conformance Report</title>" +
      "<style>  body{font-family: \"Franklin Gothic Book\", \"system-ui\",\"Segoe UI\",\"Ubuntu\",\"Helvetica Neue\",\"sans-serif\";} h1,h2{color: #F8F8FF; background-color: rgb(0, 51, 102);font-family: \"Franklin Gothic Book\",\"system-ui\",\"Segoe UI\",\"Ubuntu\",\"Helvetica Neue\",\"sans-serif\"; text-align: center;}  table { font-family: \"system-ui\",\"Segoe UI\",\"Ubuntu\",\"Helvetica Neue\",\"sans-serif\"; text-decoration:none; border-collapse: collapse; width: 100%; display:block; padding: 3px; } td, th { border: 1px solid #A9A9A9; text-align: left; padding: 3px;font-family: \"system-ui\",\"Segoe UI\",\"Ubuntu\",\"Helvetica Neue\",\"sans-serif\";} th{vertical-align: top;} tr:nth-child(even) { background-color: #F0FFFF; padding-top: 0px; padding-bottom: 0px;font-family: \"system-ui\",\"Segoe UI\",\"Ubuntu\",\"Helvetica Neue\",\"sans-serif\";} tr, th {vertical-align: top;}</style>" +
          
	 "</head>" +
	 "<div><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAABVCAYAAACCViA6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGsmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTEwLTIwVDEwOjE5OjE1LTA0OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0xMC0yMFQxMDoyOS0wNDowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0xMC0yMFQxMDoyOS0wNDowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDphYWVjNDQxYi0wNzZmLTU3NDktYTY4OC1jNzk3MjY3ZmI2ZDIiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo1NmQzMjliZC1hOGE3LTU0NDctODMxYy1lODY4YjNjM2E2YTMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowN2M0OGQ0Yy04OGQxLTg4NGYtOTA3MC03NTI4NzZlMmNhZGYiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjA3YzQ4ZDRjLTg4ZDEtODg0Zi05MDcwLTc1Mjg3NmUyY2FkZiIgc3RFdnQ6d2hlbj0iMjAyMC0xMC0yMFQxMDoxOToxNS0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MjVkZjFiZC1kYjdkLTk5NDgtOGExMi04YjNjZmQ2NTA4YzciIHN0RXZ0OndoZW49IjIwMjAtMTAtMjBUMTA6MjktMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YWFlYzQ0MWItMDc2Zi01NzQ5LWE2ODgtYzc5NzI2N2ZiNmQyIiBzdEV2dDp3aGVuPSIyMDIwLTEwLTIwVDEwOjI5LTA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FK1E/QAAFJhJREFUeJztXXlYU1f6fhNI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\" alt=\"ACRT logo\" title=\"ACRT Logo\"style=\"width:5em;height:3.3em;\"><strong style=\"font-size: 1.5em;display: inline-block;\" title=\"Accessibility Conformance Reporting Tool (ACRT)\"> Accessibility Conformance Reporting Tool (ACRT) </strong> </div><br>"+
      "<button style=\"background-color:rgb(0, 51, 102); color: white; padding-left: 0em; text-align: center; width: 15%;font-size: 100%;border: 2px solid black;border-radius: 5px;\" onclick=\"myPrint()\">Print this page</button> <br>" +	  
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
	  
	  "<h2> Tester's Information </h2>" +
      "<strong>Tester's First Name:  &nbsp;  </strong>" + $scope.firstname + "<br>" +
      "<strong>Tester's Last Name:  &nbsp;  </strong>" + $scope.lastname + "<br>" +
      "<strong>Trusted Tester ID:  &nbsp;  </strong>" + $scope.testerID + "<br>" +
	  "<strong>Company Name:  &nbsp;  </strong>" + $scope.companyname + "<br>" +
      "<strong>Tester's Email:  &nbsp;  </strong>" + $scope.testerContact + "<br>" +
      "<strong>Notes:  &nbsp;  </strong>" + $scope.testScope + "<br>" +


      "<h2> Test Environment Information </h2>" +
      "<strong>Browser:  &nbsp;  </strong>" + $scope.myBrowserTested + "<br>" +
      "<strong>Browser Version: &nbsp;  </strong>" + $scope.myBrowser + "<br>" +
      "<strong>Compatibility View:  &nbsp;  </strong>" + $scope.compID + "<br>" +
      "<strong>Operating System:  &nbsp;  </strong>" + $scope.myOpsys + "<br>" +
      "<strong>Operating System Version:  &nbsp;  </strong>" + $scope.myOpsysTested + "<br>" +

      
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
