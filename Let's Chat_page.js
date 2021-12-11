
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
      apiKey: "AIzaSyDxKyE5GZxnqanvykVj5x4Ty7t4CpNsLes",
      authDomain: "let-s-chat-fe8c6.firebaseapp.com",
      projectId: "let-s-chat-fe8c6",
      storageBucket: "let-s-chat-fe8c6.appspot.com",
      messagingSenderId: "698407909881",
      appId: "1:698407909881:web:91bf2e79a227fc19c92528",
      measurementId: "G-MG5E5V2VC9"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.setItem("user_name");
room_name = localStorage.setItem("room_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function send() {
 msg = document.getElementsById("msg").value;
 firebase.database().ref(room_name).push({
       name:user_name,
       message:msg,
       like:0
 });
 document.getElementsById("msg").value = "";
}