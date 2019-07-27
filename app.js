(function () {
	
	const firebaseConfig = {
      apiKey: "AIzaSyDnJkw4GGEJw5q2VAWcQ_V85m1DCX0xzZs",
      authDomain: "slider-response-d43d9.firebaseapp.com",
      databaseURL: "https://slider-response-d43d9.firebaseio.com",
      //projectId: "timed-response-9151d",
      storageBucket: "",
      //messagingSenderId: "824844136558",
      //appId: "1:824844136558:web:27b98fbc295d78f5"
    };
    firebase.initializeApp(firebaseConfig);

    const preData = document.getElementById('participant');

    const dbRef = firebase.database().ref().child('participant');

    dbRef.on('value', snap => console.log(snap.val()));

}());