function validateForm() {
    var today = new Date();  
    var dateYear = today.getFullYear();

    let birthDate = document.forms["ageForm"]["birthDate"].value;
    let birthMonth = document.forms["ageForm"]["birthMonth"].value;
    let birthYear = document.forms["ageForm"]["birthYear"].value;

    if (birthDate == "") {
      alert("Birth Date must be filled");
      return false;
    }
    if(birthDate < 1 || birthDate > 31){
        alert("Invalid Birth Date");
        return false;
    }

    if (birthMonth == "") {
      alert("Birth Month must be filled");
      return false;
    }
    if(birthMonth < 1 || birthMonth > 12){
        alert("Invalid Birth Month");
        return false;
    }

    if (birthYear == "") {
      alert("Birth Year must be filled");
      return false;
    }
    if ((dateYear - birthYear) < 21) {
        alert("You cannot enter this website, you must be at least 21");
        return false;
      }

 

  }