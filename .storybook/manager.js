import { addons } from "@storybook/addons";
import { themes } from "@storybook/theming";

// https://storybook.js.org/docs/react/configure/features-and-behavior
addons.setConfig({
  isFullscreen: false,
  panelPosition: "right",
  theme: themes.dark,
});
