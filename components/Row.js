import styles from "@styles/components/Row.module.scss"; // Component styles
import makeBlockie from "ethereum-blockies-base64"; // Ethereum avatar
import PlayArrow from '@material-ui/icons/PlayArrow'

export default function Row({
  post,
  assetId,
  creatorAddress,
  ownerAddress,
  createdAtTimestamp,
  mimeType,
  contentURI,
  name,
  getPost,
  ...props
}) {

  const handleClick = () => getPost(post);

  return (
   <div className={styles.row}>
        <div className={styles.row_image}>
            <img src={makeBlockie(creatorAddress)} alt="Avatar" />
        </div>
        <div className={styles.row_info}>
            <h3>{name}</h3>
            <p>by {creatorAddress}</p>
        </div>
        <div className={styles.row_duration}>
            3:33
        </div>
        <div className={styles.row_icon}>
          <PlayArrow 
            fontSize="large" 
            onClick={handleClick}
          />
        </div>
   </div>
  );
}