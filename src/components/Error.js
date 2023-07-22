import React from "react";

import { useRouteError } from "react-router-dom";
const Error = () => {
  console.log(useRouteError());
  return <div>Error</div>;
};

export default Error;
