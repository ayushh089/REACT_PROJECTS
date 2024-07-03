import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div className="text-white">No user</div>;
  return <div className="text-white">Welcome : {user.username}</div>;
}

export default Profile;
