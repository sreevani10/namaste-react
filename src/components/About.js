import { useContext } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
const About = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div>
      <h2>About us</h2>
      <h2>User:{loggedInUser}</h2>
      <UserClass name={"Sreevani (Class)"} location={"Adoni (Class)"} />
    </div>
  );
};

export default About;
