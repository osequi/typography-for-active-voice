import React from "react";
import PropTypes from "prop-types";
/**
 * Helmet is for CRA.
 * import Helmet from "react-helmet";
 */
/**
 * Head is for CNA.
 */
import Head from "next/head";
import { cx } from "emotion";
import { useStyles, useTheme } from "../../../hooks";

/**
 * Adds a CSS Reset with `normalize.css`.
 * Commented out for Next.js apps. They use `_app.js` to import global styles.
 * @see https://gist.github.com/vre2h/4bad1d3b836f6a18c9bd5a8ca68ab1d9
 */
//import "normalize.css";

/**
 * Adds further normalization on top of `normalize.css`.
 * Commented out for Next.js apps. They use `_app.js` to import global styles.
 */
//import "../../../theme/typography/typography.reset.css";

/**
 * Defines the prop types.
 */
const propTypes = {};

/**
 * Defines the default props.
 */
const defaultProps = {};

/**
 * Defines the styles.
 */
const container = (theme) => {
  return {
    fontSize: `${theme.typography.grid.fontSizes[0]}%`,
    lineHeight: `${theme.typography.grid.lineHeight}`,
    ...theme.typography.helpers.responsiveFontSizes,
    "--lem": `${theme.typography.helpers.lem}em`,
  };
};

const containerNextJs = (theme) => {
  console.log("r:", theme.typography.helpers.responsiveFontSizesForCNA);
  return `
	body {
		font-size: ${theme.typography.grid.fontSizes[0]}%;
		line-height: ${theme.typography.grid.lineHeight};
		--lem: ${theme.typography.helpers.lem}em;
	}
	${theme.typography.helpers.responsiveFontSizesForCNA}
	`;
};

/**
 * Sets up the typographic grid in the `<body>`.
 */
const Setup = (props) => {
  const theme = useTheme();

  /**
   * Loads the styles.
   * This is for CRA.
   *
   * const { containerKlass } = useStyles([container], theme);
   * <Helmet>
	 <body className={cx("Body", containerKlass)} />
   </Helmet>
   */

  return (
    <Head>
      <style>{containerNextJs(theme)}</style>
    </Head>
  );
};

Setup.propTypes = propTypes;
Setup.defaultProps = defaultProps;

export default Setup;
export { propTypes as SetupPropTypes, defaultProps as SetupDefaultProps };
