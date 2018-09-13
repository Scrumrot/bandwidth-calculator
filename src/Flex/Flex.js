import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import PropTypes from 'prop-types';
import NumberofUsers from '../Inputs/NumberOfUsers';
import QualityButtons from '../Inputs/QualityButtons';
import { flexPropTypes, getFlexProps } from './utils';
import { OPTIONS } from './utils';

export default class Flex extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    style: PropTypes.object,
    applyFlexChildren: PropTypes.oneOf(['both', 'grow', 'shrink']),
    styleType: PropTypes.oneOf(['column', 'row', 'none']),
    xs: PropTypes.oneOf(OPTIONS.colNumbers),
    sm: PropTypes.oneOf(OPTIONS.colNumbers),
    md: PropTypes.oneOf(OPTIONS.colNumbers),
    lg: PropTypes.oneOf(OPTIONS.colNumbers),
    xl: PropTypes.oneOf(OPTIONS.colNumbers),
    grow: PropTypes.number,
    shrink: PropTypes.number,
    basis: PropTypes.string,
    direction: PropTypes.oneOf([
      'column',
      'column-reverse',
      'row',
      'row-reverse',
    ]),
    wrap: PropTypes.oneOf(['wrap', 'nowrap', 'reverse']),
    justify: PropTypes.oneOf([
      'around',
      'between',
      'center',
      'end',
      'evenly',
      'start',
      'stretch',
    ]),
    alignItems: PropTypes.oneOf([
      'baseline',
      'center',
      'end',
      'start',
      'stretch',
    ]),

    alignContent: PropTypes.oneOf([
      'around',
      'between',
      'center',
      'end',
      'evenly',
      'start',
      'stretch',
    ]),
    order: PropTypes.number,
    alignSelf: PropTypes.oneOf([
      'baseline',
      'center',
      'end',
      'start',
      'stretch',
    ]),
  };
  static defaultProps = {
    justify: 'start',
    alignItems: 'stretch',
    alignContent: 'stretch',
    direction: 'row',
    grow: 1,
    shrink: 1,
    basis: 'auto',
    wrap: 'nowrap',
  };

  get restProps() {
    const {
      wrap,
      justify,
      alignItems,
      alignContent,
      direction,
      grow,
      shrink,
      basis,
      alignSelf,
      order,
      style,
      className,
      applyFlexChildren,
      styleType,
      xl,
      xs,
      sm,
      md,
      lg,
      children,
      ...rest
    } = this.props;
    return { ...rest };
  }
  render() {
    const { style, className } = getFlexProps(this.props);
    return (
      <div className={className} style={style} {...this.restProps}>
        {this.props.children}
      </div>
    );
  }
}
Flex.Row = props => (
  <Flex
    direction="row"
    styleType="row"
    justify="start"
    alignItems="stretch"
    alignContent="stretch"
    wrap="wrap"
    grow={1}
    shrink={1}
    basis={'auto'}
    {...props}
  />
);
Flex.Col = props => (
  <Flex
    direction="row"
    styleType="column"
    justify="start"
    alignItems="start"
    alignContent="start"
    wrap="wrap"
    grow={1}
    shrink={1}
    basis={'100%'}
    applyFlexChildren="both"
    {...props}
  />
);
Flex.PageCol = props => (
  <Flex
    direction="column"
    styleType="column"
    justify="stretch"
    alignItems="stretch"
    alignContent="stretch"
    wrap="nowrap"
    grow={1}
    shrink={0}
    basis={'100%'}
    applyFlexChildren="both"
    {...props}
  />
);

Flex.X = props => (
  <Flex
    direction="row"
    justify="stretch"
    alignItems="stretch"
    alignContent="stretch"
    wrap="wrap"
    grow={1}
    shrink={1}
    basis={'auto'}
    {...props}
  />
);
Flex.Y = props => (
  <Flex
    direction="column"
    justify="stretch"
    alignItems="stretch"
    alignContent="stretch"
    wrap="nowrap"
    grow={1}
    shrink={1}
    basis={'auto'}
    {...props}
  />
);

Flex.Page = props => (
  <Flex
    direction="column"
    justify="start"
    alignItems="stretch"
    alignContent="stretch"
    wrap="nowrap"
    grow={1}
    shrink={0}
    basis={'auto'}
    {...props}
  />
);

