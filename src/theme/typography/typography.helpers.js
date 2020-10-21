import ms from "modularscale-js";
import { isArray } from "lodash";

/**
 * Imports other components and hooks.
 */
import { typography } from "./typography";
import { responsiveness } from "../responsiveness";

/**
 * Calculates the basic spacing unit, the grid size, in `em`
 * @example {fontSize: 100%, lineHeight: 1.25} => (100 * 1.25) / 100 = 1.25
 * @example {fontSize: 110%, lineHeight: 1.25} => (110 * 1.25) / 100 = 1.375
 */
const lem = () => {
  const { grid } = typography;
  const { fontSizes, lineHeight } = grid;
  const fontSize = fontSizes[0];

  return (fontSize * lineHeight) / 100;
};

/**
 * Creates the media queries for the responsive font sizes.
 */
const responsiveFontSizes = () => {
  const { grid } = typography;
  const { fontSizes } = grid;
  const { breakpoints, helpers } = responsiveness;
  const { breakpoint } = helpers;

  let responsiveSizes = [];

  fontSizes &&
    fontSizes.map((item, index) => {
      const bp = breakpoints[index];
      const query = breakpoint(bp.name);
      responsiveSizes[`${query}`] = { fontSize: `${item}%` };
    });

  return responsiveSizes;
};

/**
 * Creates media queries for responsive grid columns
 */
const responsiveGridColumns = (columns) => {
  const { breakpoints, helpers } = responsiveness;
  const { breakpoint } = helpers;

  const responsiveColumns = isArray(columns) ? columns : [columns];

  let queries = [];

  responsiveColumns &&
    responsiveColumns.map((item, index) => {
      const bp = breakpoints[index];
      const query = breakpoint(bp.name);
      queries[`${query}`] = {
        gridTemplateColumns: `repeat(${item}, 1fr)`,
      };
    });

  return queries;
};

/**
 * Returns a font style object identified by name.
 * @param  {string} name The font name.
 * @return {object}      The font style object.
 * @example
 * ```
 * font('Nimbus Sans Medium') => { fontFamily: "nimbus-sans", fontWeight: 500, fontStyle: "normal"}
 * ```
 */
const font = (name) => {
  const { name: fontName, ...rest } = typography.fonts.find(
    (item) => item.name === name
  );

  const removeMonospace = {
    ["& input, pre, code, kbd, samp"]: {
      ...rest,
    },
  };

  return { ...rest, ...removeMonospace };
};

/**
 * Sets the max-width of a text to display 50-60 characters in a row.
 * // TODO: do the calculations. Currently maxWidth is hardcoded to 35.
 * // NOTE: `ch` would be useful here, however does it fits the grid?
 * @param  {number} value How many chars to display in a row.
 * @return {object}       The maxWidth style object.
 */
const maxWidth = (value) => {
  return {
    ["& > * :not(h1):not(h2):not(h3):not(h4):not(h5):not(h6)"]: {
      maxWidth: `calc(25 * var(--lem))`,
    },
  };
};

export { lem, responsiveFontSizes, responsiveGridColumns, font, maxWidth };
