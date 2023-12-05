import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#407BFF",
    alignItems: 'center',
    paddingHorizontal: 40,
    justifyContent: 'center'
  },

  header:{
    flexDirection: 'row',
    backgroundColor: '#2e2e2e',
    justifyContent: 'center',
    height: 225,
  },

  LigarOFF:{
    marginTop: 16,
    justifyContent: 'center',
  },

  textON:{
    paddingLeft: 40,
    fontSize: 18,
    fontWeight: 'bold',
  },

  switch:{
    position: 'absolute',
    left: 180,
    top: 75,
    transform: [{scaleX: 2.0}, {scaleY: 2.0}]
  },

  camf:{
    width: '100%',
    height: '100%',
    position: 'absolute'
  },

  registro:{
    position: 'absolute',
    bottom: 0,
   left: 0,
    right: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: 80,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },

  registroText:{
    fontWeight: 'bold',
    fontSize: 17,
    left: 15
  },

  bottomSheet:{
    backgroundColor: 'white',
    height: 75,
    position: 'absolute',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 20,
    justifyContent: 'center',
  },

  contentBottom:{
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },

  textBottom:{
    left: 22,
    fontWeight: 'bold',
    fontSize: 18,
  },

  textBottomContent:{
    left: 20,
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
    marginBottom: 25,
  },

  sair:{
    left:0,
    right: 0,
    height: 30,
    top: 0,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  sairMarca:{
    height: 7,
    width: 75,
    borderRadius: 10,
    backgroundColor: '#000',
  },

  voltar:{
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 43,
    left: 25
  },
  
  textb:{
    color: '#fff',
    fontWeight: 'bold'
  },

primaryTilt:{
  marginTop: 40,
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 23,
  color: '#fff',
  fontFamily: fonts.text,
},

secondaryTilt:{
  marginLeft: 40,
  fontSize: 15,
  fontFamily: fonts.text,
},

alerta:{
  borderTopLeftRadius: 200,
  borderTopRightRadius: 200,
  marginTop: 30,
  height: 465,
  backgroundColor: '#fff',
  alignItems: 'center'
},

alertaDesligado:{
  borderTopLeftRadius: 200,
  borderTopRightRadius: 200,
  marginTop: 115,
  height: 465,
  alignItems: 'center',
  justifyContent: 'center'
},

alertaNot:{
  borderTopLeftRadius: 200,
  borderTopRightRadius: 200,
  marginTop: 30,
  height: 465,
  backgroundColor: '#fff',
  alignItems: 'center'
},

camera:{
  width: 420,
  height: 420,
  right: 2,
},

desligarON: {
  alignItems: 'center',
  top: 25,
},
switchContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  transform: [{scaleX: 2.0}, {scaleY: 2.0}]
},
Text:{
  fontSize: 10
},

textMovimento:{
  fontSize: 20,
  fontWeight: 'bold',
  bottom: -50,
},

textDesligado:{
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 150,
},

puxar:{
  height: 7,
  width: 75,
  borderRadius: 10,
  backgroundColor: '#D9D9D9',
  left: 160,
  marginBottom: 5
},

mostrarInfo:{
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'center',
  borderRadius: 10,
  backgroundColor: '#005BFF',
  borderWidth: 1,
  width: 100,
  height: 60,
  elevation: 20,
  top: 350,
  position: 'absolute'
},

textInfo:{
  color: 'white',
  fontSize: 22,
  fontWeight: 'bold'
},

mostrarInfoAlerta:{
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'center',
  borderRadius: 10,
  backgroundColor: '#BA0606',
  borderWidth: 1,
  width: 100,
  height: 60,
  elevation: 20,
  top: 350,
  position: 'absolute'
},

textInfoAlerta:{
  color: 'white',
  fontSize: 22,
  fontWeight: 'bold'
},
})