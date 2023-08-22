import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {Image, TextInput, AsyncStorage, Modal, Alert, Linking, Text, TouchableOpacity, View } from 'react-native';
import SwipeableRow from '../../Linhas/Usuarios';
import api from '../../../services/api';
import url from '../../../services/url';
import { styles } from './style';
import { showMessage, hideMessage } from "react-native-flash-message";
import { EvilIcons, MaterialIcons, AntDesign, Ionicons } from '@expo/vector-icons';
//import * as ImagePicker from 'expo-image-picker';

const DadosProps= {
    data: {
        cod_gas: string,
        quantidade: string,
        tipo: string,                
    }
}


CardUsuarios = ({ data }= DadosProps) => {
   
    const [abrirModal, setAbrirModal] = useState(false);
    const navigation= any = useNavigation();
        
      
    return (
        <>
            {data.cod_gas === undefined && data.quantidade === undefined ?
               
               <Text style={{ color: '#000', fontSize: 13, marginTop:10, alignContent:"center", textAlign:"center" }}>Nenhum Registro Encontrado :(</Text>
                
                :

                <View>
                
                        <View
                            style={styles.box}
                            onPress={() => setAbrirModal(true)}
                        >     
                             <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', marginTop:-5}}>                       
                             <View style={{width:65}}>
                              <Image style={{width:50, height:50, }} source={{uri:(url + 'apiModelo/imagem.jpg')}} />
                              </View>
                              <View style={{ width: '90%', right: 20, top:12, justifyContent:'space-between' }}>
                            <Text style={{ color: '#000', fontSize:13,  }}>Registro {data.cod_gas}:  vazamento {data.quantidade}</Text>
                                </View>
                            </View>
                                
                        </View>    
                </View>
            }



<Modal 
        visible={abrirModal}
        animationType={'fade'}
        transparent={true}
        onRequestClose={() => {
          setAbrirModal(!abrirModal)
        }}
      >
          <View style={styles.centralizarModal}>
         <View style={styles.CardContainerModal}>
         <TouchableOpacity
              style={styles.removeItem}
              onPress={() => setAbrirModal(false)}
            >
              <EvilIcons name="close" size={25} color="black" />
            </TouchableOpacity>
         <Text style={styles.Cliente}>{data.nome} - {data.cidade}</Text>
                

                <View style={styles.Section}>
                    <MaterialIcons style={styles.Icon} name="people-outline" size={22} color="#c1c1c1" />
                                      
                </View>              
            

               
                <View style={styles.Section}>
                    <MaterialIcons style={styles.Icon} name="mail" size={22} color="#c1c1c1" />
                </View>              


                 <TouchableOpacity onPress={() => Linking.openURL(url + 'painel/images/perfil/' + data.foto)}>
                            {(() => {
                                if (data.foto != 'sem-foto.jpg' && data.foto != '' && data.foto != null) {

                                    return (
                                        <View style={styles.viewImg}>
                                            <Image style={styles.ImagemModal} source={{ uri: (url + 'painel/images/perfil/' + data.foto) }} />
                                            <Text style={styles.textoAbrir}>(Clique para Abrir)</Text>
                                        </View>
                                    )

                                }

                            })()}
                        </TouchableOpacity>
             </View>
             </View>
          </Modal>



        </>
    );
}

export default CardUsuarios;