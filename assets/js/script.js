// Automatic slider

var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 2){
        counter = 1;
      }
}, 5000);


// Slider image product

function myFunction(smallImg) {
  var fullImg = document.getElementById('imageBox');
  fullImg.src = smallImg.src;
}


// Feedback validation product

var name_feedback = document.getElementById('name_feedback');
var tel_feedback = document.getElementById('tel_feedback');
var submit_feedback = document.getElementById('submit_feedback');


function checkInputs() {
  var name_feedbackValue = name_feedback.value;
  var tel_feedbackValue = tel_feedback.value;
  var comment_feedbackValue = comment_feedback.value;
  var phoneReg = /^[0-9]\w{9,10}$/; 
  if(name_feedbackValue.length === 0) {
    alert('Please enter your name');
    return;
  }

  if(tel_feedbackValue.length === 0) {
    alert('Please enter your phone number');
    return;
  }

  if(!tel_feedbackValue.match(phoneReg)) {
    alert('The Phone number must be digits only (from 10-11 digits) ');
    return;
  }

  if(comment_feedbackValue.length === 0) {
    alert('Please enter your feedback');
    return;
  }

  alert('Thanks for your feedback. We will get back to you later ');
  return;

}


// Feedback Page


var feedback_email = document.getElementById('feedback_email');
var feedback_phone = document.getElementById('feedback_phone');
var feedback_content = document.getElementById('feedback_content');



function checkInputsFeedback() {
  var feedback_emailValue = feedback_email.value;
  var feedback_phoneValue = feedback_phone.value;
  var feedback_contentValue = feedback_content.value;
  var phoneReg = /^[0-9]\w{9,10}$/; 
  var emailValid = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/


  if(feedback_emailValue.length === 0) {
    alert('Email field must be enter');
    return;
  }


  if(!(feedback_emailValue.match(emailValid))) {
    alert('Email must be  xxxx@xxx.xxx');
  return;
  }


  if(feedback_phoneValue.length === 0) {
    alert('Phone field must be enter');
    return;
  }


  if(!feedback_phoneValue.match(phoneReg)) {
    alert('The Phone must be digits only (from 10-11 digits)');
    return;
  }


  if(feedback_contentValue.length === 0) {
    alert('Content field must be enter');
    return;
  }

  alert('Thanks for your feedback. We will contact you as soon as possible.');
  return;



}


$(document).ready(function() {
        $("#name").on('change', function(){
            $(".data").hide();
            $("#" + $(this).val()).fadeIn(700);
        }).change();
    });
