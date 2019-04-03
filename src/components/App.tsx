import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube"
import { AxiosResponse } from "axios";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import { ApiObject } from "./Types";

type Props = {}

type State = {
    videos: Array<ApiObject>
    selectedVideo: ApiObject
}

class App extends React.Component<Props, State> {
    state = {videos: [], selectedVideo: null};

    onTermSubmit = (term: string): void => {
        youtube.get("/search", {
            params: {
                q: term
            }
        }).then((response: AxiosResponse) => {
            this.setState({
                videos: response.data.items,
                selectedVideo: response.data.items[0]
            });
        });
    }

    onVideoSelect = (video: ApiObject) => {
        this.setState({selectedVideo: video});
    }

    componentDidMount() {
        this.onTermSubmit("Gordon Ramsay");
    }

    render() {
        return (
        <div className="ui container" style={{marginTop: "10px"}}>
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default App;