import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import BandwidthCalculatorForm from './BandwidthCalculatorForm';
import Flex from './Flex/Flex';
function App() {
  return (
    <div className="App">
      <div className="orn_form_wrapper">
        <Flex.X
          justify="center"
          className="formRow orn_bandwidth_calculator_header_row"
        >
          <h2 className="orn_bandwidth_calculator_header">
            One Ring Networks' Bandwidth Calculator
          </h2>
        </Flex.X>
        <BandwidthCalculatorForm />
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
