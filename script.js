// Complete HTML first 

// Place to ask questions. Empty divs.

// Start quiz function. place hidden elements in HTML. Only 1 shows.
// event listern for start button. 
// Trigger start quiz fx. start page goes away (start element.set attribute class hide)
// Allow questions to show. Qestion sec .class remove 
// Allow time. Make interval. Global variable to hold time
// Div to how time. Text content. time. 1000 mil = 1 sec. time -- and update with text content.
// text content update. 
// do not use time === 0. issue with code execution vs actual time. Use <=0


// SHOWING QUESTION
// Call show question fx. As the last thing in START FX. 
// need a array of objects. each question is an object. with 3 properties.
    // questions
    // choices (sub Array)
    // answer property
// Need a global variable index to hold all questions. 

// current question = 0
// Do text content for that div. 
// small for loop over choices array. dynamically make a button for each possible choices. 
// variable choice button = element string 
// must put on click.. = equals a third fc to check if answer right (make reference)
// append each button to empty div for those answers. or append child choice button. *still in loop
// write check fx. this if . value !== questions . current.answer.
    // time minus time-=10. must immediatley update div for text content. & check if out of time . 
    // Immediatley call end quiz fx
// show feedback - dont use alerts. use css. alerts block code execution.
// if right, show feed back element to say correct. then ready to go to next question.
// go back to current index (gloabl) ++ it. Call show question fx. Careful to not run out of questions.
// to a quick check, if current index >= quiz.length, then call show questions.
// if no more questions. call end quiz 

// when quiz is over, end quiz first line of code is to clear interval. declare global =  var timer interval; 
// timer interval = set interval 
// hide questions and answers elements. 

// display score and intials. 
// html element - span for time element. to show score. input box with button. 
// initals: into box. to save score. on click with button. add anther fx.  or on click 

// Leader board. local storage. save function = pull out local storage. add to it.
// turn it back into array. parse. stringify
// need an array of objects. score and initials. 
// if local storage emtpy, get high scores into locals storage.
// set high score = empty array 
// make new object into new score. var = name + score. Push into high score array
// set to back to back storage.

// need function to pull out all scores in leader board. same way for high scores array, do it again 
// sort = array.sort. need a custom compariter. sorted order. high on top, low on bottom.
// then do loop for ever Array. ol (ordered list) element ready in html. 
// append to ol, make li tag and append.


// make a button to back and start over. call start quiz again. 
// loop through time again. index has to go back to 0. (add to start quiz fx. or reset. and then call start fx)
// 



// function to end quiz (fx is called with time runs out)