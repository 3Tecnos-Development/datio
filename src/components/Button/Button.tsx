import React from "react";
import StyleButton, { StyleButtonProps } from "./styles/Button";

const Button: React.FC<StyleButtonProps> = (props) => {
  return <StyleButton {...props}>{props?.children}</StyleButton>;
};

/**
 * **Button?!** We don't need no stinkin' badges!!
 */
export default Button;
