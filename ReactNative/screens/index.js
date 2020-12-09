import TwitterHeaderAnimation from './Twitter-Header-Animation';
import AppleAppStoreCardAnimation from './Apple-AppStore-Card-Animation';
import AirbnbHeaderAnimation from './Airbnb-Header-Animation';

export default [
  {
    name: AirbnbHeaderAnimation.title,
    component: AirbnbHeaderAnimation,
    path: AirbnbHeaderAnimation.route,
    options: {headerShown: false},
  },
  {
    name: TwitterHeaderAnimation.title,
    component: TwitterHeaderAnimation,
    path: TwitterHeaderAnimation.route,
  },
  {
    name: AppleAppStoreCardAnimation.title,
    component: AppleAppStoreCardAnimation,
    path: AppleAppStoreCardAnimation.route,
  },
];

export {
  TwitterHeaderAnimation,
  AppleAppStoreCardAnimation,
  AirbnbHeaderAnimation,
};
