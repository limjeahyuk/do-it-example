// 비동기 함수 처리방법

// 기존 자바스크립트
function work1(onDone) {
  // 100ms 의 지연 작업을 하는 work1() 함수 선언
  setTimeout(() => onDone('작업1 완료!'), 100); //지연 작업 완료 후에는 onDone() 함수 실행
}
function work2(onDone) {
  setTimeout(() => onDone('작업2 완료!'), 200);
}
function work3(onDone) {
  setTimeout(() => onDone('작업3 완료!'), 300);
}
function urgentWork() {
  console.log('긴급 작업');
}
// 실제 비동기 함수를 사용하는 예
work1(function (msg1) {
  //지연 작업 함수 실행
  console.log('done after 100ms: ' + msg1);
  work2(function (msg2) {
    console.log('done after 300ms: ' + msg2);
    work3(function (msg3) {
      console.log('done after 100ms: ' + msg3);
    });
  });
});
urgentWork(); // 지연 작업 완료 시간을 기다리지 않고 바로 실행되는 함수

// 기존 자바스크립트
function work1(onDone) {
  // 100ms 의 지연 작업을 하는 work1() 함수 선언
  setTimeout(() => onDone('작업1 완료!'), 100); //지연 작업 완료 후에는 onDone() 함수 실행
}
function work2(onDone) {
  setTimeout(() => onDone('작업2 완료!'), 200);
}
function work3(onDone) {
  setTimeout(() => onDone('작업3 완료!'), 300);
}
function urgentWork() {
  console.log('긴급 작업');
}
// 실제 비동기 함수를 사용하는 예
work1(function (msg1) {
  //지연 작업 함수 실행
  console.log('done after 100ms: ' + msg1);
  work2(function (msg2) {
    console.log('done after 300ms: ' + msg2);
    work3(function (msg3) {
      console.log('done after 100ms: ' + msg3);
    });
  });
});
urgentWork(); // 지연 작업 완료 시간을 기다리지 않고 바로 실행되는 함수

// 기존 자바스크립트
function work1(onDone) {
  // 100ms 의 지연 작업을 하는 work1() 함수 선언
  setTimeout(() => onDone('작업1 완료!'), 100); //지연 작업 완료 후에는 onDone() 함수 실행
}
function work2(onDone) {
  setTimeout(() => onDone('작업2 완료!'), 200);
}
function work3(onDone) {
  setTimeout(() => onDone('작업3 완료!'), 300);
}
function urgentWork() {
  console.log('긴급 작업');
}
// 실제 비동기 함수를 사용하는 예
work1(function (msg1) {
  //지연 작업 함수 실행
  console.log('done after 100ms: ' + msg1);
  work2(function (msg2) {
    console.log('done after 300ms: ' + msg2);
    work3(function (msg3) {
      console.log('done after 100ms: ' + msg3);
    });
  });
});
urgentWork(); // 지연 작업 완료 시간을 기다리지 않고 바로 실행되는 함수

// 기존 자바스크립트
function work1(onDone) {
  // 100ms 의 지연 작업을 하는 work1() 함수 선언
  setTimeout(() => onDone('작업1 완료!'), 100); //지연 작업 완료 후에는 onDone() 함수 실행
}
function work2(onDone) {
  setTimeout(() => onDone('작업2 완료!'), 200);
}
function work3(onDone) {
  setTimeout(() => onDone('작업3 완료!'), 300);
}
function urgentWork() {
  console.log('긴급 작업');
}
// 실제 비동기 함수를 사용하는 예
work1(function (msg1) {
  //지연 작업 함수 실행
  console.log('done after 100ms: ' + msg1);
  work2(function (msg2) {
    console.log('done after 300ms: ' + msg2);
    work3(function (msg3) {
      console.log('done after 100ms: ' + msg3);
    });
  });
});
urgentWork(); // 지연 작업 완료 시간을 기다리지 않고 바로 실행되는 함수
