import './post.css'
import { More, MoreVert } from '@material-ui/icons'

export default function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop"></div>
                    <div className="postTopLeft">
                        <img 
                            className = "postProfileImg" 
                            src="/assets/person/1.jpeg" 
                            alt=""/>
                        <span className="postUsername">HK</span>
                        <span className="postDate">5 minutes ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                <div className="postCenter"></div>
                    <span className="postText">Heeey!</span>
                    <img className ="postImg" src="/assets/post/5.jpeg" alt="" />

                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className = "likeIcon" src="assets/like.png" alt="" />
                        <img className = "likeIcon" src="assets/heart.png" alt="" />
                        <span className="postLikeCounter">
                            32 people like it
                        </span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
