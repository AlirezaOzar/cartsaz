import React from "react";

const Button = ({
  text,
  className,
  icon,
}) => {
  return (
    <button className={className}>
      {icon}
      <p>{text}</p>
    </button>
  );
};

export default Button;
