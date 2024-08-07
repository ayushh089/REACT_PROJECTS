import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NameContext from "../../context/nameContext";
import { useContext } from "react";
function Github() {
  const data = useLoaderData();
  const name = useContext(NameContext);
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch(`https://api.github.com/users/${username}`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setData(data);
  //       });
  //   }, [setData]);
  return (
    <div className="bg-gray-600 text-white text-3xl p-4 text-center">
      GitHub Followers : {name.userName} have {data.followers}
      <img src={data.avatar_url} width={200} />
    </div>
  );
}

export default Github;

export const gitHubInfoLoader = async () => {
  const result = await fetch("https://api.github.com/users/ayushh089");
  return result.json();
};
