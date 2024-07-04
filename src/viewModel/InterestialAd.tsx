import {useEffect, useState} from 'react';
import {
  AdEventType,
  InterstitialAd,
  TestIds,
  useInterstitialAd,
} from 'react-native-google-mobile-ads';
import Interestial from '../views/Interestial';

const InterestialViewModel = (props: any) => {
  const interstitial = InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL, {
    requestNonPersonalizedAdsOnly: true,
  });

  interstitial.addAdEventListener(AdEventType.CLOSED, () => {
    props.navigation.goBack();
  });

  interstitial.addAdEventListener(AdEventType.LOADED,()=>{
    interstitial.show();
  })

  useEffect(() => {
    interstitial.load();
  }, []);

  return <Interestial/>;
};

export default InterestialViewModel;
