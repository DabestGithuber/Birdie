var firebaseConfig = {
    apiKey: "AIzaSyAUL23g_fjzZwFkaZMrIIhJuLGe1ZYsrdY",
    authDomain: "birdie-webapp-6f36d.firebaseapp.com",
    databaseURL: "https://birdie-webapp-6f36d-default-rtdb.firebaseio.com",
    projectId: "birdie-webapp-6f36d",
    storageBucket: "birdie-webapp-6f36d.appspot.com",
    messagingSenderId: "282602724538",
    appId: "1:282602724538:web:7884e2c731611966b77683"
};


firebase.initializeApp(firebaseConfig);

function addRoom() {

    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";


}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("Room name -" + Room_names);
            row = "<div class = 'room_name' id=" + Room_names + " onclick = redirectToRoomName(this.id >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
            //End code
        });
    });
}
getData();

function redirectToRoomName() {
    console.log(name);
    localStorage.setItem("name", name);
    window.location = "kwitter_page.html";


}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";


}