import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async term => {
    const {
      data: { items }
    } = await youtube.getSearch(term);

    this.setState({
      videos: items
    });
  };

  onVideoSelect = video => {
    this.setState({
      selectedVideo: video
    });
  };

  render() {
    const { selectedVideo } = this.state;
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoDetail video={selectedVideo} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
