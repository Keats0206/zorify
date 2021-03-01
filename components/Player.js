import styles from "@styles/components/Player.module.scss"; // Component styles

export default function Player({
  creatorAddress,
  ownerAddress,
  createdAtTimestamp,
  mimeType,
  contentURI,
  name,
  ...props
}) {
  return (
   <div className={styles.player}>
       <div className={styles.player_media}>
                {mimeType.startsWith("image") ? (
                // If content-type === image, return img component
                <img src={contentURI} alt={name} />
                ) : mimeType.startsWith("text") ? (
                // If content-type === text, inject text
                <span>{contentURI}</span>
                ) : mimeType.startsWith("audio") ? (
                // If content-type === audio, return audio component
                <audio controls>
                    <source src={contentURI} type={mimeType} />
                </audio>
                ) : mimeType.startsWith("video") ? (
                // Else, if nothing else, return video component
                <video autoPlay playsInline loop>
                    <source src={contentURI} type={mimeType} />
                </video>
                ) : mimeType === "" ? (
                // If no media is uploaded (useful for /create)
                <span className={styles.showcase__unsupported}>
                    No media uploaded.
                </span>
                ) : (
                // Else, if unsupported mimeType
                <span className={styles.showcase__unsupported}>
                    Unsupported file type ({mimeType}). <br />
                    <a href={contentURI} target="_blank" rel="noopener noreferrer">
                    Direct link
                    </a>
                    .
                </span>
            )}
       </div>
       <div className={styles.player_right}>
       <div className={styles.player_mediaInfo}>
            <h1>{name}</h1>
            <p>Created by: {creatorAddress}}</p>
            <p>Owned by: {ownerAddress}</p>                   
        </div>
        <div className={styles.player_controls}>
            <button 
                className={styles.player_button_black}
            >Play</button>
            <button 
                className={styles.player_button_black}
                onClick={console.log("next song")}
            >Next</button>
            <button 
                className={styles.player_link}
                onClick={console.log("open")}
            >Bid</button>
           </div>
       </div>
   </div>
  );
}