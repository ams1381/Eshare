import { StyleSheet } from "react-native";

export const TabStyles = StyleSheet.create({
    TabsContainer : {
        width : '100%' ,
        position : 'absolute',
        bottom : 10, 
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        overflow : 'hidden'
    },
    TabInnerContainer : {
        width : '93%',
        height : 77 ,
        margin : '0 auto',
        borderRadius : 40,
        borderColor : '#818b93',
        borderWidth : 1,
        display : "flex",
        alignItems : 'center',
        flexDirection : 'row',
        justifyContent : 'space-around',
        overflow : 'hidden'
    },
    TabItem : {
        display : 'flex',
        width : '25%' ,
        height : '100%',
        flexDirection : 'column-reverse',
        alignItems : 'center',
        rowGap : 8 ,
        justifyContent : 'center',
        fontFamily : 'IRANSANS',
    }
})