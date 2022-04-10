import React, { FC } from "react";

interface IProps {
  className?: string;
}

export const Container: FC<IProps> = ({ className = "", children }) => {
  return <div className={`container ${className}`}>{children}</div>;
};
