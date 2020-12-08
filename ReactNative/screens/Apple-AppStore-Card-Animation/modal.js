import React, {useRef} from 'react';
import {View, Button, Animated, Dimensions, Easing} from 'react-native';

const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window');

import {useHeaderHeight} from '@react-navigation/stack';

export default ({app, position, onClose}) => {
  const headerHeight = useHeaderHeight();
  const width = useRef(new Animated.Value(position.width)).current;
  const height = useRef(new Animated.Value(position.height)).current;
  const x = useRef(new Animated.Value(position.x)).current;
  const y = useRef(new Animated.Value(position.y - headerHeight)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;
  const titleTranslateY = useRef(new Animated.Value(0)).current;

  const duration = 350;

  React.useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: duration / 5,
      useNativeDriver: false,
    }).start();

    Animated.parallel([
      Animated.timing(textOpacity, {
        toValue: 1,
        delay: duration / 5,
        duration: 0,
        useNativeDriver: false,
        easing: Easing.out(Easing.ease),
      }),
      Animated.timing(x, {
        toValue: 0,
        duration,
        useNativeDriver: false,
        easing: Easing.out(Easing.ease),
      }),
      Animated.timing(y, {
        toValue: 0,
        duration,
        useNativeDriver: false,
        easing: Easing.out(Easing.ease),
      }),
      Animated.timing(width, {
        toValue: deviceWidth,
        duration,
        useNativeDriver: false,
        easing: Easing.out(Easing.ease),
      }),
      Animated.timing(height, {
        toValue: deviceHeight,
        duration,
        useNativeDriver: false,
        easing: Easing.out(Easing.ease),
      }),
      Animated.timing(titleTranslateY, {
        toValue: 80,
        duration,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }),
    ]).start();
  });

  const _onClose = () => {
    Animated.parallel([
      Animated.timing(textOpacity, {
        toValue: 0,
        delay: duration / 5,
        duration: 0,
        useNativeDriver: false,
        easing: Easing.out(Easing.ease),
      }),
      Animated.timing(x, {
        toValue: position.x,
        duration,
        useNativeDriver: false,
        easing: Easing.out(Easing.ease),
      }),
      Animated.timing(y, {
        toValue: position.y - headerHeight,
        duration,
        useNativeDriver: false,
        easing: Easing.out(Easing.ease),
      }),
      Animated.timing(width, {
        toValue: position.width,
        duration,
        useNativeDriver: false,
        easing: Easing.out(Easing.ease),
      }),
      Animated.timing(height, {
        toValue: position.height,
        duration,
        useNativeDriver: false,
        easing: Easing.out(Easing.ease),
      }),
      Animated.timing(titleTranslateY, {
        toValue: 0,
        duration,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }),
    ]).start(({finished}) => {
      if (finished) {
        onClose();
      }
    });
  };
  return (
    <Animated.View
      style={{
        opacity,
        flex: 1,
        height,
        width,
        position: 'absolute',
        top: y,
        left: x,
        right: 0,
        backgroundColor: 'white',
      }}>
      <View>
        <Animated.View style={[{...app, width, margin: 0}]}>
          <Animated.Text
            style={{
              fontSize: 26,
              fontWeight: '500',
              padding: 10,
              transform: [{translateY: titleTranslateY}],
            }}>
            Hello
          </Animated.Text>
        </Animated.View>
        <Animated.Text style={{opacity: textOpacity}}>
          What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
          and typesetting industry Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s when an unknown printer took a galley
          of type and scrambled it to make a type specimen book it has?
        </Animated.Text>
        <Animated.View style={{opacity: textOpacity}}>
          <Button onPress={_onClose} title="Close" />
        </Animated.View>
      </View>
    </Animated.View>
  );
};
