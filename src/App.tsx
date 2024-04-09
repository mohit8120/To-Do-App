import React from 'react';
import './App.scss';
import TodoList from './TodoList'; // Remove the '.tsx' extension from the import statement

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
};

export default App;
