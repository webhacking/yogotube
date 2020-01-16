import React, { Component } from "react";
import SearchPresenter from "./SearchPresenter";

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };
  }

  onSubmit(e) {
    e.preventDefault();
    const { term } = this.state;
    this.props.onSearchTermChange(term);
    this.setState({
      term: ""
    });
  }

  onChange(e) {
    const {
      target: { value }
    } = e;

    this.setState({
      term: value
    });
  }

  render() {
    const { term } = this.state;
    const { videos, selectedVideo } = this.props;
    return (
      <SearchPresenter
        onSubmit={this.onSubmit.bind(this)}
        onChange={this.onChange.bind(this)}
        term={term}
        videos={videos}
        selectedVideo={selectedVideo}
      />
    );
  }
}
