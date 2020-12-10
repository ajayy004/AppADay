import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {Easing} from 'react-native';
import Grid from './grid';
import Detail from './detail';

const Stack = createSharedElementStackNavigator();

const SharedElementTransitionNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={({route, navigation}) => ({
        headerShown: false,
      })}>
      <Stack.Screen name={Grid.name} component={Grid} />
      <Stack.Screen
        name={Detail.name}
        component={Detail}
        options={{
          header: {mode: false},
          headerShown: false,
          gestureEnabled: false,
          transitionSpec: {
            open: {
              animation: 'timing',
              config: {duration: 350, easing: Easing.inOut(Easing.ease)},
            },
            close: {
              animation: 'timing',
              config: {duration: 350, easing: Easing.inOut(Easing.ease)},
            },
          },
          cardStyleInterpolator: ({current: {progress}}) => {
            return {
              cardStyle: {
                opacity: progress,
              },
            };
          },
        }}
      />
    </Stack.Navigator>
  );
};

SharedElementTransitionNavigation.route =
  '/shared-element-transition-navigation-list';
SharedElementTransitionNavigation.title =
  'Shared Element Transition Navigation';

export default SharedElementTransitionNavigation;
