
var app = angular.module('acrtWebIntake', []);

//this function validates if json is valid
function IsJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {    
	alert("There is a problem with the data, contact technical support.");
	console.log(str);
	//return false;
  }
  //return true;
  return JSON.parse(str);
}

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


app.controller('acrtWebIntakeCtrl', ['$scope', function($scope, $filter) {
	
  $scope.Mul_Issues = [];
  $scope.onlyUnique = function(value, index, self) {
    return self.indexOf(value) === index;
  }
  //this will determine if any element is clicked 
  $scope.elementIsClickedd = false;
  $scope.submitClkCount = 0;

  $scope.myVar = true;
  $scope.myVar1 = false;

  function clickHandler() {
    $scope.elementIsClickedd = true;
  }
  

$scope.elementIsClicked1 = [];
$scope.elementIsClicked2 = [];
$scope.elementIsClicked11 = [];
$scope.elementIsClicked21 = [];

$scope.brsrChkBoxClicked = function(x) {
  
  $scope.elementIsClicked1[x] = "VrsnSelected" + x;
  $scope.elementIsClicked2[x] = "TypeSelected" + x;
  
}

$scope.brsrChkBoxClicked1 = function(x) {
  
  $scope.elementIsClicked11[x] = "VrsnSelected" + x;
  $scope.elementIsClicked21[x] = "TypeSelected" + x;
  
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
$scope.tstIEClicked11 = function(x) {
  $scope.tstIESelected11[x] = "IEClicked";

} 


$scope.tstEdgeSelected11 = [];
$scope.tstEdgeClicked11 = function(x) {
  $scope.tstEdgeSelected11[x] = "EdgeClicked";
}

$scope.tstChromeSelected11 = [];
$scope.tstChromeClicked11 = function(x) {
  $scope.tstChromeSelected11[x] = "ChromeClicked";
}

$scope.tstSafariSelected11 = [];
$scope.tstSafariClicked11 = function(x) {
  $scope.tstSafariSelected11[x] = "SafariClicked";
}

$scope.tstFirefoxSelected11 = [];
$scope.tstFirefoxClicked11 = function(x) {
  $scope.tstFirefoxSelected11[x] = "FirefoxClicked";
}


$scope.tstIESelected21 = [];
$scope.tstIEClicked21 = function(x) {
  $scope.tstIESelected21[x] = "IEClicked";

}


$scope.tstEdgeSelected21 = [];
$scope.tstEdgeClicked21 = function(x) {
  $scope.tstEdgeSelected21[x] = "EdgeClicked";
}

$scope.tstChromeSelected21 = [];
$scope.tstChromeClicked21 = function(x) {
  //$scope.tstChromeSelected11[x] = "ChromeClicked";
	$scope.tstChromeSelected21[x] = "ChromeClicked";
}

$scope.tstSafariSelected21 = [];
$scope.tstSafariClicked21 = function(x) {
  $scope.tstSafariSelected21[x] = "SafariClicked";
}

$scope.tstFirefoxSelected21 = [];
$scope.tstFirefoxClicked21 = function(x) {
  $scope.tstFirefoxSelected21[x] = "FirefoxClicked";
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

 
$scope.imgCnvrsn1 = [];


$scope.selected_id_tstrslt1 = [];
$scope.selected_name_tstgrp1 = [];
$scope.selected_id_tstrslt = [];
$scope.selected_name_tstgrp = [];

$scope.optionsTstrslt = [{
    id: 0,
    name: ''
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


$scope.optionsTstrslt1 = [{
    id: 0,
    name: ''
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

$scope.optionsTstrslt2 = [{
    id: 0,
    name: ''
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


$scope.optionsTstrslt5 = [{
    id: 0,
    name: ''
  },
  {
    id: 4,
    name: 'Not Tested'
  }
];

$scope.optionsTstrslt4 = [{
    id: 0,
    name: ''
  },
  {
    id: 3,
    name: 'Does Not Apply'
  }

];

$scope.optionsTstrslt3 = [{
    id: 0,
    name: ''
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
/*$scope.options = [
          {id:1, name:'Supports'},
          {id:2, name:'Supports with Exceptions'},
          {id:3, name:'Does Not Support'},
          {id:4, name:'Not Applicable'},
		  {id:5, name:'Not Evaluated'}		  
        ];	*/

$scope.selected_id_glbl = [];
$scope.selected_name_glbl = [];
$scope.selected_id_glbl1 = [ ];
$scope.selected_name_glbl1 = [ ];
$scope.optionsglbl = [{
    id: 0,
    name: ''
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


$scope.selected_id_ieVersn = " ";
$scope.selected_name_ieVersn = " ";
$scope.selected_id_ieVersn1 = [];
$scope.selected_name_ieVersn1 = [];
$scope.selected_id_ieVersn11 = [];
$scope.selected_name_ieVersn11 = [];
$scope.optionieVersn = [{
    id: 0,
    name: ''
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


$scope.selected_id_edVersn = " ";
$scope.selected_name_edVersn = " ";
$scope.selected_id_edVersn1 = [];
$scope.selected_name_edVersn1 = [];
$scope.selected_id_edVersn11 = [];
$scope.selected_name_edVersn11 = [];

$scope.optionedVersn = [{
    id: 0,
    name: ''
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
  }

];



$scope.selected_id_chVersn = " ";
$scope.selected_name_chVersn = " ";
$scope.selected_id_chVersn1 = [];
$scope.selected_name_chVersn1 = [];
$scope.selected_id_chVersn11 = [];
$scope.selected_name_chVersn11 = [];
$scope.optionchVersn = [{
    id: 0,
    name: ''
  },
  {
    id: 1,
    name: 'Chrome 77'
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
$scope.selected_name_sfVersn1 = [];
$scope.selected_id_sfVersn11 = [];
$scope.selected_name_sfVersn11 = [];

$scope.optionsfVersn = [{
    id: 0,
    name: ''
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
$scope.selected_name_fxVersn1 = [];
$scope.selected_id_fxVersn11 = [];
$scope.selected_name_fxVersn11 = [];
$scope.optionfxVersn = [{
    id: 0,
    name: ''
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
    name: ''
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
    name: ''
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
    name: ''
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
$scope.menu1 = [];
$scope.RemarkExplntn = [];
$scope.RemarkExplntnCollection = [];


	
$scope.loadclicked = 0;


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
    alert("Please select file first");
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
    document.getElementById("msg").innerHTML = "<b>File load completed</b>";
	document.getElementById("instr").innerHTML = "";
       
    $scope.firstname = $scope.jsonData[0].Tester.T_fstnm;
    $scope.lastname = $scope.jsonData[0].Tester.T_lstnm;
    $scope.testerID = $scope.jsonData[0].Tester.T_ID;
    $scope.myRole = $scope.jsonData[0].Tester.T_Role;
    $scope.testerContact = $scope.jsonData[0].Tester.T_cntc;
   

    for (let i = 0; i < $scope.jsonData[0].Criteria.length; i++) {
      $scope.menu1[i] = $scope.jsonData[0].Criteria[i].OptMenu1;
    }
    $scope.Mul_Issues1 = [];
    $scope.selectedResultIndex = 0;
	
    $scope.addIssue = function(index) {		
	  $scope.newIssueRsltSelected = true;	  
      let d = 0;
      $scope.issueClicked = 0;
      $scope.issueClicked = $scope.issueClicked++;
      $scope.selectedResultIndex = index;
	 
      $scope.insertRoww = [];
      $scope.addedRow[index] = true;      
      $scope.indexCollection.push(index); 
      $scope.Mul_Issues1[index] = {
        "InsrtTestName": '' + '*'+$scope.jsonData[0].Criteria[index].TestName + '',
        "InsrtTestID": '' +'*'+ $scope.jsonData[0].Criteria[index].TestID + '',
        "InsrtIndex": '' +'*'+ index + '',		
		"InsrtDisabilityImpact": '"' + $scope.jsonData[0].Criteria[index].DisabilityImpact + '"',			
        "InsrtTestCondition": '' +'*'+ $scope.jsonData[0].Criteria[index].TestCondition + ''
      };

      $scope.Mul_Issues.push($scope.Mul_Issues1[index]);

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
	
	 
  }
  	

  $scope.displayIt = true;

}
}

$scope.defaultExpand = function defaultExpand() {  
  document.getElementById("aplType").click();

}


$scope.default_compatibilitySetting = 'Turned Off';
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
$scope.testerCommentID = [];
$scope.disabilityGrp = [];
$scope.remarkID = [];
$scope.glbisue = [];
$scope.myWbTestResult = [];
$scope.webTestResult = [];
$scope.selected_id = [];
$scope.selected_option = [];
$scope.rmdatnDatelID = [];
$scope.rmdatnDtlID = [];
$scope.selected_name_tstgrp10 = [];
$scope.totTstRsltJson = [];
$scope.resultFailsCollection = [];
$scope.resultFails = [];
$scope.crtRsltCollection = [];
$scope.RemarkExplntnCollection = [];


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
    $scope.testresult[i] = $scope.testresult[i] + '","DraftReport": "' + $scope.draftReport + '"}';
  }

  if ($scope.selected_name_tstgrp[i] == "Pass") {
    $scope.resultFails[i] = false;
    $scope.resultFailsCollection.push($scope.resultFails[i]);
    $scope.RemarkExplntn[i] = ['{"crtId": "' + $scope.criteriaTestsJson.Criteria[i].CrtID + '", "explanation":"' + "All Test Conditions Successfully Passed " + '"}'];
    $scope.RemarkExplntnCollection.push($scope.RemarkExplntn[i]);
    //$scope.RemarkExplntnCollection.push( '{"crtId": "'+$scope.criteriaTestsJson.Criteria[i].CrtID+'", "explanation":"'+ "All Test Condition Successfully Passed " +'"}' );
    $scope.crtRsltCollection.push($scope.selected_name_tstgrp[i]);
    $scope.crtCollection.push($scope.criteriaTestsJson.Criteria[i].CrtID);
    $scope.rmdatnDtlID[i] = "Not Required";
   $scope.testresult[i] = $scope.testresult[i] +  '"}';
  }
  if ($scope.selected_name_tstgrp[i] == "Fail") {
    $scope.resultFails[i] = true;
    $scope.resultFailsCollection.push($scope.resultFails[i]);
    $scope.testerCommentID[i] = $scope.testerCommentID[i].replace(/""/g, '"');
    $scope.RemarkExplntn[i] = ['{"crtId": "' + $scope.criteriaTestsJson.Criteria[i].CrtID + '", "explanation":"' + "For " + $scope.criteriaTestsJson.Criteria[i].TestName + ", " + $scope.testerCommentID[i] + '"}'];
    $scope.RemarkExplntnCollection.push($scope.RemarkExplntn[i]);
    $scope.crtRsltCollection.push($scope.selected_name_tstgrp[i]);
    $scope.crtCollection.push($scope.criteriaTestsJson.Criteria[i].CrtID);
    if ($scope.rmdatnDtlID[i] == undefined)
      $scope.rmdatnDtlID[i] = " ";
    $scope.testresult[i] = $scope.testresult[i] + '"}';
  }
  if ($scope.selected_name_tstgrp[i] == "Does Not Apply") {
    $scope.resultFails[i] = false;
    $scope.resultFailsCollection.push($scope.resultFails[i]);

    $scope.RemarkExplntn[i] = ['{"crtId": "' + $scope.criteriaTestsJson.Criteria[i].CrtID + '", "explanation":"' + " This test is not required " + '"}'];
    $scope.RemarkExplntnCollection.push($scope.RemarkExplntn[i]);
    $scope.rmdatnDtlID[i] = "Not Required";
    $scope.crtRsltCollection.push($scope.selected_name_tstgrp[i]);
    $scope.crtCollection.push($scope.criteriaTestsJson.Criteria[i].CrtID);

    $scope.testresult[i] = $scope.testresult[i] + '"}';
  }
  if ($scope.selected_name_tstgrp[i] == "Not Tested") {
    $scope.resultFails[i] = false;
    $scope.resultFailsCollection.push($scope.resultFails[i]);
    
    $scope.RemarkExplntn[i] = ['{"crtId": "' + $scope.criteriaTestsJson.Criteria[i].CrtID + '", "explanation":"' + " One or more test conditions not tested " + '"}'];
    $scope.RemarkExplntnCollection.push($scope.RemarkExplntn[i]);
    $scope.crtRsltCollection.push($scope.selected_name_tstgrp[i]);
    $scope.crtCollection.push($scope.criteriaTestsJson.Criteria[i].CrtID);
    if ($scope.rmdatnDtlID[i] == undefined)
      $scope.rmdatnDtlID[i] = " ";
    $scope.testresult[i] = $scope.testresult[i] + '"}';
  }

};

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
  }
  }
  reader.readAsDataURL(file);

} 



$scope.elementIsClicked3 = " ";

$scope.elemntClicked2 = function(i) {

  $scope.elementIsClicked3 = "RsltSelected" + i;
  

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


//called when selecting newly added test result. 
$scope.elemntClicked4 = function(i) {
$scope.newIssueRsltSelected = false;
//if($scope.uploadImage1Clicked == false)	
//$scope.imgCnvrsn1.push('{"imgPosition" : "'+ " " +'"', '"imgValue" :"'+ '"'+'"}');
}




$scope.submit = function() {
	
	
	
  $scope.tDateId = new Date();


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
  $scope.counter = [];  
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
  $scope.entOthrBrsrIDl = [];
  $scope.entOthrBrsrIDl1 = [];  
  $scope.selected_name_ieVersn11 = [];
  $scope.selected_name_edVersnl1 = [];
  $scope.selected_name_chVersnl1 = [];
  $scope.selected_name_sfVersnl1 = [];
  $scope.selected_name_fxVersnl1 = [];
  $scope.selected_name_fxVersnl1 = [];
  $scope.entOthrBrsrIDVrsn1 = [];
  $scope.evlMthdVrsn = "V5";
  $scope.totTestCrtria = [];  
  
  $scope.imgCnvrsnJSON = "[ "+$scope.imgCnvrsn+ " ]";
  $scope.imgCnvrsnJSON = IsJsonString($scope.imgCnvrsnJSON);  
  
  $scope.imgCnvrsnJSON1 = "[ "+$scope.imgCnvrsn1+ " ]";
  $scope.imgCnvrsnJSON1 = IsJsonString($scope.imgCnvrsnJSON1);
	

  for (i = 0; i < $scope.criteriaTestsJson.Criteria.length; i++) {	  
	 
    
    $scope.counter[i] = i;
    
    //if user don't select browser version it will get from test environment 
      if ($scope.elementIsClicked1[i] != "VrsnSelected" + i)
      $scope.selected_name_ieVersn1[i] = $scope.selected_name_ieVersn;
     if ($scope.elementIsClicked1[i] == "VrsnSelected" + i){
       
      if ($scope.selected_name_ieVersn1[i] != undefined)	   
      $scope.selected_name_ieVersn1[i] = $scope.selected_name_ieVersn1[i];  }
     if ($scope.selected_name_ieVersn1[i] == undefined)
      $scope.selected_name_ieVersn1[i] = " ";

    if ($scope.elementIsClicked1[i] != "VrsnSelected" + i)
      $scope.selected_name_edVersn1[i] = $scope.selected_name_edVersn;
   if ($scope.elementIsClicked1[i] == "VrsnSelected" + i)
	   if ($scope.selected_name_edVersn1[i] != undefined)
      $scope.selected_name_edVersn1[i] = $scope.selected_name_edVersn1[i];
    if ($scope.selected_name_edVersn1[i] == undefined)
      $scope.selected_name_edVersn1[i] = " ";

    if ($scope.elementIsClicked1[i] != "VrsnSelected" + i)
      $scope.selected_name_chVersn1[i] = $scope.selected_name_chVersn;
  if ($scope.elementIsClicked1[i] == "VrsnSelected" + i)
	   if ($scope.selected_name_chVersn1[i] != undefined)
      $scope.selected_name_chVersn1[i] = $scope.selected_name_chVersn1[i];
    if ($scope.selected_name_chVersn1[i] == undefined)
      $scope.selected_name_chVersn1[i] = " ";

    if ($scope.elementIsClicked1[i] != "VrsnSelected" + i)
      $scope.selected_name_sfVersn1[i] = $scope.selected_name_sfVersn;
  if ($scope.elementIsClicked1[i] == "VrsnSelected" + i)
	  if ($scope.selected_name_sfVersn1[i] != undefined)
      $scope.selected_name_sfVersn1[i] = $scope.selected_name_sfVersn1[i];
    if ($scope.selected_name_sfVersn1[i] == undefined)
      $scope.selected_name_sfVersn1[i] = " ";

      if ($scope.elementIsClicked1[i] != "VrsnSelected" + i)
       $scope.selected_name_fxVersn1[i] = $scope.selected_name_fxVersn;
     if ($scope.elementIsClicked1[i] == "VrsnSelected" + i)
	  if ($scope.selected_name_fxVersn1[i] != undefined)
      $scope.selected_name_fxVersn1[i] = $scope.selected_name_fxVersn1[i];
    if ($scope.selected_name_fxVersn1[i] == undefined)
      $scope.selected_name_fxVersn1[i] = " ";

    if ($scope.elementIsClicked1[i] != "VrsnSelected" + i)
      $scope.entOthrBrsrID1[i] = $scope.entOthrBrsrIDVrsn;
  if ($scope.elementIsClicked1[i] == "VrsnSelected" + i)
	  if ($scope.entOthrBrsrID1[i] != undefined)
      $scope.entOthrBrsrID1[i] = $scope.entOthrBrsrID1[i];
    if ($scope.entOthrBrsrID1[i] == undefined)
      $scope.entOthrBrsrID1[i] = " ";



    //if user don't select browser type it will get from test environment 

    if ($scope.elementIsClicked2[i] != "TypeSelected" + i)
      $scope.checkboxModel.value14[i] = $scope.checkboxModel.value1;
   if ($scope.elementIsClicked2[i] == "TypeSelected" + i)
	   if($scope.checkboxModel.value14[i] != undefined)
      $scope.checkboxModel.value14[i] = $scope.checkboxModel.value14[i];
    if ($scope.checkboxModel.value14[i] == undefined)
      $scope.checkboxModel.value14[i] = " ";

    if ($scope.elementIsClicked2[i] != "TypeSelected" + i)
      $scope.checkboxModel.value21[i] = $scope.checkboxModel.value2;
      if ($scope.elementIsClicked2[i] != "TypeSelected" + i)
		  $scope.checkboxModel.value21[i] != undefined;
      $scope.checkboxModel.value21[i] = $scope.checkboxModel.value21[i];
    if ($scope.checkboxModel.value21[i] == undefined)
      $scope.checkboxModel.value21[i] = " ";

    if ($scope.elementIsClicked2[i] != "TypeSelected" + i)
      $scope.checkboxModel.value31[i] = $scope.checkboxModel.value3;
     if ($scope.elementIsClicked2[i] == "TypeSelected" + i)
		 if($scope.checkboxModel.value31[i] != undefined )
      $scope.checkboxModel.value31[i] = $scope.checkboxModel.value31[i];
    if ($scope.checkboxModel.value31[i] == undefined)
      $scope.checkboxModel.value31[i] = " ";

    if ($scope.elementIsClicked2[i] != "TypeSelected" + i)
      $scope.checkboxModel.value41[i] = $scope.checkboxModel.value4;
  if ($scope.elementIsClicked2[i] == "TypeSelected" + i)
	  if($scope.checkboxModel.value41[i] != undefined)
      $scope.checkboxModel.value41[i] = $scope.checkboxModel.value41[i];
    if ($scope.checkboxModel.value41[i] == undefined)
      $scope.checkboxModel.value41[i] = " ";

    if ($scope.elementIsClicked2[i] != "TypeSelected" + i)
      $scope.checkboxModel.value51[i] = $scope.checkboxModel.value5;
  if ($scope.elementIsClicked2[i] == "TypeSelected" + i)
	  if($scope.checkboxModel.value51[i] != undefined)
      $scope.checkboxModel.value51[i] = $scope.checkboxModel.value51[i];
    if ($scope.checkboxModel.value51[i] == undefined)
      $scope.checkboxModel.value51[i] = " ";

    if ($scope.elementIsClicked2[i] != "TypeSelected" + i)
      $scope.otherBrowser1[i] = $scope.entOthrBrsrID;
   if ($scope.elementIsClicked2[i] == "TypeSelected" + i)
	   if($scope.otherBrowser1[i] != undefined )
      $scope.otherBrowser1[i] = $scope.otherBrowser1[i];
    if($scope.otherBrowser1[i] == undefined)
    $scope.otherBrowser1[i] = " ";
    if ($scope.otherBrowser1[i] == true)
      $scope.otherBrowser1[i] = "Other Browser";
  
  
    
    $scope.browserIndividualVersionsCollection1 = [];
    $scope.browserIndividualTypeCollection1 = [];
    $scope.browserIndividualVersionsCollection1[i] = '","S_ieVrsh": "' + $scope.selected_name_ieVersn1[i] + '","S_edgeVrsn": "' + $scope.selected_name_edVersn1[i] + '","S_chromeVrsn": "' + $scope.selected_name_chVersn1[i] + '","S_sfVrsn": "' + $scope.selected_name_sfVersn1[i] + '","S_firefoxVrsn": "' + $scope.selected_name_fxVersn1[i] + '","S_othrBrsVrsn": "' + $scope.entOthrBrsrID1[i];
    $scope.browserIndividualTypeCollection1[i] = '","S_ie": "' + $scope.checkboxModel.value14[i] + '","S_edge": "' + $scope.checkboxModel.value51[i] + '","S_chrome": "' + $scope.checkboxModel.value21[i] + '","S_safari": "' + $scope.checkboxModel.value31[i] + '","S_firefox": "' + $scope.checkboxModel.value41[i] + '","S_other": "' + $scope.otherBrowser1[i];
    $scope.browserVersionsCollection1[i] = $scope.selected_name_ieVersn1[i] + " " + $scope.selected_name_edVersn1[i] + " " + $scope.selected_name_chVersn1[i] + " " + $scope.selected_name_sfVersn1[i] + " " + $scope.selected_name_fxVersn1[i] + " " + $scope.entOthrBrsrID1[i];
    $scope.browserTypeCollection1[i] = $scope.checkboxModel.value14[i] + "  " + $scope.checkboxModel.value51[i] + "   " + $scope.checkboxModel.value21[i] + "  " + $scope.checkboxModel.value31[i] + "  " + $scope.checkboxModel.value41[i] + "  " + $scope.otherBrowser1[i] + " " + $scope.entOthrBrsrID11[i];
    
    if ($scope.testerCommentID[i] == undefined)
      $scope.testerCommentID[i] = " ";
    $scope.testerCommentID[i] = $scope.testerCommentID[i].toString().replace(/""/g, '"');
	$scope.testerCommentID[i] = $scope.testerCommentID[i].toString().replace(/\n/g, " ");
	
	 if ($scope.location[i] == undefined)
      $scope.location[i] = " ";
    $scope.location[i] = $scope.location[i].toString().replace(/""/g, '"');
	$scope.location[i] = $scope.location[i].toString().replace(/\n/g, " ");
	
    if ($scope.selected_name_glbl[i] == undefined);
      $scope.selected_name_glbl[i] = " ";
    if ($scope.browserTypeCollection1[i] == undefined)
      $scope.browserTypeCollection1[i] = " ";
    if ($scope.imgCnvrsnJSON[i] == undefined)
      $scope.imgCnvrsnJSON[i] = " ";
     $scope.testresult[i] = '{"CrtID": "' + $scope.criteriaTestsJson.Criteria[i].CrtID + '",' + '"DisabilityImpact": "' + $scope.criteriaTestsJson.Criteria[i].DisabilityImpact+ '",'+ '"Test": "' + $scope.criteriaTestsJson.Criteria[i].Test + '",' + '"TestName": "' + $scope.criteriaTestsJson.Criteria[i].TestName + '",' + '"TestID": "' + $scope.criteriaTestsJson.Criteria[i].TestID + '",' + '"TestCondition": "' + $scope.criteriaTestsJson.Criteria[i].TestCondition + '",' + '"IssueNo": "' + "Issue " + i + '","TestResult": "' + $scope.selected_name_tstgrp[i] + '","OptMenu1": "' + $scope.menu1[i] + '","location": "' + $scope.location[i]  + '","TesterComment": "' + $scope.testerCommentID[i] + $scope.browserIndividualTypeCollection1[i] + '","T_brwsrType": "' + $scope.browserTypeCollection1[i] + '","T_brwsrVrsn": "' + $scope.browserVersionsCollection1[i] + $scope.browserIndividualVersionsCollection1[i] + '","GlobalIssue": "' + $scope.selected_name_glbl[i]  + '","Counter": "' + $scope.counter[i] + '","ImageSrc":"';
            
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


    if ($scope.testresult[i] != undefined) {	  
      $scope.totTstRslt.push($scope.testresult[i]);	  
    }
  }
  

  $scope.browserVersionsCollection1.length;
  //looping through newly added rows for issues

  var m = $scope.counter.length;
  var n = m + 1;
  //var i = $scope.selectedResultIndex;
  for (var k = 0; k < $scope.indexCollection.length; k++) {
	  var i = $scope.indexCollection[k];      
        //if user don't select browser version it will get from test environment 
      if ($scope.elementIsClicked11[k] != "VrsnSelected" + i)
      $scope.selected_name_ieVersn1[k] = $scope.selected_name_ieVersn;
     if ($scope.elementIsClicked11[k] == "VrsnSelected" + k){
       
      if ($scope.selected_name_ieVersn1[k] != undefined)	   
      $scope.selected_name_ieVersn1[k] = $scope.selected_name_ieVersn1[k];  }
     if ($scope.selected_name_ieVersn1[k] == undefined)
      $scope.selected_name_ieVersn1[k] = " ";

    if ($scope.elementIsClicked11[k] != "VrsnSelected" + k)
      $scope.selected_name_edVersn1[k] = $scope.selected_name_edVersn;
   if ($scope.elementIsClicked11[k] == "VrsnSelected" + k)
	   if ($scope.selected_name_edVersn1[k] != undefined)
      $scope.selected_name_edVersn1[k] = $scope.selected_name_edVersn1[k];
    if ($scope.selected_name_edVersn1[k] == undefined)
      $scope.selected_name_edVersn1[k] = " ";

    if ($scope.elementIsClicked11[k] != "VrsnSelected" + k)
      $scope.selected_name_chVersn1[k] = $scope.selected_name_chVersn;
  if ($scope.elementIsClicked11[k] == "VrsnSelected" + k)
	   if ($scope.selected_name_chVersn1[k] != undefined)
      $scope.selected_name_chVersn1[k] = $scope.selected_name_chVersn1[k];
    if ($scope.selected_name_chVersn1[k] == undefined)
      $scope.selected_name_chVersn1[k] = " ";

    if ($scope.elementIsClicked11[k] != "VrsnSelected" + k)
      $scope.selected_name_sfVersn1[k] = $scope.selected_name_sfVersn;
  if ($scope.elementIsClicked11[k] == "VrsnSelected" + k)
	  if ($scope.selected_name_sfVersn1[k] != undefined)
      $scope.selected_name_sfVersn1[k] = $scope.selected_name_sfVersn1[k];
    if ($scope.selected_name_sfVersn1[k] == undefined)
      $scope.selected_name_sfVersn1[k] = " ";

      if ($scope.elementIsClicked11[k] != "VrsnSelected" + k)
       $scope.selected_name_fxVersn1[k] = $scope.selected_name_fxVersn;
     if ($scope.elementIsClicked11[k] == "VrsnSelected" + k)
	  if ($scope.selected_name_fxVersn1[k] != undefined)
      $scope.selected_name_fxVersn1[k] = $scope.selected_name_fxVersn1[k];
    if ($scope.selected_name_fxVersn1[k] == undefined)
      $scope.selected_name_fxVersn1[k] = " ";

    if ($scope.elementIsClicked11[k] != "VrsnSelected" + k)
      $scope.entOthrBrsrID1[k] = $scope.entOthrBrsrIDVrsn;
  if ($scope.elementIsClicked11[k] == "VrsnSelected" + k)
	  if ($scope.entOthrBrsrID1[k] != undefined)
      $scope.entOthrBrsrID1[k] = $scope.entOthrBrsrID1[k];
    if ($scope.entOthrBrsrID1[k] == undefined)
      $scope.entOthrBrsrID1[k] = " ";



    //if user don't select browser type it will get from test environment 

    if ($scope.elementIsClicked21[k] != "TypeSelected" + k)
      $scope.checkboxModel.value141[k] = $scope.checkboxModel.value1;
   if ($scope.elementIsClicked21[k] == "TypeSelected" + k)
	   if($scope.checkboxModel.value141[k] != undefined)
      $scope.checkboxModel.value141[k] = $scope.checkboxModel.value141[k];
    if ($scope.checkboxModel.value141[k] == undefined)
      $scope.checkboxModel.value141[k] = " ";

    if ($scope.elementIsClicked21[k] != "TypeSelected" + k)
      $scope.checkboxModel.value211[k] = $scope.checkboxModel.value2;
      if ($scope.elementIsClicked21[k] != "TypeSelected" + k)
		  $scope.checkboxModel.value211[k] != undefined;
      $scope.checkboxModel.value211[k] = $scope.checkboxModel.value211[k];
    if ($scope.checkboxModel.value211[k] == undefined)
      $scope.checkboxModel.value211[k] = " ";

    if ($scope.elementIsClicked21[k] != "TypeSelected" + k)
      $scope.checkboxModel.value311[k] = $scope.checkboxModel.value3;
     if ($scope.elementIsClicked21[k] == "TypeSelected" + k)
		 if($scope.checkboxModel.value311[k] != undefined )
      $scope.checkboxModel.value311[k] = $scope.checkboxModel.value311[k];
    if ($scope.checkboxModel.value311[k] == undefined)
      $scope.checkboxModel.value311[k] = " ";

    if ($scope.elementIsClicked21[k] != "TypeSelected" + k)
      $scope.checkboxModel.value411[k] = $scope.checkboxModel.value4;
  if ($scope.elementIsClicked21[k] == "TypeSelected" + k)
	  if($scope.checkboxModel.value411[k] != undefined)
      $scope.checkboxModel.value411[k] = $scope.checkboxModel.value411[k];
    if ($scope.checkboxModel.value411[k] == undefined)
      $scope.checkboxModel.value411[k] = " ";

    if ($scope.elementIsClicked21[k] != "TypeSelected" + k)
      $scope.checkboxModel.value511[k] = $scope.checkboxModel.value5;
  if ($scope.elementIsClicked21[k] == "TypeSelected" + k)
	  if($scope.checkboxModel.value511[k] != undefined)
      $scope.checkboxModel.value511[k] = $scope.checkboxModel.value511[k];
    if ($scope.checkboxModel.value511[k] == undefined)
      $scope.checkboxModel.value511[k] = " ";

    if ($scope.elementIsClicked21[k] != "TypeSelected" + k)
      $scope.otherBrowser1[k] = $scope.entOthrBrsrID;
   if ($scope.elementIsClicked21[k] == "TypeSelected" + k)
	   if($scope.otherBrowser1[k] != undefined )
      $scope.otherBrowser1[k] = $scope.otherBrowser1[k];
    if($scope.otherBrowser1[k] == undefined)
    $scope.otherBrowser1[k] = " ";
    if ($scope.otherBrowser1[k] == true)
      $scope.otherBrowser1[k] = "Other Browser";
    

    $scope.browserIndividualVersionsCollection11[k] =  '","S_ieVrsh": "' + $scope.selected_name_ieVersn11[k] + '","S_edgeVrsn": "' + $scope.selected_name_edVersn11[k] + '","S_chromeVrsn": "' + $scope.selected_name_chVersn11[k] + '","S_sfVrsn": "' + $scope.selected_name_sfVersn11[k] + '","S_firefoxVrsn": "' + $scope.selected_name_fxVersn11[k] + '","S_othrBrsVrsn": "' + $scope.entOthrBrsrID11[k];
    $scope.browserIndividualTypeCollection11[k] = '","S_ie": "' + $scope.checkboxModel.value141[k] + '","S_edge": "' + $scope.checkboxModel.value511[k] + '","S_chrome": "' + $scope.checkboxModel.value211[k] + '","S_safari": "' + $scope.checkboxModel.value311[k] + '","S_firefox": "' + $scope.checkboxModel.value411[k] + '","S_other": "' + $scope.otherBrowser11[k];
    
    $scope.browserVersionsCollection11[k] = $scope.selected_name_ieVersn11[k] + " " + $scope.selected_name_edVersn11[k] + " " + $scope.selected_name_chVersn11[k] + " " + $scope.selected_name_sfVersn11[k] + " " + $scope.selected_name_fxVersn11[k] + " " + $scope.entOthrBrsrID11[k] ;
    $scope.browserTypeCollection11[k] = $scope.checkboxModel.value141[k] + "  " + $scope.checkboxModel.value511[k] + "   " + $scope.checkboxModel.value211[k] + "  " + $scope.checkboxModel.value311[k] + "  " + $scope.checkboxModel.value411[k] + "  " + $scope.otherBrowser11[k] + " " + $scope.entOthrBrsrIDl1[k] + $scope.browserIndividualTypeCollection11[k];
    
    if ($scope.testerCommentID1[k] == undefined)
      $scope.testerCommentID1[k] = " ";
  
   

    if ($scope.selected_name_glbl1[k] == undefined) 
      $scope.selected_name_glbl1[k] = " ";

    if ($scope.browserTypeCollection11[k] == undefined)
      $scope.browserTypeCollection11[k] = " ";

    if ($scope.imgCnvrsnJSON1[k] == undefined)
      $scope.imgCnvrsnJSON1[k] = " ";  
 $scope.testerCommentID1[k] = $scope.testerCommentID1[k].toString().replace(/""/g, '"');
 $scope.testerCommentID1[k] = $scope.testerCommentID1[k].toString().replace(/\n/g, " ");
 
 if ($scope.location1[k] == undefined)
      $scope.location1[k] = " ";  
 $scope.location1[k] = $scope.location1[k].toString().replace(/""/g, '"');
 $scope.location1[k] = $scope.location1[k].toString().replace(/\n/g, " ");
 let o = i+1;let p=k+1; 
   
   $scope.testresult2[k] = '{"CrtID": "' + $scope.criteriaTestsJson.Criteria[i].CrtID +'",' +'"DisabilityImpact": "' + $scope.criteriaTestsJson.Criteria[i].DisabilityImpact+'",' + '"Test": "' + '*'+$scope.criteriaTestsJson.Criteria[i].Test + '",' + '"TestName": "' + '*'+$scope.criteriaTestsJson.Criteria[i].TestName + '",' + '"TestID": "' + '*'+$scope.criteriaTestsJson.Criteria[i].TestID + '",' + '"TestCondition": "' + '*'+$scope.criteriaTestsJson.Criteria[i].TestCondition + '",' + '"IssueNo": "' + "Issue " + o + "." + p + '","TestResult": "' + $scope.selected_name_tstgrp1[k]  +  '","location": "' + $scope.location1[k] +'","OptMenu1": "' + $scope.menu1[i] + '","TesterComment": "' + $scope.testerCommentID1[k] + '","T_brwsrType": "' + $scope.browserTypeCollection11[k] + '","T_brwsrVrsn": "' + $scope.browserVersionsCollection11[k] +  '","GlobalIssue": "' + $scope.selected_name_glbl1[k] + '","AddedIssue": "' + true + '","Counter": "' + m + '","ImageSrc":"';
     
      
 for(let p=0;p<$scope.imgCnvrsnJSON1.length;p++){
	 
	      if($scope.imgCnvrsnJSON[p].imgValue == undefined){
				$scope.testresult2[k] = $scope.testresult2[k] +" ";
			 } 
	
	
			
			if($scope.imgCnvrsnJSON1[p].imgPosition != undefined){				 
           
	       if(m == $scope.imgCnvrsnJSON1[p].imgPosition){     			   
            
			$scope.testresult2[k] = $scope.testresult2[k] +$scope.imgCnvrsnJSON1[p].imgValue;
			 
           } 
		   if(m != $scope.imgCnvrsnJSON1[p].imgPosition){       
           
	       $scope.testresult2[k] = $scope.testresult2[k] +" ";
		   }
	   }
	   
	  } 	
   if( $scope.newIssueRsltSelected == true){
   if($scope.uploadImageClicked1 == false){
    $scope.testresult2[k] = $scope.testresult2[k] + '."}';	
    }else 	  
   $scope.testresult2[k] = $scope.testresult2[k] + '"}';	
   }   
   
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
	
	$scope.selected_name_tstgrp1[k] = 'undefined';
       
		$scope.newRsltSlctrion =  false;	 
       $scope.draftReport = true;
       $scope.RemarkExplntn[k] = ['{"crtId": "' + $scope.criteriaTestsJson.Criteria[k].CrtID + '", "explanation":"' + "Test Result is not selected for this " + '"}'];
      $scope.RemarkExplntnCollection.push($scope.RemarkExplntn[k]);      
      if ($scope.rmdatnDtlID1[k] == undefined){
        $scope.rmdatnDtlID1[k] = " ";	
  $scope.testresult[k] = $scope.testresult[k] + '","DraftReport": "' + $scope.draftReport + '"}'; }	
    }

    if ($scope.selected_name_tstgrp1[k] == "Pass") {		
      $scope.resultFails[k] = false;
      $scope.resultFailsCollection.push($scope.resultFails[k]);
      $scope.RemarkExplntn[k] = ['{"crtId": "' + $scope.criteriaTestsJson.Criteria[i].CrtID + '", "explanation":"' + "For " + "All Test Conditions Successfully Passed " + '"}'];
      $scope.RemarkExplntnCollection.push($scope.RemarkExplntn[k]);
      $scope.rmdatnDtlID1[k] = "Not Required";
      $scope.crtRsltCollection.push($scope.selected_name_tstgrp1[k]);
      $scope.crtCollection.push($scope.criteriaTestsJson.Criteria[k].CrtID);
     // $scope.testresult2[k] = $scope.testresult2[k] + '"}';
    } else if ($scope.selected_name_tstgrp1[k] == "Fail") {		
      $scope.resultFails[k] = true;
      $scope.resultFailsCollection.push($scope.resultFails[k]);
      $scope.testerCommentID[k] = $scope.testerCommentID[k].replace(/""/g, '"');
      $scope.RemarkExplntn[k] = ['{"crtId": "' + $scope.criteriaTestsJson.Criteria[i].CrtID + '", "explanation":"' + "For " + $scope.criteriaTestsJson.Criteria[i].TestName + ", " + $scope.testerCommentID[k] + '"}'];
      $scope.RemarkExplntnCollection.push($scope.RemarkExplntn[k]);
      if ($scope.rmdatnDtlID1[k] == undefined)
        $scope.rmdatnDtlID1[k] = " ";
     // $scope.testresult2[k] = $scope.testresult2[k] + '"}';
      $scope.crtRsltCollection.push($scope.selected_name_tstgrp1[k]);
      $scope.crtCollection.push($scope.criteriaTestsJson.Criteria[k].CrtID);

    } else if ($scope.selected_name_tstgrp1[k] == "Does Not Apply") {		
      $scope.resultFails[k] = false;
      $scope.resultFailsCollection.push($scope.resultFails[k]);
      $scope.RemarkExplntn[k] = ['{"crtId": "' + $scope.criteriaTestsJson.Criteria[i].CrtID + '", "explanation":"' + "For " + " This test is not required " + '"}'];
      $scope.RemarkExplntnCollection.push($scope.RemarkExplntn[k]);
      $scope.rmdatnDtlID1[k] = "Not Required";
      $scope.crtRsltCollection.push($scope.selected_name_tstgrp1[k]);
      $scope.crtCollection.push($scope.criteriaTestsJson.Criteria[k].CrtID);
     // $scope.testresult2[k] = $scope.testresult2[k] + '"}';
    } else if ($scope.selected_name_tstgrp1[k] == "Not Tested") {
		
      $scope.resultFails[k] = false;
      $scope.resultFailsCollection.push($scope.resultFails[k]);
      $scope.RemarkExplntn[k] = ['{"crtId": "' + $scope.criteriaTestsJson.Criteria[i].CrtID + '", "explanation":"' + "For " + " One or more test conditions not tested " + '"}'];
      $scope.RemarkExplntnCollection.push($scope.RemarkExplntn[k]);
      if ($scope.rmdatnDtlID1[k] == undefined)
        $scope.rmdatnDtlID1[k] = " ";
      //$scope.testresult2[k] = $scope.testresult2[k] +  '"}';
      $scope.crtRsltCollection.push($scope.selected_name_tstgrp1[k]);
      $scope.crtCollection.push($scope.criteriaTestsJson.Criteria[k].CrtID);

    }
	 if($scope.newIssueRsltSelected == false )
	 $scope.testresult2[k] = $scope.testresult2[k] +  '"}';
    if ($scope.testresult2[k] != undefined) {
      $scope.totTstRslt.push($scope.testresult2[k]);
      //$scope.testresult.push($scope.testresult2[i]);
    }
  }
  
  
  //converting to json object
  $scope.RemarkExplntnCollectionJSON = '[' + $scope.RemarkExplntnCollection + ']';
  
  if ($scope.submitClkCount == 0) {
    $scope.totTstRsltJson = "[" + $scope.totTstRslt + "]";
    $scope.totTstRsltJson = IsJsonString($scope.totTstRsltJson);
  }
  $scope.totTstRslt = $scope.totTstRslt.toString();
  if ($scope.submitClkCount != 0) {
    $scope.totTstRslt = $scope.totTstRslt.replace(/""/g, '"');
    $scope.totTstRslt = $scope.totTstRslt;
  }

  $scope.totTstRslt = $scope.totTstRslt.toString();
  $scope.totTstRslt = $scope.totTstRslt.replace(/""/g, '"');
  //$scope.totTstRslt =  $scope.totTstRslt+ '"}]';  
 //if( $scope.failSelectedAdditional == true)
//$scope.testresult1 = '"Criteria":[' + $scope.totTstRslt + ']';	 
//alert($scope.newRsltSlctrion);
 /*if($scope.newRsltSlctrion ==  false)
 $scope.testresult1 = '"Criteria":[' + $scope.totTstRslt + '"}]'; 
else */ 
$scope.testresult1 = '"Criteria":[' + $scope.totTstRslt + ']';
  $scope.criteriaLength = $scope.selected_name.length;
  $scope.criteriaResult = [];
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
	   $scope.failSelected = false;
       $scope.passSelected = false;      
       $scope.sameSCValue = false;
	   $scope.dnaSelected = false;
	   $scope.ntSelected =  false;	   
	   $scope.failSelectedAdditional = false;     	
      for (let a = 0; a < $scope.totTstRsltJson.length; a++) {
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
                  $scope.dsbl_Impctd_grp[a] = $scope.criteriaTestsJson.Criteria[b].DisabilityImpact;  //Disability impact for newly added test condition                 
                } else{
                  $scope.dsbl_Impctd_grp[a] = $scope.criteriaTestsJson.Criteria[a].DisabilityImpact;			      
			  
			  }
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
            $scope.criteriaResult.push('{"CrtID": "' + $scope.totTstRsltJson[a].CrtID + '","ConformanceLvl": "' + $scope.selected_name[a] + '","DisabilityImpact": "' + $scope.dsbl_Impctd_grp[a] + '","RemarkExplntn": "' + $scope.totTstRsltJson[a].TestName + ", " + $scope.totTstRsltJson[a].TesterComment + '"}');
			
			}
			else if($scope.slctTstRslt == "PassSelected"){	
            			
			$scope.criteriaResult.push('{"CrtID": "' + $scope.totTstRsltJson[a].CrtID + '","ConformanceLvl": "' + "Supports" + '","DisabilityImpact": "' + "" + '","RemarkExplntn": "' + "Explanation is not required, Please check detail test results" + '"}');	
			}
			else if($scope.slctTstRslt == "DNASelected"){
				
			$scope.criteriaResult.push('{"CrtID": "' + $scope.totTstRsltJson[a].CrtID + '","ConformanceLvl": "' + "Does Not Apply" + '","DisabilityImpact": "' + "" + '","RemarkExplntn": "' + "Explanation is not required, Please check detail test results" + '"}');	
			}
			else if($scope.slctTstRslt == "NotSelected"){
			$scope.criteriaResult.push('{"CrtID": "' + $scope.totTstRsltJson[a].CrtID + '","ConformanceLvl": "' + "Not Evaluated" + '","DisabilityImpact": "' + $scope.dsbl_Impctd_grp[a] + '","RemarkExplntn": "' + "Not evaluated, Please conduct a test" + '"}');	
			}
		   		
    }
	$scope.criteriaResult = $scope.criteriaResult.filter($scope.onlyUnique);
	$scope.criteriaResult = $scope.criteriaResult.sort();	
    $scope.criteriaResultJSON = "[ "+ $scope.criteriaResult +" ]";
	      $scope.criteriaResultJSON = IsJsonString($scope.criteriaResultJSON);	
          $scope.scValueUniqueSelected = "";	
          $scope.sameCrtIdExists = false;	
		  
          $scope.criteriaResult = $scope.criteriaResult.toString();
          $scope.criteriaResult = $scope.criteriaResult.replace(/,\s*$/, " "); //removes comma from last of string
          $scope.criteriaResult = $scope.criteriaResult.replace(/,+/g, ','); //removes multiple commas from string
			
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

  $scope.myOpsys = '{"S_window":"' + $scope.checkboxModel.value6 + '","S_mac": "' + $scope.checkboxModel.value7 + '","S_otherWin": "' + $scope.checkboxModel.value8;

  $scope.osVrsnNo = '","S_winVrsn": "' + $scope.selected_name_wnVersn + '","S_iosVrsn": "' + $scope.selected_name_iosVersn + '","S_otherOSChked": "' + $scope.otherWindow + '","S_otherOSVrsn": "' + $scope.entOthrWindVrsn + '","S_otherOSType": "' + $scope.entOthrWindID;
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
  $scope.firstname = $scope.firstname.toString().replace(/"/g, '\\"');
  $scope.lastname = $scope.lastname.toString().replace(/"/g, '\\"');
  $scope.testerID = $scope.testerID.toString().replace(/"/g, '\\"');
  $scope.testerContact = $scope.testerContact.toString().replace(/"/g, '\\"');
  $scope.testScope = $scope.testScope.toString().replace(/"/g, '\\"');
  $scope.testScope = $scope.testScope.toString().replace(/\n/g, " ");
  

 	$scope.browserVrsnCollection = $scope.browserVrsnCollection.toString().replace(/, /g, "").trim();
	$scope.browserVrsnCollection = $scope.browserVrsnCollection.toString().replace(/,/g, ", ").trim();	
	$scope.osVrsnCollection = $scope.osVrsnCollection.toString().replace(/, /g, " ").trim();
	$scope.osVrsnCollection = $scope.osVrsnCollection.toString().replace(/,/g, ", ").trim();
	$scope.osCollection = $scope.osCollection.toString().replace(/, /g, " ").trim();
	$scope.osCollection = $scope.osCollection.toString().replace(/,/g, ", ").trim();
	$scope.browserCollection = $scope.browserCollection.toString().replace(/, /g, " ").trim();
	$scope.browserCollection = $scope.browserCollection.toString().replace(/,/g, ", ").trim();
  $scope.formData = '[{"Product":' +
    '{"P_Name":"' + $scope.productID + '","P_Version": "' + $scope.versionID + '","P_Owner": "' + $scope.ownerID + '","P_Type": "' + $scope.productType + '","P_Location": "' + $scope.urlID + '","P_Desc": "' + $scope.prodDescID + '","P_Notes": "' + $scope.prdNteDescID + '"}, "System":' +
    $scope.myOpsys + $scope.osVrsnNo + '","S_osVrsnNo": "' + $scope.osVrsnCollection + '","S_selectedOS": "' + $scope.osCollection + $scope.categories + $scope.browserVersionsCollection + '","S_selectedBrowser": "' + $scope.browserCollection + '","S_selectedBrowserVersions": "' + $scope.browserVrsnCollection + '","S_Compatibility": "' + $scope.selected_name_cmpblty + '"},"Tester":' +
    '{"T_fstnm":"' + $scope.firstname + '","T_lstnm": "' + $scope.lastname + '","T_ID": "' + $scope.testerID + '","T_Role": "' + $scope.myRole + '","T_cntc": "' + $scope.testerContact + '","T_scope": "' + $scope.testScope + '","T_eval": "' + $scope.selected_name_tstprcss + '","T_evalMthd_Vrsn": "' + $scope.evlMthdVrsn + '","crtLength": "' + $scope.criteriaLength + '","T_Date": "' + $scope.tDateId + '"}, "Guideline":' +
    '{"Guideline":"' + $scope.Guideline + '","Section508": "' + $scope.Section508 + '","EN_Accessibility": "' + $scope.EN_Accessibility + '"},' + $scope.criteriaResult1 + ',' + $scope.testresult1 + '}]';

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
  if ($scope.testerContact == " " || $scope.testerContact == undefined) {
    $scope.error.push("Tester's Email");
   
  }
     
  if ($scope.error.length > 0)
    alert("Please input data for " + $scope.error);


  else {
	
    $scope.submit();	 
	 
    var blob = new Blob([$scope.formData], {
      type: "Content-Type: application/json"
    });
    saveAs(blob, $scope.productID + $scope.versionID + "Input.json");	
	

setTimeout(function() {
 	if ($scope.checkboxModel.alerts == "on")
		alert("Your updates have been saved to the Downloads folder (unless otherwise specified). You may continue editing on this page or load the newly created file in the Edit Report page.");
}, 3000);
   
  }
  
 //Resetting Arrays  
 $scope.criteriaResult.push( $scope.criteriaResult) ; //is blank for some reason   
 $scope.criteriaResult2 = $scope.criteriaResult2.push( $scope.criteriaResult2) ;
 
 $scope.Mul_Issues.push( $scope.Mul_Issues);
 if($scope.submitClkCount > 0) {
	 
	
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
 $scope.submitClkCount = $scope.submitClkCount + 1;    
 //$scope = $scope.$new(true); 
};
}]);
  
 
