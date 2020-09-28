import React from "react";
import { Story, Meta } from "@storybook/react";

//import { storiesOf } from "@storybook/react";

import { Button, ButtonProps } from "components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {},
} as Meta;
const Template: Story<ButtonProps> = (props) => <Button {...props}>Pesquisar</Button>;

export const All = Template.bind({});
All.args = {
  type: "single",
  animate: "up",
  color: "pink.200",
};

export const SingleUp = Template.bind({});
SingleUp.args = {
  type: "single",
  animate: "up",
  color: "pink.200",
};

export const SingleRetract = Template.bind({});
SingleRetract.args = {
  type: "single",
  animate: "retract",
  color: "green.700",
};

export const Outline = Template.bind({});
Outline.args = {
  type: "outline",
};

/*
storiesOf("Button", module)
.add("Single", () => <Button single>Pesquisar</Button>)
.add("Outline", () => <Button outline>Pesquisar</Button>);
*/
