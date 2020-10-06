import React from "react";
import { ButtonType } from "antd/lib/button/button";

import StyledButton, { BaseButtonProps } from "./styles/Button";
import { isStyledButtonType, StyledButtonType } from "./styles/ButtonType";

/**
 * The `Button` component with multiples possibility from use
 */
const Button: React.FC<BaseButtonProps> = ({ type, ...rest }) => {
  if (isStyledButtonType(type)) return <StyledButton customtype={type as StyledButtonType} {...rest} />;
  else return <StyledButton type={type as ButtonType} {...rest} />;
};

Button.defaultProps = {
  type: "single",
};

export default Button;
