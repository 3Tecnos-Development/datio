var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
import Button from "antd/lib/button/button";
import { rgba } from "polished";
import { Color } from "../../../utils/functions";
import { expand, retract, up } from "./ButtonAnimate";
import { gradient, inverse, isStyledButtonType, outline, regular, single, } from "./ButtonType";
var shadow = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &:hover {\n    box-shadow: 0 10px 20px -10px ", " !important;\n  }\n"], ["\n  &:hover {\n    box-shadow: 0 10px 20px -10px ", " !important;\n  }\n"])), function (props) { return rgba(Color(props.color), 0.75); });
var StyledButton = styled(Button)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t\n  cursor: pointer;\n  transition: all 0.3s ease-out;\n  -webkit-transition: all 0.3s ease-out;\n\n  font-weight: 500;\n  font-size: 12px;\n  padding: 0.4375rem 1.25rem;\n  margin: 0.1rem;\n\n  ", "\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "  \n\n  ", "\n    \n  ", "\n\n   [ant-click-animating-without-extra-node='true']::after {\n    box-shadow: 0 0 0 0 ", " !important;\n   }\n\n   ", "\n   ", "\n   ", "\n"], ["\n\t\n  cursor: pointer;\n  transition: all 0.3s ease-out;\n  -webkit-transition: all 0.3s ease-out;\n\n  font-weight: 500;\n  font-size: 12px;\n  padding: 0.4375rem 1.25rem;\n  margin: 0.1rem;\n\n  ",
    "\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "  \n\n  ", "\n    \n  ",
    "\n\n   [ant-click-animating-without-extra-node='true']::after {\n    box-shadow: 0 0 0 0 ", " !important;\n   }\n\n   ", "\n   ", "\n   ", "\n"])), function (props) {
    var _a, _b, _c, _d;
    if (((_a = props) === null || _a === void 0 ? void 0 : _a.customtype) && isStyledButtonType((_b = props) === null || _b === void 0 ? void 0 : _b.customtype)) {
        return "return \n\tborder-radius: 0.25rem !important;\n  \n\tbackground-color: " + Color((_c = props) === null || _c === void 0 ? void 0 : _c.color) + " !important;\n  \n\tcolor: " + ((_d = props.theme.colors) === null || _d === void 0 ? void 0 : _d.white) + " !important;\n\t";
    }
}, function (props) { var _a, _b; return ((_a = props) === null || _a === void 0 ? void 0 : _a.customtype) && ((_b = props) === null || _b === void 0 ? void 0 : _b.customtype) === "gradient" && gradient; }, function (props) { var _a, _b; return ((_a = props) === null || _a === void 0 ? void 0 : _a.customtype) && ((_b = props) === null || _b === void 0 ? void 0 : _b.customtype) === "single" && single; }, function (props) { var _a, _b; return ((_a = props) === null || _a === void 0 ? void 0 : _a.customtype) && ((_b = props) === null || _b === void 0 ? void 0 : _b.customtype) === "outline" && outline; }, function (props) { var _a, _b; return ((_a = props) === null || _a === void 0 ? void 0 : _a.customtype) && ((_b = props) === null || _b === void 0 ? void 0 : _b.customtype) === "inverse" && inverse; }, function (props) { var _a, _b; return ((_a = props) === null || _a === void 0 ? void 0 : _a.customtype) && ((_b = props) === null || _b === void 0 ? void 0 : _b.customtype) === "regular" && regular; }, function (props) { var _a; return ((_a = props) === null || _a === void 0 ? void 0 : _a.shadow) && shadow; }, function (props) {
    var _a;
    return ((_a = props) === null || _a === void 0 ? void 0 : _a.rounded) && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      border-radius: 1.875rem !important;\n    "], ["\n      border-radius: 1.875rem !important;\n    "])));
}, function (props) { return Color(props.color); }, function (props) { return props.animate && props.animate === "up" && up; }, function (props) { return props.animate && props.animate === "retract" && retract; }, function (props) { return props.animate && props.animate === "expand" && expand; });
export default StyledButton;
var templateObject_1, templateObject_2, templateObject_3;
