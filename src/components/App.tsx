import React from 'react';
import Additional from './Additional';
import AddTodo from './AddTodo';
import Footer from './Footer';
import VisibleTodoList from './VisibleTodoList';


const App: React.FC = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <Additional/>
  </div>
);

export default App;
