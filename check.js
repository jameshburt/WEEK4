function checkCreds() {    
 console.log("checkCreds() started");
    var firstName = document.getElementById("firstName").value;    
    var lastName = document.getElementById("lastName").value;    
    var badgeNumb = document.getElementById("badgeID").value;    
    var fullName = firstName + " " + lastName;    
    if (fullName.length > 20 || fullName.length < 2) {              
            document.getElementById("loginStatus").innerHTML = "EventName has invalid number of characters!";    
        }     else if (badgeNumb > 20 || badgeNumb < 1) {        
            document.getElementById("loginStatus").innerHTML = "Number of participants is an invalid number!";    
        }    else {        
            alert("Access Granted, Welcome " + fullName + "!");        
            location.replace("newhtml1.html");    
    }

}