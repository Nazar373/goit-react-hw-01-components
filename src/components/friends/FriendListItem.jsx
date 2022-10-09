import PropTypes from 'prop-types';
import { Item, OfflineStatus, OnlineStatus, Name} from './FriendListItem.styled';

export default function FriendListItem(props) {
  const {avatar, name, isOnline} = props;
  return (
    <Item>
      {isOnline ? <OnlineStatus></OnlineStatus> : <OfflineStatus></OfflineStatus>}
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}