const firebaseConfig = {
    apiKey: "AIzaSyALd2gsdbgezynEGbQKe9LrO3fkod2Qi8M",
  authDomain: "vcandre-e5890.firebaseapp.com",
  databaseURL: "https://vcandre-e5890-default-rtdb.firebaseio.com",
  projectId: "vcandre-e5890",
  storageBucket: "vcandre-e5890.appspot.com",
  messagingSenderId: "775913241905",
  appId: "1:775913241905:web:acb9820fc9112f4acf8410"
  };
    
  firebase.initializeApp(firebaseConfig);
var userName = localStorage.getItem("Usuário");
var roomName = localStorage.getItem("room");

function logout()
{
    localStorage.removeItem("Usuário");
    localStorage.removeItem("room");
    window.location = "index.html";
}

document.getElementById("usr").innerHTML = "Usuário: " + userName;

function send()
{
    msg = document.getElementById("mensagenes").value;
    firebase.database().ref(roomName).push({
        name:userName,
        message:msg,
        like:0
    });

    document.getElementById("mensagenes").value = "";
}
function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
    console.log(firebase_message_id);
      console.log(message_data);
      name = message_data['name'];
      message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
    message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

   row = name_with_tag + message_with_tag +like_button + span_with_tag;       
   document.getElementById("output").innerHTML += row;
//End code
 } });  }); }
getData();

function updateLike(message_id)
{
console.log("clicked on like button - " + message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes) + 1;
console.log(updated_likes);

firebase.database().ref(roomName).child(message_id).update({
   like : updated_likes  
});

}

