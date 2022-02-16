import React, {useState} from 'react';
<<<<<<< HEAD
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
=======
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Button,
  ScrollView,
} from 'react-native';
>>>>>>> 1a0de415ab4060b2a66be37e2730413e9535e491
import styles from './styles';
import useCafe from './useCafe';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';

const Item = props => {
  const {temperature} = useCafe();
  return (
    <Collapse style={styles.collapsecontainer}>
      <CollapseHeader>
        <View style={styles.collapseheader}>
          <View style={styles.textsection}>
            <Text style={styles.textcollapse}>Motion Detected</Text>
            <Text style={styles.texttime}>2 hours ago</Text>
          </View>
<<<<<<< HEAD
          <View>
            <MaterialCommunityIcons
              name="chevron-down"
              size={40}
              color={'white'}
            />
=======
        </CollapseHeader>
        <CollapseBody>
          <View style={styles.imgsection}>
            <Image source={{uri: props.img}} style={styles.img} />
>>>>>>> 1a0de415ab4060b2a66be37e2730413e9535e491
          </View>
        </View>
      </CollapseHeader>
      <CollapseBody>
        <View style={styles.imgsection}>
          <Image source={{uri: props.img}} style={styles.img} />
        </View>
        <View style={styles.desc}>
          <View style={styles.infosection}>
            <View style={styles.timesection}>
              <Text style={styles.time}>12.00</Text>
              <View style={styles.line} />
              <View style={styles.datesection}>
                <Text style={styles.date}>12 Desember</Text>
                <Text style={styles.day}>Senin</Text>
              </View>
            </View>
            <View style={styles.temperaturesection}>
              <View style={styles.infosection}>
                <Image
                  source={require('../../Assets/temp.png')}
                  style={styles.tempimg}
                />
                <Text style={styles.textvalue}>{temperature.toFixed(1)}°C</Text>
              </View>
              <Text style={styles.texttemp}>Temperature</Text>
            </View>
          </View>
        </View>
      </CollapseBody>
    </Collapse>
  );
};

const Monitoring = () => {
  const {data} = useCafe();
  console.log(data);
  return (
    <ScrollView>
      <Text style={styles.textheader}>Capture History</Text>
      <View style={styles.contensection}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <Item img={item.photo} />}
        />
      </View>
    </ScrollView>
  );
};

export default Monitoring;