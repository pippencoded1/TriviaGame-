


const questions = [
        {
            question: '1. Phuket is an island on which country?',
            answers: ['Thailand', 'Singapore', 'Bali'],
            correctAns: 0
        },{
            question: '2. Guatemala is famoulsy known for which two things?',
            answers: ['Rooster Buses & Volcanoes','Chicken Buses & Volcanoes', 'Fun Buses & Lakes'],
            correctAns: 1
        },{
            question: '3. Approximately how many people visit Iceland a year?',
            answers: ['1M', '500K','10M'],
            correctAns: 0
        },{
            question: '4. What year was Apartheid abolished in South Africa?',
            answers:   ['1996', '2000', '1994'],
            correctAns: 2
        },{
            question: '5. What country is Machu Pichu located?',
            answers: ['Colombia', 'Peru', 'Bolivia'],
            correctAns: 1
        }
]

var questionNum = 0;
var correctAns = 0;
var triviaComplete = false;
var game = {
    correct:0,
    incorrect:0,
    counter:45,
    countdown: function(){
      game.counter--;
      $('#counter-number').html(game.counter);
  
      if (game.counter === 0){
        console.log('TIME UP');
        game.done();
      }

$(document).ready(function() {

    displayquestionum();
    $(this).find(".triviarules").hide();


    value = $("input [type"= 'radio']checked).val();


for (var i = 0; i < questions.length; i++) {
    panel.append('<h2>' + questions[i].question + '</h2>');
    for (var j = 0; j < questions[i].answers.length; j++) {
      panel.append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
    }
  }

  panel.append('<button id="done">Done</button>');
},
done: function() {


  $.each($("input[name='question-0']:checked"), function() {
    if ($(this).val() == questions[0].correctAnswer) {
      game.correct++;
    } else {
      game.incorrect++;
    }
  });
  $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() == questions[1].correctAnswer) {
      game.correct++;
    } else {
      game.incorrect++;
    }
  });
  $.each($("input[name='question-2']:checked"), function() {
    if ($(this).val() == questions[2].correctAnswer) {
      game.correct++;
    } else {
      game.incorrect++;
    }
  });
  $.each($("input[name='question-3']:checked"), function() {
    if ($(this).val() == questions[3].correctAnswer) {
      game.correct++;
    } else {
      game.incorrect++;
    }
  });
  $.each($("input[name='question-4']:checked"), function() {
    if ($(this).val() == questions[4].correctAnswer) {
      game.correct++;
    } else {
      game.incorrect++;
    }
  });
  $.each($("input[name='question-5']:checked"), function() {
    if ($(this).val() == questions[5].correctAnswer) {
      game.correct++;
    } else {
      game.incorrect++;
    }
  });













//  var name = 'Male'
// $(".jumbotron").on("click", function(){
//     console.log ('I work')
//    var question = function(){
//     if(questionNum <= questions.length) {
//         // console.log(questionNum)
//         $(".jumbotron").html(`
//             <div>
//             <h1>${questions[questionNum].question}</h1>
//             <form action="">
//                 <input type="radio" name="gender" value=${questions[questionNum].answers[0]}> ${questions[questionNum].answers[0]}</br>
//                 <input type="radio" name="gender" value=${questions[questionNum].answers[1]}> ${questions[questionNum].answers[1]}</br>
//                 <input type="radio" name="gender" value=${questions[questionNum].answers[2]}> ${questions[questionNum].answers[2]}
//             </form>
//             </div>
//         `)
//             questionNum += 1
//     } 
//     };  
    

      
    



//    }});
