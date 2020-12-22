import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

export default ({bottom, right}) => {
  const animate = useRef(new Animated.Value(0)).current;

  const toggleMenu = () => {
    const toValue = this.open ? 0 : 1;
    Animated.spring(animate, {
      toValue,
      fraction: 5,
      useNativeDriver: false,
    }).start();
    this.open = !this.open;
  };

  const pinStyle = (value = -80) => ({
    transform: [
      {
        scale: animate,
      },
      {
        translateY: animate.interpolate({
          inputRange: [0, 1],
          outputRange: [0, value],
        }),
      },
    ],
  });

  const opacity = animate.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0, 1],
  });

  return (
    <View style={[styles.container, {bottom, right}]}>
      <TouchableWithoutFeedback>
        <Animated.View
          style={[styles.button, styles.secondary, pinStyle(-200), opacity]}>
          <Text style={[styles.text, styles.secondaryText]}>C</Text>
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback>
        <Animated.View
          style={[styles.button, styles.secondary, pinStyle(-140), opacity]}>
          <Text style={[styles.text, styles.secondaryText]}>B</Text>
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback>
        <Animated.View
          style={[styles.button, styles.secondary, pinStyle(-80), opacity]}>
          <Text style={[styles.text, styles.secondaryText]}>A</Text>
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={toggleMenu}>
        <Animated.View
          style={[
            styles.button,
            styles.primary,
            {
              transform: [
                {
                  rotate: animate.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '45deg'],
                  }),
                },
              ],
            },
          ]}>
          <Text style={[styles.text]}>+</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  button: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 10,
    shadowColor: '#9f5f80',
    shadowOpacity: 0.5,
    shadowOffset: {height: 10},
  },
  primary: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    backgroundColor: '#654062',
  },
  text: {
    color: '#fff',
    fontSize: 36,
    lineHeight: 40,
  },
  secondary: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    backgroundColor: '#fff',
  },
  secondaryText: {
    color: '#654062',
    fontSize: 22,
    lineHeight: 26,
  },
});
