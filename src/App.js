import React from 'react';
import './App.css';
import DataComponent from './components/Data/DataComponent'
import DisplayComponent from './components/View/DisplayComponent'

function App(){
  return(
    <div className="App">
      <DataComponent/>
      <DisplayComponent/>
    </div>
  );
}

export default App;