import {useState, useEffect} from 'react';
import {firebase} from '@react-native-firebase/database';
import axios from 'axios';

const database = firebase
  .app()
  .database('https://iot-cafe-security-default-rtdb.firebaseio.com/');

const useCafe = () => {
  const [gas_value, setGas_value] = useState(0);
  const [status, setStatus] = useState(false);
  const [temperature, setTemperature] = useState(30);
  const [data, setData] = useState([]);
  const [person, setPerson] = useState(0);

  useEffect(() => {
    handleGetstatus();
    handleGetsmoke();
    handleGettemperature();
    handlegGetphoto();
    handleGetPerson();
  }, []);

  const handlegGetphoto = () => {
    axios
      .get('https://esp32server.herokuapp.com/api/photos?date=2022-02-16')
      .then(function (res) {
        // console.log(res.data);
        const data = res.data;
        const fixdata = data.reverse();
        setData(fixdata);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleGetPerson = () => {
    database.ref('/data/person').on('value', snapshot => {
      setPerson(snapshot.val());
    });
  };

  const handleGetsmoke = () => {
    database.ref('/data/gas_value').on('value', snapshot => {
      setGas_value(snapshot.val());
    });
  };

  const handleUpdatestatus = () => {
    setStatus(!status);
    database
      .ref('/control')
      .update({
        status: status ? 0 : 1,
      })
      .then(console.log('data update'));
  };

  const handleGettemperature = () => {
    database.ref('/data/temperature').on('value', snapshot => {
      setTemperature(snapshot.val());
    });
  };

  const handleGetstatus = () => {
    database.ref('/data/motion').once('value', snapshot => {
      setStatus(snapshot.val() === 1 ? true : false);
    });
  };

  return {gas_value, status, temperature, handleUpdatestatus, data, person};
};

export default useCafe;
