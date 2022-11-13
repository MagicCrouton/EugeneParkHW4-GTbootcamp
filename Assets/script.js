// listed html elements for use later
var bodyEl = document.body;
var headerEl = document.getElementById('welcome');
var containerEl = document.getElementById('container');
var quizCardEl = document.getElementById('quizCard');
var h2El = document.getElementById('questionDisplay');
var multchoiceListEl = document.getElementById('mult');
var starBtnEl = document.getElementById('startBtn');
var quizBoxbannerEl = document.getElementById('quizBoxbanner');
// end listed html elements

// question pool 
// questions were pulled from https://quizlet.com/234928595/question-pool-quiz-3-chapter-3-flash-cards/

var question1 = {question:"What is the command to display a prompt?", correctAnswer: `prompt("Text Here");`}
var question2 = {question: "How do you assign the value from a prompt to a string?", correctAnswer: `var stringVar = prompt("Text Here");`}
var question3 = {question: "How do you assign the value from a prompt to a non-string variable?", correctAnswer: `Using a parse. Example : var intVar = parseInt(prompt("Text Here"));`}
var question4 = {question:"How do you assign a default value to a prompt?", correctAnswer: ``}
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

function setTime(timerEl) {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timerEl.textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
      }
  
    }, 1000);
  }

// Inital click resets the page for questions

var secondsLeft = 20*60*1000

starBtnEl.addEventListener("click", function() {
    starBtnEl.setAttribute("class", "choice");
    starBtnEl.setAttribute("id", "multChoice1");
    var li2 = document.createElement('li');
    var li3 = document.createElement('li');
    var li4 = document.createElement('li');
    var timerEl = document.createElement('div')
    li2.setAttribute("class", "choice");
    li3.setAttribute("class", "choice");
    li4.setAttribute("class", "choice");
    timerEl.setAttribute("class", 'timer');
    li2.setAttribute("id", "multChoice2");
    li3.setAttribute("id", "multChoice3");
    li4.setAttribute("id", "multChoice4");
    multchoiceListEl.appendChild(li2);
    multchoiceListEl.appendChild(li3);
    multchoiceListEl.appendChild(li4);
    quizBoxbannerEl.appendChild(timerEl);
    li2.textContent = 'placeholder'
    li3.textContent = 'placeholder'
    li4.textContent = 'placeholder'
    setTime (timerEl)
}
)

