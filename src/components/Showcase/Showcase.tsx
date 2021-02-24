import * as React from 'react';
import {
  StyleSheet,
  FlatList,
  Dimensions,
  Animated,
  StatusBar,
} from 'react-native';
import ShowcaseLayout from './ShowcaseLayout';
import ShowcaseItem from './ShowcaseItem';
import works from '../../lib/data/works';
import {useNavigation} from '@react-navigation/native';

//animation source:  https://www.youtube.com/watch?v=gOj4BlzYF4A

const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');

interface ShowcaseProps {}

const Showcase = (props: ShowcaseProps) => {
  const navigation = useNavigation();
  const animation = React.useRef(new Animated.Value(0)).current;
  return (
    <ShowcaseLayout>
      <StatusBar barStyle="light-content"></StatusBar>
      {works.map((e, index) => (
        <Animated.Image
          key={index}
          style={[
            StyleSheet.absoluteFill,
            {
              width: screenWidth,
              height: screenHeight,
              opacity: animation.interpolate({
                inputRange: [
                  screenWidth * (index - 1),
                  screenWidth * index,
                  screenWidth * (index + 1),
                ],
                outputRange: [0, 1, 0],
              }),
            },
          ]}
          source={typeof e.image === 'number' ? e.image : {uri: e.image}}
          resizeMode="cover"
          blurRadius={8}
        />
      ))}

      <FlatList
        horizontal
        pagingEnabled
        data={works}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: animation,
                },
              },
            },
          ],
          {useNativeDriver: false},
        )}
        renderItem={({item}) => (
          <ShowcaseItem
            id={item.id}
            name={item.name}
            image={item.image}
            onPress={() => {
              navigation.navigate(item.routeName);
            }}
          />
        )}
        keyExtractor={(_, index) => index.toString()}></FlatList>
    </ShowcaseLayout>
  );
};

export default Showcase;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'black'},
});
