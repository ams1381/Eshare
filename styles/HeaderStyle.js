import { StyleSheet } from "react-native";

export const HeaderStyles = StyleSheet.create({
    container : {
        width : '100%',
        display : 'flex' ,
        justifyContent : 'center',
        alignItems : 'center',
        height : 150,
        gap : 20,
        
    },
    HeaderBg : {
        // flex : 1,
        maxWidth : '100%',
        height : 150,
        position : 'absolute',
        top : 0,
        right : 0,
        zIndex : -5
    },
    HeaderTopPart : {
        width : '95%' ,
        display : "flex",
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        margin : '0 auto',
        padding : '9px 8px'
    },
    HeaderIconPack : {
        display : "flex",
        flexDirection : 'row',
        gap : 10 ,
        alignItems : 'center' ,
        height : 35,
    },
    HeaderTitle : {
        color : 'white',
        fontSize: 35,
        textAlign : 'center',
        fontFamily : 'IRANSANS'
    }
})