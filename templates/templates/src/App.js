import React from 'react';
import Questionnaire from './templates/questionnaire';
import MyEditor from './draft';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        My Editor
      </header>
      <MyEditor />
    </div>
  );
}

export default App;
