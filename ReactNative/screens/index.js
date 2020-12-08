import TwitterHeaderAnimation from './Twitter-Header-Animation';
import AppleAppStoreCardAnimation from './Apple-AppStore-Card-Animation';

export default [
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

export {TwitterHeaderAnimation, AppleAppStoreCardAnimation};
