import React from "react";
import "./css/main.css";
import useWindowSize from "./hooks/useWindowSize";
import Landing from "./components/Landing";
import Detail from "./components/Detail";
import HelpnTips from "./components/HelpnTips";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import Header from "./components/Header";

function App1() {
  const width = useWindowSize();
  return (
    <>
      <Header />
      <Landing width={width} />
      <Testimonial width={width} />
      <Detail />
      <HelpnTips width={width} />
      <Footer />
    </>
  );
}

export default App1;
