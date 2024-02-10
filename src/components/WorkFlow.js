import React, { useState } from 'react';
import SearchField from './SearchField';
import NodeObject from './NodeObject';

//WorkFlow which denotes a Canvas

const WorkFlow = () => {
  const [nodes, setNodes] = useState([]);

  const addNodeFromSearch = (nodeObject) => {
    const x = 100;
    const y = 100;
    setNodes([...nodes, { nodeObject, x, y }]);
  };

  return (
    <div
      className="main-canvas"
      style={{
        border: '15px solid black',
        margin: '50px',
        height: 500,
        width: 1000,
        position: 'relative'
      }}
    >
      <SearchField addNode={addNodeFromSearch} />
      {nodes.map((node, index) => (
        <NodeObject
          key={index}
          initialX={node.x}
          initialY={node.y}
          name={node.nodeObject.name}
          numInputs={node.nodeObject.numInputs}
          numOutputs={node.nodeObject.numOutputs}
          type={node.nodeObject.type}
          color={node.nodeObject.color}
        />
      ))}
    </div>
  );
};

export default WorkFlow;
