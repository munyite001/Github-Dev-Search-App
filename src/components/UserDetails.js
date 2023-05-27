import React from "react";


export default function UserDetails(props)
{
    return (
        <div className="user-details" style={props.style}>
            <div className="top-row">
                <div className="profile-image-container">
                    <img src={require("../images/Bitmap.png")} alt="Placeholder"/>
                </div>
                <div className="user-intro-text">
                    <div className="user-name">
                        <h3 style={{color:props.theme === "light" ? "#2B3442":"#FFF"}}>The Octocat</h3>
                        <p style={{color:"#0079FF"}}>@octocat</p>
                    </div>
                    <div className="join-date">
                        <p>Joined 25 Jan 2011</p>
                    </div>
                </div>
            </div>
            <div className="description">
                <p>
                    Lorem ipsum dolor sit amet, 
                    consectetuer adipiscing elit. 
                    Donec odio. Quisque volutpat mattis eros.
                </p>
            </div>
            <div className="user-stats" 
            style={{backgroundColor: props.theme==="light"?"#F6F8FF":"#141D2F"}}>
                <div className="stats">
                    <h4>Repos</h4>
                    <p>8</p>
                </div>
                <div className="stats">
                    <h4>Followers</h4>
                    <p>3938</p>
                </div>
                <div className="stats">
                    <h4>Following</h4>
                    <p>9</p>
                </div>
            </div>
            <div className="user-links">
                <div className="link">
                    <i class="fa-sharp fa-solid fa-location-dot"></i>
                    <p>San Fransisco</p>
                </div>
                <div className="link">
                    <i class="fa-solid fa-link"></i>
                    <p>Blog</p>
                </div>
                <div className="link">
                    <i class="fa-brands fa-twitter"></i>
                    <p>Twitter</p>
                </div>
                <div className="link">
                    <i class="fa-solid fa-building"></i>
                    <p>Organization</p>
                </div>
            </div>
        </div>
    )
}