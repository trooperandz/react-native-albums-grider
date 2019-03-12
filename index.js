
import React from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => {
  const { viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Header headerText='Albums' />
      <AlbumList />
    </View>
  );
}

const styles = {
  viewStyle: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
  },
};

AppRegistry.registerComponent('albums', () => App);
