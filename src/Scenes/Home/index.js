import React, {useState} from 'react';
import {View, Text, SafeAreaView, Image, Switch} from 'react-native';
import styles from './styles';
import useCafe from '../Monitoring/useCafe';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = () => {
  const {status, temperature, gas_value, handleUpdatestatus, person} =
    useCafe();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textheader}>Status</Text>
      <View style={styles.content}>
        <View style={styles.modulesection}>
          <Image
            source={require('../../Assets/micro.png')}
            style={styles.imgmodule}
          />
          <Text style={styles.textmodule(status)}>
            {status ? 'esp32-cam Connected' : 'Disconnect'}
          </Text>
          <Switch
            trackColor={{false: '#767577', true: '#767577'}}
            thumbColor={status ? '#764D34' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={handleUpdatestatus}
            value={status}
          />
        </View>
        <View style={styles.tempsection}>
          <Image
            source={require('../../Assets/temp.png')}
            style={styles.imgtemp}
          />
          <Text>Temperature</Text>
          <Text style={styles.textvalue}>{temperature.toFixed(1)}°C</Text>
        </View>
      </View>
      <View style={styles.bottomsection}>
        <View style={styles.personsection}>
          <View style={styles.textsection}>
            <Text style={styles.textsmoke}>Person</Text>
            <Text style={styles.valuesmoke}>{person}</Text>
          </View>
          <View style={styles.imgsection}>
            <Ionicons name="person" size={20} style={styles.iconperson} />
          </View>
        </View>
        <View style={styles.smokesection}>
          <View style={styles.textsection}>
            <Text style={styles.textsmoke}>Smoke Sensor</Text>
            <Text style={styles.valuesmoke}>{gas_value}</Text>
          </View>
          <View style={styles.imgsection}>
            <Image
              source={require('../../Assets/smoke.png')}
              style={styles.imgsmoke}
            />
          </View>
        </View>
      </View>

      <View style={styles.backimgsection}>
        <Image
          source={require('../../Assets/backImg.png')}
          style={styles.backimg}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
