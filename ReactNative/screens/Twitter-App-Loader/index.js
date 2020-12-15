import React, {useState, useRef} from 'react';
import {View, Image, StyleSheet, Animated, Text} from 'react-native';

const TwitterAppLoader = () => {
  const twitter = useRef(new Animated.Value(1)).current;
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    Animated.timing(twitter, {
      toValue: 30,
      delay: 1000,
      duration: 300,
      useNativeDriver: true,
    }).start(({finished}) => {
      if (finished) {
        setLoading(false);
      }
    });
  }, [twitter]);

  if (!loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
      </View>
    );
  }
  return (
    <Animated.View
      style={[
        styles.container,
        styles.loadingScreen,
        {transform: [{scale: twitter}]},
      ]}>
      <Image style={styles.image} source={require('./twitter.png')} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingScreen: {
    backgroundColor: '#1da1f2',
  },
  image: {
    height: 200,
    width: 200,
    alignSelf: 'center',
  },
  title: {
    fontSize: 30,
  },
});

TwitterAppLoader.route = '/twitter-app-loader';
TwitterAppLoader.title = 'Twitter App Loader';
TwitterAppLoader.name = 'twitter-app-loader';

export default TwitterAppLoader;
