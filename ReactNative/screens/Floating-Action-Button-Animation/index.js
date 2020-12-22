import React from 'react';
import {View, Text} from 'react-native';
import FloatingButton from './floatingButton';

const FloatingActionButtonAnimation = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FloatingButton bottom={80} right={50} />
    </View>
  );
};

FloatingActionButtonAnimation.name = '/floating-action-button-animation';
FloatingActionButtonAnimation.title = 'Floating Action Button Animation';

export default FloatingActionButtonAnimation;
