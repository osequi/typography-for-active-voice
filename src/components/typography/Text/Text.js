import React, { createElement } from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles, useTheme, useFindInArrays } from "../../../hooks";
import { startCase } from "lodash";

/**
 * Defines the text types.
 * Each text type is standalone and unique, defined by a font face, scale, colors etc.
 * Onlye these text types will be accessible from the app.
 * Accessing and styling directly standard tags like '<H1>' is not recommended.
 * @type {Array}
 */
const variants = ["default", "body", "longform", "title", "subtitle"];

/**
 * Defines the prop types.
 */
const propTypes = {
  /**
   * What kind of text to display.
   * It's like the `text-style()` mixin from the old framework.
   * Tries to follow the Material UI syntax.
   * @type {string}
   * @see https://github.com/metamn/beat/blob/master/code/framework/design/typography/text-style/text-style.json
   * @see https://material-ui.com/components/typography/#typography
   */
  variant: PropTypes.oneOf(variants),
  /**
   * In which container element to display.
   * Preferably inside a Semantic Element.
   * @type {func}
   */
  as: PropTypes.func,
  /**
   * The content to be displayed.
   * @type {any}
   */
  children: PropTypes.any,
};

/**
 * Defines the default props.
 */
const defaultProps = {
  variant: "default",
  as: "div",
  children: null,
};

/**
 * Defines the styles.
 */
const defaultText = (props, theme) => {
  return {
    ...theme.typography.helpers.scale(0),
    ...theme.typography.helpers.font("Nimbus Sans Light"),
    margin: "var(--lem)",
  };
};

const bodyText = (props, theme) => {
  return {
    ...theme.typography.helpers.scale(0),
    ...theme.typography.helpers.font("Nimbus Sans Regular"),
    ...theme.typography.helpers.maxWidth("Nimbus Sans Regular"),
    ...theme.typography.helpers.spacing("Adjacent siblings margin top"),
    ...theme.typography.helpers.headings(
      {
        preset: "sameSize",
        font: "Nimbus Sans Medium",
        lineHeight: 1,
        scale: 0,
      },
      theme
    ),
  };
};

const longformText = (props, theme) => {
  return {
    ...theme.typography.helpers.scale(0),
    ...theme.typography.helpers.font("Nimbus Sans Regular"),
    ...theme.typography.helpers.maxWidth("Nimbus Sans Light"),
    ...theme.typography.helpers.spacing("Adjacent siblings margin top"),
    ...theme.typography.helpers.headings(
      {
        preset: "sameSize",
        font: "Nimbus Sans Regular",
        lineHeight: 1,
        scale: 0,
      },
      theme
    ),
    ...theme.typography.elements,
  };
};

const titleText = (props, theme) => {
  return {
    ...theme.typography.helpers.font("Nimbus Sans Regular"),
    ...theme.typography.helpers.scale(1),
    margin: "var(--lem) 0",
  };
};

const subtitleText = (props, theme) => {
  return {
    ...theme.typography.helpers.font("Nimbus Sans Black"),
    ...theme.typography.helpers.scale(0),
    textTransform: "uppercase",
    margin: "var(--lem) 0",
  };
};

/**
 * Displays content inside a Text container.
 * @see Text.md
 */
const Text = (props) => {
  const { variant, as, children } = props;
  const theme = useTheme();

  const {
    defaultTextKlass,
    bodyTextKlass,
    longformTextKlass,
    titleTextKlass,
    subtitleTextKlass,
  } = useStyles(
    [defaultText, bodyText, longformText, titleText, subtitleText],
    props,
    theme
  );

  /**
   * Finds the class for the variant.
   */
  const klass = useFindInArrays(
    [
      defaultTextKlass,
      bodyTextKlass,
      longformTextKlass,
      titleTextKlass,
      subtitleTextKlass,
    ],
    variants,
    variant
  );

  const props2 = {
    className: cx(klass, `Text${startCase(variant)}`),
  };

  return createElement(as, props2, children);
};

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
export { propTypes as TextPropTypes, defaultProps as TextDefaultProps };
