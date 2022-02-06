import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  contensection: {
    alignItems: 'center',
  },
  collapsecontainer: {
    marginVertical: width * 0.01,
  },
  textheader: {
    fontSize: RFValue(28),
    margin: width * 0.07,
    color: 'black',
    fontWeight: 'bold',
  },
  collapseheader: {
    height: width * 0.14,
    backgroundColor: '#764D34',
    alignItems: 'center',
    paddingHorizontal: width * 0.04,
    flexDirection: 'row',
    width: width * 0.8,
    borderRadius: 20,
  },
  collapseheadertrue: {
    height: width * 0.14,
    backgroundColor: '#764D34',
    alignItems: 'center',
    paddingHorizontal: width * 0.04,
    flexDirection: 'row',
    width: width * 0.8,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  textsection: {
    flex: 1,
  },
  textcollapse: {
    color: 'white',
    fontSize: RFValue(18),
    fontWeight: 'bold',
  },
  texttime: {
    color: 'white',
    fontSize: RFValue(10),
  },
  img: {
    width: width * 0.8,
    height: width * 0.5,
  },
  infosection: {
    // justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  timesection: {
    flexDirection: 'row',
    margin: width * 0.05,
    flex: 1,
    marginLeft: width * 0.07,
  },
  time: {
    color: '#717171',
    fontWeight: 'bold',
    fontSize: RFValue(22),
  },
  line: {
    width: width * 0.005,
    backgroundColor: '#C5C5C5',
    height: width * 0.06,
    marginHorizontal: width * 0.02,
  },
  date: {
    fontSize: RFValue(10),
    color: '#717171',
  },
  day: {
    fontSize: RFValue(10),
    color: '#717171',
  },
  temperaturesection: {
    margin: width * 0.04,
    marginRight: width * 0.07,
  },
  textvalue: {
    fontSize: RFValue(13),
    color: '#717171',
  },
  texttemp: {
    fontSize: RFValue(13),
    color: '#717171',
  },
  tempimg: {
    width: width * 0.04,
    height: width * 0.04,
    marginTop: width * 0.001,
  },
});
