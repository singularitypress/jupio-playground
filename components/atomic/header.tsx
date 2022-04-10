import React, { FC } from "react";

interface IProps {
  variant: "h1" | "h2" | "h3";
  className?: string;
}

export const Header: FC<IProps> = ({ children, variant, className = "" }) => {
  switch (variant) {
    case "h1":
      return <h1 className={className}>{children}</h1>;
    case "h2":
      return <h2 className={className}>{children}</h2>;
    case "h3":
      return <h3 className={className}>{children}</h3>;
    default:
      return <>{children}</>;
  }
};
