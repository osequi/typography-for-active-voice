/**
 * Defines the styles for all the text elements.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element
 */
const elements = {
  label: "Elements",
  ["& blockquote"]: {
    display: "inline-block !important",
    border: "4px dashed",
    margin: `var(--lem) 0`,

    ["& + p"]: {
      //marginBottom: `var(--lem)`,
    },
  },
  ["& dd"]: {},
  ["& div"]: {},
  ["& dl"]: {},
  ["& dt"]: {},
  ["& figcaption"]: {},
  ["& figure"]: {},
  ["& hr"]: {
    display: "block",
    fontSize: "100%",
  },
  ["& li"]: {
    display: "inline list-item",
    marginLeft: `var(--lem)`,
  },
  ["& main"]: {},
  ["& ol"]: {
    listStylePosition: "inside",
  },
  ["& p"]: {},
  ["& code"]: {
    /**
     * This is both for code blocks with `pres` and inline with ticks like `HTML`
     */
    fontWeight: 300,
  },
  ["& pre"]: {
    display: "block",
    backgroundColor: "lightgrey",
    padding: `var(--lem)`,
    //margin: `var(--lem) 0`,
    overflowX: "auto",

    ["& code"]: {},
  },
  ["& ul"]: {
    display: "block",
    listStylePosition: "inside",
  },
  ["& a "]: {},
  ["& abbr"]: {},
  ["& b"]: {},
  ["& bdi"]: {},
  ["& bdo"]: {},
  ["& br"]: {},
  ["& cite"]: {},

  ["& data"]: {},
  ["& dfn"]: {},
  ["& em"]: {},
  ["& i"]: {},
  ["& kbd"]: {},
  ["& mark"]: {},
  ["& q"]: {},
  ["& rb"]: {},
  ["& rp"]: {},
  ["& rt"]: {},
  ["& rtc"]: {},
  ["& ruby"]: {},
  ["& s"]: {},
  ["& samp"]: {},
  ["& small"]: {},
  ["& span"]: {},
  ["& strong"]: {},
  ["& sub"]: {},
  ["& sup"]: {},
  ["& time"]: {},
  ["& u"]: {},
  ["& var"]: {},
  ["& wbr"]: {},
  ["& area"]: {},
  ["& audio"]: {},
  ["& img"]: {},
  ["& map"]: {},
  ["& track"]: {},
  ["& video"]: {},
  ["& del"]: {},
  ["& ins"]: {},
  ["& caption"]: {},
  ["& col"]: {},
  ["& colgroup"]: {},
  ["& table"]: {},
  ["& tbody"]: {},
  ["& td"]: {},
  ["& tfoot"]: {},
  ["& th"]: {},
  ["& thead"]: {},
  ["& tr"]: {},
  ["& button"]: {},
  ["& datalist"]: {},
  ["& fieldset"]: {},
  ["& form"]: {},
  ["& input"]: {},
  ["& label"]: {},
  ["& legend"]: {},
  ["& meter"]: {},
  ["& optgroup"]: {},
  ["& option"]: {},
  ["& output"]: {},
  ["& progress"]: {},
  ["& select"]: {},
  ["& textarea"]: {},
  ["& details"]: {},
  ["& dialog"]: {},
  ["& menu"]: {},
  ["& summary"]: {},
};

export { elements };
