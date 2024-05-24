import React from "react";

const Music = () => {
  const playlistId = "1aSkn0FUPiR3rQoWzNqFBQ";
  return (
    <div className="spotify">
      <iframe
        customStyle="border-radius:12px"
        src="https://open.spotify.com/embed/playlist/6qa2IjTQjUUvOeiOmyvgJ6?utm_source=generator&theme=0"
        width="579px"
        height='156px'
        style={{
    
          borderRadius: "20px",
          boxShadow: "10px -2px 20px 2px rgba(86, 92, 87, 0.17)", 
        }}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
      {/* <iframe
        title="Spotify Embed: Recommendation Playlist "
        src={`https://open.spotify.com/embed/playlist/1aSkn0FUPiR3rQoWzNqFBQ?utm_source=generator&theme=0`}
        width="100%"
        height="100%"
        style={{ minHeight: "360px" }}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      /> */}
    </div>
  );
};

export default Music;
