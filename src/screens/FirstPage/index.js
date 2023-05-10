import { useNavigation } from "@react-navigation/native";
import React, {useEffect, useState} from "react";
import {styles} from './style';
import {
    TouchableOpacity,
    View,
    Text,
    TextInput,
    Image,
    StatusBar,
    Alert,
  } from 'react-native';

  import AsyncStorage from "@react-native-async-storage/async-storage";
  
  
  //import { Splash } from '../../lotties/Splash'; 
  import api from '../../services/api';

  export default function Login() {
    const navigation= useNavigation();

    const [logged, setLogged] = useState(0);

    async function login(){      

        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }]
        });
    }
  

    return(
      <View style={styles.container}>
      <StatusBar translucent hidden />

      <Image style={styles.logo} source={require('../../assets/casebre.png')} />
      <Text style={styles.textFirst}>
      Tornando o seu
      </Text>
      <Text style={styles.textSecond}>
      lar mais seguro!
      </Text>
      <View style={styles.form}>
        <TouchableOpacity
          style={styles.loginSave}
          onPress={login}
        >
          <Text style={styles.text}>Conectar-Se</Text>
        </TouchableOpacity>
      </View>
    </View>
    )
  }