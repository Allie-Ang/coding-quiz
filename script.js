// reach into the html and grabe the start button
var startButton = document.querySelector("#start-btn");

// sanity check
console.log(startButton);
console.dir(startButton);

// when the start button is clicked
startButton.addEventListener("click", function() {
    // starting the time





    console.log("START"); // sanity check
    // show the question container
    // reach into the html and grabe the question container
    var questionContainerEl = document.querySelector('#questions-container');
    console.dir(questionContainerEl)
    // change the display property
    questionContainerEl.style.display = 'block';


    // show the first question
    var question1Container = document.querySelector('#question-group1');
    question1Container.style.display = 'block'


    // hide the start button
    // use the var that holds start button to change its style and display prop to none


    // listen for clicks
    // evaluate answer
    // show next question group
});

