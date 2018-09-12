import React from 'react';
import PropTypes from 'prop-types';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Flex from '../Flex/Flex';
import { flexPropTypes, getFlexProps } from '../Flex/utils';
import { FaUserPlus, FaUserMinus } from 'react-icons/fa';
export const dtaMaker = value => {
  const dta = value
    ? value
        .replace(' ', '')
        .replace('.', '_')
        .replace(/[\[\]']+/g, '')
    : '';
  return dta;
};

const NumberOfUsers = ({
  input,
  label,
  tooltip,
  forceString = false,
  meta: { touched, error, active, visited, dirty, ...restMeta },
  readOnly,
  disabled,
  hasFeedback,
  feedbackIcon,
  noEmptyString = false,
  handleChange,
  formGroupStyle,
  defaultValue,
  readOnlyDefaultValue,
  formatReadOnlyValue = _ => _,
  mask,
  hideHelpText,
  before,
  after,
  formControlStyle,
  ...rest
}) => {
  const handleInputChange = handler => (ev = {}) => {
    const _value = ((ev || {}).target || {}).value.trim() || 0;
    const value = _value;
    if (handleChange) {
      const result = handleChange(noEmptyString && value === '' ? null : value);
      if (result === 'handled') return;
    }
    return handler(noEmptyString && value === '' ? null : ev);
  };
  const beforeAddon = (
    <Flex.Button
      disabled={disabled}
      onClick={() => {
        console.log('input.value (-)', input.value);
        const value = parseInt(input.value, 10);
        if (!isNaN(value) && value > 0) {
          handleInputChange(input.onChange(value - 1));
        }
      }}
    >
      <FaUserMinus />
    </Flex.Button>
  );
  const afterAddon = (
    <Flex.Button
      disabled={disabled}
      onClick={() => {
        const value = parseInt(input.value, 10);
        if (!isNaN(value)) {
          handleInputChange(input.onChange(value + 1));
        }
      }}
    >
      <FaUserPlus />
    </Flex.Button>
  );

  const formControl = (
    <FormControl
      key="formControl"
      disabled={disabled}
      {...input}
      onChange={handleInputChange(input.onChange)}
      onBlur={handleInputChange(input.onBlur)}
      className="orn_input"
    />
  );
  return (
    <Flex.Y
      {...rest}
      wrap="nowrap"
      style={{ ...rest.style, position: 'relative' }}
      className={error ? 'error' : undefined}
    >
      <Flex.X
        wrap="nowrap"
        className={`number_of_users_wrapper${disabled ? ' disabled' : ''}${
          error ? ' error' : ''
        }`}
      >
        {beforeAddon}
        {formControl}
        {afterAddon}
      </Flex.X>
      {error && (
        <HelpBlock
          name={`error-${dtaMaker(input.name)}`}
          data-test={`error-${dtaMaker(input.name)}`}
          key="formControlHelpBlock"
          style={{
            position: 'absolute',
            bottom: '-5px',
            alignSelf: 'center',
            zIndex: 10,
            textAlign: 'center',
            width: '100%',
            color: 'red',
            // transform-origin: top;
          }}
        >
          {error}
        </HelpBlock>
      )}
    </Flex.Y>
  );
};

export default props => <NumberOfUsers {...getFlexProps(props)} />;
