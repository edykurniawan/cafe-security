import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  textheader: {
    fontSize: RFValue(28),
    margin: width * 0.07,
    color: 'black',
    fontWeight: 'bold',
  },
});
