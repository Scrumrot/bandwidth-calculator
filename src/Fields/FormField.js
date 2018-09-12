import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import NumberofUsers from '../Inputs/NumberOfUsers';
import QualityButtons from '../Inputs/QualityButtons';
import ActiveToggle from '../Inputs/ActiveToggle';
import Flex from '../Flex/Flex';
// import { flexPropTypes, getFlexProps } from './Flex/utils';
const validateUsers = value => {
  const theReturn = isNaN(value)
    ? 'Must be a number'
    : ++value < 0
      ? 'Must be a positive number'
      : !Number.isInteger(++value)
        ? 'Must be a whole number'
        : undefined;
  return theReturn;
};
const FormField = props => {
  const {
    name,
    label,
    className,
    style,
    options,
    quality,
    icon,
    form: { getFieldState, change, focus, ...formRest },
  } = props;

  const isActive = (getFieldState(`${name}.active`) || {}).value;
  const makeActive = ev => {
    // ev.preventDefault();
    // ev.stopPropagation();
    const fieldActive = getFieldState(`${name}.active`);
    change(`${name}.active`, true);
  };
  const qualityField = quality ? (
    <Field
      name={`${name}.quality`}
      component={QualityButtons}
      options={options}
      disabled={!isActive}
    />
  ) : (
    undefined
  );
  const usersField = (
    <Field
      name={`${name}.users`}
      component={NumberofUsers}
      validate={validateUsers}
      disabled={!isActive}
    />
  );
  const activeToggleField = (
    <Field
      name={`${name}.active`}
      component={ActiveToggle}
      label={label}
      className={className}
      icon={icon}
    />
  );
  return (
    <Flex.Y
      basis="0"
      grow={1}
      alignItems="center"
      justify="start"
      // styleType="column"
      className={`formField${isActive ? ' activeField' : ''}`}
      onClick={!isActive ? makeActive : undefined}
    >
      {activeToggleField}
      <Flex.Y grow={1} className="input_body">
        {usersField}
        {qualityField}
      </Flex.Y>
    </Flex.Y>
  );
};

FormField.propTypes = {
  active: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  icon: PropTypes.any.isRequired,
  style: PropTypes.object,
  options: PropTypes.array,
  quality: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default FormField;
