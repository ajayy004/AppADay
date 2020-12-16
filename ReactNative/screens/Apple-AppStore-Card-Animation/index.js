import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import Card from './card';
import Modal from './modal';

const cardStyle = [
  {
    height: 200,
    backgroundColor: '#c8e7ff',
    margin: 10,
    title: 'New year 2020',
  },
  {
    height: 200,
    backgroundColor: '#fde2e4',
    margin: 10,
    title: 'App of the year 2020',
  },
  {
    height: 200,
    backgroundColor: '#82c0cc',
    margin: 10,
    title: 'Testing',
  },
];

const AppleAppStoreCardAnimation = () => {
  const [activeModal, setActiveModal] = useState(null);

  const _open = (app, position) => {
    setActiveModal({app, position});
  };

  const _close = () => {
    setActiveModal(null);
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        {cardStyle.map((row, key) => (
          <Card
            {...{key}}
            style={row}
            {...{app: row, open: _open, activeAppId: 0}}
          />
        ))}
      </ScrollView>
      {activeModal != null && <Modal {...activeModal} onClose={_close} />}
    </View>
  );
};

AppleAppStoreCardAnimation.name = '/apple-app-store-card-animation';
AppleAppStoreCardAnimation.title = 'Apple App Store Card Animation';

export default AppleAppStoreCardAnimation;
