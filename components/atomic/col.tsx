import React, { FC } from "react";

type TViewPort = "xs" | "sm" | "md" | "lg" | "xl";
type TCol = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 10 | 11 | 12;

interface IProps {
  className?: string;
  type: {
    [key in TViewPort]?: TCol;
  };
}

export const Col: FC<IProps> = ({ className = "", children, type }) => {
  const typeClasses = Object.keys(type)
    .map((viewport) => `col-${viewport}-${type[viewport as TViewPort]}`)
    .join(" ");
  return <div className={`${typeClasses} ${className}`}>{children}</div>;
};
