import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import Flex from '../Flex/Flex';
import ProgressBar from '../Inputs/ProgressBar';

const CalculatorBar = props => (
  <Field {...props} name={`calculatorBar`} component={ProgressBar} />
);
export default CalculatorBar;
