import React from 'react';

import Draggable from 'react-draggable'; //Library to enable dragging nodes

import NodeStatus from './node-components/NodeStatus';
import InputPort from './node-components/InputPort';
import OutputPort from './node-components/OutputPort';

import '../styles/NodeObject.css'; 

const NodeObject = ({ initialX, initialY, name, numInputs, numOutputs, type, color}) => {
  return (
    <Draggable defaultPosition={{ x: initialX, y: initialY }}>
      <div className="node-object">
        <div className="node-container">
          <p className="node-name">{name}</p>
          <div className="node-body-container">
            <div className="inputs">
              {Array.from({ length: numInputs }, (_, index) => (
                <InputPort key={index} />
              ))}
            </div>
            <div className="node-body" style={{ backgroundColor: color }}>
              
            </div>
            <div className="outputs">
              {Array.from({ length: numOutputs }, (_, index) => (
                <OutputPort key={index} />
              ))}
            </div>
          </div>
          <NodeStatus></NodeStatus>
          <p className="node-type">{type}</p>
        </div>
      </div>
    </Draggable>
  );
};

export default NodeObject;
