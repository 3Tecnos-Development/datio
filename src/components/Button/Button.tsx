import React from "react";
import StyledButton, {
  StyledButtonProps,
  BaseButtonProps,
  StyledButtonType,
  BaseStyleButtonType,
} from "./styles/Button";
import { ButtonType, NativeButtonProps } from "antd/lib/button/button";

function isStyledButtonType(object: any): boolean {
  try {
    return BaseStyleButtonType.includes(object);
  } catch (e) {
    return false;
  }
}

const Button: React.FC<BaseButtonProps> = ({ type, ...rest }) => {
  if (isStyledButtonType(type)) return <StyledButton customtype={type as StyledButtonType} {...rest} />;
  else return <StyledButton type={type as ButtonType} {...rest} />;
};

const Button2: React.FC<BaseButtonProps> = (props) => {
  let copy = Object.assign({}, { ...props });
  delete copy["type"];

  if (props?.type && isStyledButtonType(props.type)) {
    const type = props?.type as StyledButtonType;
    let nativeCopy: StyledButtonProps = copy as StyledButtonProps;
    nativeCopy.customType = type;
    return <StyledButton {...nativeCopy}>{props?.children}</StyledButton>;
  } else {
    const type = props?.type as ButtonType;
    let nativeCopy: NativeButtonProps = copy as NativeButtonProps;
    nativeCopy.type = type;
    return <StyledButton {...nativeCopy}>{props?.children}</StyledButton>;
  }
};

/**
 * **Button?!** We don't need no stinkin' badges!!
 */
export default Button;
