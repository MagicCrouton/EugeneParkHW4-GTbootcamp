//##########################################################################################################################################
//##########################################################################################################################################
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
//##########################################################################################################################################
// question pool 
// questions were pulled from https://quizlet.com/234928595/question-pool-quiz-3-chapter-3-flash-cards/
//##########################################################################################################################################

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
var question15 = {question:"Assume that the int value has been initialized to positive integer write a while loop that prints all of the positive divisiors of value For ex if value = 28 it prints divisors of 28: 1 2 4 7 14 28", correctAnswer: `System.out.println("divisors of " +value + ":");while (count <= value)\n
{int count = 1;\n
if ((value % count) ==0)\n
System.out.println( "" + count);\n
count++;\n
}`}

// this ingests the objects into a single array
var questionPool = [];
for (i=0; i < 15; ++i){
    questionPool[i] = eval(`question${(i+1)}`)
}
//##########################################################################################################################################
//##########################################################################################################################################
//this is inital time
var secondsLeft = 1000;
var points = 0;
var n =1;
var quizOver = false;
//##########################################################################################################################################
// timer function
// function endQuiz (message) {
//   h2El.textContent = (message);
//   li1.setAttribute("class", "finished");
//   li2.setAttribute("class", "finished");
//   li3.setAttribute("class", "finished");
//   li4.setAttribute("class", "finished");
//   li1.textContent = (``);
//   li2.textContent = (``);
//   li3.textContent = ('');
//   li4.textContent= ('');
//   timerEl.textContent = ('');
//   timerEl.setAttribute("class", "finished");
//   n = questionPool.length + 1;

//   var cleanupEl = document.querySelectorAll(".finished")
//   for (i=0; i < cleanupEl.length; ++i) {
//      cleanupEl[i].remove();
//   }

// var formEl = document.createElement("form");
// formEl.setAttribute("class","finished")
// var nameContainerEl = document.createElement("div");
// nameContainerEl.setAttribute("id","nameContainer")
// var submitContainerEl = document.createElement("div");
// submitContainerEl.setAttribute("id","submitContainer");
// var nameLabelEl = document.createElement("label");
// nameLabelEl.setAttribute("id","nameLabel")
// var submitLabelEl = document.createElement("label");
// submitContainerEl.setAttribute("id","submitLabel");
// var nameBtnEl = document.createElement("input");
// nameBtnEl.setAttribute("id","submitBtn");
// var submitBtnEl = document.createElement("input");
// submitBtnEl.setAttribute("id", "submitBtn");

// multchoiceListEl.appendChild(formEl);
// formEl.appendChild(nameContainerEl);
// formEl.appendChild(submitContainerEl);
// nameContainerEl.appendChild(nameLabelEl);
// nameContainerEl.appendChild(nameBtnEl);
// submitContainerEl.appendChild(submitLabelEl);
// submitContainerEl.appendChild(submitBtnEl);
// }


// var formEl = document.createElement("form");
// formEl.setAttribute("class","finished")
// var nameContainerEl = document.createElement("div");
// nameContainerEl.setAttribute("id","nameContainer")
// var submitContainerEl = document.createElement("div");
// submitContainerEl.setAttribute("id","submitContainer");
// var nameLabelEl = document.createElement("label");
// nameLabelEl.setAttribute("id","nameLabel")
// var submitLabelEl = document.createElement("label");
// submitContainerEl.setAttribute("id","submitLabel");
// var nameBtnEl = document.createElement("input");
// nameBtnEl.setAttribute("id","submitBtn");
// var submitBtnEl = document.createElement("input");
// submitBtnEl.setAttribute("id", "submitBtn");
//##########################################################################################################################################
//##########################################################################################################################################
// Function Section
//##########################################################################################################################################
//##########################################################################################################################################

//##########################################################################################################################################
// Timer function, could not get this to work.
//##########################################################################################################################################
// function countDown(x) {
//     var timer = setInterval(function() {
//     x = x - 1;
//     timerEl.textContent = x;
//     // var x = [secondsLeft, timer];
//     if(x < 0) {
//       clearInterval(timer);
//       endQuiz('Out of Time!');
//     }
//     else {}
//   return x;         } ,1000)
//   return [timer, x];}
//##########################################################################################################################################
// End
//##########################################################################################################################################


//##########################################################################################################################################
// This function fills the multiple choice text content with one correct answer and three randomized wrong answers from the rest of the pool
//##########################################################################################################################################

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
    li1.setAttribute("class", "choice");
    li2.setAttribute("class", "choice");
    li3.setAttribute("class", "choice");
    li4.setAttribute("class", "choice");
    // because the correct answer is initially placed in the first element of the choice array, and also 
    // the coordinates are given to it by the first element of the placement array. we can determine where 
    // the correct solution is by the code below.
    eval(`li${placement[(0)]+1}`).setAttribute('id', "correctChoice");
    eval(`li${placement[(1)]+1}`).setAttribute('id', "incorrectChoice");
    eval(`li${placement[(2)]+1}`).setAttribute('id', "incorrectChoice");
    eval(`li${placement[(3)]+1}`).setAttribute('id', "incorrectChoice");
  }
//##########################################################################################################################################
// END question updater function
//##########################################################################################################################################

