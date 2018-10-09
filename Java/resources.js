// Initialize Firebase



var config = {
  apiKey: "AIzaSyDrByFzhj9Ak_lZ54uoZEGTcTWKmsWw5LQ",
  authDomain: "project-1-calendar-52aaa.firebaseapp.com",
  databaseURL: "https://project-1-calendar-52aaa.firebaseio.com",
  projectId: "project-1-calendar-52aaa",
  storageBucket: "project-1-calendar-52aaa.appspot.com",
  messagingSenderId: "237185498286"
};
firebase.initializeApp(config);
var database = firebase.database();


$(".submit-btn").on("click", function () {
  event.preventDefault();
  var saveTitle = $("#save-title").val();
  var saveURL = $("#save-url").val();
  console.log(saveTitle);
  console.log(saveURL);


  var newPage = {
    saveTitle: saveTitle,
    saveURL: saveURL,
  };

  database.ref().push(newPage);


  $("#save-title").val("");
  $("#save-url").val("");


  
})

database.ref().on("child_added", function (childSnapshot) {
  // console.log(childSnapshot.val());
console.log(childSnapshot)
console.log(childSnapshot.key)
  var saveTitle = childSnapshot.val().saveTitle;
  var saveURL = childSnapshot.val().saveURL;

  var newRow = $("<tr>").append(
    $("<td>").html(`<a href="${saveURL}">${saveTitle}</a>`),
    $("<td>").html(`<a class="btn-floating waves-effect delete-btn waves-light btn-small red">
            <i class="material-icons" >remove</i>
        </a>`),
  );

  newRow.attr("id", childSnapshot.key)

  $(".tableSaves > tbody").append(newRow);
});

$("tbody").on('click', '.delete-btn', function () {
  var delRow = $(this).closest("tr").attr("id")
  console.log(delRow)
  database.ref().child(delRow).remove()
  location.reload();
  
    
});
// database.ref().on("value", function (childSnapshot) {
//   console.log("on the right track")
//   });

// ==============Authentication=========================

var provider = new firebase.auth.GoogleAuthProvider();

function googleSign() {
firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
};

$("#login").on('click', function () {
  googleSign();
});

//====================Pagination====================

$(document).ready(function(){
  $('#data-container').pageMe({
    pagerSelector:'#myPager',
    activeColor: 'blue',
    prevText:'Previous',
    nextText:'Siguiente',
    showPrevNext:true,
    hidePageNumbers:false,
    perPage:10
  });
});