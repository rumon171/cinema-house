import React from 'react';
import './App.css';
import ContainerWithHeader from './components/ContainerWithHeader';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ContainerWithHeader></ContainerWithHeader>
           
      </header>
    </div>
  );
}

export default App;