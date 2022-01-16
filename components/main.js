import React, { useEffect } from "react";

export default ({ children, className = "" }) => {
  useEffect(() => {
    document.body.className = className;
  }, []);

  return (
    <main>
      <div className="container">{children}</div>
    </main>
  );
};
