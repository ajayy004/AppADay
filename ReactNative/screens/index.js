import TwitterHeaderAnimation from './Twitter-Header-Animation';
import AppleAppStoreCardAnimation from './Apple-AppStore-Card-Animation';
import AirbnbHeaderAnimation from './Airbnb-Header-Animation';
import SharedElementTransitionNavigation from './Shared-Element-Transition-Navigation';
import SliderPerspective from './Slider-Perspective';
import TwitterAppLoader from './Twitter-App-Loader';

export default [
  {
    component: TwitterAppLoader,
    name: TwitterAppLoader.name,
    options: {
      title: TwitterAppLoader.title,
    },
  },
  {
    component: SliderPerspective,
    name: SliderPerspective.name,
    options: {
      headerShown: false,
      title: SliderPerspective.title,
    },
  },
  {
    component: SharedElementTransitionNavigation,
    name: SharedElementTransitionNavigation.name,
    options: {
      title: SharedElementTransitionNavigation.title,
    },
  },
  {
    component: AirbnbHeaderAnimation,
    name: AirbnbHeaderAnimation.name,
    options: {
      title: AirbnbHeaderAnimation.title,
    },
  },
  {
    component: TwitterHeaderAnimation,
    name: TwitterHeaderAnimation.name,
    options: {
      title: TwitterHeaderAnimation.title,
    },
  },
  {
    component: AppleAppStoreCardAnimation,
    name: AppleAppStoreCardAnimation.name,
    options: {
      title: AppleAppStoreCardAnimation.title,
    },
  },
];

export {
  TwitterHeaderAnimation,
  AppleAppStoreCardAnimation,
  AirbnbHeaderAnimation,
};
