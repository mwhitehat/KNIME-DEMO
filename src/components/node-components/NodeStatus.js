import React from 'react';

//Node status is for the container and circles shown just below the nodes

const NodeStatus = () => {
  return (
    <div className="node-status" style={statusContainerStyle}>
      <div className="circle failed" style={failedStyle}></div>
      <div className="circle configurable" style={configurableStyle}></div>
      <div className="circle executed" style={executedStyle}></div>
    </div>
  );
};

const statusContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '35px',
  height: '14px',
  backgroundColor: 'grey',
  paddingRight: '4px',
  paddingLeft: '4px',
  paddingTop: '4px',
  borderRadius: '2px',
  marginTop: '8px',
};

const failedStyle = {
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  border: '1px solid #000',
  backgroundColor: 'white',
};

const configurableStyle = {
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  border: '1px solid #000',
  backgroundColor: 'white',
};

const executedStyle = {
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  border: '1px solid #000',
  backgroundColor: 'green',
};

export default NodeStatus;
