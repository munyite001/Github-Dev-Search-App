import React from "react";

export default function UserDetails(props)
{
    function formatDate(dateString)
    {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = date.toLocaleString("default", { month: "short" });
        const day = date.getDate();

        const formattedDate = `${year} ${month} ${day}`;

        return formattedDate;
    }

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
                        <p>Joined {formatDate(props.userInfo.created_at)}</p>
                    </div>
                </div>
            </div>
            <div className="description">
                <p>{props.userInfo.bio===""?"This profile has no description":props.userInfo.bio}</p>
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
                    <p>{props.userInfo.location===""?"Not Available":props.userInfo.location}</p>
                </div>
                <div className="link">
                    <i class="fa-solid fa-link"></i>
                    <p>{props.userInfo.blog===""?"Not Available":props.userInfo.blog}</p>
                </div>
                <div className="link">
                    <i class="fa-brands fa-twitter"></i>
                    <p>{props.userInfo.twitter_username === "" ? "Not Available" : props.userInfo.twitter_username}</p>
                </div>
                <div className="link">
                    <i class="fa-solid fa-building"></i>
                    <p>{props.userInfo.company === ""? "Not Available" :props.userInfo.company}</p>
                </div>
            </div>
        </div>
    )
}