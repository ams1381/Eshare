import { SafeAreaView, Text, View } from "react-native"
import { useEffect, useState } from "react";
import { BottomTabBar } from "../../components/common/Tabbar";
import HeaderComponent from "../../components/common/Header";
import { Drawer } from "../../components/common/Drawer";
import { CommonStyles } from "../../styles/CommonStyles";
import { Skeleton } from '@rneui/themed';
import { Icon } from "../../components/common/Icon";

export default ExamPage = () => {
  
    const [ SideDrawerOpen , setSideDrawerOpen ] = useState(false);
  return (
    <SafeAreaView>
      <View style={CommonStyles.container}>
        <HeaderComponent setSideDrawerOpen={setSideDrawerOpen} headerText='کلمه' />
        { <View style={{ position : 'absolute' , top : 0 , zIndex : 99999 }}>
          <Drawer drawerActive={SideDrawerOpen} setSideDrawerOpen={setSideDrawerOpen} />
          </View>  }
         
      </View>
      <BottomTabBar currentTab={'word'} />
    </SafeAreaView>
    
  );
}