
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyBE6NGYdYEdVQE26lolAiqthGBu3fXT5b4",
      authDomain: "kwitter-134ba.firebaseapp.com",
      databaseURL: "https://kwitter-134ba-default-rtdb.firebaseio.com",
      projectId: "kwitter-134ba",
      storageBucket: "kwitter-134ba.appspot.com",
      messagingSenderId: "150503542932",
      appId: "1:150503542932:web:79480253ece685b190e481"
    };
  
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function add_room(){
      Room_names = document.getElementById("room").value ;
      firebase.database().ref("/").child(Room_names).update({
            purpose: "adding_room_name"
      });

      localStorage.setItem("room_name", Room_names);
      window.location= "kwitter_page,html";
}




















function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}

getData();


