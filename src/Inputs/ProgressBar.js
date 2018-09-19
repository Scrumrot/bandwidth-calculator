import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../Flex/Flex';
// import { flexPropTypes, getFlexProps } from '../Flex/utils';

const getSpeedType = value => {
  return value >= 0 && value < 15
    ? 'T1, DSL or Cable'
    : value >= 15 && value < 25
      ? 'Cable'
      : value >= 25 && value < 50
        ? 'Cable or Fixed Wireless'
        : value >= 50 && value < 250
          ? `Fixed Wireless`
          : value >= 250 && value < 1000
            ? 'Fixed Wireless or Fiber'
            : 'Fiber';
};
const getBasisNumber = value => {
  // const value = Math.floor(++val / 10);
  const val =
    value >= 0 && value <= 100
      ? value * 0.5
      : value > 100 && value < 1000
        ? 50 + value * 0.05
        : 100;
  return val;
};
const getBasis = val => `${getBasisNumber(val)}%`;

const ProgressBar = ({
  className,
  style,
  input: { value, onChange, ...restInput },
  meta: { touched, error, active, visited, dirty },
  readOnly,
  disabled,
  ...props
}) => {
  console.log('calculatorBar VALUE', value);
  const basis = getBasis(value);
  return (
    <Flex.Y>
      <Flex
        grow={0}
        className={`${className ? className : ''} orn_progress_wrapper`}
        {...props}
      >
        <Flex
          grow={0}
          shrink={0}
          basis={basis}
          className={`orn_progress_bar`}
          justify="stretch"
        >
          <Flex
            grow={1}
            shrink={0}
            justify="end"
            alignItems="center"
            alignContent="center"
            wrap="nowrap"
            basis="0"
            className={`orn_progress_bar_inner`}
          >
            <strong>
              <span>{value}</span> Mbps
            </strong>
          </Flex>
        </Flex>
      </Flex>
      <Flex grow={0} justify="center" className="orn_recommended_service">
        {' '}
        <strong>Recommended Service</strong>{' '}
      </Flex>
      <Flex.Y grow={0} className={`orn_type_wrapper`}>
        <h3 className={`orn_type_name`}>{getSpeedType(value)}</h3>
      </Flex.Y>
    </Flex.Y>
  );
};

ProgressBar.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default ProgressBar;
