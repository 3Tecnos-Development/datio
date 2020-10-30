import { NativeButtonProps } from "antd/lib/button/button";
import { ButtonAnimate } from "./ButtonAnimate";
import { ButtonType, StyledButtonType } from "./ButtonType";
declare type OverrideButtonPropsType = Omit<NativeButtonProps, "type">;
export interface StyledButtonProps extends OverrideButtonPropsType {
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
declare type OverrideStyledButtonProps = Omit<StyledButtonProps, "customtype">;
export interface BaseButtonProps extends OverrideStyledButtonProps {
    type?: ButtonType;
}
declare const StyledButton: any;
export default StyledButton;
