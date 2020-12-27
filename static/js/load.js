$(document).ready(function () {
  var pageName=['qna/qna1.html .wrap','qna/qna2.html .wrap','qna/qna3.html .wrap','qna/qna4.html .wrap',
  'qna/qna5.html .wrap','qna/qna6.html .wrap','qna/qna7.html .wrap','qna/qna8.html .wrap'];
  var statusbar=['qna/qna1.html .progress','qna/qna2.html .progress','qna/qna3.html .progress','qna/qna4.html .progress',
  'qna/qna5.html .progress','qna/qna6.html .progress','qna/qna7.html .progress','qna/qna8.html .progress'];
  var i=0;
  var aType=[['',''],['건강','재물'],['사랑','성장'],['사랑','성장'],['건강','사랑'],['재물','사랑'],['성장','재물'],['건강','재물'],['건강','사랑']];
  var choise=[0,0,0,0]//[건강, 재물, 사랑, 성장]
  var result = '';
  $.resultchoise = function(num){
    switch (num) {
      case '0' : //건강
        location.href = 'result/result1.html';
        break;
      case '1' : //재물
        location.href = 'result/result2.html';
        break;
      case '2' : //사랑
        location.href = 'result/result3.html';
        break;
      case '3' : //성장
        location.href = 'result/result4.html';
        break;
      case '01' : //건강재물
        location.href = 'result/result5.html';
        break;
      case '02': //건강사랑
        location.href = 'result/result6.html';
        break;
      case '03' : //건강성장
        location.href = 'result/result7.html';
        break;
      case '12' : //재물사랑
        location.href = 'result/result8.html';
        break;
      case '13': //재물성장
        location.href = 'result/result9.html';
        break;
      case '23': //사랑성장
        location.href = 'result/result10.html';
        break;
      case '4': //건강재물사랑성장
        location.href = 'result/result11.html';
        break;        
    }
    
} 
  $.sortresult = function(){
    var choiseMax = Math.max.apply(null, choise);
    if (choiseMax == 4 ){
      for (var n=0; n<4;n++){
          if (choise[n]==4){
              result=result+String(n);
          }
      }
      $.resultchoise(result);
    } else if(choiseMax ==3){
      for (var n=0; n<4;n++){
          if (choise[n]==3){
              result=result+String(n);
          }
      }
      $.resultchoise(result);
    } else if(choiseMax ==2){
      result='4';
      $.resultchoise(result);
    }
  }

  $.addAnswer = function(a){
    switch (a) {
      case '건강' :
        choise[0]=choise[0]+1;
        break;
      case '재물' :
        choise[1]=choise[1]+1;
        break;
      case '사랑' :
        choise[2]=choise[2]+1;
        break;
      case '성장' :
        choise[3]=choise[3]+1;
        break;
    }
  }

  $(document).on("click", "button[class='start-btn']", function () {
      $(".progress").load(statusbar[i]);   
    $(".wrap").fadeOut(300, function(){
      $(".wrap").load(pageName[i]);
      $(this).fadeIn(300);
      
    });    
    }); //메인화면에서 점수 계산 없이 넘어올때
    $(document).on("click", "button[class='upbtn']", function () {
      i++;
      $.addAnswer(aType[i][0]);
      if (i == 8){
        $.sortresult();
      }
      $(".progress").load(statusbar[i]); 
      $(".wrap").fadeOut(200, function(){
        $(".wrap").load(pageName[i]);
        $(this).fadeIn(200);
      }); 

      });//1번을 선택 했을 때. 다음 페이지 로드, 점수 계산, 인덱스값 증가
      $(document).on("click", "button[class='downbtn']", function () {
          i++;
      $.addAnswer(aType[i][1]);
        if (i == 8){
          $.sortresult();
        }
        $(".progress").load(statusbar[i]); 
        $(".wrap").fadeOut(200, function(){
          $(".wrap").load(pageName[i]);
          $(this).fadeIn(200);
          
        });
        
      });//2번을 선택 했을 때. 다음 페이지 로드, 점수 계산, 인덱스값 증가 
  });