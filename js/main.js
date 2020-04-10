function rollTide() {
  var ocean = document.getElementById("sea");
  var question = document.getElementById("question");
  var answer = document.getElementById("answer");

  ocean.classList.add("rise");

  setTimeout(function(){
    question.classList.toggle("hidden");
    question.classList.toggle("visible");
  }, 600)

  setTimeout(function(){
    answer.classList.toggle("hidden");
    answer.classList.toggle("visible");
  }, 2000)

  setTimeout(function(){
    ocean.classList.remove("rise");
  }, 3000)
}

document.addEventListener("DOMContentLoaded", function(){
  var answerButton = document.getElementById("tide");
  answerButton.addEventListener("click", rollTide);
});