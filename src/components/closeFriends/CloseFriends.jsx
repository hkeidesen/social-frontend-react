import  './closeFriends.css'
// import { Users } from '../../dummyData'

export default function CloseFriends({user}) {
    return (
        <li className="leftbarFriend">
            <img className='leftbarFriendImg' src={user.profilePicture} alt="" />
            <span className='leftbarFriendName'>{user.username}</span>
        </li>
    )
}
