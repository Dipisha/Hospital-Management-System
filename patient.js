var db = firebase.firestore();

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

   db.collection("Patients").where("email1" , "==" , email_id)
.get()
.then(querySnapshot=>{
        querySnapshot.forEach(doc=>{
            let data = doc.data();
            let row  = `<tr>
      <td>${data.name1}</td>
                            <td>${data.phone1}</td>
                            <td>${data.disease1}</td>
                            <td>${data.dept1}</td>
              <td>${data.doc1}</td>
              <td>${data.blood1}</td>
              <td>${data.city1}</td>
              <td>${data.bill}</td>
              <td>${data.history}</td>
                            
                      </tr>`;
            let table = document.getElementById('fd')
            table.innerHTML += row
        })
    })
    .catch(err=>{
        console.log(`Error: ${err}`)
    });

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  document.getElementById("plf").reset();
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);
 
    // ...
  });

}



function logout(){
  firebase.auth().signOut();

}



function forgot(){
 var auth = firebase.auth();
var emailAddress =  document.getElementById("forgot_email").value;;

auth.sendPasswordResetEmail(emailAddress).then(function() {
  // Email sent.
}).catch(function(error) {
  // An error happened.
}); 

    // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById("forgot_email").reset();


}