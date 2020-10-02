import { css } from "styled-components";

declare const ButtonAnimate: ["up", "retract", "expand"];
export declare type ButtonAnimate = typeof ButtonAnimate[number];

const up = css`
  &:hover {
    -webkit-transform: translateY(-3px);
    transform: translateY(-3px);
  }
`;

const retract = css`
  &:hover {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
`;

export { up, retract };
