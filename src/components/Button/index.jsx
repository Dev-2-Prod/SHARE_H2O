import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[26px]" };
const variants = {
  outline: {
    white_A700: "border-2 border-solid border-white-A700 text-white-A700",
  },
  fill: {
    cyan_800: "bg-cyan-800 text-white-A700",
    deep_orange_A700: "bg-deep_orange-A700 shadow-bs text-white-A700",
  },
};
const sizes = { xs: "p-1.5", sm: "p-[15px]", md: "p-[18px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "sm",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["white_A700", "cyan_800", "deep_orange_A700"]),
};

export { Button };
