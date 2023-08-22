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

  export default function Entrar() {
    const navigation= useNavigation();

    const [opped, setLogged] = useState(0);
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');

    async function entrar(){      
      const obj = { nome, senha };
      const res = await api.post('pam3etim/bd/login/login.php', obj);

      if(res.data.result === 'Dados Incorretos!'){
        Alert.alert('Ops!', 'Dados Incorretos!');
      }else{
        
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }]
        });
      }

    }

   
    const checkLogin = async () => {
      const user = await AsyncStorage.getItem('@user');
      
      if(user){
        setLogged(1);
  
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      } else {
        setLogged(2)
      }
    }
  
    useEffect(() => {
      checkLogin();
    }, []);
  

    return(
      <View style={styles.container}>
      <StatusBar translucent hidden />

      <Image style={styles.logo} source={require('../../assets/login1.png')} />

      <Text style={styles.textLogo}>Login</Text>
      
      <View style={styles.form}>
        <TextInput
          style={styles.login}
          placeholder="Nome"
          value={nome}
          onChangeText={ (nome) => setNome(nome)}
        />

        <TextInput
          secureTextEntry={true}
          style={styles.login}
          placeholder="Senha"
          value={senha}
          onChangeText={ (senha) => setSenha(senha)}
        />

        <TouchableOpacity
          style={styles.loginSave}
          onPress={entrar}
        >
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
    )
  }