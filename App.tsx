import React, {useEffect} from 'react';
import Routes from './src/routes';
import {AdEventType, AppOpenAd, TestIds} from 'react-native-google-mobile-ads';

function App(): React.JSX.Element {
  const appOpenAd = AppOpenAd.createForAdRequest(TestIds.APP_OPEN, {
    requestNonPersonalizedAdsOnly: true,
  });
  appOpenAd.addAdEventListener(AdEventType.LOADED, () => {
    appOpenAd.show();
  });
  useEffect(() => {
    appOpenAd.load();
  }, []);
  return <Routes />;
}

export default App;
