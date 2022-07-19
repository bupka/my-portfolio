import React, { useState, useEffect } from "react";
import Topnav from "./top-nav/Topnav";
import Bottomnav from "./bottum-nav/Bottomnav";

function Navbar() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 600);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 600);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return <div>{isDesktop ? <Topnav /> : <Bottomnav />}</div>;
}

export default Navbar;
