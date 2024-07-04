import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  BannerAd,
  BannerAdSize,
  GAMBannerAd,
} from 'react-native-google-mobile-ads';
import {CONST_STRING} from '../libs/StringConstant';
import {commonStyles} from '../libs/commonStyle';
import {IBannerStyle} from '../model/IStyle';

interface IBanner {
  adUnitId: string;
  adUnitId2: string;
  movetoHomeScreen: () => void;
}

const Banner = ({adUnitId, adUnitId2, movetoHomeScreen}: IBanner) => {
  return (
    <View style={styles.container}>
      <>
        <Text style={styles.text}>{CONST_STRING.NRML_BANNER}</Text>
        <BannerAd
          unitId={adUnitId}
          size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          requestOptions={{
            networkExtras: {
              collapsible: 'bottom',
            },
          }}
        />
      </>
      <>
        <Text style={styles.text}>{CONST_STRING.GM_BANNER}</Text>
        <GAMBannerAd
          unitId={adUnitId2}
          sizes={[BannerAdSize.ANCHORED_ADAPTIVE_BANNER]}
        />
        <Pressable onPress={movetoHomeScreen} style={commonStyles.btnBox}>
          <Text style={styles.text}>{CONST_STRING.GO_TO_HOME}</Text>
        </Pressable>
      </>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create<IBannerStyle>({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 30,
    color: 'orange',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
