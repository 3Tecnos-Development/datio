var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { css } from "styled-components";
import { rgba, setLightness } from "polished";
import { Color } from "../../../utils/functions";
export var BaseStyleButtonType = ["gradient", "single", "outline", "inverse", "regular", undefined];
var regular = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  border: 1px !important;\n\n  &:hover {\n    background-color: ", " !important;\n  }\n"], ["\n  background-color: ", ";\n  border: 1px !important;\n\n  &:hover {\n    background-color: ", " !important;\n  }\n"])), function (props) { var _a; return Color((_a = props) === null || _a === void 0 ? void 0 : _a.color); }, function (props) { var _a; return rgba(Color((_a = props) === null || _a === void 0 ? void 0 : _a.color), 0.8); });
var gradient = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background: linear-gradient(\n    to right,\n    ", ",\n    ", "\n  ) !important;\n\n  border: 1px !important;\n\n  &:hover {\n    background: linear-gradient(\n      to left,\n      ", ",\n      ", "\n    ) !important;\n  }\n"], ["\n  background: linear-gradient(\n    to right,\n    ", ",\n    ", "\n  ) !important;\n\n  border: 1px !important;\n\n  &:hover {\n    background: linear-gradient(\n      to left,\n      ", ",\n      ", "\n    ) !important;\n  }\n"])), function (props) { var _a; return setLightness(0.8, Color((_a = props) === null || _a === void 0 ? void 0 : _a.color)); }, function (props) { var _a; return Color((_a = props) === null || _a === void 0 ? void 0 : _a.color); }, function (props) { var _a; return setLightness(0.8, Color((_a = props) === null || _a === void 0 ? void 0 : _a.color)); }, function (props) { var _a; return Color((_a = props) === null || _a === void 0 ? void 0 : _a.color); });
var single = css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background-color: ", " !important;\n  border-color: ", " !important;\n  border: 1px solid ", " !important;\n"], ["\n  background-color: ", " !important;\n  border-color: ", " !important;\n  border: 1px solid ", " !important;\n"])), function (props) { var _a; return Color((_a = props) === null || _a === void 0 ? void 0 : _a.color); }, function (props) { var _a; return Color((_a = props) === null || _a === void 0 ? void 0 : _a.color); }, function (props) { var _a; return Color((_a = props) === null || _a === void 0 ? void 0 : _a.color); });
var outline = css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background-color: transparent !important;\n\n  color: ", " !important;\n  border: 1px solid ", " !important;\n\n  &:hover {\n    color: ", " !important;\n    background-color: ", " !important;\n    opacity: 1 !important;\n  }\n"], ["\n  background-color: transparent !important;\n\n  color: ", " !important;\n  border: 1px solid ", " !important;\n\n  &:hover {\n    color: ", " !important;\n    background-color: ", " !important;\n    opacity: 1 !important;\n  }\n"])), function (props) { var _a; return Color((_a = props) === null || _a === void 0 ? void 0 : _a.color); }, function (props) { var _a; return Color((_a = props) === null || _a === void 0 ? void 0 : _a.color); }, function (props) { var _a; return (_a = props.theme.colors) === null || _a === void 0 ? void 0 : _a.white; }, function (props) { var _a; return Color((_a = props) === null || _a === void 0 ? void 0 : _a.color); });
var inverse = css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  color: ", " !important;\n  background-color: ", " !important;\n  border: 1px !important;\n\n  &:hover {\n    background-color: ", " !important;\n    color: ", " !important;\n  }\n"], ["\n  color: ", " !important;\n  background-color: ", " !important;\n  border: 1px !important;\n\n  &:hover {\n    background-color: ", " !important;\n    color: ",
    " !important;\n  }\n"])), function (props) { var _a; return Color((_a = props) === null || _a === void 0 ? void 0 : _a.color); }, function (props) { var _a; return rgba(Color((_a = props) === null || _a === void 0 ? void 0 : _a.color), 0.2); }, function (props) { var _a; return Color((_a = props) === null || _a === void 0 ? void 0 : _a.color); }, function (props) {
    var _a, _b, _c, _d;
    return Color((_a = props) === null || _a === void 0 ? void 0 : _a.color) === ((_b = props.theme.colors) === null || _b === void 0 ? void 0 : _b.white)
        ? ((_c = props.theme.colors) === null || _c === void 0 ? void 0 : _c.black) || "#000"
        : ((_d = props.theme.colors) === null || _d === void 0 ? void 0 : _d.white) || "#fff";
});
export function isStyledButtonType(object) {
    try {
        return BaseStyleButtonType.includes(object);
    }
    catch (e) {
        return false;
    }
}
export { single, inverse, regular, gradient, outline };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
