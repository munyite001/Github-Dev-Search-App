import React from "react";
import { useState } from "react";

export default function Search(props)
{
    const [username, setUsername] = useState('');

    function getUserData() {
        fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then((data) => {
            if (!data.hasOwnProperty("message") && data.message !== "Not Found") {
              props.setUserInfo(data);
            } else {
              // Handle the case where the response is not valid
              console.log("Invalid response:", data);
            }
          })
    }

    function handleChange(event) {
        setUsername(event.target.value);
    }

    return (
        <div className="search-box" style={props.style}>
        <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
        <div className="input-box">
            <label htmlFor="name">
                <input type="text" placeholder="Search Github username..." onChange={handleChange}/>
            </label>
        </div>
        <button onClick={getUserData}>Search</button>
        </div>
    )
}