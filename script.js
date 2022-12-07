// reach into the html and grabe the start button
var startButton = document.querySelector("#start-btn");

// when the start button is clicked
startButton.addEventListener("click", function () {
  // starting the time
  var myTimer = setInterval(function () {
    // reach into the html, grab the element that hold our timer (queryselector)
    var timerEl = document.getElementById("timer");

    // extract the first number (.textcontent or .innerhtml or i need console.dir the obj and look at it)
    var currentTime = timerEl.textContent; // string that shows time from html
    // change that number from a string to a number so we can do math (parseInt)
    currentTime = parseInt(currentTime); // actual number you can now math

    // decrement the number
    currentTime = currentTime - 1;
    // put it back in the timer element (assign a value to the property you extracted)
    timerEl.textContent = currentTime;
    // if the number i'm working w/ === 0
    if (currentTime === 0) clearInterval(myTimer);

    // -- and whatever else you want to do when it hits 0
  }, 1000);

  console.log("START");
  // show the question container
  // reach into the html and grab the question container
  var questionContainerEl = document.querySelector("#questions-container");
  console.dir(questionContainerEl);
  // change the display property to show it
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
  console.dir(question3Container);
  console.log(question3Container);

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
