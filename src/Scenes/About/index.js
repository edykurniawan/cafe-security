import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';

const About = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textheader}>About</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.titlesection}>
          <Text style={styles.texttitle}>Judul </Text>
          <Text style={styles.desctitle}>
            Sistem Keamanan Kedai Kopi berbasis Internet of Things Dengan
            Menggunakan Aplikasi Android
          </Text>
        </View>
        <View style={styles.namesection}>
          <Text style={styles.textname}>Nama </Text>
          <Text style={styles.descname}>Edy Kurniawan Nur</Text>
        </View>
        <View style={styles.nimsection}>
          <Text style={styles.textnim}>NIM </Text>
          <Text style={styles.descnim}>17111022</Text>
        </View>
        <View style={styles.instansisection}>
          <Text style={styles.textinstansi}>Instansi </Text>
          <Text style={styles.descinstansi}>
            Universitas Mercu Buana Yogyakarta
          </Text>
        </View>
      </View>
    </View>
  );
};

export default About;
