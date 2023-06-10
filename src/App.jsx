import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import "./App.css";
import { GET_GREETING } from "./queries";

function App() {
  const {
    loading,
    error,
    data: { greeting = "" } = {},
  } = useQuery(GET_GREETING);
  return (
    <div className="App">
      <h1>GraphQL</h1>
      <div className="card">{greeting}</div>
    </div>
  );
}

export default App;
