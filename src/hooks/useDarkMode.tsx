import React from "react";

const useDarkMode = ({ forceDark }: { forceDark: boolean }) => {
  const [darkMode, setDarkMode] = React.useState(
    !!window.matchMedia("(prefers-color-scheme: dark)").matches || forceDark
  );

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      setDarkMode(!!mediaQuery.matches);
    };

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  return { darkMode, setDarkMode };
};

export default useDarkMode;
