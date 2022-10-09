import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import {FriendInventory} from './FriendList.styled'

export default function FriendList({friends}) {
  return (
    <FriendInventory>
      {friends.map(friend => 
        <FriendListItem 
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          />)}
    </FriendInventory>
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })),
}