var bodyEl = document.body;
var headerEl = document.getElementById('welcome')
var containerEl = document.getElementById('container')
var quizCardEl = document.getElementById('quizCard')
var h2El = document.getElementById('questionDisplay')
var multchoiceListEl = document.getElementById('mult')
var starBtnEl = document.getElementById('startBtn')


starBtnEl.addEventListener("click", function() {
    starBtnEl.setAttribute("class", "choice");
    starBtnEl.setAttribute("id", "multChoice1");
    var li2 = document.createElement('li');
    var li3 = document.createElement('li');
    var li4 = document.createElement('li');
    li2.textContent = "question 2"
    li3.textContent = "question 3"
    li4.textContent = "question 4"
    multchoiceListEl.appendChild(li2);
    multchoiceListEl.appendChild(li3);
    multchoiceListEl.appendChild(li4);

}
)

