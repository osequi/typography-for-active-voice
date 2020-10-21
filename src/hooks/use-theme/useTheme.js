import { useContext } from "react";

/**
 * Different import for CRA and CNA
 */
import { ThemeContext } from "../../../pages/";
//import { ThemeContext } from "../../App";

const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;
