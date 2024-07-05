import React from "react";

const ErrorMessageSnack = ({ error }) => {
  return (
    <div className="my-3">
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default ErrorMessageSnack;
