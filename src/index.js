import React from 'react';
import ReactDOM from 'react-dom';
// 초기화면을 구성하는 사용자 코드입니다.
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 리액트 엔진이 화면을 출력하는 코드입니다.
// id가 root 인 엘리먼트에 컴포넌트를 출력합니다.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// 아래부분은 서비스 워커 구동 코드로 오프라인 모드로 작동하는 데 도움이 되는 모듈입니다.
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
