import styles from "./styles.scss";
import PropTypes from "prop-types";
export const OPTIONS = {
  direction: {
    column: "column",
    "column-reverse": "column-reverse",
    row: "row",
    "row-reverse": "row-reverse"
  },
  wrap: {
    wrap: "wrap",
    nowrap: "nowrap",
    reverse: "wrap-reverse"
  },
  justify: {
    around: "space-around",
    between: "space-between",
    center: "center",
    end: "flex-end",
    evenly: "space-evenly",
    start: "flex-start",
    stretch: "stretch"
  },
  alignItems: {
    baseline: "baseline",
    center: "center",
    end: "flex-end",
    start: "flex-start",
    stretch: "stretch"
  },
  alignContent: {
    around: "space-around",
    between: "space-between",
    center: "center",
    end: "flex-end",
    evenly: "space-evenly",
    start: "flex-start",
    stretch: "stretch"
  },
  alignSelf: {
    baseline: "baseline",
    center: "center",
    end: "flex-end",
    start: "flex-start",
    stretch: "stretch"
  },
  flexChildren: {
    both: ` ${styles.flex_children} ${styles.both}`,
    grow: ` ${styles.flex_children} ${styles.grow}`,
    shrink: ` ${styles.flex_children} ${styles.shrink}`
  },
  colNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
};
export const colNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export const flexDefaultProps = {
  justify: "start",
  alignItems: "stretch",
  alignContent: "stretch",
  direction: "row",
  grow: 1,
  shrink: 1,
  basis: "auto",
  wrap: "nowrap"
};
export const flexPropTypes = {
  applyFlexChildren: PropTypes.oneOf(["both", "grow", "shrink"]),
  styleType: PropTypes.oneOf(["column", "row", "none"]),
  xs: PropTypes.oneOf(OPTIONS.colNumbers),
  sm: PropTypes.oneOf(OPTIONS.colNumbers),
  md: PropTypes.oneOf(OPTIONS.colNumbers),
  lg: PropTypes.oneOf(OPTIONS.colNumbers),
  xl: PropTypes.oneOf(OPTIONS.colNumbers),
  grow: PropTypes.number,
  shrink: PropTypes.number,
  basis: PropTypes.string,
  direction: PropTypes.oneOf([
    "column",
    "column-reverse",
    "row",
    "row-reverse"
  ]),
  wrap: PropTypes.oneOf(["wrap", "nowrap", "reverse"]),
  justify: PropTypes.oneOf([
    "around",
    "between",
    "center",
    "end",
    "evenly",
    "start",
    "stretch"
  ]),
  alignItems: PropTypes.oneOf([
    "baseline",
    "center",
    "end",
    "start",
    "stretch"
  ]),

  alignContent: PropTypes.oneOf([
    "around",
    "between",
    "center",
    "end",
    "evenly",
    "start",
    "stretch"
  ]),
  order: PropTypes.number,
  alignSelf: PropTypes.oneOf(["baseline", "center", "end", "start", "stretch"])
};

export function getMediaQueryClassNames({ xl, xs, sm, md, lg }) {
  if (!xl && !xs && !sm && !md && !lg) {
    return "";
  }
  const breakPoints = { xl, xs, sm, md, lg };
  return Object.keys(breakPoints)
    .filter(breakPointName => breakPoints[breakPointName])
    .map(size => `orn-flex-col-${size}-${breakPoints[size]}`)
    .reduce((ColNames, name) => ` ${ColNames} ${name} `);
}

export function getFlexStyles({
  wrap = "nowrap",
  justify = "start",
  alignItems = "stretch",
  alignContent = "stretch",
  direction = "row",
  grow = 0,
  shrink = 1,
  basis = "auto",
  alignSelf,
  order,
  style = {}
}) {
  return {
    display: "flex",
    flexGrow: grow,
    flexShrink: shrink,
    flexBasis: basis,
    order,
    flexDirection: OPTIONS.direction[direction],
    flexWrap: OPTIONS.wrap[wrap],
    justifyContent: OPTIONS.justify[justify],
    alignItems: OPTIONS.alignItems[alignItems],
    alignContent: OPTIONS.alignContent[alignContent],
    alignSelf: OPTIONS.alignSelf[alignSelf],
    ...style
  };
}
export function getFlexChildren(flexChildren) {
  return OPTIONS.flexChildren[flexChildren];
}
export function getStyleType(styleType) {
  return !styleType
    ? ""
    : styleType === "row"
      ? ` flex_row`
      : styleType === "column"
        ? ` flex_col`
        : "";
}

export function getFlexClassNames({
  className,
  applyFlexChildren,
  styleType,
  xl,
  xs,
  sm,
  md,
  lg
}) {
  return [
    className,
    getMediaQueryClassNames({ xl, xs, sm, md, lg }),
    getStyleType(styleType),
    getFlexChildren(applyFlexChildren)
  ]
    .filter(Boolean)
    .reduce((output, val) => {
      return output === undefined && val
        ? `${val} `
        : val
          ? `${output}${val}`
          : undefined;
    }, undefined);
}

export function getFlexProps({
  wrap = "nowrap",
  justify = "start",
  alignItems = "stretch",
  alignContent = "stretch",
  direction = "row",
  grow = 0,
  shrink = 1,
  basis = "auto",
  alignSelf,
  order,
  style = {},
  className,
  applyFlexChildren,
  styleType,
  xl,
  xs,
  sm,
  md,
  lg,
  ...rest
}) {
  return {
    ...rest,
    className: getFlexClassNames({
      className,
      applyFlexChildren,
      styleType,
      xl,
      xs,
      sm,
      md,
      lg
    }),
    style: getFlexStyles({
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
      style
    })
  };
}
