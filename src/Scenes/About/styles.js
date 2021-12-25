import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    width: width,
    height: width * 0.21,
    backgroundColor: '#764D34',
    justifyContent: 'center',
  },
  textheader: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: RFValue(28),
    marginHorizontal: width * 0.07,
  },
  content: {
    margin: width * 0.1,
  },
  titlesection: {
    flexDirection: 'row',
  },
  texttitle: {
    fontSize: RFValue(15),
    color: 'black',
    marginHorizontal: width * 0.02,
  },
  desctitle: {
    fontSize: RFValue(15),
    color: 'black',
    width: width * 0.6,
    marginHorizontal: width * 0.05,
  },
  namesection: {
    flexDirection: 'row',
    marginVertical: width * 0.05,
  },
  textname: {
    color: 'black',
    fontSize: RFValue(15),
    marginHorizontal: width * 0.02,
  },
  descname: {
    fontSize: RFValue(15),
    color: 'black',
    width: width * 0.6,
    marginHorizontal: width * 0.04,
  },
  nimsection: {
    flexDirection: 'row',
  },
  textnim: {
    color: 'black',
    fontSize: RFValue(15),
    marginHorizontal: width * 0.02,
  },
  descnim: {
    fontSize: RFValue(15),
    color: 'black',
    width: width * 0.6,
    marginHorizontal: width * 0.07,
  },
  instansisection: {
    flexDirection: 'row',
    marginVertical: width * 0.05,
  },
  textinstansi: {
    color: 'black',
    fontSize: RFValue(15),
    marginHorizontal: width * 0.02,
  },
  descinstansi: {
    fontSize: RFValue(15),
    color: 'black',
    width: width * 0.6,
  },
});
