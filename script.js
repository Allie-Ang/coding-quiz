// reach into the html and grabe the start button
var startButton = document.querySelector("#start-btn");
// reach into the html, grab the element that hold our timer (queryselector)
var timerEl = document.getElementById("timer");
var currentTime;
var sendMessage;

// when the start button is clicked
startButton.addEventListener("click", function () {
  // starting the time
  var myTimer = setInterval(function () {
    // extract the first number (.textcontent or .innerhtml or i need console.dir the obj and look at it)
    currentTime = timerEl.textContent; // string that shows time from html
    // change that number from a string to a number so we can do math (parseInt)
    currentTime = parseInt(currentTime); // actual number you can now math

    // decrement the number
    currentTime = currentTime - 1;
    // put it back in the timer element (assign a value to the property you extracted)
    timerEl.textContent = currentTime;
    // if the number i'm working w/ === 0
    if (currentTime <= 0) {
      clearInterval(myTimer);
      alert("OUT OF TIME!");
    }
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
      if (this.value === "true") {
        alert("CORRECT!");
        console.log("correct");
      } else {
        // ** decrease the time **
        // get the value of the current time
        currentTime = timerEl.textContent;
        // turn the string into a number
        currentTime = parseInt(currentTime);
        // decrease it by 5
        currentTime = currentTime - 5;
        // put it back on the screen
        timerEl.textContent = currentTime;
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
        alert("CORRECT!");
      } else {
        // ** decrease the time **
        // get the value of the current time
        currentTime = timerEl.textContent;
        // turn the string into a number
        currentTime = parseInt(currentTime);
        // decrease it by 5
        currentTime = currentTime - 5;
        // put it back on the screen
        timerEl.textContent = currentTime;
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
        // ** decrease the time **
        // get the value of the current time
        currentTime = timerEl.textContent;
        // turn the string into a number
        currentTime = parseInt(currentTime);
        // decrease it by 5
        currentTime = currentTime - 5;
        // put it back on the screen
        timerEl.textContent = currentTime;
        alert("TIME DEDUCTED :(");
        console.log("incorrect");
      }
    });
  }
}

// User info for storage
// Take time value
// value of time = high score
// store

var userName = document.getElementById("initials");
var userInfo = document.getElementById("enter-btn");
var form = document.getElementById("submission");
var LOL = document.getElementById("LOL");

userInfo.addEventListener("click", function (event) {
  event.preventDefault();

  var user = {
    [userName.value.trim()]: currentTime,
    initials: userName.value.trim(),
    value: currentTime,
  };

  // set new submission to local storage
  localStorage.setItem("user", JSON.stringify(user));
  console.log(user);
  var newH2 = document.createElement("h2");
  newH2.innerText = user.initials + ":" + user.value;
  form.insertBefore(newH2, LOL.nextSibling);
});
