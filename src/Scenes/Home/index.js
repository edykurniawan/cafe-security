import React, {useState} from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const Home = ({navigation}) => {
  const [isDevice, setIsdevice] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.TextHeader}>Hello...</Text>
      <View style={styles.Content}>
        <View style={styles.CardTemp}>
          <Image source={require('../../Assets/temp.png')} style={styles.Img} />
          <View>
            <Text style={styles.TextValue}>25°</Text>
            <Text>Temperature</Text>
          </View>
        </View>
        <View style={styles.DeviceCondition}>
          <Text>Device :</Text>
          <Text style={styles.TextDevice(isDevice)}>
            {isDevice ? 'active' : 'off'}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.Btn}
          onPress={() => navigation.navigate('Monitoring')}>
          <Image
            source={require('../../Assets/cam.png')}
            style={styles.ImgBtn}
          />
          <Text style={styles.TextBtn}>Start Monitoring</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
