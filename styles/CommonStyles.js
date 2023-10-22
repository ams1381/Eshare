import { StyleSheet } from "react-native";

export const CommonStyles = StyleSheet.create({
    container: {
      position : 'relative' ,
      height : '100%',
    },
    DrawerMask : {
      width : '100%',
      position : 'fixed',
      top : 0,
      zIndex : -1 ,
      left : 0,
      height : "100%",
      backgroundColor : '#00000065'
    }
  });
  