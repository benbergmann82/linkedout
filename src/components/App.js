import React, { useState, useEffect } from "react";
import SearchField from "./SearchField";
import UserDetails from "./UserDetails";
import { SunIcon } from "@heroicons/react/solid";

const App = () => {
  const getDarkMode = () => {
    const darkMode = localStorage.getItem("darkMode");
    const value = JSON.parse(darkMode);
    return value;
  }

  const [errorMsg, setErrorMsg] = useState();
  const [user, setUser] = useState();

  const [isDark, setIsDark] = useState(() => {
    return getDarkMode() || false;
  });

  const [modeText, setModeText] = useState(() => {
    return getDarkMode() ? "Light" : "Dark";
  });

  const toggleDark = () => {
    setModeText(isDark ? 'Dark' : 'Light');
    setIsDark(!isDark);
  }

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDark));
  }, [isDark])

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="dark:bg-bluegray-400 bg-secondary-100 h-screen">
        <div className="p-6 dark:text-white text-bluegray-300 dark:bg-bluegray-400 bg-secondary-100 sm:w-2/3 sm:m-auto">
          <div className="flex justify-between">
            <h1 className="uppercase text-2xl tracking-widest font-bold">linked<span className="font-light">out</span></h1>
            <button onClick={toggleDark} className="uppercase tracking-widest text-lg">{modeText} <SunIcon className="inline-block h-7 w-7" /></button>
          </div>
          <SearchField setUser={setUser} setErrorMsg={setErrorMsg} />
          <UserDetails user={user} errorMsg={errorMsg} />
        </div>
      </div>
    </div>
    
  )
}

export default App;
