import React from "react";

const sizeClasses = {
  txtPlusJakartaSansBold60: "font-bold font-plusjakartasans",
  txtPlusJakartaSansSemiBold1866: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansSemiBold40: "font-plusjakartasans font-semibold",
  txtMontserratAlternatesMedium15: "font-medium font-montserratalternates",
  txtSpaceGroteskBold31: "font-bold font-spacegrotesk",
  txtPlusJakartaSansMedium16: "font-medium font-plusjakartasans",
  txtPlusJakartaSansMedium24: "font-medium font-plusjakartasans",
  txtPlusJakartaSansSemiBold20: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansMedium88: "font-medium font-plusjakartasans",
  txtPlusJakartaSansSemiBold40Gray500: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansRegular14: "font-normal font-plusjakartasans",
  txtPlusJakartaSansMedium20: "font-medium font-plusjakartasans",
  txtPlusJakartaSansSemiBold16: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansSemiBold24: "font-plusjakartasans font-semibold",
  txtDMSansMedium15: "font-dmsans font-medium",
  txtPlusJakartaSansMedium16WhiteA700: "font-medium font-plusjakartasans",
  txtPlusJakartaSansSemiBold18: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansSemiBold20Orange400: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansMedium16DeeporangeA700: "font-medium font-plusjakartasans",
  txtPlusJakartaSansSemiBold40GreenA200: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansSemiBold24Orange400: "font-plusjakartasans font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
