import { css } from "styled-components";
import { rgba, setLightness } from "polished";

import { ButtonType as ButtonTypeAnt } from "antd/lib/button";

import { Color } from "../../../utils/functions";
import { StyledButtonProps } from "./Button";

export const BaseStyleButtonType = ["gradient", "single", "outline", "inverse", "regular"] as const;
export declare type StyledButtonType = typeof BaseStyleButtonType[number];

export declare type ButtonType = ButtonTypeAnt | StyledButtonType;

const regular = css<StyledButtonProps>`
  background-color: ${(props) => Color(props?.color)};
  border: 1px !important;

  &:hover {
    background-color: ${(props) => rgba(Color(props?.color), 0.8)} !important;
  }
`;

const gradient = css<StyledButtonProps>`
  background: linear-gradient(
    to right,
    ${(props) => setLightness(0.8, Color(props?.color))},
    ${(props) => Color(props?.color)}
  ) !important;

  border: 1px !important;

  &:hover {
    background: linear-gradient(
      to left,
      ${(props) => setLightness(0.8, Color(props?.color))},
      ${(props) => Color(props?.color)}
    ) !important;
  }
`;

const single = css<StyledButtonProps>`
  background-color: ${(props) => Color(props?.color)} !important;
  border-color: ${(props) => Color(props?.color)} !important;
  border: 1px solid ${(props) => Color(props?.color)} !important;

  &:hover {
    color: ${(props) => props.theme.colors?.white} !important;
  }
`;

const outline = css<StyledButtonProps>`
  background-color: transparent !important;

  color: ${(props) => Color(props?.color)} !important;
  border: 1px solid ${(props) => Color(props?.color)} !important;

  &:hover {
    color: ${(props) => props.theme.colors?.white} !important;
    background-color: ${(props) => Color(props?.color)} !important;
    opacity: 1 !important;
  }
`;

const inverse = css<StyledButtonProps>`
  color: ${(props) => Color(props?.color)} !important;
  background-color: ${(props) => rgba(Color(props?.color), 0.2)} !important;
  border: 1px !important;

  &:hover {
    background-color: ${(props) => Color(props?.color)} !important;
    color: ${(props) =>
      Color(props?.color) === props.theme.colors?.white
        ? props.theme.colors?.black || "#000"
        : props.theme.colors?.white || "#fff"} !important;
  }
`;

export function isStyledButtonType(object: any): boolean {
  try {
    return BaseStyleButtonType.includes(object);
  } catch (e) {
    return false;
  }
}

export { single, inverse, regular, gradient, outline };
