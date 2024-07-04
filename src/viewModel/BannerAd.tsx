import {TestIds} from 'react-native-google-mobile-ads';
import Banner from '../views/Banner';
import { useState } from 'react';

const BannerViewModel = (props:any) => {
  const adUnitId = __DEV__
    ? TestIds.ADAPTIVE_BANNER
    : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';
  const adUnitId2 = __DEV__ ? TestIds.GAM_BANNER : '/xxx/yyyy';

  const movetoHomeScreen=()=>{
    props.navigation.goBack();
  }
 

  return (
    <Banner
      {...{
        adUnitId,
        adUnitId2,
        movetoHomeScreen
      }}
    />
  );
};

export default BannerViewModel;
