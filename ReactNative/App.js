import 'react-native-gesture-handler';
import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import screens from './screens';

const Stack = createStackNavigator();

const HomeScreen = ({navigation}) => (
  <FlatList
    contentContainerStyle={styles.contentContainerStyle}
    data={screens}
    keyExtractor={(_, key) => key.toString()}
    renderItem={({item}) => (
      <TouchableOpacity
        activeOpacity={0.4}
        style={styles.button}
        onPress={() => navigation.navigate(item.name)}>
        <Text style={styles.buttonText}>{item.name}</Text>
      </TouchableOpacity>
    )}
  />
);

const App = () => {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          primary: '#fdfffc',
          card: '#006d77',
          text: '#fdfffc',
        },
      }}>
      <Stack.Navigator
        screenOptions={({route, navigation}) => ({
          headerShown: 'screen',
        })}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        {screens.map((row, key) => (
          <Stack.Screen {...row} {...{key}} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {},
  button: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#e1e1e1',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
  },
});

export default App;
