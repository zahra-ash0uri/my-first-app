import React from 'react';
import './bootstrap.min.css';
import NamePages from './components/NamePages'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <NamePages />  
        </p>
      </header>
    </div>
  );
}

export default App;
