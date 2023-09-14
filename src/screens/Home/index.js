import React, { useEffect, useState } from 'react';
import { styles } from './style';
import { AntDesign } from '@expo/vector-icons';

import {SafeAreaView, Text, View, ScrollView, TouchableOpacity, Image, ActivityIndicator, RefreshControl, StatusBar, Alert} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { MaterialIcons } from '@expo/vector-icons';
//import Load from '../../components/Load';
import { DrawerActions, useNavigation } from '@react-navigation/core';
import api from '../../services/api';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import DrawerRoutes from '../../routes/drawer.routes';
import { useIsFocused } from '@react-navigation/native';
import CustomDrawer from '../../components/CustomDrawer';
import { set } from 'react-native-reanimated';


export default function Home() {
    const navigation= useNavigation();
    const [quantGas, setQuantGas] = useState([]);
    const [quantIncendio, setQuantIncendio] = useState([]);
    const [quantSensor, setQuantSensor] = useState([]);
    const [quantEletricidade, setQuantEletricidade] = useState([]);
    const [showAlertButtonGas, setShowAlertButtonGas] = useState(false);
    const [showAlertButtonIncendio, setShowAlertButtonIncendio] = useState(false);
    const [showAlertButtonSensor, setShowAlertButtonSensor] = useState(false);
    const [showAlertButtonEletricidade, setShowAlertButtonEletricidade] = useState(false);

    async function incendio(){      

        navigation.reset({
          index: 0,
          routes: [{ name: 'Incendio' }]
        });
    }

    async function sensor(){      

        navigation.reset({
          index: 0,
          routes: [{ name: 'Sensor' }]
        });
    }

    async function gas(){      

        navigation.reset({
          index: 0,
          routes: [{ name: 'Gas' }]
        });
    }

    async function eletricidade(){      

        navigation.reset({
          index: 0,
          routes: [{ name: 'Eletricidade' }]
        });
    }

    
      async function fetchPageGas() {
          try {
            const response = await api.get(`pam3etim/bd/usuarios/vazamento.php`);
          setQuantGas(response.data.resultado); // Substitua pelo nome real do campo no seu banco de dados
          
          const quantiGas = response.data.resultado.map(item => item.quantidade);
          if (quantiGas > 11) {
            setShowAlertButtonGas(true);
          } else {
            setShowAlertButtonGas(false);
          }
        }
          catch (error) {
            console.log(error);
          }
        }

      async function fetchPageIncendio() {
        try {
          const response = await api.get(`pam3etim/bd/usuarios/dados.php`);
         setQuantIncendio(response.data.resultado); // Substitua pelo nome real do campo no seu banco de dados
        
         const quantiIncendio = response.data.resultado.map(item => item.temperatura);
         if (quantiIncendio > 11) {
           setShowAlertButtonIncendio(true);
         } else {
           setShowAlertButtonIncendio(false);
        }
      }
         catch (error) {
          console.log(error);
        }
      }

      async function fetchPageEletricidade() {
        try {
          const response = await api.get(`pam3etim/bd/usuarios/voltagem.php`);
        setQuantEletricidade(response.data.resultado); // Substitua pelo nome real do campo no seu banco de dados
        
        const quantiEletricidade = response.data.resultado.map(item => item.voltagem);
        if (quantiEletricidade > 11) {
          setShowAlertButtonEletricidade(true);
        } else {
          setShowAlertButtonEletricidade(false);
        }
      }
        catch (error) {
          console.log(error);
        }
      }

    async function fetchPageSensor() {
      try {
        const response = await api.get(`pam3etim/bd/usuarios/proximidade.php`);
       setQuantSensor(response.data.resultado); // Substitua pelo nome real do campo no seu banco de dados
      
       const quantiSensor = response.data.resultado.map(item => item.deteccao);
       if (quantiSensor > 11) {
         setShowAlertButtonSensor(true);
       } else {
         setShowAlertButtonSensor(false);
      }
    }
       catch (error) {
        console.log(error);
      }
    }
    
      useEffect(() => {
        fetchPageGas(); // Busque o valor do alerta quando a tela for carregada
        fetchPageIncendio();
        fetchPageEletricidade();
        fetchPageSensor();
      }, []);

    return (
        <View style={{ flex: 1 }}
        >
            <StatusBar barStyle="light-content" />
            <View style={{ flex: 1, backgroundColor: '#fff'}}>
                <View style={styles.header}
             
                >
                <Text style={styles.primaryTilt}>Olá, Cliente!</Text>
                        
                        <Text style={styles.secondaryTilt}>Bem vindo a sua casa segura:</Text>
                    <View style={styles.containerHeader}>
                        
                        <TouchableOpacity
                            style={styles.menu}
                            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                            
                        >
                            <AntDesign name="appstore1" size={35} color="black" />
                        </TouchableOpacity>

                    </View>
                </View>   
            <View style={styles.body}>
                <View style={styles.painel}></View>
                <Text style={styles.painelTilt}>Painel para acessar as informações da sua casa</Text>
                <TouchableOpacity  onPress={eletricidade} style={styles.painelEletricidade}><Text style={styles.painelText}>Eletricidade</Text></TouchableOpacity>
                <TouchableOpacity  onPress={gas} style={styles.painelGas}><Text style={styles.painelText}>Gás</Text></TouchableOpacity>
                <TouchableOpacity  onPress={sensor} style={styles.painelSensor}><Text style={styles.painelText}>Sensor</Text></TouchableOpacity>
                <TouchableOpacity  onPress={incendio} style={styles.painelIncendio}><Text style={styles.painelText}>Incêncio</Text></TouchableOpacity>
                {showAlertButtonGas && (
                <TouchableOpacity  onPress={gas} style={styles.alerta}><Text style={styles.painelAlerta}>verificar</Text></TouchableOpacity>
                )}
                {showAlertButtonIncendio && (
                <TouchableOpacity  onPress={incendio} style={styles.alerta}><Text style={styles.painelAlerta}>verificar</Text></TouchableOpacity>
                )}
                {showAlertButtonSensor && (
                <TouchableOpacity  onPress={sensor} style={styles.alerta}><Text style={styles.painelAlerta}>verificar</Text></TouchableOpacity>
                )}
                {showAlertButtonEletricidade && (
                <TouchableOpacity  onPress={eletricidade} style={styles.alerta}><Text style={styles.painelAlerta}>verificar</Text></TouchableOpacity>
                )}
            </View>
            </View>
        </View>
    )
}