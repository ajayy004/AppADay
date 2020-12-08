import React from 'react';
import {View, TouchableWithoutFeedback, Text} from 'react-native';

export default ({app, open, style, ...props}) => {
  const _currentRef = React.createRef();
  const _startTransition = () => {
    _currentRef.current.measureInWindow((x, y, width, height) => {
      open(app, {x, y, width, height});
    });
  };

  return (
    <TouchableWithoutFeedback onPress={_startTransition}>
      <View style={[style]} {...props} ref={_currentRef}>
        <Text style={{fontSize: 26, fontWeight: '500', padding: 10}}>
          Hello
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
