// reach into the html and grabe the start button
var startButton = document.querySelector("#start-btn");

function renderQ2() {
  var question1Container = document.querySelector("#question-group1");
  question1Container.style.display = "none";

  var question2Container = document.querySelector("#question-group2");
  question2Container.style.display = "block";

  var q2Btn = document.querySelectorAll(".q2Btn");
  for (var i = 0; i < q2Btn.length; i++) {
    q2Btn[i].addEventListener("click", function () {
      if (this.value == "true") {
        //increase score
        console.log("correct");
      } else {
        //deduct time
        console.log("incorrect");
      }
      renderQ3();
    });
  }
}

// timer for start timer function

// when the start button is clicked
startButton.addEventListener("click", function () {
  // starting the time

  console.log("START");
  // show the question container
  // reach into the html and grab the question container
  var questionContainerEl = document.querySelector("#questions-container");
  console.dir(questionContainerEl);
  // change the display property
  questionContainerEl.style.display = "block";

  // hide start button
  startButton.style.display = "none";

  // show the first question
  var question1Container = document.querySelector("#question-group1");
  question1Container.style.display = "block";

  var q1Btn = document.querySelectorAll(".q1Btn");

  //   q1Btn.forEach(function (btn) {
  //     console.log(btn);
  //     btn.addEventListener('click', function(){
  //         console.log(this)
  //     })
  //   });
  for (var i = 0; i < q1Btn.length; i++) {
    q1Btn[i].addEventListener("click", function (event) {
      //console.log(this);
      //console.log(event.target.value);
      //console.log(event);
      if (this.value == "true") {
        //increase score
        console.log("correct");
      } else {
        //deduct time
        console.log("incorrect");
      }
      renderQ2();
    });
  }
  // listen for clicks
  // evaluate answer
  // show next question group
  // Keep score
});

// inside for loop, create event listern for button
// query selector for all
// create a new function.

// when clicking answer, moves on to next question, with alerts. Add event listener for answer buttons
// var question2Btn = document.querySelector("#answer-btn2");
// question2Btn.addEventListener("click", function () {
//   question1Container.style.display = "none";
// Add alert for right or wrong answer
// Keep Score
// Time function
// });

// Conditional statements.
// Do I add a sep id for each button to present an alert and add an event listeners? in order to keep score as well?
