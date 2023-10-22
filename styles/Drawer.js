import { StyleSheet } from "react-native";

export const DrawerStyles = StyleSheet.create({
    DrawerContainer : {
        width : 250 ,
        position : 'fixed',
        boxShadow : '-10px 0 10px black' , 
        top : 0,
        zIndex : 5655,
        height : 3000,
        backgroundColor : 'white',
        shadowColor: "#000",
        elevation: 5,
        shadowRadius: 6,
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowColor: '#000',
        shadowOpacity: 0.26,
  
    },
    DrawerHeader : {
      padding : 10,
      borderBottomColor : 'gray',
      borderBottomWidth : 1,
      display : 'flex',
      flexDirection : 'row',
      justifyContent : 'flex-end'
    },
    DrawerClose : {
      fontSize : 20
    },
    DrawerItem : {
      padding : 5,
      borderBottomColor : '#00000035',
      borderBottomWidth : 1,
      fontFamily : 'IRANSANS'
    }
})