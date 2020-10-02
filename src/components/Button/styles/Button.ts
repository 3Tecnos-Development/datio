import styled, { css } from "styled-components";
import Button, { ButtonType as ButtonTypeAnt } from "antd/lib/button";
import { NativeButtonProps } from "antd/lib/button/button";

import { rgba } from "polished";
import { currentColor } from "utils/functions";

import { retract, up } from "./ButtonAnimate";
import { gradient, inverse, outline, regular, single } from "./ButtonStyle";

export const BaseStyleButtonType = ["gradient", "single", "outline", "inverse", "regular", "undefined"] as const;
export declare type StyledButtonType = typeof BaseStyleButtonType[number];

export declare type ButtonType = ButtonTypeAnt | StyledButtonType;

declare const ButtonAnimate: ["up", "retract", "expand"];
export declare type ButtonAnimate = typeof ButtonAnimate[number];

type OverrideButtonPropsType = Omit<NativeButtonProps, "type">;
export declare interface StyledButtonProps extends OverrideButtonPropsType {
  customtype?: StyledButtonType;
  shadow?: boolean;
  /**
   * Animate your button with a simple property
   */
  animate?: ButtonAnimate;
  color?: string;
  rounded?: boolean;
}

export declare interface BaseButtonProps extends StyledButtonProps {
  type?: ButtonType;
}

const shadow = css<StyledButtonProps>`
  &:hover {
    box-shadow: 0 4px 20px -6px ${(props) => rgba(currentColor(props.color, props), 0.45)} !important;
  }
`;

const StyledButton = styled(Button)<StyledButtonProps>`
	
  cursor: pointer;
  transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;

  font-weight: 500;
  font-size: 12px;
  padding: 0.375rem 0.75rem;

  ${(props) => {
    switch (props?.type) {
      case "dashed":
        return `
		`;
      default:
        return `
		border: 1px solid transparent;
		border-radius: 0.25rem;
	  
		border-radius: 0.1875rem !important;
	  
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
      border-radius: 50px;
    `}

   [ant-click-animating-without-extra-node='true']::after {
    box-shadow: 0 0 0 0 ${(props) => currentColor(props.color, props)} !important;
   }

   ${(props) => props.animate && props.animate === "up" && up}
   ${(props) => props.animate && props.animate === "retract" && retract}
   
`;

export default StyledButton;
