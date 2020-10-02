import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/themes";
import "antd/dist/antd.css";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
