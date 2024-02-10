import React from 'react';

const Connection = ({ startNode, endNode }) => {
  const getStartPortCoordinates = (node) => {
    // calculating the coordinates based on node size and position
    return { x: node.initialX + 100, y: node.initialY + 50 };
  };

  const getEndPortCoordinates = (node) => {
    return { x: node.initialX, y: node.initialY + 50 };
  };

  const startPortCoordinates = getStartPortCoordinates(startNode);
  const endPortCoordinates = getEndPortCoordinates(endNode);

  return (
    <svg style={{ position: 'absolute', zIndex: -1 }}>
      <line
        x1={startPortCoordinates.x}
        y1={startPortCoordinates.y}
        x2={endPortCoordinates.x}
        y2={endPortCoordinates.y}
        style={{ stroke: 'black', strokeWidth: 2 }}
      />
    </svg>
  );
};

export default Connection;
