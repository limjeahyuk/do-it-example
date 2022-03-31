import React from 'react';
import PropTypes from 'prop-types';
// prop types 라이브러리 임포트

class PropsComponent extends React.Component {
  render() {
    return (
      <div className="message-container">{this.props.name}</div>
      //name 프로퍼티로 받은 문자열 출력
    );
  }
}

//자료형을 선언하는 예제
PropsComponent.propTypes = {
  // propsComponent의 propTypes라는 특수변수를 사용하여 프로퍼티의 자료형을 정의
  name: PropTypes.string,
  //프로퍼티의 자료형을 객체 형태로 지정. > 저장.
};

export default PropsComponent;
