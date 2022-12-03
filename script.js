// reach into the html and grabe the start button
var startButton = document.querySelector("#start-btn");

// when the start button is clicked
startButton.addEventListener("click", function () {
  // starting the time

  console.log("START");
  // show the question container
  // reach into the html and grabe the question container
  var questionContainerEl = document.querySelector("#questions-container");
  console.dir(questionContainerEl);
  // change the display property
  questionContainerEl.style.display = "block";

  // hide start button
  startButton.style.display = "none";

  // show the first question
  var question1Container = document.querySelector("#question-group1");
  question1Container.style.display = "block";

  // when clicking answer, moves on to next question, with alerts




  // listen for clicks
  // evaluate answer
  // show next question group
  // Keep score
});
