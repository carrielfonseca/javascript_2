/*
   Assignment 2
   
   Filename: travelExp.js
   
   Functions List:
   
*/

    // checks if input fields are filled out
    function testLength(requiredField) {
        var valid = true;		
        if (requiredField.value.length == 0) {
            requiredField.style.backgroundColor = "yellow";           
            valid = false;
        }        
        else {
            requiredField.style.backgroundColor = "white"; 
            valid = true;
        }
        return valid;
    }


    function testPattern(reg, requiredField) {        
        //var reg = /ACT\d{6}/i;
        var requiredFieldValue = requiredField.value;
        if (reg.test(requiredFieldValue)) {
            requiredField.style.backgroundColor = "white"; 
            requiredField.style.color = "black";
            return true;
        }
        else {
            requiredField.style.backgroundColor = "yellow";
            requiredField.style.color = "red";
            return false;
        }    
    }

	
	function testDates() {
        var dateExists = true;
        var rowDateExists;
            for(count=1; count<=4; count++){
				if(document.expform.elements["sub" + count].value > 0.00) {	
					rowDateExists = testLength(document.expform.elements["date" + count]);
                    if(rowDateExists == false){
						dateExists = false;
						break;
					}                   					
				}
			} 	
        return dateExists;
    }
	
	
	
	function validateForm() {
        var valid = true;

        if (testLength(document.expform.lastname) == false) {
            valid = false;
        }
        if (testLength(document.expform.firstname) == false){
            valid = false
        }
        if (testLength(document.expform.address) == false) {
            valid = false;
        }
        if (testLength(document.expform.summary1) == false) {
            valid = false;
        }
        if (testLength(document.expform.initial) == false) {
            valid = false;
        }

        if (testPattern(/ACT\d{6}/i, document.expform.account) == false) {
            valid = false;
        }
        if (testPattern(/DEPT\d{6}/i, document.expform.department) == false) {
            valid = false;
        }
        if (testPattern(/PROJ\d{6}/i, document.expform.project) == false) {
            valid = false;
        }
        if (testPattern(/\d{3}-{0,1}\d{3}-{0,1}\d{3}/i, document.expform.ssn) == false) {
            valid = false;
        }

        if (testDates() == false) {
            valid = false;
        }

        if (valid == false) {
            window.alert("Please fill out all required fields in the proper format.");

        }

        return valid;
    }



	


    
	


