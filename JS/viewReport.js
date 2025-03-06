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

// Section 508 PM Score select options
$scope.optionsSection508Score = [];
for (let i = 1; i <= 10; i++) {
    $scope.optionsSection508Score.push({ id: i });
}

// Set the default selected score
$scope.default_SelectedSection508Score = '';
$scope.selected_section508_pm_score = $scope.default_SelectedSection508Score.toString();

$scope.usabilityID = '';


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
	   $scope.usabilityID = $scope.jsonData[0].usabilityID;

      $scope.selected_section508_pm_score = $scope.jsonData[0].selected_section508_pm_score || '';
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
	 if ($scope.TotalImpactedGroupNo > 40) $scope.TotalImpactedGroupNo =40;
	 $scope.TotalImpactedGroupNo = ($scope.TotalImpactedGroupNo/40)*100+'%';
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
      "<title>"+$scope.productID+" Section 508 Compliance Report </title>" + 
      "<style>  body{font-family: \"Franklin Gothic Book\", \"system-ui\",\"Segoe UI\",\"Ubuntu\",\"Helvetica Neue\",\"sans-serif\";} h1,h2{color: #F8F8FF; background-color: rgb(0, 51, 102);font-family: \"Franklin Gothic Book\",\"system-ui\",\"Segoe UI\",\"Ubuntu\",\"Helvetica Neue\",\"sans-serif\"; text-align: center;}  table { font-family: \"system-ui\",\"Segoe UI\",\"Ubuntu\",\"Helvetica Neue\",\"sans-serif\"; text-decoration:none; border-collapse: collapse; width: 100%; display:block; padding: 3px; } td, th { border: 1px solid #A9A9A9; text-align: left; padding: 3px;font-family: \"system-ui\",\"Segoe UI\",\"Ubuntu\",\"Helvetica Neue\",\"sans-serif\";} th{vertical-align: top;} tr:nth-child(even) { background-color: #F0FFFF; padding-top: 0px; padding-bottom: 0px;font-family: \"system-ui\",\"Segoe UI\",\"Ubuntu\",\"Helvetica Neue\",\"sans-serif\";} tr, th {vertical-align: top;}</style>" +
          
	 "</head>" +
	 "<div><img src=\" data:image/png;base64,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 \" alt=\"SCRT logo\" title=\"SCRT Logo\"style=\"width:5em;height:3.3em;\"><strong style=\"font-size: 1.5em;display: inline-block;\" title=\"Section 508 Compliance Reporting Tool (SCRT)\"> Section 508 Compliance Reporting Tool (SCRT) </strong> </div><br>"+
      "<button style=\"background-color:rgb(0, 51, 102); color: white; padding-left: 0em; text-align: center; width: 15%;font-size: 100%;border: 2px solid black;border-radius: 5px;\" onclick=\"myPrint()\">Print this page</button> <br>" +	  
      "<h1>"+$scope.companyname+" Section 508 Compliance Report </h1>" +	  
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
	  "<h2> Disability Impact Score </h2>" +$scope.impctInfoMsg+"<br><br> <strong>Risk Score: "+$scope.TotalImpactedGroupNo+"</strong><br>"+ RSCSCORE + "<br><br>";

      // Check if selected_section508_pm_score is a number and not an empty string
      if ($scope.selected_section508_pm_score && !isNaN($scope.selected_section508_pm_score)) {
		  $scope.capturedFormData += "<strong>Section 508 PM Score: </strong>" + $scope.selected_section508_pm_score + "<br /><br />";
      }
	   if ($scope.usabilityID !='undefined' || $scope.usabilityID != undefined ) {
		   $scope.usabilityID ='Not Provided';
         $scope.capturedFormData += "<strong>Summary of the usability issues: </strong>" + $scope.usabilityID + "<br /><br />";
      }
      
      $scope.capturedFormData +=
      "<b>Your feedback is important to us! Please take the <a title=\"SCRT Survey\" href= \"https://www.surveymonkey.com/r/DHSACRT\" target=\"_blank\"   id=\"surveyID\"> SCRT Survey </a> </b>"+
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
