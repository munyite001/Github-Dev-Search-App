import { useState } from "react";
import React from "react";
import Search from "./components/Search";
import UserDetails from "./components/UserDetails";

export default function App()
{
  //  Themes
  const [theme, setTheme] = useState("light")

  const themes = {
    light: {
      backgroundColor: "white",
      color: "#4B6A9B"
    },
    dark: {
      backgroundColor: "#1E2A47",
      color: "#fff"
    }
  }

  const containerStyles = {
    backgroundColor:theme === "light" ? "#fff" : "#141c2f",
    color:theme === "light"?"#4B6A9B":"#fff"
  }

  const componentStyles = {
    ...themes[theme],
    boxShadow:theme === "light" ? "0 2px 5px #ccc":""
  }

  //  Function to change theme
  function switchTheme()
  {
    setTheme((prev) => {
      return prev === "light" ? "dark" : "light";
    })
  }
  return (
    <main style={containerStyles}>
      <div className="title">
        <h3 style={{color:theme === "light"?"#222731":"#FFF"}}>devfinder</h3>
        <div className="theme-switcher">
          <p onClick={switchTheme}>
            {theme === "light"?"dark":"light"}
            {theme === "light" && <i class="fa-solid fa-moon"></i>}
            {theme === "dark" && <i class="fa-solid fa-sun"></i>}
          </p>
        </div>
      </div>
      <Search style={componentStyles}/>
      <UserDetails style={componentStyles} theme={theme}/>
    </main>
  )
}