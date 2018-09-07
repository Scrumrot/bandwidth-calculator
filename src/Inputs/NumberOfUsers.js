import React from "react";
import PropTypes from "prop-types";
import FormGroup from "react-bootstrap/lib/FormGroup";
import FormControl from "react-bootstrap/lib/FormControl";
import InputGroup from "react-bootstrap/lib/InputGroup";
import HelpBlock from "react-bootstrap/lib/HelpBlock";
import Glyphicon from "react-bootstrap/lib/Glyphicon";
import Flex from "../Flex/Flex";
import { flexPropTypes, getFlexProps } from "../Flex/utils";
import { FaUserPlus, FaUserMinus } from "react-icons/fa";
export const dtaMaker = value => {
  const dta = value
    ? value
        .replace(" ", "")
        .replace(".", "_")
        .replace(/[\[\]']+/g, "")
    : "";
  return dta;
};

const NumberOfUsers = ({
  input,
  label,
  tooltip,
  forceString = false,
  meta: { touched, error, active, visited, dirty },
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
    const value = ((ev || {}).target || {}).value || "";
    if (handleChange) {
      const result = handleChange(noEmptyString && value === "" ? null : value);
      if (result === "handled") return;
    }
    return handler(noEmptyString && value === "" ? null : ev);
  };
  const beforeAddon = (
    <InputGroup.Addon>
      {before}
      <Flex.Button
        onClick={() => {
          if (!isNaN(input.value) && input.value > 1) {
            handleInputChange(input.value - 1);
          }
        }}
      >
        <FaUserMinus />
      </Flex.Button>
    </InputGroup.Addon>
  );
  const afterAddon = (
    <InputGroup.Addon>
      {after}
      <Flex.Button
        onClick={() => {
          if (!isNaN(input.value)) {
            handleInputChange(input.value + 1);
          }
        }}
      >
        <FaUserPlus />
      </Flex.Button>
    </InputGroup.Addon>
  );

  const formControl = (
    <FormControl
      key="formControl"
      disabled={disabled}
      {...input}
      onChange={handleInputChange(input.onChange)}
      onBlur={handleInputChange(input.onBlur)}
    />
  );
  return (
    <FormGroup validationState={touched && error ? "error" : null} {...rest}>
      <Flex.X>
        <InputGroup>
          {beforeAddon}
          {formControl}
          {afterAddon}
        </InputGroup>
      </Flex.X>
      {(touched || active || visited || dirty) &&
        error &&
        !hideHelpText && (
          <HelpBlock
            name={`error-${dtaMaker(input.name)}`}
            data-test={`error-${dtaMaker(input.name)}`}
            key="formControlHelpBlock"
          >
            {error}
          </HelpBlock>
        )}
    </FormGroup>
  );
};

export default props => <NumberOfUsers {...getFlexProps(props)} />;
