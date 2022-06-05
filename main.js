var firebaseConfig = {
    apiKey: "AIzaSyABb9KUGHxDaqtKrQ9OpmERCCVO_l-IyDw",
    authDomain: "uchhospital-d8fcb.firebaseapp.com",
    projectId: "uchhospital-d8fcb",
    storageBucket: "uchhospital-d8fcb.appspot.com",
    messagingSenderId: "123961062939",
    appId: "1:123961062939:web:ef40237916b4c825532abe"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  var messagesRef = firebase.database().ref('messages');


document.getElementById('appointmentform').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();
  
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var appointmentdate = getInputVal("appointmentdate");
  var dept = getInputVal('dept');
  var docs = getInputVal('docs');
  var message = getInputVal('message');
  
  // Save message
  saveMessage(name, email, phone, appointmentdate, dept, docs, message);
  
  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('appointment').reset();
  
}

function getInputVal(id){
  return document.getElementById(id).value;
}


function saveMessage(name, email, phone, appointmentdate, dept, docs, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    phone:phone,
	appointmentdate: appointmentdate,
	department: dept,
	doctors: docs,
    message:message
  });
}



  
var ref = firebase.database().ref();

ref.on("value", function(snapshot) {
   console.log(snapshot.val());
}, function (error) {
   console.log("Error: " + error.code);
});


