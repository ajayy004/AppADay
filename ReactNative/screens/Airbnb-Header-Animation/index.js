import React from 'react';
import {View, Text} from 'react-native';
import Animated from 'react-native-reanimated';

const HEADER_HEIGHT = 70;

const dataSet = [
  {
    backgroundColor: '#d35d6e',
  },
  {
    backgroundColor: '#efb08c',
  },
  {
    backgroundColor: '#5aa469',
  },
  {
    backgroundColor: '#f8d49d',
  },
];
const AirbnbHeaderAnimation = () => {
  const scrollY = new Animated.Value(0);
  const diffclamp = Animated.diffClamp(scrollY, 0, HEADER_HEIGHT);
  const headerY = Animated.interpolate(diffclamp, {
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
  });
  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={{
          height: HEADER_HEIGHT,
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          backgroundColor: '#bedcfa',
          zIndex: 1,
          transform: [{translateY: headerY}],
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Header Animation</Text>
      </Animated.View>
      <Animated.ScrollView
        bounces={false}
        scrollEventThrottle={16}
        contentContainerStyle={{paddingTop: HEADER_HEIGHT + 10}}
        onScroll={Animated.event([
          {
            nativeEvent: {contentOffset: {y: scrollY}},
          },
        ])}>
        {dataSet.map((row, key) => (
          <View
            key={key}
            style={{
              height: 300,
              backgroundColor: row['backgroundColor'],
              margin: 20,
              borderRadius: 20,
            }}
          />
        ))}
      </Animated.ScrollView>
    </View>
  );
};

AirbnbHeaderAnimation.route = '/airbnb-header-animation';
AirbnbHeaderAnimation.title = 'Airbnb Header Animation';

export default AirbnbHeaderAnimation;
