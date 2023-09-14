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

    menu:{
      position: 'absolute',
      left: 20,
      top: -25,
  },

  body:{
    left: 20,
    right: 20,
    top: 20,
    width: '90%',
    height: 700,
    backgroundColor: '#E7F7ED',
    borderRadius: 5,
},

    primaryTilt:{
      marginTop: 15,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 23,
      fontFamily: fonts.text,
  },

  secondaryTilt:{
      textAlign:'center',
      alignItems: 'center',
      marginTop: 40,
      height: 40,
      fontSize: 17,
      fontFamily: fonts.text,
      backgroundColor: '#fff',
  },

    textoIcon:{
      color: 'white',
      fontSize: 18,
    },
    row:{
      flexDirection: 'row',
    },

})


