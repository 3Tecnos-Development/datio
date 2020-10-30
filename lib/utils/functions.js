import { useContext } from "react";
import { ThemeContext } from "styled-components";
export var Color = function (color) {
    var _a, _b, _c;
    var result;
    var themeContext = useContext(ThemeContext);
    result = (_b = (_a = themeContext) === null || _a === void 0 ? void 0 : _a.colors) === null || _b === void 0 ? void 0 : _b.default;
    if (color && themeContext) {
        var obj_1 = (_c = themeContext) === null || _c === void 0 ? void 0 : _c.colors;
        Object.keys(obj_1).forEach(function (key) {
            var properties = color.split(".");
            for (var i = 0; i < properties.length; i++) {
                var prop = properties[i];
                if (!obj_1.hasOwnProperty(prop)) {
                    return;
                }
                else {
                    obj_1 = obj_1[prop];
                    if (typeof obj_1 === "string") {
                        result = obj_1;
                    }
                }
            }
        });
    }
    return result;
};
