// ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyA_qgw8aHyDSBhrnwc2SUi_2FXAcq-B0mI",
    authDomain: "chatterbase-f1c5f.firebaseapp.com",
    databaseURL: "https://chatterbase-f1c5f-default-rtdb.firebaseio.com",
    projectId: "chatterbase-f1c5f",
    storageBucket: "chatterbase-f1c5f.appspot.com",
    messagingSenderId: "965517686691",
    appId: "1:965517686691:web:cc5fda8d9d5c50d5280c16"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);



function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}

