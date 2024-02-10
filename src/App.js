import React from 'react';
import WorkFlow from './components/WorkFlow';

const App = () => {
  return (
    <div id="app" style={appStyle}> 
      <WorkFlow />
    </div>
  );
};

const appStyle = {
  fontFamily: 'Ariel',
  textAlign: 'center',
  color: '#000000',
};

export default App;
