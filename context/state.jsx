"user client";

import { useEffect, useReducer } from "react";
import context from "./context";
import { reducer } from "./reducer";

const inisialState = {
  allData: [],
};

console.log(inisialState);

const data = fetch("https://api.shope.com.bd/api/v1/public/hero-categories")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    return data;
  });

const State = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, inisialState);

  useEffect(() => {
    dispatch({ type: "data", payload: data });
    console.log(data); // output the fetched data here.
  }, []);
  return <context.Provider value={{ ...state }}>{children}</context.Provider>;
};

export default State;
