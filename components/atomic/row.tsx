import React, { FC } from "react";

interface IProps {
  className?: string;
}

export const Row: FC<IProps> = ({ className = "", children }) => {
  return <div className={`row ${className}`}>{children}</div>;
};
