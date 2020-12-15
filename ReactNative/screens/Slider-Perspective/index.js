import React, {useRef, useState} from 'react';
import {View, Text, Animated, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SliderPerspective = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [toValue, setToValue] = useState(1);

  const _onPress = () => {
    setToValue(toValue === 0 ? 1 : 0);
    Animated.timing(animatedValue, {
      toValue,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.sliderContainer,
          StyleSheet.absoluteFillObject,
          {
            backgroundColor: animatedValue.interpolate({
              inputRange: [0, 0.5, 0.501, 1],
              outputRange: ['#f05454', '#f05454', '#34626c', '#34626c'],
            }),
          },
        ]}>
        <Animated.View
          style={[
            styles.btn,
            {
              backgroundColor: animatedValue.interpolate({
                inputRange: [0, 0.5, 0.501, 1],
                outputRange: ['#34626c', '#34626c', '#f05454', '#f05454'],
              }),
            },
            {perspective: 200},
            {
              transform: [
                {
                  rotateY: animatedValue.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: ['0deg', '-90deg', '-180deg'],
                  }),
                },
                {
                  scale: animatedValue.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [1, 8, 1],
                  }),
                },
                {
                  translateX: animatedValue.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: ['0%', '100%', '0%'],
                  }),
                },
              ],
            },
          ]}>
          <TouchableOpacity onPress={_onPress}>
            <Animated.View
              style={[
                styles.btn1,
                {
                  transform: [
                    {
                      scale: animatedValue.interpolate({
                        inputRange: [0, 0.05, 0.5, 1],
                        outputRange: [1, 0, 0, 1],
                      }),
                    },
                    {
                      rotateY: animatedValue.interpolate({
                        inputRange: [0, 0.5, 0.9, 1],
                        outputRange: ['0deg', '180deg', '180deg', '180deg'],
                      }),
                    },
                  ],
                  opacity: animatedValue.interpolate({
                    inputRange: [0, 0.05, 0.9, 1],
                    outputRange: [1, 0, 0, 1],
                  }),
                },
              ]}>
              <Text style={styles.btnText}>{'>'}</Text>
            </Animated.View>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 8,
    paddingBottom: 50,
  },
  btn: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#34626c',
  },
  btn1: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 50,
    lineHeight: 54,
    color: 'white',
  },
});

SliderPerspective.name = '/slider-perspective';
SliderPerspective.title = 'Slider Perspective';

export default SliderPerspective;
