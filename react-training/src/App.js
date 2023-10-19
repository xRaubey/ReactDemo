import logo from './logo.svg';
import './App.css';
import UseRefComponent from './UseRefComponent'
import UseMemoComponent from "./UseMemoComponent";
import UseCallbackComponent from "./UseCallbackComponent";
import UseReducerComponent from "./UseReducerComponent";


// import React from 'react'  before 17.

function App() {
  return (
    <div className="App">
      <UseRefComponent></UseRefComponent>
        <UseMemoComponent></UseMemoComponent>
        <UseCallbackComponent></UseCallbackComponent>
      <UseReducerComponent></UseReducerComponent>
    </div>
  );
}

export default App;
