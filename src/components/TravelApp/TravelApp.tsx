import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  Animated,
} from 'react-native';
import TravelAppLayout from './TravelAppLayout';
import Badge from './Badge';
import DaysBadge from './DaysBadge';

const {width: screenWidth} = Dimensions.get('screen');
const ITEM_WIDTH = 280;
const ITEM_HEIGHT = 400;
const ITEM_SPACE = 24;

interface TravelAppProps {}

const data = [
  {
    id: 1,
    location: 'FRANCE PARIS',
    image: 'https://tabularaisa.com/wp-content/uploads/2015/12/eiffel.jpg',
    days: 3,
    departureDate: '2020-10-9',
    arrivalDate: '2020-10-14',
  },
  {
    id: 2,
    location: 'JAPAN KUROKAWA ONSEN',
    image:
      'data:image/jpeg;base64,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',
    days: 3,
    departureDate: '2020-01-15',
    arrivalDate: '2020-01-18',
  },
  {
    id: 3,
    location: 'FRANCE PARIS',
    image: 'https://tabularaisa.com/wp-content/uploads/2015/12/eiffel.jpg',
    days: 7,
    departureDate: '2020-10-9',
    arrivalDate: '2020-10-14',
  },
];

const TravelApp = (props: TravelAppProps) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <TravelAppLayout>
      <TravelAppLayout.Header />
      <TravelAppLayout.Main>
        <Text style={styles.sectionTitle}>TRIPS</Text>
        <Animated.FlatList
          contentContainerStyle={{paddingLeft: 24, paddingRight: 24}}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={ITEM_WIDTH + ITEM_SPACE}
          decelerationRate="fast"
          ItemSeparatorComponent={() => (
            <View style={{width: ITEM_SPACE}}></View>
          )}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: true,
            },
          )}
          data={data}
          renderItem={({item, index}) => (
            <View
              style={{
                width: ITEM_WIDTH,
                height: ITEM_HEIGHT,
                borderRadius: 18,
                padding: 16,
                overflow: 'hidden',
              }}>
              <Image
                style={[StyleSheet.absoluteFill]}
                source={{uri: item.image}}
                resizeMode="cover"></Image>
              <Animated.Text
                style={{
                  fontSize: 40,
                  fontWeight: 'bold',
                  color: 'white',
                  opacity: scrollX.interpolate({
                    inputRange: [
                      304 * (index - 1),
                      304 * (index - 0.3),
                      304 * index,
                    ],
                    outputRange: [0, 0.2, 1],
                  }),
                  transform: [
                    {
                      translateX: scrollX.interpolate({
                        inputRange: [
                          (ITEM_WIDTH + ITEM_SPACE) * (index - 1),
                          (ITEM_WIDTH + ITEM_SPACE) * (index + 1),
                        ],
                        outputRange: [
                          ITEM_WIDTH + ITEM_SPACE,
                          -(ITEM_WIDTH + ITEM_SPACE),
                        ],
                      }),
                    },
                  ],
                }}>
                {item.location}
              </Animated.Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-end',
                }}>
                <DaysBadge days={item.days}></DaysBadge>
              </View>
            </View>
          )}
          ListFooterComponent={() => (
            <View
              style={{
                width: screenWidth - ITEM_WIDTH - 48,
                height: 400,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  color: '#777',
                }}>
                SEE ALL
              </Text>
            </View>
          )}></Animated.FlatList>
      </TravelAppLayout.Main>
      <TravelAppLayout.Footer />
    </TravelAppLayout>
  );
};

export default TravelApp;

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 24,
    marginBottom: 24,
  },
});
