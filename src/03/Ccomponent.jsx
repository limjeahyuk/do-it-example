import React from 'react';
import PropsTypes from 'prop-types';

class Ccomponent extends React.Component {
  render() {
    const { bool, num, array, obj, node, func } = this.props;

    return (
      <div>
        <span>불리언값:{bool}</span>
        <span>숫자값:{num}</span>
        <span>배열값:{array}</span>
        <span>객체값:{String(obj)}</span>
        <span>노드값:{node}</span>
        <span>함수값:{String(func)}</span>
      </div>
    );
  }
}

Ccomponent.propTypes = {
  bool: PropsTypes.bool,
  num: PropsTypes.number,
  array: PropsTypes.arrayOf(PropsTypes.number),
  obj: PropsTypes.object,
  node: PropsTypes.node,
  func: PropsTypes.func,
};

export default Ccomponent;
