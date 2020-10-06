import styled, { css } from "styled-components";
import Button from "antd/lib/button";
import { NativeButtonProps } from "antd/lib/button/button";

import { rgba } from "polished";
import { currentColor } from "utils/functions";

import { ButtonAnimate, expand, retract, up } from "./ButtonAnimate";
import {
  ButtonType,
  gradient,
  inverse,
  isStyledButtonType,
  outline,
  regular,
  single,
  StyledButtonType,
} from "./ButtonType";

type OverrideButtonPropsType = Omit<NativeButtonProps, "type">;
export declare interface StyledButtonProps extends OverrideButtonPropsType {
  customtype?: StyledButtonType;
  shadow?: boolean;
  /**
   * Animate your button with a simple property
   */
  animate?: ButtonAnimate;
  /**
   * `Color` follow the partner from Smart Swatch
   */
  color?: string;
  rounded?: boolean;
}

type OverrideStyledButtonProps = Omit<StyledButtonProps, "customtype">;
export declare interface BaseButtonProps extends OverrideStyledButtonProps {
  type?: ButtonType;
}

const shadow = css<StyledButtonProps>`
  &:hover {
    box-shadow: 0 10px 20px -10px ${(props) => rgba(currentColor(props.color, props), 0.75)} !important;
  }
`;

const StyledButton = styled(Button)<StyledButtonProps>`
	
  cursor: pointer;
  transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;

  font-weight: 500;
  font-size: 12px;
  padding: 0.4375rem 1.25rem;
  margin: 0.1rem;

  ${(props) => {
    if (props?.customtype && isStyledButtonType(props?.customtype)) {
      return `return 
	border-radius: 0.25rem !important;
  
	background-color: ${currentColor(props?.color, props)} !important;
  
	color: ${props.theme.colors?.white} !important;
	`;
    }
  }}

  ${(props) => props?.customtype && props?.customtype === "gradient" && gradient}
  ${(props) => props?.customtype && props?.customtype === "single" && single}
  ${(props) => props?.customtype && props?.customtype === "outline" && outline}
  ${(props) => props?.customtype && props?.customtype === "inverse" && inverse}
  ${(props) => props?.customtype && props?.customtype === "regular" && regular}  

  ${(props) => props?.shadow && shadow}
    
  ${(props) =>
    props?.rounded &&
    css`
      border-radius: 1.875rem !important;
    `}

   [ant-click-animating-without-extra-node='true']::after {
    box-shadow: 0 0 0 0 ${(props) => currentColor(props.color, props)} !important;
   }

   ${(props) => props.animate && props.animate === "up" && up}
   ${(props) => props.animate && props.animate === "retract" && retract}
   ${(props) => props.animate && props.animate === "expand" && expand}

   
`;

export default StyledButton;
