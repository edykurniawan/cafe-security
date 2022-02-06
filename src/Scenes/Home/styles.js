import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: '#ECE0D1',
    flex: 1,
  },
  textheader: {
    fontSize: RFValue(20),
    margin: width * 0.07,
    color: 'black',
    fontWeight: 'bold',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  CardTemp: {
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
  modulesection: {
    width: width * 0.4,
    height: width * 0.4,
    backgroundColor: 'white',
    borderRadius: 20,
    marginHorizontal: width * 0.01,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.22,
    elevation: 2,
  },
  imgmodule: {
    width: width * 0.17,
    height: width * 0.17,
    marginTop: width * 0.03,
  },
  tempsection: {
    width: width * 0.4,
    height: width * 0.4,
    backgroundColor: 'white',
    marginHorizontal: width * 0.01,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.22,
    elevation: 2,
  },
  imgtemp: {
    width: width * 0.17,
    height: width * 0.17,
    marginTop: width * 0.03,
  },
  textvalue: {
    fontWeight: 'bold',
    fontSize: RFValue(20),
  },
  smokesection: {
    width: width * 0.4,
    height: width * 0.1,
    marginHorizontal: width * 0.01,
    backgroundColor: 'white',
    marginVertical: width * 0.06,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.22,
    elevation: 2,
    flexDirection: 'row',
  },
  imgsection: {
    justifyContent: 'center',
  },
  imgsmoke: {
    width: width * 0.07,
    height: width * 0.07,
    marginRight: width * 0.06,
  },
  textsection: {
    justifyContent: 'center',
    marginLeft: width * 0.06,
    flex: 1,
  },
  textsmoke: {
    fontWeight: 'bold',
    fontSize: RFValue(10),
  },
  valuesmoke: {
    fontSize: RFValue(9),
  },
  backimgsection: {
    width: width,
    height: width * 0.9,
    backgroundColor: 'white',
    alignItems: 'center',
    // justifyContent: 'center'
  },
  backimg: {
    width: width * 0.7,
    height: width * 0.7,
  },
  textmodule: status => ({
    marginVertical: width * 0.02,
    color: status ? 'green' : '#515151',
  }),
  bottomsection: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  personsection: {
    width: width * 0.4,
    height: width * 0.1,
    marginHorizontal: width * 0.01,
    backgroundColor: 'white',
    marginVertical: width * 0.06,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.22,
    elevation: 2,
    flexDirection: 'row',
  },
  iconperson: {
    marginRight: width * 0.06,
  },
});
