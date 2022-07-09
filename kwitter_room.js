

//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDwLZw4DufjIFUX6Fhcy02E_VRmfXuhkWo",
      authDomain: "kwitter-2d733.firebaseapp.com",
      projectId: "kwitter-2d733",
      storageBucket: "kwitter-2d733.appspot.com",
      messagingSenderId: "390168974628",
      appId: "1:390168974628:web:d0fb186fec9e2994b60fb1"
    };
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome" + user_name+"!";
    function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"      });
            localStorage.setItem("room_name",room_name);
            window.location="kwitter_page.html";
    }
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
console.log("room name-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;

});
});
}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";

}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}