import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color} from '../libs/ColorConstant';
import { IHomeStyle } from '../model/IStyle';

interface IHome {
  data: string[];
  handleNavigation: (idx: number) => void;
}

export default function Home({data, handleNavigation}: IHome) {
  const renderItem = ({item, index}: {item: string; index: number}) => {
    return (
      <Pressable
        style={styles.itemContainer}
        onPress={() => handleNavigation(index)}>
        <Text style={styles.text}>{item}</Text>
      </Pressable>
    );
  };

  const footer=()=><View style={styles.footer}/>

  return (
    <FlatList 
      data={data} 
      renderItem={renderItem}
      style={styles.container} 
      ListFooterComponent={footer}
      showsVerticalScrollIndicator={false}
     />
  );
}

const styles = StyleSheet.create<IHomeStyle>({
  itemContainer: {
    flex: 1,
    backgroundColor: Color.grey,
    borderWidth: 2,
    borderColor: Color.black,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 100,
    borderRadius:20,
    marginTop:30
  },
  container: {
    flex: 1,
    backgroundColor: Color.lightBlue,
    paddingHorizontal: 20,
  },
  text: {
    fontSize:30,
    fontWeight:'600',
    textAlign: 'center',
    color: Color.black,
  },
  footer:{
    height:70
  }
});
