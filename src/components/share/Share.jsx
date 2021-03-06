import './share.css'
import { PermMedia, Label, Room, EmojiEmotions} from '@material-ui/icons'

export default function Share() {
    return (
        <div>
            <div className="share">
                <div className="shareWrapper">
                    <div className="shareTop">
                        <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
                            <input 
                                placeholder="What are you thoonking aboot?" 
                                className="shareInput"/>
                    </div>
                    <hr className="shareHr"></hr>
                    <div className="shareBottom">
                        <div className="shareOptions">
                            <div className="shareOption">
                                <PermMedia htmlColor="tomato" className="shareIcon"/>
                                <span className="shareOptionText">Photo or video</span>
                            </div>

                            <div className="shareOption">
                                <Label htmlColor="pink" className="shareIcon"/>
                                <span className="shareOptionText">Tag</span>
                            </div>

                            <div className="shareOption">
                                <Room htmlColor="lightblue" className="shareIcon"/>
                                <span className="shareOptionText">Location</span>
                            </div>

                            <div className="shareOption">
                                <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                                <span className="shareOptionText">Feelings</span>
                            </div>                        
                            <button className="shareButton">Share</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
