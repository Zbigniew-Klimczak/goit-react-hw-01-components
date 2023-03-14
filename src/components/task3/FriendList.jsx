import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem.jsx';
export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friendItem={friend} />
      ))}
    </ul>
  );
};
FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
