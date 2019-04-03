import React from "react";
import VideoItem from "./VideoItem";
import { ApiObject } from "./Types";

type Props = {
    videos: ApiObject[]
    onVideoSelect: (video: ApiObject) => void
}

const VideoList = ({videos, onVideoSelect}: Props) => {
    const renderedList = videos.map((video) => {
        return <VideoItem key={video!.id.videoId} video={video} onVideoSelect={onVideoSelect}/>
    });

    return <div className="ui relaxed divided list">{renderedList}</div>;
}

export default VideoList;