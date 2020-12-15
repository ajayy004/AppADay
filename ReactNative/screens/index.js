import TwitterHeaderAnimation from './Twitter-Header-Animation';
import AppleAppStoreCardAnimation from './Apple-AppStore-Card-Animation';
import AirbnbHeaderAnimation from './Airbnb-Header-Animation';
import SharedElementTransitionNavigation from './Shared-Element-Transition-Navigation';
import SliderPerspective from './Slider-Perspective';
import TwitterAppLoader from './Twitter-App-Loader';

export default [
  {
    name: TwitterAppLoader.name,
    title: TwitterAppLoader.title,
    component: TwitterAppLoader,
    path: TwitterAppLoader.route,
    options: {
      title: TwitterAppLoader.title,
    },
  },
  {
    name: SliderPerspective.title,
    component: SliderPerspective,
    path: SliderPerspective.route,
    options: {
      headerShown: false,
    },
  },
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
