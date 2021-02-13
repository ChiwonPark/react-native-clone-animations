import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');

interface ShowcaseItemProps {
  id: number;
  name: string;
  image: string;
  onPress: () => void;
}

const ShowcaseItem = ({id, name, image, onPress}: ShowcaseItemProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.card} source={{uri: image}}></Image>
        <Text style={styles.title}>{name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ShowcaseItem;

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 260,
    height: 400,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    overflow: 'hidden',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
});
