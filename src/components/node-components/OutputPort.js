import React from 'react';

const OutputComponent = () => {
  return (
    <div className="output" style={outputStyle}></div>
  );
};

const outputStyle = {
  width: '0',
  height: '0',
  borderStyle: 'solid',
  borderWidth: '5px 0 5px 10px',
  borderColor: 'transparent transparent transparent black'
};

export default OutputComponent;
