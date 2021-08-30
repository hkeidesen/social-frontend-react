import './rightbar.css';
import { Users } from '../../dummyData'
import Online from '../online/Online';

export default function Rightbar({profile}) {

    const HomeRightbar = () =>{
        return(
            <>
            <div className="birthdayContainer">
                    <img className="birthdayImg"src="/assets/gift.png" alt="" />
                    <span className="birthdayText">
                        
                        <b>Name</b> and <b>2 other friends</b> have birthday today.
                    </span>
                </div>
                <img className="rightbarAd" src="/assets/ad.png" alt=""/>
                <h4 className="rightbarTitle">Online friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u=>(
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return(
            <>
            <h4 className="rightbarTitle">User information title</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City: </span>
                    <span className="rightbarInfoValue">Trondheim </span>
                </div>

                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From: </span>
                    <span className="rightbarInfoValue">Tromsø </span>
                </div>

                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship: </span>
                    <span className="rightbarInfoValue">GF </span>
                </div>
            </div>
            <h4 className="rightbarTitle">User information friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="assets/person/1.jpeg" alt="" />
                    <span className="rightbarFollowingName">Jimmy Kimmel</span>
                </div>

                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="assets/person/2.jpeg" alt="" />
                    <span className="rightbarFollowingName">Jimmy Kimmel 2</span>
                </div>

                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="assets/person/3.jpeg" alt="" />
                    <span className="rightbarFollowingName">Jimmy Kimmel 3</span>
                </div>

                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="assets/person/4.jpeg" alt="" />
                    <span className="rightbarFollowingName">Jimmy Kimmel 4</span>
                </div>

                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="assets/person/5.jpeg" alt="" />
                    <span className="rightbarFollowingName">Jimmy Kimmel 5</span>
                </div>

                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="assets/person/6.jpeg" alt="" />
                    <span className="rightbarFollowingName">Jimmy Kimmel 6</span>
                </div>
            </div>

            </>
        )
    }
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                {profile? <ProfileRightbar/> : <HomeRightbar/>} 
            </div>
        </div>
    )
}