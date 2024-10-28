import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <div className={styles.friendCard}>
    <img src={avatar} alt="Avatar" width="48" className={styles.avatar} />
    <p className={styles.name}>{name}</p>
    <p
      className={`${styles.status} ${
        isOnline ? styles.online : styles.offline
      }`}
    >
      {isOnline ? 'Online' : 'Offline'}
    </p>
  </div>
);

export default FriendListItem;
