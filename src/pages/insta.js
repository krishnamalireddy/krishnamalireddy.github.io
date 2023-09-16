import React, { useEffect, useState } from 'react';

function InstagramProfile() {
  const [userData, setUserData] = useState(null);
  const accessToken = ''; // Replace with your Instagram Graph API access token

  useEffect(() => {
    // Fetch the Instagram user data with follower and following counts
    fetch(`https://graph.instagram.com/v12.0/me?fields=username,biography,followers_count,follows_count&access_token=${accessToken}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error('Error fetching Instagram data:', error);
      });
  }, [accessToken]);

  return (
    <div className="instagram-profile">
      {userData ? (
        <div>
          <h2>{userData.username}</h2>
          <p>{userData.biography}</p>
          <p>Followers: {userData.followers_count}</p>
          <p>Following: {userData.follows_count}</p>
          <a
            href={`https://www.instagram.com/${userData.username}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow on Instagram
          </a>
        </div>
      ) : (
        <p>Loading Instagram data...</p>
      )}
    </div>
  );
}

export default InstagramProfile;
