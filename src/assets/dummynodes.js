//Putting some dummy node names to select

const dummyNodes = [
   
    {
      id: 0,
      name: "Data Generator",
      numInputs: 0,
      numOutputs: 2,
      type: "Source",
      color: "orange",
    },
    {
      id: 1,
      name: "CASE Switch Data (Start)",
      numInputs: 1,
      numOutputs: 3,
      type: "Manipulator",
      color: "yellow",
    },
    {
      id: 2,
      name: "Cluster Assigner",
      numInputs: 1,
      numOutputs: 1,
      type: "Predictor",
      color: "red",
    },
    
  ];

    export default dummyNodes;