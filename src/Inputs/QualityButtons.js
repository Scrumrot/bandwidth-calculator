import React from "react";
// import PropTypes from "prop-types";
import Flex from "../Flex/Flex";
import { flexPropTypes, getFlexProps } from "../Flex/utils";
import FormGroup from "react-bootstrap/lib/FormGroup";

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
  console.log("Name", input.name);
  console.log("Value", value);
  console.log("options", options);

  return (
    <FormGroup {...rest}>
      <Flex style={{ overflow: "hidden", position: "relative" }}>
        <div
          style={{
            transition: `left 300ms cubic-bezier(0.39, 0.575, 0.565, 1), width 300ms cubic-bezier(0.39, 0.575, 0.565, 1)`,
            width: theSplit,
            left: input.value === options[0].value ? theSplit : 0,
            top: 0,
            zIndex: 6,
            background: "transparent", //'rgba(175, 175, 175, .25)',
            position: "absolute",
            pointerEvents: "none",
            boxShadow: "0 0 6px 0 rgba(175, 175, 175, .25) inset",
            alignSelf: "stretch",
            flex: `0 0 ${theSplit}`
          }}
        />
        <div
          style={{
            transition: `left 300ms cubic-bezier(0.39, 0.575, 0.565, 1), background 300ms cubic-bezier(0.39, 0.575, 0.565, 1)`,
            flex: `0 0 ${theSplit}`,
            width: theSplit,
            left:
              input.value === options[optionCount - 1].value
                ? theSplit
                : middleSplit,
            top: 0,
            zIndex: 6,
            background: "transparent", //'rgba(175, 175, 175, .25)',
            position: "absolute",
            pointerEvents: "none",
            boxShadow: "0 0 6px 0 rgba(175, 175, 175, .25) inset",
            alignSelf: "stretch",
            flex: `0 0 ${theSplit}`
          }}
        />
        <Flex.ButtonGroup justified>
          {options.map(option => (
            <Flex.Button
              key={`${input.name}_${option.value}`}
              onClick={e => input.onChange(handleChange(option.value))}
              active={option.value === value}
              bsStyle={option.value === value ? "primary" : "default"}
              style={{
                transition: `color 300ms cubic-bezier(0.39, 0.575, 0.565, 1), background 300ms cubic-bezier(0.39, 0.575, 0.565, 1)`
              }}
            >
              {option.label}
            </Flex.Button>
          ))}
        </Flex.ButtonGroup>
      </Flex>
    </FormGroup>
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
  ...flexPropTypes
};

export default props => <QualityButtons {...getFlexProps(props)} />;
