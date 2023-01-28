import React from 'react';
import ReactDOM from 'react-dom';

// Header Component
const Header = props => {
  // tudo que for passado sera encontrado dentro do objeto props
  console.log(props); // {welcome:'Welcome to 30 Days Of React'}
  return (
    <header>
      <div className="header-wrapper">
        <h1>{props.welcome}</h1>
        <h2>{props.title}</h2>
      </div>
    </header>
  );
};

// The App, or the parent or the container component
// Functional Component
const App = () => {
  return (
    <div className="app">
      <Header />
      <Header welcome="Welcome to 30 Days Of React" title="Getting Started React" />
    </div>
  );
};

export default App;
