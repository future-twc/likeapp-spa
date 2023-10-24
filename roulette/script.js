let currentInterval;
let countdownInterval;

function spinRoulette() {
  const input = document.getElementById('participants').value;
  const names = input.split(',').map(name => name.trim()).filter(Boolean); // 이름 배열 생성

  document.getElementById('error-msg').textContent = ""; // 에러 메시지 초기화

  // 참가자 수 확인
  if (names.length < 2 || names.length > 10) {
    document.getElementById('error-msg').textContent = "참가자 수는 2명에서 10명 사이어야 합니다.";
    return;
  }

  const resultDiv = document.getElementById('result');
  const countdownDiv = document.getElementById('countdown');
  let remainingTime = 5; // 5초 동안의 카운트다운

  countdownDiv.textContent = `남은 시간: ${remainingTime}초`;

  // 기존에 실행 중인 인터벌이 있다면 클리어
  if (currentInterval) {
    clearInterval(currentInterval);
  }

  // 룰렛 회전 효과: 100ms마다 참가자 이름 변경
  let currentIndex = 0;
  currentInterval = setInterval(() => {
    resultDiv.textContent = `선택될 참가자: ${names[currentIndex]}`;
    currentIndex = (currentIndex + 1) % names.length;
  }, 100);

  // 카운트다운 시작
  countdownInterval = setInterval(() => {
    remainingTime--;
    countdownDiv.textContent = `남은 시간: ${remainingTime}초`;

    if (remainingTime <= 0) {
      clearInterval(countdownInterval);

      // 룰렛 결과 표시
      clearInterval(currentInterval); // 회전 효과 중지
      const randomName = names[Math.floor(Math.random() * names.length)];
      resultDiv.textContent = `선택된 참가자: ${randomName}`;
      resultDiv.style.backgroundColor = "#ffcc00"; // 노란색으로 변경

      // 애니메이션 효과를 위해 잠시 후 배경색을 원래대로 복원
      setTimeout(() => {
        resultDiv.style.backgroundColor = "transparent";
      }, 1000);
    }
  }, 1000);
}
