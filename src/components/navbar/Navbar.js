import React, { useState, useEffect } from "react";
import Topnav from "./top-nav/Topnav";
import Bottumnav from "./bottum-nav/Bottumnav";

function Navbar() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 500);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 500);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return <div>{isDesktop ? <Topnav /> : <Bottumnav />}</div>;
}

export default Navbar;
