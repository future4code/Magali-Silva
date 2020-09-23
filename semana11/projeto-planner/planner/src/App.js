import React from 'react';
import './App.css';
import NewTaskContainer from './components/NewTaskContainer/NewTaskConainer'
import TaskListsContainer from './components/TaskListsContainer/TaskListsContainer'

function App() {
  return (
    <div className="App">
      <NewTaskContainer />
      <TaskListsContainer />
    </div>
  );
}

export default App;
