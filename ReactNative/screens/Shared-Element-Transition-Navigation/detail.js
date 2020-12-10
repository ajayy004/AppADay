import React, {useRef} from 'react';
import {View, Text, Animated} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

const SharedElementTransitionNavigationDetail = ({route, navigation}) => {
  const {params} = route;
  const mountedAnimation = useRef(new Animated.Value(0)).current;
  const translateY = mountedAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 0],
  });

  React.useEffect(() => {
    Animated.timing(mountedAnimation, {
      toValue: 1,
      duration: 500,
      delay: 100,
      useNativeDriver: true,
    }).start();
  });
  return (
    <View style={{flex: 1}}>
      <SharedElement id={`card-${params.id}`}>
        <View
          style={{
            height: 200,
            backgroundColor: params.backgroundColor,
            alignItems: 'center',
          }}
        />
      </SharedElement>
      <View style={{alignItems: 'flex-start'}}>
        <SharedElement id={`card-${params.id}-text`}>
          <Text
            style={{
              fontSize: 20,
            }}>
            Hello
          </Text>
        </SharedElement>
      </View>
      <Animated.View
        style={{
          marginHorizontal: 20,
          opacity: mountedAnimation,
          transform: [{translateY}],
        }}>
        <Text style={{fontSize: 20, marginVertical: 50}}>
          What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
          and typesetting industry Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s when an unknown printer took a galley
          of type and scrambled it to make a type specimen book it has?
        </Text>
        <Text style={{fontSize: 20}}>
          What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
          and typesetting industry Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s when an unknown printer took a galley
          of type and scrambled it to make a type specimen book it has?
        </Text>
      </Animated.View>
    </View>
  );
};

SharedElementTransitionNavigationDetail.sharedElements = (
  route,
  otherRoute,
  showing,
) => {
  const {id} = route.params;
  return [
    {
      id: `card-${id}`,
      animation: 'move',
      resize: 'none',
      align: 'left-top',
    },
    {
      id: `card-${id}-text`,
      animation: 'move',
      resize: 'none',
      align: 'left-top',
    },
    ,
  ];
};

SharedElementTransitionNavigationDetail.route =
  '/shared-element-transition-navigation-detail';
SharedElementTransitionNavigationDetail.title =
  'SharedElementTransitionNavigationDetail';

export default SharedElementTransitionNavigationDetail;
