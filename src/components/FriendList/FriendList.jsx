import PropTypes from 'prop-types';
import s from './FriendList.module.css'


const FriendList = ({friends}) => {
    return (
<ul className={s.friendList}>
    {friends.map(friend => (
  <li className={s.item} key={friend.id}>
     <span className={s.status} style={friend.isOnline ? { backgroundColor: 'red' } : { backgroundColor: 'green' }}></span>
       <img className={s.avatar} src={friend.avatar} alt="" width="48" />
     <p className={s.name}>{friend.name}</p>
  </li>))}
            
</ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
    }))
}


export default FriendList
