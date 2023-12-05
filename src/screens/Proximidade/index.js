import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState, useRef } from "react";
import { styles } from './style';
import { ScrollView, Text, ActivityIndicator, FlatList, Image, Switch, TextInput, TouchableOpacity, View, StatusBar, Dimensions, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Header from '../../components/Header';
import api from '../../services/api';
import Grid from '../../components/Grids/proximidade';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Modal from 'react-native-modal';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import LottieView from 'lottie-react-native';

export default function Usuario() {

  const navigation = useNavigation();
  const [quant, setQuant] = useState([]);
  const [showAlertButton, setShowAlertButton] = useState([]);
  const [lista, setLista] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [busca, setBusca] = useState("");
  const [onEndReachedCalledDuringMomentum, setMT] = useState(true);

  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

  const toggleBottomSheet = () => {
    setBottomSheetVisible(!isBottomSheetVisible);
  };
    const [valor, setValor] = useState(false);
  
    const toggleSwitch = () => {
      const novoValor = !valor;
      setValor(novoValor);
      
      // Chame a função NewValue para enviar o novo valor para o caminho desejado.
      NewValue(novoValor);
    };
  
    // Função para enviar o novo valor para o servidor
    const NewValue = async (novoValor) => {
      try {
        const obj = { valor: novoValor ? 1 : 0 };
        console.log(obj);
        console.log(valor);
        const res = await api.post('tcc/dados/onoff.php', obj);
        // Lida com a resposta da API, se necessário
        console.log('Resposta da API:', res.data);
      } catch (error) {
        // Lida com erros da API, se ocorrerem
        console.error('Erro ao enviar valor para a API:', error);
      }
    };

  async function home() {

    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }]
    });
  }


  async function loadData() {
    try {
      const response = await api.get(`tcc/dados/proximidade.php?pagina=${page}&limite=10`);

      if (lista.length >= response.data.totalItems) return;

      if (loading === true) return;

      setLoading(true);

      setLista([...lista, ...response.data.resultado]);
      setPage(page + 1);
    } catch (error) {
      console.log(error)
    }
  }


  const renderItem = function ({ item }) {
    return (
      <Grid
        data={item}
      />
    )
  }

  function Footer() {
    if (!load) return null;

    return (
      <View style={styles.loading}>
        <ActivityIndicator size={25} color="#000" />
      </View>
    )
  }

  async function fetchPage() {
    try {
      const response = await api.get(`tcc/registro/proximidade.php`);
      setQuant(response.data.resultado); // Substitua pelo nome real do campo no seu banco de dados

      const quanti = response.data.resultado.map(item => item.proximidade_info);
      if (quanti == 'Movimento detectado') {
        setShowAlertButton(0);
      }
      else {
        setShowAlertButton(1);
      }
    }
    catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    fetchPage();
    loadData();

  }, [page, totalItems, lista]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', }}>
      <StatusBar barStyle="light-content" />
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.header}>
          <Image style={styles.camf} source={require('../../assets/camf.png')}/>
          <TouchableOpacity style={styles.voltar} onPress={home}>
            <AntDesign name="left" size={24} color="white" />
            <Text style={styles.textb}>Voltar</Text>
          </TouchableOpacity>
          <Text style={styles.primaryTilt}>Movimento</Text>
        </View>
        <View style={styles.LigarOFF}>
          <Text style={styles.textON}>Caso necessário, ative ou desative</Text>
          <Text style={styles.textON}>o sensor de proximidade</Text>
          <View style={styles.desligarON}>
            <View style={styles.switchContainer}>
              <Text style={styles.Text}>{valor ? '' : ''}</Text>
              <Switch
                value={valor}
                onValueChange={toggleSwitch}
              />
            </View>
         </View>
        </View>
        {showAlertButton === 0 ? (
          <View style={styles.alertaNot}>
            <Text style={styles.textMovimento}>MOVIMENTO DETECTADO</Text>
            <LottieView
              source={require('../../assets/animation5.json')}
              style={styles.imagemEletricidade2}
              autoPlay={true}
              loop={false}
            />
          </View>
        ) : showAlertButton === 1 ?(
          <View style={styles.alerta}>
            <Text style={styles.textMovimento}>NENHUM MOVIMENTO DETECTADO</Text>
            <Image style={styles.camera} source={require('../../assets/cam.gif')} />
          </View>
        ) : (
          <View style={styles.alertaDesligado}>
            <Text style={styles.textDesligado}>SISTEMA DESLIGADO</Text>
          </View>
        )}

        <TouchableOpacity onPress={toggleBottomSheet} style={styles.bottomSheet}>
          <View style={styles.puxar}></View>
          <Text style={styles.textBottom}>Registros</Text>
        </TouchableOpacity>
        <Modal
          isVisible={isBottomSheetVisible}
          style={{ justifyContent: 'flex-end', margin: 0 }}
          onBackdropPress={toggleBottomSheet}
        >
          <View style={styles.contentBottom}>
            <TouchableOpacity onPress={toggleBottomSheet}>
              <View style={styles.sair}>
                <View style={styles.sairMarca}></View>
              </View>
              <Text style={styles.textBottomContent}>Registros</Text>
            </TouchableOpacity>
            <FlatList
              data={lista}
              renderItem={renderItem}
              keyExtractor={item => String(item.id)}
              onEndReachedThreshold={0.1}
              removeClippedSubviews
              initialNumToRender={10}
              onEndReached={(distanceFromEnd) => {
                if (!onEndReachedCalledDuringMomentum) {
                  loadData().then(() => setLoading(false));
                  setMT(true);
                }
              }}
              ListFooterComponent={(distanceFromEnd) => {
                if (!onEndReachedCalledDuringMomentum) {
                  return <Footer load={loading} />
                } else {
                  return <View></View>
                }
              }}
              onMomentumScrollBegin={() => setMT(false)}
              windowSize={10}
              getItemLayout={(data, index) => (
                { length: 50, offset: 50 * index, index }
              )}
            />
          </View>
        </Modal>
      </View>
    </View>
  )
}