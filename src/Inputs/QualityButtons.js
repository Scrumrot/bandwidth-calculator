import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../Flex/Flex';
import { flexPropTypes, getFlexProps } from '../Flex/utils';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import UHDIcon from '../Icons/UHDIcon';
import HDIcon from '../Icons/HDIcon';
import SDIcon from '../Icons/SDIcon';

const icons = {
  uhd: <UHDIcon />,
  hd: <HDIcon />,
  sd: <SDIcon />,
};

const QualityButtons = ({
  input,
  meta: { touched, error },
  readOnly,
  disabled,
  handleChange = _ => _,
  options = [],
  ...rest
}) => {
  const optionCount = options.length;
  const theSplit = `${100 / optionCount}%`;
  const middleSplit = `${(100 / optionCount) * 2}%`;
  const value = input.value;

  return (
    <Flex className="orn_quality_buttons_wrapper" direction="column">
      <Flex.ButtonGroup direction="column">
        {options.map((option, index, arr) => (
          <Flex.Button
            key={`${input.name}_${option.value}`}
            onClick={e => input.onChange(handleChange(option.value))}
            active={option.value === value}
            bsStyle={option.value === value ? 'primary' : 'default'}
            grow={1}
            basis={`${100 / arr.length}%`}
            order={index}
            className={`orn_quality_button ${
              option.value === value ? ' option_active' : ' option_not_active'
            }`}
            style={{
              transition: `color 300ms cubic-bezier(0.39, 0.575, 0.565, 1), background 300ms cubic-bezier(0.39, 0.575, 0.565, 1)`,
            }}
          >
            {icons[option.value]}
          </Flex.Button>
        ))}
      </Flex.ButtonGroup>
    </Flex>
  );
};

// const QualityButtons = ({
//   input: { name, onChange, value, ...restInput },
//   meta,
//   options,
//   ...rest
// }) => (
//   <Flex.ButtonGroup
//     {...rest}
//   >
//     {options.map(option => (
//       <Flex.Button
//         key={`${name}_${option.value}`}
//         onClick={e => onChange(option.value)}
//         active={option.value === value}
//       >
//         {option.label}
//       </Flex.Button>
//     ))}
//   </Flex.ButtonGroup>
// );

QualityButtons.propTypes = {
  ...flexPropTypes,
};

export default props => <QualityButtons {...getFlexProps(props)} />;
