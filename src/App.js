import React, { useEffect, useRef } from "react";
import Header from "./components/Header";
// Components
import Landing from "./components/Landing";
import Preloader from "./components/Preloader";

const App = () => {
  const preloader = useRef();

  useEffect(() => {
    preloader.current.remove();
  }, []);

  return (
    <>
      <div ref={preloader}>
        <Preloader />
      </div>
      <div className="container">
        <Header />
        <Landing />
      </div>
    </>
  );
};

export default App;
