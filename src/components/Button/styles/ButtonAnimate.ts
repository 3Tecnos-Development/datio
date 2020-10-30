import { css } from "styled-components";

declare const ButtonAnimate: ["up", "retract", "expand"];
export declare type ButtonAnimate = typeof ButtonAnimate[number];

const up = css`
  &:hover {
    transform: translateY(-3px);
  }
`;

const retract = css`
  &:hover {
    transform: scale(0.9);
  }
`;

const expand = css`
  &:hover {
    transform: scale(1.1);
  }
`;

export { up, retract, expand };
