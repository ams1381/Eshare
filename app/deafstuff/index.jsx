import { SafeAreaView, StyleSheet, Text, TouchableNativeFeedback, View } from "react-native"
import { useState } from "react";
import { BottomTabBar } from "../../components/common/Tabbar";
import { Drawer } from "../../components/common/Drawer";
import HeaderComponent from "../../components/common/Header";
import { CommonStyles } from "../../styles/CommonStyles";
import { Icon } from "../../components/common/Icon";


export default ExamPage = () => {
    const [ SideDrawerOpen , setSideDrawerOpen ] = useState(false);
  return (
    <SafeAreaView>
      <View style={CommonStyles.container}>
        <HeaderComponent setSideDrawerOpen={setSideDrawerOpen} headerText='امور ناشنوایان' />
        { <View style={{ position : 'absolute' , top : 0 , zIndex : 99999 }}>
          <Drawer drawerActive={SideDrawerOpen} setSideDrawerOpen={setSideDrawerOpen} />
          </View>  }
          <View style={DeafPageStyles.deafContentContainer}>
            <View style={DeafPageStyles.deafItemContainer}>
            <TouchableNativeFeedback>
                <View style={DeafPageStyles.deafItem}>
                    <View style={DeafPageStyles.deafItemTextContainer}>
                    <Text style={DeafPageStyles.deafItemText}>سرود ناشنوایان</Text> 
                    </View>
                    <Icon name={'Music'} />
                </View>
                </TouchableNativeFeedback>
            </View>
       
      
            <View style={DeafPageStyles.deafItemContainer}>
            <TouchableNativeFeedback>
                <View style={DeafPageStyles.deafItem}>
                    <View style={DeafPageStyles.deafItemTextContainer}>
                        <Text style={DeafPageStyles.deafItemText}>مکالمه</Text>
                    </View>
                    <Icon name={'messages'} />
                </View>
                </TouchableNativeFeedback>
            </View>
        
            <View style={DeafPageStyles.deafItemContainer}>
            <TouchableNativeFeedback>
                <View style={DeafPageStyles.deafItem}>
                    <View style={DeafPageStyles.deafItemTextContainer}>
                        <Text style={DeafPageStyles.deafItemText}>زبان اشاره ایرانی</Text>   
                    </View>
                    <Icon name={'signLang'} />
                </View>
                </TouchableNativeFeedback>
            </View>
            <View style={DeafPageStyles.deafItemContainer}>
            <TouchableNativeFeedback>
                <View style={DeafPageStyles.deafItem}>
                    <View style={DeafPageStyles.deafItemTextContainer}>
                        <Text style={DeafPageStyles.deafItemText}>شخصیت ها</Text>
                    </View>
                    <Icon name={'characters'} />
                </View>  
                </TouchableNativeFeedback>
            </View>
        
        
      </View>
      <BottomTabBar currentTab={'deaf'} />
      </View>
     
     
    </SafeAreaView>
    
  );
}
export const DeafPageStyles = StyleSheet.create({
    deafContentContainer : {
        rowGap : 7 ,
        marginTop : 30,
        alignItems : 'center'
    } ,
    deafItemContainer : {
        padding : 1.5,
        borderColor : '#53535349',
        borderWidth : 0.7,
        borderTopRightRadius : 30 ,
        borderBottomLeftRadius : 30,
        width : '85%',
        overflow : 'hidden'
    },
    deafItem : {
        backgroundColor : '#d4e6ff' ,
        flexDirection : 'row-reverse',
        justifyContent : 'center',
        alignItems : 'center',
        borderColor : '#53535349',
        borderWidth : 0.7,
        borderTopRightRadius : 30 ,
        borderBottomLeftRadius : 30,
        gap : 30,
        // padding : '14px 94px',
        width : '100%',
        height : 67
    },
    deafItemTextContainer : {
        width : '60%'
    },
    deafItemText : {
        fontSize : 20 ,
        color : '#535353'
    }
})