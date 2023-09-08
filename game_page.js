
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

        function sair(){
                localStorage.removeItem("Usuário");
                window.location = "index.html";
        }
var nome = localStorage.getItem("Usuário");
document.getElementById("user").innerHTML = "Bem Vindo(a) " + nome;

function addRoom(){
        var nomsala = document.getElementById("sala").value;
        localStorage.setItem("room", nomsala);
        firebase.database().ref("/").child(nomsala).update({
                purpose:"Criamos Uma Pasta!"
        });

        window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("nomesDasSalas").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
        Room_names = childKey;
        console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("nomesDasSalas").innerHTML += row;
     });
   });
 
 }
 
 getData();

 function redirectToRoomName(name)
 {
        console.log(name);
        localStorage.setItem("room", name);
         window.location = "kwitterPage.html";
 }