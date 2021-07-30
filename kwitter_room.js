
 var firebaseConfig = {
      apiKey: "AIzaSyBv58DQ7bNwL7acUj-CciXAQWT4ZiOmuyo",
      authDomain: "messenger-chat-app-b6983.firebaseapp.com",
      databaseURL: "https://messenger-chat-app-b6983-default-rtdb.firebaseio.com",
      projectId: "messenger-chat-app-b6983",
      storageBucket: "messenger-chat-app-b6983.appspot.com",
      messagingSenderId: "1041425136446",
      appId: "1:1041425136446:web:193504d55ed4476bbfca6f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Hello! Welcome " + user_name+ "Chat with your friends right now using this app."
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
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
    window.location = "kwitter.html";
}