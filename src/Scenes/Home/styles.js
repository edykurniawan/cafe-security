import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  TextHeader: {
    fontSize: RFValue(20),
    margin: width * 0.07,
    color: 'black',
    fontWeight: 'bold',
  },
  Content: {
    alignItems: 'center',
  },
  CardTemp: {
    // backgroundColor: 'red',
    marginVertical: width * 0.1,
    width: width * 0.7,
    height: width * 0.19,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.22,
    elevation: 2,
    flexDirection: 'row',
    padding: width * 0.03,
  },
  Img: {
    width: width * 0.1,
    height: width * 0.1,
    marginLeft: width * 0.08,
    marginRight: width * 0.03,
  },
  TextValue: {
    fontWeight: 'bold',
  },
  Btn: {
    backgroundColor: '#565697',
    width: width * 0.5,
    height: width * 0.6,
    borderRadius: 50,
    marginVertical: width * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImgBtn: {
    width: width * 0.4,
    height: width * 0.25,
  },
  TextBtn: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: RFValue(16),
    marginTop: width * 0.02,
  },
  DeviceCondition: {
    flexDirection: 'row',
  },
  TextDevice: isDevice => ({
    fontWeight: 'bold',
    color: isDevice ? 'green' : 'red',
  }),
});
