import React from 'react';

const InputComponent = () => {
  return (
    <div className="input" style={inputStyle}></div>
  );
};

const inputStyle = {
  width: '0',
  height: '0',
  borderStyle: 'solid',
  borderWidth: '5px 0 5px 10px',
  borderColor: 'transparent transparent transparent black'
};

export default InputComponent;
