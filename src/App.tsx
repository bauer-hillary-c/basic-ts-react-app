import React from 'react';
import './App.css';
import ToDoList from './components/ToDoList';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ToDoList />
      </header>
    </div>
  );
}

export default App;
