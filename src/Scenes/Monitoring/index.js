import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import styles from './styles';
import useCafe from './useCafe';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Item = props => {
  return (
    <View>
      <Text>{props.id}</Text>
      <Image style={{width: 50, height: 50}} source={{uri: props.img}} />
    </View>
  );
};

const Monitoring = () => {
  const {data} = useCafe();

  return (
    <View>
      <Text style={styles.textheader}>Capture History</Text>
      <TouchableOpacity>
        <MaterialCommunityIcons name="chevron-down" size={40} color={'white'} />
      </TouchableOpacity>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <Item img={item.photo} />}
      />
    </View>
  );
};

export default Monitoring;
