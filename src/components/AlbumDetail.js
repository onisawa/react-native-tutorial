import React from 'react';
import { Text } from 'react-native';
import Card from './Card';

const AlbumDetail = ({ album }) => {
  const { title } = album;
  return (
    <Card>
      <Text>{title}</Text>
    </Card>
  );
};

export default AlbumDetail;
