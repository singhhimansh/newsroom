import React from "react";

type ButtonProps = {
  onClick: (e:any) => void;
  name?: string;
  label?: string;
  className?: string;
  id?: string;
  sx?: React.CSSProperties;
  children?: React.ReactNode;
};
const Button: React.FC<ButtonProps> = ({
  onClick,
  sx,
  id,
  name,
  label,
  children,
  className,
}) => {
  return (
    <button
      id={id}
      className={className}
      style={sx}
      onClick={onClick}
    >
      {label ? label : children}
    </button>
  );
};

export default Button;
