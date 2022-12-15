var app = angular.module('acrt', ["ngSanitize"]);    
   
window.addEventListener("error", handleError, true);
 


function handleError(evt) {
    if (evt.message) { // Chrome sometimes provides this
      //alert("error: "+evt.message +" at linenumber: "+evt.lineno+" of file: "+evt.filename);
	 //  alert('Please select file for ACRT, error message: '+evt.message);
    } /*else {
      //alert("error: "+evt.type+" from element: "+(evt.srcElement || evt.target));
	  alert('Please select and load valid JSON file for ACRT');
    }*/
}
/*
//commented because this is partially working 
function IsJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {    
	alert("There is a problem while trying to convert to JSON format, contact technical support.");
	console.log(str);
	//return false;
  }
  //return true;
  return JSON.parse(str);
}		
 */ 
 
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

function expandCollapse5() {

  var z = document.getElementById("expandCollapse5");  
  if (z.innerHTML === "<i class=\"down\"></i> Hide Risk Score Breakdown") {
    z.innerHTML = "<i class=\"up\"></i> Show Risk Score Breakdown";
  } else {
    z.innerHTML = "<i class=\"down\"></i> Hide Risk Score Breakdown";
  }
}

function expandCollapse6() {

  var z = document.getElementById("expandCollapse6");  
  if (z.innerHTML === "<i class=\"down\"></i> Hide Other Results") {
    z.innerHTML = "<i class=\"up\"></i> Show Other Results";
  } else {
    z.innerHTML = "<i class=\"down\"></i> Hide Other Results";
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
commented because for now we dont want to use checkbox to show or hide it
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
$scope.draftMsg ="";

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
      document.getElementById("selMsg").innerHTML = "File selected. Please select 'Load File' below to proceed.";  	
	  document.getElementById('fileinput').setAttribute('title', 'File selected. Please select Load File below to proceed.');    	
      document.getElementById("buttonLoad").focus(); 	  
    } 
  
  $scope.tstRsltMsg = function() {
     //alert($scope.checked1);
      if ($scope.checked1 == 'false' )
		   document.getElementById("msg").innerHTML = "Check checkbox for detailed Test Results.";
	  if ($scope.checked1 == 'true' )
		   document.getElementById("msg").innerHTML = "Uncheck checkbox to hide Test Results."; 
	  
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
	
	
	$scope.countOfWords = function(text) {
    var s = text ? text.split(/\s+/) : 0; // it splits the text on space/tab/enter
    return s ? s.length : '';
};

$scope.countOfRepWords =  function wordFreq(string) {
    var words = string.replace(/[.]/g, '').split(/\s/);
    var freqMap = {};
    words.forEach(function(w) {
        if (!freqMap[w]) {
            freqMap[w] = 0;
        }
        freqMap[w] += 1;
    });

    return freqMap;
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
	  $scope.titforImg =[];
	  $scope.altforImg = [];
	        
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
        $scope.IssueNo[b] = b;//$scope.jsonData[0].Criteria[b].IssueNo;
		$scope.location[b] = $scope.jsonData[0].Criteria[b].location;
        $scope.TesterComment[b] = $scope.jsonData[0].Criteria[b].TesterComment;
        $scope.T_brwsrType[b] = $scope.jsonData[0].Criteria[b].T_brwsrType;
        $scope.T_brwsrVrsn[b] = $scope.jsonData[0].Criteria[b].T_brwsrVrsn;
        $scope.ImageSrc[b] = $scope.jsonData[0].Criteria[b].ImageSrc;
		if($scope.ImageSrc[b] != undefined) 
		{ $scope.titforImg[b]= 'image for ' + $scope.Test[b];
	      $scope.altforImg[b]= 'image for ' + $scope.Test[b]; 
	
	   }
        $scope.GlobalIssue[b] = $scope.jsonData[0].Criteria[b].GlobalIssue;
        $scope.RemediationDate[b] = $scope.jsonData[0].Criteria[b].RemediationDate;
        $scope.RemediationDetails[b] = $scope.jsonData[0].Criteria[b].RemediationDetails;
		$scope.ImageSrc2[b] = $scope.jsonData[0].Criteria[b].ImageSrc2;
        $scope.Counter[b] = $scope.jsonData[0].Criteria[b].Counter;		
        $scope.CrtIDCollection.push($scope.CrtID[b]);	
		if ($scope.jsonData[0].Criteria[b].TestResult == 'undefined') $scope.jsonData[0].Criteria[b].TestResult ='';


				$scope.$apply();
				
				if ($scope.jsonData[0].Criteria[b].DraftReport == 'true') {
          $scope.isDraft = true;		  
		  continue;
          
        } 
		
		if($scope.isDraft == true)
		$scope.draftMsg = "This is a Draft Report, To view final Report please select all required test results."
		
		
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
            if($scope.jsonData[0].SuccessCriteria[a].ConformanceLvl == 'Not Evaluated') continue;					
			$scope.DisabilityImpactCollection.push($scope.jsonData[0].SuccessCriteria[a].DisabilityImpact);
			//$scope.DisabilityImpactCollectionSC.push($scope.jsonData[0].SuccessCriteria[a].CrtID);
			}
          }
       
        $scope.uniqSCCrtId[a] = $scope.jsonData[0].SuccessCriteria[a].CrtID;
        $scope.uniqSCCrtIdCollection.push($scope.uniqSCCrtId[a]);

      }
	  $scope.TotalImpactedGrpString = '';
	  $scope.DisabilityRiskScoreJSON = '';
	   $scope.impctInfoMsg = "The risk score is calculated by assigning one point to each disability type impacted by a failed Test ID. Disability groups with higher points have a higher risk of not being able to utilize the application.  Projects should confer with the Certified Trusted Tester that performed the testing and their Component Section 508 Program Manager about remediating failed Test IDs before the application is released.";
	   $scope.TotalImpactedGrpString = 0;
	  //if($scope.DisabilityImpactCollection.length >0){
	  $scope.TotalImpactedGrpString = Array.from(new Set($scope.DisabilityImpactCollection)).toString();
	  $scope.TotalImpactedGrpString.replace(/(^\s*)|(\s*$)/gi,""); //removes start and end spaces from string 
	  $scope.TotalImpactedGrpString.replace(/[ ]{2,}/gi," "); //reduces multiple spaces to single space 
	  $scope.TotalImpactedGrpString = $scope.TotalImpactedGrpString.replace(/^,/, ''); //removes first comma from string 
	  $scope.TotalImpactedGrpString = $scope.TotalImpactedGrpString.replace(/,\s*$/, " "); //removes comma from last of string
	  $scope.TotalImpactedGrpString = $scope.TotalImpactedGrpString.replace(/,+/g, ','); //removes multiple commas from string
	  $scope.TotalImpactedGrpString = $scope.TotalImpactedGrpString.replace(/,/g,'');//removes all commas
	  $scope.TotalImpactedGrpString = $scope.TotalImpactedGrpString.replace(/'/g,'');//removes single quotes 
	  	   
	$scope.DisabilityRiskScoreJSON = $scope.countOfRepWords($scope.TotalImpactedGrpString);	
	$scope.DisabilityRiskScore = $scope.DisabilityRiskScoreJSON;
	//Vision 
	$scope.TotalVision =0;
	if($scope.DisabilityRiskScoreJSON.Vision == null) $scope.DisabilityRiskScoreJSON.Vision =0;
	$scope.Vision = $scope.DisabilityRiskScoreJSON.Vision;		
	if($scope.DisabilityRiskScoreJSON.VisionWith == null) $scope.DisabilityRiskScoreJSON.VisionWith =0;
	$scope.VisionWith = $scope.DisabilityRiskScoreJSON.VisionWith;
	if($scope.DisabilityRiskScoreJSON.VisionWithout == null) $scope.DisabilityRiskScoreJSON.VisionWithout =0;
	$scope.VisionWithout = $scope.DisabilityRiskScoreJSON.VisionWithout;
	if($scope.DisabilityRiskScoreJSON.Color == null) $scope.DisabilityRiskScoreJSON.Color =0;
	$scope.Color = $scope.DisabilityRiskScoreJSON.Color;
   if($scope.DisabilityRiskScoreJSON.ColorWithout == null) $scope.DisabilityRiskScoreJSON.ColorWithout =0;
	$scope.ColorWithout = $scope.DisabilityRiskScoreJSON.ColorWithout;	
     $scope.TotalVisionList = 'Without Vision ('+$scope.VisionWith+'), With Limited Vision ('+$scope.VisionWithout+ '), Without Perception of Color ('+$scope.Color+')';	
	$scope.TotalVision = $scope.VisionWith + $scope.VisionWithout + $scope.Color;
	  
	//Hearing 
	$scope.HearingTotal = 0;
	
	if($scope.DisabilityRiskScoreJSON.Hearing == null) $scope.DisabilityRiskScoreJSON.Hearing =0;
    $scope.Hearing = $scope.DisabilityRiskScoreJSON.Hearing;
    if($scope.DisabilityRiskScoreJSON.HearingWith == null) $scope.DisabilityRiskScoreJSON.HearingWith =0;
	$scope.HearingWith = $scope.DisabilityRiskScoreJSON.HearingWith;
    if($scope.DisabilityRiskScoreJSON.HearingWithout == null) $scope.DisabilityRiskScoreJSON.HearingWithout =0;
	$scope.HearingWithout = $scope.DisabilityRiskScoreJSON.HearingWithout;
	$scope.HearingTotalList = 'Without Hearing  ('+ $scope.HearingWith +')'+ ', With Limited Hearing ('+$scope.HearingWithout+')';
	$scope.HearingTotal = $scope.HearingWith + $scope.HearingWithout ; 
	
	//Cognitive
    $scope.TotalCognitive=0;
    if($scope.DisabilityRiskScoreJSON.Cognitive == null) $scope.DisabilityRiskScoreJSON.Cognitive =0;	
    $scope.Cognitive = $scope.DisabilityRiskScoreJSON.Cognitive;	
	if($scope.DisabilityRiskScoreJSON.Learning == null) $scope.DisabilityRiskScoreJSON.Learning =0;
	$scope.Learning = $scope.DisabilityRiskScoreJSON.Learning;
	if($scope.DisabilityRiskScoreJSON.Speech == null) $scope.DisabilityRiskScoreJSON.Speech =0;
	$scope.Speech = $scope.DisabilityRiskScoreJSON.Speech;
	if($scope.DisabilityRiskScoreJSON.Language == null) $scope.DisabilityRiskScoreJSON.Language =0;
	$scope.Language = $scope.DisabilityRiskScoreJSON.Language + $scope.Speech;	
	$scope.TotalCognitiveList = 'With Limited Language, Cognitive, and Learning Abilities ('+$scope.Cognitive+')'+ ', Without Speech ('+$scope.Speech+' )';
	$scope.TotalCognitive = $scope.Cognitive + $scope.Speech;
			
	
	//Photosensitivity 
	$scope.TotalPhotosensitive =0;
	if($scope.DisabilityRiskScoreJSON.Photosensitive == null) $scope.DisabilityRiskScoreJSON.Photosensitive =0;
	$scope.Photosensitive = $scope.DisabilityRiskScoreJSON.Photosensitive;
	if($scope.DisabilityRiskScoreJSON.AbilitiesPhotosensitive == null) $scope.DisabilityRiskScoreJSON.AbilitiesPhotosensitive =0;
	$scope.AbilitiesPhotosensitive = $scope.DisabilityRiskScoreJSON.AbilitiesPhotosensitive; 
	if($scope.DisabilityRiskScoreJSON.Seizure == null) $scope.DisabilityRiskScoreJSON.Seizure =0;
	$scope.Mobility = $scope.DisabilityRiskScoreJSON.Seizure;	
	if($scope.DisabilityRiskScoreJSON.Epilepsy == null) $scope.DisabilityRiskScoreJSON.Epilepsy =0;
	$scope.Epilepsy = $scope.DisabilityRiskScoreJSON.Epilepsy;
	$scope.TotalPhotosensitive = $scope.Photosensitive;
	$scope.TotalPhotosensitiveList = 'Photosensitive Epilepsy / Photosensitive Seizure Disorders ('+$scope.Photosensitive+')';
		
	
	//MObility 	
    $scope.TotalMobility = 0;   
    if($scope.DisabilityRiskScoreJSON.Manipulation == null) $scope.DisabilityRiskScoreJSON.Manipulation =0;	
	$scope.Manipulation = $scope.DisabilityRiskScoreJSON.Manipulation;
	if($scope.DisabilityRiskScoreJSON.ManipulationWithout == null) $scope.DisabilityRiskScoreJSON.ManipulationWithout =0;
	$scope.ManipulationWithout = $scope.DisabilityRiskScoreJSON.ManipulationWithout;
	$scope.TotalMobility =  $scope.Manipulation;	
	$scope.TotalMobilityList = 'With Limited Manipulation ('+ $scope.Manipulation+ ')';
	$scope.TotalImpactedGroupNo = 0;
	 $scope.TotalImpactedGroupNo = $scope.TotalMobility + $scope.TotalPhotosensitive +  $scope.TotalCognitive + $scope.HearingTotal + $scope.TotalVision;
	if($scope.isDraft == true)
    $scope.TotalImpactedGroupNo = $scope.TotalImpactedGroupNo + ' (Final score will be determined upon completion of testing.)';
	/* commented  because we need to work on score range to display risk message 
	$scope.impctLevel = '';
	if($scope.DisabilityRiskScore <0.34) $scope.DisabilityRiskScore =0 ;
	if ($scope.DisabilityRiskScore >=0 && $scope.DisabilityRiskScore < 5)
	$scope.impctLevel = '  - Low impact';
    if ($scope.DisabilityRiskScore >=5 && $scope.DisabilityRiskScore < 9)
	$scope.impctLevel = '  - Medium impact';
    if ($scope.DisabilityRiskScore >=9 && $scope.DisabilityRiskScore < 13)
	$scope.impctLevel= '  - High impact';
    if ($scope.DisabilityRiskScore >=13)
	$scope.impctLevel = '  - Critical impact';
    $scope.DisabilityRiskScore = $scope.DisabilityRiskScore + '  %  ';
	*/
	if($scope.isDraft == true)
	$scope.DisabilityRiskScore = $scope.DisabilityRiskScore + '  - Select all  test results to get accurate score'
	   
	  //$scope.DisabilityRiskScore = $scope.TotalImpactedGrpString.split(',').length +'   '+ $scope.TotalImpactedGrpString;
	  //$scope.DisabilityRiskScore = Array.from(new Set($scope.TotalImpactedGrpString.split(" ',"))).toString();
	
	  $scope.DisabilityImpactCollection = $scope.DisabilityImpactCollection.filter($scope.onlyUnique);	  
	  
	  $scope.DisabilityImpactCollection = Array.from(new Set($scope.DisabilityImpactCollection));
	  $scope.DisabilityImpactCollectionString ="";
	  $scope.DisabilityImpactCollectionString = $scope.DisabilityImpactCollection.toString();	  
	  $scope.DisabilityImpactCollectionString = Array.from(new Set($scope.DisabilityImpactCollectionString.split(','))).toString();
	  $scope.DisabilityImpactCollectionString = $scope.DisabilityImpactCollectionString.replace(/(^\s*)|(\s*$)/gi,""); //removes start and end spaces from string 
	  $scope.DisabilityImpactCollectionString = $scope.DisabilityImpactCollectionString.replace(/[ ]{2,}/gi," "); //reduces multiple spaces to single space 
	  $scope.DisabilityImpactCollectionString = $scope.DisabilityImpactCollectionString.replace(/^,/, ''); //removes first comma from string 
	  $scope.DisabilityImpactCollectionString = $scope.DisabilityImpactCollectionString.replace(/,\s*$/, " "); //removes comma from last of string
	  $scope.DisabilityImpactCollectionString = $scope.DisabilityImpactCollectionString.replace(/,+/g, ','); //removes multiple commas from string
	  $scope.DisabilityImpactCollectionString = $scope.DisabilityImpactCollectionString.replace(/'/g,'');//removes single quotes
	  
	  
	  
	  if($scope.DisabilityImpactCollection.length >0){
	  $scope.DisabilityImpactCollectionLength = true;
	  $scope.DisabilityImpactCollection = $scope.DisabilityImpactCollectionString; 
	  if($scope.isDraft == true)
	  $scope.DisabilityImpactCollection = $scope.DisabilityImpactCollection + '  - Select all test results to get accurate impacted group';
	  }
      
      else {
      document.getElementById("dsblImpctDsply").innerHTML = 'No One Impacted';
	  $scope.DisabilityImpactCollection = 'No One Impacted'; 
	  if($scope.isDraft == true)
	 $scope.DisabilityImpactCollection = $scope.DisabilityImpactCollection + '  - Select all  test results to get accurate impacted group';
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
      WCAG += "<th scope=\"row\" width=\"100px\" title=\"Criteria\">" + $scope.jsonData[0].SuccessCriteria[i].CrtID; + "</th>";
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
	  testResult += "<th  title=\"Issue Number\"> Issue " + i + "</th>";
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
      testResult += "<td onclick=\"zoom("+$scope.jsonData[0].Criteria[i].Counter+")\"   title=\"ScreenShot Captured\">" + "<img id=\""+$scope.jsonData[0].Criteria[i].Counter+"\" width=\"350\"  alt=\"screenshot captured\" src= \"" + $scope.ImageSrc[i] + '" '+"onerror=\"this.style.display='none'\"" + "\>" + "</td>";
      testResult += "<td title=\"Global Issue\">" + $scope.jsonData[0].Criteria[i].GlobalIssue; + "</td>";
	  testResult += "<td title=\"Remediation Details\">" + $scope.jsonData[0].Criteria[i].RemediationDetails; + "</td>";
	  testResult += "<td onclick=\"zoom("+$scope.jsonData[0].Criteria[i].Counter+")\"   title=\"ScreenShot Captured\">" + "<img id=\""+$scope.jsonData[0].Criteria[i].Counter+"\" width=\"350\"  alt=\"screenshot captured\" src= \"" + $scope.ImageSrc2[i] + '" '+"onerror=\"this.style.display='none'\"" + "\>" + "</td>";
      testResult += "<td title=\"Remediation Date\">" + $scope.jsonData[0].Criteria[i].RemediationDate; + "</td>";
      
      testResult += "</tr>";
    }
	
	//if($scope.noResult[i]== true && $scope.filterResult1== true){
	if($scope.filterResult1== true){
      testResult += "<tr >";
	  testResult += "<td  title=\"Issue Number\"> Issue " + i; + "</td>";
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
	
	
	var RSCSCORE = "<table class=\"table2\" > <caption>Score Breakdown </caption>";

    RSCSCORE += "<tr>";
    RSCSCORE += "<th scope=\"col\"  title=\"Disability Group\"  width=\"250px\">" + "Disability Group" + "</th>";
    RSCSCORE += "<th scope=\"col\"  title=\"Risk Score\" width=\"100px\">" + "Risk Score" + "</th>";
	RSCSCORE += "<th scope=\"col\"  title=\"Detailed Impacted Groups (with Score)\" width=\"550px\">" + "Detailed Impacted Groups (with Score)" + "</th>"; 
    RSCSCORE += "</tr>";
	  RSCSCORE += "<tr >";	 
      RSCSCORE += "<th scope=\"row\" width=\"250px\" title=\"Vision\">" + "Vision" + "</th>";
      RSCSCORE += "<td  width=\"100px\" title=\"Risk Score for Vision \">" + $scope.TotalVision; + "</td>";
	  RSCSCORE += "<td width=\"550px\" title=\"Detailed Impacted Groups for Vision\">" + $scope.TotalVisionList; + "</td>";
      RSCSCORE += "</tr>";
	  
	   RSCSCORE += "<tr >";	 
      RSCSCORE += "<th scope=\"row\" width=\"250px\" title=\"Hearing\">" + "Hearing" + "</th>";
      RSCSCORE += "<td  width=\"100px\" title=\"Risk Score for Hearing\">" + $scope.HearingTotal; + "</td>";
	  RSCSCORE += "<td width=\"550px\" title=\"Detailed Impacted Groups for Hearing\">" + $scope.HearingTotalList; + "</td>";
      RSCSCORE += "</tr>";
	  
	   RSCSCORE += "<tr >";	 
      RSCSCORE += "<th scope=\"row\" width=\"250px\" title=\"Cognitive\">" + "Cognitive" + "</th>";
      RSCSCORE += "<td  width=\"100px\" title=\"Risk Score for Cognitive\">" + $scope.TotalCognitive; + "</td>";
	  RSCSCORE += "<td width=\"550px\" title=\"Detailed Impacted Groups for Cognitive\">" + $scope.TotalCognitiveList; + "</td>";
      RSCSCORE += "</tr>";
	  
	  RSCSCORE += "<tr >";	 
      RSCSCORE += "<th scope=\"row\" width=\"250px\" title=\"Photosensitivity\">" + "Photosensitivity" + "</th>";
      RSCSCORE += "<td  width=\"100px\" title=\"Risk Score for Photosensitivity\">" + $scope.TotalPhotosensitive; + "</td>";
	  RSCSCORE += "<td width=\"550px\" title=\"Detailed Impacted Groups for Photosensitivity\">" + $scope.TotalPhotosensitiveList; + "</td>";
      RSCSCORE += "</tr>";
	  
	  RSCSCORE += "<tr >";	 
      RSCSCORE += "<th scope=\"row\" width=\"250px\" title=\"Mobility\">" + "Mobility" + "</th>";
      RSCSCORE += "<td  width=\"100px\" title=\"Risk Score for Mobility\">" + $scope.TotalMobility; + "</td>";
	  RSCSCORE += "<td width=\"550px\" title=\"Detailed Impacted Groups Mobility\">" + $scope.TotalMobilityList; + "</td>";
      RSCSCORE += "</tr>";
    
    RSCSCORE += "</table>";


    $scope.capturedFormData = "<!DOCTYPE html>" +
      "<html lang=\"en\">" +
      "<head>" +	 
      "<title>"+$scope.productID+" Accessibility Conformance Report  </title>" + 
      "<style>  body{font-family: \"Franklin Gothic Book\", \"system-ui\",\"Segoe UI\",\"Ubuntu\",\"Helvetica Neue\",\"sans-serif\";} h1,h2{color: #F8F8FF; background-color: rgb(0, 51, 102);font-family: \"Franklin Gothic Book\",\"system-ui\",\"Segoe UI\",\"Ubuntu\",\"Helvetica Neue\",\"sans-serif\"; text-align: center;}  table { font-family: \"system-ui\",\"Segoe UI\",\"Ubuntu\",\"Helvetica Neue\",\"sans-serif\"; text-decoration:none; border-collapse: collapse; width: 100%; display:block; padding: 3px; } td, th { border: 1px solid #A9A9A9; text-align: left; padding: 3px;font-family: \"system-ui\",\"Segoe UI\",\"Ubuntu\",\"Helvetica Neue\",\"sans-serif\";} th{vertical-align: top;} tr:nth-child(even) { background-color: #F0FFFF; padding-top: 0px; padding-bottom: 0px;font-family: \"system-ui\",\"Segoe UI\",\"Ubuntu\",\"Helvetica Neue\",\"sans-serif\";} tr, th {vertical-align: top;}</style>" +
          
	 "</head>" +
	 "<div><img src=\" data:image/png;base64,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 \" alt=\"ACRT logo\" title=\"ACRT Logo\"style=\"width:5em;height:3.3em;\"><strong style=\"font-size: 1.5em;display: inline-block;\" title=\"Accessibility Conformance Reporting Tool (ACRT)\"> Accessibility Conformance Reporting Tool (ACRT) </strong> </div><br>"+
      "<button style=\"background-color:rgb(0, 51, 102); color: white; padding-left: 0em; text-align: center; width: 15%;font-size: 100%;border: 2px solid black;border-radius: 5px;\" onclick=\"myPrint()\">Print this page</button> <br>" +	  
      "<h1>"+$scope.companyname+" Accessibility Conformance Report </h1>" +	  
	 // "<span> Based on VPAT® Version 2.4 </span>"+
      "  <h2 id=\"draftMsg\"  style=\"color: #FFFFFF; background-color: #be0004;\" hidden>" + $scope.draftMsg  +"</h2> " +     
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
      "<strong>Operating System:  &nbsp;  </strong>" + $scope.myOpsysTested + "<br>" +
      "<strong>Operating System Version:  &nbsp;  </strong>" + $scope.myOpsys + "<br>" +

      
      "<strong>Testing Method:  &nbsp;  </strong>" + $scope.evalMethod + "<br>" +
      "<strong>Testing Method Version:  &nbsp;  </strong>" + $scope.evalMethodVrsn + "<br>" +  
     "<h2> Terms used in the Conformance Level </h2> <ul> <li> <strong>Supports:</strong> The functionality of the product has at least one method that meets the criterion without known defects or meets with equivalent facilitation. </li>  <li> <strong>Does Not Support:</strong> The majority of product functionality does not meet the criterion.</li> <li> <strong>Not Applicable:</strong> The criterion is not relevant to the product. </li> <li> <strong>Not Evaluated:</strong> The product has not been evaluated against the criterion.  This can only be used in WCAG 2.x Level AAA.</li> </ul> <br>" +
    "<h2> Web Content Accessibility Guidelines (WCAG) Report </h2>" + WCAG + "<br>" + "<h2> Test Results </h2>" + testResult + "<br>" +
	 "<h2> Disability Impact Score </h2>" +$scope.impctInfoMsg+"<br><br> <strong>Risk Score: "+$scope.TotalImpactedGroupNo+"</strong><br>"+ RSCSCORE + "<br><br>" +  
     "<b>Your feedback is important to us! Please take the <a title=\"ACRT Survey\" href= \"https://www.surveymonkey.com/r/DHSACRT\" target=\"_blank\"   id=\"surveyID\"> ACRT Survey </a> </b>"+
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
