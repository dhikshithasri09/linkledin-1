// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDHL9fOwRW9vhpniDo3M13CvuH3BxKRDqQ",
  authDomain: "linkledin-12345.firebaseapp.com",
  databaseURL: "https://linkledin-12345-default-rtdb.firebaseio.com",
  projectId: "linkledin-12345",
  storageBucket: "linkledin-12345.appspot.com",
  messagingSenderId: "7860415410",
  appId: "1:7860415410:web:974cb3b6032f103c53d2ab"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location="linkledin_room.html";
}