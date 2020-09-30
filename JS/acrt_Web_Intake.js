
var app = angular.module('acrtWebIntake', []);

//Alert message before navigating away from page

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



//this function validates if json is valid
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


//defining filter
app.filter('unique', function() {
  return function(collection, keyname) {
    var output = [],
      keys = [];
    angular.forEach(collection, function(item) {
      var key = item[keyname];
      if (keys.indexOf(key) == -1) {
        keys.push(key);
        output.push(item);
      }
    });
    return output;
  };
});

function show_hide_column(col_no, do_show) {
  var rows = document.getElementById('rmdTble').rows;

  for (var row = 0; row < rows.length; row++) {
    var cols = rows[row].cells;
    if (col_no >= 0 && col_no < cols.length) {
      cols[col_no].style.display = do_show ? '' : 'none';
    }
  }
}
show_hide_column(10, false);show_hide_column(11, false);

app.controller('acrtWebIntakeCtrl', ['$scope', function($scope, $filter) {
	
 
//zoom image 
$scope.zoom = function(i) {
var modal = document.getElementById(i);
var img = document.getElementById("image"+i);
var modalImg = document.getElementById("img"+i);
var captionText = document.getElementById("caption"+i);
var span = document.getElementsByClassName("close")[i];

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

span.onclick = function() { 
  modal.style.display = "none";
}
	  
  }
  
 

//filter for unique data
	  $scope.onlyUnique = function(value, index, self) {
	    return self.indexOf(value) === index;
	  }
	
    
  //this will determine if any element is clicked 
  $scope.elementIsClickedd = false;
  $scope.submitClkCount = 0;

  $scope.myVar = true;
  $scope.myVar1 = false;
  $scope.Mul_Issues = [];
  $scope.Mul_Issues3 = [];

  function clickHandler() {
    $scope.elementIsClickedd = true;
  }
  

$scope.brsrChkBoxClicked = function(x) {
  /*if ($scope.checkboxModel.alerts == "on")
  alert('Do you want to change default browser type and version');
   let brsrChk = document.getElementById("brsrChk");
  brsrChk.style.display = chkPassport.checked ? "block" : "none"; */
}

$scope.brsrChkBoxClicked1 = function(x) {
 /*if ($scope.checkboxModel.alerts == "on") 
 alert('Do you want to change default browser type and version'); */
  
}


$scope.elementIsClicked4 = " ";
$scope.elemntClicked3 = function(x) {
  $scope.elementIsClicked4 = "RsltSelected1" + x;
}
//adding and removing issues	

//$scope.Mul_Issues = [];
$scope.addedRow = [false];
$scope.indexCollection = [];


$scope.tstIESelected11 = [];

 $scope.tstWinMethodSelected = " ";
  $scope.tstWinOSClicked = function() {
    $scope.tstWinOSSelected = "WinOSClicked";
  }


  $scope.tstIESelected = " ";
  $scope.tstIEClicked = function() {
    $scope.tstIESelected = "IEClicked";
  }
  
  $scope.edgChekBoxVal = [];
  $scope.edgChekBox = function(i) {
    $scope.edgChekBoxVal[i] = "edgChekBox";	
	
  }
  
   $scope.ieChekBoxVal = [];
  $scope.ieChekBox = function(i) {
    $scope.ieChekBoxVal[i] = "ieChekBox";	
  }
  
   $scope.frfxChekBoxVal = [];
  $scope.frfxChekBox = function(i) {
    $scope.frfxChekBoxVal[i] = "frfxChekBox";	
  }
  
   $scope.chromeChekBoxVal = [];
  $scope.chromeChekBox = function(i) {
    $scope.chromeChekBoxVal[i] = "chromeChekBox";	
  }
  
   $scope.safariCheckBoxVal = [];
  $scope.safariChekBox = function(i) {
    $scope.safariCheckBoxVal[i] = "safariChekBox";	
  }
  
   $scope.chkBoxValothr = [];
  $scope.otherChekBox = function(i) {
    $scope.chkBoxValothr[i] = "otherChekBox";	
  }
  
 
   
  $scope.edgChekBoxVal1 = [];
  $scope.edgChekBox1 = function(i) {
    $scope.edgChekBoxVal1[i] = "edgChekBox";	
  }
  
   $scope.ieChekBoxVal1 = [];
  $scope.ieChekBox1 = function(i) {
    $scope.ieChekBoxVal1[i] = "ieChekBox";	
  }
  
   $scope.frfxChekBoxVal1 = [];
  $scope.frfxChekBox1 = function(i) {
    $scope.frfxChekBoxVal1[i] = "frfxChekBox";	
  }
  
   $scope.chromeChekBoxVal1 = [];
  $scope.chromeChekBox1 = function(i) {
    $scope.chromeChekBoxVal1[i] = "chromeChekBox";	
  }
  
   $scope.safariCheckBoxVal1 = [];
  $scope.safariChekBox1 = function(i) {
    $scope.safariCheckBoxVal1[i] = "safariChekBox";	
  }
  
   $scope.chkBoxValothr1 = [];
  $scope.otherChekBox1 = function(i) {
    $scope.chkBoxValothr1[i] = "otherChekBox";	
  } 
  

  $scope.tstEdgeSelected1 = [];
  $scope.tstEdgeClicked1 = function(x) {
    $scope.tstEdgeSelected1[x] = "EdgeClicked1";
  }

  $scope.tstChromeSelected1 = [];
  $scope.tstChromeClicked1 = function(x) {
    $scope.tstChromeSelected1[x] = "ChromeClicked1";
  }

  $scope.tstSafariSelected1 = [];
  $scope.tstSafariClicked1 = function(x) {
    $scope.tstSafariSelected1[x] = "SafariClicked1";
  }

  $scope.tstFirefoxSelected1 = [];
  $scope.tstFirefoxClicked1 = function(x) {
    $scope.tstFirefoxSelected1[x] = "FirefoxClicked1";
  }
 
  $scope.dateSelected =[];
  $scope.dateTime = function(x){
    $scope.dateSelected[x] = "dateClicked";
  }



//initiating all the checkboxes for different versions of browsers and OS  
$scope.checkboxModel = {
  value1: " ",
  value2: " ",
  value3: " ",
  value4: " ",
  value5: " ",
  value6: " ",
  value7: " ",
  value8: " ",
  value9: " ",
  value10: " ",
  value11: " ",
  value12: " ",
  value13: " ",
  value14: [" "],
  value21: [" "],
  value31: [" "],
  value41: [" "],
  value51: [" "],
  value141: [" "],
  value211: [" "],
  value311: [" "],
  value411: [" "],
  value511: [" "]
};


$scope.location = [];
$scope.location1 = [];
$scope.testerCommentID1 = [];
$scope.rmdatnDtlID1 = [];
$scope.rmdatnDatelID1 = [];
//$scope.rmdatnDatelID1 = new Date();

 
$scope.imgCnvrsn1 = [];


$scope.selected_id_tstrslt1 = [];
$scope.selected_name_tstgrp1 = [];
$scope.selected_id_tstrslt = [];
$scope.selected_name_tstgrp = [];
//Test Results 
$scope.optionsTstrslt = [
  {
    id: 0,
    name: 'No Selection'
  },
  {
    id: 1,
    name: 'Pass'
  },
  {
    id: 2,
    name: 'Fail'
  },
  {
    id: 3,
    name: 'Does Not Apply'
  }

];


$scope.optionsTstrslt1 = [
  {
    id: 0,
    name: 'No Selection'
  },
  {
    id: 3,
    name: 'Does Not Apply'
  },
  {
    id: 4,
    name: 'Not Tested'
  }
];

$scope.optionsTstrslt2 = [
 {
    id: 0,
    name: 'No Selection'
  },
  {
    id: 1,
    name: 'Pass'
  },
  {
    id: 3,
    name: 'Does Not Apply'
  }

];


$scope.optionsTstrslt5 = [
  {
    id: 0,
    name: 'No Selection'
  },
  {
    id: 4,
    name: 'Not Tested'
  }
];

$scope.optionsTstrslt4 = [
 {
    id: 0,
    name: 'No Selection'
  },
  {
    id: 3,
    name: 'Does Not Apply'
  }

];

$scope.optionsTstrslt3 = [
  {
    id: 0,
    name: 'No Selection'
  },
  {
    id: 1,
    name: 'Pass'
  },
  {
    id: 2,
    name: 'Fail'
  }
];


$scope.selected_id1 = [];
$scope.selected_name1 = [];
$scope.selected_id = [];
$scope.selected_name = [];
$scope.selected_id_glbl = [];
$scope.selected_name_glbl = [];
$scope.selected_id_glbl1 = [ ];
$scope.selected_name_glbl1 = [ ];
$scope.optionsglbl = [
{
    id: 0,
    name: 'None'
  },
  {
    id: 1,
    name: 'Yes'
  },
  {
    id: 2,
    name: 'No'
  }

];
//Product types 
$scope.testProductTypes = [
  {
    id: 1,
    name: 'Custom developed web page'
  },
  {
    id: 2,
    name: 'COTS'
  },
  {
    id: 3,
    name: 'Customization of COTS product'
  },
  {
    id: 4,
    name: 'GOTS application'
  },
  {
    id: 5,
    name: 'Software'
  },
  {
    id: 6,
    name: 'Other'
  }
];

$scope.selected_name_ieVersn="";
$scope.selected_id_ieVersn = " ";
$scope.selected_id_ieVersn1 = [];
$scope.selected_name_ieVersn1 = [];
$scope.selected_id_ieVersn11 = [];
$scope.selected_name_ieVersn11 = [];
//Internet Explorer Versions 
$scope.optionieVersn = [{
    id: 0,
    name: 'Other'
  },
  {
    id: 1,
    name: '11'
  },
  {
    id: 2,
    name: '10'
  },
  {
    id: 3,
    name: '9'
  },
  {
    id: 4,
    name: '8'
  },
  {
    id: 5,
    name: '7'
  },
  {
    id: 6,
    name: 'None'
  }

];


$scope.selected_id_edVersn = " ";
$scope.selected_name_edVersn = " ";
$scope.selected_id_edVersn1 = [];
$scope.selected_name_edVersn1 = [];
$scope.selected_id_edVersn11 = [];
$scope.selected_name_edVersn11 = [];
//Edge Versions 
$scope.optionedVersn = [{
    id: 0,
    name: 'Other'
  },
  {
    id: 1,
    name: '84'
  },
  {
    id: 2,
    name: '83'
  },
  {
    id: 3,
    name: '82'
  },
  {
    id: 4,
    name: '81'
  },
  {
    id: 5,
    name: '80'
  },
  {
    id: 6,
    name: '41-79'
  },
  {
    id: 7,
    name: 'None'
  }

];

$scope.selected_id_chVersn = " ";
$scope.selected_name_chVersn = " ";
$scope.selected_id_chVersn1 = [];
$scope.selected_name_chVersn1 = [];
$scope.selected_id_chVersn11 = [];
$scope.selected_name_chVersn11 = [];
//Chrome versions 
$scope.optionchVersn = [{
    id: 0,
    name: 'Other'
  },
  {
    id: 1,
    name: '85'
  },
  
  {
    id: 2,
    name: '84'
  },
  {
    id: 3,
    name: '83'
  },
  {
    id: 4,
    name: '82'
  },
  {
    id: 5,
    name: '81'
  },
  {
    id: 6,
    name: '72-80'
  },
  {
    id: 7,
    name: '57-71'
  },
  {
    id: 8,
    name: 'None'
  }

];

$scope.selected_id_sfVersn = " ";
$scope.selected_name_sfVersn = " ";
$scope.selected_id_sfVersn1 = [];
$scope.selected_name_sfVersn1 = [];
$scope.selected_id_sfVersn11 = [];
$scope.selected_name_sfVersn11 = [];
//Safari versions 
$scope.optionsfVersn = [{
    id: 0,
    name: 'Other'
  },
  {
    id: 1,
    name: '14'
  },
  {
    id: 2,
    name: '13'
  },
  {
    id: 3,
    name: '12'
  },
  {
    id: 4,
    name: '11'
  },
  {
    id: 5,
    name: '10'
  },
  {
    id: 6,
    name: '9'
  },
  {
    id: 7,
    name: '1-8'
  },
  {
    id: 8,
    name: 'None'
  }

];



$scope.selected_id_fxVersn = " ";
$scope.selected_name_fxVersn = " ";
$scope.selected_id_fxVersn1 = [];
$scope.selected_name_fxVersn1 = [];
$scope.selected_id_fxVersn11 = [];
$scope.selected_name_fxVersn11 = [];
//Firefox versions 
$scope.optionfxVersn = [{
    id: 0,
    name: 'Other '
  },
  {
    id: 1,
    name: '80'
  },
  {
    id: 2,
    name: '79'
  },
  {
    id: 3,
    name: '78'
  },
  {
    id: 4,
    name: '77'
  },
  {
    id: 5,
    name: '76'
  },
  {
    id: 6,
    name: '75'
  }
  ,
  {
    id: 7,
    name: '58-74'
  }
  ,
  {
    id: 8,
    name: 'None'
  }


];

$scope.entOthrBrsrID = " ";
$scope.entOthrBrsrID1 = [];
$scope.entOthrBrsrID11 = [];
$scope.otherBrowser = false;
$scope.otherBrowser1 = [];
$scope.otherBrowser11 = [];
$scope.entOthrBrsrIDVrsn = " ";
$scope.entOthrBrsrID11 = [];
$scope.entOthrBrsrID111 = [];
$scope.selected_id_tstprcss = " ";
$scope.selected_name_tstprcss = " ";
//Testing methods 
$scope.optiontstprcss = [

  {
    id: 0,
    name: 'None'
  },

{
    id: 1,
    name: 'Trusted Tester'
  }
 
];

//Trusted tester versions 
$scope.optiontstvrsn = [
  {
    id: 0,
    name: 'None'
  },
{
    id: 1,
    name: 'V5'
  },
  {
    id: 2,
    name: 'V4'
  }
 
];


$scope.selected_id_cmpblty = " ";
$scope.selected_name_cmpblty = " ";

//Browser Compatibility 

$scope.optionscmpblty = [
{
    id: 0,
    name: 'None'
  },
  {
    id: 1,
    name: 'Turned On'
  },
  {
    id: 2,
    name: 'Turned Off'
  }
];

$scope.selected_id_wnVersn = " ";
$scope.selected_name_wnVersn = " ";
//Window Operating system versions 
$scope.optionwnVersn = [{
    id: 0,
    name: 'Other Windows'
  },
  {
    id: 1,
    name: 'Windows 10'
  },
  {
    id: 2,
    name: 'Windows 8'
  },
  {
    id: 3,
    name: 'Windows 7'
  },
  {
    id: 4,
    name: 'Window Vista'
  },
  {
    id: 5,
    name: 'Windows XP'
  },
  {
    id: 6,
    name: 'None'
  }
];

$scope.selected_id_iosVersn = " ";
$scope.selected_name_iosVersn = " ";
//Apple OSX Versions 
$scope.optioniosVersn = [{
    id: 0,
    name: 'Other OSX'
  }
  ,
  {
    id: 1,
    name: 'OSX 10.15'
  },
  {
    id: 2,
    name: 'OSX 10.14'
  },
  {
    id: 3,
    name: 'OSX 10.13'
  },
  {
    id: 4,
    name: 'OSX 10.12'
  },
  {
    id: 5,
    name: 'OSX 10.11'
  },
  {
    id: 6,
    name: 'OSX 10.10'
  },
  {
    id: 7,
    name: 'OSX 10.9'
  },
  {
    id: 8,
    name: 'None'
  }

];


   $scope.imgCnvrsn = [];
   $scope.imgCnvrsnDefault =[];
   $scope.imgCnvrsnCurrent =[];
   $scope.imgCnvrsnCurrentValue=[];
   $scope.imgCnvrsnCurrentValue1=[];
   $scope.imgCnvrsnCurrent1 =[];
   
   $scope.menu1 = [];
   $scope.RemarkExplntn = [];  
  $scope.default_dsbl_Impctd_grp = [];  
  $scope.default_compatibilitySetting = "";
  $scope.default_ieVersn="";
  $scope.default_edgVersn="";
  $scope.default_chrVersn="";
  $scope.default_sfVersn="";
  $scope.default_frfxVersn="";
  $scope.entOthrBrsrIDVrsn="";
  $scope.entOthrBrsrID="";
  $scope.entOthrWindID="";
  $scope.default_WindVrsn="";
  $scope.default_MacVrsn="";
  $scope.default_compatibility =""; 
  $scope.default_ieVersn1 = [];
  $scope.default_edgVersn1 = [];
  $scope.default_chrVersn1 = [];
  $scope.default_sfVersn1 = [];
  $scope.default_frfxVersn1 = [];
  $scope.def_entOthrBrsrIDVrsn1 = [];
  $scope.def_entOthrBrsrIDl = [];
  $scope.default_testResult1 = [];
  $scope.default_WindVrsn1 = [];
  $scope.default_MacVrsn1 = [];
  $scope.default_SelectedResult = [];
  $scope.default_glblRslt = [];  
  $scope.default_frfxVersn1 = [];	
  $scope.guideline = [];
$scope.loadclicked = 0;
$scope.otherBrowserID111 =[];
$scope.entOthrBrsrIDVrsn11 = []; 
$scope.submitMessage ="";
$scope.productID = " ";
$scope.ownerID = " ";
$scope.versionID = " ";
$scope.productType = " ";
$scope.urlID = " ";
$scope.flashID = " ";
$scope.evalMthd = " ";
$scope.prodDescID = " ";
$scope.prdNteDescID = " ";
$scope.myBrowser = " ";
$scope.myOpsys = " ";
$scope.compID = " ";
$scope.testScope = " ";  
$scope.testDate = " "; 
$scope.evalMethod = " ";
$scope.dateSubmitted = " ";
$scope.Guideline = " ";
$scope.Section508 = " ";
$scope.EN_Accessibility = " ";
$scope.entOthrWindID = " ";
$scope.tDateId = " ";
$scope.tDateId1 = "";
$scope.sbmtClicked = 0;
$scope.sbmtClickedMultiple = false;
$scope.sbmtClickedSingle = false;
$scope.issueNo = [];
$scope.testerCommentID = [];
$scope.disabilityGrp = [];
$scope.remarkID = [];
$scope.glbisue = [];
$scope.myWbTestResult = [];
$scope.webTestResult = [];
$scope.selected_id = [];
$scope.selected_option = [];
$scope.rmdatnDatelID = [];
$scope.rmdatnDatelIDCollection = [];
$scope.rmdatnDatelIDCollection1 = [];
$scope.rmdatnDtlID = [];
$scope.selected_name_tstgrp10 = [];
$scope.totTstRsltJson = [];
$scope.resultFailsCollection = [];
$scope.resultFails = [];
$scope.crtRsltCollection = [];
$scope.RemarkExplntnCollection = [];
  $scope.chkBoxValIE = false;
  $scope.chkBoxValEdg = false;
  $scope.chkBoxValChrm = false;
  $scope.chkBoxValSaf = false;
  $scope.chkBoxValFrfx = false;
  $scope.chkBoxValWin = false;
  $scope.chkBoxValMac = false;  
  $scope.def_entOthrBrsrIDVrsn1 = [];
  $scope.def_entOthrBrsrIDl = [];
  $scope.default_testResult1 = [];
  $scope.entOthrBrsrIDVrsn1 = [];
  $scope.default_WindVrsn1 = [];
  $scope.default_MacVrsn1 = [];
  $scope.default_SelectedResult = [];
  $scope.chkBoxValIE1 = [];
  $scope.chkBoxValEdg1 = [];
  $scope.chkBoxValChrm1 = [];
  $scope.chkBoxValSaf1 = [];
  $scope.chkBoxValFrfx1 = [];
 // $scope.entOthrBrsrIDl = [];
  $scope.chkBoxValOthrl = [];
  $scope.chkBoxValIE11 = [];
  $scope.chkBoxValEdg11 = [];
  $scope.chkBoxValChrm11 = [];
  $scope.chkBoxValSaf11 = [];
  $scope.chkBoxValFrfx11 = [];
 // $scope.entOthrBrsrIDl = [];
  $scope.chkBoxValOthrl1 = [];

  $scope.chkBoxValMac1 = [];
  $scope.chkBoxValWin1 = [];
  $scope.chkBoxValSafl = [];
  $scope.otherBrowserl = [];
  $scope.remarkID = [];
 // $scope.default_glblRslt = [];
  $scope.criteriaUnique = [];
  $scope.entOthrBrsrIDVrsn1 = [];
  $scope.entOthrBrsrIDl = [];
  $scope.testresult = [];
  $scope.testresult2 = [];
  $scope.totTstRslt = [];
  $scope.testresult1 = " ";
  $scope.criteriaName = " ";
  //$scope.counter = [];
  $scope.crtRsltCollection = [];
  $scope.crtCollection = [];
  $scope.brwsrVrsnColctn = [];
  $scope.brwsrVrsnColctn1 = [];
  $scope.browserVersionsCollection1 = [];
  $scope.browserVersionsCollection11 = [];
  $scope.browserTypeCollection1 = [];
  $scope.browserTypeCollection11 = [];
  $scope.grpIDCollection = [];
  $scope.selected_name_ieVersnl = [];
  $scope.selected_name_edVersnl = [];
  //$scope.selected_name_chVersnl=[];
  $scope.default_chrVersn1 = [];
  $scope.selected_name_sfVersnl = [];
  $scope.default_frfxVersn1 = [];
  $scope.selected_name_fxVersnl = [];
  $scope.productID = [];
  $scope.versionID = [];
  //$scope.versionID = "id";
  $scope.ownerID = [];
  $scope.productType = [];
  $scope.urlID = [];
 // $scope.prodDescID = [];
  $scope.prdNteDescID = [];
  $scope.firstname = [];
  $scope.lastname = " ";
  $scope.companyname = "";
  $scope.testerID = " ";
  $scope.myRole = [];
  $scope.testerContact = [];  
  $scope.evlMthdVrsn = "";
  $scope.addedIssueRow = [];
  $scope.entOthrBrsrIDVrsnl =[];
  //$scope.criteriaResult =[];
  $scope.criteriaResultPush = '';
  //$scope.dataLoaded = true;
  $scope.chkBoxValOthrBrwsr = [];
  $scope.chkBoxValOthrWndw = [];
  $scope.chkBoxValOthrBrwsr1 = false;
 $scope.chkBoxValOthrWndw1 = false;
 $scope.loadclicked = 0;
 $scope.imgCnvrsnJSON =[];
 $scope.displayIt = false;
 $scope.defaultDate=[];
 $scope.originalIssueRsltSelected = false; 
 $scope.newIssueRsltSelected = false;
 $scope.original = false;
 $scope.edit =  false;
 $scope.imageCaptured = [];
 $scope.imageCapturedStored =[];
 $scope.removeClicked =[];
 $scope.displayRemove =[];
 $scope.displayRemove1 =[];
 $scope.imageCaptured1 = [];
 $scope.removeClicked1 =[];
 	$scope.dataLoaded = false;
 $scope.updateJSON = false
//$scope.createEditOption = 'Please Select Approperiate JSON File';
//$scope.imageAdded = false;


 //$scope.testScope ="";
$scope.loadFile = function loadFile() {
  var input, file, fr;
   
  
  $scope.loadclicked= $scope.loadclicked+1;	
   if($scope.loadclicked == 1){      
       
 
  if (typeof window.FileReader !== 'function') {
    alert("Please use file browser which supports the file API.");
    return;
  }

  input = document.getElementById('fileinput');
  if (!input) {
    alert("Make sure you have a file input element.");
  } else if (!input.files) {
    alert("Please use browser that supports the `files` property of file inputs.");
  } else if (!input.files[0]) {
    alert("Please select JSON file first");
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
	//document.getElementById("instr").innerHTML = "";
	//document.getElementById("hideLoad").innerHTML = "";
	$scope.dataLoaded = true;
      if($scope.jsonData[0].Product.P_Name == " ")
      $scope.original = true;		  
	  $scope.productID = $scope.jsonData[0].Product.P_Name;	     
      $scope.versionID = $scope.jsonData[0].Product.P_Version;      
      $scope.ownerID = $scope.jsonData[0].Product.P_Owner;     
      $scope.productType = $scope.jsonData[0].Product.P_Type;     
      $scope.urlID = $scope.jsonData[0].Product.P_Location;     
      $scope.prodDescID = $scope.jsonData[0].Product.P_Desc;     
      $scope.prdNteDescID = $scope.jsonData[0].Product.P_Notes;     
    $scope.firstname = $scope.jsonData[0].Tester.T_fstnm;    
    $scope.lastname = $scope.jsonData[0].Tester.T_lstnm;  
    $scope.companyname = $scope.jsonData[0].Tester.T_companyname; 	
    $scope.testerID = $scope.jsonData[0].Tester.T_ID;    
    $scope.myRole = $scope.jsonData[0].Tester.T_Role;    
    $scope.testerContact = $scope.jsonData[0].Tester.T_cntc;	
    if($scope.jsonData[0].Tester.T_scope == undefined)	
	$scope.jsonData[0].Tester.T_scope='';
	$scope.testScope = $scope.jsonData[0].Tester.T_scope; 
	if($scope.jsonData[0].Tester.T_Date == undefined)
	$scope.jsonData[0].Tester.T_Date = '';
	$scope.testDate = $scope.jsonData[0].Tester.T_Date; 
	$scope.testDate = $scope.testDate.toString();
	//$scope.testDate = $scope.testDate ;
      //$scope.evlMthdVrsn = "V5"; //$scope.jsonData[0].Tester.T_evalMthd_Vrsn;	
      $scope.criteriaUnique = $scope.jsonData[0].SuccessCriteria;  
	  $scope.guidelinesAdded = false;
	  if($scope.original != true)
	  $scope.edit = true;
	  
/*	  
if($scope.original==true)
$scope.createEditOption = 'Create Report Test Results Form';   
else if($scope.original == false)
$scope.createEditOption = 'Edit Report Test Results Form';
*/
    //$scope.totCrtLngth = $scope.jsonData[0].Criteria.length;
     $scope.origSelectedResults = $scope.jsonData[0].Criteria.length; 
    
    /*
    for (let i = 0; i < $scope.origSelectedResults; i++) {
      $scope.menu1[i] = $scope.jsonData[0].Criteria[i].OptMenu1;
	  if ($scope.selected_name_tstgrp[i] == undefined) {
	  $scope.browseImageOption[i]=false;
  }
	 // $scope.imageAdded = false;
    }*/
    $scope.Mul_Issues1 = [];
	$scope.Mul_Issues2 = [];
    $scope.selectedResultIndex = '';
	$scope.addedResultIndex = '';
	$scope.draftReport = false;	
	$scope.browseImageOption =[];
	$scope.browseImageOption1=[];
	$scope.parentIssueSelected = 0;
	$scope.counterAddIssue =0;
	$scope.issueClicked =0;
	$scope.newlyAddedIssuePosition =[];
	$scope.addIssue = function(index) {    	
     if($scope.selected_name_tstgrp[index] !== undefined){			
	  $scope.newIssueRsltSelected = false;           
      $scope.parentIssueSelected = index;      
      $scope.insertRoww = [];	  
      $scope.addedRow[$scope.parentIssueSelected] = true;      
      $scope.indexCollection.push($scope.parentIssueSelected); 	
      $scope.childIssuePosition = $scope.parentIssueSelected+1;	               
	  if($scope.indexCollection.length>1){		   
	  let k= $scope.indexCollection.length-1;
	  let j = $scope.indexCollection.length -2;	      
	  if($scope.indexCollection[j] != $scope.indexCollection[k]){
	  $scope.counterAddIssue=0;	  
	 
	  }
	  }
	  $scope.counterAddIssue =$scope.counterAddIssue+1;	 
	  let sameIssue = $scope.childIssuePosition+'.'+$scope.counterAddIssue; 
      $scope.newlyAddedIssuePosition.push(sameIssue);
      $scope.Mul_Issues1[$scope.parentIssueSelected] = {
        "InsrtTestName": '' +'*'+ $scope.jsonData[0].Criteria[$scope.parentIssueSelected].TestName + '',
        "InsrtTestID": '' +'*'+ $scope.jsonData[0].Criteria[$scope.parentIssueSelected].TestID + '',
        "InsrtIndex": '' +'*'+ $scope.parentIssueSelected + '',		
		"InsrtDisabilityImpact": '"' + $scope.jsonData[0].Criteria[$scope.parentIssueSelected].DisabilityImpact + '"',	
        "InsrtGuideline": '"' + $scope.jsonData[0].Criteria[$scope.parentIssueSelected].Guideline + '"',			
        "InsrtTestCondition": '' +'*'+ $scope.jsonData[0].Criteria[$scope.parentIssueSelected].TestCondition + ''
      };  	  
	  
      $scope.Mul_Issues2[$scope.parentIssueSelected] = {
       /* "InsrtTestName": '' + $scope.jsonData[0].Criteria[$scope.parentIssueSelected].TestName + '',
	     "InsrtTestCondition": ''+ $scope.jsonData[0].Criteria[$scope.parentIssueSelected].TestCondition + '',
	    "InsrtIndex": '"'+ $scope.parentIssueSelected + '', */
        "InsrtTestID": ''+ $scope.jsonData[0].Criteria[$scope.parentIssueSelected].TestID+'' ,       		
		"InsrtDisabilityImpact": '' + $scope.jsonData[0].Criteria[$scope.parentIssueSelected].DisabilityImpact + '',	
        "InsrtGuideline": '' + $scope.jsonData[0].Criteria[$scope.parentIssueSelected].Guideline + ''			
       
      };  
      $scope.Mul_Issues.push($scope.Mul_Issues1[$scope.parentIssueSelected]);
	  $scope.Mul_Issues3.push($scope.Mul_Issues2[$scope.parentIssueSelected]);
      //console.log($scope.Mul_Issues3);
		 if ($scope.checkboxModel.alerts == "on")
			alert("Child issue has been added to the end of this table. Select ‘Go to Child Issues’ to jump to the first child issue.");
		}
	else {
    //if ($scope.checkboxModel.alerts == "on")		
	alert('Please select Test result for this test before adding new one.');
	}
	//$scope.parentIssueSelected = index;
	$scope.addedResultIndex = 'a'+index ;//+$scope.parentIssueSelected;	 
	$scope.issueClicked = $scope.issueClicked+1;	
	//$scope.successCriteriaFxn();
    };	
	
	$scope.goToParentIssue = function(index) {
	//index = index;	 	 
	 document.getElementById(index).focus();
	 
	}
	
	$scope.goToChildIssue = function(index) {		
		index='a'+index;		
		document.getElementById(index).focus();		 
	 //document.getElementById($scope.addedResultIndex).focus();
	 
	}
	

    $scope.removeIssue = function(index) {
       	let removePosition=index+$scope.origSelectedResults;	
		//if ($scope.checkboxModel.alerts == "on")
		alert('Issue Removed.');	
       //let rmve = confirm("Do you want to remove child issue ?");	
	   //if (rmve == true){ }
		$scope.removeIssueClicked = true;
      $scope.parentIssueSelected = $scope.parentIssueSelected-1;
	  $scope.counterAddIssue=$scope.counterAddIssue-1;
	  $scope.newIssueRsltSelected = true;
      $scope.addedRow[index] = false;
      $scope.Mul_Issues.splice(index, 1);
	  $scope.Mul_Issues3.splice(index, 1);
	  // document.getElementById("rmdTble").deleteRow(removePosition);	  
      $scope.indexCollection.splice(index, 1);
	  $scope.issueClicked=$scope.issueClicked-1;
	   
    }; 
	 if ($scope.jsonData[0].System.S_ie === 'Internet Explorer' ) {
        $scope.chkBoxValIE = true;
        $scope.checkboxModel.value1 = "Internet Explorer";
      } 
	  

      if ($scope.jsonData[0].System.S_edge === 'Edge' ) {
        $scope.chkBoxValEdg = true;
        $scope.checkboxModel.value5 = "Edge";
      }

      if ($scope.jsonData[0].System.S_chrome === 'Chrome' ) {
        $scope.chkBoxValChrm = true;
        $scope.checkboxModel.value2 = "Chrome";
      }

      if ($scope.jsonData[0].System.S_safari === 'Safari'  ) {
        $scope.chkBoxValSaf = true;
        $scope.checkboxModel.value3 = "Safari";
      }

      if ($scope.jsonData[0].System.S_firefox === 'Firefox' ) {
        $scope.chkBoxValFrfx = true;
        $scope.checkboxModel.value4 = "Firefox";
      }
	  
	  
     
      if ($scope.jsonData[0].System.S_other !== 'undefined') {
        $scope.chkBoxValOthrBrwsr1 = $scope.jsonData[0].System.S_other;		
		

      }
	  
	  if ($scope.jsonData[0].System.S_othrBrsVrsn !== 'undefined') {
        $scope.entOthrBrsrIDVrsn = $scope.jsonData[0].System.S_othrBrsVrsn;
		

      }
	  
	  if ($scope.jsonData[0].System.S_other !== 'undefined') {
        $scope.entOthrBrsrID = $scope.jsonData[0].System.S_othrBrsType;	

      }
	   

      if ($scope.jsonData[0].System.S_window === 'Window OS') {
        $scope.chkBoxValWin = true;
        $scope.checkboxModel.value6 = 'Window OS'
      }

      if ($scope.jsonData[0].System.S_mac === 'IOS') {
        $scope.chkBoxValMac = true;
        $scope.checkboxModel.value7 = 'IOS'
      }

	
	  $scope.default_compatibilitySetting = $scope.jsonData[0].System.S_Compatibility;
      $scope.default_ieVersn = $scope.jsonData[0].System.S_ieVrsh;		  
      $scope.default_edgVersn = $scope.jsonData[0].System.S_edgVrsn;      
      $scope.default_chrVersn = $scope.jsonData[0].System.S_chrVrsn;
       
      $scope.default_sfVersn = $scope.jsonData[0].System.S_sfVrsn;
     
      $scope.default_frfxVersn = $scope.jsonData[0].System.S_frfxVrsn;
     
      $scope.entOthrBrsrIDVrsn = $scope.jsonData[0].System.S_othrBrsVrsn;
     
      $scope.entOthrBrsrID = $scope.jsonData[0].System.S_othrBrsType;
     
      $scope.default_WindVrsn = $scope.jsonData[0].System.S_winVrsn;
     
      $scope.default_MacVrsn = $scope.jsonData[0].System.S_iosVrsn;   
     
      $scope.entOthrWindID = $scope.jsonData[0].System.S_otherOSType;
     
      $scope.entOthrWindVrsn = $scope.jsonData[0].System.S_otherOSVrsn;
     
      $scope.default_compatibility = $scope.jsonData[0].System.S_Compatibility;     
      $scope.default_evalMethod = $scope.jsonData[0].Tester.T_eval;  
	  $scope.selected_name_tstprcss = $scope.default_evalMethod;
	  
	  $scope.default_tstVrsn = $scope.jsonData[0].Tester.T_evalMthd_Vrsn;
      $scope.evlMthdVrsn = $scope.default_tstVrsn ;    
      $scope.default_productType = $scope.jsonData[0].Product.P_Type;	  
	  $scope.jsonData[0].System.S_other = $scope.jsonData[0].System.S_other.toString().trim();	  
	  if ($scope.jsonData[0].System.S_other === 'Other Browser' || $scope.jsonData[0].System.S_other === '  Other Browser  ' ){
       $scope.chkBoxValOthrBrwsr1 = true;
	   $scope.otherBrowser = true;	   
	  }
       
     if ($scope.jsonData[0].System.S_otherOSChked != 'undefined'){
     $scope.chkBoxValOthrWndw1 = $scope.jsonData[0].System.S_otherOSChked;	
	 if($scope.chkBoxValOthrWndw1=='Other window')
		 $scope.chkBoxValOthrWndw1= true;
	 else 
		  $scope.chkBoxValOthrWndw1= false;
	 }
 
  
	   if ($scope.tstIESelected == "IEClicked") {
        $scope.selected_name_ieVersn = $scope.selected_name_ieVersn;
      }
      if ($scope.tstIESelected != "IEClicked") {
        $scope.selected_name_ieVersn = $scope.default_ieVersn;
      }

      if ($scope.tstEdgeSelected == "EdgeClicked") {
        $scope.selected_name_edVersn = $scope.selected_name_edVersn;
      }
      if ($scope.tstEdgeSelected != "EdgeClicked") {
        $scope.selected_name_edVersn = $scope.default_edgVersn;
      }
      if ($scope.tstChromeSelected == "ChromeClicked") {
        $scope.selected_name_chVersn = $scope.selected_name_chVersn;
      }
      if ($scope.tstChromeSelected != "ChromeClicked") {
        $scope.selected_name_chVersn = $scope.default_chrVersn;
      }

      if ($scope.tstSafariSelected == "SafariClicked") {
        $scope.selected_name_sfVersn = $scope.selected_name_sfVersn;
      }
      if ($scope.tstSafariSelected != "SafariClicked") {
        $scope.selected_name_sfVersn = $scope.default_sfVersn;
      }

      if ($scope.tstFirefoxSelected == "FirefoxClicked") {
        $scope.selected_name_fxVersn = $scope.selected_name_fxVersn;
      }
      if ($scope.tstFirefoxSelected != "FirefoxClicked") {
        $scope.selected_name_fxVersn = $scope.default_frfxVersn;
      }

     
      if ($scope.compatibilitySelected == "CompbltySelected") {
        $scope.selected_name_cmpblty = $scope.selected_name_cmpblty;
      }
      if ($scope.compatibilitySelected != "CompbltySelected") {
        $scope.selected_name_cmpblty = $scope.default_compatibility;
      }

      if ($scope.tstWinOSSelected == "WinOSClicked") {
        $scope.selected_name_wnVersn = $scope.selected_name_wnVersn;
      }
      if ($scope.tstWinOSSelected != "WinOSClicked") {
        $scope.selected_name_wnVersn = $scope.default_WindVrsn;
      }

      if ($scope.tstIOSSelected == "IOSClicked") {
        $scope.selected_name_iosVersn = $scope.selected_name_iosVersn;
      }
      if ($scope.tstIOSSelected != "IOSClicked") {
        $scope.selected_name_iosVersn = $scope.default_MacVrsn;
      }
      $scope.imgDisplay = false;
      $scope.chooseFile = false;

      $scope.browserVersionClicked = [];
      $scope.browserTypeClicked = [];
      $scope.brsrChkBoxClicked = function(i) {
        $scope.browserVersionClicked[i] = true;
        $scope.browserTypeClicked[i] = true;
      }  
       $scope.criteriaResultOriginal = [];
	   $scope.counterCollection =[];
	  
     $scope.criteriaResultOriginal = $scope.criteriaResultOriginal.filter($scope.onlyUnique);
	  $scope.rmdatnDtlID =[];
              
	  
      for (let b = 0; b < $scope.origSelectedResults; b++) {
		  $scope.menu1[b] = $scope.jsonData[0].Criteria[b].OptMenu1;
	      /*if ($scope.selected_name_tstgrp[b] == undefined) {
	        $scope.browseImageOption[b]=false;
			//alert('a  :'+ $scope.browseImageOption[b]);
		  }
		  if ($scope.selected_name_tstgrp[b] == 'undefined') {
	        $scope.browseImageOption[b]=false;
			//alert('a  :'+ $scope.browseImageOption[b]);
		  } */
		  
		   if ($scope.jsonData[0].Criteria[b].DraftReport == 'true') {
          $scope.draftReport = true;          
        } 
		  $scope.issueNo[b] = $scope.jsonData[0].Criteria[b].IssueNo;
        $scope.menu1[b] = $scope.jsonData[0].Criteria[b].OptMenu1;
        $scope.def_entOthrBrsrIDVrsn1[b] = $scope.jsonData[0].Criteria[b].S_othrBrsVrsn;
        $scope.default_testResult1[b] = $scope.jsonData[0].Criteria[b].S_othrBrsType;

       // $scope.jsonData[0].Criteria[b].S_ie = $scope.jsonData[0].Criteria[b].S_ie.toString().trim();
       // if ($scope.jsonData[0].Criteria[b].S_ie === "Internet Explorer" || $scope.jsonData[0].Criteria[b].S_ie === "  Internet Explorer  ") {
		   if ($scope.jsonData[0].Criteria[b].S_ie === "Internet Explorer") {
          $scope.chkBoxValIE1[b] = true;
          $scope.checkboxModel.value14[b] = "Internet Explorer";	
           //$scope.chkBoxValIE11[b] = true;
          //$scope.checkboxModel.value141[b] = "Internet Explorer";			  
        }		
         //$scope.jsonData[0].Criteria[b].S_edge = $scope.jsonData[0].Criteria[b].S_edge.toString().trim();
        if ($scope.jsonData[0].Criteria[b].S_edge === "Edge" || $scope.jsonData[0].Criteria[b].S_edge === "  Edge  ") {
          $scope.chkBoxValEdg1[b] = true;
          $scope.checkboxModel.value51[b] = "Edge";
		  //$scope.chkBoxValEdg11[b] = true;
          //$scope.checkboxModel.value511[b] = "Edge";
        }
       // $scope.jsonData[0].Criteria[b].S_chrome = $scope.jsonData[0].Criteria[b].S_chrome.toString().trim();
        if ($scope.jsonData[0].Criteria[b].S_chrome === "Chrome" || $scope.jsonData[0].Criteria[b].S_chrome === "  Chrome  ") {
          $scope.chkBoxValChrm1[b] = true;
          $scope.checkboxModel.value21[b] = "Chrome"; 
		 // $scope.chkBoxValChrm11[b] = true;
          //$scope.checkboxModel.value211[b] = "Chrome"; 
        } 

       // if ($scope.jsonData[0].Criteria[b].S_safari === 'Safari') {
		  // $scope.jsonData[0].Criteria[b].S_safari = $scope.jsonData[0].Criteria[b].S_safari.toString().trim();
		   if ($scope.jsonData[0].Criteria[b].S_safari === "Safari" || $scope.jsonData[0].Criteria[b].S_safari === "  Safari  " ) {
          $scope.chkBoxValSaf1[b] = true;
          $scope.checkboxModel.value31[b] = "Safari";
		  // $scope.chkBoxValSaf11[b] = true;
          //$scope.checkboxModel.value311[b] = "Safari";
        }
		
		//$scope.jsonData[0].System.S_other = $scope.jsonData[0].System.S_other.toString().trim();
		 if ($scope.jsonData[0].Criteria[b].S_other === 'Other Browser' || $scope.jsonData[0].Criteria[b].S_other === '  Other Browser  ') {
          $scope.chkBoxValOthrl[b] = true;
		  $scope.chkBoxValOthrl1[b] = true;
          // $scope.checkboxModel.value31[c] = "Safari";
        }
		 //if ($scope.jsonData[0].System.S_chrome === 'Chrome') {
          //$scope.chkBoxValOthrWndw[b] = true;
          // $scope.checkboxModel.value31[c] = "Safari";
       // }
       // $scope.jsonData[0].Criteria[b].S_firefox = $scope.jsonData[0].Criteria[b].S_firefox.toString().trim();
        if ($scope.jsonData[0].Criteria[b].S_firefox === "Firefox" || $scope.jsonData[0].Criteria[b].S_firefox === "  Firefox  ") {
          $scope.chkBoxValFrfx1[b] = true;
          $scope.checkboxModel.value41[b] = "Firefox";

        }
 
        /*if ($scope.jsonData[0].Criteria[b].S_other != undefined) {
			
				$scope.entOthrBrsrIDl[b] = $scope.jsonData[0].System.S_othrBrsType;
			
        }*/
		//if($scope.jsonData[0].Criteria[b].TestResult != undefined)
        if($scope.jsonData[0].Criteria[b].TestResult != 'undefined'){			
        $scope.default_SelectedResult[b] = $scope.jsonData[0].Criteria[b].TestResult;        	
		$scope.browseImageOption[b]=true;
		}
		
		if ($scope.selected_name_tstgrp[b] == undefined) {
			if($scope.original == true)
	        $scope.browseImageOption[b]=false;		
		  }
		
		  /*if ($scope.selected_name_tstgrp[b] == 'undefined') {
	        $scope.browseImageOption[b]=false;		
		  }*/
		  
        $scope.selected_name_tstgrp[b] = $scope.default_SelectedResult[b];	
		if($scope.jsonData[0].Criteria[b].S_ieVrsh != 'undefined')
        $scope.default_ieVersn1[b] = $scope.jsonData[0].Criteria[b].S_ieVrsh;  
	    $scope.selected_name_ieVersn1[b] = $scope.default_ieVersn1[b];
         if($scope.jsonData[0].Criteria[b].S_edgeVrsn != 'undefined')		
        $scope.default_edgVersn1[b] = $scope.jsonData[0].Criteria[b].S_edgeVrsn;
	    $scope.selected_name_edVersn1[b] = $scope.default_edgVersn1[b];
		 if($scope.jsonData[0].Criteria[b].S_chromeVrsn != 'undefined')		
        $scope.default_chrVersn1[b] = $scope.jsonData[0].Criteria[b].S_chromeVrsn;
	    $scope.selected_name_chVersn1[b] = $scope.default_chrVersn1[b];
		 if($scope.jsonData[0].Criteria[b].S_sfVrsn != 'undefined')			
        $scope.default_sfVersn1[b] = $scope.jsonData[0].Criteria[b].S_sfVrsn;
	    $scope.selected_name_sfVersn1[b] = $scope.default_sfVersn1[b];
		 if($scope.jsonData[0].Criteria[b].S_firefoxVrsn != 'undefined')			
        $scope.default_frfxVersn1[b] = $scope.jsonData[0].Criteria[b].S_firefoxVrsn;
	    $scope.selected_name_fxVersn1[b] = $scope.default_frfxVersn1[b]; 
		 //if($scope.jsonData[0].Criteria[b].S_othrBrsVrsn != 'undefined')		
       // $scope.entOthrBrsrIDVrsn1[b] = $scope.jsonData[0].Criteria[b].S_othrBrsVrsn;	     
		 if($scope.jsonData[0].Criteria[b].location != 'undefined')
		$scope.location[b] = $scope.jsonData[0].Criteria[b].location;	    
        if($scope.jsonData[0].Criteria[b].TesterComment != 'undefined') 	
        $scope.testerCommentID[b] = $scope.jsonData[0].Criteria[b].TesterComment; 
	    if($scope.jsonData[0].Criteria[b].Counter!= undefined) 
	    $scope.counterCollection[b]= $scope.jsonData[0].Criteria[b].Counter; 
		
	    if($scope.jsonData[0].Criteria[b].Guideline != undefined){
		$scope.guidelinesAdded = true;
	    $scope.guideline[b] = $scope.jsonData[0].Criteria[b].Guideline;
	   }
        if($scope.jsonData[0].Criteria[b].RemediationDetails == undefined)	
		$scope.jsonData[0].Criteria[b].RemediationDetails = '';
	    if($scope.jsonData[0].Criteria[b].RemediationDetails != 'undefined')
        $scope.rmdatnDtlID[b] = $scope.jsonData[0].Criteria[b].RemediationDetails;	        	
	   //if($scope.jsonData[0].Criteria[b].RemediationDate != 'undefined')
		if($scope.jsonData[0].Criteria[b].RemediationDate == undefined)
			$scope.jsonData[0].Criteria[b].RemediationDate = '';
		if($scope.jsonData[0].Criteria[b].RemediationDate == null)
			$scope.jsonData[0].Criteria[b].RemediationDate = '';
        $scope.defaultDate[b] = $scope.jsonData[0].Criteria[b].RemediationDate;	        
        $scope.rmdatnDatelID[b] = new Date($scope.defaultDate[b]);	
		if($scope.rmdatnDatelID[b]=='Invalid Date')
			$scope.rmdatnDatelID[b]='';
		if($scope.rmdatnDatelID[b]=='Invalid Date')
			$scope.rmdatnDatelID[b]='';
        //alert($scope.rmdatnDatelIDCollection[b]);	
		if($scope.jsonData[0].Criteria[b].GlobalIssue != 'undefined')
        $scope.default_glblRslt[b] = $scope.jsonData[0].Criteria[b].GlobalIssue;
	    $scope.selected_name_glbl[b] = $scope.default_glblRslt[b];
		if($scope.jsonData[0].Criteria[b].S_othrBrsType != 'undefined')
        $scope.entOthrBrsrIDl[b] = $scope.jsonData[0].Criteria[b].S_othrBrsType;
		if($scope.jsonData[0].Criteria[b].S_othrBrsVrsn != 'undefined')
        $scope.entOthrBrsrIDVrsnl[b] = $scope.jsonData[0].Criteria[b].S_othrBrsVrsn;
		 if ($scope.jsonData[0].Criteria[b].S_other === 'Other Browser' || $scope.jsonData[0].Criteria[b].S_other === '  Other Browser  ' ){
        $scope.otherBrowserl[b] = true;
	    $scope.chkBoxValOthrl = true; 	   
	  }  
		 $scope.addedIssueRow[b] = $scope.jsonData[0].Criteria[b].AddedIssue; 
		 		 
		 //$scope.imgCnvrsnDefault = [];	
        if($scope.jsonData[0].Criteria[b].ImageSrc == "..")	$scope.jsonData[0].Criteria[b].ImageSrc = '.';
		if($scope.jsonData[0].Criteria[b].ImageSrc == "...")$scope.jsonData[0].Criteria[b].ImageSrc = '.';
		if($scope.jsonData[0].Criteria[b].ImageSrc == "....")	$scope.jsonData[0].Criteria[b].ImageSrc = '.';
		if($scope.jsonData[0].Criteria[b].ImageSrc == ".....")	$scope.jsonData[0].Criteria[b].ImageSrc = '.';
		if($scope.jsonData[0].Criteria[b].ImageSrc == "......")	$scope.jsonData[0].Criteria[b].ImageSrc = '.';
		if($scope.jsonData[0].Criteria[b].ImageSrc == ".......")$scope.jsonData[0].Criteria[b].ImageSrc = '.';	
		if($scope.jsonData[0].Criteria[b].ImageSrc == "........")$scope.jsonData[0].Criteria[b].ImageSrc = '.';	
		if($scope.jsonData[0].Criteria[b].ImageSrc == ".........")$scope.jsonData[0].Criteria[b].ImageSrc = '.';	
		if($scope.jsonData[0].Criteria[b].ImageSrc == "..........")	$scope.jsonData[0].Criteria[b].ImageSrc = '.';
		if($scope.jsonData[0].Criteria[b].ImageSrc == "...........")$scope.jsonData[0].Criteria[b].ImageSrc = '.';	
		if($scope.jsonData[0].Criteria[b].ImageSrc == "............")$scope.jsonData[0].Criteria[b].ImageSrc = '.';
        if($scope.jsonData[0].Criteria[b].ImageSrc == ".............")$scope.jsonData[0].Criteria[b].ImageSrc = '.';		
		if($scope.jsonData[0].Criteria[b].ImageSrc == "..............")	$scope.jsonData[0].Criteria[b].ImageSrc = '.';
		if($scope.jsonData[0].Criteria[b].ImageSrc == "...............")	$scope.jsonData[0].Criteria[b].ImageSrc = '.';
		if($scope.jsonData[0].Criteria[b].ImageSrc == "................")	$scope.jsonData[0].Criteria[b].ImageSrc = '.';
		if($scope.jsonData[0].Criteria[b].ImageSrc == ".................")	$scope.jsonData[0].Criteria[b].ImageSrc = '.';
		if($scope.jsonData[0].Criteria[b].ImageSrc == "..................")	$scope.jsonData[0].Criteria[b].ImageSrc = '.';
		if($scope.jsonData[0].Criteria[b].ImageSrc == "...................")	$scope.jsonData[0].Criteria[b].ImageSrc = '.';
		if($scope.jsonData[0].Criteria[b].ImageSrc == "....................")	$scope.jsonData[0].Criteria[b].ImageSrc = '.';
		if($scope.jsonData[0].Criteria[b].ImageSrc == ".....................")	$scope.jsonData[0].Criteria[b].ImageSrc = '.';
		if($scope.jsonData[0].Criteria[b].ImageSrc == "......................")	$scope.jsonData[0].Criteria[b].ImageSrc = '.';
		if($scope.jsonData[0].Criteria[b].ImageSrc == ".......................")	$scope.jsonData[0].Criteria[b].ImageSrc = '.';
		if($scope.jsonData[0].Criteria[b].ImageSrc == "........................")	$scope.jsonData[0].Criteria[b].ImageSrc = '.';
		if($scope.jsonData[0].Criteria[b].ImageSrc == ".........................")	$scope.jsonData[0].Criteria[b].ImageSrc = '.';
	
		 if($scope.jsonData[0].Criteria[b].ImageSrc != undefined){
		 if($scope.jsonData[0].Criteria[b].ImageSrc != '.')	{          		 
		 $scope.imgCnvrsnDefault.push('{"imgPosition" : "'+ b+'"', '"imgValue" :"'+ $scope.jsonData[0].Criteria[b].ImageSrc +'"}');	
		  $scope.imageCapturedStored[b] = true;
		  $scope.displayRemove[b] = true;
		   $scope.imageCaptured[b]= false;
          $scope.removeClicked[b] =  false;		
		  $scope.imageCaptured1[b]= false;
          $scope.removeClicked1[b] =  false;		
      		  
		 } 
		 } 
           
		 //continue;
	     //else 
		 
        // if(b != b-1) {   
        // if($scope.jsonData[0].Criteria[b].ImageSrc == '.')	
		 //continue;
         //else 			 
		
		// }		
	   //$scope.imgCnvrsn = $scope.imgCnvrsn.filter($scope.onlyUnique);  				
	   }
	   $scope.imgCnvrsn = $scope.imgCnvrsn.concat($scope.imgCnvrsnDefault);
	   $scope.imgCnvrsnDefault=[];
	   //$scope.imgCnvrsn.concat($scope.imgCnvrsnDefault);
       $scope.displayIt = true;
	    if($scope.original == true ){
		  $scope.submitMessage = "Upon saving, the file will be located in the system's Downloads folder by default.";
		  
	}
	
	  if($scope.edit == true ){
		  $scope.submitMessage = "File was saved on "+  $scope.testDate;
	}
	  // if ($scope.checkboxModel.alerts == "on")
       //alert('Data has been loaded');	 
   if($scope.default_evalMethod== undefined)
	   $scope.default_evalMethod='';
   if($scope.default_evalMethod== 'undefined')
	   $scope.default_evalMethod='';
   if($scope.default_tstVrsn == 'undefined')
	   $scope.default_tstVrsn ='';   
   if($scope.default_tstVrsn == undefined)
	   $scope.default_tstVrsn ='';   
      document.getElementById("msg").innerHTML = "<b>You have successfully loaded the "+ $scope.default_evalMethod+" "+ $scope.default_tstVrsn +" file </b>. Please edit/update file as needed. To load a different file, <b>reload</b> this page.";     
      alert('To save file changes, select the keyboard shortcut (ctrl + z) or Save button located at the bottom of the page.');
	if($scope.default_tstVrsn == "undefined"  )
	  $scope.updateJSON = true; 
   if($scope.default_tstVrsn == undefined  )
	   $scope.updateJSON = true;
	if($scope.default_tstVrsn === "V5"  )
	 $scope.updateJSON = true;  
   if($scope.default_tstVrsn === "V4")
	   $scope.updateJSON = true;  
   if($scope.default_tstVrsn === "v.5"  )
     $scope.updateJSON = false;
   if($scope.default_tstVrsn === "v.4"  )
     $scope.updateJSON = false;
      //alert('Recommend to use latest JSON file');	
	if($scope.updateJSON == true) 
   alert('An updated JSON template is available. However, you may continue to use your current template.');
   if($scope.guidelinesAdded != true)
	alert('Please use updated JSON template to see standard/guideline for success criteria');
 }
  
    
 
  
}
  
	  
  
setTimeout(function() {
		$scope.$apply();   
   }, 500);
}



function KeyPress(e) {	  
      var evtobj = window.event? event : e
	  if($scope.dataLoaded == true){
        //if (evtobj.keyCode == 89 && evtobj.ctrlKey) document.getElementById("fileinput").click();  //ctrl+y to select file		  
	  //if (evtobj.keyCode == 88 && evtobj.ctrlKey) { document.getElementById($scope.addedResultIndex).focus(); }  //ctrl+x to focus newly added issues	  
	  //if (evtobj.keyCode == 89 && evtobj.ctrlKey) {document.getElementById($scope.parentIssueSelected).focus();  alert($scope.parentIssueSelected);}  //ctrl+y to focus parent issues
	  if (evtobj.keyCode == 90 && evtobj.ctrlKey) document.getElementById("sbtBtn").click();  //ctrl+z to save 
	  }
}

document.onkeydown = KeyPress;

 $scope.selected_name_rmdtn="";
$scope.remediationDetails = function() {	      
	 // if($scope.crtRsltCollection.length == 0) 
	   //scope.displayIt = false;
        if($scope.selected_name_rmdtn == 'Yes'){
			if($scope.displayIt == false)
			alert('Please select the appropriate JSON file to  add remediation details.'); 
		    /*if ($scope.checkboxModel.alerts == "on")
		    alert('Column for Remediation Details Added.'); */
			show_hide_column(10, true);
			show_hide_column(11, true);
		}
		if($scope.selected_name_rmdtn == 'No'){
			/*if($scope.displayIt == false)
			alert('Please select the approperiate JSON file to  add remediation details.') */
		    /* if ($scope.checkboxModel.alerts == "on")
		    alert('Column for Remediation Details Removed.'); */
		show_hide_column(10, false);
		show_hide_column(11, false);	
		}
			
    };
 

$scope.defaultExpand = function defaultExpand() {  
  document.getElementById("aplType").click();
}

$scope.draftReport = false;
$scope.remarkExplanation = function(i) {

  if ($scope.selected_name_tstgrp[i] == undefined) {
    $scope.draftReport = true;	
	//$scope.newRsltSlctrion ==  true;
    $scope.RemarkExplntn[i] = ['{"crtId": "' + $scope.criteriaTestsJson.Criteria[i].CrtID + '", "explanation":"' + "Test Result is not selected for this " + '"}'];
    $scope.RemarkExplntnCollection.push($scope.RemarkExplntn[i]);    
    $scope.crtCollection.push($scope.criteriaTestsJson.Criteria[i].CrtID);
    //$scope.crtCollection.push($scope.criteriaTestsJson.Criteria[i].CrtID);
    if ($scope.rmdatnDtlID[i] == undefined)
      $scope.rmdatnDtlID[i] = " ";
   // $scope.testresult[i] = $scope.testresult[i] +  '","RemediationDetails": "' + $scope.rmdatnDtlID[i]+ '","DraftReport": "' + $scope.draftReport + '"}';
  }
  else if ($scope.selected_name_tstgrp[i] == 'undefined') {
    $scope.draftReport = true;	
	//$scope.newRsltSlctrion ==  true;
    $scope.RemarkExplntn[i] = ['{"crtId": "' + $scope.criteriaTestsJson.Criteria[i].CrtID + '", "explanation":"' + "Test Result is not selected for this " + '"}'];
    $scope.RemarkExplntnCollection.push($scope.RemarkExplntn[i]);    
    $scope.crtCollection.push($scope.criteriaTestsJson.Criteria[i].CrtID);
    //$scope.crtCollection.push($scope.criteriaTestsJson.Criteria[i].CrtID);
    if ($scope.rmdatnDtlID[i] == undefined)
      $scope.rmdatnDtlID[i] = " ";
   // $scope.testresult[i] = $scope.testresult[i] +  '","RemediationDetails": "' + $scope.rmdatnDtlID[i]+ '","DraftReport": "' + $scope.draftReport + '"}';
  }

  else if ($scope.selected_name_tstgrp[i] == "Pass") {
	$scope.draftReport = false;	
    $scope.resultFails[i] = false;
    $scope.resultFailsCollection.push($scope.resultFails[i]);
    $scope.RemarkExplntn[i] = ['{"crtId": "' + $scope.criteriaTestsJson.Criteria[i].CrtID + '", "explanation":"' + "All Test Conditions Successfully PassESed " + '"}'];
    $scope.RemarkExplntnCollection.push($scope.RemarkExplntn[i]);
    //$scope.RemarkExplntnCollection.push( '{"crtId": "'+$scope.criteriaTestsJson.Criteria[i].CrtID+'", "explanation":"'+ "All Test Condition Successfully PassESed " +'"}' );
    $scope.crtRsltCollection.push($scope.selected_name_tstgrp[i]);
    $scope.crtCollection.push($scope.criteriaTestsJson.Criteria[i].CrtID);
    $scope.rmdatnDtlID[i] = "Not Required";
   //$scope.testresult[i] = $scope.testresult[i] +'","RemediationDate": "' + $scope.rmdatnDatelID[i] + '","RemediationDetails": "' + $scope.rmdatnDtlID[i]+  '"}';
  }
  else if ($scope.selected_name_tstgrp[i] == "Fail") {
	$scope.draftReport = false;	
    $scope.resultFails[i] = true;
    $scope.resultFailsCollection.push($scope.resultFails[i]);
    $scope.testerCommentID[i] = $scope.testerCommentID[i].replace(/"/g, "'");
    $scope.RemarkExplntn[i] = ['{"crtId": "' + $scope.criteriaTestsJson.Criteria[i].CrtID + '", "explanation":"' + "For " + $scope.criteriaTestsJson.Criteria[i].TestName + ". " + $scope.testerCommentID[i] + '"}'];
    $scope.RemarkExplntnCollection.push($scope.RemarkExplntn[i]);
    $scope.crtRsltCollection.push($scope.selected_name_tstgrp[i]);
    $scope.crtCollection.push($scope.criteriaTestsJson.Criteria[i].CrtID);
    /*if ($scope.rmdatnDtlID[i] == undefined)
      $scope.rmdatnDtlID[i] = " ";*/
    //$scope.testresult[i] = $scope.testresult[i] +'","RemediationDate": "' + $scope.rmdatnDatelID[i] + '","RemediationDetails": "' + $scope.rmdatnDtlID[i] + '"}';
  }
  else if ($scope.selected_name_tstgrp[i] == "Does Not Apply") {
	$scope.draftReport = false;
    $scope.resultFails[i] = false;		
    $scope.resultFailsCollection.push($scope.resultFails[i]);

    $scope.RemarkExplntn[i] = ['{"crtId": "' + $scope.criteriaTestsJson.Criteria[i].CrtID + '", "explanation":"' + " This test is not required " + '"}'];
    $scope.RemarkExplntnCollection.push($scope.RemarkExplntn[i]);
    $scope.rmdatnDtlID[i] = "Not Required";
    $scope.crtRsltCollection.push($scope.selected_name_tstgrp[i]);
    $scope.crtCollection.push($scope.criteriaTestsJson.Criteria[i].CrtID);

   // $scope.testresult[i] = $scope.testresult[i] +'","RemediationDate": "' + $scope.rmdatnDatelID[i] + '","RemediationDetails": "' + $scope.rmdatnDtlID[i] + '"}';
  }
  else if ($scope.selected_name_tstgrp[i] == "Not Tested") {
	  $scope.draftReport = false;
    $scope.resultFails[i] = false;	
    $scope.resultFailsCollection.push($scope.resultFails[i]);
    
    $scope.RemarkExplntn[i] = ['{"crtId": "' + $scope.criteriaTestsJson.Criteria[i].CrtID + '", "explanation":"' + " One or more test conditions Not Tested " + '"}'];
    $scope.RemarkExplntnCollection.push($scope.RemarkExplntn[i]);
    $scope.crtRsltCollection.push($scope.selected_name_tstgrp[i]);
    $scope.crtCollection.push($scope.criteriaTestsJson.Criteria[i].CrtID);
    
  } 
  $scope.rmdatnDatelIDCollection[i] =  new Date($scope.rmdatnDatelID[i]);
  //$scope.rmdatnDatelIDCollection[i] = $scope.rmdatnDatelIDCollection[i].toString();
  if($scope.rmdatnDatelIDCollection[i] == null)
		$scope.rmdatnDatelIDCollection[i]='';
   if($scope.rmdatnDatelIDCollection[i] == undefined)
		$scope.rmdatnDatelIDCollection[i]='';
	if($scope.rmdatnDatelIDCollection[i] == 'undefined')
		$scope.rmdatnDatelIDCollection[i]='';  
	if($scope.rmdatnDatelIDCollection[i] == 'Invalid Date')
		$scope.rmdatnDatelIDCollection[i]=''; 
  	if($scope.rmdatnDatelIDCollection[i] == 'Wed Dec 31 1969 19:00:00 GMT-0500 (Eastern Standard Time)')
		$scope.rmdatnDatelIDCollection[i]='';

	
	
	if($scope.rmdatnDtlID[i] == undefined) $scope.rmdatnDtlID[i]='';    
    if($scope.rmdatnDtlID[i] == 'undefined') $scope.rmdatnDtlID[i]='';	
    $scope.rmdatnDtlID[i] = $scope.rmdatnDtlID[i].toString().replace(/"/g, "'").trim();
   $scope.rmdatnDtlID[i] = $scope.rmdatnDtlID[i].toString().replace(/\n/g, " ");
	
   $scope.testresult[i] = $scope.testresult[i] +'","RemediationDate": "' + $scope.rmdatnDatelIDCollection[i] +  '","RemediationDetails": "' + $scope.rmdatnDtlID[i]+ '","DraftReport": "' + $scope.draftReport + '"}';
  
};
$scope.uploadImageClicked1 = false; 


$scope.uploadImage = function(element ) { 
$scope.uploadImageClicked1 = false;  
  var file = element.files[0];
  var reader = new FileReader();
  reader.onloadend = function() {
	 $scope.imgPos =0;
   if(element != null ) {
    let imgPstn = element.closest('tr').rowIndex;	
    imgPstn = imgPstn-1; 	  		 
    $scope.imageCaptured[imgPstn] = true;
	$scope.imgCnvrsnCurrentValue[imgPstn]= reader.result;	
	 $scope.imgCnvrsnCurrent.push('{"imgPosition" : "'+ imgPstn +'"', '"imgValue" :"'+ reader.result+'"}');  
	 $scope.imgCnvrsn = $scope.imgCnvrsn.concat($scope.imgCnvrsnCurrent);	
	 $scope.imgCnvrsnCurrent = [];	
     $scope.imageCapturedStored[imgPstn]= false;
     $scope.removeClicked[imgPstn] =  false;      	
     $scope.displayRemove[imgPstn]=true;	 
    setTimeout(function() {
		$scope.$apply();   
   }, 500);	 
    
  }
  
  }
  reader.readAsDataURL(file);
 
} 


//inserting image at approperiate position for newly inserted issues
$scope.uploadImage1 = function(element ) { 
$scope.uploadImageClicked1 = true;  
  var file = element.files[0];
  var reader = new FileReader();
  reader.onloadend = function() {	  
   if(element != null ) {	   
    let imgPstn = element.closest('tr').rowIndex;
	imgPstn = imgPstn -1;
	let imgPos = imgPstn-$scope.origSelectedResults;      
	 $scope.imageCaptured1[imgPos] = true;	  
     $scope.removeClicked1[imgPos] =  false;	
     $scope.displayRemove1[imgPos] = true;	 
	 $scope.imgCnvrsnCurrentValue1[imgPos]= reader.result;	    
     $scope.imgCnvrsnCurrent1.push('{"imgPosition" : "'+ imgPstn +'"', '"imgValue" :"'+ reader.result+'"}');  	
	 $scope.imgCnvrsn1 = $scope.imgCnvrsn1.concat($scope.imgCnvrsnCurrent1);	
	$scope.imgCnvrsnCurrent1 = [];
	setTimeout(function() {
		$scope.$apply();   
   }, 500);	 
  }  
  }
  reader.readAsDataURL(file);

} 


  $scope.removeImage = function(index) { 
         //let remPosition = index+1; 
         $scope.imgCnvrsn.splice(index, 2);		 
        // $scope.imageCaptured[index]= false;
		  //$scope.imgCnvrsn[index]= '"imgValue" :"."}';		                 		  
          //$scope.imgCnvrsn.splice(index, 2); //removed image and select another image        	 
		  //$scope.imgCnvrsn.splice(index, 2,'{"imgPosition" : "'+ index +'"', '"imgValue" :"."}');		  
          $scope.imgCnvrsnCurrentValue[index]=".";	
         $scope.imageCapturedStored[index]= false;
         $scope.imageCaptured[index]= false;
         $scope.removeClicked[index] =  true;	
		 $scope.displayRemove[index] = false;
		  //$scope.imgCnvrsn.splice(remPosition, 1, '"imgValue" :"."}'); //removed image and don't select another image               		
		//if ($scope.checkboxModel.alerts == "on") 
		//alert("Image Removed");		
	} 
	
	    $scope.removeImage1 = function(index) {			
		 $scope.imageCaptured[index]= false;
		//$scope.imgCnvrsn1.splice(index, 1, '"imgValue" :"."}'); 
         $scope.imgCnvrsn1.splice(index, 2); //removed image and don't select another image	 
        //$scope.imgCnvrsn.splice(index, 2,'{"imgPosition" : "'+ index +'"', '"imgValue" :" "}');		
        $scope.imgCnvrsnCurrentValue1[index]=".";	
		$scope.imageCaptured1[index]= false;
         $scope.removeClicked1[index] =  true;
		 $scope.displayRemove1[index] = false;
		
		//if ($scope.checkboxModel.alerts == "on") 
		//alert("Image Removed");	
		
	} 

 
$scope.elementIsClicked3 = " ";

$scope.elemntClicked4 = function(i) {
$scope.newIssueRsltSelected = true;
$scope.browseImageOption1[i]=true;
$scope.addedIssueRsltSelected = true;
//if ($scope.checkboxModel.alerts == "on")
//alert('Browse & Remove Image option added in "Screenshot Column"');

}  


 $scope.elemntClicked2 = function(i) {
  $scope.browseImageOption[i]=true;
  $scope.elementIsClicked3 = "RsltSelected" + i;
  if($scope.selected_name_tstgrp[i] != undefined){
  $scope.originalIssueRsltSelected = true;  
  }
  else if($scope.selected_name_tstgrp[i] != 'undefined'){
  $scope.originalIssueRsltSelected = true;  
  }
 //if ($scope.checkboxModel.alerts == "on")
//alert('Browse & Remove Image option added in "Screenshot Column"');

}
 

//called when selecting newly added test result. 
//$scope.newIssueRsltSelected = false;  



 $scope.rmdatnDtlID1=[];  
 $scope.rmdatnDatelID1 =[];
 $scope.rmdatnDatelIDCollection1 = [];

$scope.submit = function() {
//$scope.rmdatnDtlID1 =[];	
	
  
  $scope.tDateId = new Date();
  $scope.tDateId=$scope.tDateId.toString();
  $scope.criteriaTests = " ";
  $scope.criteriaTestsJson = [];
  $scope.draftReport = false;
  
  $scope.jsonData.forEach(function(row) {
    $scope.criteriaTests = JSON.stringify(row);
    $scope.criteriaTestsJson = row;
  });
  $scope.criteriaTestsNumber = $scope.selected_name_tstgrp.length;
  $scope.testresult = [];
  $scope.testresult2 = [];
  $scope.totTstRslt = [];
  $scope.testresult1 = " ";
  $scope.criteriaName = " ";
  $scope.counter =0;
  //$scope.counterCollection = [];  
  $scope.crtCollection = [];
  $scope.brwsrVrsnColctn = [];
  $scope.brwsrVrsnColctn1 = [];
  $scope.browserVersionsCollection1 = [];
  $scope.browserVersionsCollection11 = [];
  $scope.browserTypeCollection1 = [];
  $scope.browserTypeCollection11 = [];
  $scope.grpIDCollection = [];
  $scope.counter10 = " ";
  $scope.browserIndividualVersionsCollection11 = [];
  $scope.browserIndividualTypeCollection11 = [];
  
  $scope.entOthrBrsrIDl1 = [];   
  $scope.totTestCrtria = [];  
  $scope.fpcMapping =[];  
  //$scope.imgCnvrsn = $scope.imgCnvrsn.filter($scope.onlyUnique);  
    
  
  $scope.imgCnvrsnJSON = "[ "+$scope.imgCnvrsn+ " ]";
 //document.write( $scope.imgCnvrsnJSON );
  $scope.imgCnvrsnJSON = IsJsonString($scope.imgCnvrsnJSON);  
  
  
  //$scope.imgCnvrsn1 = $scope.imgCnvrsn1.filter($scope.onlyUnique); 
  $scope.imgCnvrsnJSON1 = "[ "+$scope.imgCnvrsn1+ " ]";
 // document.write($scope.imgCnvrsnJSON1);
  $scope.imgCnvrsnJSON1 = IsJsonString($scope.imgCnvrsnJSON1);  
  
 
  for (i = 0; i < $scope.criteriaTestsJson.Criteria.length; i++) {	  
	
  if($scope.ieChekBoxVal[i] == "ieChekBox"){
  if($scope.chkBoxValIE1[i] == true )  
  $scope.checkboxModel.value14[i] = "Internet Explorer";
  if($scope.chkBoxValIE1[i] == false )  
  $scope.checkboxModel.value14[i] = " ";
  }
  if($scope.checkboxModel.value14[i] == undefined)
  $scope.checkboxModel.value14[i]="";
  if($scope.checkboxModel.value14[i] == 'undefined')
  $scope.checkboxModel.value14[i]="";
  
  
  if($scope.edgChekBoxVal[i] == "edgChekBox"){
  if($scope.chkBoxValEdg1[i] == true )  
  $scope.checkboxModel.value51[i] = "Edge";
  if($scope.chkBoxValEdg1[i] == false )  
  $scope.checkboxModel.value51[i] = " ";
  }
   if($scope.checkboxModel.value51[i] == undefined)
  $scope.checkboxModel.value51[i]="";
  if($scope.checkboxModel.value51[i] == 'undefined')
  $scope.checkboxModel.value51[i]="";
  
  if($scope.frfxChekBoxVal[i] == "frfxChekBox"){
  if( $scope.chkBoxValFrfx1[i] == true )  
  $scope.checkboxModel.value41[i] = "Firefox";
  if( $scope.chkBoxValFrfx1[i] == false )  
  $scope.checkboxModel.value41[i] = " ";
  }
   if($scope.checkboxModel.value41[i] == undefined)
  $scope.checkboxModel.value41[i]="";
  if($scope.checkboxModel.value41[i] == 'undefined')
  $scope.checkboxModel.value41[i]="";
  
  if($scope.chromeChekBoxVal[i] == "chromeChekBox"){
  if($scope.chkBoxValChrm1[i] == true )  
  $scope.checkboxModel.value21[i] = "Chrome";
  if($scope.chkBoxValChrm1[i] == false )  
  $scope.checkboxModel.value21[i] = " ";
  }
   if($scope.checkboxModel.value21[i] == undefined)
  $scope.checkboxModel.value21[i]="";
  if($scope.checkboxModel.value21[i] == 'undefined')
  $scope.checkboxModel.value21[i]="";
  
  if($scope.safariCheckBoxVal[i] == "safariChekBox"){
  if($scope.chkBoxValSaf1[i] == true )  
  $scope.checkboxModel.value31[i] = "Safari";
  if($scope.chkBoxValSaf1[i] == false )  
  $scope.checkboxModel.value31[i] = " ";
  }
   if($scope.checkboxModel.value31[i] == undefined)
  $scope.checkboxModel.value31[i]="";
  if($scope.checkboxModel.value31[i] == 'undefined')
  $scope.checkboxModel.value31[i]="";
  
 
  if($scope.chkBoxValothr[i] == "otherChekBox"){
  if($scope.otherBrowser1[i] == true )  
  $scope.otherBrowser1 = "Other Browser";
  if($scope.otherBrowser1[i] == false )  
  $scope.otherBrowser1= " ";
  $scope.entOthrBrsrIDl[i] = $scope.entOthrBrsrIDl[i];
  }
   if($scope.otherBrowser1[i] == undefined)
  $scope.otherBrowser1[i]="";
  if($scope.otherBrowser1[i] == 'undefined')
  $scope.otherBrowser1[i]="";

 if($scope.dateSelected[i] == "dateClicked")
  $scope.rmdatnDatelIDCollection[i]= new Date($scope.rmdatnDatelID[i]);
  if($scope.dateSelected[i] != "dateClicked")
  $scope.rmdatnDatelIDCollection[i]= new Date($scope.rmdatnDatelID[i]);
  if($scope.rmdatnDatelIDCollection[i] == undefined)
		$scope.rmdatnDatelIDCollection[i]='';
	if($scope.rmdatnDatelIDCollection[i] == 'undefined')
		$scope.rmdatnDatelIDCollection[i]='';
	if($scope.rmdatnDatelIDCollection[i] == 'Invalid Date')
		$scope.rmdatnDatelIDCollection[i]='';  
	

 /* 
  if($scope.dateSelected[i] == "dateClicked")
  $scope.rmdatnDatelID[i]=$scope.rmdatnDatelID[i];
  if($scope.dateSelected[i] != "dateClicked")
  $scope.rmdatnDatelID[i]=$scope.defaultDate[i];
   $scope.rmdatnDatelID[i] = $scope.rmdatnDatelID[i].toString();
  if($scope.rmdatnDatelID[i] == undefined)
		$scope.rmdatnDatelID[i]='';
	if($scope.rmdatnDatelID[i] == 'undefined')
		$scope.rmdatnDatelID[i]='';
*/
  
  /*
  $scope.defaultDate[i]=$scope.rmdatnDatelID[i];
  if($scope.rmdatnDatelID[i] == undefined)
  $scope.checkboxModel.rmdatnDatelID[i]="";
  if($scope.rmdatnDatelID[i] == 'undefined')
  $scope.rmdatnDatelID[i]=""; 
   // $scope.rmdatnDatelID[i] = $scope.defaultDate[i];
   */
    
   
    if($scope.selected_name_ieVersn1[i] == undefined)
		$scope.selected_name_ieVersn1[i]='';
	if($scope.selected_name_edVersn1[i] == undefined)
		$scope.selected_name_edVersn1[i]='';
	if($scope.selected_name_chVersn1[i] == undefined)
		$scope.selected_name_chVersn1[i]='';
	if($scope.selected_name_sfVersn1[i] == undefined)
		$scope.selected_name_sfVersn1[i]='';
	if($scope.selected_name_fxVersn1[i] == undefined)
		$scope.selected_name_fxVersn1[i]=''; 
	if($scope.selected_name_ieVersn1[i] == 'undefined')
		$scope.selected_name_ieVersn1[i]='';
	if($scope.selected_name_edVersn1[i] == 'undefined')
		$scope.selected_name_edVersn1[i]='';
	if($scope.selected_name_chVersn1[i] == 'undefined')
		$scope.selected_name_chVersn1[i]='';
	if($scope.selected_name_sfVersn1[i] == 'undefined')
		$scope.selected_name_sfVersn1[i]='';
	if($scope.selected_name_fxVersn1[i] == 'undefined')
		$scope.selected_name_fxVersn1[i]=''; 	
	if($scope.entOthrBrsrIDVrsnl[i] == undefined)
		$scope.entOthrBrsrIDVrsnl[i]='';
	if($scope.entOthrBrsrIDVrsnl[i] == 'undefined')
		$scope.entOthrBrsrIDVrsnl[i]='';
	if($scope.entOthrBrsrIDl[i] == undefined)
		$scope.entOthrBrsrIDl[i]='';
	if($scope.entOthrBrsrIDl[i] == 'undefined')
		$scope.entOthrBrsrIDl[i]='';	
	if($scope.otherBrowserl[i] == undefined)
		$scope.otherBrowserl[i]='';
	if($scope.otherBrowserl[i] == 'undefined')
		$scope.otherBrowserl[i]='';	
	if($scope.selected_name_glbl[i] == undefined)
		$scope.selected_name_glbl[i]='';
	if($scope.selected_name_glbl[i] == 'undefined')
		$scope.selected_name_glbl[i]='';
	
	
	
	//alert($scope.entOthrBrsrIDVrsnl);
    $scope.browserIndividualVersionsCollection1 = [];
    $scope.browserIndividualTypeCollection1 = [];	
    $scope.browserIndividualVersionsCollection1[i] = '","S_ieVrsh": "' + $scope.selected_name_ieVersn1[i] + '","S_edgeVrsn": "' + $scope.selected_name_edVersn1[i] + '","S_chromeVrsn": "' + $scope.selected_name_chVersn1[i] + '","S_sfVrsn": "' + $scope.selected_name_sfVersn1[i] + '","S_firefoxVrsn": "' + $scope.selected_name_fxVersn1[i] + '","S_othrBrsVrsn": "' + $scope.entOthrBrsrIDVrsnl[i];
    $scope.browserIndividualTypeCollection1[i] = '","S_ie": "' + $scope.checkboxModel.value14[i] + '","S_edge": "' + $scope.checkboxModel.value51[i] + '","S_chrome": "' + $scope.checkboxModel.value21[i] + '","S_safari": "' + $scope.checkboxModel.value31[i] + '","S_firefox": "' + $scope.checkboxModel.value41[i] + '","S_other": "' + $scope.otherBrowserl[i]+ '","S_othrBrsType": "' + $scope.entOthrBrsrIDl[i];
    $scope.browserVersionsCollection1[i] = $scope.selected_name_ieVersn1[i] + " " + $scope.selected_name_edVersn1[i] + " " + $scope.selected_name_chVersn1[i] + " " + $scope.selected_name_sfVersn1[i] + " " + $scope.selected_name_fxVersn1[i] + " " + $scope.entOthrBrsrIDVrsnl[i];
    $scope.browserTypeCollection1[i] = $scope.checkboxModel.value14[i] + "  " + $scope.checkboxModel.value51[i] + "   " + $scope.checkboxModel.value21[i] + "  " + $scope.checkboxModel.value31[i] + "  " + $scope.checkboxModel.value41[i] + "  " + $scope.otherBrowser1[i] + " " + $scope.entOthrBrsrIDl[i];
    
    if ($scope.testerCommentID[i] == undefined)
      $scope.testerCommentID[i] = "";
    $scope.testerCommentID[i] = $scope.testerCommentID[i].toString().replace(/"/g, "'");
	$scope.testerCommentID[i] = $scope.testerCommentID[i].toString().replace(/\n/g, " ");
	//alert($scope.testerCommentID[i]);
	
	 if ($scope.location[i] == undefined)
      $scope.location[i] = " ";
    $scope.location[i] = $scope.location[i].toString().replace(/"/g, "'");
	$scope.location[i] = $scope.location[i].toString().replace(/\n/g, " ");
	$scope.criteriaTestsJson.Criteria[i].DisabilityImpact = $scope.criteriaTestsJson.Criteria[i].DisabilityImpact.toString();
	$scope.criteriaTestsJson.Criteria[i].DisabilityImpact = $scope.criteriaTestsJson.Criteria[i].DisabilityImpact.replace(/^,/, ''); //removes first comma from string 
    $scope.criteriaTestsJson.Criteria[i].DisabilityImpact = $scope.criteriaTestsJson.Criteria[i].DisabilityImpact.replace(/,\s*$/, " "); //removes comma from last of string          
    $scope.criteriaTestsJson.Criteria[i].DisabilityImpact = $scope.criteriaTestsJson.Criteria[i].DisabilityImpact.replace(/,+/g, ','); //removes multiple commas from string
	
	/*
    if ($scope.selected_name_glbl[i] == 'undefined');
      $scope.selected_name_glbl[i] = " "; */
	
    if ($scope.browserTypeCollection1[i] == undefined)
      $scope.browserTypeCollection1[i] = " ";
    $scope.counter=i;
	$scope.counter1 = i+1;
    if($scope.edit == true )	
	$scope.counter1= $scope.counterCollection[i];
	if($scope.selected_name_tstgrp[i] == "Fail"){
	 let fpcMapping = '{"CrtID": "' + $scope.criteriaTestsJson.Criteria[i].CrtID + '",' + '"DisabilityImpact": "' + $scope.criteriaTestsJson.Criteria[i].DisabilityImpact+'",' + '"TestName": "' + $scope.criteriaTestsJson.Criteria[i].TestName + '","TesterComment": "' + $scope.testerCommentID[i] +'"}';
    $scope.fpcMapping.push(fpcMapping);		
	 }		
    $scope.testresult[i] = '{"CrtID": "' + $scope.criteriaTestsJson.Criteria[i].CrtID + '",' + '"DisabilityImpact": "' + $scope.criteriaTestsJson.Criteria[i].DisabilityImpact+ '","Guideline": "' + $scope.guideline[i] + '",'+ '"Test": "' + $scope.criteriaTestsJson.Criteria[i].Test + '",' + '"TestName": "' + $scope.criteriaTestsJson.Criteria[i].TestName + '",' + '"TestID": "' + $scope.criteriaTestsJson.Criteria[i].TestID + '",' + '"TestCondition": "' + $scope.criteriaTestsJson.Criteria[i].TestCondition + '",' + '"IssueNo": "' + i + '","TestResult": "' + $scope.selected_name_tstgrp[i] +'","OptMenu1": "' + $scope.menu1[i] + '","location": "' + $scope.location[i]  + '","TesterComment": "' + $scope.testerCommentID[i] + $scope.browserIndividualTypeCollection1[i] + '","T_brwsrType": "' + $scope.browserTypeCollection1[i] + '","T_brwsrVrsn": "' + $scope.browserVersionsCollection1[i] + $scope.browserIndividualVersionsCollection1[i] + '","GlobalIssue": "' + $scope.selected_name_glbl[i]  + '","Counter": "' +$scope.counter1 + '","ImageSrc":".';	
    
    for(let m=0;m<$scope.imgCnvrsnJSON.length;m++){	
	       if(i == $scope.imgCnvrsnJSON[m].imgPosition){ 
            $scope.imageAdded =  true;		   
		    $scope.testresult[i] = $scope.testresult[i].substring(0, $scope.testresult[i].length - 1);
			$scope.testresult[i] = $scope.testresult[i]+$scope.imgCnvrsnJSON[m].imgValue;
			
	   }   
	 } 
	 
    
   
    $scope.remarkExplanation(i);


    if ($scope.testresult[i] != undefined) {	  
      $scope.totTstRslt.push($scope.testresult[i]);	  
    }
	//$scope.totTstRslt.sort();
  }  
  
  $scope.browserVersionsCollection1.length;
  //looping through newly added rows for issues
  //var i = $scope.parentIssueSelected;  
  for (var k = 0; k < $scope.indexCollection.length; k++) {
	  var i = $scope.indexCollection[k];   
  
  if($scope.ieChekBoxVal1[k] == "ieChekBox"){
  if($scope.chkBoxValIE11[k] == true )  
  $scope.checkboxModel.value141[k] = "Internet Explorer";
  if($scope.chkBoxValIE11[k] == false )  
  $scope.checkboxModel.value141[k] = " ";
  }
  if($scope.checkboxModel.value141[k] == undefined)
  $scope.checkboxModel.value141[k] ='';
  if($scope.checkboxModel.value141[k] == 'undefined')
  $scope.checkboxModel.value141[k] ='';
  
  
  if($scope.edgChekBoxVal1[k] == "edgChekBox"){
  if($scope.chkBoxValEdg11[k] == true )  
  $scope.checkboxModel.value511[k] = "Edge";
  if($scope.chkBoxValEdg11[k] == false )  
  $scope.checkboxModel.value511[k] = " ";
  }
  if($scope.checkboxModel.value511[k] == undefined)
  $scope.checkboxModel.value511[k] ='';
  if($scope.checkboxModel.value511[k] == 'undefined')
  $scope.checkboxModel.value511[k] ='';
  
  if($scope.frfxChekBoxVal1[k] == "frfxChekBox"){
  if( $scope.chkBoxValFrfx11[k] == true )  
  $scope.checkboxModel.value411[k] = "Firefox";
  if( $scope.chkBoxValFrfx11[k] == false )  
  $scope.checkboxModel.value411[k] = " ";
  }
  if($scope.checkboxModel.value411[k] == undefined)
  $scope.checkboxModel.value411[k] ='';
  if($scope.checkboxModel.value411[k] == 'undefined')
  $scope.checkboxModel.value411[k] ='';
  
  if($scope.chromeChekBoxVal1[k] == "chromeChekBox"){
  if($scope.chkBoxValChrm11[k] == true )  
  $scope.checkboxModel.value211[k] = "Chrome";
  if($scope.chkBoxValChrm11[k] == false )  
  $scope.checkboxModel.value211[k] = " ";
  }
  if($scope.checkboxModel.value211[k] == undefined)
  $scope.checkboxModel.value211[k] ='';
  if($scope.checkboxModel.value211[k] == 'undefined')
  $scope.checkboxModel.value211[k] ='';
  
  
  
  if($scope.safariCheckBoxVal1[k] == "safariChekBox"){
  if($scope.chkBoxValSaf11[k] == true )  
  $scope.checkboxModel.value311[k] = "Safari";
  if($scope.chkBoxValSaf11[k] == false )  
  $scope.checkboxModel.value311[k] = " ";
  }
  if($scope.checkboxModel.value311[k] == undefined)
  $scope.checkboxModel.value311[k] ='';
  if($scope.checkboxModel.value311[k] == 'undefined')
  $scope.checkboxModel.value311[k] ='';
  
 
  if($scope.chkBoxValothr1[k] == "otherChekBox"){
  if($scope.otherBrowser11[k] == true )  
  $scope.otherBrowser11 = "Other Browser";
  if($scope.otherBrowser11[k] == false )  
  $scope.otherBrowser11= " ";
  }
  
  if($scope.otherBrowser11 == undefined)
	  $scope.otherBrowser11 = '';
  if($scope.otherBrowser11 == 'undefined')
	  $scope.otherBrowser11 = '';
  
  if($scope.otherBrowserID111[k] == undefined)
		$scope.otherBrowserID111[k]='';
	if($scope.otherBrowserID111[k] == 'undefined')
		$scope.otherBrowserID111[k]='';
	if($scope.entOthrBrsrIDVrsn11[k] == undefined)
		$scope.entOthrBrsrIDVrsn11[k]='';
	if($scope.entOthrBrsrIDVrsn11[k] == 'undefined')
		$scope.entOthrBrsrIDVrsn11[k]='';
	if($scope.entOthrBrsrID11[k] == undefined)
		$scope.entOthrBrsrID11[k]='';
	if($scope.entOthrBrsrID11[k] == 'undefined')
		$scope.entOthrBrsrID11[k]='';
  
   if($scope.selected_name_ieVersn11[k] == undefined)
		$scope.selected_name_ieVersn11[k]='';
	if($scope.selected_name_edVersn11[k] == undefined)
		$scope.selected_name_edVersn11[k]='';
	if($scope.selected_name_chVersn11[k] == undefined)
		$scope.selected_name_chVersn11[k]='';
	if($scope.selected_name_sfVersn11[k] == undefined)
		$scope.selected_name_sfVersn11[k]='';
	if($scope.selected_name_fxVersn11[k] == undefined)
		$scope.selected_name_fxVersn11[k]=''; 	
	if($scope.selected_name_ieVersn11[k] == 'undefined')
		$scope.selected_name_ieVersn11[k]='';
	if($scope.selected_name_edVersn11[k] == 'undefined')
		$scope.selected_name_edVersn11[k]='';
	if($scope.selected_name_chVersn11[k] == 'undefined')
		$scope.selected_name_chVersn11[k]='';
	if($scope.selected_name_sfVersn11[k] == 'undefined')
		$scope.selected_name_sfVersn11[k]='';
	if($scope.selected_name_fxVersn11[k] == 'undefined')
		$scope.selected_name_fxVersn11[k]=''; 	
	if($scope.entOthrBrsrID11[k] == undefined)
		$scope.entOthrBrsrID11[k]='';
	if($scope.entOthrBrsrID11[k] == 'undefined')
		$scope.entOthrBrsrID11[k]='';
	if($scope.entOthrBrsrIDVrsn11[k] == undefined)
		$scope.entOthrBrsrIDVrsn11[k]='';
	if($scope.entOthrBrsrIDVrsn11[k] == 'undefined')
		$scope.entOthrBrsrIDVrsn11[k]=''; 
	
	if($scope.entOthrBrsrIDl1[k] == undefined)
		$scope.entOthrBrsrIDl1[k]='';
	if($scope.entOthrBrsrIDl1[k] == 'undefined')
		$scope.entOthrBrsrIDl1[k]='';

	
	if($scope.selected_name_glbl1[k] == undefined)
		$scope.selected_name_glbl1[k]='';
	if($scope.selected_name_glbl1[k] == 'undefined')
		$scope.selected_name_glbl1[k]='';	
		
    $scope.browserIndividualVersionsCollection11[k] =  '","S_ieVrsh": "' + $scope.selected_name_ieVersn11[k] + '","S_edgeVrsn": "' + $scope.selected_name_edVersn11[k] + '","S_chromeVrsn": "' + $scope.selected_name_chVersn11[k] + '","S_sfVrsn": "' + $scope.selected_name_sfVersn11[k] + '","S_firefoxVrsn": "' + $scope.selected_name_fxVersn11[k] + '","S_othrBrsVrsn": "' + $scope.entOthrBrsrID11[k];
    $scope.browserIndividualTypeCollection11[k] = '","S_ie": "' + $scope.checkboxModel.value141[k] + '","S_edge": "' + $scope.checkboxModel.value511[k] + '","S_chrome": "' + $scope.checkboxModel.value211[k] + '","S_safari": "' + $scope.checkboxModel.value311[k] + '","S_firefox": "' + $scope.checkboxModel.value411[k] + '","S_other": "' + $scope.entOthrBrsrIDVrsn11[k];
    
    $scope.browserVersionsCollection11[k] = $scope.selected_name_ieVersn11[k] + " " + $scope.selected_name_edVersn11[k] + " " + $scope.selected_name_chVersn11[k] + " " + $scope.selected_name_sfVersn11[k] + " " + $scope.selected_name_fxVersn11[k] + " " + $scope.entOthrBrsrID11[k] ;
    $scope.browserTypeCollection11[k] = $scope.checkboxModel.value141[k] + "  " + $scope.checkboxModel.value511[k] + "   " + $scope.checkboxModel.value211[k] + "  " + $scope.checkboxModel.value311[k] + "  " + $scope.checkboxModel.value411[k] + "  " + $scope.entOthrBrsrIDVrsn11[k] + " " + $scope.entOthrBrsrIDl1[k] + $scope.browserIndividualTypeCollection11[k];
    
    if ($scope.testerCommentID1[k] == undefined)
      $scope.testerCommentID1[k] = " ";   

    if ($scope.browserTypeCollection11[k] == undefined)
      $scope.browserTypeCollection11[k] = " ";

    if ($scope.imgCnvrsnJSON1[k] == undefined)
      $scope.imgCnvrsnJSON1[k] = " ";  
 $scope.testerCommentID1[k] = $scope.testerCommentID1[k].toString().replace(/"/g, "'").trim();
 $scope.testerCommentID1[k] = $scope.testerCommentID1[k].toString().replace(/\n/g, " ");
 
 if ($scope.location1[k] == undefined)
      $scope.location1[k] = " ";  
 $scope.location1[k] = $scope.location1[k].toString().replace(/"/g, "'").trim();
 $scope.location1[k] = $scope.location1[k].toString().replace(/\n/g, " ");
 let o = i+1;let p=k+1; 
// $scope.remarkExplanation(n);
 if ($scope.selected_name_tstgrp1[k] == "Pass") {		
      $scope.resultFails[k] = false;
      $scope.resultFailsCollection.push($scope.resultFails[k]);
      $scope.RemarkExplntn[k] = ['{"crtId": "' + $scope.criteriaTestsJson.Criteria[i].CrtID + '", "explanation":"' + "For " + "All Test Conditions Successfully Passed " + '"}'];
      $scope.RemarkExplntnCollection.push($scope.RemarkExplntn[k]);
      $scope.rmdatnDtlID1[k] = "Not Required";
      $scope.crtRsltCollection.push($scope.selected_name_tstgrp1[k]);
      $scope.crtCollection.push($scope.criteriaTestsJson.Criteria[i].CrtID);
     // $scope.testresult2[k] = $scope.testresult2[k] + '"}';
    } else if ($scope.selected_name_tstgrp1[k] == "Fail") {		
      $scope.resultFails[k] = true;
      $scope.resultFailsCollection.push($scope.resultFails[k]);
      $scope.testerCommentID[k] = $scope.testerCommentID[k].replace(/"/g, "'");
      $scope.RemarkExplntn[k] = ['{"crtId": "' + $scope.criteriaTestsJson.Criteria[i].CrtID + '", "explanation":"' + "For " + $scope.criteriaTestsJson.Criteria[i].TestName + ". " + $scope.testerCommentID[k] + '"}'];
      $scope.RemarkExplntnCollection.push($scope.RemarkExplntn[k]);
      if ($scope.rmdatnDtlID1[k] == undefined)
        $scope.rmdatnDtlID1[k] = " ";
     // $scope.testresult2[k] = $scope.testresult2[k] + '"}';
      $scope.crtRsltCollection.push($scope.selected_name_tstgrp1[k]);
      $scope.crtCollection.push($scope.criteriaTestsJson.Criteria[i].CrtID);

    } else if ($scope.selected_name_tstgrp1[k] == "Does Not Apply") {		
      $scope.resultFails[k] = false;
      $scope.resultFailsCollection.push($scope.resultFails[k]);
      $scope.RemarkExplntn[k] = ['{"crtId": "' + $scope.criteriaTestsJson.Criteria[i].CrtID + '", "explanation":"' + "For " + " This test is not required " + '"}'];
      $scope.RemarkExplntnCollection.push($scope.RemarkExplntn[k]);
      $scope.rmdatnDtlID1[k] = "Not Required";
      $scope.crtRsltCollection.push($scope.selected_name_tstgrp1[k]);
      $scope.crtCollection.push($scope.criteriaTestsJson.Criteria[i].CrtID);
     // $scope.testresult2[k] = $scope.testresult2[k] + '"}';
    } else if ($scope.selected_name_tstgrp1[k] == "Not Tested") {
		
      $scope.resultFails[k] = false;
      $scope.resultFailsCollection.push($scope.resultFails[k]);
      $scope.RemarkExplntn[k] = ['{"crtId": "' + $scope.criteriaTestsJson.Criteria[i].CrtID + '", "explanation":"' + "For " + " One or more test conditions Not Tested " + '"}'];
      $scope.RemarkExplntnCollection.push($scope.RemarkExplntn[k]);
	 // $scope.testresult2[k] = $scope.testresult2[k]+ '","RemediationDetails": "' + $scope.rmdatnDtlID1[k];
      if ($scope.rmdatnDtlID1[k] == undefined)
        $scope.rmdatnDtlID1[k] = " ";
      //$scope.testresult2[k] = $scope.testresult2[k] +  '"}';
      $scope.crtRsltCollection.push($scope.selected_name_tstgrp1[k]);
      $scope.crtCollection.push($scope.criteriaTestsJson.Criteria[i].CrtID);

    }
	//$scope.rmdatnDatelID1[k] = $scope.rmdatnDatelID1[k].toString();
	$scope.rmdatnDatelIDCollection1[k] = new Date($scope.rmdatnDatelID1[k]);
	if($scope.rmdatnDatelIDCollection1[k] == null) 
		$scope.rmdatnDatelIDCollection1[k] = '';
	if($scope.rmdatnDatelIDCollection1[k] == undefined) 
		$scope.rmdatnDatelIDCollection1[k] = '';
	if($scope.rmdatnDatelIDCollection1[k] == 'undefined') 
		$scope.rmdatnDatelIDCollection1[k] = '';
	if($scope.rmdatnDatelIDCollection1[k] == 'Invalid Date') 
		$scope.rmdatnDatelIDCollection1[k] = '';
	  if($scope.rmdatnDtlID1[k] == undefined) $scope.rmdatnDtlID1[k] ="";
	if($scope.rmdatnDtlID1[k] == "undefined") $scope.rmdatnDtlID1[k] ="";
	$scope.rmdatnDtlID1[k] = $scope.rmdatnDtlID1[k].toString().replace(/"/g, "'").trim();
    $scope.rmdatnDtlID1[k] = $scope.rmdatnDtlID1[k].toString().replace(/\n/g, " ");
	
   $scope.counter=$scope.counter+1;
   
   if($scope.selected_name_tstgrp[k] == "Fail"){
	 let fpcMapping = '{"CrtID": "' + $scope.criteriaTestsJson.Criteria[i].CrtID + '",' + '"DisabilityImpact": "' + $scope.criteriaTestsJson.Criteria[i].DisabilityImpact+'",' + '"TestName": "' + '*'+$scope.criteriaTestsJson.Criteria[i].TestName + '","TesterComment": "' + $scope.testerCommentID[k] +'"}';
    $scope.fpcMapping.push(fpcMapping);		
	 }	
	 
   $scope.testresult2[k] = '{"CrtID": "' + $scope.criteriaTestsJson.Criteria[i].CrtID +'",' +'"DisabilityImpact": "' + $scope.criteriaTestsJson.Criteria[i].DisabilityImpact+'","Guideline": "' + $scope.criteriaTestsJson.Criteria[i].Guideline + '",' + '"Test": "' + '*'+$scope.criteriaTestsJson.Criteria[i].Test + '",' + '"TestName": "' + '*'+$scope.criteriaTestsJson.Criteria[i].TestName + '",' + '"TestID": "' + $scope.criteriaTestsJson.Criteria[i].TestID + '",' + '"TestCondition": "' + '*'+$scope.criteriaTestsJson.Criteria[i].TestCondition + '",' + '"IssueNo": "' + $scope.newlyAddedIssuePosition[k]+ '","TestResult": "' + $scope.selected_name_tstgrp1[k]  +  '","location": "' + $scope.location1[k] +'","OptMenu1": "' + $scope.menu1[i] + '","TesterComment": "' + $scope.testerCommentID1[k] + '","T_brwsrType": "' + $scope.browserTypeCollection11[k] + '","T_brwsrVrsn": "' + $scope.browserVersionsCollection11[k] +  '","GlobalIssue": "' + $scope.selected_name_glbl1[k] + '","RemediationDate": "' + $scope.rmdatnDatelIDCollection1[k] +'","RemediationDetails": "' + $scope.rmdatnDtlID1[k]+'","AddedIssue": "' + true + '","Counter": "' +$scope.newlyAddedIssuePosition[k] + '","ImageSrc":".';
 	  
	 for(let p=0;p<$scope.imgCnvrsnJSON1.length;p++){   
	
	if($scope.counter == $scope.imgCnvrsnJSON1[p].imgPosition){             
            $scope.testresult2[k] = $scope.testresult2[k].substring(0, $scope.testresult2[k].length - 1);
			//$scope.testresult2[k] = $scope.testresult2[k] +$scope.imgCnvrsnJSON1[p].imgValue+'"}';
			$scope.testresult2[k] = $scope.testresult2[k] +$scope.imgCnvrsnJSON1[p].imgValue;
			
           } 
	  } 
	  
	  
	  /*
	   for(let m=0;m<$scope.imgCnvrsnJSON.length;m++){	
	       if(i == $scope.imgCnvrsnJSON[m].imgPosition){ 
            $scope.imageAdded =  true;		   
		    $scope.testresult[i] = $scope.testresult[i].substring(0, $scope.testresult[i].length - 1);
			$scope.testresult[i] = $scope.testresult[i]+$scope.imgCnvrsnJSON[m].imgValue;
			
	   }   
	 } 
	 */


	  
   if( $scope.newIssueRsltSelected == true){
   if($scope.uploadImageClicked1 == false){
    $scope.testresult2[k] = $scope.testresult2[k] + '."}';	
    }else 	  
   $scope.testresult2[k] = $scope.testresult2[k] + '"}';	
   }   
   
    if( $scope.newIssueRsltSelected == false){
   if($scope.uploadImageClicked1 == false){
    $scope.testresult2[k] = $scope.testresult2[k] + '"}';	
    }
   } 
   if ($scope.selected_name_tstgrp1[k] == '' ){
	   $scope.newRsltSlctrion =  false;	  
	 
  }
  
  if ($scope.selected_name_tstgrp1[k] != undefined ){
	   $scope.newRsltSlctrion =  true;	  
	
  }
    if ($scope.selected_name_tstgrp1[k] == undefined) {	
	
	$scope.selected_name_tstgrp1[k] = 'undefined';
       
		$scope.newRsltSlctrion =  false;	 
       $scope.draftReport = true;
       $scope.RemarkExplntn[k] = ['{"crtId": "' + $scope.criteriaTestsJson.Criteria[k].CrtID + '", "explanation":"' + "Test Result is not selected for this " + '"}'];
      $scope.RemarkExplntnCollection.push($scope.RemarkExplntn[k]);      
      if ($scope.rmdatnDtlID1[k] == undefined){
        $scope.rmdatnDtlID1[k] = " ";	
  $scope.testresult[k] = $scope.testresult[k] + '","DraftReport": "' + $scope.draftReport + '"}'; }	
    }
   
 
    if ($scope.testresult2[k] != undefined) {
      $scope.totTstRslt.push($scope.testresult2[k]);	  
      //$scope.testresult.push($scope.testresult2[i]);
    }
	//$scope.totTstRslt.sort();
  }
  
  
  //converting to json object
  $scope.RemarkExplntnCollectionJSON = '[' + $scope.RemarkExplntnCollection + ']';
  
  if ($scope.submitClkCount == 0) {
    $scope.totTstRsltJson = "[" + $scope.totTstRslt + "]";
    $scope.totTstRsltJson = IsJsonString($scope.totTstRsltJson);
  }
  $scope.totTstRslt = $scope.totTstRslt.toString();
  if ($scope.submitClkCount != 0) {
    //$scope.totTstRslt = $scope.totTstRslt.replace(/""/g, '"');
    $scope.totTstRslt = $scope.totTstRslt;
  }
  
  $scope.totTstRslt = $scope.totTstRslt.toString();
  //$scope.totTstRslt = $scope.totTstRslt.replace(/""/g, '"');
  
$scope.testresult1 = '"Criteria":[' + $scope.totTstRslt + ']';
  $scope.criteriaLength = $scope.selected_name.length;  
  $scope.criteriaResult2 =[];
  $scope.criteriaResult1 = " ";
  $scope.criteriaUnique = [];
  var flags = [],  
    i; 
  $scope.scValueAssigned = [];
  $scope.dsbl_Impctd_grp = [];
  
  $scope.falseSelected = false;
  $scope.manSelctedConflvl = false;
     
	 $scope.slctTstRslt = "";
     $scope.successCriteriaFxn = function() {
		 // alert('issue ID: '+ $scope.Mul_Issues3[0].InsrtTestID + '  impact: '+$scope.Mul_Issues3[0].InsrtDisabilityImpact + '  Guideline :'+$scope.Mul_Issues3[0].InsrtGuideline);     
		
	   $scope.FailSelected = false;
       $scope.PassSelected = false;      
       $scope.sameSCValue = false;
	   $scope.dnaSelected = false;
	   $scope.ntSelected =  false;	
       $scope.criteriaResult = [];	   
	   $scope.FailSelectedAdditional = false; 
       $scope.issueClicked = $scope.issueClicked-1;	   
	  // alert($scope.issueClicked);
	 // alert($scope.totTstRsltJson.length);
	  var c = $scope.indexCollection.length-1;
      for (let a = 0; a < $scope.totTstRsltJson.length; a++) {		  
        if ($scope.totTstRsltJson[a].TestResult != undefined) {
			 if(a>0){
			 if ($scope.totTstRsltJson[a].CrtID != $scope.totTstRsltJson[a-1].CrtID) {			  
			  $scope.FailSelected = false;
              $scope.PassSelected = false;
			  $scope.dnaSelected = false;
			  $scope.ntSelected = false;
            } 
		 }	  //alert('x'+$scope.indexCollection.length);    
              if ($scope.totTstRsltJson[a].TestResult == "Fail") {				  
                $scope.selected_name[a] = "Does Not Support";
                $scope.FailSelected = true;
                if ($scope.indexCollection.length > 0) {
                  for (b=0;b<$scope.indexCollection.length;b++){					  
                 if($scope.Mul_Issues3[b].InsrtTestID == $scope.totTstRsltJson[a].TestID){				  				  				  
                  $scope.dsbl_Impctd_grp[a] = $scope.Mul_Issues3[b].InsrtDisabilityImpact;
                  $scope.guideline[a] = $scope.Mul_Issues3[b].InsrtGuideline;
					  }}	                 				  
                } else{					
                  $scope.dsbl_Impctd_grp[a] = $scope.totTstRsltJson[a].DisabilityImpact;
                  $scope.guideline[a] = $scope.totTstRsltJson[a].Guideline;			      
			  
			  }
              }
			   
              if ($scope.totTstRsltJson[a].TestResult == "Pass") {
                   		
                if ($scope.FailSelected == true) {
                  $scope.selected_name[a] = "Does Not Support";
                  
				    if ($scope.indexCollection.length > 0) {
                  for (b=0;b<$scope.indexCollection.length;b++){					  
                 if($scope.Mul_Issues3[b].InsrtTestID == $scope.totTstRsltJson[a].TestID){				  				  				  
                  $scope.dsbl_Impctd_grp[a] = $scope.Mul_Issues3[b].InsrtDisabilityImpact;
                  $scope.guideline[a] = $scope.Mul_Issues3[b].InsrtGuideline;
					  }}	                 				  
                } else{					
                  $scope.dsbl_Impctd_grp[a] = $scope.totTstRsltJson[a].DisabilityImpact;
                  $scope.guideline[a] = $scope.totTstRsltJson[a].Guideline;			      
			  
			  }

                } 				
				else {
                  $scope.selected_name[a] = "Supports";
				  $scope.PassSelected = true;
                  $scope.dsbl_Impctd_grp[a] = "";                  
                  
                }
              }
			  
			  if ($scope.totTstRsltJson[a].TestResult == "Does Not Apply") {				 
                  
                if ($scope.FailSelected == true ) {
                  $scope.selected_name[a] = "Does Not Support";				  
                  
				   if ($scope.indexCollection.length > 0) {
                  for (b=0;b<$scope.indexCollection.length;b++){					  
                 if($scope.Mul_Issues3[b].InsrtTestID == $scope.totTstRsltJson[a].TestID){				  				  				  
                  $scope.dsbl_Impctd_grp[a] = $scope.Mul_Issues3[b].InsrtDisabilityImpact;
                  $scope.guideline[a] = $scope.Mul_Issues3[b].InsrtGuideline;
					  }}	                 				  
                } else{					
                  $scope.dsbl_Impctd_grp[a] = $scope.totTstRsltJson[a].DisabilityImpact;
                  $scope.guideline[a] = $scope.totTstRsltJson[a].Guideline;			      
			  
			  }

                } else if ($scope.PassSelected == true  ) {					
                  $scope.selected_name[a] = "Supports";
                  $scope.dsbl_Impctd_grp[a] = "";
                  $scope.PassSelected = true;
                  
                } 
				
				else {					
				  $scope.dnaSelected = true;
                  $scope.selected_name[a] = "Not Applicable";
                  $scope.dsbl_Impctd_grp[a] = "";
                  
                }
				
              }

             
              if ($scope.totTstRsltJson[a].TestResult == "Not Tested") {
                if ($scope.FailSelected == true) {
                  $scope.selected_name[a] = "Does Not Support";
                  
				  if ($scope.indexCollection.length > 0) {
                  for (b=0;b<$scope.indexCollection.length;b++){					  
                 if($scope.Mul_Issues3[b].InsrtTestID == $scope.totTstRsltJson[a].TestID){				  				  				  
                  $scope.dsbl_Impctd_grp[a] = $scope.Mul_Issues3[b].InsrtDisabilityImpact;
                  $scope.guideline[a] = $scope.Mul_Issues3[b].InsrtGuideline;
					  }}	                 				  
                } else{					
                  $scope.dsbl_Impctd_grp[a] = $scope.totTstRsltJson[a].DisabilityImpact;
                  $scope.guideline[a] = $scope.totTstRsltJson[a].Guideline;			      
			  
			  }
                 

                } else if ($scope.PassSelected == true) {
                   $scope.selected_name[a] = "Supports";
                  $scope.dsbl_Impctd_grp[a] = "";
                 
                } 
				
				else if($scope.dnaSelected == true){
                  $scope.selected_name[a] = "Does Not Apply";
                  $scope.dsbl_Impctd_grp[a] = "";
			      
			  }
				
				else {
				  $scope.ntSelected = true;
                  $scope.selected_name[a] = "Not Evaluated";                  
				   if ($scope.indexCollection.length > 0) {
                  for (b=0;b<$scope.indexCollection.length;b++){					  
                 if($scope.Mul_Issues3[b].InsrtTestID == $scope.totTstRsltJson[a].TestID){				  				  				  
                  $scope.dsbl_Impctd_grp[a] = $scope.Mul_Issues3[b].InsrtDisabilityImpact;
                  $scope.guideline[a] = $scope.Mul_Issues3[b].InsrtGuideline;
					  }}	                 				  
                } else{					
                  $scope.dsbl_Impctd_grp[a] = $scope.totTstRsltJson[a].DisabilityImpact;
                  $scope.guideline[a] = $scope.totTstRsltJson[a].Guideline;			      
			  
			  }
                  
                }
			  }
			  
          if ($scope.selected_name[a] == undefined)
            continue;		
          if (a > 0)			  
            if ($scope.totTstRsltJson[a].CrtID == $scope.totTstRsltJson[a - 1].CrtID) {
              if ($scope.selected_name[a] == $scope.selected_name[a - 1]) {               
               
                continue;
              }
            }
			if( $scope.FailSelected == true){            
				$scope.slctTstRslt = "FailSelected";
			}
			
			else if($scope.PassSelected == true){
				 if( $scope.FailSelected == true){            				
				  $scope.slctTstRslt = "FailSelected";
				}else 
				$scope.slctTstRslt = "PassSelected";
			}
			
			else if($scope.dnaSelected == true ){
					if( $scope.FailSelected == true){            				
				    $scope.slctTstRslt = "FailSelected";
				   }else if($scope.PassSelected == true){
				   $scope.slctTstRslt = "PassSelected";
				   }else 
				   $scope.slctTstRslt = "DNASelected";
			}
			
			else if($scope.ntSelected == true){
					if( $scope.FailSelected == true){            				
					$scope.slctTstRslt = "FailSelected";
					}else if($scope.PassSelected == true){
					$scope.slctTstRslt = "PassSelected";
					}else if($scope.dnaSelected == true){
					$scope.slctTstRslt = "DNASelected";
					}else 
					$scope.slctTstRslt = "NotSelected";			
			}  
	      			
		    else if($scope.FailSelected == true && $scope.PassSelected == true){
			$scope.slctTstRslt = "FailSelected";
			}
			else if($scope.FailSelected == true && $scope.dnaSelected == true){
			$scope.slctTstRslt = "FailSelected";
			}			
			else if($scope.FailSelected == true && $scope.ntSelected == true){
			$scope.slctTstRslt = "FailSelected";
			}
			else if($scope.FailSelected == true && $scope.FailSelected == true){
			$scope.slctTstRslt = "FailSelected";
			}
            else if($scope.dnaSelected == true && $scope.PassSelected == true){
			$scope.slctTstRslt = "PassSelected";
			}
			else if($scope.PassSelected == true && $scope.PassSelected == true){
			$scope.slctTstRslt = "PassSelected";
			}
			else if($scope.ntSelected == true && $scope.PassSelected == true){
			$scope.slctTstRslt = "NotSelected";	
			}
			else if($scope.dnaSelected == true && $scope.ntSelected == true){
			$scope.slctTstRslt = "NotSelected";	
			}
			else if($scope.ntSelected == true && $scope.ntSelected == true){
			$scope.slctTstRslt = "NotSelected";	
			}
			else if($scope.dnaSelected == true && $scope.dnaSelected == true){
			$scope.slctTstRslt = "NotSelected";	
			}
						
        }  // alert( 'b'+ $scope.slctTstRslt );         		
		    if( $scope.slctTstRslt == "FailSelected"){
				

            if($scope.dsbl_Impctd_grp[a] != "")				
           // $scope.criteriaResult.push('{"CrtID": "' + $scope.totTstRsltJson[a].CrtID + '","ConformanceLvl": "' + $scope.selected_name[a] + '","DisabilityImpact": "' + $scope.dsbl_Impctd_grp[a] + '","RemarkExplntn": "' + $scope.totTstRsltJson[a].TestName + ". " + $scope.totTstRsltJson[a].TesterComment + '"}');
			 $scope.criteriaResult.push('{"CrtID": "' + $scope.totTstRsltJson[a].CrtID +'","Guideline": "' + $scope.guideline[a] + '","ConformanceLvl": "' + "Does Not Support" + '","DisabilityImpact": "' + $scope.dsbl_Impctd_grp[a] + '","RemarkExplntn": "' + $scope.totTstRsltJson[a].TestName + ". " + $scope.totTstRsltJson[a].TesterComment + '"}');
			}
			else if($scope.slctTstRslt == "PassSelected"){	
            			
			$scope.criteriaResult.push('{"CrtID": "' + $scope.totTstRsltJson[a].CrtID + '","Guideline": "' + $scope.guideline[a] +'","ConformanceLvl": "' + "Supports" + '","DisabilityImpact": "' + "" + '","RemarkExplntn": "' + "Not Required" + '"}');	
			}
			else if($scope.slctTstRslt == "DNASelected"){
				
			$scope.criteriaResult.push('{"CrtID": "' + $scope.totTstRsltJson[a].CrtID + '","Guideline": "' + $scope.guideline[a] + '","ConformanceLvl": "' + "Does Not Apply" + '","DisabilityImpact": "' + "" + '","RemarkExplntn": "' + $scope.totTstRsltJson[a].TestName + ". " + $scope.totTstRsltJson[a].TesterComment + '"}');	
			}
			else if($scope.slctTstRslt == "NotSelected"){				

			$scope.criteriaResult.push('{"CrtID": "' + $scope.totTstRsltJson[a].CrtID + '","Guideline": "' + $scope.guideline[a] +'","ConformanceLvl": "' + "Not Evaluated" + '","DisabilityImpact": "' + $scope.dsbl_Impctd_grp[a] + '","RemarkExplntn": "' + "Not yet tested" + '"}');	
			}
			/*
			if( $scope.slctTstRslt == "FailSelected"){
            if($scope.dsbl_Impctd_grp[a] != "")				
           // $scope.criteriaResult.push('{"CrtID": "' + $scope.totTstRsltJson[a].CrtID + '","ConformanceLvl": "' + $scope.selected_name[a] + '","DisabilityImpact": "' + $scope.dsbl_Impctd_grp[a] + '","RemarkExplntn": "' + $scope.totTstRsltJson[a].TestName + ". " + $scope.totTstRsltJson[a].TesterComment + '"}');
			 $scope.criteriaResult.push('{"CrtID": "' + $scope.totTstRsltJson[a].CrtID + '","ConformanceLvl": "' + "Does Not Support" + '","DisabilityImpact": "' + $scope.dsbl_Impctd_grp[a] + '","RemarkExplntn": "' + $scope.totTstRsltJson[a].TestName + ". " + $scope.totTstRsltJson[a].TesterComment + '"}');
			}
			else if($scope.slctTstRslt == "PassSelected"){	
            			
			$scope.criteriaResult.push('{"CrtID": "' + $scope.totTstRsltJson[a].CrtID + '","ConformanceLvl": "' + "Supports" + '","DisabilityImpact": "' + "" + '","RemarkExplntn": "' + "Not Required" + '"}');	
			}
			else if($scope.slctTstRslt == "DNASelected"){
				
			$scope.criteriaResult.push('{"CrtID": "' + $scope.totTstRsltJson[a].CrtID + '","ConformanceLvl": "' + "Does Not Apply" + '","DisabilityImpact": "' + "" + '","RemarkExplntn": "' + $scope.totTstRsltJson[a].TestName + ". " + $scope.totTstRsltJson[a].TesterComment + '"}');	
			}
			else if($scope.slctTstRslt == "NotSelected"){
			$scope.criteriaResult.push('{"CrtID": "' + $scope.totTstRsltJson[a].CrtID + '","ConformanceLvl": "' + "Not Evaluated" + '","DisabilityImpact": "' + $scope.dsbl_Impctd_grp[a] + '","RemarkExplntn": "' + "Not yet tested" + '"}');	
			}*/
		   		
    }
	$scope.criteriaResult = $scope.criteriaResult.filter($scope.onlyUnique);
	$scope.criteriaResult = $scope.criteriaResult.sort();	    	
          $scope.scValueUniqueSelected = "";	
          $scope.sameCrtIdExists = false;	
		  
          $scope.criteriaResult = $scope.criteriaResult.toString();
		  $scope.criteriaResult = $scope.criteriaResult.replace(/^,/, ''); //removes comma from front of string
          $scope.criteriaResult = $scope.criteriaResult.replace(/,\s*$/, " "); //removes comma from last of string
          $scope.criteriaResult = $scope.criteriaResult.replace(/,+/g, ','); //removes multiple commas from string
		  $scope.criteriaResultJSON = "[ "+ $scope.criteriaResult +" ]";
	      $scope.criteriaResultJSON = IsJsonString($scope.criteriaResultJSON);
			//Assigning approperiate Conformance Level
    				 
		 for(let p=0; p < $scope.criteriaResultJSON.length; p++){			
           for (let q=$scope.criteriaResultJSON.length; q >0 ; q-- ){
			if($scope.criteriaResultJSON[q] != undefined)
			if($scope.criteriaResultJSON[q] != 'undefined')
			{
			            						
			if(q != 0){
				if($scope.criteriaResultJSON[q].CrtID != $scope.criteriaResultJSON[q-1].CrtID){ 
			    $scope.dnsSelectedFinal =  false;
			    $scope.suuprtsSelectedFinal =  false;
			    $scope.neSelectedFinal =  false;
			    $scope.naSelectedFinal =  false;
				
				}
				
		   if($scope.criteriaResultJSON[q].CrtID == $scope.criteriaResultJSON[p].CrtID){  
           if( $scope.criteriaResultJSON[q-1].ConformanceLvl == "Does Not Support"){            
				$scope.conformanceLevel = "Does Not Support";
				 
			}
			else if($scope.criteriaResultJSON[q].ConformanceLvl == "Supports"){
				
				 if( $scope.criteriaResultJSON[q-1].ConformanceLvl == "Does Not Support"){            				
				  $scope.conformanceLevel = "Does Not Support";
				   
				}else {
				$scope.conformanceLevel = "Supports";
				 
				}
			}
			
			else if($scope.criteriaResultJSON[q-1].ConformanceLvl == "Not Applicable" ){
				    
					if( $scope.criteriaResultJSON[q-1].ConformanceLvl == "Does Not Support"){            				
				    $scope.conformanceLevel = "Does Not Support";
					 
				   }else if($scope.criteriaResultJSON[q-1].ConformanceLvl == "Supports"){
				   $scope.conformanceLevel = "Supports";
				    
				   }else {
				   $scope.conformanceLevel = "Not Applicable";
				    
				   }
			}
			
			else if($scope.criteriaResultJSON[q].ConformanceLvl == "Not Evaluated"){
					if( $scope.criteriaResultJSON[q-1].ConformanceLvl == "Does Not Support"){            				
					$scope.conformanceLevel = "Does Not Support";
					 
					}else if($scope.criteriaResultJSON[q-1].ConformanceLvl == "Supports"){
					$scope.conformanceLevel = "Supports";
					 
					}else if($scope.criteriaResultJSON[q-1].ConformanceLvl == "Not Applicable"){
					$scope.conformanceLevel = "Not Applicable";
					 
					}else {
					$scope.conformanceLevel = "Not Evaluated";	
					 
					}					
			}  	   
		  //continue;
		   }
			}

	      	if($scope.criteriaResultJSON[q].ConformanceLvl == "Not Applicable"){
			$scope.conformanceLevel = "Not Applicable";	
			
			}		
		    else if($scope.criteriaResultJSON[q].ConformanceLvl == "Does Not Support" && $scope.criteriaResultJSON[p].ConformanceLvl == "Supports"){
			$scope.conformanceLevel = "Does Not Support";
			
			}
			else if($scope.criteriaResultJSON[q].ConformanceLvl == "Does Not Support" && $scope.criteriaResultJSON[p].ConformanceLvl == "Not Applicable"){
			$scope.conformanceLevel = "Does Not Support";
			
			}			
			else if($scope.criteriaResultJSON[q].ConformanceLvl == "Does Not Support" && $scope.criteriaResultJSON[p].ConformanceLvl == "Not Evaluated"){
			$scope.conformanceLevel = "Does Not Support";
			
			}
			
            else if($scope.criteriaResultJSON[q].ConformanceLvl == "Not Applicable" && $scope.criteriaResultJSON[p].ConformanceLvl == "Supports"){
			$scope.conformanceLevel = "Supports";
			}			
			else if($scope.criteriaResultJSON[q].ConformanceLvl == "Not Evaluated" && $scope.criteriaResultJSON[p].ConformanceLvl == "Supports"){
			$scope.conformanceLevel = "Not Evaluated";	
			
			}
			
			
			
			//Assigning values based on Conformance Level
			
			
           if( $scope.criteriaResultJSON[q].ConformanceLvl == "Does Not Support"){
			   
			   $scope.dnsSelectedFinal = true;
			 $scope.scValueUniqueSelected = '{"CrtID": "' + $scope.criteriaResultJSON[q].CrtID + '","ConformanceLvl": "' + $scope.criteriaResultJSON[q].ConformanceLvl + '","DisabilityImpact": "'+$scope.criteriaResultJSON[q].DisabilityImpact + '","RemarkExplntn": "' + $scope.criteriaResultJSON[q].RemarkExplntn + '"}';
		   }
		   else if( $scope.criteriaResultJSON[q].ConformanceLvl == "Supports"){
			   $scope.suuprtsSelectedFinal = true;			    
				if($scope.dnsSelectedFinal != true){
			    //$scope.scValueUniqueSelected = '{"CrtID": "' + $scope.criteriaResultJSON[q].CrtID + '","ConformanceLvl": "' + "Supports" + '","DisabilityImpact": "'+"" + '","RemarkExplntn": "' + "Explanation is not required, Please check detail test results" + '"}';
				$scope.scValueUniqueSelected = '{"CrtID": "' + $scope.criteriaResultJSON[q].CrtID + '","ConformanceLvl": "' + "Supports" + '","DisabilityImpact": "'+"" + '","RemarkExplntn": "' + " " + '"}';
		        
				}
		   }
		   else if( $scope.criteriaResultJSON[q].ConformanceLvl == "Not Evaluated" ){	
           $scope.neSelectedFinal = true;		   
		  if($scope.dnsSelectedFinal != true || $scope.suuprtsSelectedFinal != true){
		 // $scope.scValueUniqueSelected = '{"CrtID": "' + $scope.criteriaResultJSON[q].CrtID + '","ConformanceLvl": "' + $scope.criteriaResultJSON[q].ConformanceLvl + '","DisabilityImpact": "'+$scope.criteriaResultJSON[q].DisabilityImpact + '","RemarkExplntn": "' + $scope.criteriaResultJSON[q].RemarkExplntn + '"}';
		  $scope.scValueUniqueSelected = '{"CrtID": "' + $scope.criteriaResultJSON[q].CrtID + '","ConformanceLvl": "' + $scope.criteriaResultJSON[q].ConformanceLvl + '","DisabilityImpact": "'+$scope.criteriaResultJSON[q].DisabilityImpact + '","RemarkExplntn": "' + "Not yet tested." + '"}';
		 
		   }
		 }			 
		  else if( $scope.criteriaResultJSON[q].ConformanceLvl == "Does Not Apply"){
                 			  
				if($scope.dnsSelectedFinal != true || $scope.suuprtsSelectedFinal != true ||  $scope.neSelectedFinal != true){
			    
			   // $scope.scValueUniqueSelected = '{"CrtID": "' + $scope.criteriaResultJSON[q].CrtID + '","ConformanceLvl": "' + "Does Not Apply" + '","DisabilityImpact": "'+"" + '","RemarkExplntn": "' + "Explanation is not required, Please check detail test results" + '"}';
			    $scope.scValueUniqueSelected = '{"CrtID": "' + $scope.criteriaResultJSON[q].CrtID + '","ConformanceLvl": "' + "Does Not Apply" + '","DisabilityImpact": "'+"" + '","RemarkExplntn": "' + $scope.criteriaResultJSON[q].RemarkExplntn + '"}';
		  }
		  }
		   if( $scope.scValueUniqueSelected != "")
           $scope.criteriaResult2.push($scope.scValueUniqueSelected);			   
		     
		  }	
		 }
		 
		 }
		 		 
		$scope.criteriaResult2 = $scope.criteriaResult2.filter($scope.onlyUnique);
        //$scope.criteriaResult1 = '"SuccessCriteria": [' + $scope.criteriaResult2 + ']';		
        
	    $scope.criteriaResult1 = '"SuccessCriteria": [' + $scope.criteriaResult + ']';
  }
  $scope.successCriteriaFxn();
  $scope.osVrsnNo = " ";
  $scope.browserVersions = " ";
  $scope.browserVersionsCollection = " ";

  $scope.myOpsys = '{"S_window":"' + $scope.checkboxModel.value6 + '","S_mac": "' + $scope.checkboxModel.value7 + '","S_otherWin": "' + $scope.checkboxModel.value8;

  $scope.osVrsnNo = '","S_winVrsn": "' + $scope.selected_name_wnVersn + '","S_iosVrsn": "' + $scope.selected_name_iosVersn + '","S_otherOSChked": "' + $scope.chkBoxValOthrWndw1 + '","S_otherOSVrsn": "' + $scope.entOthrWindVrsn + '","S_otherOSType": "' + $scope.entOthrWindID;
  $scope.osCollection = [];
  if ($scope.checkboxModel.value6 != undefined || $scope.checkboxModel.value6 != '') {
    $scope.osCollection.push($scope.checkboxModel.value6);
  }
  if ($scope.checkboxModel.value7 != undefined || $scope.checkboxModel.value7 != '') {
    $scope.osCollection.push($scope.checkboxModel.value7);
  }
  if ($scope.checkboxModel.value8 != undefined || $scope.checkboxModel.value8 != '') {
    $scope.osCollection.push($scope.checkboxModel.value8);
  }
  if ($scope.entOthrWindID != undefined || $scope.entOthrWindID) {
    $scope.osCollection.push($scope.entOthrWindID);
  }
  $scope.osVrsnCollection = [];
  if ($scope.selected_name_wnVersn != undefined || $scope.selected_name_wnVersn != '') {
    $scope.osVrsnCollection.push($scope.selected_name_wnVersn);
  }
  if ($scope.selected_name_iosVersn != undefined || $scope.selected_name_iosVersn != '') {
    $scope.osVrsnCollection.push($scope.selected_name_iosVersn);
  }
 

  if ($scope.otherBrowser == true)
    $scope.otherBrowser = "Other Browser";
 if ($scope.otherBrowser == false)
    $scope.otherBrowser = "";

  if ($scope.otherWindow == true)
    $scope.otherWindow = "Other OS";
  $scope.browserCollection = [];
  if ($scope.checkboxModel.value1 != undefined || $scope.checkboxModel.value1 != '') { 
    $scope.browserCollection.push($scope.checkboxModel.value1);
  }

  if ($scope.checkboxModel.value2 != undefined || $scope.checkboxModel.value2 != '') {
    $scope.browserCollection.push($scope.checkboxModel.value2);

  }
  if ($scope.checkboxModel.value3 != undefined || $scope.checkboxModel.value3 != '') {
    $scope.browserCollection.push($scope.checkboxModel.value3);

  }
  if ($scope.checkboxModel.value4 != undefined || $scope.checkboxModel.value4 != '') {
    $scope.browserCollection.push($scope.checkboxModel.value4);

  }
  if ($scope.checkboxModel.value5 != undefined || $scope.checkboxModel.value5 != '') {
    $scope.browserCollection.push($scope.checkboxModel.value5);
  }

  if ($scope.otherBrowser != undefined || $scope.otherBrowser != '') {
    $scope.browserCollection.push($scope.otherBrowser);
    
  }
  if ($scope.entOthrBrsrID != undefined || $scope.entOthrBrsrID != '') {
    $scope.browserCollection.push($scope.entOthrBrsrID);
  }

  $scope.browserVrsnCollection = [];

  if ($scope.selected_name_ieVersn != undefined || $scope.selected_name_ieVersn != '') {
    $scope.browserVrsnCollection.push($scope.selected_name_ieVersn);
  }
  if ($scope.selected_name_edVersn != undefined || $scope.selected_name_edVersn != '') {
    $scope.browserVrsnCollection.push($scope.selected_name_edVersn);

  }
  if ($scope.selected_name_chVersn != undefined || $scope.selected_name_chVersn != '') {
    $scope.browserVrsnCollection.push($scope.selected_name_chVersn);
  }
  if ($scope.selected_name_sfVersn != undefined || $scope.selected_name_sfVersn != '') {
    $scope.browserVrsnCollection.push($scope.selected_name_sfVersn);
  }
  if ($scope.selected_name_fxVersn != undefined || $scope.selected_name_fxVersn != '') {
    $scope.browserVrsnCollection.push($scope.selected_name_fxVersn);
  }
  if ($scope.entOthrBrsrIDVrsn != undefined || $scope.entOthrBrsrIDVrsn != '') {
    $scope.browserVrsnCollection.push($scope.entOthrBrsrIDVrsn);
  }

  $scope.categories = '","S_ie": "' + $scope.checkboxModel.value1 + '","S_chrome": "' + $scope.checkboxModel.value2 + '","S_safari": "' + $scope.checkboxModel.value3 + '","S_firefox": "' + $scope.checkboxModel.value4 + '","S_edge": "' + $scope.checkboxModel.value5 + '","S_other": "' + $scope.otherBrowser;
  $scope.browserVersionsCollection = '","S_ieVrsh": "' + $scope.selected_name_ieVersn + '","S_edgVrsn": "' + $scope.selected_name_edVersn + '","S_chrVrsn": "' + $scope.selected_name_chVersn + '","S_sfVrsn": "' + $scope.selected_name_sfVersn + '","S_frfxVrsn": "' + $scope.selected_name_fxVersn + '","S_othrBrsVrsn": "' + $scope.entOthrBrsrIDVrsn + '","S_othrBrsType": "' + $scope.entOthrBrsrID;
  $scope.Guideline = $scope.checkboxModel.value12;
  $scope.Section508 = $scope.checkboxModel.value13;
 
  $scope.formData = " ";
  
  //preventing special characters   
  $scope.prodDescID = $scope.prodDescID.toString().replace(/"/g, "'").trim();
  $scope.prodDescID = $scope.prodDescID.toString().replace(/\n/g, " ");
  $scope.prdNteDescID = $scope.prdNteDescID.toString().replace(/"/g, "'").trim();
  $scope.prdNteDescID = $scope.prdNteDescID.toString().replace(/\n/g, " ");
  $scope.testScope = $scope.testScope.toString().replace(/"/g, "'").trim();
  $scope.testScope = $scope.testScope.toString().replace(/\n/g, " ");  
  $scope.productID = $scope.productID.toString().replace(/"/g, "'").trim();
  $scope.productID = $scope.productID.toString().replace(/\n/g, " ");
  $scope.versionID = $scope.versionID.toString().replace(/"/g, "'").trim();
  $scope.versionID = $scope.versionID.toString().replace(/\n/g, " ");
  $scope.ownerID = $scope.ownerID.toString().replace(/"/g, "'").trim();
  $scope.ownerID = $scope.ownerID.toString().replace(/\n/g, " ");
  $scope.productType = $scope.productType.toString().replace(/"/g, "'").trim();  
  $scope.productType = $scope.productType.toString().replace(/\n/g, " ");
  $scope.urlID = $scope.urlID.toString().replace(/"/g, "'").trim();
  $scope.urlID = $scope.urlID.toString().replace(/\n/g, " ");
  $scope.firstname = $scope.firstname.toString().replace(/"/g, "'").trim();
  $scope.firstname = $scope.firstname.toString().replace(/\n/g, " ");
  $scope.lastname = $scope.lastname.toString().replace(/"/g, "'").trim();
  $scope.lastname = $scope.lastname.toString().replace(/\n/g, " ");
  $scope.companyname = $scope.companyname.toString().replace(/"/g, "'").trim();
  $scope.companyname = $scope.companyname.toString().replace(/\n/g, " ");
  $scope.testerID = $scope.testerID.toString().replace(/"/g, "'").trim();
  $scope.testerID = $scope.testerID.toString().replace(/\n/g, " ");
  $scope.testerContact = $scope.testerContact.toString().replace(/"/g, "'").trim();
  $scope.testerContact = $scope.testerContact.toString().replace(/\n/g, " ");
  
    if($scope.entOthrWindVrsn != '')
    $scope.osVrsnCollection = $scope.osVrsnCollection.push($scope.entOthrWindVrsn);
 	$scope.browserVrsnCollection = $scope.browserVrsnCollection.toString().replace(/, /g, "").trim();
	$scope.browserVrsnCollection = $scope.browserVrsnCollection.toString().replace(/,/g, ", ").trim();	
	$scope.osVrsnCollection = $scope.osVrsnCollection.toString().replace(/, /g, " ").trim();
	$scope.osVrsnCollection = $scope.osVrsnCollection.toString().replace(/,/g, ", ").trim();
	$scope.osCollection = $scope.osCollection.toString().replace(/, /g, " ").trim();
	$scope.osCollection = $scope.osCollection.toString().replace(/,/g, ", ").trim();
	$scope.browserCollection = $scope.browserCollection.toString().replace(/, /g, " ").trim();
	$scope.browserCollection = $scope.browserCollection.toString().replace(/,/g, ", ").trim();
	$scope.browserCollection = $scope.browserCollection.toString().replace(/,\s*$/, "");
  $scope.formData = '[{"Product":' +
    '{"P_Name":"' + $scope.productID + '","P_Version": "' + $scope.versionID + '","P_Owner": "' + $scope.ownerID + '","P_Type": "' + $scope.productType + '","P_Location": "' + $scope.urlID + '","P_Desc": "' + $scope.prodDescID + '","P_Notes": "' + $scope.prdNteDescID + '"}, "System":' +
    $scope.myOpsys + $scope.osVrsnNo + '","S_osVrsnNo": "' + $scope.osVrsnCollection + '","S_selectedOS": "' + $scope.osCollection + $scope.categories + $scope.browserVersionsCollection + '","S_selectedBrowser": "' + $scope.browserCollection + '","S_selectedBrowserVersions": "' + $scope.browserVrsnCollection + '","S_Compatibility": "' + $scope.selected_name_cmpblty + '"},"Tester":' +
    '{"T_fstnm":"' + $scope.firstname + '","T_lstnm": "' + $scope.lastname + '","T_ID": "' + $scope.testerID + '","T_companyname": "' + $scope.companyname +'","T_Role": "' + $scope.myRole + '","T_cntc": "' + $scope.testerContact + '","T_scope": "' + $scope.testScope + '","T_eval": "' + $scope.selected_name_tstprcss + '","T_evalMthd_Vrsn": "' + $scope.evlMthdVrsn + '","crtLength": "' + $scope.criteriaLength + '","T_Date": "' + $scope.tDateId + '"}, "Standard":' +
    '{"Guideline":"' + $scope.Guideline + '","Section508": "' + $scope.Section508 + '","EN_Accessibility": "' + $scope.EN_Accessibility + '"},' +'"FPCMapping": ['+ $scope.fpcMapping+' ],'+ $scope.criteriaResult1 + ',' + $scope.testresult1 +'}]';

};

$scope.submit1 = function() {

  $scope.error = [];
  if ($scope.productID == " " || $scope.productID == undefined) {
    $scope.error.push("Product Name");
    
  }
  if ($scope.versionID == " " || $scope.versionID == undefined) {
    $scope.error.push("Product Version");
   
  }

  if ($scope.prodDescID == " " || $scope.prodDescID == undefined) {
    $scope.error.push("Product Description");
    
  }

  if ($scope.firstname == " " || $scope.firstname == undefined) {
    $scope.error.push("Tester's First name");
    
  }
  if ($scope.lastname == " " || $scope.lastname == undefined) {
    $scope.error.push("Tester's Last Name");
    
  }
  if ($scope.companyname == " " || $scope.companyname == undefined) {
    $scope.error.push("Company Name in Testing Information Section");
    
  }
  if ($scope.testerContact == " " || $scope.testerContact == undefined) {
    $scope.error.push("Tester's Email");
   
  }
     
  if ($scope.error.length > 0)
    alert("Please input data for " + $scope.error);
  /* making sure user selects at least one test result
  else if($scope.originalIssueRsltSelected != true)
  alert("Please select at least one test result to save file.");
  else if($scope.newIssueRsltSelected == false)
 alert("Please select test result for newly added issue or remove it to save file. ");
*/

  else {
	window.onbeforeunload = null;	
	//$scope.tDateId;
    $scope.submit();
    $scope.sbmtClicked = $scope.sbmtClicked+1;	
	
	if($scope.sbmtClicked == 1 ){
	$scope.sbmtClickedSingle = true;
	$scope.submitMessage = "File saved successfully.";
	$scope.testDate1 = $scope.testDate;
	}
	if($scope.sbmtClicked != 1 ){
	$scope.sbmtClickedMultiple = true;
    $scope.submitMessage = "File saved  " +$scope.sbmtClicked+" times in current session.";	
	}
	
 // alert($scope.sbmtClicked);
  $scope.tDateId1 = $scope.tDateId;	
	  //$scope.draftReport = false;
      //$scope.original = false;
	  document.getElementById("hdnMsgId").style.visibility = "hidden";     

	 
    var blob = new Blob([$scope.formData], {
      type: "Content-Type: application/json"
    });
    saveAs(blob, $scope.productID + $scope.versionID + ".json");	
	

 /*setTimeout(function() {
 	if ($scope.checkboxModel.alerts == "on")
		alert("Your updates have been saved to the Downloads folder (unless otherwise specified).");
}, 6000); */
   
  }
  
 //Resetting Arrays  
 $scope.criteriaResult.push( $scope.criteriaResult) ; //is blank for some reason 
 //$scope.criteriaResult = $scope.criteriaResult.concat($scope.criteriaResult); 
 $scope.criteriaResult2 = $scope.criteriaResult2.push( $scope.criteriaResult2) ;
// $scope.criteriaResult2 = $scope.criteriaResult2.concat($scope.criteriaResult2); 
 
 
 $scope.Mul_Issues.push( $scope.Mul_Issues); 
 $scope.Mul_Issues3.push( $scope.Mul_Issues3); 
 if($scope.submitClkCount > 0) {
	 //alert($scope.submitClkCount);
	
  }
  
 $scope.indexCollection=[]; 	
 $scope.RemarkExplntnCollection = []; 
 $scope.totTstRslt =[]; 
 $scope.imgCnvrsn = [];
  $scope.imgCnvrsn1 = [];
  $scope.criteriaUnique = [];  
 $scope.RemarkExplntn =[];
 $scope.criteriaResult2 = [];
 
//Resetting json objects 
$scope.imgCnvrsnJSON = {};//new Object;
$scope.imgCnvrsnJSON1 = {};//new Object;
$scope.totTstRsltJson = {};//new Object;
$scope.criteriaUniqueJSON  = {};//new Object;
$scope.criteriaResultJSON  = {};//new Object;
$scope.RemarkExplntnCollectionJSON = {};

 //Reset variables 
 $scope.otherBrowser = $scope.otherBrowser;
 $scope.criteriaResult1 ="";
  $scope.testresult1 = "";
 $scope.loadclicked =0;
// alert($scope.submitClkCount);
 $scope.submitClkCount = $scope.submitClkCount + 1;   
  
 //$scope = $scope.$new(true); 
};
}]);
  
 
