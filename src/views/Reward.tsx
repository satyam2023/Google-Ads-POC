import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color} from '../libs/ColorConstant';
import {commonStyles} from '../libs/commonStyle';
import {CONST_STRING} from '../libs/StringConstant';
import { IRewardStyle } from '../model/IStyle';

interface IReward {
  loaded: boolean;
  seeReward:()=>void;
}

const Reward = ({loaded,seeReward}: IReward) => {
  return (
    <View style={styles.conatiner}>
      {loaded ? (
        <Pressable style={commonStyles.btnBox} onPress={seeReward}>
          <Text style={styles.text}>{CONST_STRING.SEE_REWARD }</Text>
        </Pressable>
      ) : (
        <Text style={styles.text}>{CONST_STRING.NO_REWARD}</Text>
      )}
    </View>
  );
};

export default Reward;

const styles = StyleSheet.create<IRewardStyle>({
  conatiner: {
    flex: 1,
    backgroundColor: Color.lightBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});
