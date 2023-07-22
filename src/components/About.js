import { React, useContext } from "react";
import UserContext from "../context/UserContext";

const About = () => {
  const user = useContext(UserContext);
  console.log(user);
  return (
    <div className="flex ">
      <div>About</div>
      <div className="font-bold text-red-600 px-3">{user.user.name}</div>
    </div>
  );
};

export default About;
