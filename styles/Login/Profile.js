import { StyleSheet } from "react-native";

export const ProfileInfoStyles = StyleSheet.create({
    Container : {
        width : '100%',
        justifyContent : 'center',
        alignItems : 'center'
    },
    InnerContainer : {
        width : '90%',
        marginTop : 20 ,
        justifyContent : 'center',
        rowGap : 10
    },
    ProfileItem : {
        width : '100%',
        flexDirection : 'row-reverse',
        justifyContent : 'center',
        gap : 10,
        height : 46
    },
    ProfileItemTextContainer : {
        width : '20%',
        alignItems : 'flex-start',
        justifyContent : 'center'
    },
    ProfileItemInputContainer : {
        width : '50%',
        justifyContent : 'center',
        textAlign : 'right',
        direction : 'rtl'
    },
    ProfileItemInputInnerContainer : {
        width : '100%',
        height : 46,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#d4e6ff',
        borderRadius : 18,
    },
    ProfileItemInput : {
        backgroundColor : '#d4e6ff',
        borderColor : '#fff',
        borderWidth : 2,
        color : '#535353',
        borderRadius : 15,
        width : '96%',
        height : 38,
        paddingRight : 10,
        paddingLeft : 10
    },
    ProfileSaveButtonContainer : {
        width : '22%',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 15,
        marginTop : 10 ,
        height : 38,
        borderColor : '#d4e6ff',
        borderWidth : 3,
        overflow : 'hidden'
    },
    SaveButtonInnerContainer : {
        width : '100%',
        height : '100%',
        justifyContent : 'center',
        alignItems : 'center'
    }
})