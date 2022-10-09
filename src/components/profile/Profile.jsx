import PropTypes from 'prop-types';
import {ProfileSection , DescriptionBlock, Image , Description, StatsList, StatsItem, Label, Quantity} from './Profile.styled'

export default function Profile(props){
  const {username, tag, location, avatar, stats} = props
  return <ProfileSection>
  <DescriptionBlock>
    <Image
      src={avatar}
      alt="User avatar"
      class="avatar"
    />
    <Description>{username}</Description>
    <Description>{tag}</Description>
    <Description>{location}</Description>
  </DescriptionBlock>

  <StatsList>
    <StatsItem>
      <Label>Followers</Label>
      <Quantity>{stats.followers}</Quantity>
    </StatsItem>
    <StatsItem>
      <Label>Views</Label>
      <Quantity>{stats.views}</Quantity>
    </StatsItem>
    <StatsItem>
      <Label>Likes</Label>
      <Quantity>{stats.likes}</Quantity>
    </StatsItem>
  </StatsList>
</ProfileSection>
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }
  )
}