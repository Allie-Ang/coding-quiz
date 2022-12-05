// reach into the html and grabe the start button
var startButton = document.querySelector("#start-btn");

// Hiding Q1
function renderQ2() {
  var question1Container = document.querySelector("#question-group1");
  question1Container.style.display = "none";
  // Showing Q2
  var question2Container = document.querySelector("#question-group2");
  question2Container.style.display = "block";
  // Q2 buttons
  var q2Btn = document.querySelectorAll(".q2Btn");
  for (var i = 0; i < q2Btn.length; i++) {
    q2Btn[i].addEventListener("click", function () {
      if (this.value == "true") {
        //increase score
        alert("CORRECT!");
      } else {
        //deduct time
        alert("TIME DEDUCTED :(");
        console.log("incorrect");
      }
      renderQ3();
    });
  }
}

// Q3
function renderQ3() {
  var question2Container = document.querySelector("#question-group2");
  question2Container.style.display = "none";

  var question3Container = document.querySelector("#question-group3");
  question3Container.style.display = "block";

  var q3Btn = document.querySelectorAll(".q3Btn");
  for (var i = 0; i < q3Btn.length; i++) {
    q3Btn[i].addEventListener("click", function () {
      if (this.value == "true") {
        //increase score
        alert("CORRECT!");
        console.log("correct");
      } else {
        //deduct time
        alert("TIME DEDUCTED :(");
        console.log("incorrect");
      }
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

  for (var i = 0; i < q1Btn.length; i++) {
    q1Btn[i].addEventListener("click", function (event) {
      if (this.value == "true") {
        //increase score
        alert("CORRECT!");
        console.log("correct");
      } else {
        //deduct time
        alert("TIME DEDUCTED :(");
        console.log("incorrect");
      }
      renderQ2();
    });
  }
});
