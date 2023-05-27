import React from "react";

export default function Search(props)
{
    return (
        <div className="search-box" style={props.style}>
        <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
        <div className="input-box">
            <label htmlFor="name">
                <input type="text" placeholder="Search Github username..."/>
            </label>
        </div>
        <button>Search</button>
        </div>
    )
}