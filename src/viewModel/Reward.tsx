import {useEffect, useState} from 'react';
import {
    AdEventType,
  RewardedAd,
  RewardedAdEventType,
  RewardedInterstitialAd,
  TestIds,
} from 'react-native-google-mobile-ads';
import Reward from '../views/Reward';

const RewardViewModel = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const rewarded = RewardedInterstitialAd.createForAdRequest(TestIds.REWARDED_INTERSTITIAL, {
    requestNonPersonalizedAdsOnly: true,
  });

  rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
   setLoaded(true);
  });



  useEffect(() => {
    rewarded.load();
  },[]);

  const seeReward = () => rewarded.show();

  return (
    <Reward
      {...{
        loaded,
        seeReward,
      }}
    />
  );
};

export default RewardViewModel;
