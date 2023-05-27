import React from "react";

export default function UserDetails(props)
{
    return (
        <div className="user-details" style={props.style}>
            <div className="top-row">
                <div className="profile-image-container">
                    <img src={props.userInfo.avatar_url} alt="profile pic"/>
                </div>
                <div className="user-intro-text">
                    <div className="user-name">
                        <h3 style={{color:props.theme === "light" ? "#2B3442":"#FFF"}}>{props.userInfo.name}</h3>
                        <p style={{color:"#0079FF"}}>{props.userInfo.login}</p>
                    </div>
                    <div className="join-date">
                        <p>Joined {props.userInfo.created_at}</p>
                    </div>
                </div>
            </div>
            <div className="description">
                <p>{props.userInfo.bio}</p>
            </div>
            <div className="user-stats" 
            style={{backgroundColor: props.theme==="light"?"#F6F8FF":"#141D2F"}}>
                <div className="stats">
                    <h4>Repos</h4>
                    <p>{props.userInfo.public_repos}</p>
                </div>
                <div className="stats">
                    <h4>Followers</h4>
                    <p>{props.userInfo.followers}</p>
                </div>
                <div className="stats">
                    <h4>Following</h4>
                    <p>{props.userInfo.following}</p>
                </div>
            </div>
            <div className="user-links">
                <div className="link">
                    <i class="fa-sharp fa-solid fa-location-dot"></i>
                    <p>{props.userInfo.location}</p>
                </div>
                <div className="link">
                    <i class="fa-solid fa-link"></i>
                    <p>{props.userInfo.blog}</p>
                </div>
                <div className="link">
                    <i class="fa-brands fa-twitter"></i>
                    <p>{props.userInfo.twitter_username}</p>
                </div>
                <div className="link">
                    <i class="fa-solid fa-building"></i>
                    <p>{props.userInfo.company}</p>
                </div>
            </div>
        </div>
    )
}