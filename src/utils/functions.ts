export const currentColor = (color?: string, props?: any) => {
  let result: string;

  result = props?.theme?.colors?.default;

  if (color && props) {
    let obj = props?.theme?.colors;

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