Flex.Button = props => (
  <Button
    {...getFlexProps({
      grow: 1,
      justify: 'center',
      alignItems: 'center',
      alignContent: 'center',
      ...props,
      className: props.className
        ? `${props.className} orn_button`
        : 'orn_button',
    })}
  />
);
Flex.ButtonGroup = props => (
  <ButtonGroup
    {...getFlexProps({ grow: 1, ...props, className: 'orn_button_group' })}
  />
);
//=====================================
// ^^^ alignItems prop^^^
// defines the alignment of the children along the cross axis on the current line.
// i.e. {direction: 'column', alignItems: 'stretch'} the cross axis = X thus the children will stretch to be 100% width.

// >>> OPTIONS <<<
// 'baseline': The children are aligned such as their baselines align.
// 'center':  The children are centered in the cross-axis.
// 'end': Cross-axis-end margin edge of the children is placed on the cross-axis-end line.
// 'start': Cross-axis-start margin edge of the children is placed on the cross-axis-start line.
// 'stretch': Stretches the children to fill the Flex Component (still respect min-width/max-width)
//=====================================

//=====================================
// >>> direction prop<<<
// This establishes the main-axis, and direction of the children of the Flex Component.
//  i.e. direction: `row` means the children will flow left to right.

// >>> OPTIONS <<<
// 'row': The flex container's main-axis is defined to be the same as the text direction. The main-start and main-end points are the same as the content direction.
// 'row-reverse': Behaves the same as row but the main-start and main-end points are permuted.
// 'column': The flex container's main-axis is the same as the block-axis. The main-start and main-end points are the same as the before and after points of the writing-mode.
// 'column-reverse': Behaves the same as column but the main-start and main-end are permuted.
//=====================================

//=====================================
// >>> wrap prop<<<
// This establishes how the children will reflow when there isn't enough space
//  i.e. wrap: `wrap` means the children will stack in the established direction.

// >>> OPTIONS <<<
// 'nowrap': The flex items are laid out in a single line which may cause the flex container to overflow. The cross-start is either equivalent to start or before depending flex-direction value. This is the default value.
// 'wrap': The flex items break into multiple lines. The cross-start is either equivalent to start or before depending flex-direction value and the cross-end is the opposite of the specified cross-start.
// 'reverse': Behaves the same as wrap but cross-start and cross-end are permuted.
//=====================================

//=====================================
// ^^^ justify prop^^^
// defines the alignment of the children along the main axis/direction
// i.e. { direction: 'row', justify: 'end' } means the children will move to the end of the X axis.

// >>> OPTIONS <<<
// 'center': Pack items around the center.
// 'start': Pack items from the start.
// 'end': Pack items from the end.
// 'between': Distribute items evenly The first item is flush with the start, the last is flush with the end.
// 'around':  Distribute items evenly Items have a half-size space on either end
// 'evenly': Distribute items evenly Items have equal space around them.
// 'stretch': Distribute items evenly Stretch 'auto'-sized items to fit the container */
//=====================================

//=====================================
// ^^^ alignContent prop^^^
// This aligns a flex container's lines within when there is extra space in the cross-axis,
// similar to how justify aligns individual items within the main-axis.

// >>> OPTIONS <<<
// 'between': Distribute items evenly The first item is flush with the start, the last is flush with the end.
// 'around': Distribute items evenly Items have a half-size space on either end.
// 'evenly': Distribute items evenly Items have equal space around them.
// 'stretch': Distribute items evenly Stretch 'auto'-sized items to fit the container.
// 'start': Pack flex items from the start.
// 'end': Pack flex items from the end.
// 'center': Pack items around the center.
//=====================================

//=====================================
// ^^^ grow prop^^^
// Property specifies the flex grow factor of a flex item.
// It specifies what amount of space inside the flex container the item should take up.
// The flex grow factor of a flex item is relative to the size of the other children in the flex-container.
//=====================================

//=====================================
// ^^^ shrink prop^^^
// Property specifies the flex shrink factor of a flex item.
// Flex items will shrink to fill the container according to the flex-shrink number,
// when the default size of flex items is larger than the flex container.
//=====================================

//=====================================
// ^^^ basis prop^^^
// Property specifies the initial main size of a flex item.
// This property determines the size of the content-box unless specified otherwise using box-sizing.
//=====================================

//=====================================
// ^^^xs, sm, md, lg, xl props ^^^
// defines changes to the basis based on the media query.
//=====================================

//=====================================
// ^^^styleType props ^^^
// defines if the Flex Component has row margin or column padding.

// >>> OPTIONS <<<
// 'row': applies styles.flex_row className.
// 'column': applies styles.flex_column className.
//=====================================
