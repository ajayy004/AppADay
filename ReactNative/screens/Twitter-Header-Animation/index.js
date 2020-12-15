import React, {useRef} from 'react';
import {View, Text, ScrollView, Animated} from 'react-native';

const HEADER_MAX_HEIGHT = 220;
const HEADER_MIN_HEIGHT = 60;
const PROFILE_IMAGE_MAX_HIGHT = 80;
const PROFILE_IMAGE_MIN_HIGHT = 40;

const TwitterHeaderAnimation = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });
  const headerZindex = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  const profileImageHeight = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [PROFILE_IMAGE_MAX_HIGHT, PROFILE_IMAGE_MIN_HIGHT],
    extrapolate: 'clamp',
  });
  const profileImageMargin = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [
      HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HIGHT / 2,
      HEADER_MAX_HEIGHT + 5,
    ],
    extrapolate: 'clamp',
  });
  const headerTitleBottom = scrollY.interpolate({
    inputRange: [
      HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HIGHT,
      HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HIGHT + 20,
    ],
    outputRange: [-20, 5],
    extrapolate: 'clamp',
  });
  const headerTitleOpacity = scrollY.interpolate({
    inputRange: [
      HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + PROFILE_IMAGE_MIN_HIGHT + 20,
      HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HIGHT + 20,
    ],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: '#90e0ef',
          height: headerHeight,
          zIndex: headerZindex,
          alignItems: 'center',
        }}>
        <Animated.View
          style={{
            position: 'absolute',
            bottom: headerTitleBottom,
            opacity: headerTitleOpacity,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              paddingLeft: 10,
              color: 'white',
            }}>
            John
          </Text>
        </Animated.View>
      </Animated.View>
      <ScrollView
        scrollEventThrottle={16}
        style={{flex: 1}}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollY,
                },
              },
            },
          ],
          {useNativeDriver: !true},
        )}>
        <Animated.View
          style={{
            height: profileImageHeight,
            width: profileImageHeight,
            borderRadius: PROFILE_IMAGE_MAX_HIGHT / 2,
            borderWidth: 3,
            borderColor: 'white',
            overflow: 'hidden',
            marginLeft: 10,
            marginTop: profileImageMargin,
          }}>
          <View
            style={{
              backgroundColor: '#023e8a',
              height: null,
              width: null,
              flex: 1,
            }}
          />
        </Animated.View>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 26, paddingLeft: 10}}>
            John
          </Text>
        </View>
        <View style={{height: 1000}} />
      </ScrollView>
    </View>
  );
};

TwitterHeaderAnimation.name = '/twitter-header-animation';
TwitterHeaderAnimation.title = 'Twitter Header Animation';

export default TwitterHeaderAnimation;
