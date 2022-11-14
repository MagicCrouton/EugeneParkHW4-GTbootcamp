// listed html elements for use later
var bodyEl = document.body;
var headerEl = document.getElementById('welcome');
var containerEl = document.getElementById('container');
var quizCardEl = document.getElementById('quizCard');
var h2El = document.getElementById('questionDisplay');
var multchoiceListEl = document.getElementById('mult');
var starBtnEl = document.getElementById('startBtn');
var quizBoxbannerEl = document.getElementById('quizBoxbanner');
var li1 = document.getElementById('multichoice1')
var li2 = document.getElementById('multichoice2')
var li3 = document.getElementById('multichoice3')
var li4 = document.getElementById('multichoice4')
var timerEl = document.getElementById('timebox')
// end listed html elements

// question pool 
// questions were pulled from https://quizlet.com/234928595/question-pool-quiz-3-chapter-3-flash-cards/

var question1 = {question:"What is the command to display a prompt?", correctAnswer: `prompt("Text Here");`}
var question2 = {question: "How do you assign the value from a prompt to a string?", correctAnswer: `var stringVar = prompt("Text Here");`}
var question3 = {question: "How do you assign the value from a prompt to a non-string variable?", correctAnswer: `Using a parse. Example : var intVar = parseInt(prompt("Text Here"));`}
var question4 = {question:"How do you assign a default value to a prompt?", correctAnswer: `window.prompt("prompt","value")`}
var question5 = {question:"How do you display an alert?", correctAnswer: `Using the second parameter. Example: prompt("Enter Age:", "18");`}
var question6 = {question:"How do you display an alert?", correctAnswer: `alert("Alert Text Here");`}
var question7 = {question:"How do you test that a variable contains a valid number?", correctAnswer: `isNaN(varHere); //Returns true or false.`}
var question8 = {question:"How do you display a confirmation?", correctAnswer: `confirm("Message Text Here");`}
var question9 = {question:"What values can confirm() return?", correctAnswer: `True or fals`}
var question10 = {question:"How do you access a page element by id?", correctAnswer: `document.getElementById(id)`}
var question11 = {question:"How do you assign actions to the window onLoad event?", correctAnswer: `window.onload = function() {//actions here}`}
var question12 = {question:"What are the four attributes of the <script> tag?", correctAnswer: `Type, Src, Charset, and Defer`}
var question13 = {question:"In the <script> tag, how is the Type attribute used?", correctAnswer: `<script type="text/javascript"> //Used to denote the type of script being used. Always this for JavaScript`}
var question14 = {question:"In the <script> tag, how is the Src attribute used?", correctAnswer: `<script src="fileName.js"> //Used to denote external file for script use`}

// this ingests the objects into a single array
var questionPool = [];
for (i=0; i < 14; ++i){
    questionPool[i] = eval(`question${(i+1)}`)
}

// // timer function

function updateTime () {
  
}

function countDown(secondsLeft) {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timerEl.textContent = secondsLeft;
  
      if(secondsLeft < 0) {
        clearInterval(timerInterval);
        timerEl.textContent = "Out of Time!"
        li1.setAttribute("class", "finished");
        li2.setAttribute("class", "finished");
        li3.setAttribute("class", "finished");
        li4.setAttribute("class", "finished");
        h2El.textContent = (`And We're done!`);
        li1.textContent = (`you got ${points} out of ${questionPool.length} right`);
        li2.textContent = (`with ${secondsLeft}s left on the clock`);
        li3.textContent = ('');
        li4.textContent = ('');
        results= {points, secondsLeft}
      }
  
    }, 1000);
  }
  // timer function

