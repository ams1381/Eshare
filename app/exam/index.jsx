import { SafeAreaView, StyleSheet, Text, TouchableNativeFeedback, View } from "react-native"
import { useState } from "react";
import { BottomTabBar } from "../../components/common/Tabbar";
import HeaderComponent from "../../components/common/Header";
import { Drawer } from "../../components/common/Drawer";
import { CommonStyles } from "../../styles/CommonStyles";
import { Icon } from "../../components/common/Icon";

export default ExamPage = () => {
    const [ SideDrawerOpen , setSideDrawerOpen ] = useState(false);
    const [ ExamType , setExamType ] = useState(null);
  return (
    <SafeAreaView>
      <View style={CommonStyles.container}>
        <HeaderComponent setSideDrawerOpen={setSideDrawerOpen} headerText='آزمون' />
        { <View style={{ position : 'absolute' , top : 0 , zIndex : 99999 }}>
          <Drawer drawerActive={SideDrawerOpen} setSideDrawerOpen={setSideDrawerOpen} />
          </View>  }
          <View style={ExamContentStyle.ContentContainer}>
            <TouchableNativeFeedback  style={{ borderRadius : 40 }}>
                <View style={ExamContentStyle.ExamOption}>
                    <Icon name={'images'} />
                    <Text>آزمون تصویری</Text>
                </View>
            </TouchableNativeFeedback>
             <TouchableNativeFeedback style={{ borderRadius : 40 }}>
                <View style={ExamContentStyle.ExamOption}>
                  <Icon name={'Video'} />
                  <Text>آزمون ویدیویی</Text>
                </View>
             </TouchableNativeFeedback>
             
          </View>
      </View>
      <BottomTabBar currentTab={'exam'} />
    </SafeAreaView>
    
  );
}
const ExamContentStyle = StyleSheet.create({
    ContentContainer : {
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        marginTop : 20,
        gap : 15
    },
    ExamOption : {
      width : 350,
      height : 75,
      borderRadius : 40,
      borderColor : '#53535349',
      borderWidth : 1,
      display : "flex",
      justifyContent : 'center',
      flexDirection : 'row',
      alignItems : 'center',
      gap : 10
    }
})