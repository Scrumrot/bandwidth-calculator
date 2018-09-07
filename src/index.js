import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import BandwidthCalculatorForm from './BandwidthCalculatorForm';
function App() {
  return (
    <div className="App">
      <BandwidthCalculatorForm />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
