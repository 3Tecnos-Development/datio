import { useContext } from "react";
import { ThemeContext } from "styled-components";

export const Color = (color?: string) => {
  let result: string;

  const themeContext = useContext(ThemeContext);

  result = themeContext?.colors?.default;

  if (color && themeContext) {
    let obj = themeContext?.colors;

    Object.keys(obj).forEach((key) => {
      var properties = color.split(".");

      for (var i = 0; i < properties.length; i++) {
        var prop = properties[i];

        if (!obj.hasOwnProperty(prop)) {
          return;
        } else {
          obj = obj[prop];
          if (typeof obj === "string") {
            result = obj;
          }
        }
      }
    });
  }

  return result;
};
