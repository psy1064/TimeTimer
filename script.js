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
    ctx.font = "38px serif";      // 글자 크기
    ctx.textAlign = "center";     // 글자 가운데 정렬
    ctx.textBaseline = "middle";  // 글자 가운데 배치
    ctx.fillStyle = "black";      // 글자 색
    ctx.translate(150,150);       // (150,150)좌표를 캔버스의 중심좌표(0,0)로 사용
    for ( var number = 1; number <= 12; number++ ){
      var angle = (Math.PI / 180) * 30;
      ctx.rotate( angle );
      ctx.fillText( number.toString(), 0, -120);
    }
    ctx.translate(-150,-150);
  } // 시계 주변 시간 출력
}
