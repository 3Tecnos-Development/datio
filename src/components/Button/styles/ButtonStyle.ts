import { rgba, setLightness } from "polished";
import { css } from "styled-components";
import { currentColor } from "utils/functions";
import { StyleButtonProps } from "./Button";

const regular = css<StyleButtonProps>`
  background-color: ${(props) => currentColor(props.color, props)} !important;
  border-color: ${(props) => currentColor(props.color, props)} !important;

  &:hover {
    background-color: ${(props) => rgba(currentColor(props.color, props), 0.8)} !important;
  }
`;

const gradient = css`
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(${(props) => setLightness(0.8, currentColor(props.color, props))}),
    to(${(props) => currentColor(props.color, props)})
  ) !important;
  background: linear-gradient(
    to right,
    ${(props) => setLightness(0.8, currentColor(props.color, props))},
    ${(props) => currentColor(props.color, props)}
  ) !important;

  -webkit-transition: opacity 0.3s ease !important;
  transition: opacity 0.3s ease !important;

  &:hover {
    opacity: 0.8 !important;
  }
`;

const single = css`
  background-color: ${(props) => currentColor(props?.color, props)} !important;
  border-color: ${(props) => currentColor(props?.color, props)} !important;
  border: 1px solid ${(props) => currentColor(props?.color, props)} !important;
`;

const outline = css`
  background-color: transparent !important;

  color: ${(props) => currentColor(props.color, props)} !important;
  border: 1px solid ${(props) => currentColor(props.color, props)} !important;

  &:hover {
    color: #000 !important;
    opacity: 1 !important;
  }
`;

const inverse = css`
  color: ${(props) => currentColor(props.color, props)} !important;
  background-color: ${(props) => rgba(currentColor(props.color, props), 0.2)} !important;
  border-color: ${(props) => rgba(currentColor(props.color, props), 0.2)} !important;

  &:hover {
    background-color: ${(props) => currentColor(props.color, props)} !important;
    border-color: ${(props) => currentColor(props.color, props)} !important;
    color: ${(props) =>
      currentColor(props.color, props) === props.theme.colors?.white
        ? props.theme.colors?.black || "#000"
        : props.theme.colors?.white || "#fff"} !important;
  }
`;

export { single, inverse, regular, gradient, outline };
