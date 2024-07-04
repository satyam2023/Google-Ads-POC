import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Color } from '../libs/ColorConstant'
import { IInterestialStyle } from '../model/IStyle'
import { CONST_STRING } from '../libs/StringConstant'

const Interestial = () => {
  return (
    <View style={styles.conatiner}>
        <ActivityIndicator size={'large'} color={'red'}/>
        <Text>{CONST_STRING.WAIT}</Text>
    </View>
  )
}

export default Interestial;

const styles = StyleSheet.create<IInterestialStyle>({
    conatiner:{
        flex:1,
        backgroundColor:Color.lightBlue,
        justifyContent:'center',
        alignItems:'center'
    },

})