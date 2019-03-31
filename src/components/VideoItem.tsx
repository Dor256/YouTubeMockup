import React from "react";
import {BaseProps, ApiObject} from "./Types"
import "./VideoItem.css";

type Props = BaseProps & {
    onVideoSelect: (video: ApiObject) => void
}

const VideoItem = ({video, onVideoSelect}: Props) => {
    const onSelect = () => {
        onVideoSelect(video);
    }

    return (
        <div className="video-item item" onClick={onSelect}>
            <img className="ui image" src={video!.snippet.thumbnails.medium.url} alt={video!.snippet!.title}/>
            <div className="content">
                <div dangerouslySetInnerHTML={{__html: video!.snippet.title}} className="header"></div>
            </div>
        </div>
    );
}

export default VideoItem;