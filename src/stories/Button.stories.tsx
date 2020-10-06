import React from "react";
import { Story, Meta } from "@storybook/react";
import "antd/dist/antd.css";
//import { storiesOf } from "@storybook/react";

import { Button, ButtonProps } from "components/Button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (props) => <Button {...props}>Button</Button>;

export const All = Template.bind({});
All.args = {
  type: "single",
  animate: "up",
  color: "pink.200",
};

export const EspecialsTypes = () => (
  <>
    <Button type="single" animate="up">
      Single
    </Button>
    <Button type="gradient" animate="up">
      Gradient
    </Button>
    <Button type="regular" animate="up">
      Regular
    </Button>
    <Button type="outline" animate="up">
      Outline
    </Button>
    <Button type="inverse" animate="up">
      Inverse
    </Button>
  </>
);

export const AntTypes = () => (
  <>
    <Button type="primary">Primary</Button>
    <Button type="default">Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="text">Tex</Button>
    <Button type="link">Link</Button>
  </>
);

export const Animate = () => (
  <>
    <Button animate="up">To Up</Button>
    <Button animate="retract">Retract</Button>
    <Button animate="expand">Expand</Button>
  </>
);

export const Others = () => (
  <>
    <Button shadow>Shadow</Button>
    <Button rounded>Rounded</Button>
  </>
);
