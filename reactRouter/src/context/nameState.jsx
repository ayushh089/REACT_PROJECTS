import NameContext from "./nameContext";

const NameState = (props) => {
  const state = {
    userName: "Ayush",
  };
  return <NameContext.Provider value={state}>{props.children}</NameContext.Provider>;
};
export default NameState