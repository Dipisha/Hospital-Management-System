var db = firebase.firestore();
 
function storeData1() {
 
  
  var inputName = document.getElementById("name").value;
   var inputPhone = document.getElementById("phone").value;
  var inputBlood = document.getElementById("blood").value;
   var inputCity = document.getElementById("city").value;
  var inputMessage = document.getElementById("message").value;
 
 
     db.collection("Donor").doc().set({
        
         name: inputName,
         phone: inputPhone,
         blood: inputBlood,
         city: inputCity,
         message: inputMessage
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
  document.getElementById("donorform").reset();
}