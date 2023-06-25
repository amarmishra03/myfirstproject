import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Search } from "./components";
import Allroutes from "./components/Allroutes";
const App = () => {
  return (
    <>
      <Search />
      <Allroutes />
    </>
  );
};

export default App;
