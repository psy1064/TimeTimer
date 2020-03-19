window.onload=draw;

function draw(){
  var ctx=document.getElementById('myCanvas').getContext('2d');
  background();
  number();
  // 바탕 원
  submit_btn.onclick = function() {
    var min = document.getElementById('minute').value;
    var time = min*60;
    var end = (45-(time/60))*6;
    var timer = setInterval(function() {
      time--;	// 1분 경과 시 min 1씩 감소
      end = (45-(time/60))*6;
      background();   // 매번 새로 바탕 원을 다시 그려줌
      ctx.beginPath();
      ctx.moveTo(150,150);
      ctx.arc(150,150,100,(Math.PI/180)*270,(Math.PI/180)*end, false);
      ctx.fillStyle = "rgb(255,255,255)";
      ctx.fill();
      ctx.closePath();
      // 원 안의 부채꼴
    },1000);   // 1초 간격으로 draw_time 실행
  }
  function background() {
    ctx.beginPath();
    ctx.arc(150,150,100,0,(Math.PI/180)*360, true);
    // ctx.arc(x,y, 반지름, 시작각도, 종료각도, 그리는 방향)
    // true = 반시계, false = 시계 방향
    ctx.fillStyle = "rgb(255,0,0)";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  } // 바탕 원 그리는 함수
  function number() {
    // ctx.moveTo(150,150);

  }
}
