import React, { useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';

export default function App() {
  const [imageSource, setImageSource] = useState(require('./assets/muget.jpg')); 

  const toggleImage = () => {
    setImageSource((prevImage) =>
      prevImage === require('./assets/muget.jpg')
        ? require('./assets/bookAesthetic.jpg') 
        : require('./assets/muget.jpg') 
    );
  };

  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <Button title="toggle" onPress={toggleImage} color="orchid" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

