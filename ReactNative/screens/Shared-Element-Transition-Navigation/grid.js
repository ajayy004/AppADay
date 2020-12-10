import React from 'react';
import {View, Text} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {SharedElement} from 'react-navigation-shared-element';

const dataSet = [
  {
    id: 1,
    backgroundColor: '#3797a4',
  },
  {
    id: 2,
    backgroundColor: '#214252',
  },
  {
    id: 3,
    backgroundColor: '#f05454',
  },
  {
    id: 4,
    backgroundColor: '#99a8b2',
  },
  {
    id: 5,
    backgroundColor: '#cee397',
  },
  {
    id: 6,
    backgroundColor: '#8db596',
  },
  {
    id: 7,
    backgroundColor: '#3797a4',
  },
  {
    id: 8,
    backgroundColor: '#214252',
  },
  {
    id: 9,
    backgroundColor: '#f05454',
  },
  {
    id: 10,
    backgroundColor: '#99a8b2',
  },
  {
    id: 11,
    backgroundColor: '#cee397',
  },
  {
    id: 12,
    backgroundColor: '#8db596',
  },
];

const SharedElementTransitionNavigation = ({navigation}) => {
  const FlatListRef = React.createRef();
  return (
    <View style={{flex: 1}}>
      <FlatList
        ref={FlatListRef}
        data={dataSet}
        horizontal={false}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        columnWrapperStyle={{
          justifyContent: 'space-around',
          marginVertical: 10,
        }}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(
                'SharedElementTransitionNavigationDetail',
                item,
              );
            }}>
            <View
              style={{
                flex: 1,
                height: 200,
                width: 200,
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <SharedElement id={`card-${item.id}`}>
                <View
                  style={{
                    position: 'absolute',
                    height: 200,
                    width: 200,
                    top: -200,
                    left: -100,
                    backgroundColor: item.backgroundColor,
                  }}
                />
              </SharedElement>
              <SharedElement id={`card-${item.id}-text`}>
                <Text style={{fontSize: 20}}>Hello {item.id}</Text>
              </SharedElement>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

SharedElementTransitionNavigation.route =
  '/shared-element-transition-navigation-list';
SharedElementTransitionNavigation.title =
  'Shared Element Transition Navigation';

export default SharedElementTransitionNavigation;