// This function fills the multiple choice text content with one correct answer and three randomized wrong answers from the rest of the pool
  function queryQuestion(n) {
    h2El.textContent = `${questionPool[n].question}`;
    // collects all other "incorrect answers to populate into the other choices"
    var otheranswerPool = [];
    for (i=0; i<(questionPool.length); ++i) {
        otheranswerPool[i] = questionPool[i].correctAnswer;
      }
      otheranswerPool.splice(n,1)
    // creates array of three wrong answers pulled from the whole pool and the right answer

    var choiceArray =[];
    choiceArray[0] = `${questionPool[n].correctAnswer}`;
      var i = 1
    while (i<4) {
      var choiceContent = questionPool[Math.floor((Math.random()*14))].correctAnswer;
      if (!choiceArray.includes(choiceContent)) {
        choiceArray[i] = choiceContent;
        i = i + 1
      }
    }
      // creates an array to distribute the answer choices randomly among 4 Elements
      var placement = [];
      var i = 0
    while (i<4) {
      var place = Math.floor((Math.random()*4));
      if (!placement.includes(place)) {
        placement[i] = place;
        i = i + 1
      }
    }
    li1.textContent = `${choiceArray[placement[0]]}`;
    li2.textContent = `${choiceArray[placement[1]]}`;
    li3.textContent = `${choiceArray[placement[2]]}`;
    li4.textContent = `${choiceArray[placement[3]]}`;

    // because the correct answer is initially placed in the first element of the choice array, which then
    // the coordinates are given to it by the first element of the placement array. we can determine where the correct answer is.
    eval(`li${placement[(0)]+1}`).setAttribute('id', "correctChoice");
    eval(`li${placement[(1)]+1}`).setAttribute('id', "incorrectChoice");
    eval(`li${placement[(2)]+1}`).setAttribute('id', "incorrectChoice");
    eval(`li${placement[(3)]+1}`).setAttribute('id', "incorrectChoice");
  }
// END This function fills the multiple choice text content with one correct answer and three randomized wrong answers from the rest of the pool
  

// Inital click resets the page for questions and starts the inital timer

starBtnEl.addEventListener("click", function() {
    starBtnEl.textContent = '';
    starBtnEl.setAttribute('id', 'blank');
    starBtnEl.setAttribute('class', 'blank');
    timerEl.setAttribute("class", 'timer');
    li1.setAttribute("class", "choice");
    li2.setAttribute("class", "choice");
    li3.setAttribute("class", "choice");
    li4.setAttribute("class", "choice");
    // loads up first question then sets event listener to each li item
    queryQuestion(1);
    var choiceEl = document.querySelectorAll('.choice');
    secondsLeft = 30
    var points = 0
    n = 2
    var results = [];
    for (i=0; i < choiceEl.length; ++i) {
    choiceEl[i].addEventListener("click", function(event){
        if (event.target.id === 'correctChoice' && (n < questionPool.length)) {
        secondsLeft = secondsLeft + 20;
        points = points + 1;
        queryQuestion(n);
        // setTime();
      }
        else if (event.target.id === 'incorrectChoice' && (n < questionPool.length)) {
        secondsLeft = secondsLeft - 20;
        points = points + 0;
        queryQuestion(n);
        // setTime();
      } 
        else {
        li1.setAttribute("class", "finished");
        li2.setAttribute("class", "finished");
        li3.setAttribute("class", "finished");
        li4.setAttribute("class", "finished");
        h2El.textContent = (`And We're done!`);
        li1.textContent = (`you got ${points} out of ${questionPool.length} right`);
        li2.textContent = (`with ${secondsLeft}s left on the clock`);
        li3.textContent = ('');
        li4.textContent = ('');
        results= {points, secondsLeft}
      }
    n = n + 1;
  })}
    })










// var choiceEl = document.querySelectorAll('.choice');
// var points = 0

// for (i=0; i < choiceEl.length; ++i) {
//   choiceEl[i].addEventListener("click", function(event){
//         if (event.target.id === 'correctChoice') {
//         var secondsLeft = secondsLeft + 20;
//         points = points + 1;
//         queryQuestion(i+1,li1,li2,li3,li4);
//         setTime();
//     }
//     else if (event.target.id === 'incorrectChoice') {
//         var secondsLeft = secondsLeft - 20;
//         points = points + 0;
//         queryQuestion(i+1,li1,li2,li3,li4);
//         setTime();
//     }
//   })
// }
