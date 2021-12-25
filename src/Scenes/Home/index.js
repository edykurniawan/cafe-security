import React, {useState} from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const Home = ({navigation}) => {
  const [isDevice, setIsdevice] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textheader}>Status</Text>
      <View style={styles.content}>
        <View style={styles.modulesection}>
          <Image
            source={require('../../Assets/micro.png')}
            style={styles.imgmodule}
          />
          <Text>Module</Text>
        </View>
        <View style={styles.tempsection}>
          <Image
            source={require('../../Assets/temp.png')}
            style={styles.imgtemp}
          />
          <Text>Temperature</Text>
          <Text style={styles.textvalue}>25°C</Text>
        </View>
      </View>
      <View style={styles.smokesection}>
        <View style={styles.textsection}>
          <Text style={styles.textsmoke}>Smoke Sensor</Text>
          <Text>Value</Text>
        </View>
        <View style={styles.imgsection}>
          <Image
            source={require('../../Assets/smoke.png')}
            style={styles.imgsmoke}
          />
        </View>
      </View>
      <Image
        source={require('../../Assets/backImg.png')}
        style={styles.backimg}
      />
    </SafeAreaView>
  );
};

export default Home;
