import React, { createContext } from "react";

import theme from "../src/theme";
import Home from "../src/components/Home/Home.mdx";
import { Setup, Text, TypographicGrid } from "../src/components/typography";

const ThemeContext = createContext();

const App = () => (
  <ThemeContext.Provider value={theme}>
    <Setup />
    <TypographicGrid />
    <Text variant="longform">
      <Home />
    </Text>
  </ThemeContext.Provider>
);

export default App;
export { ThemeContext };
