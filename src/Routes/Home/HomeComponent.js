import React, { Component } from "react";
import HomePresenter from "./HomePresenter";
import YTSearch from "youtube-api-search";
import Search from "../Search";

const API_KEY = "AIzaSyDOPN-M5AEu4kEoXqwRqGmleX6TMUhSm2Q";

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch("");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term }, videos => {
      this.setState({ videos: videos, selectedVideo: videos[0] });
    });
  }

  render() {
    const { videos, selectedVideo } = this.state;
    return (
      <>
        <HomePresenter />
        <Search
          onSearchTermChange={this.videoSearch}
          videos={videos}
          selectedVideo={selectedVideo}
        />
      </>
    );
    // <HomePres>{ adas ? <Search />: }  <HomePres /> 이런식으로 구현 혹은 map.
  }
}
