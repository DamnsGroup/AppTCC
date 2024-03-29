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
    marginTop: 30,
    justifyContent: 'center'
  },

  imagemTermometro:{
    width: 200,
    height: 455,
    transform: [{ rotateX: '180deg' }],
    left: 25,
    bottom: 150,
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

  teste:{
    width: 100,
    height: 100,
    backgroundColor: '#fff'
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
    top: 19,
    left: 25
  },

  temperature:{
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
    top: 225,
    height: 465,
    backgroundColor: '#4971AD',
    alignItems: 'center',
  },

  temperatureNot:{
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
    top: 225,
    height: 465,
    backgroundColor: '#D41717',
    alignItems: 'center',
  },

  textb:{
    fontWeight: 'bold'
  },

  primaryTilt:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 27,
    fontFamily: fonts.text,
  },

  secondaryTilt:{
    marginLeft: 40,
    fontSize: 15,
    fontFamily: fonts.text,
  },

primaryTilt:{
  marginTop: 15,
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 23,
  fontFamily: fonts.text,
},

secondaryTilt:{
  marginLeft: 40,
  fontSize: 15,
  fontFamily: fonts.text,
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


