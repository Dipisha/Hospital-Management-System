var db = firebase.firestore();
 
function storeData2() {
 
  
 
  var inputBlood = document.getElementById("bld").value;
   var inputCity = document.getElementById("cit").value;
 
 



     // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById("donorform").reset();


/*db.collection("Donor").where("city" , "==" , inputCity).where("blood", "==", inputBlood).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        let feed = document.createElement("li");
      feed.setAttribute("class", "list-group-item");
      feed.setAttribute("id", doc.id);

      feed.innerText = doc.data().name + "---------> " + doc.data().phone;
     
      document.getElementById("feeds").append(feed);
	  
	  
    });
});*/
db.collection("Donor").where("city" , "==" , inputCity).where("blood", "==", inputBlood)
.get()
.then(querySnapshot=>{
        querySnapshot.forEach(doc=>{
            let data = doc.data();
            let row  = `<tr>
                            <td>${data.name}</td>
                            <td>${data.phone}</td>
                            
                      </tr>`;
            let table = document.getElementById('fd')
            table.innerHTML += row
        })
    })
    .catch(err=>{
        console.log(`Error: ${err}`)
    });
}