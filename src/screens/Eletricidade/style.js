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

    form:{
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },

    login:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#FFF',
      width: '100%',
      height: 50,
      paddingLeft: 3,
      borderBottomWidth: 1,
      borderBottomColor: '#C1C1C1',
      marginBottom: 10,
    },

    menu:{
      position: 'absolute',
      left: 20,
      top: -25,
  },

  body:{
    left: 20,
    right: 20,
    top: 45,
    width: '90%',
    height: 700,
    backgroundColor: '#E7F7ED',
    borderRadius: 5,
},

grafic:{
  textAlign:'center',
  alignItems: 'center',
  marginBottom: 20,
  height: 40,
  fontSize: 16,
  fontFamily: fonts.text,
  backgroundColor: '#fff',

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

    loginSave:{
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
      marginTop: 15,
      width: '100%',
      height: 55,
      borderRadius: 25,
      marginBottom: 15,
    },

    text:{
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      fontFamily: fonts.text,
    },

    textFirst:{
      color: '#fff',
      fontSize: 25,
      marginTop: 35,
    },

    textSecond:{
      color: '#fff',
      fontSize: 25 ,
      marginBottom: 25,
    },

    logo:{
      width: 350,
      height: 350,
      marginTop: -20,
      marginBottom: 35
    },

    textoIcon:{
      color: 'white',
      fontSize: 18,
    },

    google:{
      flexDirection: 'row',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1656ec',
      borderRadius: 5,
      width: 50,
      marginTop: 10,
    },

    apple:{
      flexDirection: 'row',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1656ec',
      borderRadius: 5,
      width: 50,
      marginTop: 10,
      marginLeft: 10,
    },

    row:{
      flexDirection: 'row',
    },

    forget:{
      color: '#737373',
      fontSize: 14,
      marginTop: 40,
    },

    textRow:{
      alignSelf: 'center',
      fontFamily: fonts.text,
      fontSize: 16,
      color: 'black',
      marginTop: 5,
      marginRight: 5,
    },

    traco:{
      marginTop: 10,
      borderTopWidth: 1,
      borderTopColor: '#C1C1C1',
      width: '80%',
    },

    signup:{
      color: '#737373',
    },

    signupQ:{
      color: 'black',
    },

})


