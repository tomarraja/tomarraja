// navigation adder
function navLoader(){
    document.querySelector("nav").innerHTML = " <ul class='nav-ul'><li class='nav-link'><a href='index.html'> Home </a></li><li class='nav-link'><a href='about.html'> About </a></li><li class='nav-link'><a href='contact.html'> Contact </a></li><li class='menu-bars'> ☰ <ul class='menu-ul'><li class='menu-link'><a href='index.html'> Home </a></li><li class='menu-link'><a href='about.html'> About </a></li><li class='menu-link'><a href='contact.html'> Contact </a></li></ul></li></ul> " ;
}

// footer adder
function footerLoader(){
    document.querySelector("footer").innerHTML = "<p> &copy; Copyright 2017, Raja Tomar <br/> Under the License from MIT.</p> ";
}

// email section adder
function emailSection(){
    document.getElementById("email-me").innerHTML = " <h1>Email Me !</h1><div class='email-form'><input type='email' placeholder='Email..'><button class='submit subscribe-btn' type='submit' ><a href='mailto:rajatomar788@gmail.com' style='text-decoration: none; color: white; padding: 15px; margin:0 ;'>Subscribe</a></button></div><p>Your Email won't be displayed anywhere.</p> ";
}


// Initialisations
navLoader()
footerLoader()
emailSection()


// contact form firebase integration

// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyB2804TJRKS5Vf6sj0I0aOtdoZoHzYmrp8",
    authDomain: "bajra-media.firebaseapp.com",
    databaseURL: "https://bajra-media.firebaseio.com",
    projectId: "bajra-media",
    storageBucket: "bajra-media.appspot.com",
    messagingSenderId: "968466129638"
};

firebase.initializeApp(config);
  
// Reference messages collection

var messagesRef = firebase.database().ref('messages');
  
// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);
  
// Submit form
function submitForm(e){
  e.preventDefault();
  
  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');
  
  // Save message
  saveMessage(name, company, email, phone, message);
  
  // Show alert
  document.querySelector('.alert').style.display = 'block';
  
  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);
  
  // Clear form
  document.getElementById('contactForm').reset();
}


// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}
  
// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    Name: name,
    Company:company,
    Email:email,
    Phone:phone,
    Message:message
  });
}