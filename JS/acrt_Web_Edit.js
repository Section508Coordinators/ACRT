var app = angular.module('acrtWebEdit', []);


//this function validates if json is valid

function IsJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    
	alert("There is a problem with the data. Contact technical support team.");
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
      if (keys.indexOf(key) === -1) {
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
app.controller('acrtWebEditCtrl', ['$scope', function($scope, $filter) {
 
$scope.Mul_Issues1 = new Array();
$scope.criteriaResult2 =new Array();
//$scope.criteriaResult = new Array();
$scope.Mul_Issues =[];
$scope.totTstRsltLgth =0;
$scope.totTstRsltEdit =0;
$scope.totTstRsltLgth =0;


 
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

  $scope.elementIsClicked3 = " ";
  $scope.elemntClicked2 = function(i) {	  
	  
    
    $scope.elementIsClicked3 = "RsltSelected" + i;
	if ($scope.selected_name_tstgrp[i] == undefined ){
	   $scope.newRsltSlctrion =  false;	  
	   $scope.selected_name_tstgrp[i] = "   ";
	
  }
  
  if ($scope.selected_name_tstgrp[i] == '' ){
	   $scope.newRsltSlctrion =  false;	  
	   $scope.selected_name_tstgrp[i] = "   ";
	 
  }
  
  if ($scope.selected_name_tstgrp[i] != undefined ){
	   $scope.newRsltSlctrion =  true;	  
	
  }
    //alert("clicked");
  }
  $scope.elementIsClickedd = false;

  $scope.myVar = true;
  $scope.myVar1 = false;

  function clickHandler() {
    $scope.elementIsClickedd = true;
  }


  $scope.tstWinMethodSelected = " ";
  $scope.tstWinOSClicked = function() {
    $scope.tstWinOSSelected = "WinOSClicked";
  }


  $scope.tstIESelected = " ";
  $scope.tstIEClicked = function() {
    $scope.tstIESelected = "IEClicked";
  }


  $scope.tstEdgeSelected = " ";
  $scope.tstEdgeClicked = function() {
    $scope.tstEdgeSelected = "EdgeClicked";
  }

  $scope.tstChromeSelected = " ";
  $scope.tstChromeClicked = function() {
    $scope.tstChromeSelected = "ChromeClicked";
  }

  $scope.tstSafariSelected = " ";
  $scope.tstSafariClicked = function() {
    $scope.tstSafariSelected = "SafariClicked";
  }

  $scope.tstFirefoxSelected = " ";
  $scope.tstFirefoxClicked = function() {
    $scope.tstFirefoxSelected = "FirefoxClicked";
  }

  $scope.tstIESelected1 = [];
  $scope.tstIEClicked1 = function(x) {
    $scope.tstIESelected1[x] = "IEClicked1";

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



  $scope.tstIESelected2 = [];
  $scope.tstIEClicked2 = function(x) {
    $scope.tstIESelected2[x] = "IEClicked2";
	

  }


  $scope.tstEdgeSelected2 = [];
  $scope.tstEdgeClicked2 = function(x) {
    $scope.tstEdgeSelected2[x] = "EdgeClicked2";
  }

  $scope.tstChromeSelected2 = [];
  $scope.tstChromeClicked2 = function(x) {
    //$scope.tstChromeSelected1[x] = "ChromeClicked";
    $scope.tstChromeSelected2[x] = "ChromeClicked2";

  }

  $scope.tstSafariSelected2 = [];
  $scope.tstSafariClicked2 = function(x) {
    $scope.tstSafariSelected2[x] = "SafariClicked2";
  }

  $scope.tstFirefoxSelected2 = [];
  $scope.tstFirefoxClicked2 = function(x) {
    $scope.tstFirefoxSelected2[x] = "FirefoxClicked2";
  }

  $scope.tstIESelected11 = [];
  $scope.tstIEClicked11 = function(x) {
    $scope.tstIESelected11[x] = "IEClicked11";

  }


  $scope.tstEdgeSelected11 = [];
  $scope.tstEdgeClicked11 = function(x) {
    $scope.tstEdgeSelected11[x] = "EdgeClicked11";
  }

  $scope.tstChromeSelected11 = [];
  $scope.tstChromeClicked11 = function(x) {
    $scope.tstChromeSelected11[x] = "ChromeClicked11";
  }

  $scope.tstSafariSelected11 = [];
  $scope.tstSafariClicked11 = function(x) {
    $scope.tstSafariSelected11[x] = "SafariClicked11";
  }

  $scope.tstFirefoxSelected11 = [];
  $scope.tstFirefoxClicked11 = function(x) {
    $scope.tstFirefoxSelected11[x] = "FirefoxClicked11";
  }


  $scope.tstIESelected21 = [];
  $scope.tstIEClicked21 = function(x) {
    $scope.tstIESelected21[x] = "IEClicked21";

  }


  $scope.tstEdgeSelected21 = [];
  $scope.tstEdgeClicked21 = function(x) {
    $scope.tstEdgeSelected21[x] = "EdgeClicked21";
  }

  $scope.tstChromeSelected21 = [];
  $scope.tstChromeClicked21 = function(x) {
    //$scope.tstChromeSelected11[x] = "ChromeClicked";
		$scope.tstChromeSelected21[x] = "ChromeClicked21";
  }

  $scope.tstSafariSelected21 = [];
  $scope.tstSafariClicked21 = function(x) {
    $scope.tstSafariSelected21[x] = "SafariClicked21";
  }

  $scope.tstFirefoxSelected21 = [];
  $scope.tstFirefoxClicked21 = function(x) {
    $scope.tstFirefoxSelected21[x] = "FirefoxClicked21";
  }

  $scope.tstIOSSelected = " ";
  $scope.tstIOSClicked = function() {
    $scope.tstIOSSelected = "IOSClicked";
  }

  /*  $scope.osClicked = " "; 
	$scope.tstMethodSelectedClicked = function() {  
  $scope.osClicked = " "  ;  
         } */

  $scope.compatibilitySelected = " ";
  $scope.compatibilitySelectedClicked = function() {
    $scope.compatibilitySelected = "CompbltySelected";
  }

  /*	 
		 $scope.browserTypeClicked = " "; 
	$scope.elemntClicked1 = function(x) {  
  $scope.browserTypeClicked = "TypeSelected" + x ;
         } */


  $scope.glblRsltSlcted = [];
  $scope.glblIssueClicked = function(x) {
    $scope.glblRsltSlcted[x] = true;
  }

  $scope.elementIsClicked4 = [];
  $scope.elemntClicked3 = function(x) {
    $scope.elementIsClicked4[x] = true;
  }
  //adding and removing issues	

  

  $scope.addedRow = [false];
  $scope.indexCollection = [];

  

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
    value14: [],
    value21: [],
    value31: [],
    value41: [],
    value51: [],
    value141: [],
    value211: [],
    value311: [],
    value411: [],
    value511: []
  };

   $scope.rmdatnDtlID = [];
  $scope.testerCommentID1 = [];   
  $scope.testerCommentID =[];
  $scope.location = [];
  $scope.location1 = [];
  $scope.rmdatnDtlID1 = [];
  $scope.rmdatnDatelID1 = [];

  $scope.imgCnvrsn1 = [];
  $scope.selected_id_tstrslt1 = [];
  $scope.selected_name_tstgrp1 = [];
  $scope.selected_id_tstrslt = [];
  $scope.selected_name_tstgrp = [];
  $scope.optionsTstrslt = [{
      id: 0,
      name: '  '
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
    },
    {
      id: 4,
      name: 'Not Tested'
    }

  ];

  //$scope.menu1 = false;
  $scope.optionsTstrslt1 = [{
      id: 0,
      name: '  '
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

  //$scope.menu2 = true;
  $scope.optionsTstrslt2 = [{
      id: 0,
      name: '  '
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
      id: 4,
      name: 'Not Tested'
    }

  ];

  // $scope.menu3 = true;
  $scope.optionsTstrslt3 = [{
      id: 0,
      name: '  '
    },
    {
      id: 4,
      name: 'Not Tested'
    }
  ];

  $scope.selected_id1 = [];
  $scope.selected_name1 = [];
  $scope.selected_id = [];
  $scope.selected_name = [];
  /*$scope.options = [
          {id:1, name:'Supports'},
          {id:2, name:'Supports with Exceptions'},
          {id:3, name:'Does Not Support'},
          {id:4, name:'Not Applicable'},
		  {id:5, name:'Not Evaluated'}		  
        ];	*/

  $scope.selected_id_glbl = [];
  $scope.selected_name_glbl = [];
  $scope.selected_id_glbl1 = [];
  $scope.selected_name_glbl1 = [];
  $scope.optionsglbl = [{
      id: 0,
      name: '  '
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

  $scope.selected_name_ieVersnl = [];
  $scope.selected_name_edVersnl = [];
  $scope.selected_name_chVersnl = [];
  $scope.selected_name_sfVersnl = [];
  $scope.selected_name_fxVersnl = [];
  $scope.entOthrBrsrIDl = [];
  $scope.selected_name_ieVersnl1 = [];
  $scope.selected_name_edVersnl1 = [];
  $scope.selected_name_chVersnl1 = [];

  $scope.selected_name_sfVersnl1 = [];
  $scope.selected_name_fxVersnl1 = [];
  // $scope.selected_id_ieVersn11 = [ ]; 		
  $scope.selected_id_ieVersn = " ";
  $scope.selected_name_ieVersn = " ";
  $scope.selected_id_ieVersn1 = [];

  $scope.testProductTypes = [{
      id: 0,
      name: ''
    },
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
      name: 'Other'
    }

  ];

  $scope.optionieVersn = [{
      id: 0,
      name: '  '
    },
    {
      id: 1,
      name: 'IE 11'
    },
    {
      id: 2,
      name: 'IE 10'
    },
    {
      id: 3,
      name: 'IE 9'
    },
    {
      id: 4,
      name: 'IE 8'
    },
    {
      id: 5,
      name: 'IE 7'
    }

  ];

  /*var element = document.getElementById('ieeVersnID'); 
        element.addEventListener('click', clickHandler); */

  $scope.selected_id_edVersn = " ";
  $scope.selected_name_edVersn = " ";
  $scope.selected_id_edVersn1 = [];
  $scope.selected_name_edVersnl = [];
  $scope.selected_id_edVersn11 = [];
  $scope.selected_name_edVersnl1 = [];

  $scope.optionedVersn = [{
      id: 0,
      name: '  '
    },
    {
      id: 9,
      name: 'Edge 44'
    },
    {
      id: 10,
      name: 'Edge 43'
    },
    {
      id: 11,
      name: 'Edge 42'
    },
    {
      id: 12,
      name: 'Edge 41'
    },
    {
      id: 13,
      name: 'Edge 40'
    },
    {
      id: 14,
      name: 'Edge 39'
    },
    {
      id: 15,
      name: 'Edge 38'
    },
    {
      id: 16,
      name: 'Edge 37'
    },
    {
      id: 17,
      name: 'Edge 36'
    },
    {
      id: 18,
      name: 'Edge 35'
    },
    {
      id: 19,
      name: 'Edge 34'
    }
  ];



  $scope.selected_id_chVersn = " ";
  $scope.selected_name_chVersn = " ";
  $scope.selected_id_chVersn1 = [];
  //$scope.selected_name_chVersnl = [ ];  
  $scope.selected_id_chVersn11 = [];
  $scope.selected_name_chVersnl1 = [];
  $scope.optionchVersn = [{
      id: 0,
      name: '  '
    },
    
    {
      id: 2,
      name: 'Chrome 76'
    },
    {
      id: 3,
      name: 'Chrome 75'
    },
    {
      id: 4,
      name: 'Chrome 74'
    },
    {
      id: 5,
      name: 'Chrome 73'
    },
    {
      id: 6,
      name: 'Chrome 72'
    },
    {
      id: 7,
      name: 'Chrome 71'
    },
    {
      id: 8,
      name: 'Chrome 70'
    }
  ];

  $scope.selected_id_sfVersn = " ";
  $scope.selected_name_sfVersn = " ";
  $scope.selected_id_sfVersn1 = [];
  $scope.selected_name_sfVersnl = [];
  $scope.selected_id_sfVersn11 = [];
  $scope.selected_name_sfVersnl1 = [];

  $scope.optionsfVersn = [{
      id: 0,
      name: '  '
    },
    {
      id: 1,
      name: 'Safari 12'
    },
    {
      id: 2,
      name: 'Safari 11'
    },
    {
      id: 3,
      name: 'Safari 10'
    },
    {
      id: 4,
      name: 'Safari 9'
    },
    {
      id: 5,
      name: 'Safari 8'
    },
    {
      id: 6,
      name: 'Safari 7'
    }
  ];



  $scope.selected_id_fxVersn = " ";
  $scope.selected_name_fxVersn = " ";
  $scope.selected_id_fxVersn1 = [];
  $scope.selected_name_fxVersnl = [];
  $scope.selected_id_fxVersn11 = [];
  $scope.selected_name_fxVersnl1 = [];
  $scope.optionfxVersn = [{
      id: 0,
      name: '  '
    },
    {
      id: 1,
      name: 'Firefox 69'
    },
    {
      id: 2,
      name: 'Firefox 68'
    },
    {
      id: 3,
      name: 'Firefox 67'
    },
    {
      id: 4,
      name: 'Firefox 66'
    },
    {
      id: 5,
      name: 'Firefox 65'
    },
    {
      id: 6,
      name: 'Firefox 64'
    }


  ];

  $scope.entOthrBrsrID = " ";
  //$scope.entOthrBrsrIDl = [" "];
  $scope.entOthrBrsrIDl1 = [];
  $scope.otherBrowser = false;
  $scope.otherBrowser1 = [];
  $scope.otherBrowser11 = [];
  $scope.entOthrBrsrIDVrsn = " ";
  $scope.entOthrBrsrIDVrsn1 = [];
  $scope.entOthrBrsrIDVrsn11 = [];




  $scope.selected_id_tstprcss = " ";
  $scope.selected_name_tstprcss = " ";
  $scope.optiontstprcss = [{
      id: 1,
      name: 'Trusted Tester'
    }
    /*,   
    		  {id:2, name:'WCAG'},
    		  {id:3, name:'Section 508'},		  
    		  {id:4, name:'Others'}	*/
  ];


  $scope.selected_id_cmpblty = " ";
  $scope.selected_name_cmpblty = " ";
  $scope.optionscmpblty = [{
      id: 0,
      name: '  '
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
  $scope.optionwnVersn = [{
      id: 0,
      name: '        '
    },
    {
      id: 1,
      name: 'Window Vista'
    },
    {
      id: 2,
      name: 'Windows 10'
    },
    {
      id: 3,
      name: 'Windows 8'
    },
    {
      id: 4,
      name: 'Windows 7'
    }
  ];

  $scope.selected_id_iosVersn = " ";
  $scope.selected_name_iosVersn = " ";
  $scope.optioniosVersn = [{
      id: 0,
      name: '        '
    },
    {
      id: 1,
      name: 'OSX 10.14'
    },
    {
      id: 2,
      name: 'OSX 10.13'
    },
    {
      id: 3,
      name: 'OSX 10.12'
    },
    {
      id: 4,
      name: 'OSX 10.11'
    },
    {
      id: 5,
      name: 'OSX 10.10'
    },
    {
      id: 6,
      name: 'OSX 10.9'
    }
  ];

  //converting image to string  
  $scope.imgCnvrsn = [];
  $scope.imgCnvrsnDefault =[];
  
  $scope.menu1 = [];
  $scope.RemarkExplntn = [];
  //$scope.RemarkExplntnCollection = [];
  $scope.resultFails = [];
  $scope.menu1 = [];
  $scope.RemarkExplntn = [];
  $scope.RemarkExplntnCollection = [];

  //uncomment this for single button for selecting and loading data
  /*
  jQuery("input#fileinput").change(function () {
      //setTimeout(loadFile, 1000); 
  	loadFile();
  });
  function loadFile() {
  	*/
$scope.dsbl_Impctd_grp = [];
$scope.default_dsbl_Impctd_grp = [];

  $scope.menu1 = [];
  $scope.chkBoxValIE = false;
  $scope.chkBoxValEdg = false;
  $scope.chkBoxValChrm = false;
  $scope.chkBoxValSaf = false;
  $scope.chkBoxValFrfx = false;
  $scope.chkBoxValWin = false;
  $scope.chkBoxValMac = false;
  $scope.default_compatibilitySetting = "";
  $scope.default_ieVersn1 = [];
  $scope.default_edgVersn1 = [];
  $scope.default_chrVersn1 = [];
  $scope.default_sfVersn1 = [];
  $scope.default_frfxVersn1 = [];
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
  $scope.chkBoxValMac1 = [];
  $scope.chkBoxValWin1 = [];
  $scope.chkBoxValSafl = [];
  $scope.otherBrowserl = [];
  $scope.remarkID = [];
  $scope.default_glblRslt = [];
  $scope.criteriaUnique = [];
  $scope.entOthrBrsrIDVrsn1 = [];
 // $scope.entOthrBrsrIDl = [];
  $scope.testresult = [];
  $scope.testresult2 = [];
  $scope.totTstRslt = [];
  $scope.testresult1 = " ";
  $scope.criteriaName = " ";
  $scope.counter = [];
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
  $scope.prodDescID = [];
  $scope.prdNteDescID = [];
  $scope.firstname = [];
  $scope.lastname = " ";
  $scope.testerID = " ";
  $scope.myRole = [];
  $scope.testerContact = [];
  $scope.testScope = [];
  $scope.evlMthdVrsn = [];
  $scope.addedIssueRow = [];
  $scope.criteriaResultPush = '';
 
  //$scope.dataLoaded = true;
  $scope.chkBoxValOthrBrwsr = [];
 $scope.chkBoxValOthrWndw = [];
 $scope.chkBoxValOthrBrwsr1 = false;
$scope.chkBoxValOthrWndw1 = false;
 $scope.loadclicked = 0;
 
  $scope.loadFile = function loadFile() {	  
	  $scope.loadclicked= $scope.loadclicked+1;	
	   if($scope.loadclicked >2)
       alert('you clicked "Load Template"  button multiple times, Please Refresh this page.');	
        if($scope.loadclicked == 1){
	    
    //function loadFile() {
    $scope.displayIt = true;
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
	  //document.getElementById("productID").focus();
	  //document.getElementById("aplType").click();
    }
	$scope.jsonData = [];
    $scope.productID="";		
      function receivedText(e) {
      let lines = e.target.result;
      var newArr = JSON.parse(lines);
      $scope.jsonData = newArr;      	  
	  document.getElementById("msg").innerHTML = "<b>File load completed</b>.<br> 'Undefined' denotes fields where no selections have been made";		  
      $scope.productID = $scope.jsonData[0].Product.P_Name;	 
      $scope.versionID = $scope.jsonData[0].Product.P_Version;
      //$scope.versionID = "id";
      $scope.ownerID = $scope.jsonData[0].Product.P_Owner;
      $scope.productType = $scope.jsonData[0].Product.P_Type;
      $scope.urlID = $scope.jsonData[0].Product.P_Location;
      $scope.prodDescID = $scope.jsonData[0].Product.P_Desc;
      $scope.prdNteDescID = $scope.jsonData[0].Product.P_Notes;
      $scope.firstname = $scope.jsonData[0].Tester.T_fstnm;
      $scope.lastname = $scope.jsonData[0].Tester.T_lstnm;
      $scope.testerID = $scope.jsonData[0].Tester.T_ID;
      $scope.myRole = $scope.jsonData[0].Tester.T_Role;
      $scope.testerContact = $scope.jsonData[0].Tester.T_cntc;
      $scope.testScope = $scope.jsonData[0].Tester.T_scope;
      $scope.evlMthdVrsn = "V5"; //$scope.jsonData[0].Tester.T_evalMthd_Vrsn;	
      $scope.criteriaUnique = $scope.jsonData[0].SuccessCriteria;
	  $scope.selectedResultIndexCollection = [];
	  $scope.draftReport = false;	
      $scope.selectedResultIndex = 0;
	//$scope.newIssueRsltSelected = false;		  
     $scope.addIssue = function(index) {
      $scope.newIssueRsltSelected = true;	  
      let d = 0;
      $scope.issueClicked = 0;
      $scope.issueClicked = $scope.issueClicked++;
      $scope.selectedResultIndex = index;
	 // $scope.selectedResultIndexCollection.push($scope.selectedResultIndex);
      $scope.insertRoww = [];
      $scope.addedRow[index] = true;      
      $scope.indexCollection.push(index); 
      $scope.Mul_Issues1[index] = {
        "InsrtTestName": '' + '*'+$scope.jsonData[0].Criteria[index].TestName + '',
        "InsrtTestID": '' +'*'+ $scope.jsonData[0].Criteria[index].TestID + '',
        "InsrtIndex": '' +'*'+ index + '',
		//"InsrtTestMenu": '"' + $scope.jsonData[0].Criteria[index].OptMenu1 + '"',
		"InsrtDisabilityImpact": '"' + $scope.jsonData[0].Criteria[index].DisabilityImpact + '"',			
        "InsrtTestCondition": '' +'*'+ $scope.jsonData[0].Criteria[index].TestCondition + ''
      };    
    // alert('V'+$scope.Mul_Issues1[$scope.selectedResultIndex].InsrtTestID+'V');
      //if($scope.Mul_Issues1[index].InsrtTestID !='')	  
        $scope.Mul_Issues.push($scope.Mul_Issues1[index]);	 
	  // $scope.Mul_Issues = $scope.Mul_Issues.concat($scope.Mul_Issues1);
		if ($scope.checkboxModel.alerts == "on")
			alert("Child Issue is added at the end of this table, Please scroll down to work on it.");		
    };
      
      $scope.removeIssue = function(index) {
	  let removePosition = $scope.jsonData[0].Criteria.length + index+1;		
	  $scope.removeIssueClicked = true;
      $scope.issueClicked = $scope.issueClicked--;
	  $scope.newIssueRsltSelected = false;
      $scope.addedRow[index] = false;
      $scope.Mul_Issues.splice(index, 1);
	  document.getElementById("rmdTble").deleteRow(removePosition);
      $scope.indexCollection.pop();
    }; 
	  
      for (let c = 0; c < $scope.jsonData[0].SuccessCriteria.length; c++) {
        $scope.remarkID[c] = $scope.jsonData[0].SuccessCriteria[c].RemarkExplntn;
      }

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

      if ($scope.jsonData[0].System.S_other !== undefined) {
        $scope.entOthrBrsrID = $scope.jsonData[0].System.S_other;

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
      $scope.default_evalMethod = "Trusted Tester"; //$scope.jsonData[0].Tester.T_eval;  
      $scope.evlMthdVrsn = "V5"; // $scope.jsonData[0].Tester.T_evalMthd_Vrsn; 
      $scope.default_productType = $scope.jsonData[0].Product.P_Version;
	  $scope.jsonData[0].System.S_other = $scope.jsonData[0].System.S_other.toString().trim();	  
	  if ($scope.jsonData[0].System.S_other === 'Other Browser' || $scope.jsonData[0].System.S_other === '  Other Browser  ' ){
       $scope.chkBoxValOthrBrwsr1 = true;
	   $scope.otherBrowser = true;	   
	  }
       
     if ($scope.jsonData[0].System.S_otherOSChked != 'undefined')
     $scope.chkBoxValOthrWndw1 = true;
	  
	  
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

      if ($scope.tstMethodSelected == "MethodSelected" + i) {
        $scope.selected_name_tstprcss = $scope.selected_name_tstprcss;
        $scope.evlMthdVrsn = $scope.evlMthdVrsn;
      }
      if ($scope.tstMethodSelected != "MethodSelected" + i) {
        $scope.selected_name_tstprcss = $scope.default_evalMethod;
        $scope.evlMthdVrsn = $scope.evlMthdVrsn;
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
      for (let c = 0; c < $scope.jsonData[0].SuccessCriteria.length; c++) {
        $scope.criteriaResultOriginal.push('{"CrtID": "' + $scope.jsonData[0].SuccessCriteria[c].CrtID + '","ConformanceLvl": "' + $scope.jsonData[0].SuccessCriteria[c].ConformanceLvl + '","DisabilityImpact": "' + $scope.jsonData[0].SuccessCriteria[c].DisabilityImpact + '","RemarkExplntn": "' + $scope.jsonData[0].SuccessCriteria[c].RemarkExplntn + '"}');
        $scope.default_dsbl_Impctd_grp.push($scope.jsonData[0].SuccessCriteria[c].DisabilityImpact);
      }
     $scope.criteriaResultOriginal = $scope.criteriaResultOriginal.filter($scope.onlyUnique);
	  
      $scope.origSelectedResults = $scope.jsonData[0].Criteria.length;        
	  
      for (let b = 0; b < $scope.jsonData[0].Criteria.length; b++) {
		   if ($scope.jsonData[0].Criteria[b].DraftReport == 'true') {
          $scope.draftReport = true;          
        }
		  $scope.issueNo[b] = $scope.jsonData[0].Criteria[b].IssueNo;
        $scope.menu1[b] = $scope.jsonData[0].Criteria[b].OptMenu1;
        $scope.def_entOthrBrsrIDVrsn1[b] = $scope.jsonData[0].Criteria[b].S_othrBrsVrsn;
        $scope.default_testResult1[b] = $scope.jsonData[0].Criteria[b].S_othrBrsType;

        $scope.jsonData[0].Criteria[b].S_ie = $scope.jsonData[0].Criteria[b].S_ie.toString().trim();
        if ($scope.jsonData[0].Criteria[b].S_ie === "Internet Explorer" || $scope.jsonData[0].Criteria[b].S_ie === "  Internet Explorer  ") {
          $scope.chkBoxValIE1[b] = true;
          // $scope.checkboxModel.value14[c] = "Internet Explorer";	  
        }		
         $scope.jsonData[0].Criteria[b].S_edge = $scope.jsonData[0].Criteria[b].S_edge.toString().trim();
        if ($scope.jsonData[0].Criteria[b].S_edge === "Edge" || $scope.jsonData[0].Criteria[b].S_edge === "  Edge  ") {
          $scope.chkBoxValEdg1[b] = true;
          // $scope.checkboxModel.value51[c] = "Edge";
        }
        $scope.jsonData[0].Criteria[b].S_chrome = $scope.jsonData[0].Criteria[b].S_chrome.toString().trim();
        if ($scope.jsonData[0].Criteria[b].S_chrome === "Chrome" || $scope.jsonData[0].Criteria[b].S_chrome === "  Chrome  ") {
          $scope.chkBoxValChrm1[b] = true;
          //$scope.checkboxModel.value21[c] = "Chrome"; 
        } 

       // if ($scope.jsonData[0].Criteria[b].S_safari === 'Safari') {
		   $scope.jsonData[0].Criteria[b].S_safari = $scope.jsonData[0].Criteria[b].S_safari.toString().trim();
		   if ($scope.jsonData[0].Criteria[b].S_safari === "Safari" || $scope.jsonData[0].Criteria[b].S_safari === "  Safari  " ) {
          $scope.chkBoxValSaf1[b] = true;
          // $scope.checkboxModel.value31[c] = "Safari";
        }
		
		$scope.jsonData[0].System.S_other = $scope.jsonData[0].System.S_other.toString().trim();
		 if ($scope.jsonData[0].System.S_other === 'Other Browser' || $scope.jsonData[0].System.S_other === '  Other Browser  ') {
          $scope.chkBoxValOthrBrwsr[b] = true;
          // $scope.checkboxModel.value31[c] = "Safari";
        }
		 //if ($scope.jsonData[0].System.S_chrome === 'Chrome') {
          //$scope.chkBoxValOthrWndw[b] = true;
          // $scope.checkboxModel.value31[c] = "Safari";
       // }
        $scope.jsonData[0].Criteria[b].S_firefox = $scope.jsonData[0].Criteria[b].S_firefox.toString().trim();
        if ($scope.jsonData[0].Criteria[b].S_firefox === "Firefox" || $scope.jsonData[0].Criteria[b].S_firefox === "  Firefox  ") {
          $scope.chkBoxValFrfx1[b] = true;
          //$scope.checkboxModel.value41[c] = "Firefox";

        }

        if ($scope.jsonData[0].Criteria[b].S_other !== undefined) {
			
				$scope.entOthrBrsrIDl[b] = $scope.jsonData[0].System.S_othrBrsType;
			
        }
		
        $scope.default_SelectedResult[b] = $scope.jsonData[0].Criteria[b].TestResult;
        $scope.default_ieVersn1[b] = $scope.jsonData[0].Criteria[b].S_ieVrsh;       	
        $scope.default_edgVersn1[b] = $scope.jsonData[0].Criteria[b].S_edgeVrsn;
        $scope.default_chrVersn1[b] = $scope.jsonData[0].Criteria[b].S_chromeVrsn;
        $scope.default_sfVersn1[b] = $scope.jsonData[0].Criteria[b].S_sfVrsn;
        $scope.default_frfxVersn1[b] = $scope.jsonData[0].Criteria[b].S_firefoxVrsn;
        $scope.entOthrBrsrIDVrsn1[b] = $scope.jsonData[0].Criteria[b].S_othrBrsVrsn;
        $scope.entOthrBrsrIDl[b] = $scope.jsonData[0].System.S_othrBrsType;
		$scope.location[b] = $scope.jsonData[0].Criteria[b].location;
        $scope.testerCommentID[b] = $scope.jsonData[0].Criteria[b].TesterComment;
       // $scope.rmdatnDtlID[b] = $scope.jsonData[0].Criteria[b].RemediationDetails;
        $scope.default_glblRslt[b] = $scope.jsonData[0].Criteria[b].GlobalIssue;			
        //$scope.jsonData[0].Criteria[b].ImageSrc;
        $scope.addedIssueRow[b] = $scope.jsonData[0].Criteria[b].AddedIssue;  
       if($scope.default_glblRslt[b] == undefined)
			$scope.default_glblRslt[b]="";		
/* 		if($scope.loadclicked == 2)
 */		if(b != undefined ){		
	   if($scope.jsonData[0].Criteria[b].ImageSrc != "  "){ 
       if(b != b-1){         
		$scope.imgCnvrsn.push('{"imgPosition" : "'+ b+'"', '"imgValue" :"'+ $scope.jsonData[0].Criteria[b].ImageSrc +'"}');		
	   }
	   continue;
	   }	   
	   else if($scope.jsonData[0].Criteria[b].ImageSrc != "   "){ 
       if(b != b-1){       	   
		$scope.imgCnvrsn.push('{"imgPosition" : "'+ b+'"', '"imgValue" :"'+ $scope.jsonData[0].Criteria[b].ImageSrc +'"}');		
	   }
	   continue;
	   }         
      } 	
		$scope.imgCnvrsn = $scope.imgCnvrsn.filter($scope.onlyUnique);  
	
	 
	   }
    }
	}
  }
  $scope.defaultExpand = function defaultExpand() {
    document.getElementById("aplType").click();
    
  }  


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
  $scope.evalMethod = " ";
  $scope.dateSubmitted = " ";
  $scope.Guideline = " ";
  $scope.Section508 = " ";
  $scope.EN_Accessibility = " ";
  $scope.entOthrWindID = " ";
  $scope.tDateId = " ";
  $scope.issueNo = [];
  //$scope.testerCommentID = [];
  $scope.disabilityGrp = [];
  $scope.remarkID = [];
  $scope.glbisue = [];
  $scope.myWbTestResult = [];
  $scope.webTestResult = [];
  $scope.selected_id = [];
  $scope.selected_option = [];
  $scope.rmdatnDatelID = [];
 // $scope.rmdatnDtlID = [];
  $scope.selected_name_tstgrp10 = [];


  $scope.tstRsltSlcted = [];
  $scope.totTstRsltJson = [];
  $scope.resultFailsCollection = [];
  $scope.resultFails = [];
  




  $scope.remarkExplanation = function(i) {


    

    if ($scope.selected_name_tstgrp[i] == undefined) {      
      $scope.draftReport = true;
	   $scope.RemarkExplntn[i] = ['{"crtId": "' + $scope.criteriaTestsJson.Criteria[i].CrtID + '", "explanation":"' + "Test Result is not selected for this " + '"}'];
    $scope.RemarkExplntnCollection.push($scope.RemarkExplntn[i]);    
    $scope.crtCollection.push($scope.criteriaTestsJson.Criteria[i].CrtID);
    //$scope.crtCollection.push($scope.criteriaTestsJson.Criteria[i].CrtID);
    if ($scope.rmdatnDtlID[i] == undefined)
      $scope.rmdatnDtlID[i] = " ";      
    //$scope.testresult[i] = $scope.testresult[i] + '","DraftReport": "' + $scope.draftReport + '","RemediationDetails": "' + $scope.rmdatnDtlID[i] + '"}';
	$scope.testresult[i] = $scope.testresult[i] +  '","RemediationDetails": "' + $scope.rmdatnDtlID[i];
     
    }

    if ($scope.selected_name_tstgrp[i] == "Pass") {
      $scope.resultFails[i] = false;
      $scope.resultFailsCollection.push($scope.resultFails[i]);
      //$scope.RemarkExplntn[i] = "All Test Condition Successfully Passed";
      $scope.RemarkExplntn[i] = ['{"crtId": "' + $scope.criteriaTestsJson.Criteria[i].CrtID + '", "explanation":"' + "All Test Condition Successfully Passed " + '"}'];
      $scope.RemarkExplntnCollection.push($scope.RemarkExplntn[i]);
      $scope.crtRsltCollection.push($scope.selected_name_tstgrp[i]);
      $scope.crtCollection.push($scope.criteriaTestsJson.Criteria[i].CrtID);
      $scope.rmdatnDtlID[i] = "Not Required";
      //$scope.testresult[i] = $scope.testresult[i] + '","RemediationDetails": "' + $scope.rmdatnDtlID[i] + '"}';
	  $scope.testresult[i] = $scope.testresult[i] + '","RemediationDetails": "' + $scope.rmdatnDtlID[i];
    }
    if ($scope.selected_name_tstgrp[i] == "Fail") {
      $scope.resultFails[i] = true;
      $scope.resultFailsCollection.push($scope.resultFails[i]);
      $scope.testerCommentID[i] = $scope.testerCommentID[i].replace(/""/g, '"');
      //$scope.remarkID[i]=$scope.testerCommentID[i];
      $scope.RemarkExplntn[i] = ['{"crtId": "' + $scope.criteriaTestsJson.Criteria[i].CrtID + '", "explanation":"' + "For " + $scope.criteriaTestsJson.Criteria[i].TestName + ", " + $scope.testerCommentID[i] + '"}'];
      $scope.RemarkExplntnCollection.push($scope.RemarkExplntn[i]);
      $scope.crtRsltCollection.push($scope.selected_name_tstgrp[i]);
      $scope.crtCollection.push($scope.criteriaTestsJson.Criteria[i].CrtID);
      //$scope.testresult[i] = $scope.testresult[i] + '","RemediationDetails": "' + $scope.rmdatnDtlID[i] + '"}';
	  $scope.rmdatnDtlID[i] = ""+$scope.rmdatnDtlID[i];
	   $scope.rmdatnDtlID[i] = $scope.rmdatnDtlID[i].replace(/""/g, '"');
      $scope.rmdatnDtlID[i] = $scope.rmdatnDtlID[i].replace(/\n/g, " ");
	  $scope.testresult[i] = $scope.testresult[i] + '","RemediationDetails": "' + $scope.rmdatnDtlID[i];
    }
    if ($scope.selected_name_tstgrp[i] == "Does Not Apply") {
      $scope.resultFails[i] = false;
      $scope.resultFailsCollection.push($scope.resultFails[i]);
      //$scope.RemarkExplntn[i] = "Not Applicable";
      $scope.RemarkExplntn[i] = ['{"crtId": "' + $scope.criteriaTestsJson.Criteria[i].CrtID + '", "explanation":"' + " This test is not required " + '"}'];
      $scope.RemarkExplntnCollection.push($scope.RemarkExplntn[i]);
      $scope.rmdatnDtlID[i] = "Not Required";
      $scope.crtRsltCollection.push($scope.selected_name_tstgrp[i]);
      $scope.crtCollection.push($scope.criteriaTestsJson.Criteria[i].CrtID);

      //$scope.testresult[i] = $scope.testresult[i] + '","RemediationDetails": "' + $scope.rmdatnDtlID[i] + '"}';
	  $scope.testresult[i] = $scope.testresult[i] + '","RemediationDetails": "' + $scope.rmdatnDtlID[i];
    }
    if ($scope.selected_name_tstgrp[i] == "Not Tested") {
      $scope.resultFails[i] = false;
      $scope.resultFailsCollection.push($scope.resultFails[i]);
      //$scope.RemarkExplntn[i] = "One or more test conditions not tested";
      $scope.RemarkExplntn[i] = ['{"crtId": "' + $scope.criteriaTestsJson.Criteria[i].CrtID + '", "explanation":"' + " One or more test conditions not tested " + '"}'];
      $scope.RemarkExplntnCollection.push($scope.RemarkExplntn[i]);
      $scope.crtRsltCollection.push($scope.selected_name_tstgrp[i]);
      $scope.crtCollection.push($scope.criteriaTestsJson.Criteria[i].CrtID);	
      $scope.rmdatnDtlID[i] = ""+$scope.rmdatnDtlID[i];	  
	  $scope.rmdatnDtlID[i] = $scope.rmdatnDtlID[i].replace(/""/g, '"');
     $scope.rmdatnDtlID[i] = $scope.rmdatnDtlID[i].replace(/\n/g, " ");
      //$scope.testresult[i] = $scope.testresult[i] + '","RemediationDetails": "' + $scope.rmdatnDtlID[i] + '"}';
	  $scope.testresult[i] = $scope.testresult[i] + '","RemediationDetails": "' + $scope.rmdatnDtlID[i];
    }
	
      $scope.testresult[i] = $scope.testresult[i] + '"}';

  };
  
  //apply logic to insert screenshot at designed position 
$scope.uploadImage = function(element ) { 
$scope.uploadImageClicked1 = false;		
  var file = element.files[0];
  var reader = new FileReader();
  reader.onloadend = function() {
	 $scope.imgPos =0;
   if(element != null ) {
    let imgPstn = element.closest('tr').rowIndex;	
    imgPstn = imgPstn-1;  
  $scope.imgCnvrsn.push('{"imgPosition" : "'+ imgPstn +'"', '"imgValue" :"'+ reader.result+'"}');  	
   // $scope.imgCnvrsn.splice(imgPstn,0,'{"imgPosition" : "'+ imgPstn +'"', '"imgValue" :"'+ reader.result+'"}');  
  }
  }
  reader.readAsDataURL(file);

} 

  $scope.rsltSlctionClicked = function(i) {
	  // $scope.successCriteriaFxn();
    $scope.tstRsltSlcted[i] = true;
	//$scope.tstRsltSlcted = true;
	/*	
    //To apply Fail or DNA with similar group ...  
    if ($scope.jsonData[0].Criteria[i].GrpID == undefined) {
		
      $scope.selected_name_tstgrp[i] = $scope.selected_name_tstgrp[i];
      //$scope.selected_name_tstgrp[i] = " ";

    }
    if ($scope.jsonData[0].Criteria[i].GrpID == " ") {
      $scope.selected_name_tstgrp[i] = $scope.selected_name_tstgrp[i];

    }
    if ($scope.jsonData[0].Criteria[i].GrpID == "None") {
      $scope.selected_name_tstgrp[i] = $scope.selected_name_tstgrp[i];

    }

    if ($scope.jsonData[0].Criteria[i].GrpID == "Does Not Apply") {
      if ($scope.selected_name_tstgrp[i] == "Does Not Apply") {
        $scope.selected_name_tstgrp[i] = "Does Not Apply";
        $scope.menu1[i] = "menu4";
        // alert("1"+$scope.menu1[i]);
        $scope.grpIdSet = true;
      }
      if ($scope.grpIdSet === true) {
        $scope.selected_name_tstgrp[i] = "Does Not Apply";
        $scope.menu1[i] = "menu4";
        //alert("2"+$scope.menu1[i]);
        $scope.grpIdSet = true;
      } else {
        $scope.selected_name_tstgrp[i] = $scope.selected_name_tstgrp[i];
        $scope.grpIdSet = false;
      }
    } else {
      $scope.selected_name_tstgrp[i] = $scope.selected_name_tstgrp[i];
      $scope.grpIdSet = false;
    } */

  }
  
//inserting image at approperiate position for newly inserted issues
$scope.uploadImage1 = function(element ) {   
$scope.uploadImageClicked1 = true;
  var file = element.files[0];
  var reader = new FileReader();
  reader.onloadend = function() {
	 $scope.imgPos =0;
   if(element != null ) {
    let imgPstn = element.closest('tr').rowIndex;	
    imgPstn = imgPstn-1;   
    $scope.imgCnvrsn1.push('{"imgPosition" : "'+ imgPstn +'"', '"imgValue" :"'+ reader.result+'"}');  
	
  }
  }
  reader.readAsDataURL(file);

} 

  
  $scope.elemntClicked4 = function(i) {
	  $scope.newIssueRsltSelected = false;
}


  $scope.submit = function() {
    $scope.tDateId = new Date();
	//$scope.imgCnvrsn = $scope.imgCnvrsn.filter($scope.onlyUnique); 		
    //$scope.Mul_Issues = $scope.Mul_Issues.push($scope.Mul_Issues); 
 $scope.imgCnvrsnJSON = "[ "+$scope.imgCnvrsn+ " ]";
  $scope.imgCnvrsnJSON = IsJsonString($scope.imgCnvrsnJSON);     
  $scope.imgCnvrsnJSON1 = "[ "+$scope.imgCnvrsn1+ " ]";
  $scope.imgCnvrsnJSON1 = IsJsonString($scope.imgCnvrsnJSON1);  
  //document.write($scope.imgCnvrsnJSON );
         //document.write($scope.imgCnvrsnJSON[1].imgPosition); 
	    // document.write($scope.imgCnvrsnJSON[1].imgValue);  	 
	


    $scope.criteriaTests = " ";
    $scope.criteriaTestsJson = [];
    
	 

    $scope.jsonData.forEach(function(row) {
      $scope.criteriaTests = JSON.stringify(row);
      $scope.criteriaTestsJson = row;
    });
    //$scope.criteriaTestsNumber = $scope.selected_name_tstgrp.length;
    $scope.criteriaTestsNumber = $scope.criteriaTestsJson.Criteria.length;
    $scope.counter10 = " ";
  

    //looping only through test result options  uncomment line below 
    //for (i=0;i<$scope.criteriaTestsNumber;i++){	
    //for all result set loop through every condition regardless of user selecting test result  
    $scope.browserIndividualVersionsCollection1 = [];
    $scope.browserIndividualTypeCollection1 = [];
	
    $scope.occur = 0;
    var occurences = {};
    $scope.selectedResults=0;
    for (i = 0; i < $scope.criteriaTestsJson.Criteria.length; i++) {
      $scope.counter[i] = i;
      //if user don't select browser type it will get from default one 
	  //internet explorer 
      if ($scope.tstIESelected1[i] != "IEClicked1"){
        $scope.checkboxModel.value14[i] = $scope.chkBoxValIE1[i];
		if($scope.checkboxModel.value14[i] != true)
			$scope.checkboxModel.value14[i] = $scope.checkboxModel.value1;		
	  }
      if ($scope.tstIESelected1[i] == "IEClicked1"){
		  $scope.chkBoxValIE1[i] = true;
		  $scope.checkboxModel.value14[i] = $scope.chkBoxValIE1[i]; 
        //$scope.checkboxModel.value14[i] = $scope.checkboxModel.value14[i];
	  }	  
      if ($scope.checkboxModel.value14[i] != true)
        $scope.checkboxModel.value14[i] = "";
      if ($scope.checkboxModel.value14[i] == true)
        $scope.checkboxModel.value14[i] = "Internet Explorer";	
	
	
	//Edge 
      if ($scope.tstEdgeSelected1[i] != "EdgeClicked1"){
        $scope.checkboxModel.value51[i] = $scope.chkBoxValEdg1[i];
		if($scope.checkboxModel.value51[i] != true)
		$scope.checkboxModel.value51[i] = $scope.checkboxModel.value5;	
		
	  }
      if ($scope.tstEdgeSelected2[i] == "EdgeClicked1")
        $scope.checkboxModel.value51[i] = $scope.checkboxModel.value51[i];
      if ($scope.checkboxModel.value51[i] != true)
        $scope.checkboxModel.value51[i] = "";
      if ($scope.checkboxModel.value51[i] == true)
        $scope.checkboxModel.value51[i] = "Edge";
	
      //google chrome 
      if ($scope.tstChromeSelected2[i] != "ChromeClicked2"){
        $scope.checkboxModel.value21[i] = $scope.chkBoxValChrm1[i]; 
		if($scope.checkboxModel.value21[i] != true)
			$scope.checkboxModel.value21[i] = $scope.checkboxModel.value2;	
	  }
      if ($scope.tstChromeSelected2[i] == "ChromeClicked2"){
        if($scope.chkBoxValChrm1[i] != undefined){		  
        $scope.chkBoxValChrm1[i] = true; //$scope.checkboxModel.value21[i];
		$scope.checkboxModel.value21[i] = $scope.chkBoxValChrm1[i];
	  }		
	  }		  
     /* if ($scope.checkboxModel.value21[i] != true)
        $scope.checkboxModel.value21[i] = "";*/
      if ($scope.checkboxModel.value21[i] == true)
        $scope.checkboxModel.value21[i] = "Chrome"; 
	
	
	
	//safari 
      if ($scope.tstSafariSelected2[i] != "SafariClicked2"){
        $scope.checkboxModel.value31[i] = $scope.chkBoxValSaf1[i];
		if($scope.checkboxModel.value31[i] != true)
			$scope.checkboxModel.value31[i] = $scope.checkboxModel.value3;	
		
	  }
	
      if ($scope.tstSafariClicked2[i] == "SafariClicked2")
        $scope.checkboxModel.value31[i] = $scope.checkboxModel.value31[i];
      if ($scope.checkboxModel.value31[i] != true)
        $scope.checkboxModel.value31[i] = "";
      if ($scope.checkboxModel.value31[i] == true)
        $scope.checkboxModel.value31[i] = "Safari";
	
	//Firefox 

      if ($scope.tstFirefoxClicked2[i] != "FirefoxClicked2"){
        $scope.checkboxModel.value41[i] = $scope.chkBoxValFrfx1[i];
		if($scope.checkboxModel.value41[i] != true)
		$scope.checkboxModel.value41[i] = $scope.checkboxModel.value3;			
	  }
      if ($scope.tstFirefoxClicked2[i] == "FirefoxClicked2")
        $scope.checkboxModel.value41[i] = $scope.checkboxModel.value41[i];
      if ($scope.checkboxModel.value41[i] != true)
        $scope.checkboxModel.value41[i] = "";
      if ($scope.checkboxModel.value41[i] == true)
        $scope.checkboxModel.value41[i] = "Firefox";	

      if ($scope.otherBrowser1[i] == true)
        $scope.otherBrowser1[i] = "Other Browser";
	if ($scope.otherBrowser1[i] != true)
        $scope.otherBrowser1[i] = "";

      //if user don't select browser version it will get from default one

      if ($scope.tstIESelected1[i] != "IEClicked1") {		  
        $scope.selected_name_ieVersnl[i] = $scope.default_ieVersn1[i];  
        $scope.default_ieVersn1[i] = $scope.default_ieVersn1[i].toString().trim();		
        if($scope.default_ieVersn1[i] == " " || $scope.default_ieVersn1[i] == "")
		$scope.selected_name_ieVersnl[i] = $scope.selected_name_ieVersn;		
      }
	   
       if ($scope.tstIESelected1[i] == "IEClicked1") {
		 if($scope.selected_name_ieVersnl[i] != undefined ) 
        $scope.selected_name_ieVersnl[i] = $scope.selected_name_ieVersnl[i];
      }
	  if($scope.selected_name_ieVersnl[i] == undefined)
		  $scope.selected_name_ieVersnl[i] = " ";	  

      if ($scope.tstEdgeSelected1[i] == "EdgeClicked1") {
        $scope.selected_name_edVersnl[i] = $scope.selected_name_edVersnl[i];
      }
      if ($scope.tstEdgeSelected1[i] != "EdgeClicked1") {
        $scope.selected_name_edVersnl[i] = $scope.default_edgVersn1[i];
		 $scope.default_edgVersn1[i] = $scope.default_edgVersn1[i].toString().trim();
		 if($scope.default_edgVersn1[i] == " " || $scope.default_edgVersn1[i] == "")
		$scope.selected_name_edVersnl[i] = $scope.selected_name_edVersn;	
		
      }
	  
      if ($scope.tstChromeSelected1[i] == "ChromeClicked1") {
        if($scope.selected_name_chVersnl[i] != undefined )
        $scope.selected_name_chVersnl[i] = $scope.selected_name_chVersnl[i];
	   //alert("    chrome version  " + $scope.selected_name_chVersnl[i]);   
      }
      if ($scope.tstChromeSelected1[i] != "ChromeClicked1") {
        $scope.selected_name_chVersnl[i] = $scope.default_chrVersn1[i];
		$scope.default_chrVersn1[i] = $scope.default_chrVersn1[i].toString().trim();
		if($scope.default_chrVersn1[i] == " " || $scope.default_chrVersn1[i] == "")
		$scope.selected_name_chVersnl[i] = $scope.selected_name_chVersn;	
      }
	  /*if($scope.selected_name_chVersnl[i] == undefined)
		  $scope.selected_name_chVersnl[i] = ""; */

      if ($scope.tstSafariSelected1[i] == "SafariClicked1") {
        $scope.selected_name_sfVersnl[i] = $scope.selected_name_sfVersnl[i];
      }
      if ($scope.tstSafariSelected1[i] != "SafariClicked1") {
        $scope.selected_name_sfVersnl[i] = $scope.default_sfVersn1[i];
		$scope.default_sfVersn1[i] = $scope.default_sfVersn1[i].toString().trim();
		if($scope.default_sfVersn1[i] == " " || $scope.default_sfVersn1[i] == "")
		$scope.selected_name_sfVersnl[i] = $scope.selected_name_sfVersn;
      }

      if ($scope.tstFirefoxSelected1[i] == "FirefoxClicked1") {
        $scope.selected_name_fxVersnl[i] = $scope.selected_name_fxVersnl[i];
      }
      if ($scope.tstFirefoxSelected1[i] != "FirefoxClicked1") {
        $scope.selected_name_fxVersnl[i] = $scope.default_frfxVersn1[i];
		$scope.default_frfxVersn1 = $scope.default_frfxVersn1.toString().trim();
		if($scope.default_frfxVersn1[i] == " " || $scope.default_frfxVersn1[i] == "")
		$scope.selected_name_fxVersnl[i] = $scope.selected_name_fxVersn;
      }	  
      //$scope.selected_name_tstgrp[i] = $scope.selected_name_tstgrp[c]; 

      $scope.browserIndividualVersionsCollection1[i] = '","S_ieVrsh": "' + $scope.selected_name_ieVersnl[i] + '","S_edgeVrsn": "  ' + $scope.selected_name_edVersnl[i] + '  ","S_chromeVrsn": "  ' + $scope.selected_name_chVersnl[i] +'  ","S_sfVrsn": "  ' + $scope.selected_name_sfVersnl[i] + '  ","S_firefoxVrsn": "  ' + $scope.selected_name_fxVersnl[i] + '  ","S_othrBrsVrsn": "  ' + $scope.entOthrBrsrIDVrsn1[i];
      $scope.browserIndividualTypeCollection1[i] = ' ","S_ie": "  ' + $scope.checkboxModel.value14[i] + '  ","S_edge": "  ' + $scope.checkboxModel.value51[i] + '  ","S_chrome": "  ' + $scope.checkboxModel.value21[i] + '  ","S_safari": "  ' + $scope.checkboxModel.value31[i] + '  ","S_firefox": "  ' + $scope.checkboxModel.value41[i] + '  ","S_other": "  ' + $scope.entOthrBrsrIDl[i];
      //$scope.browserVersionsCollection1[i] = '","T_intExplr": "'+$scope.checkboxModel.value14[i]+'","T_intExplrVrsn": "'+$scope.selected_name_ieVersnl[i]+'","T_edge": "'+$scope.checkboxModel.value51[i]+ '","T_edgVrsn": "'+ $scope.selected_name_edVersnl[i]+'","T_Chrome": "'+$scope.checkboxModel.value21[i]+'","T_chrmVrsn": "'+ $scope.selected_name_chVersnl[i]+'","T_Sfri": "'+$scope.checkboxModel.value31[i]+ '","T_sfrVrsn": "'+$scope.selected_name_sfVersnl[i] + '","T_frfx": "'+$scope.checkboxModel.value41[i]+'","T_frfxVrsn": "'+$scope.selected_name_fxVersnl[i]+'","T_OthBrsr": "'+$scope.otherBrowser1[i]+'","T_OthBrsrVrsn": "'+$scope.entOthrBrsrIDl[i] ;	
      $scope.browserVersionsCollection1[i] = $scope.selected_name_ieVersnl[i] + " " + $scope.selected_name_edVersnl[i] + " " + $scope.selected_name_chVersnl[i] + " " + " " + $scope.selected_name_sfVersnl[i] + " " + $scope.selected_name_fxVersnl[i] + " " + $scope.entOthrBrsrIDVrsn1[i];
      $scope.browserTypeCollection1[i] = $scope.checkboxModel.value14[i] + "  " + $scope.checkboxModel.value51[i] + "   " + $scope.checkboxModel.value21[i] + "  " + $scope.checkboxModel.value31[i] + "  " + $scope.checkboxModel.value41[i] + "  " + $scope.otherBrowser1[i] + " " + $scope.entOthrBrsrIDl[i];
      
      //for remediation details and date field 

      if ($scope.selected_name_tstgrp[i] == "Pass" || $scope.selected_name_tstgrp[i] == "Does Not Apply") {
				/*
        var table = document.getElementById('rmdTble');
        for (var r = 0, n = table.rows.length; r < n; r++) {
          for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
            table.rows[i + 1].cells[9].innerHTML = "Not Required";
            table.rows[i + 1].cells[10].innerHTML = "Not Required";
            break;
          }
          break;
        }
				*/
        $scope.rmdatnDtlID[i] = "Not Required";
      }

      //assigning either default or selected test result   

      if ($scope.tstRsltSlcted[i] !== true)
        $scope.selected_name_tstgrp[i] = $scope.default_SelectedResult[i];
      if ($scope.tstRsltSlcted[i] == true)
        $scope.selected_name_tstgrp[i] = $scope.selected_name_tstgrp[i];

      if ($scope.glblRsltSlcted[i] !== true)
        $scope.selected_name_glbl[i] = $scope.default_glblRslt[i];
      if ($scope.glblRsltSlcted[i] == true)
        $scope.selected_name_glbl[i] = $scope.selected_name_glbl[i];

      /*if ($scope.glblRsltSlcted ==="GlobalResultSelected"+i )
       $scope.selected_name_glbl[i]=$scope.selected_name_glbl[i]; */


      if ($scope.testerCommentID[i] == undefined)
        $scope.testerCommentID[i] = " ";
     // $scope.testerCommentID[i] = $scope.testerCommentID[i].replace(/""/g, '"');
      if ($scope.selected_name_glbl[i] == undefined)
        $scope.selected_name_glbl[i] = " ";
      if ($scope.browserTypeCollection1[i] == undefined)
        $scope.browserTypeCollection1[i] = " ";
      if ($scope.imgCnvrsnJSON[i] == undefined)
        $scope.imgCnvrsnJSON[i] = "   ";
	 $scope.testerCommentID[i] = $scope.testerCommentID[i].toString().replace(/""/g, '"');
     $scope.testerCommentID[i] = $scope.testerCommentID[i].toString().replace(/\n/g, " ");
	 
	 if ($scope.location[i] == undefined)
      $scope.location[i] = " ";
    $scope.location[i] = $scope.location[i].toString().replace(/""/g, '"');
	$scope.location[i] = $scope.location[i].toString().replace(/\n/g, " ");

	
	

      //$scope.testresult[i] = '{"CrtID": "'+$scope.criteriaTestsJson.Criteria[i].CrtID+'",'+ '"Test": "'+$scope.criteriaTestsJson.Criteria[i].Test+'",'+'"TestName": "'+$scope.criteriaTestsJson.Criteria[i].TestName+'",'+ '"TestID": "'+$scope.criteriaTestsJson.Criteria[i].TestID+'",'+ '"TestCondition": "'+$scope.criteriaTestsJson.Criteria[i].TestCondition+'",'+'"IssueNo": "'+ "Issue "+i +'","TestResult": "'+ $scope.selected_name_tstgrp[i]+ '","OptMenu1": "'+$scope.menu1[i]+'","TesterComment": "'+$scope.testerCommentID[i]+'","T_brwsrType": "'+$scope.browserTypeCollection1[i]  +'","T_brwsrVrsn": "'+$scope.browserVersionsCollection1[i]+ '","ImageSrc":"'+$scope.imgCnvrsnJSON[i]+'","GlobalIssue": "'+ $scope.selected_name_glbl[i]+'","RemediationDate": "'+$scope.rmdatnDatelID [i] +'","Counter": "'+$scope.counter[i];
      //$scope.testresult[i]=$scope.testresult[i].filter(String);  
     // $scope.testresult[i] = '{"CrtID": "' + $scope.criteriaTestsJson.Criteria[i].CrtID + '",' + '"Test": "' + $scope.criteriaTestsJson.Criteria[i].Test + '",' + '"TestName": "' + $scope.criteriaTestsJson.Criteria[i].TestName + '",' + '"TestID": "' + $scope.criteriaTestsJson.Criteria[i].TestID + '",' + '"TestCondition": "' + $scope.criteriaTestsJson.Criteria[i].TestCondition + '",' + '"IssueNo": "' + "Issue " + i + '","TestResult": "' + $scope.selected_name_tstgrp[i] + '","OptMenu1": "' + $scope.menu1[i] + '","TesterComment": " ' + $scope.testerCommentID[i] + $scope.browserIndividualTypeCollection1[i] + ' ","T_brwsrType": "' + $scope.browserTypeCollection1[i] + '","T_brwsrVrsn": "' + $scope.browserVersionsCollection1[i] + $scope.browserIndividualVersionsCollection1[i] + '","ImageSrc":" ' + $scope.imgCnvrsnJSON[i] + ' ","GlobalIssue": " ' + $scope.selected_name_glbl[i] + ' ","RemediationDate": "' + $scope.rmdatnDatelID[i] + '","Counter": "' + $scope.counter[i];
    
	 $scope.testresult[i] = '{"CrtID": "' + $scope.criteriaTestsJson.Criteria[i].CrtID + '",'+ '"DisabilityImpact": "' + $scope.criteriaTestsJson.Criteria[i].DisabilityImpact+ '",'+ '"Test": "' + $scope.criteriaTestsJson.Criteria[i].Test + '",' + '"TestName": "' + $scope.criteriaTestsJson.Criteria[i].TestName + '",' + '"TestID": "' + $scope.criteriaTestsJson.Criteria[i].TestID + '",' + '"TestCondition": "' + $scope.criteriaTestsJson.Criteria[i].TestCondition + '",' + '"IssueNo": "' + "Issue " + i + '","TestResult": "' + $scope.selected_name_tstgrp[i] + '","OptMenu1": "' + $scope.menu1[i] +  '","location": "' + $scope.location[i]  + '","TesterComment": "' + $scope.testerCommentID[i] + $scope.browserIndividualTypeCollection1[i] + '","T_brwsrType": "' + $scope.browserTypeCollection1[i] + '","T_brwsrVrsn": "' + $scope.browserVersionsCollection1[i] + $scope.browserIndividualVersionsCollection1[i] + '","GlobalIssue": "' + $scope.selected_name_glbl[i] + '","RemediationDate": "' + $scope.rmdatnDatelID[i] +  '","DraftReport": "' + $scope.draftReport + 	 '","Counter": "' + $scope.counter[i] + '","ImageSrc":"';
     
	 if($scope.selected_name_tstgrp[i] != undefined){
		 $scope.selectedResults = $scope.selectedResults+1;	 
	 }
			for(let m=0;m<$scope.imgCnvrsnJSON.length;m++){	
             if($scope.imgCnvrsnJSON[m].imgValue == undefined){
				$scope.testresult[i] = $scope.testresult[i] +" "; 
			 }			
			if($scope.imgCnvrsnJSON[m].imgPosition != undefined){
           
	       if($scope.counter[i] == $scope.imgCnvrsnJSON[m].imgPosition){     			   
            
			$scope.testresult[i] = $scope.testresult[i] +$scope.imgCnvrsnJSON[m].imgValue;
           } 
		  if(i != $scope.imgCnvrsnJSON[m].imgPosition){       
           
	       $scope.testresult[i] = $scope.testresult[i] +" ";
		   } 
	   }
	   
	  }   
   
	
      $scope.remarkExplanation(i);
      //for (let n = 0; n < $scope.selected_name_tstgrp.length; n++) {
      /*let num = $scope.selected_name_tstgrp[i];
      occurences[num] = occurences[num] ? occurences[num] + 1 : 1;
	 
      //}
      $scope.occur = occurences[undefined];
      if ($scope.occur == undefined) {
        $scope.testresult[i] = $scope.testresult[i];
      }

      if ($scope.occur > 0) {
       // $scope.testresult[i] = $scope.testresult[i] + '"}';
      }
        */
      if ($scope.testresult[i] != undefined) {
		  //$scope.testresult[i] = $scope.testresult[i] + '"}';		 
        $scope.totTstRslt.push($scope.testresult[i]);
      }
    }

    $scope.browserVersionsCollection1.length;
    $scope.browserIndividualVersionsCollection11 = [];
    $scope.browserIndividualTypeCollection11 = [];
    //looping through newly added rows for issues
    var m = $scope.counter.length;
    //var i = $scope.selectedResultIndex;  
    $scope.occur = 0;
    var occurences = {};
    for (var k = 0; k < $scope.indexCollection.length; k++) {
     
      var i = $scope.indexCollection[k];
	  //if user don't select browser type it will get from default one from test environment section
	  //internet explorer 
      if ($scope.tstIEClicked21[k] != "IEClicked21")
        $scope.checkboxModel.value141[k] = $scope.checkboxModel.value1;
      if ($scope.tstIEClicked21[k] == "IEClicked21")
        $scope.checkboxModel.value141[k] = $scope.checkboxModel.value141[k];
      if ($scope.checkboxModel.value141[k] == undefined)
        $scope.checkboxModel.value141[k] = " ";
      if ($scope.checkboxModel.value141[k] == true)
        $scope.checkboxModel.value141[k] = "Internet Explorer";

      if ($scope.tstChromeSelected11[k] != "ChromeClicked11")
        $scope.checkboxModel.value211[k] = $scope.checkboxModel.value2;
      if ($scope.tstChromeSelected11[k] == "ChromeClicked11")
        $scope.checkboxModel.value211[k] = $scope.checkboxModel.value211[i];
      if ($scope.checkboxModel.value211[k] == undefined)
        $scope.checkboxModel.value211[k] = " ";
      if ($scope.checkboxModel.value211[k] == true)
        $scope.checkboxModel.value211[k] = "Chrome";

      if ($scope.tstSafariSelected11[k] != "SafariClicked11")
        $scope.checkboxModel.value311[k] = $scope.checkboxModel.value3;
      if ($scope.tstSafariSelected11[k] == "SafariClicked11")
        $scope.checkboxModel.value311[k] = $scope.checkboxModel.value311[k];
      if ($scope.checkboxModel.value311[k] == undefined)
        $scope.checkboxModel.value311[k] = " ";
      if ($scope.checkboxModel.value311[k] == true)
        $scope.checkboxModel.value311[k] = "Safari";

      if ($scope.tstFirefoxSelected11[k] != "FirefoxClicked11")
        $scope.checkboxModel.value411[k] = $scope.checkboxModel.value4;
      if ($scope.tstFirefoxSelected11[k] == "FirefoxClicked11")
        $scope.checkboxModel.value411[k] = $scope.checkboxModel.value411[k];
      if ($scope.checkboxModel.value411[k] == undefined)
        $scope.checkboxModel.value411[k] = " ";
      if ($scope.checkboxModel.value411[k] == true)
        $scope.checkboxModel.value411[k] = "Firefox";

      if ($scope.tstEdgeClicked21[k] != "EdgeClicked21")
        $scope.checkboxModel.value511[k] = $scope.checkboxModel.value5;
      if ($scope.tstEdgeClicked21[k] == "EdgeClicked21")
        $scope.checkboxModel.value511[k] = $scope.checkboxModel.value511[k];
      if ($scope.checkboxModel.value511[k] == undefined)
        $scope.checkboxModel.value511[k] = " ";
      if ($scope.checkboxModel.value511[k] == true)
        $scope.checkboxModel.value511[k] = "Edge";

      if ($scope.otherBrowser1[k] == true)
        $scope.otherBrowser1[k] = "Other Browser";

      //if user don't select browser version it will get from default one  from test environment section

      if ($scope.tstIESelected21[k] != "IEClicked") {
        $scope.selected_name_ieVersnl1[k] = $scope.selected_name_ieVersn;
		
      }
      if ($scope.tstIESelected21[k] == "IEClicked") {
        $scope.selected_name_ieVersnl1[k] = $scope.selected_name_ieVersnl1[k];
      }

      if ($scope.tstEdgeSelected21[k] == "EdgeClicked") {
        $scope.selected_name_edVersnl1[k] = $scope.selected_name_edVersnl1[k];
      }
      if ($scope.tstEdgeSelected21[k] != "EdgeClicked") {
        $scope.selected_name_edVersnl1[k] = $scope.selected_name_edVersn;
      }
      if ($scope.tstChromeSelected21[k] == "ChromeClicked") {
        $scope.selected_name_chVersnl1[k] = $scope.selected_name_chVersnl1[k];
      }
      if ($scope.tstChromeSelected21[k] != "ChromeClicked") {
        $scope.selected_name_chVersnl1 = $scope.selected_name_chVersn;
      }

      if ($scope.tstSafariSelected21[k] == "SafariClicked") {
        $scope.selected_name_sfVersnl1[k] = $scope.selected_name_sfVersnl1[k];
      }
      if ($scope.tstSafariSelected21[k] != "SafariClicked") {
        $scope.selected_name_sfVersnl1[k] = $scope.selected_name_sfVersn;
      }

      if ($scope.tstFirefoxSelected21[k] == "FirefoxClicked") {
        $scope.selected_name_fxVersnl1[k] = $scope.selected_name_fxVersnl1[k];
      }
      if ($scope.tstFirefoxSelected21[k] != "FirefoxClicked") {
        $scope.selected_name_fxVersnl1[k] = $scope.selected_name_fxVersn;
      }


      //$scope.selected_name_tstgrp[i] = $scope.selected_name_tstgrp[c]; 

      $scope.browserIndividualVersionsCollection11[k] = '","S_ieVrsh": "' + $scope.selected_name_ieVersnl1[k] + '","S_edgeVrsn": "  ' + $scope.selected_name_edVersnl1[k] + '  ","S_chromeVrsn": "' + $scope.selected_name_chVersnl1[k] + '","S_sfVrsn": "' + $scope.selected_name_sfVersnl1[k] + '  ","S_firefoxVrsn": "  ' + $scope.selected_name_fxVersnl1[k] + '  ","S_othrBrsVrsn": "  ' + $scope.entOthrBrsrIDVrsn1[k];
      $scope.browserIndividualTypeCollection11[k] = '","S_ie": "  ' + $scope.checkboxModel.value141[k] + '  ","S_edge": "  ' + $scope.checkboxModel.value511[k] + '  ","S_chrome": "  ' + $scope.checkboxModel.value211[k] + '  ","S_safari": "  ' + $scope.checkboxModel.value311[k] + '  ","S_firefox": "' + $scope.checkboxModel.value411[k] + '  ","S_other": "' + $scope.entOthrBrsrIDl[k];
      //$scope.browserVersionsCollection1[k] = '","T_intExplr": "'+$scope.checkboxModel.value141[k]+'","T_intExplrVrsn": "'+$scope.selected_name_ieVersnl1[k]+'","T_edge": "'+$scope.checkboxModel.value511[k]+ '","T_edgVrsn": "'+ $scope.selected_name_edVersnl1[k]+'","T_Chrome": "'+$scope.checkboxModel.value211[k]+'","T_chrmVrsn": "'+ $scope.selected_name_chVersnl1[k]+'","T_Sfri": "'+$scope.checkboxModel.value311[k]+ '","T_sfrVrsn": "'+$scope.selected_name_sfVersnl1[k] + '","T_frfx": "'+$scope.checkboxModel.value411[k]+'","T_frfxVrsn": "'+$scope.selected_name_fxVersnl1[k]+'","T_OthBrsr": "'+$scope.otherBrowser1[k]+'","T_OthBrsrVrsn": "'+$scope.entOthrBrsrIDl[k] ;	
      $scope.browserVersionsCollection11[k] = $scope.selected_name_ieVersnl1[k] + " " + $scope.selected_name_edVersnl1[k] + " " + $scope.selected_name_chVersnl1[k] + " " + $scope.selected_name_sfVersnl1[k] + " " + $scope.selected_name_fxVersnl1[k] + " " + $scope.entOthrBrsrIDVrsn1[k] + $scope.browserIndividualVersionsCollection11[k];
      $scope.browserTypeCollection11[k] = $scope.checkboxModel.value141[k] + "  " + $scope.checkboxModel.value511[k] + "   " + $scope.checkboxModel.value211[k] + "  " + $scope.checkboxModel.value311[k] + "  " + $scope.checkboxModel.value411[k] + "  " + $scope.otherBrowser1[k] + " " + $scope.entOthrBrsrIDl[k] + $scope.browserIndividualTypeCollection11[k];

      if ($scope.testerCommentID1[k] == undefined)
        $scope.testerCommentID1[k] = " ";
      //$scope.testerCommentID1[k] = $scope.testerCommentID[i].replace(/""/g, '"');
      if ($scope.selected_name_glbl1[k] == undefined)
        $scope.selected_name_glbl1[k] = " ";


      if ($scope.browserTypeCollection11[k] == undefined)
        $scope.browserTypeCollection11[k] = " ";

      if ($scope.imgCnvrsnJSON1[k] == undefined)
        $scope.imgCnvrsnJSON1[k] = "   ";


     
		  
		  if ($scope.imgCnvrsnJSON1[k] == undefined)
      $scope.imgCnvrsnJSON1[k] = "   ";   
 $scope.testerCommentID1[k] = $scope.testerCommentID1[k].toString().replace(/""/g, '"');
 $scope.testerCommentID1[k] = $scope.testerCommentID1[k].toString().replace(/\n/g, " ");
 
  if ($scope.location1[k] == undefined)
      $scope.location1[k] = " ";  
 $scope.location1[k] = $scope.location1[k].toString().replace(/""/g, '"');
 $scope.location1[k] = $scope.location1[k].toString().replace(/\n/g, " ");
 let o = i+1;let p=k+1; 
    //$scope.testresult2[k] = '{"CrtID": "' + $scope.criteriaTestsJson.Criteria[i].CrtID + '",' + '"Test": "' + $scope.criteriaTestsJson.Criteria[i].Test + '",' + '"TestName": "' + $scope.criteriaTestsJson.Criteria[i].TestName + '",' + '"TestID": "' + $scope.criteriaTestsJson.Criteria[i].TestID + '",' + '"TestCondition": "' + $scope.criteriaTestsJson.Criteria[i].TestCondition + '",' + '"IssueNo": "' + "Issue " + i + "." + k + '","TestResult": "' + $scope.selected_name_tstgrp1[k] + '","TesterComment": "' + $scope.testerCommentID1[k] + '","T_brwsrType": "' + $scope.browserTypeCollection11[k] + '","T_brwsrVrsn": "' + $scope.browserVersionsCollection11[k] + '","ImageSrc":"' + $scope.imgCnvrsnJSON1[k] + '","GlobalIssue": "' + $scope.selected_name_glbl1[k] + '","RemediationDate": "' + $scope.rmdatnDatelID1[k] + '","AddedIssue": "' + true + '","Counter": "' + m;
  // $scope.testresult2[k] = '{"CrtID": "' + $scope.criteriaTestsJson.Criteria[i].CrtID + '",' + '"Test": "' + $scope.criteriaTestsJson.Criteria[i].Test + '",' + '"TestName": "' + $scope.criteriaTestsJson.Criteria[i].TestName + '",' + '"TestID": "' + $scope.criteriaTestsJson.Criteria[i].TestID + '",' + '"TestCondition": "' + $scope.criteriaTestsJson.Criteria[i].TestCondition + '",' + '"IssueNo": "' + "Issue " + i + "." + k + '","TestResult": "' + $scope.selected_name_tstgrp1[k] + '","TesterComment": "' + $scope.testerCommentID1[k] + '","T_brwsrType": "' + $scope.browserTypeCollection11[k] + '","T_brwsrVrsn": "' + $scope.browserVersionsCollection11[k] + '","GlobalIssue": "' + $scope.selected_name_glbl1[k] + '","RemediationDate": "' + $scope.rmdatnDatelID1[k] + '","AddedIssue": "' + true + '","Counter": "' + m;
$scope.testresult2[k] = '{"CrtID": "' + $scope.criteriaTestsJson.Criteria[i].CrtID + '",'  + '"DisabilityImpact": "' + $scope.criteriaTestsJson.Criteria[i].DisabilityImpact+'",' +'"Test": "' + '*'+ $scope.criteriaTestsJson.Criteria[i].Test + '",' + '"TestName": "' +'*'+ $scope.criteriaTestsJson.Criteria[i].TestName + '",' + '"TestID": "' +'*'+ $scope.criteriaTestsJson.Criteria[i].TestID + '",' + '"TestCondition": "' +'*'+ $scope.criteriaTestsJson.Criteria[i].TestCondition + '",' + '"IssueNo": "' + "Issue " + o + "." + p + '","TestResult": "' + $scope.selected_name_tstgrp1[k] +   '","location": "' + $scope.location1[k]  +'","OptMenu1": "' + $scope.menu1[i] + '","TesterComment": "' + $scope.testerCommentID1[k] + '","T_brwsrType": "' + $scope.browserTypeCollection11[k] + '","T_brwsrVrsn": "' + $scope.browserVersionsCollection11[k] + '","GlobalIssue": "' + $scope.selected_name_glbl1[k] + '","RemediationDate": "' + $scope.rmdatnDatelID1[k] + '","AddedIssue": "' + true + '","Counter": "' + m + '","ImageSrc":"';

      
 for(let p=0;p<$scope.imgCnvrsnJSON1.length;p++){
	        if($scope.imgCnvrsnJSON[p].imgValue == undefined){
				$scope.testresult2[k] = $scope.testresult2[k] +" ";
			 }
	
			
			if($scope.imgCnvrsnJSON1[p].imgPosition != undefined){				 
           
	       if(m+1 == $scope.imgCnvrsnJSON1[p].imgPosition){     			   
            
			$scope.testresult2[k] = $scope.testresult2[k] +$scope.imgCnvrsnJSON1[p].imgValue;
			 
           } 
		   if(m != $scope.imgCnvrsnJSON1[p].imgPosition){       
           
	       $scope.testresult2[k] = $scope.testresult2[k] +" ";
		   }
	   }
	   
	  }   
		  
		  
		 
      let num = $scope.selected_name_tstgrp[k];
      occurences[num] = occurences[num] ? occurences[num] + 1 : 1;
      //}
      $scope.occur = occurences[undefined];
      if ($scope.occur == undefined) {
        $scope.testresult2[k] = $scope.testresult2[k];
      }
      /*
      if ($scope.occur > 0) {
        $scope.testresult2[k] = $scope.testresult2[k] + '"}';
      } 	  
	  if( $scope.newIssueRsltSelected == true){
   if($scope.uploadImageClicked1 == false){
    $scope.testresult2[k] = $scope.testresult2[k] + '."}';	
    }else 	  
   $scope.testresult2[k] = $scope.testresult2[k] + '"}';	
   }   
   */
    if( $scope.newIssueRsltSelected == false){
   if($scope.uploadImageClicked1 == false){
    $scope.testresult2[k] = $scope.testresult2[k] + '.';	
    }
   }   

      m++;
	  
	  
  
  if ($scope.selected_name_tstgrp1[k] == '' ){
	   $scope.newRsltSlctrion =  false;	  
	 
  }
  
  if ($scope.selected_name_tstgrp1[k] != undefined ){
	   $scope.newRsltSlctrion =  true;	  
	
  }
 
      if ($scope.selected_name_tstgrp1[k] == undefined) {
        $scope.draftReport = true;
		 $scope.newRsltSlctrion =  false;
         $scope.newIssueRsltSelected = false;		 
        $scope.RemarkExplntn[k] = ['{"crtId": "' + $scope.criteriaTestsJson.Criteria[k].CrtID + '", "explanation":"' + "Test Result is not selected for this " + '"}'];
        $scope.RemarkExplntnCollection.push($scope.RemarkExplntn[k]);
        if ($scope.rmdatnDtlID1[k] == undefined){
        $scope.rmdatnDtlID1[k] = " ";	
        $scope.testresult[k] = $scope.testresult[k] + '","DraftReport": "' + $scope.draftReport + '"}'; }
		 if ($scope.rmdatnDtlID1[k] == undefined){
        $scope.rmdatnDtlID1[k] = " ";	
        $scope.testresult[k] = $scope.testresult[k] + '","DraftReport": "' + $scope.draftReport + '"}'; }
      }

      if ($scope.selected_name_tstgrp1[k] == "Pass") {
		  $scope.newIssueRsltSelected = true;
        $scope.resultFails[k] = false;
        $scope.resultFailsCollection.push($scope.resultFails[k]);
        $scope.RemarkExplntn[k] = ['{"crtId": "' + $scope.criteriaTestsJson.Criteria[i].CrtID + '", "explanation":"' + "All Test Condition Successfully Passed " + '"}'];
        $scope.RemarkExplntnCollection.push($scope.RemarkExplntn[k]);
        $scope.rmdatnDtlID1[k] = "Not Required";
        $scope.crtRsltCollection.push($scope.selected_name_tstgrp1[k]);
        $scope.crtCollection.push($scope.criteriaTestsJson.Criteria[k].CrtID);
        $scope.testresult2[k] = $scope.testresult2[k] + '","RemediationDetails": "' + $scope.rmdatnDtlID1[k] + '"}';
		//$scope.testresult2[k] = $scope.testresult2[k] + '","RemediationDetails": "' + $scope.rmdatnDtlID1[k];
      } else if ($scope.selected_name_tstgrp1[k] == "Fail") {
		 $scope.newIssueRsltSelected = true; 
        $scope.resultFails[k] = true;
        $scope.resultFailsCollection.push($scope.resultFails[k]);
        $scope.testerCommentID[k] = $scope.testerCommentID[i].replace(/""/g, '"');
        $scope.RemarkExplntn[k] = ['{"crtId": "' + $scope.criteriaTestsJson.Criteria[i].CrtID + '", "explanation":"<b>' + "For " + $scope.criteriaTestsJson.Criteria[i].TestName + ", " + $scope.testerCommentID[k] + '</b>"}'];
        $scope.RemarkExplntnCollection.push($scope.RemarkExplntn[k]);
        $scope.testresult2[k] = $scope.testresult2[k] + '","RemediationDetails": "' + $scope.rmdatnDtlID1[k] + '"}';
		//$scope.testresult2[k] = $scope.testresult2[k] + '","RemediationDetails": "' + $scope.rmdatnDtlID1[k];
        $scope.crtRsltCollection.push($scope.selected_name_tstgrp1[k]);
        $scope.crtCollection.push($scope.criteriaTestsJson.Criteria[k].CrtID);

      } else if ($scope.selected_name_tstgrp1[k] == "Does Not Apply") {
		$scope.newIssueRsltSelected = true;
        $scope.resultFails[k] = false;
        $scope.resultFailsCollection.push($scope.resultFails[k]);
        $scope.RemarkExplntn[k] = ['{"crtId": "' + $scope.criteriaTestsJson.Criteria[i].CrtID + '", "explanation":"' + " This test is not required " + '"}'];
        $scope.RemarkExplntnCollection.push($scope.RemarkExplntn[k]);
        $scope.rmdatnDtlID1[k] = "Not Required";
        $scope.crtRsltCollection.push($scope.selected_name_tstgrp1[k]);
        $scope.crtCollection.push($scope.criteriaTestsJson.Criteria[k].CrtID);
        $scope.testresult2[k] = $scope.testresult2[k] + '","RemediationDetails": "' + $scope.rmdatnDtlID1[k] + '"}';
		
      } else if ($scope.selected_name_tstgrp1[i] == "Not Tested") {
		  $scope.newIssueRsltSelected = true;
        $scope.resultFails[k] = false;
        $scope.resultFailsCollection.push($scope.resultFails[k]);
        $scope.RemarkExplntn[k] = ['{"crtId": "' + $scope.criteriaTestsJson.Criteria[i].CrtID + '", "explanation":"' + " One or more test conditions not tested " + '"}'];
        $scope.RemarkExplntnCollection.push($scope.RemarkExplntn[k]);
        $scope.testresult2[k] = $scope.testresult2[k] + '","RemediationDetails": "' + $scope.rmdatnDtlID1[k] + '"}';		
        $scope.crtRsltCollection.push($scope.selected_name_tstgrp1[k]);
        $scope.crtCollection.push($scope.criteriaTestsJson.Criteria[k].CrtID);

      } 
	   
      if ($scope.testresult2[k] != undefined) {
		 		  
        $scope.totTstRslt.push($scope.testresult2[k]);
	 
      }
    }
    //converting to json object
	
	if($scope.newIssueRsltSelected == false ){
  
}   
    
    $scope.RemarkExplntnCollectionJSON = '[' + $scope.RemarkExplntnCollection + ']';
    $scope.RemarkExplntnCollectionJSON = JSON.stringify($scope.RemarkExplntnCollectionJSON);
    $scope.RemarkExplntnCollectionJSON = JSON.parse($scope.RemarkExplntnCollectionJSON);

    if ($scope.submitClkCount == 0) {      
        
        $scope.submitVisited = false;
      }
   
   
    if ($scope.submitClkCount != 0) {  
      $scope.submitVisited = true;     
    }
	$scope.totTstRsltJson = "[" + $scope.totTstRslt + "]";
    $scope.totTstRsltJson = IsJsonString($scope.totTstRsltJson);
	$scope.totTstRsltString = $scope.totTstRslt.toString();
	$scope.totTstRsltString.replace(/""/g, '"');
	
	  	 
     $scope.testresult1 = '"Criteria":[' + $scope.totTstRsltString + ']';
	//$scope.criteriaResult = [];
    
  $scope.criteriaLength = $scope.selected_name.length;	
  $scope.criteriaResult2 =[];
  $scope.criteriaResult1 = " ";
  $scope.criteriaUnique = [];  
    var flags = [], i;
	 
    $scope.totTestCrtria = [];
	
    var flags = [], i;
	 
	 
      if ($scope.totTstRsltEdit ==0)
      $scope.totTstRsltLgth  = $scope.totTstRslt.length;
      else 
      $scope.totTstRsltLgth  = $scope.totTstRsltEdit;
  
    
	   
	$scope.criteriaResult	= [];
     $scope.scValueAssigned = [];    
     $scope.manSelctedConflvl = false;     
	 $scope.slctTstRslt = "";
	 $scope.criteriaResultString="";     	 
     $scope.successCriteriaFxn = function() {		 
	   $scope.failSelected = false;
       $scope.passSelected = false;      
       $scope.sameSCValue = false;
	   $scope.dnaSelected = false;
	   $scope.ntSelected =  false;	   
	   $scope.failSelectedAdditional = false;	
      if($scope.criteriaResultString != "")
      $scope.criteriaResultPush = $scope.criteriaResultString;	   
    
       for (let a = 0; a < $scope.totTstRsltJson.length; a++) {
		 // for (let a = 0; a < $scope.totTstRsltLgth; a++) {
        if ($scope.totTstRsltJson[a].TestResult != undefined) {
			 if(a>0){
			 if ($scope.totTstRsltJson[a].CrtID != $scope.totTstRsltJson[a-1].CrtID) {			  
			  $scope.failSelected = false;
              $scope.passSelected = false;
			  $scope.dnaSelected = false;
			  $scope.ntSelected = false;
            } 
		 } 
              if ($scope.totTstRsltJson[a].TestResult == "Fail") {				  
                $scope.selected_name[a] = "Does Not Support";
                $scope.failSelected = true;
                if ($scope.indexCollection.length > 0) {
                  let b = $scope.indexCollection[$scope.issueClicked];                  
                  $scope.dsbl_Impctd_grp[a] = $scope.criteriaTestsJson.Criteria[b].DisabilityImpact;                  
                } else
                  $scope.dsbl_Impctd_grp[a] = $scope.criteriaTestsJson.Criteria[a].DisabilityImpact;
			      
                
              }
			   
              if ($scope.totTstRsltJson[a].TestResult == "Pass") {
                   		
                if ($scope.failSelected == true) {
                  $scope.selected_name[a] = "Does Not Support";
                  
				  if ($scope.indexCollection.length > 0) {
                  let b = $scope.indexCollection[$scope.issueClicked];                  
                  $scope.dsbl_Impctd_grp[a] = $scope.criteriaTestsJson.Criteria[b].DisabilityImpact;                  
                } else
                  $scope.dsbl_Impctd_grp[a] = $scope.criteriaTestsJson.Criteria[a].DisabilityImpact;
                  

                } 
				
				
				else {
                  $scope.selected_name[a] = "Supports";
				  $scope.passSelected = true;
                  $scope.dsbl_Impctd_grp[a] = "";                  
                  
                }
              }
			  
			  if ($scope.totTstRsltJson[a].TestResult == "Does Not Apply") {
				 
                  
                if ($scope.failSelected == true ) {
                  $scope.selected_name[a] = "Does Not Support";				  
                  
				  if ($scope.indexCollection.length > 0) {
                  let b = $scope.indexCollection[$scope.issueClicked];                  
                  $scope.dsbl_Impctd_grp[a] = $scope.criteriaTestsJson.Criteria[b].DisabilityImpact;                  
                } else
                  $scope.dsbl_Impctd_grp[a] = $scope.criteriaTestsJson.Criteria[a].DisabilityImpact;
                  

                } else if ($scope.passSelected == true  ) {					
                  $scope.selected_name[a] = "Supports";
                  $scope.dsbl_Impctd_grp[a] = "";
                  $scope.passSelected = true;
                  
                } 
				
				else {					
				  $scope.dnaSelected = true;
                  $scope.selected_name[a] = "Not Applicable";
                  $scope.dsbl_Impctd_grp[a] = "";
                  
                }
				
              }

             
              if ($scope.totTstRsltJson[a].TestResult == "Not Tested") {
                if ($scope.failSelected == true) {
                  $scope.selected_name[a] = "Does Not Support";
                  
				  if ($scope.indexCollection.length > 0) {
                  let b = $scope.indexCollection[$scope.issueClicked];                  
                  $scope.dsbl_Impctd_grp[a] = $scope.criteriaTestsJson.Criteria[b].DisabilityImpact;                  
                } else
                  $scope.dsbl_Impctd_grp[a] = $scope.criteriaTestsJson.Criteria[a].DisabilityImpact;
                  

                } else if ($scope.passSelected == true) {
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
                  let b = $scope.indexCollection[$scope.issueClicked];                   			  
                  $scope.dsbl_Impctd_grp[a] = $scope.criteriaTestsJson.Criteria[b].DisabilityImpact;                  
                } else
                  $scope.dsbl_Impctd_grp[a] = $scope.criteriaTestsJson.Criteria[a].DisabilityImpact;
                  
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
			if( $scope.failSelected == true){            
				$scope.slctTstRslt = "FailSelected";
			}
			
			else if($scope.passSelected == true){
				 if( $scope.failSelected == true){            				
				  $scope.slctTstRslt = "FailSelected";
				}else 
				$scope.slctTstRslt = "PassSelected";
			}
			
			else if($scope.dnaSelected == true ){
					if( $scope.failSelected == true){            				
				    $scope.slctTstRslt = "FailSelected";
				   }else if($scope.passSelected == true){
				   $scope.slctTstRslt = "PassSelected";
				   }else 
				   $scope.slctTstRslt = "DNASelected";
			}
			
			else if($scope.ntSelected == true){
					if( $scope.failSelected == true){            				
					$scope.slctTstRslt = "FailSelected";
					}else if($scope.passSelected == true){
					$scope.slctTstRslt = "PassSelected";
					}else if($scope.dnaSelected == true){
					$scope.slctTstRslt = "DNASelected";
					}else 
					$scope.slctTstRslt = "NotSelected";			
			}  
	      			
		    else if($scope.failSelected == true && $scope.passSelected == true){
			$scope.slctTstRslt = "FailSelected";
			}
			else if($scope.failSelected == true && $scope.dnaSelected == true){
			$scope.slctTstRslt = "FailSelected";
			}			
			else if($scope.failSelected == true && $scope.ntSelected == true){
			$scope.slctTstRslt = "FailSelected";
			}
			else if($scope.failSelected == true && $scope.failSelected == true){
			$scope.slctTstRslt = "FailSelected";
			}
            else if($scope.dnaSelected == true && $scope.passSelected == true){
			$scope.slctTstRslt = "PassSelected";
			}
			else if($scope.passSelected == true && $scope.passSelected == true){
			$scope.slctTstRslt = "PassSelected";
			}
			else if($scope.ntSelected == true && $scope.passSelected == true){
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
						
        }	 
		    if( $scope.slctTstRslt == "FailSelected"){
            if($scope.dsbl_Impctd_grp[a] != "")	            
			$scope.criteriaResultPush = '{"CrtID": "' + $scope.totTstRsltJson[a].CrtID + '","ConformanceLvl": "' + $scope.selected_name[a] + '","DisabilityImpact": "' + $scope.dsbl_Impctd_grp[a] + '","RemarkExplntn": "' + $scope.totTstRsltJson[a].TestName + ", " + $scope.totTstRsltJson[a].TesterComment + '"}'; 
			}
			else if($scope.slctTstRslt == "PassSelected"){				
			$scope.criteriaResultPush = '{"CrtID": "' + $scope.totTstRsltJson[a].CrtID + '","ConformanceLvl": "' + "Supports" + '","DisabilityImpact": "' + "" + '","RemarkExplntn": "' + "Explanation is not required, Please check detail test results" + '"}';
			}
			else if($scope.slctTstRslt == "DNASelected"){			
			$scope.criteriaResultPush = '{"CrtID": "' + $scope.totTstRsltJson[a].CrtID + '","ConformanceLvl": "' + "Does Not Apply" + '","DisabilityImpact": "' + "" + '","RemarkExplntn": "' + "Explanation is not required, Please check detail test results" + '"}';
			}
			else if($scope.slctTstRslt == "NotSelected"){			
			$scope.criteriaResultPush = '{"CrtID": "' + $scope.totTstRsltJson[a].CrtID + '","ConformanceLvl": "' + "Not Evaluated" + '","DisabilityImpact": "' + $scope.dsbl_Impctd_grp[a] + '","RemarkExplntn": "' + "Not evaluated, Please conduct a test" + '"}';
			}
			$scope.criteriaResult.push( $scope.criteriaResultPush );
		   		
    }	
	
	$scope.criteriaResult.filter($scope.onlyUnique);	
	$scope.criteriaResult.sort();	
    $scope.criteriaResultJSON = "[ "+ $scope.criteriaResult +" ]";
	      $scope.criteriaResultJSON = IsJsonString($scope.criteriaResultJSON);	
          $scope.scValueUniqueSelected = "";	
          $scope.sameCrtIdExists = false;          		  
          
		  $scope.criteriaResultString = $scope.criteriaResult.toString();		  
          $scope.criteriaResultString = $scope.criteriaResultString.replace(/,\s*$/, " "); //removes comma from last of string
          $scope.criteriaResultString = $scope.criteriaResultString.replace(/,+/g, ','); //removes multiple commas from string
						
			//Assigning approperiate Conformance Level
    				 
		 for(let p=0; p < $scope.criteriaResultJSON.length; p++){			
           for (let q=p; q < $scope.criteriaResultJSON.length; q++ ){
			            						
		            						
			if(q>0){
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
			
			else if($scope.criteriaResultJSON[q].ConformanceLvl == "Not Applicable" ){
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
	      		
				
				 if($scope.criteriaResultJSON[q].ConformanceLvl == "Does Not Support" && $scope.criteriaResultJSON[p].ConformanceLvl == "Supports"){
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
			    $scope.scValueUniqueSelected = '{"CrtID": "' + $scope.criteriaResultJSON[q].CrtID + '","ConformanceLvl": "' + "Supports" + '","DisabilityImpact": "'+"" + '","RemarkExplntn": "' + "Explanation is not required, Please check detail test results" + '"}';
		   
				}
		   }
		   else if( $scope.criteriaResultJSON[q].ConformanceLvl == "Not Evaluated" ){	
           $scope.neSelectedFinal = true;		   
		  if($scope.dnsSelectedFinal != true || $scope.suuprtsSelectedFinal != true){
		  $scope.scValueUniqueSelected = '{"CrtID": "' + $scope.criteriaResultJSON[q].CrtID + '","ConformanceLvl": "' + $scope.criteriaResultJSON[q].ConformanceLvl + '","DisabilityImpact": "'+$scope.criteriaResultJSON[q].DisabilityImpact + '","RemarkExplntn": "' + $scope.criteriaResultJSON[q].RemarkExplntn + '"}';
		 
		   }
		 }	
		 
		  else if( $scope.criteriaResultJSON[q].ConformanceLvl == "Does Not Apply"){			   
				if($scope.dnsSelectedFinal != true || $scope.suuprtsSelectedFinal != true ||  $scope.neSelectedFinal != true){
			    
			    $scope.scValueUniqueSelected = '{"CrtID": "' + $scope.criteriaResultJSON[q].CrtID + '","ConformanceLvl": "' + "Does Not Apply" + '","DisabilityImpact": "'+"" + '","RemarkExplntn": "' + "Explanation is not required, Please check detail test results" + '"}';
		  }
		  }
           $scope.criteriaResult2.push($scope.scValueUniqueSelected);	
          	   
		  }	
		 
		 }
		 		 
		$scope.criteriaResult2 = $scope.criteriaResult2.filter($scope.onlyUnique);	
        
	      $scope.criteriaResult1 = '"SuccessCriteria": [' + $scope.criteriaResult + ']';
		 
  }
  $scope.successCriteriaFxn();
    
    $scope.osVrsnNo = " ";
    $scope.browserVersions = " ";
    $scope.browserVersionsCollection = " ";
   
    //$scope.criteriaResult1 = '"SuccessCriteria":['+$scope.criteriaResult.toString()+ ']';  
    
    $scope.myOpsys = '{"S_window":"' + $scope.checkboxModel.value6 + '","S_mac": "' + $scope.checkboxModel.value7 + '","S_otherWin": "' + $scope.checkboxModel.value8; 
   
    $scope.osVrsnNo = '","S_winVrsn": "' + $scope.selected_name_wnVersn + '","S_iosVrsn": "' + $scope.selected_name_iosVersn + '","S_otherOSVrsn": "' + $scope.entOthrWindVrsn + '","S_otherOSType": "' + $scope.entOthrWindID;
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
   

    if ($scope.otherBrowser === true)
      $scope.otherBrowser = "Other Browser";
  if ($scope.otherBrowser === false)
      $scope.otherBrowser = "";

    if ($scope.otherWindow === true)
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
    $scope.prodDescID = $scope.prodDescID.toString().replace(/"/g, '\\"');
	$scope.prodDescID = $scope.prodDescID.toString().replace(/\n/g, " ");
    $scope.prdNteDescID = $scope.prdNteDescID.toString().replace(/"/g, '\\"');
	$scope.prdNteDescID = $scope.prdNteDescID.toString().replace(/\n/g, " ");
    $scope.testScope = $scope.testScope.toString().replace(/"/g, '\\"');
    $scope.testScope = $scope.testScope.toString().replace(/"/g, '\\"');
    $scope.productID = $scope.productID.toString().replace(/"/g, '\\"');
    $scope.versionID = $scope.versionID.toString().replace(/"/g, '\\"');
    $scope.ownerID = $scope.ownerID.toString().replace(/"/g, '\\"');
    $scope.productType = $scope.productType.toString().replace(/"/g, '\\"');
    $scope.urlID = $scope.urlID.toString().replace(/"/g, '\\"');
   
    $scope.testerID = $scope.testerID.toString().replace(/"/g, '\\"');
    $scope.testerContact = $scope.testerContact.toString().replace(/"/g, '\\"');
    $scope.testScope = $scope.testScope.toString().replace(/"/g, '\\"');
	$scope.testScope = $scope.testScope.toString().replace(/\n/g, " ");    

    //preventing multiple commas
		$scope.browserCollection = $scope.browserCollection.toString().replace(/, /g, "").trim();
		$scope.browserCollection = $scope.browserCollection.toString().replace(/,/g, ", ").trim(); 		
		$scope.browserVrsnCollection = $scope.browserVrsnCollection.toString().replace(/, /g, "").trim();
		$scope.browserVrsnCollection = $scope.browserVrsnCollection.toString().replace(/,/g, ", ").trim();
    //$scope.osVrsnCollection = $scope.osVrsnCollection.toString().replace(/[, ]+/g, " ").trim();
		$scope.osVrsnCollection = $scope.osVrsnCollection.toString().replace(/, /g, " ").trim();
		$scope.osVrsnCollection = $scope.osVrsnCollection.toString().replace(/,/g, ", ").trim();
		$scope.osCollection = $scope.osCollection.toString().replace(/, /g, " ").trim();
		$scope.osCollection = $scope.osCollection.toString().replace(/,/g, ", ").trim();
		$scope.browserCollection = $scope.browserCollection.toString().replace(/, /g, " ").trim();
	    $scope.browserCollection = $scope.browserCollection.toString().replace(/,/g, ", ").trim();
		$scope.percentageTested = $scope.selectedResults/$scope.origSelectedResults;
	    $scope.percentageTested = $scope.percentageTested*100;
	    $scope.percentageTested = $scope.percentageTested.toFixed(2);
		
		
	
    $scope.formData = '[{"Product":' +
      '{"P_Name":"' + $scope.productID + '","P_Version": "' + $scope.versionID + '","P_Owner": "' + $scope.ownerID + '","P_Type": "' + $scope.productType + '","P_Location": "' + $scope.urlID + '","P_Desc": "' + $scope.prodDescID + '","P_Notes": "' + $scope.prdNteDescID + '"}, "System":' +
      $scope.myOpsys + $scope.osVrsnNo + '","S_osVrsnNo": "' + $scope.osVrsnCollection + '","S_selectedOS": "' + $scope.osCollection + $scope.categories + $scope.browserVersionsCollection + '","S_selectedBrowser": "' + $scope.browserCollection + '","S_selectedBrowserVersions": "' + $scope.browserVrsnCollection + '","S_Compatibility": "' + $scope.selected_name_cmpblty + '"},"Tester":' +
      '{"T_fstnm":"' + $scope.firstname + '","T_lstnm": "' + $scope.lastname + '","T_ID": "' + $scope.testerID + '","T_Role": "' + $scope.myRole + '","T_cntc": "' + $scope.testerContact + '","T_scope": "' + $scope.testScope + '","T_eval": "' + $scope.selected_name_tstprcss + '","T_evalMthd_Vrsn": "' + $scope.evlMthdVrsn + '","T_percentage": "' + $scope.percentageTested +'","crtLength": "' + $scope.criteriaLength + '","T_Date": "' + $scope.tDateId + '"}, "Guideline":' +
      '{"Guideline":"' + $scope.Guideline + '","Section508": "' + $scope.Section508 + '","EN_Accessibility": "' + $scope.EN_Accessibility + '"},' + $scope.criteriaResult1 + ',' + $scope.testresult1 + '}]';

    $scope.formData = $scope.formData.replace('}"}', '}');

    
    
  };

$scope.submitClkCount = 0;
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
      $scope.error.push("First name");
      
    }
    if ($scope.lastname == " " || $scope.lastname == undefined) {
      $scope.error.push("Last Name");
      
    }
    if ($scope.testerContact == " " || $scope.testerContact == undefined) {
      $scope.error.push("Contact");
      
    }
	

    if ($scope.error.length > 0)
      alert("Please input data for " + $scope.error);
    else {
      $scope.submit();
            
      var blob = new Blob([$scope.formData], {
        type: "Content-Type: application/json"
      });
      saveAs(blob, $scope.productID + $scope.versionID + "Edit.json");
	  setTimeout(function() {		 
		if ($scope.checkboxModel.alerts == "on")
			alert("Your updates have been saved to the Downloads folder (unless otherwise specified). To continue editing, please refresh the page and load the newly created file.");
}, 3000);      
      
    }	
	  //  
	  
	  //Resetting Arrays       
	   $scope.totTstRsltEdit = $scope.totTstRslt.length;
	   $scope.submitClkCount = $scope.submitClkCount + 1; 	    
	   $scope.totTstRslt.splice(0, ($scope.totTstRslt.length * $scope.submitClkCount));	 
       $scope.totTstRsltEditLength = $scope.totTstRslt.length;	  
	   
   $scope.indexCollection=[];
 $scope.imgCnvrsn = [];
  $scope.imgCnvrsn1 = [];
  $scope.criteriaUnique = [];
  $scope.RemarkExplntn =[];
  $scope.RemarkExplntnCollection =[];
  $scope.criteriaResult2 = []; 
//Resetting json objects 
$scope.imgCnvrsnJSON = {};//new Object;
$scope.imgCnvrsnJSON1 = {};//new Object;
$scope.totTstRsltJson = {};//new Object;
$scope.criteriaUniqueJSON  = {};//new Object;
$scope.criteriaResultJSON  = {};//new Object;
$scope.RemarkExplntnCollectionJSON = {};
 //Reset variables 
 $scope.criteriaResult1 ="";
  $scope.testresult1 = "";
 $scope.loadclicked =0;
    //$scope = $scope.$new(true); 	  	  
	  $scope.loadclicked =0;
      //$scope.submitClkCount = $scope.submitClkCount + 1; 
	  
  };
}]);
   
   
