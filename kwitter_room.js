
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyBqrRGOmC3yT2iDgendsf9Ve4hkCO3C9lE",
      authDomain: "kwitter-bcd40.firebaseapp.com",
      databaseURL: "https://kwitter-bcd40-default-rtdb.firebaseio.com",
      projectId: "kwitter-bcd40",
      storageBucket: "kwitter-bcd40.appspot.com",
      messagingSenderId: "489696790645",
      appId: "1:489696790645:web:dcbe2d99a582ffb5b0903c",
      measurementId: "G-BLHT0N51S0"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}