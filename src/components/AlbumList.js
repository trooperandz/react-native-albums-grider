
import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: [],
    };
  }

  componentDidMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => {
        console.log('response: ', response.data);
        this.setState({ albums: response.data })
      });
  }

  renderAlbums() {
    const { albums } = this.state;

    if (!albums.length) return <Text>Albums loading...</Text>;

    return albums.map((album) => {
      const { title } = album;

      return <AlbumDetail key={title} album={album} />;
    });
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
