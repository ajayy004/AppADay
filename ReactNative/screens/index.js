import TwitterHeaderAnimation from './Twitter-Header-Animation';
import AppleAppStoreCardAnimation from './Apple-AppStore-Card-Animation';
import AirbnbHeaderAnimation from './Airbnb-Header-Animation';
import SharedElementTransitionNavigation from './Shared-Element-Transition-Navigation';

export default [
  {
    name: SharedElementTransitionNavigation.title,
    component: SharedElementTransitionNavigation,
    path: SharedElementTransitionNavigation.route,
  },
  {
    name: AirbnbHeaderAnimation.title,
    component: AirbnbHeaderAnimation,
    path: AirbnbHeaderAnimation.route,
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
