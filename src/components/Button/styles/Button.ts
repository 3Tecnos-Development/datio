import styled, { css } from "styled-components";
import { Button } from "antd";
import { ButtonProps, ButtonType as ButtonTypeAnt } from "antd/lib/button";

import { rgba } from "polished";
import { currentColor } from "utils/functions";

import { retract, up } from "./ButtonAnimate";
import { gradient, inverse, outline, regular, single } from "./ButtonStyle";

declare type StyleButtonType = "gradient" | "single" | "outline" | "inverse" | "regular";
export declare type ButtonType = StyleButtonType | ButtonTypeAnt;

declare const ButtonAnimate: ["up", "retract", "expand"];
export declare type ButtonAnimate = typeof ButtonAnimate[number];

type OverrideButtonProps<T, R> = Omit<T, keyof R> & R;

type OverrideButtonPropsType = OverrideButtonProps<
  ButtonProps,
  {
    type?: ButtonType;
  }
>;

interface IProps {
  isIcon?: boolean;
  shadow?: boolean;
  /**
   * Animate your button with a simple property
   */
  animate?: ButtonAnimate;
  color?: string;
  rounded?: boolean;
}

export type StyleButtonProps = IProps & OverrideButtonPropsType;

const shadow = css<StyleButtonProps>`
  &:hover {
    box-shadow: 0 4px 20px -6px ${(props) => rgba(currentColor(props.color, props), 0.45)} !important;
  }
`;

const StyleButton = styled(Button)<StyleButtonProps>`
	
  cursor: pointer;
  transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;

  border: 1px solid transparent;
  padding: .375rem .75rem;
  border-radius: .25rem;

  font-weight: 500;
  font-size: 12px;
  
  border-radius: 0.1875rem !important;

  ${(props) => props?.type && props?.type === "gradient" && gradient}
  ${(props) => props?.type && props?.type === "single" && single}
  ${(props) => props?.type && props?.type === "outline" && outline}
  ${(props) => props?.type && props?.type === "inverse" && inverse}
  ${(props) => props?.type && props?.type === "regular" && regular}  

  background-color: ${(props) => currentColor(props.color, props)} !important;

  ${(props) => props?.shadow && shadow}
    
  ${(props) =>
    props?.rounded &&
    css`
      border-radius: 50px;
    `}

   color: ${(props) => props.theme.colors?.white} !important;

   [ant-click-animating-without-extra-node='true']::after {
    box-shadow: 0 0 0 0 ${(props) => currentColor(props.color, props)} !important;
   }

   ${(props) => props.animate && props.animate === "up" && up}
   ${(props) => props.animate && props.animate === "retract" && retract}
   
`;

export default StyleButton;