function splashScreen (prompt) {
    li1.textContent=`${prompt}`;
    li2.textContent='';
    li3.textContent='';
    li4.textContent='';
    li1.setAttribute("class", "blank");
    li2.setAttribute("class", "blank");
    li3.setAttribute("class", "blank");
    li4.setAttribute("class", "blank");
}

//##########################################################################################################################################
//##########################################################################################################################################
// Function Section END
//##########################################################################################################################################
//##########################################################################################################################################


//##########################################################################################################################################
// Start of the body of the code
//##########################################################################################################################################
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
    var choiceEl = document.querySelectorAll('.choice');
    queryQuestion(n-1);

    var timer = setInterval( function(){
      secondsLeft = secondsLeft - 1;
      timerEl.textContent=secondsLeft;
      if (secondsLeft < 0) {
        clearInterval(timer);
        endQuiz('You no have more Time :( \n Big Sad');
      }
    },1000)
// for (i = 0; i < )
  for (i=0; i < choiceEl.length; ++i) {
    choiceEl[i].addEventListener("click", function(event){

        if (event.target.id === 'correctChoice' && (n < questionPool.length)) {
            secondsLeft = secondsLeft + 20;
            points = points + 1;
            splashScreen('Correct!')
            setTimeout(function() {
              queryQuestion(n-1)
            }, 100);
            n = n + 1;
      }
        else if (event.target.id === 'incorrectChoice' && (n < questionPool.length)) {
            secondsLeft = secondsLeft - 20;
            splashScreen('Wrong!')
            setTimeout(function() {
              queryQuestion(n-1)
            }, 100);
            n = n + 1;
      } 
          else {
          clearInterval(timer);
          timerEl.textContent = ('');
          endQuiz(`And, We're Done!`)
      }
    console.log(n)
  })}
    })

    function endQuiz (message) {
// tags elements i want to remove with end display ID to clean up in the for loop below.
      h2El.textContent = (message);
      li1.setAttribute("class", "endDisplay");
      li2.setAttribute("class", "endDisplay");
      li3.setAttribute("class", "endDisplay");
      li4.setAttribute("class", "finished");
      li1.textContent = (`You got ${points} questions out of ${questionPool.length} right`);
      li2.textContent = (`with ${secondsLeft}s left on the clock`);
      if (secondsLeft < 0) {
        secondsLeft = 1;
      }
      li3.textContent = (`with a score of ${points*secondsLeft}`);
      li4.textContent= ('');
      timerEl.textContent = ('');
      timerEl.setAttribute("class", "finished");
      n = questionPool.length + 1;
      quizOver = true;
  var cleanupEl = document.querySelectorAll(".finished")
  for (i=0; i < cleanupEl.length; ++i) {
     cleanupEl[i].remove();
  }
// below creates the form to submit user score
var formEl = document.createElement("form");
formEl.setAttribute("class","finished")
var nameContainerEl = document.createElement("div");
nameContainerEl.setAttribute("id","nameContainer")
var submitContainerEl = document.createElement("div");
submitContainerEl.setAttribute("id","submitContainer");
var nameLabelEl = document.createElement("label");
nameLabelEl.setAttribute("id","nameLabel")
nameLabelEl.setAttribute("for", "nameLabel")
var submitLabelEl = document.createElement("label");
submitLabelEl.setAttribute("id","submitLabel");
submitLabelEl.setAttribute("for","submitLabel");
var nameBtnEl = document.createElement("input");
nameBtnEl.setAttribute("id","submitBtn");
var submitBtnEl = document.createElement("input");
submitBtnEl.setAttribute("type", "submit");
submitBtnEl.setAttribute("id", "submitBtn");
multchoiceListEl.appendChild(formEl);
formEl.appendChild(nameContainerEl);
formEl.appendChild(submitContainerEl);
nameContainerEl.appendChild(nameLabelEl);
nameContainerEl.appendChild(nameBtnEl);
submitContainerEl.appendChild(submitLabelEl);
submitContainerEl.appendChild(submitBtnEl);
nameLabelEl.textContent = "enter your name"
submitLabelEl.textContent = "click to submit your score"

// waits for submit button click
submitBtnEl.addEventListener("click", function(event){
  event.preventDefault();
  nameContainerEl.remove();
  submitContainerEl.remove();
var score = {
  userName: nameBtnEl.value.trim(),
  points: points*secondsLeft
}

if (localStorage.getItem("scoreStorage") === null) {

  var userScore= [];
  userScore[0] = score;

 localStorage.setItem("scoreStorage", JSON.stringify(userScore));

}
else {
  var userScore = JSON.parse(localStorage.getItem("scoreStorage"));
  userScore[userScore.length] = score;
  localStorage.setItem("scoreStorage", JSON.stringify(userScore));
}
h2El.textContent = 'Previous Scores';

//I would like to add a sorter to rate from high to low but i ran out of time

// creates and appends a list of previous scores

for (i=0; i<userScore.length; ++i){
  var highScore = document.createElement('li');
  highScore.setAttribute("id",`highscore${i+1}`);
  highScore.setAttribute("class", "highscore");
  highScore.textContent = (`${i+1} : ${userScore[i].userName}; ${userScore[i].points}`)
  h2El.appendChild(highScore);
}
  
})}



