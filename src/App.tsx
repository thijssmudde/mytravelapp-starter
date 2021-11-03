import React from "react";
// import { Button } from "tappui";
// import classNames from "classnames";
import { useWindowWidth } from "@react-hook/window-size";
import useDarkMode from "./hooks/useDarkMode";

const App = () => {
  const { darkMode } = useDarkMode({ forceDark: false });
  const windowWidth = useWindowWidth();

  return <div>Hello MyTravelApp</div>;
};

export default App;
