
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


// Back to Top Button
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// End Back to Top Button


// Email Js
function validate() {
  let name = document.querySelector(".name");
  let email = document.querySelector(".email");
  let msg = document.querySelector(".message");
  let sendBtn = document.querySelector(".send-btn");

  sendBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (name.value == "" || email.value == "" || msg.value == ""){
          emptyerror();
      } else {
          sendmail (name.value, email.value, msg.value);
          success();
      }
  });
}
validate();

function sendmail(name,email,msg){
  emailjs.send("service_m8bonqe","template_wtg6f5w",{
      from_name: email,
      to_name: name,
      message: msg,
      });
}

function emptyerror() {
  swal({
      title: "Oh No....!",
      text: "Fields can not be empty!",
      icon: "error",
      // icon: "success",
      // button: "error!",
    });
}

function success() {
  swal({
      title: "Email sent sucessfully!",
      // text: "We try to replay in 24 hours!",
  text: "Thanks for connecting, I try to replay asap!",
      icon: "success",
    });
}

// // preloader
// $(document).ready(function() {
//     setTimeout(()=>{
//         $('#Preloader').addClass('loader');
//     },1000);
//     setTimeout(()=>{
//         $('#Preloader').remove('loader');
//     },500);
//   })

// preloader
$(document).ready(function() {
  setTimeout(()=>{
      $('#Preloader').addClass('loader');
  },300);
  setTimeout(()=>{
      $('#Preloader').remove('loader');
  },150);
})

