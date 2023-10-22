import { StyleSheet } from "react-native";

export const LoginForm = StyleSheet.create({
    FormContainer : {
      width : '100%',
      marginTop : 50,
      alignItems : "center",
      justifyContent : 'center'
    } ,
    InputContainer : {
      width : '85%' ,
      position : 'relative' ,
      borderRadius : 24,
      height : 55,
      flexDirection : 'row',
      alignItems : 'center',
      justifyContent : 'space-between',
      elevation: 5,
      shadowRadius: 6,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowColor: '#000',
      shadowOpacity: 0.26,
    },
    LoginInput : {
      height : '100%' ,
      width : '100%' ,
      borderRadius : 24,
      alignContent : "center",
      justifyContent : 'center',
      backgroundColor : '#f9f9f9',
      padding : '0 25px 0 20px',
      textAlign : 'center',
      
    },
    PhoneIcon : {
      position : 'absolute',
      top : 15,
      right : 15
    },
    ConfirmButton : {
      width: 168, 
      backgroundColor: '#3585cc', 
      height : 50 , 
      marginTop : 16,
      borderRadius: 24 ,
      alignItems : "center",
      justifyContent : 'center',
      elevation : 3,
      shadowColor : '#000' ,
      shadowOpacity: 0.26,
    }
  })
  