import React from "react";

const Loading = (props) => {
  return (
    <div className="col-md-9 text-center m-4">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
