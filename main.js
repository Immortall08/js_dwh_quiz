<script >
	var questions;
  var score = 0;
  var questionCount = 5;
  var minScore = Math.floor(questionCount * 0.7);
  function check_result(){
    var $answers = $('input:checked');
    var $resultText = $('#quiz-response');
    var $restartBtn = $('#quiz-restart-btn');
    
    score = 0;    
    
    $('li').removeClass( "correct incorrect" );
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
    }
    if (score >= minScore){
    	$resultText.text('Верных ответов ' + score + ' из ' + questionCount + '. Тест пройден успешно!')
	  } else {
      $resultText.text('Верных ответов ' + score + ' из ' + questionCount +  '. Повторите попытку!')
    }
    
    $resultText.attr('style',"display: inline-block;");
    $restartBtn.attr('style',"display: inline-block;");
    
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

</script>
