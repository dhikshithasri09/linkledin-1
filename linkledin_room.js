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

  function addRoom()
  {
        room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose:"adding room name"
        });
        localStorage.setItem("room_name", room_name);
        window.location="linkledin_page.html";
  }