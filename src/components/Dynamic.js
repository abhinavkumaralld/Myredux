import React from "react";
import { useParams } from "react-router-dom";
const Dynamic = () => {
  const { id } = useParams();
  return <div>Dynamic with id ={id}</div>;
};

export default Dynamic;
