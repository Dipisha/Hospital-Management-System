  
var email_id = "uchadmin@gmail.com";
      document.getElementById("user_para").innerHTML = "You are logged in as : " + email_id;

  var db1 = firebase.firestore();

function submitdata() {
 
  
  var inputName = document.getElementById("name1").value;
   var inputPhone = document.getElementById("phone1").value;
  var inputBlood = document.getElementById("blood1").value;
   var inputCity = document.getElementById("city1").value;
  var inputHistory = document.getElementById("history").value;
  var inputBill = document.getElementById("bill").value;
   var inputDoctor = document.getElementById("doc1").value;
  var inputDisease = document.getElementById("disease1").value;
   var inputDepartment = document.getElementById("dept1").value;
  var inputDate = document.getElementById("date1").value;
  var inputEmail = document.getElementById("email1").value;
 
 
 
     db1.collection("Patients").doc().set({
        
         name1: inputName,
         phone1: inputPhone,
         blood1: inputBlood,
         city1: inputCity,
         doc1: inputDoctor,
         disease1: inputDisease,
         history: inputHistory,
         bill: inputBill,
         email1: inputEmail,
         dept1: inputDepartment,
         date1: inputDate

     })
     .then(function() {
         console.log("Doc successful");
     })
     .catch(function(error) {
        console.error("Error writing doc", error);
     });


     // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById("patientform").reset();
}















function logout(){
	 
    location.href = 'adminlogin.html';
}
