
	var questions;
  var score = 0;
  var questionCount = 5;
  var minScore = Math.floor(questionCount * 0.7);
  var questionIndex = 0; 




  function check_result(){
    var $answers = $('input:checked');
    var $resultText = $('#quiz-response');
    var $restartBtn = $('#quiz-restart-btn');
    
    /*$('li').removeClass( "correct incorrect" );
    for(i=0;i<$answers.length;i++){
			let questionId = $answers[i].getAttribute("questionid");
      let answerId = $answers[i].getAttribute("id");
      let correctIndex = questions[questionId-1].correctIndex;
      //console.log(questionId + ', '+ answerId +', '+correctIndex);
      
      if (answerId == correctIndex){
      	$($answers[i].closest("li")).addClass('correct');
        score += 1;
      } else {
      	$($answers[i].closest("li")).addClass('incorrect');
      }
    }*/
    if (score >= minScore){
    	$resultText.text('Верных ответов ' + score + ' из ' + questionCount + '. Тест пройден успешно!')
	  } else {
      $resultText.text('Верных ответов ' + score + ' из ' + questionCount +  '. Повторите попытку!')
    }
    
    $resultText.attr('style',"display: inline-block;");
    $restartBtn.attr('style',"display: inline-block;");
    
  };


  function check_single_answer(obj){
    var $answer = $(obj);
    console.log($answer);
    var $resultText = $('#quiz-response');
    var $restartBtn = $('#quiz-restart-btn');       
    
    // если можно будет переотвечать, то на всякий случай очищаем 
    $answer.parent().children().removeClass( "correct incorrect" );
    
    // id вопроса
    let questionId = $answer.children('p')[0].getAttribute("questionid");
    // id ответа
    let answerId = $answer.children('p')[0].getAttribute("id");
    // id правильного ответа
    let correctIndex = questions[questionId-1].correctIndex;
    //console.log(questionId + ', '+ answerId +', '+correctIndex);
    
    // добавление класса результата ответа
    if (answerId == correctIndex){
      $($answer).addClass('correct');
      score += 1;      
      $resultText.text(questions[questionId-1].correctResponse);
    } else {
      $($answer).addClass('incorrect');
      $resultText.text(questions[questionId-1].incorrectResponse);
    }    
    // убираем обработку click с пройденных вопросов
    $answer.parent().children().unbind("click");
    // показываем результат
    show_answer_result();
    //$('#quiz-next-btn').css("display", "inline-block");

    //}    
    

    
    
    //$restartBtn.attr('style',"display: inline-block;");

    
    
  };
  
  
  function shuffle(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}

function show_answer_result(){

  var btnNext = $('#quiz-next-btn');
  var btnFinish = $('#quiz-finish-btn');
  var btnRestart = $('#quiz-restart-btn');

  $(".quiz-results").css("display","block");
  //$resultText.attr('style',"display: inline-block;");

  if (questionIndex < questionCount-1 ){
    $(btnNext).css("display", "inline-block");
    
  }
  else {
    $(btnNext).css("display", "none");
    $(btnFinish).css("display", "inline-block");
    $(btnRestart).css("display", "none");
  }
}

function hide_answer_result(){
  $(".quiz-results").css("display","none");
}

function next_question(){
  let $progressText = $('#quiz-progress p');

  if (questionIndex < questionCount-1 ){
    hide_answer_result();
    $($(".question-container")[questionIndex]).css("display", "none");
  
    questionIndex += 1;
    $($(".question-container")[questionIndex]).css("display", "block");
  
    $progressText.text('Вопрос ' + (questionIndex+1) + ' из ' + questionCount);
    console.log(questionIndex + ' __ ' + (questionCount-1));
  }
  
}


