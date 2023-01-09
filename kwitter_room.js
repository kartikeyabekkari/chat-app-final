var firebaseConfig = {
      apiKey: "AIzaSyC20U6sd_NktL9dFXhglQ_25RiAxoKKPhI",
  authDomain: "final-chat-app-68ea7.firebaseapp.com",
  databaseURL: "https://final-chat-app-68ea7-default-rtdb.firebaseio.com",
  projectId: "final-chat-app-68ea7",
  storageBucket: "final-chat-app-68ea7.appspot.com",
  messagingSenderId: "626331668645",
  appId: "1:626331668645:web:33f32bb00722294a82fd4c"
  };
  
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML="Welcome " + user_name + " !"
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id = 'Room_names +' onclick = 'redirectToRoomName(this.id)'> #" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;

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

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}